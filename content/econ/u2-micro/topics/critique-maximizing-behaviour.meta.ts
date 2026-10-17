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
  sources: [
    { kind: 'textbook', title: 'Tragakes, Economics for the IB Diploma: Coursebook (2020, 3rd ed.)', locator: '2.6, printed pp. 73–76: biases, bounded rationality/self-control/selfishness, nudges and choice architecture' },
    { kind: 'web', title: 'НИУ ВШЭ: Введение в институциональный анализ, лекция 1 (2015)', locator: 'PDF pp. 24–25: ограниченная рациональность и принцип удовлетворения; terminology support, not a source for every behavioural example', url: 'https://lia.hse.ru/data/2015/09/02/1089933585/2015_Lec_1.pdf' },
  ],
};

export default topic;
