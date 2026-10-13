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
      en: 'Two options, 20 marks each. Each option has a structured question (10 marks, parts a, b and c) and one extended response (10 marks) chosen from two questions. Each option takes about 45 minutes.',
      ru: 'Две опции по 20 баллов. В каждой опции есть структурированный вопрос (10 баллов, части a, b и c) и один развёрнутый ответ (10 баллов) на выбор из двух вопросов. Одна опция занимает около 45 минут.',
    },
    strategy: {
      en: 'Give about 15 minutes to the structured question and about 30 minutes to the extended response. Read both extended questions first and pick the one you can answer with a named place you know well. Spend two or three minutes on a plan before writing.',
      ru: 'На структурированный вопрос уходит около 15 минут, на развёрнутый ответ около 30 минут. Сначала прочитай оба развёрнутых вопроса и выбери тот, на который можешь ответить, опираясь на известное тебе место. Перед письмом потрать две-три минуты на план.',
    },
    criteria: {
      en: '**Option G: extended answers.** The step-by-step method is on the page "Extended answers in Option G". Check every paragraph against three things: a named place, at least one figure with a year, and a judgement that answers the command term.',
      ru: '**Опция G: развёрнутые ответы.** Пошаговый метод описан на странице «Развёрнутые ответы по опции G». Проверяй каждый абзац по трём признакам: названное место, хотя бы одна цифра с годом и вывод, который отвечает на командное слово.',
    },
    commandTerms: ['Describe', 'Explain', 'Suggest', 'Examine', 'Discuss', 'Evaluate', 'To what extent'],
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
