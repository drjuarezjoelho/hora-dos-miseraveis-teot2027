# HORA DOS MISERÁVEIS — PROTOCOLO MESTRE DE PRODUÇÃO

## Programa de Treinamento de Elite para Aprovação no TEOT 2027

---

## 1. Finalidade do Protocolo

Este documento define o padrão oficial para planejamento, produção, revisão, integração e publicação de todos os ciclos do programa HORA DOS MISERÁVEIS.

Objetivo central: garantir consistência pedagógica, rastreabilidade técnica, alta exigência acadêmica e previsibilidade operacional até o TEOT 2027.

Este protocolo se aplica a:
- ciclos completos (conteúdo teórico, vídeos, banco de questões e caderno de guerra),
- atualizações de ciclos já publicados,
- simulados integrados e reta final.

---

## 2. Princípios Inegociáveis

1. **Máxima exigência técnica.** Nenhum material é produzido em nível introdutório.
2. **Padrão de prova real.** Questões devem replicar linguagem, densidade e armadilhas do TEOT/TARO.
3. **Consistência editorial.** Todos os ciclos seguem a mesma arquitetura documental.
4. **Rastreabilidade total.** Toda questão possui tema, subtema, objetivo cognitivo e referência-base.
5. **Revisão formal antes de publicar.** Nada entra no site sem checklist acadêmico e checklist técnico.
6. **Evolução contínua orientada por erros.** Atualizações são guiadas por padrões de desempenho dos residentes.

---

## 3. Estrutura Canônica de Cada Ciclo

Cada ciclo deve gerar obrigatoriamente os seguintes entregáveis:

1. **Documento completo do ciclo** (`documentos/cicloX-...-completo.md` e `.pdf`)
2. **Caderno de Guerra do ciclo** (`documentos/caderno-de-guerra-cicloX.md` e `.pdf`)
3. **Resumo Executivo do ciclo** (`documentos/resumo-executivo-cicloX.md` e `.pdf`) quando aplicável
4. **Página web do ciclo** (`client/src/pages/CicloX.tsx`)
5. **Atualização de navegação e módulos** (home, módulos, cronograma e links)

Arquitetura mínima do documento completo:
- visão estratégica do ciclo,
- objetivos mensuráveis,
- cronograma semanal,
- roteiro de vídeos,
- banco de 80 questões (40 base + 40 novas),
- análise de padrões de cobrança,
- erros mais frequentes e plano corretivo.

---

## 4. Template Oficial de Questão

Toda questão deve obedecer ao template abaixo:

1. Tema
2. Subtema
3. Nível de dificuldade (`Alto`, `Muito Alto`, `Brutal-Elitizado`)
4. Objetivo cognitivo (classificar, decidir conduta, identificar complicação, etc.)
5. Enunciado clínico estruturado
6. Quatro alternativas plausíveis (A-D)
7. Gabarito
8. Comentário técnico da correta
9. Justificativa de cada incorreta
10. Pérola de prova
11. Armadilha clássica
12. Correlação prática
13. Referência-base (obra/capítulo)

Regras de qualidade:
- linguagem clara, sem ambiguidade gramatical,
- apenas uma alternativa inequivocamente correta,
- distratores tecnicamente defensáveis,
- evitar repetição de padrões de resposta.

---

## 5. Protocolo de Elaboração das 40 Questões Novas

As 40 novas questões de cada ciclo devem preservar o mesmo nível técnico das questões base, com variação de enfoque clínico.

Distribuição recomendada:
- 50% classificação e tomada de decisão,
- 30% conduta e timing terapêutico,
- 20% complicações, revisão e pitfalls.

Matriz de variação obrigatória:
- pediátrico,
- osteoporótico/geriátrico,
- politrauma,
- atleta/alta demanda funcional,
- comorbidades críticas (DRC, diabetes, anticoagulação, etc.).

Ao final, produzir:
- quadro de cobertura por tema/subtema,
- quadro de equilíbrio por nível de dificuldade,
- validação de ausência de duplicatas conceituais.

---

## 6. Protocolo de Roteiros de Vídeo

Cada ciclo deve conter roteiros de vídeo com:
- sequência lógica do simples ao complexo,
- duração-alvo de 50 a 70 minutos,
- bloco de casos reais e imagens comentadas,
- quiz de fechamento (5 a 10 questões).

