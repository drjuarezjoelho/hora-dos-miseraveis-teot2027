import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleChat } from "../../server/ai/handlers";

function parseJsonBody(req: VercelRequest): unknown {
  const b = req.body as unknown;
  if (b == null) return undefined;
  if (typeof b === "string") {
    try {
      return JSON.parse(b) as unknown;
    } catch {
      return undefined;
    }
  }
  if (Buffer.isBuffer(b)) {
    try {
      return JSON.parse(b.toString("utf8")) as unknown;
    } catch {
      return undefined;
    }
  }
  return b;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }
  await handleChat(parseJsonBody(req), res);
}
