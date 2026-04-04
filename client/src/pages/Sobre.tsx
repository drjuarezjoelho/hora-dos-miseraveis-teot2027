/* Sobre — Bunker Cirúrgico: Proposta do projeto + FAQ */
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Skull, Target, Zap, Shield } from "lucide-react";

const faqs = [
  {
    q: "O que é a HORA DOS MISERÁVEIS?",
    a: "É um programa de treinamento de elite para residentes em ortopedia e traumatologia, focado na aprovação no TEOT 2027. O método utiliza questões de altíssima exigência, alto poder discriminativo e sofrimento produtivo para formar candidatos de elite.",
  },
  {
    q: "Qual o nível de dificuldade das questões?",
    a: "As questões são classificadas em três níveis: Alto (pegadinha leve), Muito Alto (integração de conceitos, alternativas próximas) e Brutal/Elitizado (questão para separar a elite). Não há questões fáceis no programa.",
  },
  {
    q: "Quais são as fontes bibliográficas utilizadas?",
    a: "As referências principais são: Rockwood & Green's Fractures in Adults (9th Ed.), Browner's Skeletal Trauma (6th Ed.), Campbell's Operative Orthopaedics (14th Ed.) e Rockwood & Wilkins' Fractures in Children (9th Ed.).",
  },
  {
    q: "Como funciona o Ciclo 2 — Traumatologia?",
    a: "O Ciclo 2 cobre Traumatologia (35-40% do TEOT) em 14 semanas (Semanas 9-22). Inclui 80 questões comentadas, 12 vídeos técnicos de 50-70 min cada, e simulados por bloco. Os temas cobrem Trauma Geral, Membro Superior, Membro Inferior, Pelve/Acetábulo e Coluna.",
  },
  {
    q: "Qual a carga horária diária recomendada?",
    a: "5 horas de teoria + 3 horas de questões + flashcards diários. Nos períodos de simulado, a carga pode aumentar para 10-12 horas.",
  },
  {
    q: "Como são estruturadas as questões?",
    a: "Cada questão contém: tema, subtema, nível de dificuldade, objetivo cognitivo, enunciado robusto (caso clínico), 4 alternativas plausíveis, gabarito, comentário técnico detalhado, justificativa de cada alternativa, pérola de prova, armadilha clássica, correlação prática e referência-base.",
  },
  {
    q: "Quantos ciclos tem o programa completo?",
    a: "O programa tem 5 ciclos em 62 semanas: Ciclo 1 (Bases), Ciclo 2 (Traumatologia), Ciclo 3 (Ortopedia Clínica), Ciclo 4 (MI + Especialidades) e Ciclo 5 (Reta Final). Cada ciclo tem questões, vídeos e simulados específicos.",
  },
  {
    q: "O que é o 'sofrimento produtivo'?",
    a: "É o princípio pedagógico central do método. O material gera desconforto cognitivo útil, forçando revisão ativa, correção de vícios de raciocínio e consolidação por contraste entre certo e errado. O objetivo é que o aluno justifique por que uma alternativa está certa E por que as demais estão erradas.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[oklch(0.55_0.22_25)]/5 transition-colors"
      >
        <span className="font-accent text-sm tracking-wider text-foreground pr-4">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[oklch(0.55_0.22_25)] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Sobre() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              A PROPOSTA
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            SOBRE O <span className="text-[oklch(0.55_0.22_25)]">PROJETO</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            A HORA DOS MISERÁVEIS é um programa de treinamento avançado para residentes
            em ortopedia e traumatologia com finalidade de aprovação no TEOT 2027.
            O método foi desenhado para formar candidatos de elite através de máxima
            exigência, densidade técnica e foco em performance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">MISSÃO</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  O objetivo não é apenas ensinar. O objetivo é selecionar, pressionar,
                  expor fragilidades cognitivas, corrigir raciocínios incompletos e formar
                  alunos altamente competitivos, com desempenho acima da média em provas
                  como TEOT, TARO e avaliações exigentes de residência e título.
                </p>
                <p>
                  O conteúdo é desenhado para identificar fragilidades reais, impedir
                  acertos por reconhecimento superficial, exigir associação entre teoria,
                  imagem, conduta e prova, e forçar o aluno a justificar por que uma
                  alternativa está certa e por que as demais estão erradas.
                </p>
                <p>
                  O programa desenvolve superalunos matadores de questões, com domínio
                  técnico, velocidade de análise, precisão conceitual e resistência mental
                  sob pressão.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/about-section-7FPxKqy6jRqFHLQRWYsLuP.webp"
                alt="Formação ortopédica"
                className="w-full border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">PILARES DO MÉTODO</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Skull, title: "EXIGÊNCIA MÁXIMA", desc: "Sem questões fáceis. Cada item é calibrado para o nível TEOT." },
              { icon: Target, title: "PODER DISCRIMINATIVO", desc: "Separa quem viu o tema de quem domina o tema." },
              { icon: Zap, title: "DENSIDADE TÉCNICA", desc: "Explicações profundas com correlação clínica real." },
              { icon: Shield, title: "SOFRIMENTO PRODUTIVO", desc: "Desconforto cognitivo útil para consolidação." },
            ].map((v) => (
              <div key={v.title} className="border border-border bg-card p-5">
                <v.icon className="w-5 h-5 text-[oklch(0.55_0.22_25)] mb-3" />
                <h3 className="font-display text-sm font-bold mb-2">{v.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-8">
            PERGUNTAS <span className="text-[oklch(0.55_0.22_25)]">FREQUENTES</span>
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
