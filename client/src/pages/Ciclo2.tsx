/* Ciclo 2 — Bunker Cirúrgico: Página dedicada à Traumatologia com vídeos, questões e roteiros */
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Video,
  FileText,
  ChevronDown,
  ChevronRight,
  Clock,
  BookOpen,
  Target,
  AlertTriangle,
  Crosshair,
  Skull,
} from "lucide-react";

/* ── Video Scripts Data ── */
const videos = [
  {
    num: 9,
    title: "Trauma Geral I — Fraturas Expostas",
    duration: "60 min",
    source: "Rockwood & Green's, Cap. 12-13",
    blocks: [
      { time: "0-15 min", content: "Epidemiologia. Classificação de Gustilo-Anderson: I, II, IIIA, IIIB, IIIC. Critérios de diferenciação. Particularidades pediátricas." },
      { time: "15-35 min", content: "Timing do desbridamento: regra das 6h vs desbridamento seriado. Antibioticoterapia: Cefazolina + Gentamicina (tipo III) + Penicilina (solo/fazenda)." },
      { time: "35-50 min", content: "Fixação temporária vs definitiva. Fixador externo como ponte. Cobertura de partes moles: retalhos locais vs livres. Timing 72h." },
      { time: "50-60 min", content: "Quiz: 5 questões — Gustilo IIIB, antibioticoterapia, timing cirúrgico." },
    ],
  },
  {
    num: 10,
    title: "Trauma Geral II — Síndrome Compartimental e Complicações",
    duration: "55 min",
    source: "Browner's Skeletal Trauma, Cap. 10-11",
    blocks: [
      { time: "0-20 min", content: "Diagnóstico: 6 P's, aferição de pressão (>30 mmHg ou Delta P <30). Populações especiais: crianças, sedados, anticoagulados." },
      { time: "20-40 min", content: "Fasciotomia: 4 compartimentos da perna, dupla incisão. Pós-fasciotomia: VAC, fechamento diferido." },
      { time: "40-50 min", content: "Embolia gordurosa: critérios de Gurd. TVP: profilaxia HBPM, diagnóstico, tratamento." },
      { time: "50-55 min", content: "Quiz: 5 questões — pressão compartimental, fasciotomia, embolia." },
    ],
  },
  {
    num: 11,
    title: "Trauma MS I — Úmero Proximal e Diafisário",
    duration: "65 min",
    source: "Rockwood & Green's, Cap. 33-35",
    blocks: [
      { time: "0-20 min", content: "Neer: 2, 3, 4 partes. Critérios de deslocamento. ORIF vs hemiartroplastia vs artroplastia reversa. Papel da idade e qualidade óssea." },
      { time: "20-40 min", content: "Diáfise: classificação AO. Haste IM anterógrada vs retrógrada. Nervo radial: incidência (18%), Holstein-Lewis." },
      { time: "40-55 min", content: "Complicações: rigidez, pseudoartrose, AVN da cabeça umeral." },
      { time: "55-65 min", content: "Quiz: 5 questões — Neer, indicação cirúrgica, nervo radial." },
    ],
  },
  {
    num: 12,
    title: "Trauma MS II — Rádio/Ulna, Monteggia e Galeazzi",
    duration: "60 min",
    source: "Campbell's, Cap. 57-58",
    blocks: [
      { time: "0-15 min", content: "Bado (Monteggia): tipos I-IV. Adulto vs criança. Linha radiocapitelar." },
      { time: "15-35 min", content: "Tratamento: placa DCP (adulto), redução incruenta (criança). Galeazzi: ORIF rádio + avaliação DRUJ." },
      { time: "35-50 min", content: "Complicações: instabilidade DRUJ, sinostose, Monteggia equivalente." },
      { time: "50-60 min", content: "Quiz: 5 questões — Bado, Galeazzi, complicações." },
    ],
  },
  {
    num: 13,
    title: "Trauma MS III — Cotovelo e Antebraço",
    duration: "55 min",
    source: "Rockwood & Green's, Cap. 36-39",
    blocks: [
      { time: "0-20 min", content: "Gartland (supracondiliana): I-IV. Avaliação neurovascular: NIA (extensão), ulnar (flexão). Fixação percutânea." },
      { time: "20-35 min", content: "Mason (cabeça rádio): I-IV. Conservador vs ORIF vs prótese. Essex-Lopresti: fratura + membrana interóssea + DRUJ." },
      { time: "35-50 min", content: "PLRI: mecanismo, pivot-shift lateral, LUCL. Tratamento cirúrgico." },
      { time: "50-55 min", content: "Quiz: 5 questões — Gartland, Mason, PLRI." },
    ],
  },
  {
    num: 14,
    title: "Trauma MI I — Fêmur Proximal e Diafisário",
    duration: "70 min",
    source: "Browner's, Cap. 48-52",
    blocks: [
      { time: "0-20 min", content: "Colo femoral: Pauwels (ângulo) e Garden (desvio). Jovens: parafusos canulados. Idosos: hemiartroplastia/ATQ. Intertrocantéricas: AO 31-A1 a A3." },
      { time: "20-40 min", content: "DHS vs haste cefalomedular. Cut-out: TAD >25 mm. Subtrocantéricas: biomecânica, haste cefalomedular." },
      { time: "40-55 min", content: "Diáfise: haste IM fresada anterógrada. Entrada: fossa piriforme vs trocânter. Complicações." },
      { time: "55-70 min", content: "Quiz: 5 questões + caso especial osteoporótico." },
    ],
  },
  {
    num: 15,
    title: "Trauma MI II — Tíbia e Perna",
    duration: "65 min",
    source: "Rockwood & Green's, Cap. 53-55",
    blocks: [
      { time: "0-20 min", content: "Diáfise tíbia: classificação AO. Haste IM: fresada vs não-fresada." },
      { time: "20-40 min", content: "Complicações: malrotação (>15°, TC), non-union (atrófica vs hipertrófica), Masquelet." },
      { time: "40-55 min", content: "Fraturas pediátricas: plástica, galho verde, Toddler. Angulação aceitável." },
      { time: "55-65 min", content: "Quiz: 5 questões — haste IM, non-union, pediátricas." },
    ],
  },
  {
    num: 16,
    title: "Trauma MI III — Joelho Periarticular",
    duration: "60 min",
    source: "Campbell's, Cap. 54-55",
    blocks: [
      { time: "0-20 min", content: "Platô tibial: Schatzker I-VI. Conservador vs ORIF vs fixador externo. Artroscopia assistida." },
      { time: "20-35 min", content: "Patela: transversa (tension band), cominuta (cerclagem/patelectomia), vertical (conservador)." },
      { time: "35-50 min", content: "Complicações: artrose pós-traumática, rigidez. Reabilitação." },
      { time: "50-60 min", content: "Quiz: 5 questões — Schatzker, tension band, complicações." },
    ],
  },
  {
    num: 17,
    title: "Pelve I — Anel Pélvico",
    duration: "55 min",
    source: "Browner's, Cap. 37-39",
    blocks: [
      { time: "0-15 min", content: "Tile (A, B, C) e Young-Burgess (LC, APC, VS, CM). Mecanismo vs padrão. Arco posterior." },
      { time: "15-35 min", content: "Fixação externa, parafusos SI percutâneos, placa sinfisária. Lençol pélvico, C-clamp." },
      { time: "35-50 min", content: "Manejo hemodinâmico: ressuscitação, embolização angiográfica, packing pré-peritoneal." },
      { time: "50-55 min", content: "Quiz: 5 questões — Tile, Young-Burgess, hemodinâmico." },
    ],
  },
  {
    num: 18,
    title: "Pelve II — Acetábulo",
    duration: "65 min",
    source: "Rockwood & Green's, Cap. 41-43",
    blocks: [
      { time: "0-20 min", content: "Judet-Letournel: 5 elementares + 5 associados. Radiografias de Judet (obturatriz/alar). TC 3D." },
      { time: "20-40 min", content: "Abordagens: Kocher-Langenbeck, ilioinguinal, Stoppa modificada, extensile. Indicações por padrão." },
      { time: "40-55 min", content: "Complicações: AVN (10-20%), ossificação heterotópica, nervo ciático, artrose. Profilaxia." },
      { time: "55-65 min", content: "Quiz: 5 questões — Judet-Letournel, abordagens, complicações." },
    ],
  },
  {
    num: 19,
    title: "Trauma Coluna I — Cérvico-Torácica",
    duration: "60 min",
    source: "Rockwood & Green's, Cap. 28-31",
    blocks: [
      { time: "0-20 min", content: "Odontoide: Anderson I, II, III. Tipo II: risco de non-union. Parafuso anterior vs fusão C1-C2 (Magerl/Harms). Hangman: Levine I, II, IIA, III." },
      { time: "20-40 min", content: "TLICS: morfologia + PLC + status neurológico. ≤3: conservador; ≥5: cirúrgico; 4: controverso." },
      { time: "40-55 min", content: "HALO vest. Fixação anterior (corpectomia/cage). Fixação posterior (pediculares/massa lateral). Spence (>7 mm)." },
      { time: "55-60 min", content: "Quiz: 5 questões — Anderson, Levine, TLICS." },
    ],
  },
  {
    num: 20,
    title: "Trauma Coluna II + Integração do Ciclo",
    duration: "70 min",
    source: "Browner's, Cap. 25-27 e 60-62",
    blocks: [
      { time: "0-25 min", content: "Lombossacral: Chance (flexão-distração, lesão visceral 50%), burst (retropulsão). Denis: 3 colunas. Sacro: Denis zonas I-III." },
      { time: "25-45 min", content: "Casos polytrauma: ISS elevado, instabilidade hemodinâmica. DCO vs ETC. Priorização de fixação." },
      { time: "45-60 min", content: "Revisão flashcards: classificações essenciais, condutas-chave, complicações. Mapa mental." },
      { time: "60-70 min", content: "Quiz: 10 questões integradas — todo o ciclo de traumatologia." },
    ],
  },
];

