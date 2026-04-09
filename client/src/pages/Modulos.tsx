/* Módulos — Bunker Cirúrgico: Visão geral dos módulos de estudo */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, BookOpen, Video, FileText, Crosshair } from "lucide-react";

const allModules = [
  {
    cycle: 1,
    name: "CIÊNCIAS BÁSICAS",
    status: "ATIVO",
    statusColor: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30",
    link: "/ciclo1",
    items: [
      "Anatomia aplicada (plexo braquial, nervos, abordagens, compartimentos)",
      "Biomecânica óssea e articular (propriedades, eixo mecânico, stress shielding)",
      "Princípios AO de fixação (parafusos, placas, hastes, fixadores externos)",
      "Fisiopatologia da consolidação (primária vs secundária, pseudoartrose)",
      "Imagem em ortopedia (RX, TC, RM, cintilografia)",
      "Tumores e infecções — bases (Enneking, Kocher, Tsukayama)",
    ],
    stats: { questions: 80, videos: 8, weeks: 8 },
  },
  {
    cycle: 2,
    name: "TRAUMATOLOGIA",
    status: "ATIVO",
    statusColor: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30",
    link: "/ciclo2",
    items: [
      "Trauma Geral (expostas, compartimental, infecção)",
      "Membro Superior (úmero, rádio/ulna, cotovelo)",
      "Membro Inferior (fêmur, tíbia, joelho periarticular)",
      "Pelve/Acetábulo + Coluna Trauma",
    ],
    stats: { questions: 80, videos: 12, weeks: 14 },
  },
  {
    cycle: 3,
    name: "ORTOPEDIA CLÍNICA",
    status: "ATIVO",
    statusColor: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30",
    link: "/ciclo3",
    items: [
      "Coluna degenerativa e deformidades (hérnia, estenose, escoliose, espondilolistese)",
      "Ombro, cotovelo, mão e punho (manguito, instabilidade, STC, Dupuytren)",
      "Quadril e joelho (ATQ, NAV, FAI, ATJ, LCA, meniscos)",
      "Tornozelo e pé (TTP, Aquiles, hallux, tálus, calcâneo)",
    ],
    stats: { questions: 80, videos: 12, weeks: 14 },
  },
  {
    cycle: 4,
    name: "ESPECIALIDADES",
    status: "ATIVO",
    statusColor: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30",
    link: "/ciclo4",
    items: [
      "Ortopedia pediátrica (DDQ, Perthes, SCFE, PTC, fraturas)",
      "Tumores ósseos e de partes moles (Enneking, biópsia, Mirels)",
      "Infecções osteoarticulares (Cierny-Mader, Kocher, PJI/MSIS)",
      "Biomecânica avançada e implantes (tribologia, revisão, falha)",
      "Medicina do esporte avançada (multiligamentar, cartilagem, ICRS)",
      "Reumatologia aplicada (AR, gota, pseudogota, espondilite)",
    ],
    stats: { questions: 80, videos: 12, weeks: 14 },
  },
  {
    cycle: 5,
    name: "RETA FINAL",
    status: "ATIVO",
    statusColor: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/30",
    link: "/ciclo5",
    items: [
      "Revisão integrada dos Ciclos 1-4",
      "Simulados progressivos (80 -> 100 -> 120 questões)",
      "40 questões novas comentadas com foco em conduta e pitfalls",
      "Roteiros V45-V52 para reta final de prova",
      "Caderno de erros e drill de 7 dias",
    ],
    stats: { questions: 40, videos: 8, weeks: 12 },
  },
];

export default function Modulos() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              5 CICLOS — 62 SEMANAS
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            MÓDULOS DE <span className="text-[oklch(0.55_0.22_25)]">ESTUDO</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Cada módulo é estruturado com questões de altíssima exigência, vídeos técnicos
            detalhados e material de revisão no padrão HORA DOS MISERÁVEIS. O conteúdo
            cobre 100% do programa do TEOT.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="container space-y-6">
          {allModules.map((mod, i) => (
            <motion.div
              key={mod.cycle}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`border ${mod.statusColor.split(" ")[1]} bg-card p-6`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-xl font-bold">
                      CICLO {mod.cycle} — {mod.name}
                    </span>
                    <span
                      className={`font-accent text-[10px] tracking-widest border px-2 py-0.5 ${mod.statusColor}`}
                    >
                      {mod.status}
                    </span>
                  </div>
                </div>
                {mod.stats && (
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <FileText className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {mod.stats.questions} questões
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Video className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {mod.stats.videos} vídeos
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Crosshair className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {mod.stats.weeks} semanas
                    </div>
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                {mod.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="w-3 h-3 text-[oklch(0.55_0.22_25)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {mod.link && (
                <Link
                  href={mod.link}
                  className="inline-flex items-center gap-2 font-accent text-xs tracking-wider text-[oklch(0.55_0.22_25)] hover:text-foreground transition-colors no-underline"
                >
                  ACESSAR MÓDULO COMPLETO
                  <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Material Types */}
      <section className="py-16 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">TIPOS DE MATERIAL</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: FileText,
                title: "QUESTÕES",
                desc: "Altíssima exigência com comentários detalhados, pérolas de prova e armadilhas clássicas",
              },
              {
                icon: Video,
                title: "VÍDEOS",
                desc: "Aulas técnicas de 50-70 min com classificações, condutas e quiz ao final",
              },
              {
                icon: BookOpen,
                title: "CADERNO DE GUERRA",
                desc: "Resumos técnicos, flash points, tabelas mentais e comparações entre conceitos",
              },
              {
                icon: Crosshair,
                title: "SIMULADOS",
                desc: "Blocos fechados com tempo controlado, nota de corte e análise de desempenho",
              },
            ].map((t) => (
              <div key={t.title} className="border border-border p-5">
                <t.icon className="w-5 h-5 text-[oklch(0.55_0.22_25)] mb-3" />
                <h3 className="font-display text-sm font-bold mb-2">{t.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
