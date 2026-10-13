import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-11-infinite-geometric',
  subject: 'math',
  code: '1.11',
  title: { en: 'Sum of an infinite geometric sequence', ru: 'Сумма бесконечной геометрической прогрессии (Sum of an infinite geometric sequence)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 11,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can test whether |r| < 1, so that the sum to infinity exists',
      ru: 'Могу проверить условие |r| < 1, при котором сумма бесконечной прогрессии существует',
    },
    {
      en: 'I can use S∞ = u1/(1 − r) to find the sum of an infinite geometric series, including recurring decimals',
      ru: 'Могу применять формулу S∞ = u1/(1 − r) для суммы бесконечного геометрического ряда, включая периодические дроби',
    },
    {
      en: 'I can model repeated processes, such as bounces, and find how many terms bring the sum close to its limit',
      ru: 'Могу моделировать повторяющиеся процессы, например отскоки, и находить, сколько членов нужно, чтобы сумма была близка к пределу',
    },
  ],
  termIds: ['sum-to-infinity', 'convergent-geometric-series', 'partial-sum-limit'],
  formulaIds: ['geometric-sum-to-infinity', 'geometric-partial-sum-formula', 'geometric-tail-remainder'],
  sims: [],
  questionIds: ['q-1-11-01', 'q-1-11-02', 'q-1-11-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.11',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
