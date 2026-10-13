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
      en: 'Section A (56 marks): short scenario questions on units A1 to A4, including the higher-level topics. Each scenario has several questions of rising difficulty. Section B (24 marks): questions on the case study. A clean copy of the case study is given in the exam; at higher level you answer four or five short questions and one longer question.',
      ru: 'Раздел A (56 баллов): короткие вопросы по сценариям, по единицам A1–A4, включая темы только для высокого уровня. Каждый сценарий содержит несколько вопросов возрастающей сложности. Раздел B (24 балла): вопросы по кейсу. Чистая копия кейса выдаётся на экзамене; на высоком уровне отвечают на четыре–пять коротких вопросов и один длинный.',
    },
    strategy: {
      en: 'About 1.5 minutes per mark. Read the command term first: Define needs one precise sentence, Explain needs a reason, Evaluate needs strengths, limitations and a conclusion. Show every step in calculations. Mark the questions you cannot finish and come back to them. In section B, use the scenario of the case study in every answer. There is no negative marking, so answer every question.',
      ru: 'Примерно полторы минуты на балл. Сначала читайте командный термин: Define требует одного точного определения, Explain — причины, Evaluate — сильные и слабые стороны и вывод. В расчётах показывайте каждый шаг. Вопросы, которые не получаются, отметьте и вернитесь к ним позже. В разделе B опирайтесь на сценарий кейса в каждом ответе. Штрафа за ошибку нет, поэтому отвечайте на каждый вопрос.',
    },
    commandTerms: ['Define', 'State', 'Outline', 'Describe', 'Explain', 'Calculate', 'Construct', 'Distinguish', 'Compare', 'Discuss', 'Evaluate', 'Justify', 'To what extent'],
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
      en: 'Theme B only. Question 1 covers computational thinking and the ideas of object-oriented programming without coding. The other questions ask you to write, complete, trace or correct code. The portal teaches Python; check with your teacher which language your paper uses, because the textbook allows Java or Python. At higher level the paper includes abstract data types (B4.1).',
      ru: 'Только тема B. Первый вопрос проверяет компьютерное мышление и идеи объектно-ориентированного программирования без написания кода. Остальные вопросы просят написать, дополнить, проследить или исправить код. Портал учит Python; уточните у преподавателя, на каком языке будет ваша работа, потому что по учебнику экзамен возможен на Java или Python. На высоком уровне работа включает абстрактные типы данных (B4.1).',
    },
    strategy: {
      en: 'Read the code before you answer. When a question asks for output, trace the program line by line in a trace table. For a coding question, write the steps in words first, then the code. Check that your method returns or prints what the question asks for. Use manual algorithms where the question asks you to show the method. There is no negative marking, so answer every question.',
      ru: 'Сначала прочитайте код. Если нужен результат работы программы, проследите её построчно в таблице трассировки. В задаче на программирование сначала запишите шаги словами, затем код. Проверьте, что метод возвращает или выводит то, что требуется. Если вопрос просит показать метод, пишите алгоритм вручную. Штрафа за ошибку нет, поэтому отвечайте на каждый вопрос.',
    },
    commandTerms: ['Trace', 'Sketch', 'Construct', 'Identify', 'State', 'List', 'Describe', 'Explain', 'Justify', 'Outline', 'Distinguish', 'To what extent'],
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