/* ── Sample Questions (showing first 5 from each block) ── */
const questionBlocks = [
  {
    title: "TRAUMA GERAL",
    subtitle: "Questões 1-10 — Expostas, Compartimental, Infecção",
    questions: [
      { num: 1, q: "Fratura exposta Gustilo IIIA de tíbia. Antibiótico inicial?", answer: "A", options: ["Cefazolina + Gentamicina", "Vancomicina", "Ceftriaxona", "Piperacilina"] },
      { num: 2, q: "Delta P (PAD - Pcompartimental) < 30 mmHg. Conduta?", answer: "B", options: ["Observação", "Fasciotomia", "Doppler", "TC"] },
      { num: 3, q: "Complicação mais comum de Gustilo IIIB?", answer: "A", options: ["Infecção", "Non-union", "Rigidez", "Malrotação"] },
      { num: 4, q: "Timing ideal para desbridamento de fratura exposta?", answer: "A", options: ["<6h", "<12h", "<24h", "Serial"] },
      { num: 5, q: "SDRA por embolia gordurosa pós-haste IM. Principal fator de risco?", answer: "A", options: ["Reaming", "Sem reaming", "Duração cirurgia", "Volume sangue"] },
    ],
  },
  {
    title: "TRAUMA MS",
    subtitle: "Questões 11-20 — Úmero, Rádio/Ulna, Cotovelo",
    questions: [
      { num: 11, q: "Neer III partes, <65 anos, deslocada. Indicação?", answer: "A", options: ["ORIF", "Sempre cirúrgico", "Conservador", "Prótese"] },
      { num: 12, q: "Monteggia Bado II. Tratamento?", answer: "A", options: ["Haste IM ulna + redução rádio", "ORIF ambos", "Fixador externo", "Conservador"] },
      { num: 13, q: "Gartland III em criança. Complicação mais temida?", answer: "C", options: ["Volkmann", "Cúbito valgo", "Volkmann + lesão fisária", "Rigidez"] },
      { num: 14, q: "Essex-Lopresti. Lesão associada?", answer: "A", options: ["Cabeça rádio + DRUJ", "Ulna isolada", "Monteggia", "Galeazzi"] },
      { num: 15, q: "Complicação mais comum pós-haste IM úmero?", answer: "A", options: ["Dor no ombro", "Non-union", "Lesão n. radial", "Fratura periprotética"] },
    ],
  },
  {
    title: "TRAUMA MI",
    subtitle: "Questões 21-30 — Fêmur, Tíbia, Joelho",
    questions: [
      { num: 21, q: "Colo femoral Garden III em idoso. Fixação?", answer: "C", options: ["Parafusos canulados", "DHS", "Hemiartroplastia", "ATQ"] },
      { num: 22, q: "Intertrocantérica AO 31-A2. Implante?", answer: "A", options: ["Gamma nail", "DHS", "Placa 95°", "Conservador"] },
      { num: 23, q: "Diáfise tíbia oblíqua 42°. Fixação?", answer: "B", options: ["Haste IM", "Placa + lag screw", "Fixador externo", "Conservador"] },
      { num: 24, q: "Platô tibial Schatzker II. Abordagem?", answer: "A", options: ["Lateral", "Medial", "Dupla", "Posterior"] },
      { num: 25, q: "Patela transversa deslocada. Tratamento?", answer: "A", options: ["Tension band wiring", "K-wires isolados", "Cerclagem simples", "Conservador"] },
    ],
  },
  {
    title: "PELVE + COLUNA",
    subtitle: "Questões 31-40 — Anel Pélvico, Acetábulo, Coluna",
    questions: [
      { num: 31, q: "Young-Burgess LC II. É instável?", answer: "A", options: ["Sim, fixação SI", "Não", "Fixação externa", "Conservador"] },
      { num: 32, q: "Acetábulo coluna posterior. Abordagem?", answer: "A", options: ["Kocher-Langenbeck", "Ilioinguinal", "Stoppa", "Anterior"] },
      { num: 33, q: "Odontoide tipo II, >50 anos. Tratamento?", answer: "B", options: ["HALO vest", "Fusão C1-C2", "Colar cervical", "Fusão occipitocervical"] },
      { num: 34, q: "Hangman Levine II com angulação. Fixação?", answer: "A", options: ["Fusão C2-C3", "HALO", "Fixação anterior C2", "HALO vest"] },
      { num: 35, q: "Burst T12 + lesão PLC pelo TLICS. Conduta?", answer: "A", options: ["Cirurgia", "Conservador", "Sempre cirúrgico", "Apenas se déficit"] },
    ],
  },
];

