/* Ciclo1.tsx — Bunker Cirúrgico: Ciências Básicas e Fundamentos (Semanas 1-8) */
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
    num: 1,
    title: "Anatomia Aplicada I — Membro Superior",
    duration: "60 min",
    source: "Netter Atlas, Campbell's Cap. 1-2, Hoppenfeld",
    blocks: [
      { time: "0-15 min", content: "Plexo braquial: raízes, troncos, divisões, fascículos, ramos terminais. Erb-Duchenne (C5-C6) vs Klumpke (C8-T1). Nervo axilar: espaço quadrangular, risco na abordagem deltopeitoral e fratura colo úmero." },
      { time: "15-30 min", content: "Nervo radial: canal de torção (fratura diáfise úmero), ramo interósseo posterior (PIN) no arcade de Frohse. Nervo mediano: ligamento de Struthers, pronador redondo, STC. Nervo ulnar: túnel cubital, canal de Guyon." },
      { time: "30-45 min", content: "Abordagens cirúrgicas do MS: deltopeitoral (intervalo deltóide-peitoral maior, veia cefálica), posterior do úmero (nervo radial), Henry (antebraço anterior), Thompson (antebraço posterior)." },
      { time: "45-55 min", content: "Anatomia vascular: artéria braquial, bifurcação, artéria radial e ulnar. Arcos palmares superficial (ulnar) e profundo (radial). Teste de Allen." },
      { time: "55-60 min", content: "Quiz: 5 questões — plexo braquial, nervo radial, abordagens." },
    ],
  },
  {
    num: 2,
    title: "Anatomia Aplicada II — Membro Inferior e Pelve",
    duration: "65 min",
    source: "Netter Atlas, Campbell's Cap. 1-2, Letournel & Judet",
    blocks: [
      { time: "0-15 min", content: "Nervo ciático: saída pelo forame isquiático maior, divisão em tibial e fibular comum. Nervo fibular comum: colo da fíbula (risco em fratura proximal fíbula, gesso, tração). Pé caído." },
      { time: "15-30 min", content: "Compartimentos da perna (4): anterior, lateral, posterior superficial, posterior profundo. Conteúdo de cada compartimento. Síndrome compartimental: pressão >30mmHg ou delta <30mmHg." },
      { time: "30-45 min", content: "Anatomia da pelve: janelas ilioinguinal (Letournel) — lateral, média, medial. Abordagem de Kocher-Langenbeck (posterior). Nervos em risco: obturatório, ciático, glúteo superior." },
      { time: "45-55 min", content: "Anatomia do quadril: cápsula, ligamento redondo, vascularização da cabeça femoral (ACFM — ramo principal). Triângulo de Ward. Calcar femoral." },
      { time: "55-65 min", content: "Quiz: 5 questões — nervo fibular, compartimentos, janelas da pelve." },
    ],
  },
  {
    num: 3,
    title: "Biomecânica Óssea e Articular",
    duration: "60 min",
    source: "AO Principles 3rd Ed Cap. 1-3, Campbell's Cap. 1",
    blocks: [
      { time: "0-15 min", content: "Propriedades mecânicas do osso: cortical (anisotrópico, viscoelástico) vs esponjoso (isotrópico). Curva tensão-deformação: região elástica, plástica, ponto de falha. Módulo de Young." },
      { time: "15-30 min", content: "Tipos de carga: compressão, tração, cisalhamento, torção, flexão. Fratura por fadiga vs insuficiência. Osso é mais fraco em tração e cisalhamento. Lei de Wolff." },
      { time: "30-45 min", content: "Biomecânica articular: eixo mecânico vs anatômico do MI (6° valgo fisiológico). Centro de rotação instantâneo. Braço de momento. Forças no quadril: 3-4x peso corporal." },
      { time: "45-55 min", content: "Stress shielding: placa rígida → reabsorção óssea sob placa. Working length. Rigidez do constructo: diâmetro da haste (4ª potência), comprimento do parafuso." },
      { time: "55-60 min", content: "Quiz: 5 questões — módulo de elasticidade, tipos de carga, eixo mecânico." },
    ],
  },
  {
    num: 4,
    title: "Princípios AO de Fixação I — Parafusos e Placas",
    duration: "65 min",
    source: "AO Principles 3rd Ed Cap. 4-7, Campbell's Cap. 53",
    blocks: [
      { time: "0-15 min", content: "Filosofia AO: redução anatômica, fixação estável, preservação vascular, mobilização precoce. Estabilidade absoluta (compressão interfragmentária, gap zero) vs relativa (calo periosteal, bridge plating)." },
      { time: "15-30 min", content: "Parafusos: cortical (rosca total) vs esponjoso (rosca parcial, passo maior). Parafuso de tração (lag screw): princípio do glide hole + thread hole. Parafuso bloqueado (locking): ângulo fixo." },
      { time: "30-45 min", content: "Placas: DCP (compressão dinâmica), LC-DCP (contato limitado), LCP (locking compression plate — furo combinado). Placa como banda de tensão. Placa em ponte. Placa de neutralização. Placa de sustentação." },
      { time: "45-55 min", content: "Princípio da banda de tensão: converte forças de tração em compressão. Aplicação clássica: olécrano, patela. Requisitos: cortical oposta íntegra + fixação com cerclagem em 8." },
      { time: "55-65 min", content: "Quiz: 5 questões — lag screw, LCP, banda de tensão, estabilidade absoluta vs relativa." },
    ],
  },
  {
    num: 5,
    title: "Princípios AO de Fixação II — Hastes e Fixadores Externos",
    duration: "55 min",
    source: "AO Principles 3rd Ed Cap. 8-10, Browner Cap. 8-10",
    blocks: [
      { time: "0-15 min", content: "Hastes intramedulares: fresadas vs não-fresadas. Fresagem: aumenta área de contato, remove endósteo, risco de embolia gordurosa. Bloqueio estático vs dinâmico. Dinamização." },
      { time: "15-30 min", content: "Indicações de haste: fraturas diafisárias de fêmur, tíbia, úmero. Contraindicações: fratura articular, canal estreito (criança), infecção ativa. Ponto de entrada: piriforme vs trocantérica." },
      { time: "30-45 min", content: "Fixadores externos: indicações — fratura exposta (damage control), pelve instável (C-clamp), fraturas periarticulares complexas, alongamento ósseo. Tipos: unilateral, circular (Ilizarov), híbrido." },
      { time: "45-50 min", content: "Conversão fixador externo → haste: timing ideal <2 semanas. Risco de infecção aumenta com tempo de permanência do fixador. Pin tract infection: Checketts-Otterburn." },
      { time: "50-55 min", content: "Quiz: 5 questões — fresagem, bloqueio, fixador externo, conversão." },
    ],
  },
  {
    num: 6,
    title: "Fisiopatologia da Consolidação Óssea",
    duration: "60 min",
    source: "Campbell's Cap. 1, AO Principles Cap. 2, Browner Cap. 3",
    blocks: [
      { time: "0-15 min", content: "Consolidação primária (direta): contato direto cortical, sem calo visível, Haversian remodeling (cutting cones). Requer: estabilidade absoluta + compressão interfragmentária." },
      { time: "15-30 min", content: "Consolidação secundária (indireta): formação de calo periosteal. 4 fases: inflamatória → calo mole → calo duro → remodelação. Requer: estabilidade relativa + micromovimento controlado." },
      { time: "30-45 min", content: "Fatores que afetam consolidação. Locais: vascularização, gap, estabilidade. Sistêmicos: tabagismo (OR 2-6x pseudoartrose), DM, AINE (inibe COX-2), corticoide, desnutrição." },
      { time: "45-55 min", content: "Pseudoartrose: hipertrófica (pata de elefante — boa biologia, falta estabilidade → fixação rígida). Atrófica (sem calo — falta biologia → enxerto ósseo + fixação). Weber-Cech." },
      { time: "55-60 min", content: "Quiz: 5 questões — primária vs secundária, fatores, pseudoartrose." },
    ],
  },
  {
    num: 7,
    title: "Imagem em Ortopedia — RX, TC, RM, Cintilografia",
    duration: "60 min",
    source: "Campbell's Cap. 1, Greenspan Orthopedic Imaging",
    blocks: [
      { time: "0-15 min", content: "Radiografia: regra dos 2 (2 incidências, 2 articulações, 2 membros, 2 momentos). Sinais clássicos: triângulo de Codman, sunburst, ground glass, nidus." },
      { time: "15-30 min", content: "TC: indicações — fraturas articulares (platô tibial, pilão, acetábulo, calcâneo), coluna (TLICS), avaliação de canal medular. Reconstrução 3D para planejamento pré-operatório." },
      { time: "30-45 min", content: "RM: indicações — lesões ligamentares (LCA, manguito), tumores, NAV (Ficat I-II), infecção, hérnia discal. Sequências: T1 (anatomia), T2 (líquido brilha), STIR (suprime gordura)." },
      { time: "45-55 min", content: "Cintilografia: trifásica (infecção vs tumor). Fase 1 = fluxo, Fase 2 = pool, Fase 3 = tardia. Leucócito marcado: especificidade para infecção." },
      { time: "55-60 min", content: "Quiz: 5 questões — sinais radiográficos, RM sequências, cintilografia." },
    ],
  },
  {
    num: 8,
    title: "Tumores e Infecções — Bases + Estratégia TEOT",
    duration: "65 min",
    source: "Enneking WF, Campbell's Cap. 21-24, Cierny-Mader",
    blocks: [
      { time: "0-15 min", content: "Tumores ósseos — classificação: benigno (Enneking 1-3), maligno (IA, IB, IIA, IIB, III). Padrão radiográfico: geográfico (benigno) vs moth-eaten vs permeativo (maligno)." },
      { time: "15-30 min", content: "Tumores mais cobrados: osteocondroma (mais comum benigno), osteossarcoma (mais comum maligno primário), metástase (mais comum maligno geral). Biópsia: longitudinal, pelo cirurgião definitivo." },
      { time: "30-45 min", content: "Infecções — osteomielite: aguda (hematogênica, S. aureus, metáfise em criança) vs crônica (Cierny-Mader I-IV). Artrite séptica: Kocher (4 critérios = 99,6%)." },
      { time: "45-55 min", content: "Infecção periprotética: Tsukayama I-IV. Tipo IV = 2 tempos (espaçador + reimplante). Formato TEOT: 100 questões, 4h, distribuição por tema." },
      { time: "55-65 min", content: "Estratégia TEOT: tempo por questão (2,4 min), marcar e voltar, não travar. Quiz: 5 questões integradas." },
    ],
  },
];

