import type { PaperGuide } from '../../src/contract/types';

// Paper guides for higher level (HL). The structure and the command terms come from the Oxford 2025 companion
// (pp. 600–608): each paper lasts 2 hours and carries 80 marks at higher level. Timed sets are sittings: a full paper
// (120 minutes) and a half paper (60 minutes). Each set adds up to its marks. The mock date is in data/exams.json.
export const papers: PaperGuide[] = [
  {
    subject: 'cs',
    paper: 'P1',
    title: { en: 'Paper 1 (higher level): theme A and the case study', ru: 'Работа 1 (высокий уровень): тема A и кейс' },
    minutes: 120,
    marks: 80,
    structure: {
      en: 'Section A (56 marks): answer all four questions. Each question is a scenario on units A1 to A4, including the higher-level topics, split into lettered parts up to part (f). Section B (24 marks): answer the one question on the case study, parts (a) to (d); the last part is a longer answer worth 12 marks. A clean copy of the case study is given in the exam, so read it before you start.',
      ru: 'Раздел A (56 баллов): отвечайте на все четыре вопроса. Каждый вопрос — сценарий по единицам A1–A4, включая темы только для высокого уровня, с пунктами до (f). Раздел B (24 балла): ответьте на один вопрос по кейсу, пункты (a)–(d); последний пункт — длинный ответ на 12 баллов. Чистая копия кейса выдаётся на экзамене, поэтому прочитайте её до начала.',
    },
    strategy: {
      en: 'About 1.5 minutes per mark. Read the command term first: Define needs one precise sentence, Explain needs a reason, Evaluate needs strengths, limitations and a conclusion. Show every step in calculations. Mark the questions you cannot finish and come back to them. In section B, use the scenario of the case study in every answer. There is no negative marking, so answer every question.',
      ru: 'Примерно полторы минуты на балл. Сначала читайте командный термин: Define требует одного точного определения, Explain — причины, Evaluate — сильные и слабые стороны и вывод. В расчётах показывайте каждый шаг. Вопросы, которые не получаются, отметьте и вернитесь к ним позже. В разделе B опирайтесь на сценарий кейса в каждом ответе. Штрафа за ошибку нет, поэтому отвечайте на каждый вопрос.',
    },
    commandTerms: ['Define', 'State', 'Outline', 'Describe', 'Explain', 'Calculate', 'Construct', 'Distinguish', 'Compare', 'Discuss', 'Evaluate', 'Justify', 'To what extent', 'Identify', 'List', 'Suggest', 'Deduce'],
    timedSets: [
      {
        id: 'p1-full',
        title: { en: 'Full paper: section A and the case study', ru: 'Вся работа: раздел A и кейс' },
        questionIds: [
          'a1-1-q02', 'a1-2-q02', 'a1-3-q01', 'a1-4-q03', 'a2-1-q02', 'a2-2-q02', 'a2-3-q02', 'a2-4-q02', 'port-a3-1-q3',
          'port-a3-2-q1b', 'a3-3-q01', 'a3-4-q01', 'a4-1-q01', 'a4-2-q02', 'port-a4-3-q1a', 'a4-4-q01', 'a1-1-q07', 'a1-1-q04',
          'p1-case-q02', 'p1-case-q13', 'p1-case-q08', 'p1-case-q06', 'p1-case-q05', 'p1-case-q04',
        ],
        minutes: 120,
      },
      {
        id: 'p1-half',
        title: { en: 'Half paper: 40 marks in 60 minutes', ru: 'Половина работы: 40 баллов за 60 минут' },
        questionIds: [
          'a1-2-q02', 'a1-4-q03', 'a2-1-q02', 'a2-4-q02', 'port-a3-1-q3', 'a3-3-q01', 'a4-1-q01', 'port-a4-3-q1a', 'a1-1-q08',
          'p1-case-q02', 'p1-case-q05', 'p1-case-q04', 'p1-case-q01',
        ],
        minutes: 60,
      },
    ],
  },
  {
    subject: 'cs',
    paper: 'P2',
    title: { en: 'Paper 2 (higher level): theme B, Python', ru: 'Работа 2 (высокий уровень): тема B, Python' },
    minutes: 120,
    marks: 80,
    structure: {
      en: 'Theme B only, 80 marks. The paper has two options with the same six questions: Option A uses Java (Questions 1 to 6) and Option B uses Python (Questions 7 to 12). Answer all questions from one option. The questions cover flowcharts and trace tables, arrays and lists, object-oriented programming, maps and sets, recursion with binary search trees, and linked lists. The portal teaches Python (Option B); check with your teacher which option the school uses.',
      ru: 'Только тема B, 80 баллов. В работе два варианта с одинаковыми шестью вопросами: вариант A использует Java (вопросы 1–6), вариант B — Python (вопросы 7–12). Отвечайте на все вопросы одного варианта. Вопросы охватывают блок-схемы и трассировочные таблицы, массивы и списки, объектно-ориентированное программирование, словари и множества, рекурсию с двоичными деревьями поиска и связные списки. Портал учит Python (вариант B); уточните у преподавателя, какой вариант используется в школе.',
    },
    strategy: {
      en: 'Read the code before you answer. When a question asks for output, trace the program line by line in a trace table. For a coding question, write the steps in words first, then the code. Check that your method returns or prints what the question asks for. Use manual algorithms where the question asks you to show the method. There is no negative marking, so answer every question.',
      ru: 'Сначала прочитайте код. Если нужен результат работы программы, проследите её построчно в таблице трассировки. В задаче на программирование сначала запишите шаги словами, затем код. Проверьте, что метод возвращает или выводит то, что требуется. Если вопрос просит показать метод, пишите алгоритм вручную. Штрафа за ошибку нет, поэтому отвечайте на каждый вопрос.',
    },
    commandTerms: ['Trace', 'Sketch', 'Construct', 'Identify', 'State', 'List', 'Describe', 'Explain', 'Justify', 'Outline', 'Distinguish', 'To what extent', 'Copy and complete', 'Calculate', 'Define', 'Evaluate', 'Deduce', 'Discuss', 'Suggest'],
    timedSets: [
      {
        id: 'p2-full',
        title: { en: 'Full paper 2 (Python): 80 marks', ru: 'Вся работа 2 (Python): 80 баллов' },
        questionIds: [
          'b1-1-q01', 'b2-1-q01', 'b2-2-q02', 'b2-3-q01', 'b2-4-q02', 'b2-5-q03', 'b3-1-q01', 'b3-2-q02', 'b4-1-q02',
          'b4-1-q06', 'b4-1-q03', 'b3-2-q08', 'b3-1-q10', 'b2-5-q10', 'b2-1-q09', 'b2-1-q07', 'b2-1-q06', 'b2-1-q05',
          'b1-1-q10', 'b1-1-q08', 'b1-1-q04',
        ],
        minutes: 120,
      },
      {
        id: 'p2-half',
        title: { en: 'Half paper 2 (Python): 40 marks in 60 minutes', ru: 'Половина работы 2 (Python): 40 баллов за 60 минут' },
        questionIds: ['b1-1-q01', 'b2-1-q01', 'b2-3-q01', 'b2-4-q02', 'b3-1-q01', 'b4-1-q02', 'b3-1-q10', 'b2-5-q10', 'b1-1-q10', 'b1-1-q08', 'b1-1-q04'],
        minutes: 60,
      },
    ],
  },
];
