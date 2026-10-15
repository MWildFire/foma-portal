import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'equity-and-market-failure',
  subject: 'econ',
  code: '2.12',
  title: { en: 'Equity and market failure', ru: 'Справедливость (equity) и провалы рынка' },
  papers: ['P2', 'P3'],
  hl: true,
  order: 24,
  minutes: 25,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['equity'],
  questionIds: [],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' }],
};

export default topic;
