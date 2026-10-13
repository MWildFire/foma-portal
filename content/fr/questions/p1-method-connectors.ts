import type { FrQuestion } from '../types';

export const questions: FrQuestion[] = [
  {
    id: 'p1-method-q1',
    subject: 'fr',
    topicIds: ['p1-method'],
    paper: 'P1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'How long should you spend planning a text in Paper 1? A) 5 minutes B) about 10 minutes C) 40 minutes',
      ru: 'Сколько времени стоит потратить на план текста на экзамене P1? A) 5 минут B) около 10 минут C) 40 минут',
      fr: "Combien de temps faut-il consacrer à la planification d'un texte pendant l'épreuve P1 ? A) 5 minutes B) environ 10 minutes C) 40 minutes",
    },
    markscheme: {
      en: 'Answer: B. About 10 minutes is enough to choose the content points, decide tu or vous and plan the layout. Five minutes is too short for a plan; forty would leave too little time for writing.',
      ru: 'Ответ: B. Около 10 минут хватает, чтобы выбрать пункты содержания, решить, tu или vous, и продумать структуру. 5 минут слишком мало для плана, а 40 оставят слишком мало времени на письмо.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'p1-method-q2',
    subject: 'fr',
    topicIds: ['p1-method'],
    paper: 'P1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which criterion assesses the accuracy of grammar and vocabulary? A) Message B) Conceptual understanding C) Language',
      ru: 'Какой критерий оценивает точность грамматики и лексики? A) Message (сообщение) B) Conceptual understanding (концептуальное понимание) C) Language (язык)',
      fr: "Quel critère évalue l'exactitude de la grammaire et du vocabulaire ? A) Message B) Compréhension conceptuelle C) Langue",
    },
    markscheme: {
      en: 'Answer: C. Criterion A, Language (12 marks), assesses the accuracy, range and complexity of grammar and vocabulary. Message covers purpose, audience and the conventions of the text type; Conceptual understanding covers how the theme and the ideas are developed.',
      ru: 'Ответ: C. Критерий A, Language (язык, 12 баллов), оценивает точность, разнообразие и сложность грамматики и лексики. Message относится к цели, адресату и нормам типа текста; Conceptual understanding — к тому, как раскрыты тема и идеи.',
    },
    answer: 'C',
    origin: 'original',
  },
  {
    id: 'p1-connectors-q1',
    subject: 'fr',
    topicIds: ['p1-connectors'],
    paper: 'P1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which connector introduces a result? A) « donc » B) « bien que » C) « pourtant »',
      ru: 'Какая связка вводит результат? A) « donc » B) « bien que » C) « pourtant »',
      fr: 'Quel connecteur introduit un résultat ? A) « donc » B) « bien que » C) « pourtant »',
    },
    markscheme: {
      en: 'Answer: A. « donc » (so, therefore) introduces a result. « bien que » (although) introduces a concession and takes the subjunctive; « pourtant » (yet, however) introduces a contrast.',
      ru: 'Ответ: A. « donc » (поэтому, следовательно) вводит результат. « bien que » (хотя) вводит уступку и требует subjonctif (сослагательного наклонения), а « pourtant » (и всё же) вводит противопоставление.',
    },
    answer: 'A',
    origin: 'original',
  },
  {
    id: 'p1-connectors-q2',
    subject: 'fr',
    topicIds: ['p1-connectors'],
    paper: 'P1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which connector means « on the other hand » when it introduces a contrast? A) « en effet » B) « en revanche » C) « par exemple »',
      ru: 'Какая связка означает «с другой стороны» и вводит противопоставление? A) « en effet » B) « en revanche » C) « par exemple »',
      fr: "Quel connecteur a le même sens que « d'un autre côté » pour introduire un contraste ? A) « en effet » B) « en revanche » C) « par exemple »",
    },
    markscheme: {
      en: 'Answer: B. « en revanche » means « on the other hand » and introduces a contrast. « en effet » (indeed) gives a reason or evidence, and « par exemple » (for example) introduces an illustration.',
      ru: 'Ответ: B. « en revanche » означает «с другой стороны» и вводит противопоставление. « en effet » (действительно, ведь) даёт довод, а « par exemple » (например) вводит пример.',
    },
    answer: 'B',
    origin: 'original',
  },
];
