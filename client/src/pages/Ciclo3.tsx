/* Ciclo 3 — Bunker Cirúrgico: Página dedicada à Ortopedia Clínica com vídeos, questões e caderno de guerra */
import { useState } from "react";
import {
  Video,
  FileText,
  ChevronDown,
  Clock,
  BookOpen,
  Target,
  AlertTriangle,
  Skull,
  Bone,
  Stethoscope,
  Brain,
} from "lucide-react";

/* ── Video Scripts Data ── */
const videos = [
  {
    num: 21,
    title: "Coluna Degenerativa I — Hérnia Discal e Estenose Lombar",
    duration: "60 min",
    source: "Campbell's Cap. 37-39, Rothman-Simeone",
    blocks: [
      { time: "0-15 min", content: "Epidemiologia da doença degenerativa discal. Anatomia do disco intervertebral. Cascata de Kirkaldy-Willis: disfunção → instabilidade → reestabilização." },
      { time: "15-30 min", content: "Hérnia discal lombar: posterolateral vs foraminal vs central. Relação raiz-nível. L4-L5 posterolateral = L5. L4-L5 foraminal = L4 (PEGADINHA CLÁSSICA)." },
      { time: "30-45 min", content: "Estenose lombar: absoluta (<10mm) vs relativa. Claudicação neurogênica vs vascular (carrinho de supermercado). Indicações cirúrgicas: laminectomia ± fusão." },
      { time: "45-55 min", content: "Síndrome da cauda equina: emergência cirúrgica <48h. Retenção urinária + anestesia em sela + déficit bilateral." },
      { time: "55-60 min", content: "Quiz: 5 questões — hérnia foraminal, estenose, cauda equina." },
    ],
  },
  {
    num: 22,
    title: "Coluna Degenerativa II — Cervical e Deformidades",
    duration: "65 min",
    source: "Campbell's Cap. 40-44, Lenke JBJS 2001",
    blocks: [
      { time: "0-20 min", content: "Mielopatia cervical: sinais (Hoffmann, Babinski, Lhermitte). JOA score <12 = cirurgia. ACDF (1-2 níveis) vs laminoplastia (≥3 níveis). OPLL." },
      { time: "20-35 min", content: "Prótese discal cervical: indicações e contraindicações (mielopatia, OPLL, instabilidade, artrose facetária). Doença do segmento adjacente." },
      { time: "35-50 min", content: "Escoliose idiopática: Lenke 1-6. Risser 0-1 = alto risco progressão. Colete 25-45°. Cirurgia >45-50°. Escoliose do adulto degenerativa." },
      { time: "50-60 min", content: "Espondilolistese: Meyerding I-V. Wiltse I-V. Ístmica (L5-S1, jovem) vs degenerativa (L4-L5, idoso, sem lise)." },
      { time: "60-65 min", content: "Quiz: 5 questões — mielopatia, Lenke, espondilolistese." },
    ],
  },
  {
    num: 23,
    title: "Ombro I — Manguito Rotador e Impacto",
    duration: "60 min",
    source: "Rockwood Cap. 14-15, Campbell's Cap. 46",
    blocks: [
      { time: "0-15 min", content: "Anatomia do manguito: supraespinhal, infraespinhal, subescapular, redondo menor. Zona crítica de Codman. Bigliani I-III (acrômio)." },
      { time: "15-30 min", content: "Testes especiais: Jobe (supraespinhal), Gerber/belly-press (subescapular), Patte (infraespinhal), Neer e Hawkins (impacto)." },
      { time: "30-45 min", content: "Classificação de Goutallier (degeneração gordurosa 0-4). Patte (retração 1-3). Goutallier ≥3 = irreparável. Artropatia do manguito (CTA) → artroplastia reversa." },
      { time: "45-55 min", content: "Tratamento: conservador vs artroscópico vs aberto. Reparo em fileira simples vs dupla. Indicações de artroplastia reversa." },
      { time: "55-60 min", content: "Quiz: 5 questões — testes, Goutallier, CTA." },
    ],
  },
  {
    num: 24,
    title: "Ombro II — Instabilidade Glenoumeral",
    duration: "55 min",
    source: "Rockwood Cap. 16-17",
    blocks: [
      { time: "0-15 min", content: "TUBS vs AMBRI. Lesão de Bankart (labral anterior). Hill-Sachs (impactação posterolateral). Perda óssea glenoidal: >20-25% = Latarjet." },
      { time: "15-30 min", content: "Instabilidade posterior: mecanismo (convulsão, eletrocussão), sinal da lâmpada (RX AP). Instabilidade multidirecional: sulcus sign." },
      { time: "30-45 min", content: "SLAP: tipos I-IV. Tipo II = mais comum e mais cirúrgico. O'Brien test. Atleta overhead >35 anos: tenodese vs reparo. Luxação acromioclavicular: Rockwood I-VI." },
      { time: "45-55 min", content: "Quiz: 5 questões — Bankart vs Latarjet, SLAP, instabilidade posterior." },
    ],
  },
  {
    num: 25,
    title: "Cotovelo e Antebraço — Patologia Não-Traumática",
    duration: "55 min",
    source: "Campbell's Cap. 68-70",
    blocks: [
      { time: "0-15 min", content: "Epicondilite lateral: ECRB (não ECRL). Tendinose (não tendinite). Arco funcional de Morrey: 30-130° flexão, 50° prono/supinação." },
      { time: "15-30 min", content: "Neuropatia ulnar no cotovelo: McGowan I-III. Transposição anterior (submuscular vs subcutânea). Síndrome do túnel cubital." },
      { time: "30-45 min", content: "Artrose do cotovelo: Outerbridge-Kashiwagi (fenestração). Rigidez pós-traumática: liberação artroscópica vs aberta. Ossificação heterotópica." },
      { time: "45-55 min", content: "Quiz: 5 questões — epicondilite, neuropatia ulnar, rigidez." },
    ],
  },
  {
    num: 26,
    title: "Mão e Punho — Tendões, Nervos e Artrite",
    duration: "60 min",
    source: "Green's Operative Hand Surgery 8th Ed",
    blocks: [
      { time: "0-15 min", content: "STC: diagnóstico (Phalen, Tinel, ENMG). Atrofia tenar = cirurgia obrigatória. Ramo recorrente motor: variações de Lanz. Liberação do retináculo." },
      { time: "15-30 min", content: "Tendões flexores: zonas de Verdan (I-V). Zona II = no man's land. Reparo primário + protocolo de mobilização precoce. Dedo em gatilho: Green I-IV." },
      { time: "30-45 min", content: "Dupuytren: indicação cirúrgica (MCF >30° OU IFP qualquer grau). Diátese agressiva: jovem, bilateral, Garrod, Ledderhose, Peyronie. Rizartrose: Eaton-Littler I-IV." },
      { time: "45-55 min", content: "Kienböck (NAV semilunar): Lichtman I-IV. IIIA vs IIIB (colapso carpiano). Artrite reumatoide: deformidades (swan-neck, boutonnière, polegar em Z)." },
      { time: "55-60 min", content: "Quiz: 5 questões — STC, Dupuytren, Kienböck, zonas de Verdan." },
    ],
  },
  {
    num: 27,
    title: "Quadril I — Artrose e Artroplastia",
    duration: "65 min",
    source: "Campbell's Cap. 3-6",
    blocks: [
      { time: "0-15 min", content: "Artrose do quadril: primeiro sinal = limitação da rotação interna. Tönnis 0-3. Indicações de ATQ: dor refratária + limitação funcional + Tönnis ≥2." },
      { time: "15-30 min", content: "Abordagens: posterior (Moore), anterolateral (Hardinge), anterior direta (Hueter). Riscos: ciático (posterior), glúteo superior (anterolateral), cutâneo femoral lateral (anterior)." },
      { time: "30-45 min", content: "Complicações: luxação (posterior = mais comum via posterior), infecção, fratura periprotética, osteólise, desgaste. Comprimento do membro." },
      { time: "45-60 min", content: "Revisão de ATQ: Paprosky acetabular (I, IIA-C, IIIA-B) e femoral (I-IV). Infecção periprotética: Tsukayama I-IV. 2 tempos para crônica." },
      { time: "60-65 min", content: "Quiz: 5 questões — abordagens, Paprosky, Tsukayama." },
    ],
  },
  {
    num: 28,
    title: "Quadril II — NAV, FAI e Displasia",
    duration: "60 min",
    source: "Campbell's Cap. 7-10",
    blocks: [
      { time: "0-15 min", content: "NAV da cabeça femoral: causa não-traumática mais comum = corticoide. Ficat I-IV. ARCO I-IV. Ficat I = RX e RM normais. Ficat II = RX normal + RM positiva." },
      { time: "15-30 min", content: "Tratamento NAV: Ficat I-II = descompressão central ± enxerto vascularizado. Ficat III-IV = ATQ. Colapso = ponto sem retorno." },
      { time: "30-45 min", content: "FAI: CAM (ângulo alfa >55°) vs PINCER (cross-over sign = retroversão). Tipo misto (mais comum). Artroscopia: contraindicada se Tönnis ≥2." },
      { time: "45-55 min", content: "Displasia do quadril: Crowe I-IV. PAO de Ganz: jovem, sem artrose avançada, congruência preservada. Crowe III-IV = ATQ complexa." },
      { time: "55-60 min", content: "Quiz: 5 questões — Ficat, FAI, Crowe, PAO." },
    ],
  },
  {
    num: 29,
    title: "Joelho I — Artrose e Artroplastia",
    duration: "65 min",
    source: "Campbell's Cap. 45-46, Insall Surgery of the Knee",
    blocks: [
      { time: "0-15 min", content: "Artrose do joelho: Kellgren-Lawrence 0-4. Eixo mecânico. Deformidade em varo (mais comum) vs valgo. Indicações de ATJ: KL 3-4 + dor refratária." },
      { time: "15-30 min", content: "HTO vs UKA vs ATJ. HTO: <60 anos, varo <15°, LCA pode estar deficiente. UKA: LCA DEVE estar íntegro, varo <10°. Ponto de Fujisawa: 62%." },
      { time: "30-45 min", content: "ATJ: PS vs CR. Valgo grave: liberação lateral, implante constrito. Revisão: AORI I-III. Infecção = causa mais comum de revisão precoce." },
      { time: "45-60 min", content: "Complicações ATJ: infecção, instabilidade, rigidez, fratura periprotética, desgaste do polietileno. Artrofibrose: manipulação sob anestesia <12 semanas." },
      { time: "60-65 min", content: "Quiz: 5 questões — HTO vs UKA, AORI, complicações." },
    ],
  },
  {
    num: 30,
    title: "Joelho II — Ligamentos, Meniscos e Patela",
    duration: "60 min",
    source: "Campbell's Cap. 45, Insall Surgery of the Knee",
    blocks: [
      { time: "0-15 min", content: "LCA: Lachman (mais sensível), pivot-shift (mais específico). Menisco lateral (agudo) vs medial (crônico). Reconstrução: enxerto autólogo (patelar, isquiotibiais)." },
      { time: "15-30 min", content: "LCP: dashboard injury. Grau III (>10mm) = cirurgia. Lesão multiligamentar (Schenck I-V): SEMPRE avaliar poplítea (arteriografia/angioTC)." },
      { time: "30-45 min", content: "Meniscos: zona vermelha-vermelha (reparo) vs branca-branca (meniscectomia). Menisco discoide (Watanabe): saucerização. OCD: estável vs instável." },
      { time: "45-55 min", content: "Instabilidade patelar: MPFL (estabilizador primário). Dejour A-D (displasia troclear). Insall-Salvati >1,2 = patela alta. 1º episódio = conservador." },
      { time: "55-60 min", content: "Quiz: 5 questões — LCA, LCP, menisco, instabilidade patelar." },
    ],
  },
  {
    num: 31,
    title: "Tornozelo e Pé I — Tendões, Instabilidade e Artrose",
    duration: "60 min",
    source: "Campbell's Cap. 82-85, Myerson Foot Ankle Clin",
    blocks: [
      { time: "0-15 min", content: "Pé plano adquirido do adulto: TTP (causa primária). Johnson-Strom/Myerson I-IV. Single heel rise test. Too many toes sign." },
      { time: "15-30 min", content: "Tratamento por estágio: I = sinovectomia. II = FDL + osteotomia calcâneo (Evans se >40% descoberta). III = artrodese tríplice. IV = pantalar." },
      { time: "30-45 min", content: "Tendão de Aquiles: Thompson test. Ruptura aguda: reparo cirúrgico (jovem/ativo) vs conservador (idoso/comorbidades). Ruptura crônica: reconstrução com FHL." },
      { time: "45-55 min", content: "Instabilidade lateral crônica: Broström-Gould (padrão-ouro). Artrose do tornozelo: artrodese vs artroplastia total." },
      { time: "55-60 min", content: "Quiz: 5 questões — TTP, Aquiles, instabilidade lateral." },
    ],
  },
  {
    num: 32,
    title: "Tornozelo e Pé II — Hallux, Deformidades e Integração do Ciclo",
    duration: "70 min",
    source: "Campbell's Cap. 85-87, Sanders R CORR 1993, Hawkins LG JBJS 1970",
    blocks: [
      { time: "0-15 min", content: "Hallux valgus: ângulo HV e IMA. Chevron (leve), Scarf/proximal (moderado), Lapidus (hipermobilidade). Hallux rigidus: Coughlin 0-4. Queilectomia vs artrodese." },
      { time: "15-30 min", content: "Pé cavo: teste de Coleman (positivo = varo flexível do antepé). CMT (Charcot-Marie-Tooth). Neuroma de Morton: 3º espaço. Fascite plantar: primeiro passo." },
      { time: "30-45 min", content: "Fratura do tálus: Hawkins I-IV. Hawkins sign POSITIVO = BOM prognóstico. Fratura do calcâneo: Sanders I-IV (TC). Sanders IV = artrodese primária." },
      { time: "45-55 min", content: "Coalização tarsal: calcaneonavicular vs talocalcanear. Lisfranc: fleck sign. Charcot (pé diabético): Eichenholtz. Neuropatia de Baxter." },
      { time: "55-65 min", content: "Revisão integrada do Ciclo 3: flashcards de classificações, comparações, pegadinhas. Mapa mental de ortopedia clínica." },
      { time: "65-70 min", content: "Quiz: 10 questões integradas — todo o ciclo de ortopedia clínica." },
    ],
  },
];

