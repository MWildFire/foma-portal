import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'income-and-cross-elasticity',
  subject: 'econ',
  code: '2.5',
  title: { en: 'Income and cross elasticity of demand', ru: 'Доходная и перекрёстная эластичность спроса' },
  papers: ['P1', 'P2', 'P3'],
  order: 15,
  minutes: 45,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can calculate YED from income and quantity data and say whether the good is normal or inferior', ru: 'Могу рассчитать YED по данным о доходе и величине спроса и определить, нормальный товар или товар низшей категории' },
    { en: 'I can calculate XED from price data and say whether two goods are substitutes or complements', ru: 'Могу рассчитать XED по данным о ценах и определить, являются ли два товара заменителями или взаимодополняющими' },
    { en: 'I can explain what the size of YED and XED shows about a good and about how close two goods are', ru: 'Могу объяснить, что величина YED и XED показывает о товаре и о том, насколько близки два товара' },
    { en: 'I can explain one use of YED or XED for a firm and one use for a government', ru: 'Могу объяснить одно применение YED или XED для фирмы и одно для государства' },
  ],
  termIds: [
    'income-elasticity-of-demand',
    'cross-price-elasticity-of-demand',
    'normal-good',
    'inferior-good',
    'substitute-goods',
    'complementary-goods',
    'close-substitutes',
    'close-complements',
    'necessity-good',
    'luxury-good',
  ],
  formulaIds: ['yed', 'xed'],
  sims: ['econ.yed', 'econ.xed'],
  questionIds: [
    'econ-income-and-cross-elasticity-01',
    'econ-income-and-cross-elasticity-02',
    'econ-income-and-cross-elasticity-03',
    'econ-income-and-cross-elasticity-04',
    'econ-income-and-cross-elasticity-05',
    'econ-income-and-cross-elasticity-06',
    'econ-income-and-cross-elasticity-07',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.5' }],
};

export default topic;
