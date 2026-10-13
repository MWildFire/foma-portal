import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'supply-side-policies',
  subject: 'econ',
  code: '3.7',
  title: { en: 'Supply-side policies', ru: 'Политика предложения (supply-side policies)' },
  papers: ['P1', 'P2', 'P3'],
  order: 37,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can distinguish market-based and interventionist supply-side policies, with one example each', ru: 'Могу различать рыночные и интервенционистские меры политики предложения, приводя по одному примеру каждого вида' },
    { en: 'I can explain how a supply-side policy shifts long-run aggregate supply to the right', ru: 'Могу объяснить, как мера политики предложения сдвигает долгосрочное совокупное предложение вправо' },
    { en: 'I can calculate the return on an infrastructure or training investment per AED invested', ru: 'Могу рассчитать отдачу от инвестиций в инфраструктуру или обучение на каждый AED инвестиций' },
    { en: 'I can evaluate supply-side policies, using time lags, costs and equity', ru: 'Могу оценить меры политики предложения, используя временные лаги, издержки и равенство' },
    { en: 'I can explain why supply-side policies do not solve a recession caused by low demand on their own', ru: 'Могу объяснить, почему меры политики предложения сами по себе не решают рецессию, вызванную низким спросом' },
  ],
  termIds: [
    'supply-side-policies',
    'market-based-supply-side-policies',
    'interventionist-supply-side-policies',
    'deregulation',
    'privatisation',
    'labour-market-flexibility',
    'industrial-policy',
    'human-capital',
    'trade-liberalisation',
    'long-run-aggregate-supply',
  ],
  sims: ['econ.supply-side'],
  questionIds: ['econ-supply-side-policies-01', 'econ-supply-side-policies-02', 'econ-supply-side-policies-03'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' }],
};

export default topic;
