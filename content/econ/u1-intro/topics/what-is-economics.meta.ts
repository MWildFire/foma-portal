import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'what-is-economics',
  subject: 'econ',
  code: '1.1',
  title: { en: 'What is economics?', ru: 'Что такое экономика?' },
  papers: ['P2'],
  order: 1,
  minutes: 25,
  priority: 3,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain scarcity, choice and opportunity cost with a numerical example', ru: 'Могу объяснить ограниченность ресурсов, выбор и альтернативные издержки на числовом примере' },
    { en: 'I can name the four factors of production and give an example of each', ru: 'Могу назвать четыре фактора производства и привести пример каждого' },
    { en: 'I can distinguish needs, wants, economic goods and free goods', ru: 'Могу различать потребности, желания, экономические блага и свободные блага' },
    { en: 'I can draw a production possibility curve and explain efficiency, unemployment and an outward shift', ru: 'Могу нарисовать кривую производственных возможностей и объяснить эффективность, безработицу и сдвиг наружу' },
  ],
  termIds: ['scarcity','choice','opportunity-cost','production-possibility-curve','productive-efficiency'],
  sims: ['econ.ppc'],
  questionIds: ['econ-what-is-economics-01', 'econ-what-is-economics-02', 'econ-what-is-economics-03'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 1.1' }],
};

export default topic;
