import { motion } from "framer-motion";
import { ChevronDown, BookOpen, Video, FileText, AlertTriangle } from "lucide-react";
import { useState } from "react";

const videoScripts = [
  {
    num: 33,
    title: "Ortopedia Pediátrica I — DDQ, Pé Torto, Legg-Calvé-Perthes",
    duration: "65 min",
    topics: ["Displasia do quadril (Hilgenreiner, Tonnis)", "Pé torto congênito (Pirani, Dimeglio)", "Legg-Calvé-Perthes (Catterall, Herring)"],
  },
  {
    num: 34,
    title: "Ortopedia Pediátrica II — SCFE, Fraturas Pediátricas, Escoliose",
    duration: "62 min",
    topics: ["Epifisiólise (Southwick, Loder)", "Fraturas pediátricas específicas (Salter-Harris)", "Escoliose idiopática (Lenke, Cobb)"],
  },
  {
    num: 35,
    title: "Tumores Ósseos I — Classificação e Diagnóstico",
    duration: "68 min",
    topics: ["Enneking staging (local, regional, distant)", "Tumores benignos (osteocondroma, condroma, osteoma)", "Biópsia e planejamento"],
  },
  {
    num: 36,
    title: "Tumores Ósseos II — Malignos e Tratamento",
    duration: "70 min",
    topics: ["Osteossarcoma, condrossarcoma, sarcoma de Ewing", "Mirels score (patológico)", "Reconstrução e prognóstico"],
  },
  {
    num: 37,
    title: "Infecções Osteoarticulares I — Osteomielite",
    duration: "64 min",
    topics: ["Waldvogel classification (hematogênica, contígua, vascular)", "Cierny-Mader staging", "Diagnóstico (clínico, laboratorial, imagem)"],
  },
  {
    num: 38,
    title: "Infecções Osteoarticulares II — Artrite Séptica e PJI",
    duration: "66 min",
    topics: ["Kocher criteria (sensibilidade, especificidade)", "Prosthetic Joint Infection (MSIS criteria)", "Tratamento (antibiótico, cirúrgico)"],
  },
  {
    num: 39,
    title: "Biomecânica Avançada — Tribologia e Implantes",
    duration: "63 min",
    topics: ["Tribologia (atrito, desgaste, lubrificação)", "Materiais (metal, polietileno, cerâmica)", "Falha de implante (soltura, desgaste, fratura)"],
  },
  {
    num: 40,
    title: "Revisão Articular — Conceitos e Técnica",
    duration: "65 min",
    topics: ["Paprosky classification (acetábulo)", "Fixação biológica vs cimentada", "Manejo de defeitos ósseos"],
  },
  {
    num: 41,
    title: "Medicina do Esporte Avançada I — Ligamentos e Cartilagem",
    duration: "67 min",
    topics: ["Lesões ligamentares complexas (multiligamentar)", "Cartilagem articular (ICRS, microfraturas)", "Instabilidade multidirecional"],
  },
  {
    num: 42,
    title: "Medicina do Esporte Avançada II — Reabilitação e Retorno",
    duration: "62 min",
    topics: ["Protocolos de reabilitação (RTP)", "Prevenção de lesão recorrente", "Critérios de retorno ao esporte"],
  },
  {
    num: 43,
    title: "Reumatologia Aplicada I — Artrite Reumatoide e Espondilite",
    duration: "64 min",
    topics: ["Artrite reumatoide (indicações cirúrgicas, sinovectomia)", "Espondilite anquilosante (cifose, fixação)", "Diagnóstico e estadiamento"],
  },
  {
    num: 44,
    title: "Reumatologia Aplicada II — Gota, Pseudogota, Integração Final",
    duration: "68 min",
    topics: ["Gota (depósitos de ácido úrico, artrite aguda)", "Pseudogota (cristais de pirofosfato)", "Casos integrados e revisão final"],
  },
];

const questionsPreview = [
  {
    num: 1,
    title: "DDQ em neonato — Classificação de Tonnis",
    difficulty: "Alto",
    block: "Ortopedia Pediátrica",
  },
  {
    num: 2,
    title: "Pé torto congênito — Pirani score e tratamento",
    difficulty: "Muito Alto",
    block: "Ortopedia Pediátrica",
  },
  {
    num: 3,
    title: "Legg-Calvé-Perthes — Herring classification e prognóstico",
    difficulty: "Alto",
    block: "Ortopedia Pediátrica",
  },
  {
    num: 4,
    title: "Osteossarcoma — Enneking staging e reconstrução",
    difficulty: "Muito Alto",
    block: "Tumores",
  },
  {
    num: 5,
    title: "Osteomielite crônica — Cierny-Mader e tratamento",
    difficulty: "Alto",
    block: "Infecções",
  },
  {
    num: 6,
    title: "PJI de joelho — MSIS criteria e revisão",
    difficulty: "Muito Alto",
    block: "Infecções",
  },
  {
    num: 7,
    title: "Tribologia de implantes — Desgaste e falha",
    difficulty: "Brutal-Elitizado",
    block: "Biomecânica",
  },
  {
    num: 8,
    title: "Lesão multiligamentar de joelho — Manejo e RTP",
    difficulty: "Muito Alto",
    block: "Medicina do Esporte",
  },
];