/* ── Question Blocks Preview ── */
const questionBlocks = [
  {
    title: "ANATOMIA APLICADA E BIOMECÂNICA",
    subtitle: "Questões 1-10 — Nervos, Abordagens, Eixo Mecânico, Propriedades do Osso",
    questions: [
      { num: 1, q: "Fratura diáfise úmero terço médio-distal. Wrist drop com extensão do cotovelo preservada. Estrutura lesada?", answer: "A", options: ["Nervo radial no canal de torção", "PIN no arcade de Frohse", "Nervo radial na axila", "Nervo musculocutâneo"] },
      { num: 2, q: "Síndrome compartimental da perna. Parestesia no 1º espaço interdigital. Compartimento e nervo?", answer: "A", options: ["Anterior — fibular profundo", "Lateral — fibular superficial", "Posterior profundo — tibial", "Posterior superficial — sural"] },
      { num: 3, q: "Ângulo entre eixo mecânico e anatômico do fêmur?", answer: "B", options: ["Coincidentes (0°)", "Aproximadamente 6°", "Aproximadamente 10°", "Desnecessário considerar na ATJ"] },
      { num: 4, q: "Sobre propriedades do osso, assinale a INCORRETA:", answer: "C", options: ["Cortical é anisotrópico e viscoelástico", "Osso resiste mais à compressão que tração", "Esponjoso tem módulo de elasticidade MAIOR que cortical", "Fraturas por fadiga ocorrem por cargas cíclicas repetitivas"] },
      { num: 5, q: "RN macrossômico com MS em adução, RI, extensão do cotovelo, pronação. Raízes?", answer: "A", options: ["Erb-Duchenne C5-C6", "Klumpke C8-T1", "Lesão total C5-T1", "Axilar isolado"] },
    ],
  },
  {
    title: "FISIOPATOLOGIA E CONSOLIDAÇÃO",
    subtitle: "Questões 11-20 — Primária vs Secundária, Pseudoartrose, Metabolismo Ósseo",
    questions: [
      { num: 11, q: "Placa + lag screw com compressão absoluta. Tipo de consolidação?", answer: "B", options: ["Secundária com calo exuberante", "Primária (Haversian remodeling)", "Endocondral com fase cartilaginosa", "Intramembranosa periosteal"] },
      { num: 12, q: "Fator sistêmico com MAIOR evidência de atraso na consolidação?", answer: "B", options: ["AINEs por 48h", "Tabagismo ativo", "DM tipo 2 compensado", "Uso de estatinas"] },
      { num: 13, q: "Pseudoartrose com calo hipertrófico abundante. Tipo e conduta?", answer: "B", options: ["Atrófica — enxerto + placa", "Hipertrófica — fixação rígida", "Infectada — desbridamento + ATB", "Retardo — observação"] },
      { num: 14, q: "Sobre RANK/RANKL/OPG, assinale a correta:", answer: "B", options: ["RANKL é produzido por osteoclastos", "OPG liga-se ao RANKL e inibe osteoclastogênese", "RANK é expresso em osteoblastos", "Denosumab é anti-OPG"] },
      { num: 15, q: "T-score -2,8 + fratura por fragilidade. Conduta de primeira linha?", answer: "B", options: ["Cálcio e vitamina D apenas", "Bisfosfonato + cálcio + vitamina D", "Teriparatida", "Não tratar"] },
    ],
  },
  {
    title: "IMAGEM E DIAGNÓSTICO",
    subtitle: "Questões 21-30 — Sinais Radiográficos, RM, Cintilografia, Tumores",
    questions: [
      { num: 21, q: "Adolescente, dor no joelho, metáfise distal fêmur, sunburst + Codman. Diagnóstico?", answer: "C", options: ["Cisto ósseo aneurismático", "TCG", "Osteossarcoma", "Sarcoma de Ewing"] },
      { num: 22, q: "Sequência de RM onde líquido/edema aparece BRANCO?", answer: "B", options: ["T1 sem contraste", "T2 fat-sat / STIR", "T1 com gadolínio", "Densidade de prótons"] },
      { num: 23, q: "Osteomielite crônica. Exame com MAIOR especificidade para infecção?", answer: "B", options: ["Cintilografia trifásica Tc-99m", "Cintilografia com leucócitos marcados", "Radiografia simples", "TC sem contraste"] },
      { num: 24, q: "Padrão radiográfico clássico da displasia fibrosa?", answer: "B", options: ["Lítica expansiva com bolhas de sabão", "Vidro fosco (ground glass)", "Permeativa com reação periosteal agressiva", "Epifisária excêntrica"] },
      { num: 25, q: "Dor noturna + alívio com AINEs + nidus <1,5 cm. Diagnóstico e tratamento?", answer: "B", options: ["Osteoblastoma — ressecção marginal", "Osteoma osteoide — ablação por radiofrequência", "Abscesso de Brodie — ATB", "Fratura de estresse — repouso"] },
    ],
  },
  {
    title: "PRINCÍPIOS AO E FIXAÇÃO",
    subtitle: "Questões 31-40 — Lag Screw, Banda de Tensão, LCP, Hastes, Fixadores",
    questions: [
      { num: 31, q: "Princípio biomecânico do lag screw?", answer: "B", options: ["Rosca na cortical proximal", "Rosca só no fragmento distal + glide hole proximal", "Inserido sem perfuração prévia", "Rosca total + compressão pela cabeça contra placa"] },
      { num: 32, q: "Banda de tensão no olécrano. Condição OBRIGATÓRIA?", answer: "B", options: ["Uso de placa bloqueada", "Cortical oposta íntegra (fulcro)", "Fratura cominutiva", "Imobilização gessada 6 semanas"] },
      { num: 33, q: "Principal vantagem da LCP sobre DCP?", answer: "B", options: ["Maior compressão interfragmentária", "Fixador interno — preserva periósteo, ideal para osteoporose", "Menor custo", "Maior angulação dos parafusos"] },
      { num: 34, q: "Sobre fresagem do canal medular, assinale a correta:", answer: "B", options: ["Não afeta vascularização endosteal", "Destrói endósteo mas permite haste maior e mais estável", "Obrigatória em todas as expostas", "Reduz risco de embolia gordurosa"] },
      { num: 35, q: "Indicação PRIMÁRIA do fixador externo?", answer: "B", options: ["Fratura diafisária simples do fêmur", "Damage control (exposta grave, instabilidade hemodinâmica, pelve)", "Fratura colo femoral em idoso", "Supracondiliana do úmero em criança"] },
    ],
  },
];

