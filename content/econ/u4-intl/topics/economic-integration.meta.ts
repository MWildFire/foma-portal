import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'economic-integration',
  subject: 'econ',
  code: '4.4',
  title: { en: 'Economic integration', ru: 'Экономическая интеграция' },
  papers: ['P2', 'P3'],
  order: 43,
  minutes: 40,
  priority: 2,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can distinguish a free trade area, a customs union, a common market and an economic union', ru: 'Могу различать зону свободной торговли, таможенный союз, общий рынок и экономический союз' },
    { en: 'I can define trade creation and trade diversion and give an example of each', ru: 'Могу дать определение торговому созданию и торговому отклонению и привести пример каждого' },
    { en: 'I can explain why trade diversion can reduce welfare even though trade between members rises', ru: 'Могу объяснить, почему торговое отклонение может снизить благосостояние, даже если торговля между участниками растёт' },
    { en: 'I can set out the arguments for and against economic integration', ru: 'Могу изложить аргументы за и против экономической интеграции' },
    { en: 'I can use the GCC customs union as an example of a customs union', ru: 'Могу использовать таможенный союз GCC как пример таможенного союза' },
  ],
  termIds: [
    'economic-integration',
    'free-trade-area',
    'customs-union',
    'common-external-tariff',
    'common-market',
    'economic-union',
    'trade-creation',
    'trade-diversion',
    'rules-of-origin',
    'economies-of-scale',
  ],
  sims: ['econ.integration'],
  questionIds: [
    'econ-economic-integration-01',
    'econ-economic-integration-02',
    'econ-economic-integration-03',
    'econ-economic-integration-04',
  ],
  caseIds: ['case-gcc-customs-union'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.4' }],
};

export default topic;
