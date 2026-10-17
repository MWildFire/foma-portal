import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-5-probability-basics',
  subject: 'math',
  code: '4.5',
  title: { en: 'Probability basics', ru: 'Основы вероятности (Probability basics)' },
  papers: ['P1', 'P2', 'P3'],
  order: 46,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can define a trial, an outcome, the sample space and an event, and check that outcomes are equally likely',
      ru: 'Могу определить испытание, исход, пространство элементарных исходов и событие и проверить, что исходы равновероятны',
    },
    {
      en: 'I can find P(A) = n(A)/n(U) and the probability of the complement, P(A′) = 1 − P(A)',
      ru: 'Могу найти P(A) = n(A)/n(U) и вероятность противоположного события P(A′) = 1 − P(A)',
    },
    {
      en: 'I can find the expected number of occurrences as n × P(A) and explain what it means in context',
      ru: 'Могу найти ожидаемое число появлений как n × P(A) и объяснить его смысл в контексте',
    },
  ],
  termIds: ['sample-space-probability', 'equally-likely-outcomes', 'complementary-event', 'expected-number-of-occurrences'],
  formulaIds: ['classical-probability-formula', 'complementary-probability-formula', 'expected-occurrences-formula'],
  sims: [],
  questionIds: ['q-4-5-01', 'q-4-5-02', 'q-4-5-03', 'r06-probability-diagrams'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.5',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
