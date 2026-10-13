import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'monopoly-and-natural-monopoly',
  subject: 'econ',
  code: '2.11',
  title: { en: 'Monopoly and natural monopoly', ru: 'Монополия и естественная монополия (natural monopoly)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 22,
  minutes: 50,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can explain why a monopolist sets output where MR = MC and reads the price from demand', ru: 'Могу объяснить, почему монополист выбирает выпуск при MR = MC и берёт цену с кривой спроса' },
    { en: 'I can calculate marginal revenue, profit and total revenue for a monopolist with linear demand', ru: 'Могу рассчитать предельный доход, прибыль и общую выручку монополиста при линейном спросе' },
    { en: 'I can compare monopoly with perfect competition and measure the deadweight loss', ru: 'Могу сравнить монополию с совершенной конкуренцией и измерить чистые потери общества' },
    { en: 'I can explain natural monopoly and evaluate marginal cost and average cost pricing', ru: 'Могу объяснить естественную монополию и оценить ценообразование по предельным и средним издержкам' },
  ],
  termIds: [
    'monopoly',
    'market-power',
    'barriers-to-entry',
    'marginal-revenue',
    'natural-monopoly',
    'economies-of-scale',
    'price-discrimination',
    'x-inefficiency',
    'marginal-cost-pricing',
    'average-cost-pricing',
    'supernormal-profit',
    'perfect-competition',
    'deadweight-loss',
  ],
  formulaIds: ['profit', 'marginal-revenue'],
  sims: ['econ.monopoly', 'econ.natural-monopoly'],
  questionIds: [
    'econ-monopoly-and-natural-monopoly-01',
    'econ-monopoly-and-natural-monopoly-02',
    'econ-monopoly-and-natural-monopoly-03',
    'econ-monopoly-and-natural-monopoly-04',
    'econ-monopoly-and-natural-monopoly-05',
    'econ-monopoly-and-natural-monopoly-06',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.11' }],
};

export default topic;
