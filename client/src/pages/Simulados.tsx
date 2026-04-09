/* Simulados — Bunker Cirúrgico: Plano integral + formato HORA DOS MISERÁVEIS */
import { motion } from "framer-motion";
import { Clock, Target, BarChart3, Skull, Calendar, BookMarked } from "lucide-react";

const simuladoFormat = [
  { label: "Questões por bloco (típico)", value: "40–60" },
  { label: "Simulado longo / integrado", value: "80–120" },
  { label: "Tempo por questão", value: "≤ 2 min" },
  { label: "Ciclo 5 (pressão)", value: "≤ 1,5 min" },
  { label: "Nota de corte base", value: "70%" },
  { label: "Nível predominante", value: "Muito Alto / Brutal" },
];

type SimStatus = "estrutura" | "referencia" | "ciclo5";

const simuladosMensais = [
  { num: 1, title: "BASES E CIÊNCIAS APLICADAS", week: "~8", cycle: "Ciclo 1", q: 40, time: "80 min", topics: "Anatomia, biomecânica, AO, consolidação, imagem, bases tumorais/infecciosas", meta: "≥ 60%", status: "estrutura" as SimStatus },
  { num: 2, title: "TRAUMA GERAL", week: "~11", cycle: "Ciclo 2", q: 40, time: "80 min", topics: "Expostas, compartimental, damage control, TVP, infecção", meta: "≥ 65%", status: "referencia" as SimStatus },
  { num: 3, title: "TRAUMA MS E MI", week: "~16", cycle: "Ciclo 2", q: 40, time: "80 min", topics: "Úmero, antebraço, cotovelo, fêmur, tíbia, joelho periarticular", meta: "≥ 68%", status: "referencia" as SimStatus },
  { num: 4, title: "PELVE, ACETÁBULO E COLUNA TRAUMA", week: "~20", cycle: "Ciclo 2", q: 40, time: "80 min", topics: "Anel pélvico, acetábulo, odontoide, hangman, TLICS", meta: "≥ 70%", status: "referencia" as SimStatus },
  { num: 5, title: "COLUNA DEGENERATIVA E DEFORMIDADE", week: "~28", cycle: "Ciclo 3", q: 40, time: "80 min", topics: "Hérnia, estenose, escoliose (Lenke), espondilolistese", meta: "≥ 72%", status: "estrutura" as SimStatus },
  { num: 6, title: "OMBRO, COTOVELO, MÃO E PUNHO", week: "~30", cycle: "Ciclo 3", q: 40, time: "80 min", topics: "Manguito, instabilidade, STC, nervos periféricos, punho", meta: "≥ 72%", status: "estrutura" as SimStatus },
  { num: 7, title: "QUADRIL E JOELHO", week: "~33", cycle: "Ciclo 3", q: 40, time: "80 min", topics: "ATQ, NAV, FAI, ATJ, LCA, meniscos", meta: "≥ 75%", status: "estrutura" as SimStatus },
  { num: 8, title: "PÉ, TORNOZELO E PONTES PEDIÁTRICAS", week: "~36", cycle: "Ciclo 3–4", q: 40, time: "80 min", topics: "TTP, Aquiles, hallux, tálus, calcâneo + seleção pediátrica", meta: "≥ 75%", status: "estrutura" as SimStatus },
  { num: 9, title: "TUMORES E INFECÇÕES", week: "~43", cycle: "Ciclo 4", q: 40, time: "80 min", topics: "Enneking, biópsia, Mirels, Cierny-Mader, Kocher, PJI/MSIS", meta: "≥ 75%", status: "estrutura" as SimStatus },
  { num: 10, title: "BIOMECÂNICA, IMPLANTES E REVISÃO", week: "~45", cycle: "Ciclo 4", q: 40, time: "80 min", topics: "Tribologia, falha, Paprosky, revisão articular", meta: "≥ 72%", status: "estrutura" as SimStatus },
  { num: 11, title: "REVISÃO GERAL INTEGRADA", week: "~50", cycle: "Ciclo 4", q: 60, time: "120 min", topics: "Mistura proporcional TEOT (trauma + clínica + especialidades)", meta: "≥ 80%", status: "estrutura" as SimStatus },
  { num: 12, title: "RETA FINAL PRÉ-TEOT", week: "~60", cycle: "Ciclo 5", q: "80–120", time: "120–180 min", topics: "Prova longa + tempo + erro recorrente (ver Ciclo 5)", meta: "≥ 85%", status: "ciclo5" as SimStatus },
];

const simuladosCiclo2 = [
  { num: 1, title: "SIMULADO TRAUMA GERAL", questions: 40, time: "80 min", topics: "Fraturas expostas, síndrome compartimental, embolia gordurosa, infecção, TVP, damage control" },
  { num: 2, title: "SIMULADO TRAUMA MS", questions: 40, time: "80 min", topics: "Úmero proximal/diafisário, Monteggia, Galeazzi, cotovelo, Essex-Lopresti, PLRI" },
  { num: 3, title: "SIMULADO TRAUMA MI", questions: 40, time: "80 min", topics: "Fêmur proximal/diafisário, tíbia, platô tibial, patela, fraturas pediátricas" },
  { num: 4, title: "SIMULADO PELVE/COLUNA", questions: 40, time: "80 min", topics: "Anel pélvico, acetábulo, odontoide, hangman, TLICS, Chance, sacro" },
  { num: 5, title: "SIMULADO INTEGRADO CICLO 2", questions: 60, time: "120 min", topics: "Todas as áreas do Ciclo 2 — Traumatologia completa" },
  { num: 6, title: "SIMULADO ESPECIAL — ENFOQUES", questions: 40, time: "80 min", topics: "Pediátrico, osteoporótico, gestante, polytrauma, metástase, atleta" },
];

