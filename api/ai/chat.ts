import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleChat } from "../../server/ai/handlers";
import { parseVercelJsonBody } from "../../server/ai/parse-vercel-body";

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
  await handleChat(parseVercelJsonBody(req), res);
}
