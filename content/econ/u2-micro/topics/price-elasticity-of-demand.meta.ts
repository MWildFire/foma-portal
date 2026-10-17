import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'price-elasticity-of-demand',
  subject: 'econ',
  code: '2.5',
  title: { en: 'Price elasticity of demand', ru: 'Ценовая эластичность спроса' },
  papers: ['P2', 'P3'],
  order: 14,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can calculate percentage changes in price and quantity from a table', ru: 'Могу рассчитать процентные изменения цены и величины спроса по таблице' },
    { en: 'I can calculate PED, state its sign and say whether demand is elastic, inelastic or unit elastic', ru: 'Могу рассчитать PED, назвать его знак и определить, спрос эластичный, неэластичный или с единичной эластичностью' },
    { en: 'I can link PED to what a price change does to total revenue', ru: 'Могу связать PED с тем, как изменение цены влияет на общую выручку' },
    { en: 'I can name the determinants of PED and explain one of them with an example', ru: 'Могу назвать факторы PED и объяснить один из них на примере' },
    { en: 'I can explain what PED means for a firm that sets prices and for a government that taxes goods', ru: 'Могу объяснить, что PED значит для фирмы, которая устанавливает цены, и для государства, которое облагает налогом товары' },
  ],
  termIds: [
    'elasticity',
    'price-elasticity-of-demand',
    'percentage-change',
    'elastic-demand',
    'inelastic-demand',
    'unit-elastic-demand',
    'necessity-good',
    'luxury-good',
    'total-revenue',
  ],
  formulaIds: ['pct-change', 'ped', 'total-revenue'],
  sims: ['econ.ped-linear'],
  questionIds: [
    'econ-price-elasticity-of-demand-01',
    'econ-price-elasticity-of-demand-02',
    'econ-price-elasticity-of-demand-03',
    'econ-price-elasticity-of-demand-04',
    'econ-price-elasticity-of-demand-05',
    'econ-price-elasticity-of-demand-06',
    'econ-price-elasticity-of-demand-07',  'r06-econ-04'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.5' }],
};

export default topic;
