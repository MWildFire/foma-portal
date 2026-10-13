import type { PaperGuide } from '../../../src/contract/types';

// Paper 1 guide for both options: 90 minutes, 40 marks (data/exams.json: geo-p1). Each option is about 45 minutes.
// Timed sets: option A alone, option G alone, and the full paper (options A and G together).
export const papers: PaperGuide[] = [
  {
    subject: 'geo',
    paper: 'P1',
    title: { en: 'Paper 1: two options', ru: 'Paper 1: две опции' },
    minutes: 90,
    marks: 40,
    structure: {
      en: 'Two options, 20 marks each, about 45 minutes per option. Each option has a structured question (10 marks, several parts with marks in brackets) and one extended question chosen from two (10 marks each). In option A (Freshwater), the extended questions use Examine 22 times in 26, Evaluate twice and To what extent twice (13 papers, May 2019 to November 2025). In option G (Urban environments), every structured question starts from a map, graph, table or diagram, and the extended questions use Examine 20 times in 26, Evaluate 3 times and To what extent 3 times (the same papers).',
      ru: 'Две опции по 20 баллов, около 45 минут на опцию. В каждой опции есть структурированный вопрос (10 баллов, несколько частей с баллами в скобках) и один развёрнутый вопрос на выбор из двух (по 10 баллов). В опции A (Freshwater) развёрнутые вопросы используют Examine в 22 случаях из 26, Evaluate — 2 раза и To what extent — 2 раза (13 пейперов, с мая 2019 по ноябрь 2025). В опции G каждый структурированный вопрос начинается с карты, графика, таблицы или схемы, а развёрнутые вопросы используют Examine в 20 случаях из 26, Evaluate — 3 раза и To what extent — 3 раза (те же пейперы).',
    },
    strategy: {
      en: 'Give about 15 minutes to each structured question and about 30 minutes to each extended response. In each option, read both extended questions first and pick the one you can answer with a named place you know well. Spend two or three minutes on a plan before writing.',
      ru: 'На каждый структурированный вопрос уходит около 15 минут, на каждый развёрнутый ответ около 30 минут. В каждой опции сначала прочитай оба развёрнутых вопроса и выбери тот, на который можешь ответить, опираясь на известное тебе место. Перед письмом потрать две-три минуты на план.',
    },
    criteria: {
      en: '**Extended answers.** Each option has its own step-by-step page: "Extended answers in Option A" and "Extended answers in Option G". Check every paragraph against three things: a named place, at least one figure with a year, and a judgement that answers the command term.',
      ru: '**Развёрнутые ответы.** У каждой опции есть своя пошаговая страница: «Развёрнутые ответы по опции A» и «Развёрнутые ответы по опции G». Проверяй каждый абзац по трём признакам: названное место, хотя бы одна цифра с годом и вывод, который отвечает на командное слово.',
    },
    commandTerms: ['State', 'Identify', 'Describe', 'Estimate', 'Determine', 'Outline', 'Explain', 'Suggest', 'Examine', 'Evaluate', 'To what extent'],
    timedSets: [
      {
        id: 'a-p1-option-a',
        title: { en: 'Option A only, 45 minutes', ru: 'Только опция A, 45 минут' },
        questionIds: ['a1-sq1', 'a2-eq1'],
        minutes: 45,
      },
      {
        id: 'g-p1-option-g',
        title: { en: 'Option G only, 45 minutes', ru: 'Только опция G, 45 минут' },
        questionIds: ['g1-sq2', 'g4-eq1'],
        minutes: 45,
      },
      {
        id: 'p1-two-options',
        title: { en: 'Full Paper 1: options A and G, 90 minutes', ru: 'Полный Paper 1: опции A и G, 90 минут' },
        questionIds: ['a1-sq1', 'a2-eq1', 'g1-sq2', 'g4-eq1'],
        minutes: 90,
      },
    ],
  },
];
