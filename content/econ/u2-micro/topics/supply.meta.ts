import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'supply',
  subject: 'econ',
  code: '2.2',
  title: { en: 'Supply', ru: 'Предложение' },
  papers: ['P2', 'P3'],
  order: 11,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can state the law of supply and explain why supply curves slope upwards', ru: 'Могу сформулировать закон предложения и объяснить, почему кривые предложения идут вверх' },
    { en: 'I can name the determinants of supply and say how each one shifts the curve', ru: 'Могу назвать факторы предложения и сказать, как каждый из них сдвигает кривую' },
    { en: 'I can tell a movement along the supply curve from a shift of the whole curve', ru: 'Могу отличить движение вдоль кривой предложения от сдвига всей кривой' },
    { en: 'I can explain how taxes, subsidies and costs change the supply of a good', ru: 'Могу объяснить, как налоги, субсидии и издержки меняют предложение товара' },
    { en: 'I can calculate the percentage change in supply at a given price', ru: 'Могу рассчитать процентное изменение предложения при заданной цене' },
  ],
  termIds: [
    'supply', 'law-of-supply', 'market-supply', 'supply-curve', 'cost-of-production',
    'substitutes-in-production', 'joint-supply', 'movement-along-supply-curve', 'shift-of-supply-curve',
  ],
  sims: ['econ.supply-shift'],
  questionIds: ['econ-supply-01', 'econ-supply-02', 'econ-supply-03', 'econ-supply-04', 'r06-econ-02'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.2' }],
};

export default topic;
