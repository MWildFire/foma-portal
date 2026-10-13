import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'benefits-of-trade',
  subject: 'econ',
  code: '4.1',
  title: { en: 'Benefits of international trade', ru: 'Выгоды международной торговли (benefits of international trade)' },
  papers: ['P1', 'P2', 'P3'],
  order: 40,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can calculate the opportunity cost of a good from two production possibilities', ru: 'Могу рассчитать альтернативные издержки товара по двум производственным возможностям' },
    { en: 'I can distinguish absolute advantage from comparative advantage', ru: 'Могу различать абсолютное и сравнительное преимущество' },
    { en: 'I can explain how specialisation and trade increase total output and consumer choice', ru: 'Могу объяснить, как специализация и торговля увеличивают совокупный выпуск и выбор потребителей' },
    { en: 'I can explain who gains and who loses from trade', ru: 'Могу объяснить, кто выигрывает и кто проигрывает от торговли' },
    { en: 'I can explain the limits of the gains from trade, using adjustment costs and dependence', ru: 'Могу объяснить пределы выгод от торговли, используя издержки адаптации и зависимость' },
  ],
  termIds: [
    'absolute-advantage',
    'comparative-advantage',
    'specialisation',
    'gains-from-trade',
    'free-trade',
    'import-competing-industry',
    'adjustment-costs',
    'trade-dependence',
    'economies-of-scale',
  ],
  formulaIds: ['opportunity-cost'],
  sims: ['econ.trade-gains'],
  questionIds: ['econ-benefits-of-trade-01', 'econ-benefits-of-trade-02', 'econ-benefits-of-trade-03', 'econ-benefits-of-trade-04'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.1' }],
};

export default topic;
