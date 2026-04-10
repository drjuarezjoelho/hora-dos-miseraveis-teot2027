import { generateText, type ModelMessage } from "ai";
import type { ServerResponse } from "node:http";
import { parseJsonFromModelText } from "./json-from-llm";
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
    "",
    "Responda com APENAS um objeto JSON válido (sem texto antes ou depois). O objeto deve ter a chave \"questions\": array com exatamente " +
      String(count) +
      " itens. Cada item: stem (string), alternatives (array de 5 objetos { letter: A|B|C|D|E, text: string }), correctLetter, commentary.",
  ]
    .filter(Boolean)
    .join("\n\n");

  const systemWithJson = `${QUESTION_GEN_SYSTEM}

Formato obrigatório (exemplo de estrutura):
{"questions":[{"stem":"...","alternatives":[{"letter":"A","text":"..."},{"letter":"B","text":"..."},{"letter":"C","text":"..."},{"letter":"D","text":"..."},{"letter":"E","text":"..."}],"correctLetter":"A","commentary":"..."}]}`;

  try {
    const result = await generateText({
      model,
      system: systemWithJson,
      prompt,
      maxOutputTokens: 8192,
    });

    let raw: unknown;
    try {
      raw = parseJsonFromModelText(result.text);
    } catch (parseErr) {
      console.error("[ai/generate-questions] parse JSON", parseErr, result.text.slice(0, 500));
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          error: "Resposta do modelo não é JSON válido",
          message: parseErr instanceof Error ? parseErr.message : String(parseErr),
        }),
      );
      return;
    }

    const validated = generatedQuestionsSchema.safeParse(raw);
    if (!validated.success) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          error: "JSON não passou na validação",
          details: validated.error.flatten(),
        }),
      );
      return;
    }

    let { questions } = validated.data;
    if (questions.length > count) {
      questions = questions.slice(0, count);
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ questions }));
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

  const systemWithJson = `${ASSIST_GRADE_SYSTEM}

Responda com APENAS um objeto JSON válido com as chaves:
scoreSuggestion (número 0-100), strengths (array de strings), gaps (array de strings), improvedAnswer (string).`;

  try {
    const result = await generateText({
      model,
      system: systemWithJson,
      prompt,
      maxOutputTokens: 4096,
    });

    let raw: unknown;
    try {
      raw = parseJsonFromModelText(result.text);
    } catch (parseErr) {
      console.error("[ai/assist-grade] parse JSON", parseErr, result.text.slice(0, 500));
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          error: "Resposta do modelo não é JSON válido",
          message: parseErr instanceof Error ? parseErr.message : String(parseErr),
        }),
      );
      return;
    }

    const validated = assistGradeResultSchema.safeParse(raw);
    if (!validated.success) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          error: "JSON não passou na validação",
          details: validated.error.flatten(),
        }),
      );
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(validated.data));
  } catch (err) {
    console.error("[ai/assist-grade]", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "Falha na correção assistida", message: String(err) }));
  }
}
