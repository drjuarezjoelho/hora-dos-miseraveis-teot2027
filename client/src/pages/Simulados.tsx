/* Simulados — Bunker Cirúrgico: Formato dos simulados HORA DOS MISERÁVEIS */
import { motion } from "framer-motion";
import { Clock, Target, AlertTriangle, BarChart3, Skull } from "lucide-react";

const simuladoFormat = [
  { label: "Questões por simulado", value: "40-60" },
  { label: "Tempo por questão", value: "2 min" },
  { label: "Duração total", value: "80-120 min" },
  { label: "Nota de corte", value: "70%" },
  { label: "Nível mínimo", value: "Alto" },
  { label: "Nível predominante", value: "Muito Alto / Brutal" },
];

const simulados = [
  {
    num: 1,
    title: "SIMULADO TRAUMA GERAL",
    questions: 40,
    time: "80 min",
    topics: "Fraturas expostas, síndrome compartimental, embolia gordurosa, infecção, TVP, damage control",
    available: true,
  },
  {
    num: 2,
    title: "SIMULADO TRAUMA MS",
    questions: 40,
    time: "80 min",
    topics: "Úmero proximal/diafisário, Monteggia, Galeazzi, cotovelo, Essex-Lopresti, PLRI",
    available: true,
  },
  {
    num: 3,
    title: "SIMULADO TRAUMA MI",
    questions: 40,
    time: "80 min",
    topics: "Fêmur proximal/diafisário, tíbia, platô tibial, patela, fraturas pediátricas",
    available: true,
  },
  {
    num: 4,
    title: "SIMULADO PELVE/COLUNA",
    questions: 40,
    time: "80 min",
    topics: "Anel pélvico, acetábulo, odontoide, hangman, TLICS, Chance, sacro",
    available: true,
  },
  {
    num: 5,
    title: "SIMULADO INTEGRADO CICLO 2",
    questions: 60,
    time: "120 min",
    topics: "Todas as áreas do Ciclo 2 — Traumatologia completa",
    available: true,
  },
  {
    num: 6,
    title: "SIMULADO ESPECIAL — ENFOQUES",
    questions: 40,
    time: "80 min",
    topics: "Pediátrico, osteoporótico, gestante, polytrauma, metástase, atleta",
    available: true,
  },
];

export default function Simulados() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              TREINO DE COMBATE
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            SIMULADOS <span className="text-[oklch(0.55_0.22_25)]">HORA DOS MISERÁVEIS</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Blocos fechados de questões de alto poder discriminativo com tempo controlado,
            nota de corte e análise de desempenho. Cada simulado é calibrado para expor
            fragilidades e consolidar o aprendizado sob pressão.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="py-16 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">FORMATO DO SIMULADO</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {simuladoFormat.map((f) => (
              <div key={f.label} className="border border-border bg-card p-4 text-center">
                <div className="font-display text-lg text-[oklch(0.55_0.22_25)] font-bold">
                  {f.value}
                </div>
                <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">
                  {f.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulados List */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">SIMULADOS DO CICLO 2</h2>
          <div className="space-y-4">
            {simulados.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-card p-5 hover:border-[oklch(0.55_0.22_25)]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl text-[oklch(0.55_0.22_25)] font-bold">
                      {String(s.num).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-bold">{s.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {s.questions} questões
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {s.time}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{s.topics}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Analysis */}
      <section className="py-16 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">ANÁLISE DE DESEMPENHO</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border bg-card p-5">
              <BarChart3 className="w-5 h-5 text-yellow-500 mb-3" />
              <h3 className="font-display text-sm font-bold mb-2 text-yellow-500">ALUNO MEDIANO</h3>
              <div className="font-display text-2xl font-bold mb-2">45-55%</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Erra questões de integração, variações pediátricas e decisões de damage control.
                Escolhe a alternativa mais "familiar" sem considerar o contexto.
              </p>
            </div>
            <div className="border border-border bg-card p-5">
              <BarChart3 className="w-5 h-5 text-orange-500 mb-3" />
              <h3 className="font-display text-sm font-bold mb-2 text-orange-500">ALUNO FORTE</h3>
              <div className="font-display text-2xl font-bold mb-2">65-75%</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Acerta classificação e conduta direta, mas erra questões brutais com populações
                especiais e detalhes de técnica cirúrgica.
              </p>
            </div>
            <div className="border border-[oklch(0.55_0.22_25)]/30 bg-card p-5">
              <Skull className="w-5 h-5 text-[oklch(0.55_0.22_25)] mb-3" />
              <h3 className="font-display text-sm font-bold mb-2 text-[oklch(0.55_0.22_25)]">CANDIDATO DE ELITE</h3>
              <div className="font-display text-2xl font-bold mb-2">80-90%</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Domina enfoques especiais, reconhece armadilhas clássicas e integra conceitos
                de múltiplas áreas. Raciocina sob pressão com profundidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-8">REGRAS DO SIMULADO</h2>
          <div className="space-y-4">
            {[
              "Ambiente silencioso, sem consulta. Simule condições reais de prova.",
              "Cronometre rigorosamente. 2 minutos por questão, sem exceção.",
              "Marque as questões com dúvida para revisão posterior.",
              "Após o simulado, revise TODAS as questões — inclusive as que acertou.",
              "Justifique por que cada alternativa errada está errada.",
              "Registre os erros no caderno de erros pessoal.",
              "Refaça as questões erradas após 7 dias (espaçamento).",
              "Meta: atingir >85% no 2º simulado de cada bloco.",
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="font-accent text-[oklch(0.55_0.22_25)] text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
