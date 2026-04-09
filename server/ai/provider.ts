import { createOpenAI } from "@ai-sdk/openai";

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";

export function getLanguageModel() {
  const apiKey = process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("MISSING_API_KEY");
  }

  const baseURL = process.env.OPENAI_BASE_URL ?? OPENROUTER_BASE;
  const referer =
    process.env.OPENROUTER_HTTP_REFERER ?? "https://hora-dos-miseraveis-teot2027.vercel.app";
  const title = process.env.OPENROUTER_APP_TITLE ?? "HORA DOS MISERÁVEIS";

  const provider = createOpenAI({
    apiKey,
    baseURL,
    headers: {
      "HTTP-Referer": referer,
      "X-Title": title,
    },
  });

  const modelId =
    process.env.AI_MODEL ?? process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini";

  return provider.chat(modelId);
}
