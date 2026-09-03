import { NextRequest, NextResponse } from "next/server";
import {
  askClaudeAboutCard,
  checkAuth,
  imagesFromBody,
  UpstreamError,
} from "@/lib/our-porch/anthropic";

export const runtime = "nodejs";

const SYSTEM_PROMPT =
  "You read business card photos and extract the contact's details. " +
  "You may be given one or two images: the front and the back of the same card. " +
  "Treat them as a single card and merge the information you find across both. " +
  "Respond with ONLY a JSON object, no other text, matching exactly this shape: " +
  '{"name": string | null, "email": string | null, "phone": string | null, ' +
  '"address": string | null, "company": string | null, "title": string | null, ' +
  '"notes": string | null}. ' +
  "Use null for any field the card does not show — never guess or invent values. " +
  "For phone, keep the digits and any leading +, dropping other punctuation. " +
  "For address, join the street, city, state and postal code into one line. " +
  "Put anything else noteworthy (tagline, website, social handles) in notes.";

export async function POST(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  let images;
  try {
    images = imagesFromBody(body);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }

  const sideNote =
    images.length > 1
      ? "These are the front and back of one business card."
      : "This is a business card.";

  let parsed: any;
  try {
    parsed = await askClaudeAboutCard({
      images,
      system: SYSTEM_PROMPT,
      prompt: `${sideNote} Extract the contact details.`,
    });
  } catch (e: any) {
    console.error("[our-porch] Failed to extract card details:", e);
    return NextResponse.json(
      { error: e?.message ?? "Failed to extract card details" },
      { status: e instanceof UpstreamError ? e.status : 502 }
    );
  }

  const str = (v: unknown) =>
    typeof v === "string" && v.trim() ? v.trim() : null;

  return NextResponse.json({
    name: str(parsed.name),
    email: str(parsed.email),
    phone: str(parsed.phone),
    address: str(parsed.address),
    company: str(parsed.company),
    title: str(parsed.title),
    notes: str(parsed.notes),
  });
}
