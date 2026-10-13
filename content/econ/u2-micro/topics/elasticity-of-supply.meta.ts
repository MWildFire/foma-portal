import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'elasticity-of-supply',
  subject: 'econ',
  code: '2.6',
  title: { en: 'Elasticity of supply', ru: 'Эластичность предложения' },
  papers: ['P1', 'P2', 'P3'],
  order: 16,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can define price elasticity of supply and calculate it from a table of prices and quantities', ru: 'Могу определить ценовую эластичность предложения и рассчитать её по таблице цен и величин' },
    { en: 'I can say whether supply is elastic, inelastic or unit elastic from the value of PES', ru: 'Могу по значению PES определить, эластично предложение, неэластично или имеет единичную эластичность' },
    { en: 'I can explain the determinants of PES: time period, factor mobility, spare capacity, stocks and production time', ru: 'Могу объяснить факторы PES: временной период, мобильность факторов, избыточные мощности, запасы и время производства' },
    { en: 'I can draw perfectly elastic and perfectly inelastic supply curves and state their PES values', ru: 'Могу нарисовать кривые абсолютно эластичного и абсолютно неэластичного предложения и назвать их значения PES' },
    { en: 'I can explain why supply is more elastic in the long run than in the short run', ru: 'Могу объяснить, почему предложение в долгосрочном периоде более эластично, чем в краткосрочном' },
  ],
  termIds: [
    'price-elasticity-of-supply',
    'elastic-supply',
    'inelastic-supply',
    'unit-elastic-supply',
    'perfectly-elastic-supply',
    'perfectly-inelastic-supply',
    'factor-mobility',
    'spare-capacity',
    'elasticity',
    'percentage-change',
  ],
  formulaIds: ['pes'],
  sims: ['econ.pes'],
  questionIds: [
    'econ-elasticity-of-supply-01',
    'econ-elasticity-of-supply-02',
    'econ-elasticity-of-supply-03',
    'econ-elasticity-of-supply-04',
    'econ-elasticity-of-supply-05',
    'econ-elasticity-of-supply-06',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.6' }],
};

export default topic;
