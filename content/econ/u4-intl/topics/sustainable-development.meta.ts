import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'sustainable-development',
  subject: 'econ',
  code: '4.7',
  title: { en: 'Sustainable development', ru: 'Устойчивое развитие' },
  papers: ['P1', 'P2', 'P3'],
  order: 46,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can define sustainable development and explain its economic, social and environmental dimensions', ru: 'Могу определить устойчивое развитие и объяснить его экономическое, социальное и экологическое измерения' },
    { en: 'I can explain why environmental damage is a market failure and how carbon pricing corrects it', ru: 'Могу объяснить, почему экологический ущерб — провал рынка и как углеродная цена его исправляет' },
    { en: 'I can compare a carbon tax, an emissions trading scheme and subsidies for renewable energy', ru: 'Могу сравнить углеродный налог, систему торговли квотами на выбросы и субсидии на возобновляемую энергию' },
    { en: 'I can evaluate a sustainability policy, including carbon leakage and its equity effects', ru: 'Могу оценить политику устойчивого развития, включая утечку углерода и последствия для справедливости' },
  ],
  termIds: [
    'sustainable-development',
    'natural-capital',
    'intergenerational-equity',
    'carbon-tax',
    'emissions-trading-scheme',
    'renewable-energy-subsidy',
    'carbon-leakage',
    'command-and-control-regulation',
    'externality',
    'tradable-permits',
  ],
  questionIds: [
    'econ-sustainable-development-01',
    'econ-sustainable-development-02',
    'econ-sustainable-development-03',
    'econ-sustainable-development-04',
  ],
  caseIds: ['case-eu-ets'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' }],
};

export default topic;
