import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'critique-maximizing-behaviour',
  subject: 'econ',
  code: '2.4',
  title: { en: 'Critique of maximizing behaviour', ru: 'Критика максимизирующего поведения' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 13,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can state the assumptions of rational, maximizing behaviour for consumers and firms', ru: 'Могу назвать допущения рационального максимизирующего поведения потребителей и фирм' },
    { en: 'I can explain bounded rationality and satisficing with an example', ru: 'Могу объяснить ограниченную рациональность и удовлетворительный выбор на примере' },
    { en: 'I can explain one behavioural bias and how it changes a decision', ru: 'Могу объяснить одно поведенческое искажение и то, как оно меняет решение' },
    { en: 'I can explain why managers may pursue objectives other than profit', ru: 'Могу объяснить, почему менеджеры могут преследовать цели помимо прибыли' },
    { en: 'I can evaluate a nudge or a default option as a policy response', ru: 'Могу оценить подталкивание или вариант по умолчанию как ответ государственной политики' },
  ],
  termIds: [
    'utility-maximization',
    'profit-maximization',
    'bounded-rationality',
    'satisficing',
    'anchoring-bias',
    'loss-aversion',
    'present-bias',
    'managerial-objectives',
    'altruism',
    'nudge',
  ],
  questionIds: [
    'econ-critique-maximizing-behaviour-01',
    'econ-critique-maximizing-behaviour-02',
    'econ-critique-maximizing-behaviour-03',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.4' }],
};

export default topic;