/* ── Caderno de Guerra Flash Points ── */
const flashPoints = [
  { area: "ANATOMIA", points: [
    "Nervo radial no canal de torção → wrist drop COM extensão do cotovelo preservada",
    "Nervo axilar → espaço quadrangular, regimental badge, fratura colo úmero",
    "PIN no arcade de Frohse → perda extensão dedos SEM wrist drop (ECRL inervado antes)",
    "Nervo fibular comum no colo da fíbula → pé caído (estrutura mais vulnerável do MI)",
    "ACFM (retináculos posteriores) = 70-80% do suprimento da cabeça femoral no adulto",
    "Compartimento anterior da perna = PRIMEIRO a sofrer síndrome compartimental",
  ]},
  { area: "BIOMECÂNICA", points: [
    "Osso cortical: anisotrópico, viscoelástico, módulo ~17 GPa. Esponjoso: ~0,1-2 GPa",
    "Osso é mais fraco em TRAÇÃO e CISALHAMENTO. Mais forte em compressão",
    "Eixo mecânico vs anatômico do fêmur: diferença ~6° (valgus cut na ATJ)",
    "Stress shielding: placa rígida → reabsorção por desuso (Lei de Wolff)",
    "Rigidez da haste: proporcional à 4ª POTÊNCIA do raio",
    "Forças no quadril em apoio unipodal: 3-4x peso corporal",
  ]},
  { area: "PRINCÍPIOS AO", points: [
    "Estabilidade absoluta = gap zero, consolidação primária (sem calo). Articular, antebraço",
    "Estabilidade relativa = micromovimento, consolidação secundária (com calo). Diáfise cominutiva",
    "Lag screw: rosca SÓ no fragmento distal + glide hole no proximal",
    "Banda de tensão: cortical oposta DEVE estar íntegra. Clássico: olécrano, patela",
    "LCP = fixador interno, NÃO comprime placa-osso, preserva periósteo. Ideal para osteoporose",
    "Fresagem AUMENTA risco de embolia gordurosa (pressão intramedular)",
  ]},
  { area: "CONSOLIDAÇÃO", points: [
    "Primária: sem calo, cutting cones, estabilidade absoluta. Secundária: com calo, 4 fases",
    "Fases: Inflamatória → Calo mole → Calo duro → Remodelação",
    "Tabagismo = fator sistêmico com MAIOR evidência de atraso (OR 2-6x)",
    "Pseudoartrose hipertrófica = problema MECÂNICO → fixação rígida (NÃO precisa enxerto)",
    "Pseudoartrose atrófica = problema BIOLÓGICO → enxerto + fixação",
    "Enxerto autólogo esponjoso = padrão-ouro (3 Os: osteocondução + osteoindução + osteogênese)",
  ]},
  { area: "IMAGEM/TUMORES/INFECÇÕES", points: [
    "T1: gordura branca, líquido escuro. T2: líquido branco. STIR: suprime gordura, mais sensível",
    "Osteossarcoma: metáfise, sunburst, Codman, adolescente. Ewing: diáfise, casca de cebola",
    "TCG: epifisário, toca subcondral, adulto jovem 20-40, lítico excêntrico",
    "Kocher: 4 critérios (febre, não apoio, VHS >40, leucócitos >12.000) = 99,6% artrite séptica",
    "Tsukayama IV (crônica tardia) = revisão em 2 TEMPOS",
    "Próstata = metástase blástica. Rim/tireoide = lítica hipervascular",
  ]},
];

