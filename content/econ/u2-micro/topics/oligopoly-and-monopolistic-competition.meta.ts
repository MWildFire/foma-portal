import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'oligopoly-and-monopolistic-competition',
  subject: 'econ',
  code: '2.11',
  title: { en: 'Oligopoly and monopolistic competition', ru: 'Олигополия и монополистическая конкуренция' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 23,
  minutes: 50,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can explain the long-run equilibrium of monopolistic competition, with normal profit and excess capacity', ru: 'Могу объяснить долгосрочное равновесие монополистической конкуренции: нормальную прибыль и избыточные мощности' },
    { en: 'I can explain interdependence, collusion and price leadership in oligopoly', ru: 'Могу объяснить взаимозависимость, сговор и ценовое лидерство в олигополии' },
    { en: 'I can find a dominant strategy and a Nash equilibrium in a payoff matrix', ru: 'Могу найти доминирующую стратегию и равновесие Нэша в матрице выигрышей' },
    { en: 'I can calculate revenue and payoffs for firms, and judge whether a market structure is efficient', ru: 'Могу рассчитать выручку и выигрыши фирм и оценить, эффективна ли структура рынка' },
  ],
  termIds: [
    'monopolistic-competition',
    'product-differentiation',
    'excess-capacity',
    'oligopoly',
    'interdependence',
    'collusion',
    'price-leadership',
    'game-theory',
    'dominant-strategy',
    'nash-equilibrium',
  ],
  sims: ['econ.monopolistic-competition', 'econ.oligopoly-game'],
  caseIds: ['case-opec-2020-cut'],
  questionIds: [
    'econ-oligopoly-and-monopolistic-competition-01',
    'econ-oligopoly-and-monopolistic-competition-02',
    'econ-oligopoly-and-monopolistic-competition-03',
    'econ-oligopoly-and-monopolistic-competition-04',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.11' }],
};

export default topic;