/* ── Sample Questions ── */
const questionBlocks = [
  {
    title: "COLUNA DEGENERATIVA",
    subtitle: "Questões 1-10 — Hérnia, Estenose, Mielopatia, Escoliose, Espondilolistese",
    questions: [
      { num: 1, q: "Hérnia foraminal L4-L5. Qual raiz é comprimida?", answer: "B", options: ["L5", "L4", "L3", "S1"] },
      { num: 2, q: "Claudicação neurogênica: alivia com qual posição?", answer: "A", options: ["Flexão do tronco", "Extensão", "Decúbito dorsal", "Sentado ereto"] },
      { num: 3, q: "Mielopatia cervical com JOA <12. Conduta?", answer: "A", options: ["Cirurgia", "Colar cervical", "Fisioterapia", "Infiltração"] },
      { num: 4, q: "Escoliose idiopática 50° em Risser 1. Tratamento?", answer: "B", options: ["Colete", "Cirurgia (artrodese)", "Observação", "Fisioterapia"] },
      { num: 5, q: "Espondilolistese degenerativa L4-L5. Há lise da pars?", answer: "B", options: ["Sim", "Não", "Às vezes", "Só em jovens"] },
    ],
  },
  {
    title: "OMBRO / COTOVELO / MÃO",
    subtitle: "Questões 11-20 — Manguito, Instabilidade, STC, Dupuytren, Kienböck",
    questions: [
      { num: 11, q: "Goutallier ≥3 no supraespinhal. Reparo isolado é indicado?", answer: "B", options: ["Sim", "Não — considerar reversa", "Só se <60 anos", "Sim, com PRP"] },
      { num: 12, q: "Perda óssea glenoidal >25%. Procedimento indicado?", answer: "A", options: ["Latarjet", "Bankart artroscópico", "Remplissage", "Putti-Platt"] },
      { num: 13, q: "SLAP tipo II em atleta overhead de 38 anos. Melhor opção?", answer: "B", options: ["Reparo com âncoras", "Tenodese do bíceps", "Desbridamento", "Conservador"] },
      { num: 14, q: "STC com atrofia tenar. Conduta?", answer: "A", options: ["Liberação cirúrgica", "Imobilização noturna", "Infiltração", "ENMG e observar"] },
      { num: 15, q: "Kienböck IIIB. Diferença para IIIA?", answer: "A", options: ["Colapso carpiano presente", "Necrose mais extensa", "Fratura do semilunar", "Artrose radiocarpiana"] },
    ],
  },
  {
    title: "QUADRIL / JOELHO",
    subtitle: "Questões 21-30 — ATQ, NAV, FAI, ATJ, LCA, Menisco",
    questions: [
      { num: 21, q: "ATQ via posterior. Nervo em risco?", answer: "A", options: ["Ciático", "Femoral", "Obturatório", "Glúteo superior"] },
      { num: 22, q: "Paprosky IIIB acetabular. Tratamento?", answer: "A", options: ["Cage/anel de reconstrução", "Cúpula cimentada", "Jumbo cup", "Revisão simples"] },
      { num: 23, q: "NAV Ficat II. Qual exame é positivo?", answer: "B", options: ["RX", "RM", "TC", "Cintilografia apenas"] },
      { num: 24, q: "FAI tipo CAM. Ângulo alfa?", answer: "A", options: [">55°", "<45°", ">70° apenas", "Normal"] },
      { num: 25, q: "UKA: LCA deve estar como?", answer: "A", options: ["Íntegro", "Pode estar rompido", "Irrelevante", "Parcialmente rompido"] },
    ],
  },
  {
    title: "TORNOZELO / PÉ",
    subtitle: "Questões 31-40 — TTP, Aquiles, Hallux, Tálus, Calcâneo",
    questions: [
      { num: 31, q: "Pé plano estágio III (Johnson-Strom). Tratamento?", answer: "A", options: ["Artrodese tríplice", "FDL + osteotomia", "Sinovectomia", "Órtese"] },
      { num: 32, q: "Hawkins sign positivo na fratura do tálus. Significa?", answer: "A", options: ["Bom prognóstico (revascularização)", "Necrose avascular", "Infecção", "Consolidação viciosa"] },
      { num: 33, q: "Sanders tipo IV do calcâneo. Conduta?", answer: "B", options: ["RAFI", "Artrodese subtalar primária", "Conservador", "Fixador externo"] },
      { num: 34, q: "Teste de Coleman positivo. O que indica?", answer: "A", options: ["Varo flexível do antepé", "Varo rígido do retropé", "Pé plano", "Equino fixo"] },
      { num: 35, q: "Neuroma de Morton. Espaço mais acometido?", answer: "A", options: ["3º intermetatarsal", "2º intermetatarsal", "1º intermetatarsal", "4º intermetatarsal"] },
    ],
  },
];

