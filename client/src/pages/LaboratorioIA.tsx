/* Laboratório de IA — tutor, geração e correção assistida (servidor) */
import { Bot, Loader2, Send, Sparkles, Stethoscope, Wrench } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  getAiHealth,
  postAssistGrade,
  postChatStream,
  postGenerateQuestions,
} from "@/lib/ai-api";

type ChatMsg = { role: "user" | "assistant"; content: string };

export default function LaboratorioIA() {
  const [health, setHealth] = useState<{ ok: boolean; aiConfigured: boolean } | null>(null);

  const [tutorMessages, setTutorMessages] = useState<ChatMsg[]>([]);
  const [materialMessages, setMaterialMessages] = useState<ChatMsg[]>([]);
  const [inputTutor, setInputTutor] = useState("");
  const [inputMaterial, setInputMaterial] = useState("");
  const [loadingTutor, setLoadingTutor] = useState(false);
  const [loadingMaterial, setLoadingMaterial] = useState(false);
  const [streamTutor, setStreamTutor] = useState("");
  const [streamMaterial, setStreamMaterial] = useState("");

  const [genTopic, setGenTopic] = useState("");
  const [genContext, setGenContext] = useState("");
  const [genDifficulty, setGenDifficulty] = useState<"moderado" | "alto" | "brutal">("alto");
  const [genCount, setGenCount] = useState(3);
  const [genLoading, setGenLoading] = useState(false);
  const [genResult, setGenResult] = useState<Awaited<ReturnType<typeof postGenerateQuestions>> | null>(
    null,
  );

  const [gradeStem, setGradeStem] = useState("");
  const [gradeAnswer, setGradeAnswer] = useState("");
  const [gradeRef, setGradeRef] = useState("");
  const [gradeLoading, setGradeLoading] = useState(false);
  const [gradeResult, setGradeResult] = useState<Awaited<ReturnType<typeof postAssistGrade>> | null>(
    null,
  );

  useEffect(() => {
    getAiHealth().then(setHealth).catch(() => setHealth({ ok: false, aiConfigured: false }));
  }, []);

  const sendTutor = useCallback(async () => {
    const text = inputTutor.trim();
    if (!text || loadingTutor) return;
    const userMsg: ChatMsg = { role: "user", content: text };
    const historyForApi = [...tutorMessages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));
    setTutorMessages((prev) => [...prev, userMsg]);
    setInputTutor("");
    setLoadingTutor(true);
    setStreamTutor("");

    try {
      let assistant = "";
      await postChatStream({ mode: "tutor", messages: historyForApi }, (full) => {
        assistant = full;
        setStreamTutor(full);
      });
      setTutorMessages((prev) => [...prev, { role: "assistant", content: assistant }]);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Falha no tutor");
      setTutorMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoadingTutor(false);
      setStreamTutor("");
    }
  }, [inputTutor, loadingTutor, tutorMessages]);

  const sendMaterial = useCallback(async () => {
    const text = inputMaterial.trim();
    if (!text || loadingMaterial) return;
    const userMsg: ChatMsg = { role: "user", content: text };
    const historyForApi = [...materialMessages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));
    setMaterialMessages((prev) => [...prev, userMsg]);
    setInputMaterial("");
    setLoadingMaterial(true);
    setStreamMaterial("");

    try {
      let assistant = "";
      await postChatStream({ mode: "material", messages: historyForApi }, (full) => {
        assistant = full;
        setStreamMaterial(full);
      });
      setMaterialMessages((prev) => [...prev, { role: "assistant", content: assistant }]);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Falha no chat");
      setMaterialMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoadingMaterial(false);
      setStreamMaterial("");
    }
  }, [inputMaterial, loadingMaterial, materialMessages]);

  const runGenerate = async () => {
    if (!genTopic.trim()) {
      toast.error("Informe o tema.");
      return;
    }
    setGenLoading(true);
    setGenResult(null);
    try {
      const out = await postGenerateQuestions({
        topic: genTopic.trim(),
        difficulty: genDifficulty,
        count: genCount,
        context: genContext.trim() || undefined,
      });
      setGenResult(out);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erro ao gerar");
    } finally {
      setGenLoading(false);
    }
  };

  const runGrade = async () => {
    if (!gradeAnswer.trim()) {
      toast.error("Cole a resposta do aluno.");
      return;
    }
    setGradeLoading(true);
    setGradeResult(null);
    try {
      const out = await postAssistGrade({
        questionStem: gradeStem.trim() || undefined,
        userAnswer: gradeAnswer.trim(),
        referenceNotes: gradeRef.trim() || undefined,
      });
      setGradeResult(out);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erro na correção");
    } finally {
      setGradeLoading(false);
    }
  };

  return (
    <div>
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              SERVIDOR — CHAVE SEGURA
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3">
            <Sparkles className="w-9 h-9 text-[oklch(0.55_0.22_25)]" />
            LABORATÓRIO <span className="text-[oklch(0.55_0.22_25)]">IA</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-4">
            Tutor, geração de questões e correção assistida rodam no servidor; a chave do provedor
            (OpenRouter ou OpenAI) nunca vai ao browser. Configure{" "}
            <span className="font-mono text-[10px]">OPENROUTER_API_KEY</span> no ambiente.
          </p>
          {health && (
            <div
              className={`text-xs font-accent tracking-wider px-3 py-2 border inline-block ${
                health.aiConfigured
                  ? "border-green-600/50 text-green-500"
                  : "border-yellow-600/50 text-yellow-500"
              }`}
            >
              {health.aiConfigured
                ? "BACKEND: CHAVE DETECTADA"
                : "BACKEND: SEM CHAVE — APENAS INTERFACE (ERRO AO CHAMAR)"}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 container">
        <Tabs defaultValue="tutor" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-[oklch(0.09_0.005_0)] p-1 border border-border">
            <TabsTrigger value="tutor" className="font-accent text-[10px] tracking-wider gap-1">
              <Stethoscope className="w-3 h-3" />
              TUTOR TEOT
            </TabsTrigger>
            <TabsTrigger value="material" className="font-accent text-[10px] tracking-wider gap-1">
              <Bot className="w-3 h-3" />
              MATERIAL
            </TabsTrigger>
            <TabsTrigger value="gerar" className="font-accent text-[10px] tracking-wider gap-1">
              <Wrench className="w-3 h-3" />
              GERAR QUESTÕES
            </TabsTrigger>
            <TabsTrigger value="correcao" className="font-accent text-[10px] tracking-wider gap-1">
              <Sparkles className="w-3 h-3" />
              CORREÇÃO
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutor" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display text-lg">Tutor TEOT</CardTitle>
                <CardDescription>
                  Perguntas objetivas, algoritmos e armadilhas de prova. Contexto: ortopedia/trauma
                  TEOT.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-[320px] rounded-md border border-border p-3 text-sm">
                  {tutorMessages.length === 0 && !streamTutor && (
                    <p className="text-muted-foreground text-xs">Envie a primeira pergunta.</p>
                  )}
                  {tutorMessages.map((m, i) => (
                    <div
                      key={i}
                      className={`mb-3 ${m.role === "user" ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      <span className="font-accent text-[9px] text-[oklch(0.55_0.22_25)]">
                        {m.role === "user" ? "VOCÊ" : "TUTOR"}
                      </span>
                      <p className="whitespace-pre-wrap mt-0.5 leading-relaxed">{m.content}</p>
                    </div>
                  ))}
                  {loadingTutor && streamTutor && (
                    <div className="text-muted-foreground">
                      <span className="font-accent text-[9px] text-[oklch(0.55_0.22_25)]">TUTOR</span>
                      <p className="whitespace-pre-wrap mt-0.5">{streamTutor}</p>
                    </div>
                  )}
                </ScrollArea>
                <div className="flex gap-2">
                  <Textarea
                    value={inputTutor}
                    onChange={(e) => setInputTutor(e.target.value)}
                    placeholder="Ex.: Critérios de fasciotomia em síndrome compartimental..."
                    className="min-h-[80px] font-mono text-xs"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendTutor();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={sendTutor}
                    disabled={loadingTutor}
                    className="shrink-0 self-end bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.5_0.2_25)]"
                  >
                    {loadingTutor ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="material" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display text-lg">Chat sobre o material</CardTitle>
                <CardDescription>
                  Cole trechos, temas de ciclo ou dúvidas integradas ao método HORA DOS MISERÁVEIS.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-[320px] rounded-md border border-border p-3 text-sm">
                  {materialMessages.length === 0 && !streamMaterial && (
                    <p className="text-muted-foreground text-xs">Envie um tema ou trecho.</p>
                  )}
                  {materialMessages.map((m, i) => (
                    <div
                      key={i}
                      className={`mb-3 ${m.role === "user" ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      <span className="font-accent text-[9px] text-[oklch(0.55_0.22_25)]">
                        {m.role === "user" ? "VOCÊ" : "ASSISTENTE"}
                      </span>
                      <p className="whitespace-pre-wrap mt-0.5 leading-relaxed">{m.content}</p>
                    </div>
                  ))}
                  {loadingMaterial && streamMaterial && (
                    <div className="text-muted-foreground">
                      <span className="font-accent text-[9px] text-[oklch(0.55_0.22_25)]">
                        ASSISTENTE
                      </span>
                      <p className="whitespace-pre-wrap mt-0.5">{streamMaterial}</p>
                    </div>
                  )}
                </ScrollArea>
                <div className="flex gap-2">
                  <Textarea
                    value={inputMaterial}
                    onChange={(e) => setInputMaterial(e.target.value)}
                    placeholder="Ex.: Resuma o algoritmo de fratura exposta em 5 linhas..."
                    className="min-h-[80px] font-mono text-xs"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMaterial();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={sendMaterial}
                    disabled={loadingMaterial}
                    className="shrink-0 self-end bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.5_0.2_25)]"
                  >
                    {loadingMaterial ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gerar" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display text-lg">Gerar questões</CardTitle>
                <CardDescription>Questões originais estilo TEOT (JSON estruturado no servidor).</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-w-3xl">
                <div className="space-y-2">
                  <Label>Tema</Label>
                  <Textarea
                    value={genTopic}
                    onChange={(e) => setGenTopic(e.target.value)}
                    placeholder="Ex.: Fraturas do platô tibial — classificação e conduta"
                    className="min-h-[72px] text-xs"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Dificuldade</Label>
                    <select
                      className="w-full border border-border bg-background rounded-md px-3 py-2 text-xs"
                      value={genDifficulty}
                      onChange={(e) =>
                        setGenDifficulty(e.target.value as "moderado" | "alto" | "brutal")
                      }
                    >
                      <option value="moderado">Moderado</option>
                      <option value="alto">Alto</option>
                      <option value="brutal">Brutal</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Quantidade (1–5)</Label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={genCount}
                      onChange={(e) => setGenCount(Number(e.target.value))}
                      className="w-full border border-border bg-background rounded-md px-3 py-2 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Contexto opcional</Label>
                  <Textarea
                    value={genContext}
                    onChange={(e) => setGenContext(e.target.value)}
                    placeholder="Ex.: foco em complicações e revisão de fixação"
                    className="min-h-[64px] text-xs"
                  />
                </div>
                <Button
                  type="button"
                  onClick={runGenerate}
                  disabled={genLoading}
                  className="bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.5_0.2_25)]"
                >
                  {genLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Gerar"}
                </Button>
                {genResult && (
                  <div className="space-y-4 mt-4 border-t border-border pt-4">
                    {genResult.questions.map((q, i) => (
                      <div key={i} className="border border-border rounded-md p-4 text-xs space-y-2">
                        <p className="font-display text-sm text-foreground leading-snug">{q.stem}</p>
                        <ul className="space-y-1">
                          {q.alternatives.map((a) => (
                            <li key={a.letter}>
                              <span className="text-[oklch(0.55_0.22_25)]">{a.letter})</span> {a.text}
                            </li>
                          ))}
                        </ul>
                        <p className="text-green-500/90">Correta: {q.correctLetter}</p>
                        <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                          {q.commentary}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="correcao" className="mt-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display text-lg">Correção assistida</CardTitle>
                <CardDescription>
                  Para respostas discursivas de estudo; não substitui banca oficial.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-w-3xl">
                <div className="space-y-2">
                  <Label>Enunciado (opcional)</Label>
                  <Textarea
                    value={gradeStem}
                    onChange={(e) => setGradeStem(e.target.value)}
                    className="min-h-[64px] text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Resposta do aluno</Label>
                  <Textarea
                    value={gradeAnswer}
                    onChange={(e) => setGradeAnswer(e.target.value)}
                    className="min-h-[120px] text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Notas de referência (opcional)</Label>
                  <Textarea
                    value={gradeRef}
                    onChange={(e) => setGradeRef(e.target.value)}
                    className="min-h-[64px] text-xs"
                  />
                </div>
                <Button
                  type="button"
                  onClick={runGrade}
                  disabled={gradeLoading}
                  className="bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.5_0.2_25)]"
                >
                  {gradeLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Avaliar"}
                </Button>
                {gradeResult && (
                  <div className="mt-4 border border-border rounded-md p-4 text-xs space-y-3">
                    <p>
                      <span className="font-accent text-[oklch(0.55_0.22_25)]">NOTA SUGERIDA:</span>{" "}
                      {gradeResult.scoreSuggestion}/100
                    </p>
                    <div>
                      <p className="font-accent text-[10px] text-green-500 mb-1">PONTOS FORTES</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {gradeResult.strengths.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-accent text-[10px] text-yellow-500 mb-1">LACUNAS</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {gradeResult.gaps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-accent text-[10px] mb-1">RESPOSTA MELHORADA</p>
                      <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                        {gradeResult.improvedAnswer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
