import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'economic-models',
  subject: 'econ',
  code: '1.2',
  title: {"en": "Circular flow — Unit 1 mock recap", "ru": "Кругооборот — повторение Unit 1 к моку"},
  papers: ['P2'],
  order: 2,
  minutes: 25,
  priority: 3,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['circular-flow-of-income', 'withdrawals', 'injections'],
  sims: ['econ.circular-flow'],
  questionIds: [],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 1.2' }],
};

export default topic;
