import { motion } from "framer-motion";
import { ChevronDown, FileText, Video, Target, AlertTriangle } from "lucide-react";
import { useState } from "react";

const videoScripts = [
  {
    num: 45,
    title: "Trauma de Alta Incidência — Conduta e Timing",
    duration: "65 min",
    topics: ["Expostas, compartimental e damage control", "Pelve instável e priorização hemodinâmica", "Complicações de alto impacto e prevenção"],
  },
  {
    num: 46,
    title: "Ortopedia Clínica de Alto Impacto",
    duration: "65 min",
    topics: ["Coluna degenerativa e déficit progressivo", "Ombro/quadril/joelho: critérios de decisão", "Pitfalls de conduta em prova"],
  },
  {
    num: 47,
    title: "Especialidades Estratégicas de Prova",
    duration: "60 min",
    topics: ["Pediátrica (DDQ, Perthes, SCFE)", "Tumores e princípios de biópsia", "Infecções osteoarticulares em cenários limítrofes"],
  },
  {
    num: 48,
    title: "Classificações que Mais Caem no TEOT",
    duration: "55 min",
    topics: ["AO, Gustilo, TLICS, Lenke, Paprosky", "Salter-Harris, Herring, Loder, MSIS", "Classificação vinculada à conduta"],
  },
  {
    num: 49,
    title: "Conduta e Complicações — Decisão Fina",
    duration: "60 min",
    topics: ["'Melhor conduta' vs 'conduta possível'", "Complicações mais comuns x mais graves", "Estratégia de resposta sob pressão"],
  },
  {
    num: 50,
    title: "Revisão Personalizada por Erro",
    duration: "50 min",
    topics: ["Matriz 80/20 de lacunas", "Trilha de correção por subtema", "Reforço de retenção ativa"],
  },
  {
    num: 51,
    title: "Reta Final de 7 Dias",
    duration: "45 min",
    topics: ["Rotina final de revisão", "Controle de ritmo e carga", "Checklist de segurança pré-prova"],
  },
  {
    num: 52,
    title: "Véspera e Dia da Prova",
    duration: "40 min",
    topics: ["Estratégia de execução no caderno", "Gestão de tempo e segunda passada", "Checklist final TEOT"],
  },
];

const questionsPreview = [
  { num: 1, title: "Fratura exposta IIIB — conduta inicial mais adequada", difficulty: "Muito Alto", block: "Trauma" },
  { num: 2, title: "Politrauma instável — damage control vs fixação definitiva", difficulty: "Muito Alto", block: "Trauma" },
  { num: 3, title: "Instabilidade de ombro com perda óssea crítica", difficulty: "Brutal-Elitizado", block: "Ortopedia Clínica" },
  { num: 4, title: "SCFE instável — complicação e timing de intervenção", difficulty: "Muito Alto", block: "Especialidades" },
  { num: 5, title: "PJI precoce com implante estável — melhor conduta", difficulty: "Muito Alto", block: "Infecção/Artroplastia" },
  { num: 6, title: "Estratégia de segunda passada em prova longa", difficulty: "Alto", block: "Execução de Prova" },
];

export default function Ciclo5() {
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  return (
    <div>
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              CICLO 5 — RETA FINAL
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            REVISÃO INTEGRADA E <span className="text-[oklch(0.55_0.22_25)]">SIMULADOS INTENSIVOS</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-6">
            Semanas 51-62. Fechamento operacional para o TEOT 2027 com revisão orientada por erro,
            simulados progressivos e execução sob pressão. Aplicado conforme Protocolo Mestre.
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              40 questões novas comentadas
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              8 vídeos estratégicos
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              Meta {"\u003e="} 85% no simulado final
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">ROTEIROS DE VÍDEOS (V45-V52)</h2>
          </div>

          <div className="space-y-3">
            {videoScripts.map((video) => (
              <motion.div
                key={video.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border bg-card hover:border-[oklch(0.55_0.22_25)]/50 transition-colors duration-150"
              >
                <button
                  onClick={() => setExpandedVideo(expandedVideo === video.num ? null : video.num)}
                  className="w-full p-4 flex items-start justify-between gap-4 text-left hover:bg-[oklch(0.55_0.22_25)]/5 transition-colors duration-150"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display text-sm font-bold text-[oklch(0.55_0.22_25)]">V{video.num}</span>
                      <span className="font-accent text-[10px] tracking-wider text-muted-foreground">{video.duration}</span>
                    </div>
                    <h3 className="font-display text-sm font-bold leading-snug">{video.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      expandedVideo === video.num ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedVideo === video.num && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border px-4 py-3 bg-[oklch(0.09_0.005_0)]"
                  >
                    <ul className="space-y-1 text-xs text-muted-foreground ml-2">
                      {video.topics.map((topic, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[oklch(0.55_0.22_25)]">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">AMOSTRA DE QUESTÕES</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {questionsPreview.map((q) => (
              <motion.div
                key={q.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-display text-sm font-bold text-[oklch(0.55_0.22_25)]">Q{q.num}</span>
                  <span className="font-accent text-[9px] tracking-wider px-2 py-1 border text-[oklch(0.7_0.2_25)] border-[oklch(0.7_0.2_25)]/30">
                    {q.difficulty}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold mb-2 leading-snug">{q.title}</h3>
                <span className="font-accent text-[10px] tracking-wider text-muted-foreground">{q.block}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">DOCUMENTOS DISPONÍVEIS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Ciclo 5 Completo",
                desc: "Estratégia semanal, vídeos V45-V52 e 40 questões novas comentadas",
                file: "ciclo5-reta-final-completo.md",
              },
              {
                title: "Caderno de Guerra Ciclo 5",
                desc: "Flash points, pegadinhas, top erros e drill de 7 dias",
                file: "caderno-de-guerra-ciclo5.md",
              },
              {
                title: "Resumo Executivo Ciclo 5",
                desc: "Metas, riscos, cronograma executivo e critério de conclusão",
                file: "resumo-executivo-ciclo5.md",
              },
            ].map((doc) => (
              <div key={doc.file} className="border border-border bg-card p-5">
                <FileText className="w-5 h-5 text-[oklch(0.55_0.22_25)] mb-3" />
                <h3 className="font-display text-sm font-bold mb-2">{doc.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{doc.desc}</p>
                <span className="font-mono text-[10px] text-muted-foreground/60">{doc.file}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">MARCOS DE FECHAMENTO</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Desempenho", target: "\u003e= 85%", desc: "Acerto no simulado final integrado" },
              { title: "Erro Recorrente", target: "\u003c= 10%", desc: "Subtemas críticos após trilha de correção" },
              { title: "Tempo de Prova", target: "\u003c= 1.5 min", desc: "Média por questão nos simulados finais" },
            ].map((meta) => (
              <div key={meta.title} className="border border-border bg-card p-5">
                <h3 className="font-display text-sm font-bold mb-2">{meta.title}</h3>
                <div className="text-2xl font-display font-bold text-[oklch(0.55_0.22_25)] mb-2">{meta.target}</div>
                <p className="text-xs text-muted-foreground">{meta.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 border border-border bg-[oklch(0.09_0.005_0)]">
            <p className="text-xs text-muted-foreground">
              <AlertTriangle className="inline w-4 h-4 mr-1 text-[oklch(0.55_0.22_25)]" />
              Ciclo 5 aplicado conforme Protocolo Mestre de Produção com foco em estabilidade de execução.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
