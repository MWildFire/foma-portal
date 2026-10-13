import type { TopicMeta } from '../../../../src/contract/types';

// Exam technique for the extended answer of option A (Paper 1). It has no programme code of its own: see syllabus.ts (A-essay).
const topic: TopicMeta = {
  id: 'a-essay-option',
  subject: 'geo',
  code: 'A-essay',
  title: { en: 'Extended answers in Option A', ru: 'Развёрнутые ответы по опции A' },
  papers: ['P1'],
  option: 'A',
  order: 29,
  minutes: 25,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can read the command word of an option A question and say what the answer must do',
      ru: 'Умею прочитать командное слово вопроса по опции A и сказать, что должен сделать ответ',
    },
    {
      en: 'I can choose one of the two extended questions in about two minutes, using the place, year and figure I already know',
      ru: 'Умею выбрать один из двух развёрнутых вопросов примерно за две минуты, опираясь на известные место, год и цифру',
    },
    {
      en: 'I can plan a 10-mark answer in five steps: a definition, two developed points, a test and a judgement',
      ru: 'Умею спланировать ответ на 10 баллов в пять шагов: определение, два развёрнутых довода, проверку и суждение',
    },
    {
      en: 'I can back each point with a named place, a year and a figure, and finish with a judgement that gives a degree and its conditions',
      ru: 'Умею подкреплять каждый довод названным местом, годом и цифрой и закончить суждением, которое называет степень и условия',
    },
  ],
  termIds: [
    'a-storm-hydrograph',
    'a-lag-time',
    'a-peak-discharge',
    'a-flash-flood',
    'a-flood-mitigation',
    'a-flood-adaptation',
    'a-hard-engineering',
    'a-soft-engineering',
    'a-flood-warning',
    'a-water-scarcity',
  ],
  questionIds: ['a1-eq1', 'a2-eq2'],
  caseIds: ['a-boscastle-flash-2004', 'a-netherlands-room-river', 'a-pakistan-floods-2022', 'a-toledo-2014'],
  sims: [],
  sources: [{ kind: 'ib-guide', title: 'Geography guide (2017), Option A: Freshwater', locator: 'A-essay' }],
  links: [
    { title: 'ThinkIB, Understanding Assessment: Paper 1 (page 24167)', url: 'https://student.thinkib.net/geography/' },
  ],
};

export default topic;
