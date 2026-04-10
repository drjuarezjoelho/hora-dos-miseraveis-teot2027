import { generateObject, generateText, zodSchema, type ModelMessage } from "ai";
import type { ServerResponse } from "node:http";
import {
  ASSIST_GRADE_SYSTEM,
  MATERIAL_CHAT_SYSTEM,
  QUESTION_GEN_SYSTEM,
  TUTOR_SYSTEM,
} from "./prompts";
import { getLanguageModel } from "./provider";
import {
  assistGradeBodySchema,
  assistGradeResultSchema,
  chatBodySchema,
  generatedQuestionsSchema,
  generateQuestionsBodySchema,
} from "./schemas";

function mapToModelMessages(
  raw: { role: "user" | "assistant" | "system"; content: string }[],
): ModelMessage[] {
  return raw.map((m) => {
    if (m.role === "system") {
      return { role: "system", content: m.content };
    }
    if (m.role === "assistant") {
      return { role: "assistant", content: m.content };
    }
    return { role: "user", content: m.content };
  });
}

/** Chat completo em JSON — fiável em Vercel Serverless (streaming com pipe* falha frequentemente). */
export async function handleChat(body: unknown, res: ServerResponse): Promise<void> {
  const parsed = chatBodySchema.safeParse(body);
  if (!parsed.success) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Corpo inválido", details: parsed.error.flatten() }));
    return;
  }

  let model;
  try {
    model = getLanguageModel();
  } catch {
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
      JSON.stringify({
        error: "Serviço de IA não configurado",
        hint: "Defina OPENROUTER_API_KEY ou OPENAI_API_KEY no servidor.",
      }),
    );
    return;
  }

  const system = parsed.data.mode === "tutor" ? TUTOR_SYSTEM : MATERIAL_CHAT_SYSTEM;
  const messages = mapToModelMessages(parsed.data.messages);

  try {
    const result = await generateText({
      model,
      system,
      messages,
      maxOutputTokens: 4096,
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ text: result.text }));
  } catch (err) {
    console.error("[ai/chat]", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
      JSON.stringify({
        error: "Falha ao gerar resposta",
        message: err instanceof Error ? err.message : String(err),
      }),
    );
  }
}

export async function handleGenerateQuestions(body: unknown, res: ServerResponse): Promise<void> {
  const parsed = generateQuestionsBodySchema.safeParse(body);
  if (!parsed.success) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Corpo inválido", details: parsed.error.flatten() }));
    return;
  }

  let model;
  try {
    model = getLanguageModel();
  } catch {
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Serviço de IA não configurado" }));
    return;
  }

  const { topic, context } = parsed.data;
  const difficulty = parsed.data.difficulty ?? "alto";
  const count = parsed.data.count ?? 3;

  const prompt = [
    `Tema: ${topic}`,
    `Dificuldade: ${difficulty}`,
    `Quantidade: ${count} questões (múltipla escolha A–E).`,
    context ? `Contexto adicional do aluno:\n${context}` : "",
    "Gere exatamente o número pedido de questões completas com comentário.",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const { object } = await generateObject({
      model,
      system: QUESTION_GEN_SYSTEM,
      prompt,
      schema: zodSchema(generatedQuestionsSchema),
      schemaName: "TeotQuestions",
      schemaDescription: "Lista de questões TEOT estilo múltipla escolha",
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(object));
  } catch (err) {
    console.error("[ai/generate-questions]", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Falha ao gerar questões", message: String(err) }));
  }
}

export async function handleAssistGrade(body: unknown, res: ServerResponse): Promise<void> {
  const parsed = assistGradeBodySchema.safeParse(body);
  if (!parsed.success) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Corpo inválido", details: parsed.error.flatten() }));
    return;
  }

  let model;
  try {
    model = getLanguageModel();
  } catch {
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Serviço de IA não configurado" }));
    return;
  }

  const { questionStem, userAnswer, referenceNotes } = parsed.data;

  const prompt = [
    questionStem ? `Enunciado / pergunta:\n${questionStem}` : "",
    `Resposta do aluno:\n${userAnswer}`,
    referenceNotes ? `Notas de referência (opcional):\n${referenceNotes}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const { object } = await generateObject({
      model,
      system: ASSIST_GRADE_SYSTEM,
      prompt,
      schema: zodSchema(assistGradeResultSchema),
      schemaName: "DiscursiveFeedback",
      schemaDescription: "Feedback estruturado para resposta discursiva TEOT",
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(object));
  } catch (err) {
    console.error("[ai/assist-grade]", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Falha na correção assistida", message: String(err) }));
  }
}
