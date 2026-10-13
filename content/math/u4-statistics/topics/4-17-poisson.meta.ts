import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-17-poisson',
  subject: 'math',
  code: '4.17',
  title: { en: 'Poisson distribution', ru: 'Распределение Пуассона (Poisson distribution)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 58,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can check that a count can be modelled as Poisson and state its mean for a given interval',
      ru: 'Могу проверить, что подсчёт описывается распределением Пуассона, и указать среднее для интервала',
    },
    {
      en: 'I can calculate P(X = x) and cumulative probabilities by the formula and on the GDC',
      ru: 'Могу вычислить P(X = x) и накопленные вероятности по формуле и на калькуляторе',
    },
    {
      en: 'I can rescale the mean to another interval length and add independent Poisson counts',
      ru: 'Могу пересчитать среднее для другой длины интервала и сложить независимые величины Пуассона',
    },
  ],
  termIds: ['poisson-distribution', 'poisson-parameter', 'independent-poisson-sum'],
  formulaIds: ['poisson-pmf', 'poisson-mean-variance', 'poisson-additive'],
  sims: ['math.binomial-poisson-lab'],
  questionIds: ['q-4-17-01', 'q-4-17-02', 'q-4-17-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.17',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
