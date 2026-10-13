import type { PaperGuide } from '../../src/contract/types';

// Paper guides of the Economics HL mock (EX-3). The durations match data/exams.json: P1 75, P2 105, P3 60 minutes.
// Every questionId is a question of content/econ: p1-essay-01 to p1-essay-20, p2-set-01 to p2-set-06, p3-set-01 to p3-set-04.

export const papers: PaperGuide[] = [
  {
    subject: 'econ',
    paper: 'P1',
    title: {
      en: 'Economics HL Paper 1: extended response',
      ru: 'Экономика HL, работа 1: развёрнутый ответ',
    },
    minutes: 75,
    marks: 25,
    structure: {
      en: 'Three questions; choose one. Part (a) is worth 10 marks and usually asks you to explain (Explain, sometimes Distinguish), often with a labelled diagram (AD/AS is the most common). Part (b) is worth 15 marks and asks you to discuss or evaluate (Discuss or Evaluate), with real-world examples. Total: 25 marks in 75 minutes (94 minutes with +25% extra time).',
      ru: 'Три вопроса, выберите один. Часть (a) — 10 баллов, обычно «Explain» (иногда «Distinguish»), часто с подписанной диаграммой (чаще всего модель совокупного спроса и совокупного предложения, AD/AS). Часть (b) — 15 баллов, «Discuss» или «Evaluate», с примерами из реальной жизни. Всего: 25 баллов за 75 минут (94 минуты с доп. временем +25%).',
    },
    strategy: {
      en: 'Plan for about five minutes: write the key definitions, sketch the diagram, choose one real-world example with figures, and note the evaluation points (short run and long run, stakeholders, assumptions). In part (a), define the terms, draw the labelled diagram and explain the chain of effects step by step. In part (b), set out the case for and against using the example, and end with a judgement that answers the question.',
      ru: 'Около пяти минут уходит на план: запишите ключевые определения, набросайте диаграмму, выберите один реальный пример с цифрами и отметьте пункты оценки (краткосрочный и долгосрочный периоды, заинтересованные стороны, допущения). В части (a) дайте определения, нарисуйте подписанную диаграмму и объясните цепочку эффектов по шагам. В части (b) изложите аргументы за и против, опираясь на пример, и завершите ответ суждением, которое отвечает на вопрос.',
    },
    criteria: {
      en: 'Knowledge and understanding: accurate definitions and a labelled diagram. Application: a real-world example with figures and a named place. Analysis: chains of reasoning (if ... then ... so ...). Evaluation: short-run and long-run effects, stakeholders, assumptions and a justified judgement.',
      ru: 'Знание и понимание: точные определения и подписанная диаграмма. Применение: пример из реальной жизни с цифрами и названием места. Анализ: цепочки рассуждений (если ... то ... значит ...). Оценка: краткосрочные и долгосрочные эффекты, заинтересованные стороны, допущения и обоснованное суждение.',
    },
    commandTerms: ['Explain', 'Distinguish', 'Discuss', 'Evaluate', 'Examine'],
    asked: { en: 'Based on the 15 papers May 2022 to November 2025 (all time zones). Counts come from the marked parts only.\n\n**Topics most often tested**\n\n| Topic | Parts | Papers |\n|---|---|---|\n| Macroeconomic objectives | 21 | 13 |\n| AD/AS model and the business cycle | 13 | 10 |\n| Oligopoly and monopolistic competition | 11 | 7 |\n| Government: taxes, subsidies and price controls | 10 | 8 |\n| Exchange rates | 9 | 6 |\n| Monopoly and natural monopoly | 8 | 7 |\n| Fiscal policy | 8 | 6 |\n| Barriers to economic growth and development | 8 | 7 |\n\n**Command terms**\n\nExplain 44, Discuss 27, Evaluate 17, Distinguish 1, Examine 1.\n\n**Diagrams asked for**\n\nAD/AS 18, monopoly 7, exchange rate 6, PPC 5, tariff/quota 5, externality 4, Phillips curve 4, supply and demand 3, PED 3, oligopoly/game 2, YED 2, J-curve 2, Lorenz curve 2, trade 1, subsidy 1, tax incidence 1.\n\nNo calculations in this paper.', ru: 'По 15 пейперам, май 2022 — ноябрь 2025 (все часовые пояса). Цифры — по размеченным частям, без текста вопросов.\n\n**Темы, которые спрашивают чаще всего**\n\n| Тема | Частей | Пейперов |\n|---|---|---|\n| Макроэкономические цели | 21 | 13 |\n| Модель AD/AS и деловой цикл | 13 | 10 |\n| Олигополия и монополистическая конкуренция | 11 | 7 |\n| Государство: налоги, субсидии и регулирование цен | 10 | 8 |\n| Обменные курсы | 9 | 6 |\n| Монополия и естественная монополия (natural monopoly) | 8 | 7 |\n| Фискальная политика (fiscal policy) | 8 | 6 |\n| Барьеры экономического роста и развития | 8 | 7 |\n\n**Командные слова**\n\nExplain (объясните) 44, Discuss (обсудите) 27, Evaluate (оцените) 17, Distinguish (различите) 1, Examine (изучите) 1.\n\n**Какие диаграммы просят**\n\nAD/AS 18, monopoly 7, exchange rate 6, PPC 5, tariff/quota 5, externality 4, Phillips curve 4, supply and demand 3, PED 3, oligopoly/game 2, YED 2, J-curve 2, Lorenz curve 2, trade 1, subsidy 1, tax incidence 1.\n\nРасчётов в этом пейпере нет.' },
    timedSets: [
      {
        id: 'p1-one-essay',
        title: { en: 'One essay, 75 minutes (94 with +25% extra time; choose one of three)', ru: 'Одно эссе, 75 минут (94 с доп. временем +25%; выберите одно из трёх)' },
        questionIds: ['p1-essay-01', 'p1-essay-02', 'p1-essay-03'],
        minutes: 75,
      },
      {
        id: 'p1-essay-plan',
        title: { en: 'Planning practice, 25 minutes (plan one essay)', ru: 'Тренировка планирования, 25 минут (спланируйте одно эссе)' },
        questionIds: ['p1-essay-04', 'p1-essay-05', 'p1-essay-06'],
        minutes: 25,
      },
    ],
  },
  {
    subject: 'econ',
    paper: 'P2',
    title: {
      en: 'Economics HL Paper 2: data response',
      ru: 'Экономика HL, работа 2: анализ данных',
    },
    minutes: 105,
    marks: 40,
    structure: {
      en: 'Two questions; choose one (40 marks). Each question has several extracts (texts, tables and graphs) that the parts refer to. Part (a) is worth 4 marks: two definitions. Part (b) is worth 5 marks: calculations from the data, with units and signs, and a sketch of a diagram. Parts (c) to (f) are worth 4 marks each: explain, usually with a labelled diagram. Part (g) is worth 15 marks: discuss or evaluate, with a judgement. Total: 40 marks in 105 minutes (131 minutes with +25% extra time).',
      ru: 'Два вопроса, выберите один (40 баллов). В каждом несколько материалов (тексты, таблицы и графики), к которым относятся части. Часть (a) — 4 балла: два определения. Часть (b) — 5 баллов: расчёты по данным с единицами и знаками и набросок диаграммы. Части (c)–(f) — по 4 балла: объяснение, обычно с подписанной диаграммой. Часть (g) — 15 баллов: обсуждение или оценка с суждением. Всего: 40 баллов за 105 минут (131 минута с доп. временем +25%).',
    },
    strategy: {
      en: 'Read the stimulus and the data before the questions, and underline the figures you need. Define each term in one sentence, using the exact term. Calculate with the formula written out, with units and sign. Draw diagrams with labelled axes and curves, and show shifts clearly. In part (g), give a balanced discussion of two sides, an evaluation (short run and long run, stakeholders, assumptions) and a judgement.',
      ru: 'Сначала прочитайте материал и данные, отметьте нужные цифры. Давайте определения в одном предложении, используя точный термин. Рассчитывайте, записывая формулу, единицы и знак. Рисуйте диаграммы с подписанными осями и кривыми, ясно показывайте сдвиги. В части (g) дайте сбалансированное обсуждение двух сторон, оценку (краткосрочный и долгосрочный периоды, заинтересованные стороны, допущения) и суждение.',
    },
    criteria: {
      en: 'Definitions and calculations are accurate, with units and signs; diagrams are correct and labelled; explanations are chains of reasoning that use the data; the part (g) discussion is balanced, evaluative and ends with a justified judgement.',
      ru: 'Определения и расчёты точные, с единицами и знаками; диаграммы верные и подписанные; объяснения — цепочки рассуждений с опорой на данные; обсуждение в части (g) сбалансированное, оценочное и завершается обоснованным суждением.',
    },
    commandTerms: ['Define', 'Calculate', 'Sketch', 'Explain', 'List', 'Determine', 'Identify', 'Discuss', 'Evaluate'],
    asked: { en: 'Based on the 12 papers May 2022 to November 2025 (all time zones). Counts come from the marked parts only.\n\n**Topics most often tested**\n\n| Topic | Parts | Papers |\n|---|---|---|\n| Exchange rates | 31 | 12 |\n| Balance of payments | 28 | 11 |\n| AD/AS model and the business cycle | 27 | 12 |\n| Policies for growth and development | 25 | 12 |\n| Government: taxes, subsidies and price controls | 24 | 12 |\n| Measuring economic activity | 22 | 12 |\n| Economics of inequality and poverty | 21 | 12 |\n| Types of trade protection | 17 | 11 |\n\n**Command terms**\n\nExplain 96, Define 44, Calculate 40, Sketch 17, Discuss 13, Evaluate 11, List 4, Determine 2, Identify 1.\n\n**Diagrams asked for**\n\nAD/AS 22, exchange rate 18, externality 13, supply and demand 8, tariff/quota 8, Lorenz curve 7, PPC 6, price floor 4, subsidy 4, price ceiling 3, trade 3, monopoly 2, tax incidence 1, J-curve 1, circular flow 1.\n\n**Calculation parts**\n\n| Session | Calculation parts (marks) |\n|---|---|\n| M22 | 1b(ii) (2), 2b(ii) (2) |\n| N22 | 1b(i) (3), 2b(i) (3) |\n| M23 | 1b(i) (2), 2b(i) (2) |\n| N23 | 1b(i) (3), 2b(i) (3) |\n| M24 TZ1 | 1b(i) (3), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M24 TZ2 | 1b(i) (3), 1b(ii) (2), 2b(i) (2), 2b(ii) (2) |\n| N24 | 1b(i) (3), 2b(i) (2), 2b(ii) (1) |\n| M25 TZ1 | 1b(i) (2), 1b(ii) (1), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M25 TZ2 | 1b(i) (1), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M25 TZ3 | 1b(i) (1), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| N25 TZ1 | 1b(i) (2), 2b(i) (2), 2b(ii) (1) |\n| N25 TZ3 | 1b(i) (2), 1b(ii) (1), 2b(i) (2) |', ru: 'По 12 пейперам, май 2022 — ноябрь 2025 (все часовые пояса). Цифры — по размеченным частям, без текста вопросов.\n\n**Темы, которые спрашивают чаще всего**\n\n| Тема | Частей | Пейперов |\n|---|---|---|\n| Обменные курсы | 31 | 12 |\n| Платёжный баланс | 28 | 11 |\n| Модель AD/AS и деловой цикл | 27 | 12 |\n| Политика роста и развития | 25 | 12 |\n| Государство: налоги, субсидии и регулирование цен | 24 | 12 |\n| Измерение экономической активности | 22 | 12 |\n| Экономика неравенства и бедности | 21 | 12 |\n| Виды торговой защиты | 17 | 11 |\n\n**Командные слова**\n\nExplain (объясните) 96, Define (определите) 44, Calculate (рассчитайте) 40, Sketch (набросайте) 17, Discuss (обсудите) 13, Evaluate (оцените) 11, List (перечислите) 4, Determine (определите) 2, Identify (назовите) 1.\n\n**Какие диаграммы просят**\n\nAD/AS 22, exchange rate 18, externality 13, supply and demand 8, tariff/quota 8, Lorenz curve 7, PPC 6, price floor 4, subsidy 4, price ceiling 3, trade 3, monopoly 2, tax incidence 1, J-curve 1, circular flow 1.\n\n**Части с расчётами**\n\n| Сессия | Части с расчётами (баллы) |\n|---|---|\n| M22 | 1b(ii) (2), 2b(ii) (2) |\n| N22 | 1b(i) (3), 2b(i) (3) |\n| M23 | 1b(i) (2), 2b(i) (2) |\n| N23 | 1b(i) (3), 2b(i) (3) |\n| M24 TZ1 | 1b(i) (3), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M24 TZ2 | 1b(i) (3), 1b(ii) (2), 2b(i) (2), 2b(ii) (2) |\n| N24 | 1b(i) (3), 2b(i) (2), 2b(ii) (1) |\n| M25 TZ1 | 1b(i) (2), 1b(ii) (1), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M25 TZ2 | 1b(i) (1), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| M25 TZ3 | 1b(i) (1), 1b(ii) (2), 2b(i) (2), 2b(ii) (1), 2b(iii) (2) |\n| N25 TZ1 | 1b(i) (2), 2b(i) (2), 2b(ii) (1) |\n| N25 TZ3 | 1b(i) (2), 1b(ii) (1), 2b(i) (2) |' },
    timedSets: [
      {
        id: 'p2-full-set',
        title: { en: 'Full data response, 105 minutes (131 with +25% extra time; one of two questions)', ru: 'Полный анализ данных, 105 минут (131 с доп. временем +25%; один из двух вопросов)' },
        questionIds: ['p2-set-01', 'p2-set-02'],
        minutes: 105,
      },
      {
        id: 'p2-set-practice',
        title: { en: 'Practice set, 60 minutes', ru: 'Тренировочный набор, 60 минут' },
        questionIds: ['p2-set-03', 'p2-set-04'],
        minutes: 60,
      },
    ],
  },
  {
    subject: 'econ',
    paper: 'P3',
    title: {
      en: 'Economics HL Paper 3: policy paper',
      ru: 'Экономика HL, работа 3: анализ политики',
    },
    minutes: 60,
    marks: 60,
    structure: {
      en: 'Real paper: from 2023 it is 1 hour 45 minutes with two case-study questions, both answered: 30 marks each (60 in total; 58 in May 2023). Each question has part (a), 20 marks in several sub-parts (calculations, explanations and diagrams), and part (b), 10 marks: recommend one policy from the data and justify it. In 2022 the paper was 1 hour with one question answered (30 marks). The school mock is 1 hour (75 minutes with +25% extra time); its own format is not on the printout.',
      ru: 'Настоящий пейпер: с 2023 года 1 час 45 минут, два вопроса-кейса, оба выполняются: по 30 баллов на вопрос (всего 60; в мае 2023 — 58). В каждом вопросе часть (a) — 20 баллов в нескольких подпунктах (расчёты, объяснения, диаграммы) и часть (b) — 10 баллов: рекомендуйте одну политику на основе данных и обоснуйте её. В 2022 году пейпер длился 1 час, выполнялся один вопрос (30 баллов). Школьный мок — 1 час (75 минут с доп. временем +25%); его формат в распечатке не указан.',
    },
    strategy: {
      en: 'Spend about six minutes reading the case and marking the key figures. Do the calculations first and show each formula and unit. Draw labelled diagrams. In part (b), choose the policy early, justify it with at least two figures from the data, then discuss the trade-offs, stakeholders and timing, and finish with a judgement on the conditions under which your choice holds.',
      ru: 'Около шести минут уходит на чтение кейса и отметку ключевых цифр. Сначала сделайте расчёты, показывая формулу и единицы. Рисуйте подписанные диаграммы. В части (b) выберите политику заранее, обоснуйте её не менее чем двумя цифрами из данных, затем обсудите компромиссы, заинтересованные стороны и сроки и завершите суждением о том, при каких условиях ваш выбор верен.',
    },
    criteria: {
      en: 'Calculations are correct, with units; explanations are chains of reasoning; diagrams are labelled and accurate; evaluation weighs arguments with data, short and long run, stakeholders and assumptions; the recommendation is clear and justified by data, with trade-offs, stakeholders, timing and a judgement.',
      ru: 'Расчёты верные, с единицами; объяснения — цепочки рассуждений; диаграммы подписаны и верны; оценка взвешивает аргументы с данными, краткосрочный и долгосрочный периоды, заинтересованные стороны и допущения; рекомендация ясна и обоснована данными, с компромиссами, заинтересованными сторонами, сроками и суждением.',
    },
    commandTerms: ['Calculate', 'Explain', 'Recommend', 'Define', 'Outline', 'Identify', 'Sketch', 'Determine', 'Describe', 'Draw', 'Show', 'Construct', 'State', 'Distinguish'],
    asked: { en: 'Based on the 8 papers May 2022 to November 2025 (all time zones). Counts come from the marked parts only.\n\n**Topics most often tested**\n\n| Topic | Parts | Papers |\n|---|---|---|\n| Government: taxes, subsidies and price controls | 22 | 8 |\n| Exchange rates | 17 | 6 |\n| Macroeconomic objectives | 15 | 5 |\n| Fiscal policy | 13 | 7 |\n| Externalities | 13 | 7 |\n| Monopoly and natural monopoly | 13 | 4 |\n| Economics of inequality and poverty | 12 | 6 |\n| Monetary policy | 12 | 6 |\n\n**Command terms**\n\nCalculate 61, Explain 33, Recommend 16, Define 10, Outline 7, Identify 6, Sketch 5, Determine 3, Describe 3, Draw 2, Show 2, Construct 2, State 1, Distinguish 1.\n\n**Diagrams asked for**\n\nsupply and demand 7, externality 6, tax incidence 6, monopoly 5, AD/AS 4, trade 4, subsidy 4, tariff/quota 3, exchange rate 3, price floor 2, Lorenz curve 2, Phillips curve 2, oligopoly/game 2, PED 1, multiplier 1, PPC 1.\n\n**Calculation parts**\n\n| Session | Calculation parts (marks) |\n|---|---|\n| M22 | 1a(i) (2), 1a(iii) (2), 1a(iv) (2), 1a(vi) (2), 2a(iii) (2), 2a(iv) (2), 2a(v) (2), 2a(vi) (2) |\n| N22 | 1a(i) (2), 1a(iii) (2), 1a(v) (2), 1a(vi) (2), 2a(iii) (2), 2a(iv) (3), 2a(v) (2), 2a(vi) (2) |\n| M23 | 1a(i) (2), 1a(ii) (2), 1a(iii) (2), 1a(vii) (2), 2a(i) (2), 2a(ii) (2), 2a(iii) (2), 2a(iv) (2), 2a(vii) (2) |\n| N23 | 1a(iii) (3), 1a(iv) (2), 1a(v) (2), 2a(iii) (1), 2a(iv) (1), 2a(v) (2), 2a(vi) (1), 2a(viii) (1) |\n| M24 | 1a(i) (2), 1a(ii) (2), 1a(iii) (2), 1a(iv) (2), 1a(v) (2), 2a(i) (2), 2a(ii) (2), 2a(vii) (2), 2a(viii) (2) |\n| N24 | 1a(ii) (2), 1a(v) (3), 1a(vi) (1), 1a(vii) (3), 2a(vi) (2), 2a(vii) (2), 2a(viii) (1) |\n| M25 | 1a(i) (2), 1a(v) (2), 1a(vi) (2), 1a(vii) (2), 2a(iii) (2), 2a(iv) (1), 2a(v) (2), 2a(ix) (1) |\n| N25 | 1a(i) (1), 1a(ii) (1), 1a(vi) (1), 1a(vii) (3), 1a(viii) (2), 2a(i) (2), 2a(v) (1), 2a(vi) (1), 2a(viii) (2), 2a(x) (1) |', ru: 'По 8 пейперам, май 2022 — ноябрь 2025 (все часовые пояса). Цифры — по размеченным частям, без текста вопросов.\n\n**Темы, которые спрашивают чаще всего**\n\n| Тема | Частей | Пейперов |\n|---|---|---|\n| Государство: налоги, субсидии и регулирование цен | 22 | 8 |\n| Обменные курсы | 17 | 6 |\n| Макроэкономические цели | 15 | 5 |\n| Фискальная политика (fiscal policy) | 13 | 7 |\n| Экстерналии (externalities) | 13 | 7 |\n| Монополия и естественная монополия (natural monopoly) | 13 | 4 |\n| Экономика неравенства и бедности | 12 | 6 |\n| Монетарная политика | 12 | 6 |\n\n**Командные слова**\n\nCalculate (рассчитайте) 61, Explain (объясните) 33, Recommend (рекомендуйте) 16, Define (определите) 10, Outline (кратко изложите) 7, Identify (назовите) 6, Sketch (набросайте) 5, Determine (определите) 3, Describe (опишите) 3, Draw (нарисуйте) 2, Show (покажите) 2, Construct 2, State (укажите) 1, Distinguish (различите) 1.\n\n**Какие диаграммы просят**\n\nsupply and demand 7, externality 6, tax incidence 6, monopoly 5, AD/AS 4, trade 4, subsidy 4, tariff/quota 3, exchange rate 3, price floor 2, Lorenz curve 2, Phillips curve 2, oligopoly/game 2, PED 1, multiplier 1, PPC 1.\n\n**Части с расчётами**\n\n| Сессия | Части с расчётами (баллы) |\n|---|---|\n| M22 | 1a(i) (2), 1a(iii) (2), 1a(iv) (2), 1a(vi) (2), 2a(iii) (2), 2a(iv) (2), 2a(v) (2), 2a(vi) (2) |\n| N22 | 1a(i) (2), 1a(iii) (2), 1a(v) (2), 1a(vi) (2), 2a(iii) (2), 2a(iv) (3), 2a(v) (2), 2a(vi) (2) |\n| M23 | 1a(i) (2), 1a(ii) (2), 1a(iii) (2), 1a(vii) (2), 2a(i) (2), 2a(ii) (2), 2a(iii) (2), 2a(iv) (2), 2a(vii) (2) |\n| N23 | 1a(iii) (3), 1a(iv) (2), 1a(v) (2), 2a(iii) (1), 2a(iv) (1), 2a(v) (2), 2a(vi) (1), 2a(viii) (1) |\n| M24 | 1a(i) (2), 1a(ii) (2), 1a(iii) (2), 1a(iv) (2), 1a(v) (2), 2a(i) (2), 2a(ii) (2), 2a(vii) (2), 2a(viii) (2) |\n| N24 | 1a(ii) (2), 1a(v) (3), 1a(vi) (1), 1a(vii) (3), 2a(vi) (2), 2a(vii) (2), 2a(viii) (1) |\n| M25 | 1a(i) (2), 1a(v) (2), 1a(vi) (2), 1a(vii) (2), 2a(iii) (2), 2a(iv) (1), 2a(v) (2), 2a(ix) (1) |\n| N25 | 1a(i) (1), 1a(ii) (1), 1a(vi) (1), 1a(vii) (3), 1a(viii) (2), 2a(i) (2), 2a(v) (1), 2a(vi) (1), 2a(viii) (2), 2a(x) (1) |' },
    timedSets: [
      {
        id: 'p3-policy-set',
        title: { en: 'Policy paper, sets 1 and 2 (choose one, 60 minutes; 75 with +25% extra time)', ru: 'Анализ политики, наборы 1 и 2 (выберите один, 60 минут; 75 с доп. временем +25%)' },
        questionIds: ['p3-set-01', 'p3-set-02'],
        minutes: 60,
      },
      {
        id: 'p3-policy-set-b',
        title: { en: 'Policy paper, sets 3 and 4 (choose one, 60 minutes; 75 with +25% extra time)', ru: 'Анализ политики, наборы 3 и 4 (выберите один, 60 минут; 75 с доп. временем +25%)' },
        questionIds: ['p3-set-03', 'p3-set-04'],
        minutes: 60,
      },
    ],
  },
];
