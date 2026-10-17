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
      en: 'I can choose an extended question and select relevant evidence at the right scale',
      ru: 'Умею выбрать развёрнутый вопрос и подобрать уместные доказательства подходящего масштаба',
    },
    {
      en: 'I can write a complete 10-mark practice answer with developed explanations and evaluation',
      ru: 'Умею написать полный тренировочный ответ на 10 баллов с объяснением и оценкой',
    },
    {
      en: 'I can judge what the evidence supports and reach a justified conclusion',
      ru: 'Умею оценить, что подтверждают доказательства, и сделать обоснованный вывод',
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
  sources: [{ kind: 'web', title: 'Environment Agency, Boscastle and North Cornwall (14 August 2014)', url: 'https://www.gov.uk/government/news/tenth-anniversary-of-boscastle-and-north-cornwall-floods', locator: 'Channel, bridge, culvert, community plans and warning service' }, { kind: 'ib-guide', title: 'Geography guide (2017), Option A: Freshwater', locator: 'pp. 56–58: common 10-mark bands; pp. 77–78: command terms' }],
  links: [
    { title: 'ThinkIB eBook: Option A - Freshwater Environments (option page, Paper 1 essay)', url: 'https://student.thinkib.net/geography/page/43412/option-a-freshwater-environments' },
  ],
};

export default topic;
