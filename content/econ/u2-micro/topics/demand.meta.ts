import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'demand',
  subject: 'econ',
  code: '2.1',
  title: { en: 'Demand', ru: 'Спрос' },
  papers: ['P2', 'P3'],
  order: 10,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can state the law of demand and explain why demand curves slope downwards', ru: 'Могу сформулировать закон спроса и объяснить, почему кривые спроса идут вниз' },
    { en: 'I can explain the difference between individual demand and market demand', ru: 'Могу объяснить разницу между индивидуальным спросом и рыночным спросом' },
    { en: 'I can name the determinants of demand and say how each one shifts the curve', ru: 'Могу назвать факторы спроса и сказать, как каждый из них сдвигает кривую' },
    { en: 'I can tell a movement along the demand curve from a shift of the whole curve', ru: 'Могу отличить движение вдоль кривой спроса от сдвига всей кривой' },
    { en: 'I can calculate the percentage change in demand at a given price', ru: 'Могу рассчитать процентное изменение спроса при заданной цене' },
  ],
  termIds: [
    'demand', 'law-of-demand', 'market-demand', 'demand-curve', 'normal-good', 'inferior-good',
    'substitute-goods', 'complementary-goods', 'movement-along-demand-curve', 'shift-of-demand-curve', 'supply',
  ],
  sims: ['econ.demand-shift'],
  questionIds: ['econ-demand-01', 'econ-demand-02', 'econ-demand-03', 'econ-demand-04'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.1' }],
};

export default topic;
