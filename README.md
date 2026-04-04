# HORA DOS MISERÁVEIS — TEOT 2027

## Programa de Treinamento de Elite para Aprovação no Título de Especialista em Ortopedia e Traumatologia

![HORA DOS MISERÁVEIS](https://horamis2027-t5h9sxtb.manus.space)

---

## 🎯 Sobre o Projeto

**HORA DOS MISERÁVEIS** é um programa de treinamento avançado e de alta exigência para residentes em ortopedia e traumatologia com objetivo de aprovação no TEOT 2027. O método foi desenhado para formar candidatos de elite através de máxima exigência, densidade técnica e foco em performance.

O objetivo não é apenas ensinar. O objetivo é **selecionar, pressionar, expor fragilidades cognitivas, corrigir raciocínios incompletos e formar alunos altamente competitivos**, com desempenho acima da média em provas como TEOT, TARO e avaliações exigentes de residência e título.

---

## 📊 Estrutura do Programa

O programa completo compreende **5 ciclos distribuídos em 62 semanas** (abril/2026 a novembro/2027), cobrindo 100% do conteúdo programático do TEOT.

| Ciclo | Período | Tema | Peso TEOT | Status |
|-------|---------|------|-----------|--------|
| 1 | Meses 1-2 | Ciências Básicas | 10-15% | Concluído |
| 2 | Meses 3-5 | **Traumatologia** | 35-40% | ✅ Ativo |
| 3 | Meses 6-8 | Ortopedia Clínica | 20-25% | Planejado |
| 4 | Meses 9-11 | MI + Especialidades | 15-20% | Planejado |
| 5 | Meses 12-14 | Reta Final | Revisão | Planejado |

---

## 🌐 Site Publicado

Acesse o site completo em: **https://horamis2027-t5h9sxtb.manus.space**

### Páginas Disponíveis

- **Início** — Apresentação do programa com countdown para TEOT 2027
- **Metodologia** — Filosofia e pilares do método HORA DOS MISERÁVEIS
- **Cronograma** — Timeline completa de 62 semanas com marcos e metas
- **Módulos** — Visão geral dos 5 ciclos e tipos de material
- **Ciclo 2 — Traumatologia** — Roteiros de 12 vídeos, 80 questões, padrões de cobrança
- **Simulados** — Formato, regras e análise de desempenho esperado
- **Sobre** — Proposta do projeto e FAQ

---

## 📚 Ciclo 2 — Traumatologia (Completo)

O Ciclo 2 é o bloco de maior peso no TEOT (35-40%) e cobre Traumatologia Geral, Membro Superior, Membro Inferior, Pelve/Acetábulo e Coluna Trauma.

### Material Incluído

✅ **80 questões comentadas** (40 originais + 40 novas com enfoques especiais)
- Pediátrico, osteoporótico, gestante, polytrauma, metástase, atleta

✅ **12 vídeos técnicos** (50-70 min cada)
- Roteiros detalhados com timestamps e conteúdo por bloco

✅ **Análise de padrões**
- 50% classificações | 30% conduta | 20% complicações

✅ **Simulados por bloco**
- 6 simulados temáticos + 1 integrado (60 questões)

### Padrões de Questões

| Padrão | Frequência | Exemplos |
|--------|-----------|----------|
| Classificação + conduta | 50% | Gustilo, Neer, Schatzker, Tile, Young-Burgess |
| "Conduta mais adequada" | 30% | Timing desbridamento, DHS vs Gamma, fasciotomia |
| "Complicação mais comum" | 20% | Infecção, dor ombro, AVN, non-union, cut-out |

---

## 📖 Documentos Incluídos

### 1. **Documento Mestre** (`documento-mestre.md`)
- Apresentação completa do programa
- Filosofia e princípios pedagógicos
- Estrutura dos 5 ciclos
- Detalhamento do Ciclo 2
- Referências bibliográficas

### 2. **Cronograma Detalhado** (`cronograma-detalhado.md`)
- Timeline semanal de 62 semanas
- Temas, atividades e marcos por semana
- Metas de desempenho por ciclo
- Simulados mensais

### 3. **Plano de Implementação Operacional** (`plano-implementacao-operacional.md`)
- Checklist de implantação
- Ferramentas recomendadas (Anki, Google Forms, Notion)
- Modelo de acompanhamento de desempenho
- Ficha individual de evolução
- Protocolo de sessões HORA DOS MISERÁVEIS
- Cronograma de sessões do Ciclo 2

### 4. **Ciclo 2 — Traumatologia Completo** (`ciclo2-traumatologia-completo.md`)
- 80 questões com comentários técnicos detalhados
- Gabarito, justificativa de alternativas, pérola de prova, armadilha clássica
- 12 roteiros de vídeos com timestamps
- Análise de padrões e erros mais prováveis

---

## 🛠️ Tecnologia

### Frontend
- **React 19** com Wouter (roteamento cliente)
- **Tailwind CSS 4** com OKLCH colors
- **shadcn/ui** para componentes
- **Framer Motion** para animações
- **Lucide React** para ícones

### Design
- **Brutalismo Médico** — preto absoluto, vermelho sangue, branco cirúrgico
- **Tipografia:** Oswald (display) + JetBrains Mono (monospace) + Barlow Condensed (accent)
- **Sem border-radius** — ângulos retos, transições cortantes
- **Linguagem técnica e motivacional**

### Deployment
- **Manus WebDev** — hosting integrado com domínio público
- **URL:** https://horamis2027-t5h9sxtb.manus.space

---

## 📋 Estrutura do Repositório

```
hora-dos-miseraveis-teot2027/
├── README.md                                    # Este arquivo
├── client/
│   ├── index.html                              # HTML com Google Fonts
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   └── src/
│       ├── main.tsx                            # React entry point
│       ├── App.tsx                             # Routing principal
│       ├── index.css                           # Tema Bunker Cirúrgico
│       ├── pages/
│       │   ├── Home.tsx                        # Página inicial
│       │   ├── Metodologia.tsx                 # Filosofia do método
│       │   ├── Cronograma.tsx                  # Timeline 62 semanas
│       │   ├── Modulos.tsx                     # Visão geral dos ciclos
│       │   ├── Ciclo2.tsx                      # Traumatologia completa
│       │   ├── Simulados.tsx                   # Formato dos simulados
│       │   ├── Sobre.tsx                       # Sobre + FAQ
│       │   └── NotFound.tsx                    # 404
│       ├── components/
│       │   ├── Layout.tsx                      # Header + Footer
│       │   ├── ErrorBoundary.tsx
│       │   └── ui/                             # shadcn/ui components
│       ├── contexts/
│       │   └── ThemeContext.tsx                # Dark theme
│       ├── hooks/
│       └── lib/
├── server/
│   └── index.ts                                # Express server (static)
├── shared/
│   └── const.ts                                # Constantes compartilhadas
├── documentos/
│   ├── documento-mestre.md                     # Documento mestre v2.0
│   ├── documento-mestre.pdf
│   ├── cronograma-detalhado.md                 # Cronograma 62 semanas
│   ├── cronograma-detalhado.pdf
│   ├── plano-implementacao-operacional.md      # Protocolo de implementação
│   ├── plano-implementacao-operacional.pdf
│   ├── ciclo2-traumatologia-completo.md        # 80 questões + 12 vídeos
│   └── ciclo2-traumatologia-completo.pdf
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
└── .gitignore
```

---

## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/hora-dos-miseraveis-teot2027.git
cd hora-dos-miseraveis-teot2027
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Executar em Desenvolvimento

```bash
pnpm dev
```

Acesse em `http://localhost:3000`

### 4. Build para Produção

```bash
pnpm build
pnpm start
```

---

## 📖 Metodologia HORA DOS MISERÁVEIS

### Princípios Pedagógicos

**Exigência Máxima** — Não há questões fáceis. Cada item é calibrado para o nível TEOT/TARO.

**Alto Poder Discriminativo** — Separa o aluno que "já viu o tema" do aluno que realmente domina.

**Densidade Técnica** — Explicações profundas com correlação clínica real.

**Sofrimento Produtivo** — Desconforto cognitivo útil para consolidação por contraste.

### Estrutura das Questões

Cada questão contém:
1. Tema e subtema
2. Nível de dificuldade (Alto / Muito Alto / Brutal-Elitizado)
3. Objetivo cognitivo
4. Enunciado robusto com caso clínico
5. 4 alternativas plausíveis
6. Gabarito
7. Comentário técnico detalhado
8. Justificativa de cada alternativa
9. Pérola de prova
10. Armadilha clássica
11. Correlação prática
12. Referência-base (Rockwood, Browner, Campbell's)

---

## 📚 Referências Bibliográficas

1. **Rockwood CA, Green DP, Bucholz RW.** Rockwood and Green's Fractures in Adults. 9th Edition. Wolters Kluwer, 2019.
2. **Browner BD, Jupiter JB, Kretek C, Anderson PA.** Skeletal Trauma: Basic Science, Management, and Reconstruction. 6th Edition. Elsevier, 2019.
3. **Azar FM, Beaty JH, Canale ST.** Campbell's Operative Orthopaedics. 14th Edition. Elsevier, 2020.
4. **Rockwood CA, Wilkins KE.** Rockwood and Wilkins' Fractures in Children. 9th Edition. Wolters Kluwer, 2019.
5. **Vaccaro AR, et al.** AOSpine Thoracolumbar Spine Injury Classification System (TLICS). Spine, 2005.
6. **Gustilo RB, Anderson JT.** Prevention of infection in the treatment of one thousand and twenty-five open fractures of long bones. JBJS, 1976.
7. **Tile M.** Fractures of the Pelvis and Acetabulum. 4th Edition. Lippincott Williams & Wilkins, 2015.

---

## 🎓 Ciclos Futuros

### Ciclo 3 — Ortopedia Clínica (Semanas 23-36)
- Coluna cervical e torácica (degenerativa)
- Coluna lombar
- Ombro e cotovelo (não-trauma)
- Mão e punho
- 60 questões + 10 vídeos

### Ciclo 4 — MI + Especialidades (Semanas 37-50)
- Quadril e pelve (não-trauma)
- Joelho (ligamentar, meniscal, artroplastia)
- Tornozelo e pé
- Ortopedia pediátrica
- Tumores ósseos + Infecções
- 60 questões + 10 vídeos

### Ciclo 5 — Reta Final (Semanas 51-62)
- Biomecânica e implantes
- Revisão geral por subespecialidade
- Simulados intensivos
- 80 questões + 8 vídeos

---

## 🤝 Contribuições

Este é um projeto de formação acadêmica. Sugestões de melhorias, correções de conteúdo ou adições são bem-vindas. Abra uma issue ou envie um pull request.

---

## 📄 Licença

Este projeto é fornecido como material educacional para residentes em ortopedia e traumatologia. Todos os direitos reservados.

---

## 👨‍💼 Autor

**Coordenador Acadêmico Sênior de Formação Ortopédica**
Especialista em psicometria aplicada a provas médicas, TEOT/TARO e desenho instrucional de alta performance.

---

## 📞 Contato

Para dúvidas sobre o programa ou sugestões de conteúdo, entre em contato através das issues do repositório.

---

**Última atualização:** Abril 2026
**Versão:** 2.0 (Ciclo 2 — Traumatologia Completo)
**Status:** Em desenvolvimento — Ciclo 3 em planejamento

---

## 🔗 Links Úteis

- 🌐 **Site publicado:** https://horamis2027-t5h9sxtb.manus.space
- 📖 **Documento Mestre:** `documentos/documento-mestre.pdf`
- 📅 **Cronograma Detalhado:** `documentos/cronograma-detalhado.pdf`
- 📋 **Plano Operacional:** `documentos/plano-implementacao-operacional.pdf`
- 🎓 **Ciclo 2 Completo:** `documentos/ciclo2-traumatologia-completo.pdf`

---

**HORA DOS MISERÁVEIS — TEOT 2027**
*Máxima exigência. Densidade técnica. Foco em performance.*
