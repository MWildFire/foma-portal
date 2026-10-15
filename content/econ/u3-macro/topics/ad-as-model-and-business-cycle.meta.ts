import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'ad-as-model-and-business-cycle',
  subject: 'econ',
  code: '3.2',
  title: { en: 'AD/AS model and the business cycle', ru: 'Модель AD/AS и деловой цикл' },
  papers: ['P1', 'P2', 'P3'],
  order: 31,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can state the components of AD and explain why the AD curve slopes downwards', ru: 'Могу назвать компоненты AD и объяснить, почему кривая AD имеет наклон вниз' },
    { en: 'I can explain SRAS and LRAS and the shifts of each curve', ru: 'Могу объяснить SRAS и LRAS и сдвиги каждой кривой' },
    { en: 'I can calculate the output gap and say whether it is inflationary or deflationary', ru: 'Могу рассчитать разрыв выпуска и определить, инфляционный он или дефляционный' },
    { en: 'I can draw an AD/AS diagram with an inflationary or a deflationary gap', ru: 'Могу нарисовать диаграмму AD/AS с инфляционным или дефляционным разрывом' },
    { en: 'I can analyse demand-side and supply-side shocks in the business cycle', ru: 'Могу проанализировать шоки спроса и шоки предложения в деловом цикле' },
  ],
  termIds: ['aggregate-supply', 'trough', 'contraction', 'peak', 'expansion', 
    'aggregate-demand',
    'net-exports',
    'short-run-aggregate-supply',
    'long-run-aggregate-supply',
    'potential-output',
    'macroeconomic-equilibrium',
    'output-gap',
    'inflationary-gap',
    'deflationary-gap',
    'business-cycle',
  ],
  formulaIds: ['output-gap'],
  sims: ['econ.ad-as', 'econ.output-gap'],
  questionIds: [
    'econ-ad-as-model-and-business-cycle-01',
    'econ-ad-as-model-and-business-cycle-02',
    'econ-ad-as-model-and-business-cycle-03',
    'econ-ad-as-model-and-business-cycle-04',
    'econ-ad-as-model-and-business-cycle-05',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' }],
};

export default topic;
