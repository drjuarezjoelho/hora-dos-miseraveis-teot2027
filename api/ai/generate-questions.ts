import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleGenerateQuestions } from "../../server/ai/handlers";

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
  await handleGenerateQuestions(req.body, res);
}
