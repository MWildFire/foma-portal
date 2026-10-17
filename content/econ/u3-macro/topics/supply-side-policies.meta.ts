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
    { en: 'I can calculate annual potential output per AED invested and distinguish it from financial return', ru: 'Могу рассчитать годовой потенциальный выпуск на AED вложений и отличить его от финансовой доходности' },
    { en: 'I can evaluate supply-side policies, using time lags, costs and equity', ru: 'Могу оценить меры политики предложения, используя временные лаги, издержки и справедливость распределения' },
    { en: 'I can distinguish the capacity objective from demand effects of spending and tax cuts', ru: 'Могу отличить цель роста потенциала от влияния расходов и снижения налогов на спрос' },
  ],
  termIds: ['economic-infrastructure', 'regulation',
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
  questionIds: ['econ-supply-side-policies-01', 'econ-supply-side-policies-02', 'econ-supply-side-policies-03', 'r06-econ-22', 'r06-econ-23'],
  sources: [
    {kind:'web',title:'Банк России,Доклад о денежно-кредитной политике №1(41),февраль2023 (independent Russian source)',locator:'printed29,PDF33:infrastructure spending and aggregate-demand channel',url:'https://www.cbr.ru/collection/collection/file/43774/2023_01_ddcp.pdf'},
    {kind:'textbook',title:'Tragakes,Economics for the IB Diploma (2020)',locator:'printed413(goals),417(demand/supply overlaps),418(evaluation);PDF431,435,436'},{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' }],
};

export default topic;
