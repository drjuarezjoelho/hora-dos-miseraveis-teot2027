import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const hasKey = Boolean(process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY);
  res.status(200).setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: true, aiConfigured: hasKey }));
}
