import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'competitive-market-equilibrium',
  subject: 'econ',
  code: '2.3',
  title: { en: 'Competitive market equilibrium', ru: 'Равновесие на конкурентном рынке' },
  papers: ['P1', 'P2', 'P3'],
  order: 12,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can find the equilibrium price and quantity from linear demand and supply equations', ru: 'Могу найти равновесную цену и количество по линейным уравнениям спроса и предложения' },
    { en: 'I can explain excess demand, excess supply and how the price mechanism restores equilibrium', ru: 'Могу объяснить избыточный спрос, избыточное предложение и то, как ценовой механизм возвращает рынок к равновесию' },
    { en: 'I can show how shifts of demand and supply change the equilibrium price and quantity', ru: 'Могу показать, как сдвиги спроса и предложения меняют равновесную цену и количество' },
    { en: 'I can calculate consumer and producer surplus as triangles', ru: 'Могу рассчитать излишек потребителя и излишек производителя как площади треугольников' },
    { en: 'I can explain short-run supernormal profit and long-run normal profit in perfect competition', ru: 'Могу объяснить сверхнормальную прибыль в краткосрочном периоде и нормальную прибыль в долгосрочном периоде при совершенной конкуренции' },
  ],
  termIds: [
    'market-equilibrium', 'excess-demand', 'excess-supply', 'price-mechanism', 'consumer-surplus',
    'producer-surplus', 'perfect-competition', 'price-taker', 'supernormal-profit', 'normal-profit',
  ],
  formulaIds: ['linear-equilibrium', 'triangle-area'],
  sims: ['econ.equilibrium', 'econ.surplus', 'econ.perfect-competition-sr', 'econ.perfect-competition-lr'],
  questionIds: [
    'econ-competitive-market-equilibrium-01', 'econ-competitive-market-equilibrium-02',
    'econ-competitive-market-equilibrium-03', 'econ-competitive-market-equilibrium-04',
    'econ-competitive-market-equilibrium-05', 'econ-competitive-market-equilibrium-06',
  ],
  caseIds: ['case-opec-2020-cut'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.3' }],
};

export default topic;
