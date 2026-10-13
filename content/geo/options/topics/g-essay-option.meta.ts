import type { TopicMeta } from '../../../../src/contract/types';

// Exam technique for the extended answer of option G (Paper 1). It has no programme code of its own: see syllabus.ts (G-essay).
const topic: TopicMeta = {
  id: 'g-essay-option',
  subject: 'geo',
  code: 'G-essay',
  title: { en: 'Extended answers in Option G', ru: 'Развёрнутые ответы по опции G' },
  papers: ['P1'],
  option: 'G',
  order: 5,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can read the command word and say what the answer must do',
      ru: 'Умею прочитать командное слово и сказать, что должен сделать ответ',
    },
    {
      en: 'I can plan a 10-mark answer in four blocks: context, arguments, a counter-argument and a judgement',
      ru: 'Умею спланировать ответ на 10 баллов в четыре блока: контекст, доводы, контраргумент и суждение',
    },
    {
      en: 'I can back each argument with a named place, a year and a figure',
      ru: 'Умею подкрепить каждый довод названным местом, годом и цифрой',
    },
    {
      en: 'I can finish with a judgement that answers the command word and states its conditions',
      ru: 'Умею закончить суждением, которое отвечает на командное слово, и назвать его условия',
    },
  ],
  termIds: [],
  questionIds: ['g3-eq1', 'g2-eq2'],
  caseIds: [],
  sims: [],
  sources: [{ kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments' }],
  links: [
    { title: 'ThinkIB: Understanding Assessment, Paper 1 (24167)', url: 'https://student.thinkib.net/geography/' },
  ],
};

export default topic;
