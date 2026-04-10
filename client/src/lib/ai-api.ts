/** Base path for rotas de IA (mesma origem: Express em produção ou proxy Vite em dev). */
export const AI_API_BASE = "/api/ai";

export async function postChatStream(
  body: { mode: "tutor" | "material"; messages: { role: "user" | "assistant" | "system"; content: string }[] },
  onDelta: (text: string) => void,
): Promise<void> {
  const res = await fetch(`${AI_API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const ct = res.headers.get("content-type") ?? "";

  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const j = (await res.json()) as { error?: string; message?: string };
      if (j.error) msg = j.message ? `${j.error}: ${j.message}` : j.error;
    } catch {
      const t = await res.text();
      if (t) msg = t.slice(0, 500);
    }
    throw new Error(msg);
  }

  if (ct.includes("application/json")) {
    const data = (await res.json()) as { text: string };
    if (typeof data.text !== "string") throw new Error("Resposta inválida do servidor");
    onDelta(data.text);
    return;
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error("Resposta sem corpo");

  const decoder = new TextDecoder();
  let full = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    full += decoder.decode(value, { stream: true });
    onDelta(full);
  }
}

export async function postGenerateQuestions(body: {
  topic: string;
  difficulty?: "moderado" | "alto" | "brutal";
  count?: number;
  context?: string;
}) {
  const res = await fetch(`${AI_API_BASE}/generate-questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error ?? `HTTP ${res.status}`);
  }
  return data as {
    questions: Array<{
      stem: string;
      alternatives: Array<{ letter: string; text: string }>;
      correctLetter: string;
      commentary: string;
    }>;
  };
}

export async function postAssistGrade(body: {
  questionStem?: string;
  userAnswer: string;
  referenceNotes?: string;
}) {
  const res = await fetch(`${AI_API_BASE}/assist-grade`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error ?? `HTTP ${res.status}`);
  }
  return data as {
    scoreSuggestion: number;
    strengths: string[];
    gaps: string[];
    improvedAnswer: string;
  };
}

export async function getAiHealth() {
  const res = await fetch(`${AI_API_BASE}/health`);
  if (!res.ok) return { ok: false as const, aiConfigured: false };
  return (await res.json()) as { ok: boolean; aiConfigured: boolean };
}
