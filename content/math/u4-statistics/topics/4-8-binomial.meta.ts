import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-8-binomial',
  subject: 'math',
  code: '4.8',
  title: { en: 'Binomial distribution', ru: 'Биномиальное распределение (Binomial distribution)' },
  papers: ['P1', 'P2', 'P3'],
  order: 49,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can check the conditions for a binomial model and name n and p for a situation',
      ru: 'Могу проверить условия биномиальной модели и назвать n и p для ситуации',
    },
    {
      en: 'I can calculate P(X = r) and cumulative probabilities by the formula and on the GDC',
      ru: 'Могу вычислить P(X = r) и накопленные вероятности по формуле и на калькуляторе',
    },
    {
      en: 'I can find the mean np and the variance np(1 − p) and interpret them in context',
      ru: 'Могу найти среднее np и дисперсию np(1 − p) и объяснить их смысл в контексте',
    },
  ],
  termIds: ['binomial-distribution', 'binomial-conditions', 'binomial-cumulative-probability'],
  formulaIds: ['binomial-pmf', 'binomial-mean-variance', 'binomial-tail-complement'],
  sims: ['math.binomial-poisson-lab'],
  questionIds: ['q-4-8-01', 'q-4-8-02', 'q-4-8-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.8',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
