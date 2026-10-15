import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'income-and-cross-elasticity',
  subject: 'econ',
  code: '2.5',
  title: {"en": "Income elasticity of demand — mock scope", "ru": "Эластичность спроса по доходу — объём мока"},
  papers: ['P2', 'P3'],
  order: 15,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['income-elasticity-of-demand', 'normal-good', 'inferior-good', 'necessity-good', 'luxury-good'],
  formulaIds: ['yed'],
  sims: ['econ.yed'],
  questionIds: ['econ-income-and-cross-elasticity-01', 'econ-income-and-cross-elasticity-02', 'econ-income-and-cross-elasticity-05'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.5' }],
};

export default topic;