Template de roteiro por vídeo:
1. Objetivo de aprendizagem
2. Estrutura temporal por blocos
3. Conceitos e classificações obrigatórias
4. Condutas com critérios de indicação
5. Complicações e prevenção
6. Quiz final e mensagem de revisão
7. Referência-base

---

## 7. Governança de Produção por Fases

### Fase 1 — Planejamento
- definir escopo semanal e metas de desempenho,
- aprovar mapa de temas e subtemas,
- aprovar matriz de questões e vídeo.

### Fase 2 — Produção Acadêmica
- redigir documentos do ciclo,
- gerar questões base e questões novas,
- consolidar caderno de guerra.

### Fase 3 — Revisão de Qualidade
- revisão técnica de conteúdo,
- revisão editorial e consistência de nomenclatura,
- revisão de referências e formatação final.

### Fase 4 — Integração no Site
- criar/atualizar página do ciclo,
- atualizar cronograma, módulos e chamadas da home,
- validar links internos para documentos.

### Fase 5 — Publicação
- gerar versão final em Markdown e PDF,
- atualizar README com status do ciclo,
- executar checklist de release.

---

## 8. Checklist Acadêmico de Liberação

Critérios de aprovação (todos obrigatórios):
- [ ] cobertura de 100% dos temas previstos no escopo do ciclo
- [ ] 80 questões completas com gabarito e comentários
- [ ] 40 questões novas com variação real de enfoque
- [ ] caderno de guerra com flash points e top erros
- [ ] coerência interna entre cronograma, vídeos e banco de questões
- [ ] referências bibliográficas consistentes e atuais

---

## 9. Checklist Técnico de Publicação

Antes de publicar:
- [ ] página do ciclo acessível e navegável no site
- [ ] links para `.md` e `.pdf` válidos
- [ ] README atualizado com status real do projeto
- [ ] scripts de build e start funcionando no ambiente alvo
- [ ] versão do projeto incrementada e registrada

Após publicar:
- [ ] validação manual das rotas principais,
- [ ] validação de responsividade (desktop e mobile),
- [ ] registro de changelog da versão.

---

## 10. Política de Versionamento e Changelog

Padrão de versão:
- `vX.Y` para marcos de ciclo (ex.: `v5.1`),
- incremento `Y` para ajustes sem novo ciclo completo.

Cada release deve registrar:
- objetivo da versão,
- arquivos adicionados/alterados,
- impacto pedagógico,
- pendências remanescentes.

---

## 11. Protocolo Específico para Ciclo 5 (Reta Final)

Escopo mínimo:
- revisão sistemática dos ciclos 1-4,
- simulados integrados progressivos,
- trilha de correção orientada por erro recorrente,
- bloco final de 40 questões novas comentadas,
- plano de revisão de alta intensidade até a prova.

Indicadores-alvo do ciclo 5:
- acerto global em simulados >= 85%,
- redução de erro recorrente por subtema prioritário,
- estabilidade de performance sob restrição de tempo.

---

## 12. Rotina de Melhoria Contínua

A cada 2 semanas:
- revisar padrões de erro por residente e por turma,
- ajustar foco das sessões e listas de revisão,
- recalibrar distribuição de dificuldade das novas questões.

A cada fim de ciclo:
- auditoria de cobertura curricular,
- auditoria de qualidade das questões,
- atualização do protocolo quando necessário.

---

## 13. Responsáveis e Cadência de Reunião

Papéis recomendados:
- **Coordenação Acadêmica:** define critérios de conteúdo e aprovação final.
- **Produção Técnica:** integra documentos no site e mantém estrutura.
- **Revisão Editorial:** garante padrão de linguagem e consistência.

Cadência mínima:
- reunião semanal de produção (30-45 min),
- reunião quinzenal de desempenho (60 min),
- reunião de fechamento de ciclo (90 min).

---

## 14. Declaração de Conformidade

Todo novo ciclo, atualização de documento ou publicação no site deve declarar conformidade com este Protocolo Mestre de Produção.

Sem conformidade, o material deve ser considerado rascunho e não publicado como versão oficial.

---

*Protocolo Mestre de Produção — HORA DOS MISERÁVEIS — TEOT 2027 — v1.0*
