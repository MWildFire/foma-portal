import type { PaperGuide } from '../../../src/contract/types';

// Paper 1 guide for both options: 90 minutes, 40 marks (data/exams.json: geo-p1). Each option is about 45 minutes.
// The timed set below covers option G alone; the full-paper set is added when the second option is ready.
export const papers: PaperGuide[] = [
  {
    subject: 'geo',
    paper: 'P1',
    title: { en: 'Paper 1: two options', ru: 'Paper 1: две опции' },
    minutes: 90,
    marks: 40,
    structure: {
      en: 'Two options, 20 marks each, about 45 minutes per option. Each option has a structured question (10 marks, several parts with marks in brackets) and one extended question chosen from two (10 marks each). In option G, every structured question starts from a map, graph, table or diagram. Across the 13 option G papers (May 2019 to November 2025), the extended questions use Examine 20 times in 26, Evaluate 3 times and To what extent 3 times.',
      ru: 'Две опции по 20 баллов, около 45 минут на опцию. В каждой опции есть структурированный вопрос (10 баллов, несколько частей с баллами в скобках) и один развёрнутый вопрос на выбор из двух (по 10 баллов). В опции G каждый структурированный вопрос начинается с карты, графика, таблицы или схемы. В 13 пейперах опции G (с мая 2019 по ноябрь 2025) развёрнутые вопросы используют Examine в 20 случаях из 26, Evaluate — 3 раза и To what extent — 3 раза.',
    },
    strategy: {
      en: 'Give about 15 minutes to the structured question and about 30 minutes to the extended response. Read both extended questions first and pick the one you can answer with a named place you know well. Spend two or three minutes on a plan before writing.',
      ru: 'На структурированный вопрос уходит около 15 минут, на развёрнутый ответ около 30 минут. Сначала прочитай оба развёрнутых вопроса и выбери тот, на который можешь ответить, опираясь на известное тебе место. Перед письмом потрать две-три минуты на план.',
    },
    criteria: {
      en: '**Option G: extended answers.** The step-by-step method is on the page "Extended answers in Option G". Check every paragraph against three things: a named place, at least one figure with a year, and a judgement that answers the command term.',
      ru: '**Опция G: развёрнутые ответы.** Пошаговый метод описан на странице «Развёрнутые ответы по опции G». Проверяй каждый абзац по трём признакам: названное место, хотя бы одна цифра с годом и вывод, который отвечает на командное слово.',
    },
    commandTerms: ['State', 'Identify', 'Estimate', 'Determine', 'Outline', 'Explain', 'Suggest', 'Examine', 'Evaluate', 'To what extent'],
    timedSets: [
      {
        id: 'g-p1-option-g',
        title: { en: 'Option G only, 45 minutes', ru: 'Только опция G, 45 минут' },
        questionIds: ['g1-sq2', 'g4-eq1'],
        minutes: 45,
      },
    ],
  },
];
