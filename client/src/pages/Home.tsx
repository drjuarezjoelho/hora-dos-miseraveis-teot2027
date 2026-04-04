/* Home — Bunker Cirúrgico: Hero impactante, countdown TEOT, seções de briefing */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Skull,
  Target,
  Clock,
  BookOpen,
  Swords,
  ChevronRight,
  AlertTriangle,
  Zap,
} from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2027-11-15T08:00:00-03:00").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "DIAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="bg-[oklch(0.12_0.005_0)] border border-border px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[72px] text-center">
            <span className="font-display text-2xl sm:text-3xl text-[oklch(0.55_0.22_25)] font-bold">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const stats = [
  { number: "160+", label: "QUESTÕES (CICLOS 2+3)", icon: BookOpen },
  { number: "24", label: "VÍDEOS TÉCNICOS", icon: Target },
  { number: "28", label: "SEMANAS INTENSIVAS", icon: Clock },
  { number: "60-70%", label: "PESO NO TEOT", icon: AlertTriangle },
];

const modules = [
  { title: "TRAUMA GERAL", desc: "Expostas, compartimental, infecção, embolia", weeks: "Sem 9-11" },
  { title: "MEMBRO SUPERIOR", desc: "Úmero, rádio/ulna, cotovelo", weeks: "Sem 12-14" },
  { title: "MEMBRO INFERIOR", desc: "Fêmur, tíbia, joelho periarticular", weeks: "Sem 15-17" },
  { title: "PELVE + COLUNA", desc: "Acetábulo, anel pélvico, coluna trauma", weeks: "Sem 18-20" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/hero-banner-AWJYPZZ3B5B3EUtXrBDLuo.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.07_0.005_0)] via-[oklch(0.07_0.005_0)]/90 to-[oklch(0.07_0.005_0)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.005_0)] via-transparent to-transparent" />

        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <div className="red-bar mb-4" />
              <span className="font-accent text-sm tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
                PROGRAMA DE TREINAMENTO DE ELITE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6"
            >
              <span className="text-foreground">HORA DOS</span>
              <br />
              <span className="text-[oklch(0.55_0.22_25)]">MISERÁVEIS</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-sm sm:text-base max-w-xl mb-8 leading-relaxed"
            >
              O objetivo não é apenas ensinar. O objetivo é selecionar, pressionar,
              expor fragilidades cognitivas e formar alunos altamente competitivos
              para o TEOT 2027.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mb-10">
              <Countdown />
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
              <Link
                href="/ciclo3"
                className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_25)] text-white font-accent text-sm tracking-wider px-6 py-3 hover:bg-[oklch(0.45_0.22_25)] transition-colors duration-150 no-underline"
              >
                <Zap className="w-4 h-4" />
                CICLO 3 — ORTOPEDIA CLÍNICA
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ciclo2"
                className="inline-flex items-center gap-2 border border-border text-foreground font-accent text-sm tracking-wider px-6 py-3 hover:border-[oklch(0.55_0.22_25)] hover:text-[oklch(0.55_0.22_25)] transition-colors duration-150 no-underline"
              >
                CICLO 2 — TRAUMATOLOGIA
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <s.icon className="w-5 h-5 text-[oklch(0.55_0.22_25)] shrink-0" />
                <div>
                  <div className="font-display text-2xl text-foreground font-bold">
                    {s.number}
                  </div>
                  <div className="font-accent text-[10px] tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CICLO 2 OVERVIEW */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              CICLO ATIVO
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            CICLO 2 — TRAUMATOLOGIA
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mb-12">
            O bloco de maior peso no TEOT (35-40%). Fraturas de ossos longos, expostas
            e pelve representam 60% das questões de trauma. Semanas 9 a 22 de treinamento
            intensivo com 80 questões comentadas e 12 vídeos técnicos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="border border-border bg-card p-5 hover:border-[oklch(0.55_0.22_25)]/50 transition-colors duration-150 group"
              >
                <div className="font-accent text-[10px] tracking-widest text-[oklch(0.55_0.22_25)] mb-2">
                  {m.weeks}
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[oklch(0.55_0.22_25)] transition-colors duration-150">
                  {m.title}
                </h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/ciclo2"
              className="inline-flex items-center gap-2 font-accent text-sm tracking-wider text-[oklch(0.55_0.22_25)] hover:text-foreground transition-colors duration-150 no-underline"
            >
              <Swords className="w-4 h-4" />
              ACESSAR CICLO 2 COMPLETO
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="red-bar" />
                <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
                  FILOSOFIA
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                SOFRIMENTO PRODUTIVO
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  O material é desenhado para gerar desconforto cognitivo útil, revisão ativa,
                  correção de vícios de raciocínio e consolidação por contraste entre certo e errado.
                </p>
                <p>
                  Cada questão separa o aluno que "já viu o tema" do aluno que realmente domina o tema.
                  Alternativas plausíveis, armadilhas conceituais e integração entre áreas garantem
                  alto poder discriminativo.
                </p>
                <p>
                  O conteúdo explora anatomia aplicada, biomecânica, fisiopatologia, exame físico,
                  imagem, classificações, conduta cirúrgica, complicações e erros clássicos de prova.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/methodology-section-6ezXGjdPm7YC8ycta8mB5w.webp"
                alt="Anatomia ortopédica"
                className="w-full border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container text-center">
          <Skull className="w-10 h-10 text-[oklch(0.55_0.22_25)] mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            A HORA É AGORA
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8">
            Não existe atalho. Existe método, disciplina e sofrimento produtivo.
            O TEOT 2027 não espera. Ciclo 3 ativo agora.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ciclo3"
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_25)] text-white font-accent text-sm tracking-wider px-6 py-3 hover:bg-[oklch(0.45_0.22_25)] transition-colors duration-150 no-underline"
            >
              ACESSAR CICLO 3
            </Link>
            <Link
              href="/cronograma"
              className="inline-flex items-center gap-2 border border-border text-foreground font-accent text-sm tracking-wider px-6 py-3 hover:border-[oklch(0.55_0.22_25)] transition-colors duration-150 no-underline"
            >
              VER CRONOGRAMA COMPLETO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
