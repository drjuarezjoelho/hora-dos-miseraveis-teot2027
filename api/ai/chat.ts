import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleChatStream } from "../../server/ai/handlers";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }
  handleChatStream(req.body, res);
}
