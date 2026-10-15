import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'public-goods',
  subject: 'econ',
  code: '2.9',
  title: { en: 'Public goods', ru: 'Общественные блага (public goods)' },
  papers: ['P2', 'P3'],
  order: 20,
  minutes: 25,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['public-good', 'non-rivalry', 'non-excludability', 'free-rider', 'free-rider-problem', 'public-provision'],
  sims: [],
  questionIds: ['econ-public-goods-02'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.9' }],
};

export default topic;
