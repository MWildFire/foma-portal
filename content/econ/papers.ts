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
      en: 'One data response question: choose one of two. The stimulus is a short article with data (200 to 300 words). Parts (a) to (f) are worth 25 marks in total (define, calculate, draw, show, explain). Part (g) is worth 15 marks and asks you to discuss, with evaluation. Total: 40 marks in 105 minutes.',
      ru: 'Один вопрос с анализом данных: выберите один из двух. Материал — короткая статья с данными (от 200 до 300 слов). Части (a)–(f) — 25 баллов всего (define, calculate, draw, show, explain). Часть (g) — 15 баллов, команда Discuss, с оценкой. Всего: 40 баллов за 105 минут.',
    },
    strategy: {
      en: 'Read the stimulus and the data before the questions, and underline the figures you need. Define each term in one sentence, using the exact term. Calculate with the formula written out, with units and sign. Draw diagrams with labelled axes and curves, and show shifts clearly. In part (g), give a balanced discussion of two sides, an evaluation (short run and long run, stakeholders, assumptions) and a judgement.',
      ru: 'Сначала прочитайте материал и данные, отметьте нужные цифры. Давайте определения в одном предложении, используя точный термин. Рассчитывайте, записывая формулу, единицы и знак. Рисуйте диаграммы с подписанными осями и кривыми, ясно показывайте сдвиги. В части (g) дайте сбалансированное обсуждение двух сторон, оценку (краткосрочный и долгосрочный периоды, заинтересованные стороны, допущения) и суждение.',
    },
    criteria: {
      en: 'Definitions and calculations are accurate, with units and signs; diagrams are correct and labelled; explanations are chains of reasoning that use the data; the part (g) discussion is balanced, evaluative and ends with a justified judgement.',
      ru: 'Определения и расчёты точные, с единицами и знаками; диаграммы верные и подписанные; объяснения — цепочки рассуждений с опорой на данные; обсуждение в части (g) сбалансированное, оценочное и завершается обоснованным суждением.',
    },
    commandTerms: ['Define', 'Calculate', 'Draw', 'Show', 'Explain', 'Discuss'],
    timedSets: [
      {
        id: 'p2-full-set',
        title: { en: 'Full data response, 105 minutes (one of two questions)', ru: 'Полный анализ данных, 105 минут (один из двух вопросов)' },
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
    marks: 40,
    structure: {
      en: 'One policy case study: a stimulus with data for a government choice, then tasks (a) to (e). Tasks (a) to (d) are worth 30 marks: (a) calculate (6), (b) explain (6), (c) draw a diagram and explain (6), (d) evaluate the policy (12). Task (e) is worth 10 marks: recommend one option, with justification, trade-offs, stakeholders, timing and a judgement. Total: 40 marks in 60 minutes.',
      ru: 'Один кейс политики: материал с данными о выборе правительства и задания (a)–(e). Задания (a)–(d) — 30 баллов: (a) рассчитать (6), (b) объяснить (6), (c) нарисовать диаграмму и объяснить (6), (d) оценить политику (12). Задание (e) — 10 баллов: рекомендовать один вариант с обоснованием, компромиссами, заинтересованными сторонами, сроками и суждением. Всего: 40 баллов за 60 минут.',
    },
    strategy: {
      en: 'Spend about six minutes reading the stimulus and marking the key figures. Do the calculations first and show each formula and unit. Draw labelled diagrams. For (d), make at least three evaluative points, each linked to the data. For (e), choose the option early, justify it with at least two figures, then discuss trade-offs, stakeholders and timing, and finish with a judgement on the conditions under which your choice holds.',
      ru: 'Около шести минут уходит на чтение материала и отметку ключевых цифр. Сначала сделайте расчёты, показывая формулу и единицы. Рисуйте подписанные диаграммы. В (d) сделайте не менее трёх оценочных пунктов, каждый связан с данными. В (e) выберите вариант заранее, обоснуйте его не менее чем двумя цифрами, затем обсудите компромиссы, заинтересованные стороны и сроки и завершите суждением о том, при каких условиях ваш выбор верен.',
    },
    criteria: {
      en: 'Calculations are correct, with units; explanations are chains of reasoning; diagrams are labelled and accurate; evaluation weighs arguments with data, short and long run, stakeholders and assumptions; the recommendation is clear and justified by data, with trade-offs, stakeholders, timing and a judgement.',
      ru: 'Расчёты верные, с единицами; объяснения — цепочки рассуждений; диаграммы подписаны и верны; оценка взвешивает аргументы с данными, краткосрочный и долгосрочный периоды, заинтересованные стороны и допущения; рекомендация ясна и обоснована данными, с компромиссами, заинтересованными сторонами, сроками и суждением.',
    },
    commandTerms: ['Calculate', 'Explain', 'Draw', 'Evaluate', 'Recommend'],
    timedSets: [
      {
        id: 'p3-policy-set',
        title: { en: 'Policy paper, sets 1 and 2 (choose one, 60 minutes)', ru: 'Анализ политики, наборы 1 и 2 (выберите один, 60 минут)' },
        questionIds: ['p3-set-01', 'p3-set-02'],
        minutes: 60,
      },
      {
        id: 'p3-policy-set-b',
        title: { en: 'Policy paper, sets 3 and 4 (choose one, 60 minutes)', ru: 'Анализ политики, наборы 3 и 4 (выберите один, 60 минут)' },
        questionIds: ['p3-set-03', 'p3-set-04'],
        minutes: 60,
      },
    ],
  },
];
