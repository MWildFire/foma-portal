import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'critique-maximizing-behaviour',
  subject: 'econ',
  code: '2.4',
  title: { en: 'Critique of maximizing behaviour', ru: 'Критика максимизирующего поведения' },
  papers: ['P2', 'P3'],
  hl: true,
  order: 13,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['choice-architecture', 'bounded-selfishness', 'bounded-self-control', 'rules-of-thumb', 'availability-bias', 'framing-bias', 'rational-choice', 'utility-maximization', 'bounded-rationality', 'anchoring-bias', 'nudge'],
  questionIds: ['econ-critique-maximizing-behaviour-03'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.4' }],
};

export default topic;
