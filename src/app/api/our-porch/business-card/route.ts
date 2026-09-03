import { NextRequest, NextResponse } from "next/server";
import {
  askClaudeAboutCard,
  checkAuth,
  imagesFromBody,
  UpstreamError,
} from "@/lib/our-porch/anthropic";

export const runtime = "nodejs";

const SYSTEM_PROMPT =
  "You read business card photos and draft short, warm, professional follow-up emails. " +
  "You may be given one or two images: the front and the back of the same card. " +
  "Treat them as a single card and use information from both. " +
  "Respond with ONLY a JSON object, no other text, matching exactly this shape: " +
  '{"recipient_email": string | null, "subject": string, "body": string}. ' +
  "Extract the recipient's email address from the card if present, otherwise null. " +
  "Keep the email brief (3-5 sentences), reference the conversation naturally, and sign off simply.";

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

  const notes = typeof body?.conversationNotes === "string" ? body.conversationNotes.trim() : "";
  const notesLine = notes
    ? `Here's what we talked about: ${notes}`
    : "No notes were recorded about the conversation.";
  const sideNote =
    images.length > 1
      ? "Here are the front and back of a business card I was just given."
      : "Here's a business card I was just given.";

  let parsed: any;
  try {
    parsed = await askClaudeAboutCard({
      images,
      system: SYSTEM_PROMPT,
      prompt: `${sideNote} ${notesLine} Draft a follow-up email.`,
    });
  } catch (e: any) {
    console.error("[our-porch] Failed to draft follow-up email:", e);
    return NextResponse.json(
      { error: e?.message ?? "Failed to draft follow-up email" },
      { status: e instanceof UpstreamError ? e.status : 502 }
    );
  }

  if (typeof parsed.subject !== "string" || typeof parsed.body !== "string") {
    return NextResponse.json(
      { error: "AI response missing subject/body" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    recipient_email:
      typeof parsed.recipient_email === "string" && parsed.recipient_email
        ? parsed.recipient_email
        : null,
    subject: parsed.subject,
    body: parsed.body,
  });
}
