import type { VercelRequest } from "@vercel/node";

/** Body JSON em Vercel pode vir como objeto, string ou Buffer. */
export function parseVercelJsonBody(req: VercelRequest): unknown {
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
