/* Cronograma — Bunker Cirúrgico: Timeline completa de estudos */
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const cycles = [
  {
    id: 1,
    name: "CICLO 1",
    period: "Meses 1-2 | Semanas 1-8",
    theme: "BASES E CIÊNCIAS BÁSICAS",
    active: false,
    weeks: [
      { w: "1-2", topic: "Anatomia aplicada e biomecânica" },
      { w: "3-4", topic: "Fisiopatologia óssea e articular" },
      { w: "5-6", topic: "Exame físico e semiologia ortopédica" },
      { w: "7-8", topic: "Princípios de imagem e classificações" },
    ],
  },
  {
    id: 2,
    name: "CICLO 2",
    period: "Meses 3-5 | Semanas 9-22",
    theme: "TRAUMATOLOGIA (35-40% TEOT)",
    active: true,
    link: "/ciclo2",
    weeks: [
      { w: "9-11", topic: "Trauma Geral — Expostas, compartimental, infecção" },
      { w: "12-14", topic: "Membro Superior — Úmero, rádio/ulna, cotovelo" },
      { w: "15-17", topic: "Membro Inferior — Fêmur, tíbia, joelho periarticular" },
      { w: "18-20", topic: "Pelve/Acetábulo + Coluna Trauma" },
      { w: "21-22", topic: "Integração e revisão + Simulado" },
    ],
  },
  {
    id: 3,
    name: "CICLO 3",
    period: "Meses 6-8 | Semanas 23-36",
    theme: "ORTOPEDIA CLÍNICA",
    active: false,
    weeks: [
      { w: "23-25", topic: "Coluna cervical e torácica (degenerativa)" },
      { w: "26-28", topic: "Coluna lombar" },
      { w: "29-31", topic: "Ombro e cotovelo (não-trauma)" },
      { w: "32-34", topic: "Mão e punho" },
      { w: "35-36", topic: "Integração e revisão + Simulado" },
    ],
  },
  {
    id: 4,
    name: "CICLO 4",
    period: "Meses 9-11 | Semanas 37-50",
    theme: "MEMBRO INFERIOR + ESPECIALIDADES",
    active: false,
    weeks: [
      { w: "37-39", topic: "Quadril e pelve (não-trauma)" },
      { w: "40-42", topic: "Joelho (ligamentar, meniscal, artroplastia)" },
      { w: "43-45", topic: "Tornozelo e pé" },
      { w: "46-47", topic: "Ortopedia pediátrica" },
      { w: "48-50", topic: "Tumores ósseos + Infecções osteoarticulares" },
    ],
  },
  {
    id: 5,
    name: "CICLO 5",
    period: "Meses 12-14 | Semanas 51-62",
    theme: "TEMAS TRANSVERSAIS + RETA FINAL",
    active: false,
    weeks: [
      { w: "51-53", topic: "Biomecânica e implantes" },
      { w: "54-56", topic: "Revisão geral por subespecialidade" },
      { w: "57-59", topic: "Simulados intensivos HORA DOS MISERÁVEIS" },
      { w: "60-62", topic: "Reta final — Revisão de erros e flashcards" },
    ],
  },
];

export default function Cronograma() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              ABRIL/2026 — NOVEMBRO/2027
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            CRONOGRAMA <span className="text-[oklch(0.55_0.22_25)]">DE GUERRA</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            62 semanas de treinamento intensivo divididas em 5 ciclos. Cada ciclo cobre
            um bloco temático do TEOT com questões, vídeos e simulados progressivos.
            Carga diária: 5h teoria + 3h questões + flashcards.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-8">
            {cycles.map((cycle, ci) => (
              <motion.div
                key={cycle.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className={`border ${
                  cycle.active
                    ? "border-[oklch(0.55_0.22_25)]/50 bg-[oklch(0.55_0.22_25)]/5"
                    : "border-border bg-card"
                } p-6`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display text-xl font-bold ${
                          cycle.active ? "text-[oklch(0.55_0.22_25)]" : "text-foreground"
                        }`}
                      >
                        {cycle.name}
                      </span>
                      {cycle.active && (
                        <span className="font-accent text-[10px] tracking-widest bg-[oklch(0.55_0.22_25)] text-white px-2 py-0.5">
                          ATIVO
                        </span>
                      )}
                    </div>
                    <div className="font-accent text-xs tracking-wider text-muted-foreground mt-1">
                      {cycle.period}
                    </div>
                  </div>
                  <div className="font-display text-sm font-bold text-foreground">
                    {cycle.theme}
                  </div>
                </div>

                <div className="space-y-2">
                  {cycle.weeks.map((w) => (
                    <div
                      key={w.w}
                      className="flex items-center gap-4 text-sm py-2 border-t border-border/50"
                    >
                      <span className="font-accent text-xs text-[oklch(0.55_0.22_25)] w-16 shrink-0">
                        SEM {w.w}
                      </span>
                      <span className="text-muted-foreground text-xs">{w.topic}</span>
                    </div>
                  ))}
                </div>

                {cycle.link && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Link
                      href={cycle.link}
                      className="inline-flex items-center gap-2 font-accent text-xs tracking-wider text-[oklch(0.55_0.22_25)] hover:text-foreground transition-colors no-underline"
                    >
                      ACESSAR CICLO COMPLETO
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Simulados */}
      <section className="py-16 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-6">
            SIMULADOS MENSAIS
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            A cada 4 semanas, um simulado completo no formato HORA DOS MISERÁVEIS
            com questões de alto poder discriminativo, tempo controlado e análise
            de desempenho detalhada.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Simulado 1 — Bases",
              "Simulado 2 — Trauma Geral",
              "Simulado 3 — Trauma MS/MI",
              "Simulado 4 — Pelve/Coluna",
              "Simulado 5 — Coluna Degenerativa",
              "Simulado 6 — Ombro/Mão",
              "Simulado 7 — Quadril/Joelho",
              "Simulado 8 — Pé/Pediátrica",
              "Simulado 9 — Tumores/Infecções",
              "Simulado 10 — Biomecânica",
              "Simulado 11 — Revisão Geral",
              "Simulado 12 — RETA FINAL",
            ].map((s, i) => (
              <div
                key={i}
                className="border border-border p-3 text-xs font-accent tracking-wider text-muted-foreground hover:border-[oklch(0.55_0.22_25)]/40 hover:text-foreground transition-colors"
              >
                <Calendar className="w-3 h-3 text-[oklch(0.55_0.22_25)] mb-1" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
