import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'trade-protection',
  subject: 'econ',
  code: '4.2',
  title: { en: 'Types of trade protection', ru: 'Виды торговой защиты' },
  papers: ['P2', 'P3'],
  order: 41,
  minutes: 60,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can describe the main types of trade protection and what each is for', ru: 'Могу описать основные виды торговой защиты и их цели' },
    { en: 'I can show how a tariff changes price, quantity, surpluses, government revenue and welfare', ru: 'Могу показать, как тариф меняет цену, объём, излишки, выручку государства и благосостояние' },
    { en: 'I can calculate tariff revenue, deadweight loss, quota rent and the cost of an export subsidy', ru: 'Могу рассчитать выручку от тарифа, потери общества, квотную ренту и стоимость экспортной субсидии' },
    { en: 'I can define dumping precisely and explain why governments respond to it', ru: 'Могу точно определить демпинг и объяснить, почему правительства на него реагируют' },
    { en: 'I can say who gains and who loses from each type of protection', ru: 'Могу сказать, кто выигрывает и кто проигрывает от каждого вида защиты' },
  ],
  termIds: [
    'protectionism',
    'tariff',
    'quota',
    'export-subsidy',
    'dumping',
    'voluntary-export-restraint',
    'administrative-barriers',
    'quota-rent',
    'exchange-controls',
    'deadweight-loss',
  ],
  sims: ['econ.tariff', 'econ.quota', 'econ.export-subsidy'],
  questionIds: [
    'econ-trade-protection-01',
    'econ-trade-protection-02',
    'econ-trade-protection-03',
    'econ-trade-protection-04',
    'econ-trade-protection-05',
    'econ-trade-protection-06',
  ],
  caseIds: ['case-us-steel-tariffs-2018'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.2' }],
};

export default topic;