const simuladosCiclo5 = [
  { code: "S5.1", week: "51", q: 80, time: "120 min", goal: "Baseline + mapa de lacunas" },
  { code: "S5.2", week: "56", q: 100, time: "150 min", goal: "Pressão intermediária + correção tipo A" },
  { code: "S5.3", week: "58", q: 120, time: "180 min", goal: "Resistência e gestão de tempo" },
  { code: "S5.4", week: "60", q: 120, time: "180 min", goal: "Pré-prova (condições reais)" },
];

function statusBadge(status: SimStatus) {
  if (status === "referencia") {
    return { label: "REFERÊNCIA NO PROGRAMA", className: "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)]/40" };
  }
  if (status === "ciclo5") {
    return { label: "CICLO 5 — PROTOCOLO", className: "text-[oklch(0.7_0.2_25)] border-[oklch(0.7_0.2_25)]/40" };
  }
  return { label: "PLANEJAMENTO FECHADO", className: "text-muted-foreground border-border" };
}

export default function Simulados() {
  return (
    <div>
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
          <p className="text-muted-foreground text-sm max-w-2xl mb-4">
            Blocos fechados com tempo controlado, nota de corte e análise de desempenho. Abaixo:{" "}
            <strong className="text-foreground">12 simulados mensais</strong> (linha do tempo TEOT),{" "}
            <strong className="text-foreground">6 simulados de combate do Ciclo 2</strong> e{" "}
            <strong className="text-foreground">4 simulados progressivos do Ciclo 5</strong>.
          </p>
          <p className="text-xs text-muted-foreground flex items-start gap-2 max-w-2xl">
            <BookMarked className="w-4 h-4 shrink-0 text-[oklch(0.55_0.22_25)] mt-0.5" />
            <span>
              Documento mestre do planejamento:{" "}
              <span className="font-mono text-[10px]">documentos/plano-simulados-integral.md</span>
            </span>
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-8">FORMATO DO SIMULADO</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {simuladoFormat.map((f) => (
              <div key={f.label} className="border border-border bg-card p-4 text-center">
                <div className="font-display text-lg text-[oklch(0.55_0.22_25)] font-bold">{f.value}</div>
                <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">
                  {f.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 simulados mensais */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-[oklch(0.55_0.22_25)]" />
            <h2 className="font-display text-2xl font-bold">12 SIMULADOS MENSAIS (LINHA DO TEMPO)</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            Um simulado por mês aproximado de calendário, alinhado aos ciclos e ao peso TEOT. Itens com{" "}
            <span className="text-[oklch(0.55_0.22_25)]">planejamento fechado</span> têm ficha técnica
            pronta para produção de questões; os marcados como referência amparam-se nos PDFs/MD já
            publicados do ciclo.
          </p>
          <div className="space-y-3">
            {simuladosMensais.map((s, i) => {
              const badge = statusBadge(s.status);
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border border-border bg-card p-4 sm:p-5 hover:border-[oklch(0.55_0.22_25)]/35 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <span className="font-display text-xl text-[oklch(0.55_0.22_25)] font-bold w-10 shrink-0">
                        {String(s.num).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold leading-snug">{s.title}</h3>
                        <p className="text-[10px] font-accent tracking-wider text-muted-foreground mt-1">
                          Sem. {s.week} · {s.cycle}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                      <span className={`font-accent text-[9px] tracking-wider px-2 py-1 border ${badge.className}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Meta {s.meta}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-2 pl-0 lg:pl-[52px]">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {s.q} questões
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[oklch(0.55_0.22_25)]" />
                      {s.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-0 lg:pl-[52px] leading-relaxed">{s.topics}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ciclo 2 */}
      <section className="py-16 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-2">SIMULADOS DE COMBATE — CICLO 2 (TRAUMA)</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Blocos temáticos para o período intensivo de traumatologia. Conteúdo alinhado ao material do Ciclo 2 no programa.
          </p>
          <div className="space-y-4">
            {simuladosCiclo2.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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

      {/* Ciclo 5 */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="font-display text-2xl font-bold mb-2">SIMULADOS PROGRESSIVOS — CICLO 5 (RETA FINAL)</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Sequência definida no protocolo do Ciclo 5. Cada etapa aumenta carga e exige correção ativa de erros antes da próxima.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {simuladosCiclo5.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-[oklch(0.55_0.22_25)]/30 bg-card p-5"
              >
                <div className="font-display text-lg text-[oklch(0.55_0.22_25)] font-bold mb-1">{s.code}</div>
                <div className="text-[10px] font-accent tracking-wider text-muted-foreground mb-3">
                  SEMANA {s.week}
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                  <span>
                    <Target className="inline w-3 h-3 mr-1 text-[oklch(0.55_0.22_25)]" />
                    {s.q} questões
                  </span>
                  <span>
                    <Clock className="inline w-3 h-3 mr-1 text-[oklch(0.55_0.22_25)]" />
                    {s.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-8">REGRAS DO SIMULADO</h2>
          <div className="space-y-4">
            {[
              "Ambiente silencioso, sem consulta. Simule condições reais de prova.",
              "Cronometre rigorosamente. Tempo por questão conforme ficha do simulado.",
              "Marque as questões com dúvida para revisão posterior.",
              "Após o simulado, revise TODAS as questões — inclusive as que acertou.",
              "Justifique por que cada alternativa errada está errada.",
              "Registre os erros no caderno de erros pessoal.",
              "Refaça as questões erradas após 7 dias (espaçamento).",
              "Meta: atingir a meta do bloco no 2º simulado equivalente ou na retomada.",
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
