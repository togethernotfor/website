import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
export const AI_MODEL = "claude-sonnet-4-5";

export type CardImage = {
  imageBase64: string;
  mimeType: string;
};

/** An upstream failure carrying the status the client should receive. */
export class UpstreamError extends Error {
  status: number;
  constructor(message: string, status = 502) {
    super(message);
    this.name = "UpstreamError";
    this.status = status;
  }
}

/**
 * Verify the shared secret sent by the Our Porch app. Returns an error
 * response to return directly, or null when the request is authorized.
 */
export function checkAuth(req: NextRequest): NextResponse | null {
  const secret = process.env.OUR_PORCH_API_SECRET;
  if (!secret || req.headers.get("x-our-porch-secret") !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Server missing ANTHROPIC_API_KEY" },
      { status: 500 }
    );
  }
  return null;
}

export function extractJson(text: string): any {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("AI response did not contain JSON");
  }
  return JSON.parse(text.slice(start, end + 1));
}

/**
 * Send one or more card images plus a text prompt to Claude and return the
 * parsed JSON object from its reply.
 */
export async function askClaudeAboutCard({
  images,
  system,
  prompt,
  maxTokens = 1024,
}: {
  images: CardImage[];
  system: string;
  prompt: string;
  maxTokens?: number;
}): Promise<any> {
  const content: any[] = images.map((img) => ({
    type: "image",
    source: {
      type: "base64",
      media_type: img.mimeType,
      data: img.imageBase64,
    },
  }));
  content.push({ type: "text", text: prompt });

  const headers: Record<string, string> = {
    "content-type": "application/json",
    "x-api-key": process.env.ANTHROPIC_API_KEY as string,
    "anthropic-version": ANTHROPIC_VERSION,
  };

  // Identity-linked API keys must name the workspace the request acts in.
  // Plain workspace-scoped keys don't need this, so it stays optional.
  if (process.env.ANTHROPIC_WORKSPACE_ID) {
    headers["anthropic-workspace-id"] = process.env.ANTHROPIC_WORKSPACE_ID;
  }

  const res = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    // Pass rate limiting / overload straight through so the app can tell
    // "busy, retry shortly" apart from "the server is broken". Anthropic uses
    // 529 for overloaded, which isn't a valid status to return to a client.
    const status =
      res.status === 429 ? 429 : res.status === 529 ? 503 : 502;
    throw new UpstreamError(
      `Anthropic API error (${res.status}): ${errText || res.statusText}`,
      status
    );
  }

  const data = await res.json();
  const text = data?.content?.[0]?.text;
  if (typeof text !== "string") {
    throw new Error("Unexpected AI response shape");
  }
  return extractJson(text);
}

/**
 * Pull the card images out of a request body, accepting both the single-image
 * shape and the {front, back} shape. Throws if nothing usable is present.
 */
export function imagesFromBody(body: any): CardImage[] {
  const images: CardImage[] = [];
  const push = (img: any) => {
    if (img?.imageBase64 && img?.mimeType) {
      images.push({ imageBase64: img.imageBase64, mimeType: img.mimeType });
    }
  };

  push(body?.front);
  push(body?.back);
  if (images.length === 0) push(body);

  if (images.length === 0) {
    throw new Error("At least one card image (imageBase64 + mimeType) is required");
  }
  return images;
}