/* ── Caderno de Guerra Flash Points ── */
const flashPoints = [
  { area: "COLUNA", points: [
    "Hérnia foraminal L4-L5 = comprime L4 (não L5)",
    "Estenose absoluta = canal <10mm",
    "Mielopatia cervical: Hoffmann, Babinski, JOA <12 = cirurgia",
    "Espondilolistese degenerativa = SEM lise da pars, nível L4-L5",
    "Doença do segmento adjacente: nível ACIMA da fusão",
  ]},
  { area: "OMBRO/MS", points: [
    "Zona crítica de Codman: área hipovascular do supraespinhal",
    "Goutallier ≥3 = irreparável (considerar reversa)",
    "Perda óssea glenoidal >20-25% = Latarjet (não Bankart)",
    "Epicondilite lateral = ECRB (tendinose, não tendinite)",
    "Dupuytren: MCF >30° OU IFP qualquer grau = cirurgia",
  ]},
  { area: "QUADRIL", points: [
    "Primeiro sinal de artrose = limitação da rotação interna",
    "NAV: causa não-traumática mais comum = corticoide",
    "Ficat II = RX normal + RM positiva",
    "Vancouver B2 = haste SOLTA → revisão",
    "FAI: artroscopia contraindicada se Tönnis ≥2",
  ]},
  { area: "JOELHO", points: [
    "Lachman = mais sensível para LCA",
    "Pivot-shift = mais específico para LCA",
    "UKA: LCA DEVE estar íntegro",
    "1º episódio instabilidade patelar = conservador",
    "HTO: ponto de Fujisawa = 62% do platô tibial",
  ]},
  { area: "PÉ/TORNOZELO", points: [
    "TTP = causa primária do pé plano adquirido",
    "Hawkins sign POSITIVO = BOM prognóstico",
    "Sanders IV = artrodese subtalar primária",
    "Teste de Coleman positivo = varo flexível do ANTEPÉ",
    "Lisfranc: fleck sign = patognomônico",
  ]},
];

