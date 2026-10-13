import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'equity-and-market-failure',
  subject: 'econ',
  code: '2.12',
  title: { en: 'Equity and market failure', ru: 'Справедливость (equity) и провалы рынка' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 24,
  minutes: 40,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain why markets can produce unequal outcomes, and define horizontal and vertical equity', ru: 'Могу объяснить, почему рынки дают неравные результаты, и определить горизонтальную и вертикальную справедливость' },
    { en: 'I can classify taxes as progressive, proportional or regressive, using the average tax rate', ru: 'Могу классифицировать налоги как прогрессивные, пропорциональные или регрессивные по средней ставке' },
    { en: 'I can calculate an average tax rate from income and tax data', ru: 'Могу рассчитать среднюю ставку налога по данным о доходе и налоге' },
    { en: 'I can explain the equity-efficiency trade-off and evaluate redistribution policies', ru: 'Могу объяснить компромисс между справедливостью и эффективностью и оценить политику перераспределения' },
  ],
  termIds: [
    'equity',
    'equity-efficiency-trade-off',
    'horizontal-equity',
    'vertical-equity',
    'progressive-tax',
    'proportional-tax',
    'regressive-tax',
    'average-tax-rate',
    'transfer-payment',
    'merit-good',
  ],
  questionIds: [
    'econ-equity-and-market-failure-01',
    'econ-equity-and-market-failure-02',
    'econ-equity-and-market-failure-03',
    'econ-equity-and-market-failure-04',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' }],
};

export default topic;