/* ── Collapsible Component ── */
function Collapsible({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[oklch(0.55_0.22_25)]/5 transition-colors"
      >
        <div>
          <span className="font-display text-sm font-bold">{title}</span>
          {subtitle && (
            <span className="block font-accent text-[10px] tracking-wider text-muted-foreground mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[oklch(0.55_0.22_25)] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="border-t border-border">{children}</div>}
    </div>
  );
}

export default function Ciclo2() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/modules-section-sSMnHXxBKNgRVVGrVvXJCK.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              MESES 3-5 | SEMANAS 9-22 | 35-40% DO TEOT
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            CICLO 2 — <span className="text-[oklch(0.55_0.22_25)]">TRAUMATOLOGIA</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-8">
            O bloco de maior peso no TEOT. Fraturas de ossos longos, expostas e pelve
            representam 60% das questões de trauma. 80 questões comentadas, 12 vídeos
            técnicos e simulados por bloco.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: FileText, value: "80", label: "QUESTÕES" },
              { icon: Video, value: "12", label: "VÍDEOS" },
              { icon: Clock, value: "14", label: "SEMANAS" },
              { icon: Target, value: "85%", label: "META ACERTO" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <s.icon className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
                <span className="font-display text-lg font-bold">{s.value}</span>
                <span className="font-accent text-[10px] tracking-widest text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 bg-[oklch(0.09_0.005_0)] border-b border-border">
        <div className="container">
          <h2 className="font-display text-xl font-bold mb-6">OBJETIVOS DO CICLO</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "CLASSIFICAR", desc: "Dominar Gustilo, AO, Neer, Schatzker, Tile, Young-Burgess, Judet-Letournel", meta: ">90%" },
              { title: "INDICAR", desc: "Escolher fixação adequada para fraturas comuns de trauma", meta: ">85%" },
              { title: "COMPLICAÇÕES", desc: "Reconhecer e tratar compartimental, infecção, embolia gordurosa", meta: ">80%" },
              { title: "INTEGRAR", desc: "Resolver casos complexos de polytrauma com múltiplas fraturas", meta: ">85%" },
            ].map((o) => (
              <div key={o.title} className="border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-sm font-bold">{o.title}</span>
                  <span className="font-accent text-[10px] text-[oklch(0.55_0.22_25)]">{o.meta}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="font-display text-xl font-bold mb-6">ROTEIRO SEMANAL</h2>
          <div className="space-y-2">
            {[
              { w: "9-11", topic: "Trauma Geral", detail: "Expostas (Gustilo), compartimental, infecção, embolia, TVP, damage control" },
              { w: "12-14", topic: "Membro Superior", detail: "Úmero proximal (Neer), diáfise (n. radial), rádio/ulna (Monteggia/Galeazzi), cotovelo" },
              { w: "15-17", topic: "Membro Inferior", detail: "Fêmur proximal (Garden/Pauwels), diáfise (haste IM), tíbia, joelho periarticular (Schatzker)" },
              { w: "18-20", topic: "Pelve/Acetábulo + Coluna", detail: "Tile, Young-Burgess, Judet-Letournel, odontoide, hangman, TLICS, Chance" },
              { w: "21-22", topic: "Integração e Revisão", detail: "Simulado completo, flashcards, casos integrados de polytrauma" },
            ].map((item) => (
              <div key={item.w} className="flex items-start gap-4 p-3 border border-border/50 hover:border-[oklch(0.55_0.22_25)]/30 transition-colors">
                <span className="font-accent text-xs text-[oklch(0.55_0.22_25)] w-16 shrink-0 pt-0.5">
                  SEM {item.w}
                </span>
                <div>
                  <span className="font-display text-sm font-bold">{item.topic}</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Scripts */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              12 VÍDEOS TÉCNICOS
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-8">
            ROTEIROS DE <span className="text-[oklch(0.55_0.22_25)]">VÍDEOS</span>
          </h2>
          <div className="space-y-3">
            {videos.map((v) => (
              <Collapsible
                key={v.num}
                title={`VÍDEO ${v.num} — ${v.title}`}
                subtitle={`${v.duration} | ${v.source}`}
              >
                <div className="p-4 space-y-2">
                  {v.blocks.map((b, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs">
                      <span className="font-accent text-[oklch(0.55_0.22_25)] w-20 shrink-0">
                        {b.time}
                      </span>
                      <span className="text-muted-foreground">{b.content}</span>
                    </div>
                  ))}
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Preview */}
      <section className="py-12 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              80 QUESTÕES COMENTADAS
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">
            QUESTÕES DO <span className="text-[oklch(0.55_0.22_25)]">CICLO 2</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            40 questões originais + 40 questões NOVAS com enfoques especiais (pediátrico,
            osteoporótico, polytrauma, gestante, atleta, metástase). Todas com gabarito,
            comentário técnico, pérola de prova e armadilha clássica.
          </p>

          <div className="space-y-3">
            {questionBlocks.map((block) => (
              <Collapsible
                key={block.title}
                title={block.title}
                subtitle={block.subtitle}
              >
                <div className="p-4 space-y-3">
                  {block.questions.map((q) => (
                    <div key={q.num} className="border border-border/50 p-3">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="font-accent text-[oklch(0.55_0.22_25)] text-xs shrink-0">
                          Q{q.num}
                        </span>
                        <span className="text-xs text-foreground">{q.q}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 ml-6">
                        {q.options.map((opt, oi) => {
                          const letter = String.fromCharCode(65 + oi);
                          const isCorrect = letter === q.answer;
                          return (
                            <div
                              key={oi}
                              className={`text-[11px] px-2 py-1 ${
                                isCorrect
                                  ? "text-[oklch(0.55_0.22_25)] border-l-2 border-[oklch(0.55_0.22_25)]"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {letter}) {opt}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <span className="font-accent text-[10px] tracking-widest text-muted-foreground">
                      MOSTRANDO 5 DE 10 QUESTÕES — DOCUMENTO COMPLETO DISPONÍVEL
                    </span>
                  </div>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Analysis */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="font-display text-xl font-bold mb-6">ANÁLISE DE PADRÕES</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">50%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">CLASSIFICAÇÕES</div>
              <p className="text-[10px] text-muted-foreground mt-2">Gustilo, AO, Neer, Schatzker, Tile, Young-Burgess, Judet-Letournel</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">30%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">CONDUTA ADEQUADA</div>
              <p className="text-[10px] text-muted-foreground mt-2">Timing cirúrgico, escolha de implante, damage control vs ETC</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">20%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">COMPLICAÇÕES</div>
              <p className="text-[10px] text-muted-foreground mt-2">Compartimental, infecção, embolia, AVN, non-union, cut-out</p>
            </div>
          </div>

          {/* Common Errors */}
          <h3 className="font-display text-lg font-bold mb-4">ERROS MAIS PROVÁVEIS</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Confundir classificações pediátricas com adultas",
              "Subestimar reversão de anticoagulação antes de fasciotomia",
              "Aplicar conduta de jovem em paciente osteoporótico",
              "Não reconhecer fratura patológica por metástase",
              "Confundir TLICS borderline (score 4) com indicação absoluta",
              "Não associar Chance com lesão visceral abdominal",
              "Escolher ETC em vez de DCO em polytrauma com ISS alto",
              "Desconhecer manejo de fraturas pélvicas em gestante",
            ].map((err, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground p-2 border border-border/30">
                <AlertTriangle className="w-3 h-3 text-[oklch(0.55_0.22_25)] shrink-0 mt-0.5" />
                {err}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.09_0.005_0)]">
        <div className="container text-center">
          <Skull className="w-8 h-8 text-[oklch(0.55_0.22_25)] mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-3">
            DOMINE A TRAUMATOLOGIA
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6">
            35-40% do TEOT. Não há aprovação sem dominar este bloco.
            80 questões, 12 vídeos, 14 semanas. A hora é agora.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-[oklch(0.55_0.22_25)] text-white font-accent text-sm tracking-wider px-6 py-3 hover:bg-[oklch(0.45_0.22_25)] transition-colors no-underline"
            >
              VOLTAR AO TOPO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
