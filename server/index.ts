import express from "express";
import cors from "cors";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { aiRouter } from "./routes/ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const isDev = process.env.NODE_ENV !== "production";
  const port = Number(process.env.PORT) || (isDev ? 8787 : 3000);

  app.use(
    cors(
      isDev
        ? { origin: ["http://localhost:3000", "http://127.0.0.1:3000"], credentials: false }
        : undefined,
    ),
  );
  app.use(express.json({ limit: "512kb" }));

  app.use("/api/ai", aiRouter);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    if (isDev) {
      console.log("API IA: POST /api/ai/chat | /generate-questions | /assist-grade");
    }
  });
}

startServer().catch(console.error);
