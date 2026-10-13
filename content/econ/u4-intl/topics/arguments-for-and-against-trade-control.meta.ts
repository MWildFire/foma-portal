import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'arguments-for-and-against-trade-control',
  subject: 'econ',
  code: '4.3',
  title: { en: 'Arguments for and against trade control', ru: 'Аргументы за и против торговых ограничений' },
  papers: ['P1', 'P2', 'P3'],
  order: 42,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can explain the main arguments for trade control', ru: 'Могу объяснить основные аргументы в пользу торговых ограничений' },
    { en: 'I can explain the main arguments against trade control', ru: 'Могу объяснить основные аргументы против торговых ограничений' },
    { en: 'I can evaluate an argument by asking who gains, who loses and over what time period', ru: 'Могу оценить аргумент, спросив, кто выигрывает, кто проигрывает и за какой период' },
    { en: 'I can name alternatives to trade protection and compare their costs', ru: 'Могу назвать альтернативы торговой защите и сравнить их издержки' },
    { en: 'I can use the US steel tariffs case as evidence in a discussion', ru: 'Могу использовать кейс о пошлинах США на сталь как доказательство в дискуссии' },
  ],
  termIds: [
    'infant-industry',
    'strategic-industry',
    'declining-industry',
    'anti-dumping-duty',
    'downstream-industry',
    'trade-war',
    'rent-seeking',
    'dumping',
    'x-inefficiency',
  ],
  questionIds: [
    'econ-arguments-for-and-against-trade-control-01',
    'econ-arguments-for-and-against-trade-control-02',
    'econ-arguments-for-and-against-trade-control-03',
  ],
  caseIds: ['case-us-steel-tariffs-2018'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.3' }],
};

export default topic;