/* ── Top 10 Errors ── */
const topErrors = [
  "Confundir hérnia foraminal com posterolateral (raiz errada)",
  "Indicar Bankart para perda óssea glenoidal >25%",
  "Confundir Ficat I com II (RX vs RM)",
  "Indicar artroscopia na artrose avançada (Tönnis ≥2)",
  "Confundir Vancouver B1 com B2 (estabilidade da haste)",
  "Tratar instabilidade patelar primária com cirurgia",
  "Achar que Hawkins sign = necrose (é o contrário)",
  "Confundir pé plano estágio II com III (flexível vs rígido)",
  "Indicar UKA com LCA rompido",
  "Não reconhecer Dupuytren com diátese agressiva",
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

export default function Ciclo3() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/simulados-section-Gg5gSQYPOWgGKDqYCyZDwJ.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              MESES 6-8 | SEMANAS 23-36 | 25-30% DO TEOT
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            CICLO 3 — <span className="text-[oklch(0.55_0.22_25)]">ORTOPEDIA CLÍNICA</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-8">
            O segundo maior bloco do TEOT. Coluna degenerativa, ombro, mão, quadril, joelho,
            tornozelo e pé. 80 questões comentadas, 12 vídeos técnicos, Caderno de Guerra
            com flash points e tabelas mentais.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: FileText, value: "80", label: "QUESTÕES" },
              { icon: Video, value: "12", label: "VÍDEOS" },
              { icon: Clock, value: "14", label: "SEMANAS" },
              { icon: Target, value: "85%", label: "META ACERTO" },
              { icon: BookOpen, value: "1", label: "CADERNO DE GUERRA" },
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
              { title: "CLASSIFICAR", desc: "Dominar Lenke, Meyerding, Goutallier, Tönnis, Ficat, Kellgren-Lawrence, Johnson-Strom, Sanders, Hawkins", meta: ">90%", icon: Brain },
              { title: "INDICAR", desc: "Escolher tratamento adequado para patologias clínicas comuns: conservador vs cirúrgico", meta: ">85%", icon: Target },
              { title: "DIFERENCIAR", desc: "Distinguir patologias semelhantes: ístmica vs degenerativa, CAM vs PINCER, HTO vs UKA", meta: ">80%", icon: Stethoscope },
              { title: "INTEGRAR", desc: "Resolver casos complexos combinando classificação, imagem, exame físico e conduta", meta: ">85%", icon: Bone },
            ].map((o) => (
              <div key={o.title} className="border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <o.icon className="w-4 h-4 text-[oklch(0.55_0.22_25)]" />
                    <span className="font-display text-sm font-bold">{o.title}</span>
                  </div>
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
              { w: "23-25", topic: "Coluna Degenerativa e Deformidades", detail: "Hérnia discal (posterolateral vs foraminal), estenose, mielopatia cervical, ACDF vs laminoplastia, escoliose (Lenke), espondilolistese (Meyerding/Wiltse)" },
              { w: "26-28", topic: "Ombro, Cotovelo, Mão e Punho", detail: "Manguito (Goutallier/Patte), instabilidade (TUBS/AMBRI, Latarjet), SLAP, epicondilite, STC, Dupuytren, Kienböck, artrite reumatoide" },
              { w: "29-31", topic: "Quadril e Joelho", detail: "ATQ (abordagens, Paprosky, Tsukayama), NAV (Ficat), FAI (CAM/PINCER), displasia (Crowe), ATJ (KL, HTO vs UKA), LCA, meniscos, patela" },
              { w: "32-34", topic: "Tornozelo e Pé", detail: "TTP (Johnson-Strom), Aquiles, instabilidade lateral (Broström), hallux valgus/rigidus, pé cavo (Coleman), tálus (Hawkins), calcâneo (Sanders), Lisfranc, Charcot" },
              { w: "35-36", topic: "Integração e Revisão", detail: "Simulado completo, Caderno de Guerra, flashcards de classificações, casos integrados multitema" },
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
            QUESTÕES DO <span className="text-[oklch(0.55_0.22_25)]">CICLO 3</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            40 questões originais + 40 questões NOVAS com enfoques especiais (acondroplasia,
            gestante, atleta overhead, geriátrico, Paget, Charcot, reimplante digital).
            Todas com gabarito, comentário técnico, pérola de prova e armadilha clássica.
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

      {/* Caderno de Guerra */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              CADERNO DE GUERRA
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">
            FLASH POINTS — <span className="text-[oklch(0.55_0.22_25)]">REVISÃO TÁTICA</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Os pontos que mais derrubam candidatos no TEOT. Memorize cada um.
            Se errar aqui, erra na prova.
          </p>

          <div className="space-y-3">
            {flashPoints.map((fp) => (
              <Collapsible key={fp.area} title={fp.area} defaultOpen={false}>
                <div className="p-4 space-y-2">
                  {fp.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs">
                      <span className="font-accent text-[oklch(0.55_0.22_25)] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 Errors */}
      <section className="py-12 border-b border-border bg-[oklch(0.09_0.005_0)]">
        <div className="container">
          <h2 className="font-display text-xl font-bold mb-6">
            TOP 10 — ERROS QUE MAIS DERRUBAM CANDIDATOS
          </h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {topErrors.map((err, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-muted-foreground p-3 border border-border/30">
                <span className="font-display text-[oklch(0.55_0.22_25)] font-bold shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <AlertTriangle className="w-3 h-3 text-[oklch(0.55_0.22_25)] shrink-0 mt-0.5" />
                <span>{err}</span>
              </div>
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
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">45%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">CLASSIFICAÇÕES + CONDUTA</div>
              <p className="text-[10px] text-muted-foreground mt-2">Lenke, Goutallier, Tönnis, Ficat, KL, Sanders, Hawkins, Johnson-Strom</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">30%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">EXAME FÍSICO + DIAGNÓSTICO</div>
              <p className="text-[10px] text-muted-foreground mt-2">Testes especiais (Jobe, Lachman, Coleman, Thompson), sinais clínicos</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">25%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">COMPLICAÇÕES + REVISÃO</div>
              <p className="text-[10px] text-muted-foreground mt-2">Infecção periprotética, NAV, segmento adjacente, artrofibrose, desgaste</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.09_0.005_0)]">
        <div className="container text-center">
          <Skull className="w-8 h-8 text-[oklch(0.55_0.22_25)] mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-3">
            DOMINE A ORTOPEDIA CLÍNICA
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6">
            25-30% do TEOT. Classificações, exame físico e conduta cirúrgica.
            80 questões, 12 vídeos, Caderno de Guerra, 14 semanas. Sem atalhos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/ciclo2"
              className="inline-flex items-center gap-2 border border-border text-foreground font-accent text-sm tracking-wider px-6 py-3 hover:bg-foreground/5 transition-colors no-underline"
            >
              CICLO 2 — TRAUMATOLOGIA
            </a>
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
