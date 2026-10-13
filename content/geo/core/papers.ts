import type { PaperGuide } from '../../../src/contract/types';

// Geography SL, Paper 2 (core): 75 minutes, 50 marks (data/exams.json: geo-p2, 75 minutes).
// Section A: structured questions, 30 marks, about 40 minutes. Section B: one infographic question, 10 marks, about 15 minutes.
// Section C: one essay from two options, 10 marks, about 20 minutes.
// Each timed set is a full-length practice paper: 30 marks of Section A items from different units, 10 marks of Section B
// and 10 marks of Section C. Every set lasts 75 minutes, the length of the paper.
export const papers: PaperGuide[] = [
  {
    subject: 'geo',
    paper: 'P2',
    title: { en: 'Paper 2 (core): structured questions, infographic and essay', ru: 'Пейпер 2 (core): структурированные вопросы, инфографика и эссе' },
    minutes: 75,
    marks: 50,
    structure: {
      en: 'Section A: structured questions from the three units, 30 marks in total, about 40 minutes. Section B: one question on an infographic, 10 marks, about 15 minutes. Section C: one essay chosen from two questions, 10 marks, about 20 minutes.',
      ru: 'Раздел A: структурированные вопросы по трём юнитам, всего 30 баллов, около 40 минут. Раздел B: один вопрос по инфографике, 10 баллов, около 15 минут. Раздел C: одно эссе из двух вопросов, 10 баллов, около 20 минут.',
    },
    strategy: {
      en: 'Read the command term before you write. Start with the Section A questions that carry the most marks. Quote each infographic value with its year before you interpret it. In Section C, spend about three minutes on the plan and keep the last minutes for the judgement and the conclusion.',
      ru: 'Прочитайте командное слово до того, как начнёте писать. Начните с вопросов раздела A, которые дают больше баллов. Приводите каждое значение инфографики с годом, прежде чем его интерпретировать. В разделе C тратьте около трёх минут на план и оставляйте последние минуты на суждение и вывод.',
    },
    criteria: {
      en: 'Marks follow the command term. Describe and identify reward accurate features of a figure or a place. Explain and suggest reward a cause linked to evidence. Examine, discuss and evaluate reward both sides of the argument and a judgement. Section C is marked by markbands for knowledge, application, analysis and evaluation.',
      ru: 'Баллы зависят от командного слова. Describe и identify награждают точные признаки рисунка или места. Explain и suggest — причину, связанную с данными. Examine, discuss и evaluate — обе стороны аргумента и суждение. Раздел C оценивается по уровням markband: знание, применение, анализ и оценка.',
    },
    commandTerms: ['Describe', 'Explain', 'Outline', 'Identify', 'State', 'Calculate', 'Suggest', 'Examine', 'Discuss', 'Evaluate', 'To what extent', 'Using the infographic'],
    asked: {
      en: 'In the 13 past sessions (16 papers) subtopic 1.2 appears in every session, then 1.3, 3.2 and 3.3; 2.3 is the least frequent. Section A is mostly Explain (75 items), then Suggest and Describe. Every Section C essay is a "To what extent" question. Counts and cases are on the Paper 2 page.',
      ru: 'В 13 прошлых сессиях (16 пейперов) подтема 1.2 есть в каждой сессии, затем 1.3, 3.2 и 3.3; реже всего — 2.3. В разделе A чаще всего Explain (75 заданий), затем Suggest и Describe. Каждое эссе раздела C — вопрос «To what extent». Цифры и кейсы — на странице «Что спрашивают на Paper 2».',
    },
    timedSets: [
      {
        id: 'core-p2-timed-1',
        title: { en: 'Timed paper 1: full length, 75 minutes', ru: 'Тайм-сет 1: полная длина, 75 минут' },
        questionIds: [
          'core-1-1-a5', 'core-1-3-a3', 'core-2-2-a4', 'core-2-3-a3', 'core-3-2-a2', 'core-2-1-a2', 'core-1-2-a3', 'core-3-1-a5',
          'core-1-2-b1',
          'core-essay-2-1',
        ],
        minutes: 75,
      },
      {
        id: 'core-p2-timed-2',
        title: { en: 'Timed paper 2: full length, 75 minutes', ru: 'Тайм-сет 2: полная длина, 75 минут' },
        questionIds: [
          'core-2-2-a5', 'core-3-2-a5', 'core-1-3-a1', 'core-2-1-a3', 'core-3-1-a4', 'core-1-1-a2', 'core-2-3-a2', 'core-3-1-a1',
          'core-3-1-b1',
          'core-essay-3-1',
        ],
        minutes: 75,
      },
    ],
  },
];
