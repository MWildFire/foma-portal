import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'competitive-market-equilibrium',
  subject: 'econ',
  code: '2.3',
  title: { en: 'Competitive market equilibrium', ru: 'Равновесие на конкурентном рынке' },
  papers: ['P2', 'P3'],
  order: 12,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['allocative-efficiency', 'incentive-function', 'signalling-function', 'market-equilibrium', 'excess-demand', 'excess-supply', 'price-mechanism', 'consumer-surplus', 'producer-surplus'],
  formulaIds: ['linear-equilibrium', 'triangle-area'],
  sims: ['econ.equilibrium', 'econ.surplus'],
  questionIds: ['econ-competitive-market-equilibrium-01', 'econ-competitive-market-equilibrium-02', 'econ-competitive-market-equilibrium-03'],
  caseIds: ['case-opec-2020-cut'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.3' }],
};

export default topic;
