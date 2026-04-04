/* Metodologia — Bunker Cirúrgico: Explicação do método HORA DOS MISERÁVEIS */
import { motion } from "framer-motion";
import { Target, Brain, Flame, Shield, BookOpen, Crosshair } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

const principles = [
  {
    icon: Flame,
    title: "EXIGÊNCIA MÁXIMA",
    desc: "Não produzir questões fáceis. Priorizar integração de conceitos, condutas, classificações, biomecânica, imagem e complicações. Cada questão é calibrada para o nível TEOT/TARO.",
  },
  {
    icon: Target,
    title: "ALTO PODER DISCRIMINATIVO",
    desc: "Cada questão separa o aluno que 'já viu o tema' do aluno que realmente domina o tema. Alternativas plausíveis e verossímeis impedem acertos por reconhecimento superficial.",
  },
  {
    icon: Brain,
    title: "DENSIDADE TÉCNICA",
    desc: "Explicações profundas, sem superficialidade. Correlação com casos clínicos, cenários ambulatoriais, enfermaria, centro cirúrgico e prova oral.",
  },
  {
    icon: Shield,
    title: "SOFRIMENTO PRODUTIVO",
    desc: "Desconforto cognitivo útil, revisão ativa, correção de vícios de raciocínio e consolidação por contraste entre certo e errado.",
  },
];

const levels = [
  {
    level: "NÍVEL 1",
    name: "ALTO",
    color: "text-yellow-500",
    border: "border-yellow-500/30",
    desc: "Exige conhecimento sólido. Cobra definição, conduta, classificação ou conceito bem conhecido, mas com pegadinha leve.",
  },
  {
    level: "NÍVEL 2",
    name: "MUITO ALTO",
    color: "text-orange-500",
    border: "border-orange-500/30",
    desc: "Exige integração de múltiplos conceitos. Alternativas muito próximas. Leitura fina e raciocínio clínico bem estruturado.",
  },
  {
    level: "NÍVEL 3",
    name: "BRUTAL / ELITIZADO",
    color: "text-[oklch(0.55_0.22_25)]",
    border: "border-[oklch(0.55_0.22_25)]/30",
    desc: "Questão para separar a elite. Exige associação entre imagem, clínica, biomecânica, complicação, indicação e prova. Erro mínimo leva à alternativa errada.",
  },
];

const structure = [
  "Tema principal e subtema",
  "Nível de dificuldade explícito",
  "Objetivo cognitivo",
  "Enunciado robusto (caso clínico)",
  "4 alternativas plausíveis",
  "Gabarito",
  "Comentário técnico detalhado",
  "Justificativa de cada alternativa",
  "Pérola de prova",
  "Armadilha clássica",
  "Correlação prática",
  "Referência-base",
];

export default function Metodologia() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-2">
              <div className="red-bar" />
              <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
                O MÉTODO
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-6">
              METODOLOGIA <span className="text-[oklch(0.55_0.22_25)]">HORA DOS MISERÁVEIS</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              O objetivo não é apenas ensinar. O objetivo é selecionar, pressionar, expor fragilidades
              cognitivas, corrigir raciocínios incompletos e formar alunos altamente competitivos,
              com desempenho acima da média em provas como TEOT, TARO e avaliações exigentes de
              residência e título.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-10">PRINCÍPIOS PEDAGÓGICOS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-card p-6 hover:border-[oklch(0.55_0.22_25)]/40 transition-colors"
              >
                <p.icon className="w-6 h-6 text-[oklch(0.55_0.22_25)] mb-3" />
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-20 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-10">NÍVEIS DE DIFICULDADE</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((l, i) => (
              <motion.div
                key={l.level}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border ${l.border} bg-card p-6`}
              >
                <span className={`font-accent text-xs tracking-widest ${l.color}`}>{l.level}</span>
                <h3 className={`font-display text-xl font-bold mt-1 mb-3 ${l.color}`}>{l.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Structure */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">ESTRUTURA DAS QUESTÕES</h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Cada questão segue uma estrutura obrigatória que garante profundidade técnica,
                poder discriminativo e valor pedagógico máximo. Nenhuma questão é publicada sem
                todos os elementos abaixo.
              </p>
              <div className="space-y-2">
                {structure.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="font-accent text-[oklch(0.55_0.22_25)] text-xs w-6 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-border max-w-[20px]" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">BENCHMARKING</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Todas as questões são calibradas com base nos padrões de exames relevantes,
                observando temas recorrentes, forma de enunciado, perfil das pegadinhas e
                grau de integração entre áreas.
              </p>
              <div className="space-y-4">
                {[
                  { name: "TEOT", desc: "Título de Especialista em Ortopedia e Traumatologia" },
                  { name: "TARO", desc: "Teste de Avaliação de Residência em Ortopedia" },
                  { name: "PROVAS DE RESIDÊNCIA", desc: "Perfil ortopédico forte" },
                  { name: "SUBESPECIALIDADES", desc: "Questões clássicas de cada área" },
                ].map((exam) => (
                  <div key={exam.name} className="border-l-2 border-[oklch(0.55_0.22_25)] pl-4">
                    <div className="font-display text-sm font-bold">{exam.name}</div>
                    <div className="text-xs text-muted-foreground">{exam.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 border border-border bg-[oklch(0.09_0.005_0)]">
                <div className="flex items-center gap-2 mb-2">
                  <Crosshair className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
                  <span className="font-display text-sm font-bold">REFERÊNCIAS-BASE</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Rockwood & Green's Fractures in Adults, 9th Ed.</p>
                  <p>Browner's Skeletal Trauma, 6th Ed.</p>
                  <p>Campbell's Operative Orthopaedics, 14th Ed.</p>
                  <p>Rockwood & Wilkins' Fractures in Children, 9th Ed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
