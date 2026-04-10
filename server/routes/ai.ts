import { Router, type Request, type Response } from "express";
import {
  handleAssistGrade,
  handleChat,
  handleGenerateQuestions,
} from "../ai/handlers";

export const aiRouter = Router();

aiRouter.post("/chat", async (req: Request, res: Response) => {
  await handleChat(req.body, res);
});

aiRouter.post("/generate-questions", async (req: Request, res: Response) => {
  await handleGenerateQuestions(req.body, res);
});

aiRouter.post("/assist-grade", async (req: Request, res: Response) => {
  await handleAssistGrade(req.body, res);
});

aiRouter.get("/health", (_req: Request, res: Response) => {
  const hasKey = Boolean(process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY);
  res.json({ ok: true, aiConfigured: hasKey });
});