/* ── Top 10 Errors ── */
const topErrors = [
  "Confundir eixo mecânico com anatômico do fêmur (diferença ~6°)",
  "Não saber a lógica AO: osso.segmento.tipo.grupo (ex: 33-C3 = pilão tibial multifragmentário)",
  "Trocar consolidação primária por secundária (primária = sem calo, absoluta)",
  "Indicar enxerto para pseudoartrose hipertrófica (hipertrófica = problema mecânico)",
  "Confundir T1 com T2 na RM (T1 = anatomia/gordura branca, T2 = patologia/líquido branco)",
  "Não saber que LCP preserva periósteo (fixador interno, sem compressão placa-osso)",
  "Esquecer que osso é mais fraco em tração e cisalhamento (não em compressão)",
  "Não saber os 4 critérios de Kocher (4 critérios = 99,6% artrite séptica)",
  "Confundir Tsukayama II com IV (II = aguda <4 sem → DAIR; IV = crônica → 2 tempos)",
  "Achar que artéria do ligamento redondo é importante no adulto (ACFM = 70-80%)",
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

export default function Ciclo1() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032370417/T5H9SxTBvUYyNuyfSQhGMX/modules-section-PXZyUp9xzXJkhDYueNJXar.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="red-bar" />
            <span className="font-accent text-xs tracking-[0.4em] text-[oklch(0.55_0.22_25)]">
              MESES 1-2 | SEMANAS 1-8 | BASE ESSENCIAL 10-15% DO TEOT
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            CICLO 1 — <span className="text-[oklch(0.55_0.22_25)]">CIÊNCIAS BÁSICAS</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mb-8">
            A fundação sobre a qual todo o programa se sustenta. Anatomia aplicada, biomecânica,
            princípios AO, consolidação óssea, imagem, tumores e infecções. 80 questões comentadas,
            8 vídeos técnicos, Caderno de Guerra com flash points e tabelas mentais.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: FileText, value: "80", label: "QUESTÕES" },
              { icon: Video, value: "8", label: "VÍDEOS" },
              { icon: Clock, value: "8", label: "SEMANAS" },
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
              { title: "ANATOMIA", desc: "Identificar >90% das estruturas em risco por abordagem cirúrgica. Plexo braquial, nervos periféricos, compartimentos, vascularização.", meta: ">90%", icon: Brain },
              { title: "BIOMECÂNICA", desc: "Resolver >85% das questões sobre princípios AO, propriedades do osso, eixo mecânico, stress shielding.", meta: ">85%", icon: Target },
              { title: "CONSOLIDAÇÃO", desc: "Diferenciar primária vs secundária, fatores locais vs sistêmicos, pseudoartrose hipertrófica vs atrófica.", meta: ">85%", icon: Bone },
              { title: "IMAGEM", desc: "Acertar >80% das questões de RX/TC/RM. Reconhecer padrões radiográficos clássicos de tumores.", meta: ">80%", icon: Stethoscope },
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
              { w: "1-2", topic: "Anatomia Aplicada à Ortopedia", detail: "Plexo braquial (Erb-Duchenne, Klumpke), nervos periféricos (radial, axilar, fibular, mediano, ulnar), compartimentos da perna, abordagens cirúrgicas (deltopeitoral, Henry, Thompson, Kocher-Langenbeck), janelas ilioinguinal, vascularização da cabeça femoral" },
              { w: "3-4", topic: "Biomecânica + Princípios AO", detail: "Propriedades do osso (cortical vs esponjoso, módulo de Young), tipos de carga, eixo mecânico vs anatômico, stress shielding, princípios AO (estabilidade absoluta vs relativa), parafusos (lag screw, bloqueado), placas (DCP, LCP), banda de tensão" },
              { w: "5-6", topic: "Fisiopatologia e Consolidação Óssea", detail: "Consolidação primária vs secundária, 4 fases, fatores locais e sistêmicos, pseudoartrose (Weber-Cech), metabolismo ósseo (RANK/RANKL/OPG), osteoporose (DEXA, T-score), enxerto ósseo (3 Os), ossificação heterotópica" },
              { w: "7-8", topic: "Imagem, Tumores, Infecções + Estratégia TEOT", detail: "RX (sinais clássicos), TC (fraturas articulares), RM (T1/T2/STIR), cintilografia, tumores (Enneking, osteossarcoma, TCG, metástases), infecções (Cierny-Mader, Kocher, Tsukayama), formato TEOT, estratégia de prova" },
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
              8 VÍDEOS TÉCNICOS
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
            QUESTÕES DO <span className="text-[oklch(0.55_0.22_25)]">CICLO 1</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            40 questões originais + 40 questões NOVAS com enfoques especiais (pediátrico,
            osteoporótico, atleta, gestante, DRC, cenários de emergência, integração entre temas).
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
            Os pontos fundamentais que sustentam TODOS os demais ciclos. Se errar aqui, erra em tudo.
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
            TOP 10 — ERROS QUE MAIS DERRUBAM CANDIDATOS EM FUNDAMENTOS
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
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">40%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">CLASSIFICAÇÕES + PRINCÍPIOS</div>
              <p className="text-[10px] text-muted-foreground mt-2">AO/OTA, Weber-Cech, Enneking, Cierny-Mader, Kocher, Tsukayama</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">35%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">ANATOMIA + BIOMECÂNICA</div>
              <p className="text-[10px] text-muted-foreground mt-2">Nervos em risco, abordagens, eixo mecânico, propriedades do osso, implantes</p>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-display text-3xl text-[oklch(0.55_0.22_25)] font-bold">25%</div>
              <div className="font-accent text-[10px] tracking-widest text-muted-foreground mt-1">IMAGEM + DIAGNÓSTICO</div>
              <p className="text-[10px] text-muted-foreground mt-2">RX/TC/RM, sinais clássicos, tumores, infecções, diagnóstico diferencial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.09_0.005_0)]">
        <div className="container text-center">
          <Skull className="w-8 h-8 text-[oklch(0.55_0.22_25)] mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-3">
            DOMINE OS FUNDAMENTOS
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6">
            Quem domina os fundamentos não erra o óbvio. Quem erra o óbvio não passa no TEOT.
            80 questões, 8 vídeos, Caderno de Guerra, 8 semanas. Sem atalhos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/ciclo2"
              className="inline-flex items-center gap-2 border border-border text-foreground font-accent text-sm tracking-wider px-6 py-3 hover:bg-foreground/5 transition-colors no-underline"
            >
              CICLO 2 — TRAUMATOLOGIA
            </a>
            <a
              href="/ciclo3"
              className="inline-flex items-center gap-2 border border-border text-foreground font-accent text-sm tracking-wider px-6 py-3 hover:bg-foreground/5 transition-colors no-underline"
            >
              CICLO 3 — ORTOPEDIA CLÍNICA
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
