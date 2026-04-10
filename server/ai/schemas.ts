import { z } from "zod";

export const chatBodySchema = z.object({
  mode: z.enum(["tutor", "material"]),
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string().min(1).max(12000),
      }),
    )
    .min(1)
    .max(40),
});

export const generateQuestionsBodySchema = z.object({
  topic: z.string().min(3).max(2000),
  difficulty: z.enum(["moderado", "alto", "brutal"]).optional(),
  count: z.coerce.number().int().min(1).max(5).optional(),
  context: z.string().max(8000).optional(),
});

export const assistGradeBodySchema = z.object({
  questionStem: z.string().max(8000).optional(),
  userAnswer: z.string().min(1).max(12000),
  referenceNotes: z.string().max(12000).optional(),
});

export const generatedQuestionsSchema = z.object({
  questions: z.array(
    z.object({
      stem: z.string(),
      alternatives: z
        .array(
          z.object({
            letter: z.enum(["A", "B", "C", "D", "E"]),
            text: z.string(),
          }),
        )
        .length(5),
      correctLetter: z.enum(["A", "B", "C", "D", "E"]),
      commentary: z.string(),
    }),
  ),
});

export const assistGradeResultSchema = z.object({
  scoreSuggestion: z.number().min(0).max(100),
  strengths: z.array(z.string()),
  gaps: z.array(z.string()),
  improvedAnswer: z.string(),
});