export default function Ciclo4() {
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              CICLO 4 — ESPECIALIDADES
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            ESPECIALIDADES E <span className="text-[oklch(0.55_0.22_25)]">SUBESPECIALIDADES</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-6">
            Semanas 37-50 (14 semanas, 112 horas). Ortopedia pediátrica, tumores, infecções,
            biomecânica avançada, medicina do esporte e reumatologia aplicada. Peso no TEOT: 15-20%.
            80 questões comentadas + 12 vídeos técnicos + Caderno de Guerra.
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              80 questões
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              12 vídeos
            </div>
            <div className="flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
              Muito Alto
            </div>
          </div>
        </div>
      </section>

      {/* Roteiros de Vídeos */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">ROTEIROS DE VÍDEOS (V33-V44)</h2>
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
                      <span className="font-display text-sm font-bold text-[oklch(0.55_0.22_25)]">
                        V{video.num}
                      </span>
                      <span className="font-accent text-[10px] tracking-wider text-muted-foreground">
                        {video.duration}
                      </span>
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
                    <div className="text-xs text-muted-foreground space-y-2">
                      <div>
                        <span className="font-accent tracking-wider text-[oklch(0.55_0.22_25)]">
                          TÓPICOS:
                        </span>
                      </div>
                      <ul className="space-y-1 ml-4">
                        {video.topics.map((topic, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[oklch(0.55_0.22_25)]">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 text-[10px] text-muted-foreground/60">
                        Quiz de 5 questões ao final. Fonte: Campbell's, Rockwood, Browner, Herring, Enneking.
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amostra de Questões */}
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
                className="border border-border bg-card p-4 hover:border-[oklch(0.55_0.22_25)]/50 transition-colors duration-150"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-display text-sm font-bold text-[oklch(0.55_0.22_25)]">
                    Q{q.num}
                  </span>
                  <span
                    className={`font-accent text-[9px] tracking-wider px-2 py-1 border ${
                      q.difficulty === "Alto"
                        ? "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30"
                        : q.difficulty === "Muito Alto"
                          ? "text-[oklch(0.7_0.2_25)] border-[oklch(0.7_0.2_25)]/30"
                          : "text-[oklch(0.8_0.25_25)] border-[oklch(0.8_0.25_25)]/30"
                    }`}
                  >
                    {q.difficulty}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold mb-3 leading-snug">{q.title}</h3>
                <span className="font-accent text-[10px] tracking-wider text-muted-foreground">
                  {q.block}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 border border-border bg-[oklch(0.09_0.005_0)]">
            <p className="text-xs text-muted-foreground">
              <span className="font-accent tracking-wider text-[oklch(0.55_0.22_25)]">NOTA:</span> As 80
              questões completas estão no documento PDF do Ciclo 4 com comentários técnicos detalhados,
              justificativa de cada alternativa, pérolas de prova e armadilhas clássicas.
            </p>
          </div>
        </div>
      </section>

      {/* Caderno de Guerra */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">CADERNO DE GUERRA</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Flash Points por Área",
                items: [
                  "Ortopedia Pediátrica: DDQ (Tonnis), Perthes (Herring), SCFE (Loder)",
                  "Tumores: Enneking staging, Mirels score, biópsia",
                  "Infecções: Waldvogel, Cierny-Mader, Kocher, MSIS",
                  "Biomecânica: Tribologia, desgaste, falha de implante",
                  "Esporte: Multiligamentar, cartilagem (ICRS), RTP",
                  "Reumatologia: AR, espondilite, gota, pseudogota",
                ],
              },
              {
                title: "Tabelas Mentais de Classificações",
                items: [
                  "Enneking (local, regional, distant)",
                  "Catterall (Perthes)",
                  "Herring (Perthes — pillar height)",
                  "Salter-Harris (fraturas pediátricas)",
                  "Waldvogel (osteomielite)",
                  "MSIS (prosthetic joint infection)",
                ],
              },
              {
                title: "Comparações entre Conceitos",
                items: [
                  "Osteomielite aguda vs crônica",
                  "Artrite séptica vs PJI",
                  "Tumor benigno vs maligno (Enneking)",
                  "Lesão ligamentar simples vs multiligamentar",
                  "AR vs espondilite (apresentação)",
                  "Gota vs pseudogota (cristais)",
                ],
              },
              {
                title: "Top 15 Erros que Derrubam Candidatos",
                items: [
                  "Confundir Herring com Catterall em Perthes",
                  "Esquecer Kocher criteria em artrite séptica",
                  "Não usar MSIS criteria em PJI",
                  "Negligenciar Mirels score em tumores",
                  "Confundir Waldvogel com Cierny-Mader",
                  "Erro em Salter-Harris (tipo V é raro)",
                  "Confundir gota com pseudogota",
                  "Negligenciar RTP em esporte",
                  "Erro em Paprosky (acetábulo)",
                  "Confundir tribologia com biomecânica simples",
                  "Erro em ICRS (cartilagem)",
                  "Negligenciar indicação cirúrgica em AR",
                  "Confundir espondilite com espondilolistese",
                  "Erro em Loder classification (SCFE)",
                  "Negligenciar complicações pós-revisão",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-card p-5"
              >
                <h3 className="font-display text-sm font-bold mb-4 text-[oklch(0.55_0.22_25)]">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[oklch(0.55_0.22_25)] shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-16 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">DOCUMENTOS DISPONÍVEIS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Ciclo 4 Completo",
                desc: "80 questões comentadas + 12 roteiros de vídeos com timestamps",
                file: "ciclo4-especialidades-completo.pdf",
              },
              {
                title: "Caderno de Guerra",
                desc: "Flash points, tabelas mentais, comparações, Top 15 erros",
                file: "caderno-de-guerra-ciclo4.pdf",
              },
              {
                title: "Resumo Executivo",
                desc: "Visão geral estratégica, objetivos, padrões de cobrança",
                file: "resumo-executivo-ciclo4.pdf",
              },
            ].map((doc) => (
              <motion.div
                key={doc.file}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border bg-card p-5 hover:border-[oklch(0.55_0.22_25)]/50 transition-colors duration-150"
              >
                <FileText className="w-5 h-5 text-[oklch(0.55_0.22_25)] mb-3" />
                <h3 className="font-display text-sm font-bold mb-2">{doc.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{doc.desc}</p>
                <span className="font-mono text-[10px] text-muted-foreground/60">{doc.file}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">CRONOGRAMA (SEMANAS 37-50)</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-display font-bold text-[oklch(0.55_0.22_25)]">
                    Semanas
                  </th>
                  <th className="text-left py-3 px-4 font-display font-bold text-[oklch(0.55_0.22_25)]">
                    Tema
                  </th>
                  <th className="text-left py-3 px-4 font-display font-bold text-[oklch(0.55_0.22_25)]">
                    Vídeos
                  </th>
                  <th className="text-left py-3 px-4 font-display font-bold text-[oklch(0.55_0.22_25)]">
                    Questões
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { weeks: "37-38", theme: "Ortopedia Pediátrica I", videos: "V33-V34", questions: "Q1-Q10" },
                  { weeks: "39-40", theme: "Tumores Ósseos", videos: "V35-V36", questions: "Q11-Q20" },
                  { weeks: "41-42", theme: "Infecções Osteoarticulares", videos: "V37-V38", questions: "Q21-Q30" },
                  { weeks: "43-44", theme: "Biomecânica e Revisão", videos: "V39-V40", questions: "Q31-Q40" },
                  { weeks: "45-46", theme: "Medicina do Esporte", videos: "V41-V42", questions: "Q41-Q50" },
                  { weeks: "47-50", theme: "Reumatologia + Integração", videos: "V43-V44", questions: "Q51-Q80" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-[oklch(0.55_0.22_25)]/5 transition-colors">
                    <td className="py-3 px-4 font-accent tracking-wider text-[oklch(0.55_0.22_25)]">
                      {row.weeks}
                    </td>
                    <td className="py-3 px-4">{row.theme}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.videos}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.questions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Metas */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="red-bar" />
            <h2 className="font-display text-2xl font-bold">METAS DE APROVEITAMENTO</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Ortopedia Pediátrica",
                target: "≥ 85%",
                desc: "Classificações (Tonnis, Herring, Salter-Harris) + conduta",
              },
              {
                title: "Tumores + Infecções",
                target: "≥ 80%",
                desc: "Enneking, Waldvogel, Cierny-Mader, MSIS + diagnóstico",
              },
              {
                title: "Biomecânica + Esporte + Reumatologia",
                target: "≥ 75%",
                desc: "Conceitos integrados, tribologia, RTP, indicações cirúrgicas",
              },
            ].map((meta, i) => (
              <motion.div
                key={meta.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-card p-5"
              >
                <h3 className="font-display text-sm font-bold mb-2">{meta.title}</h3>
                <div className="text-2xl font-display font-bold text-[oklch(0.55_0.22_25)] mb-3">
                  {meta.target}
                </div>
                <p className="text-xs text-muted-foreground">{meta.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
