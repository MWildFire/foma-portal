import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-3-geometric-sequences',
  subject: 'math',
  code: '1.3',
  title: { en: 'Geometric sequences and series', ru: 'Геометрические последовательности и ряды (Geometric sequences and series)' },
  papers: ['P1', 'P2', 'P3'],
  order: 3,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can recognise a geometric sequence, find its common ratio r and the nth term u_n = u_1 r^(n − 1)',
      ru: 'Могу распознать геометрическую последовательность, найти её знаменатель r и n-й член u_n = u_1 r^(n − 1)',
    },
    {
      en: 'I can find the sum of the first n terms of a geometric series, including sums written in sigma notation',
      ru: 'Могу найти сумму первых n членов геометрического ряда, в том числе записанную с помощью знака Σ',
    },
    {
      en: 'I can model growth or decay in a context with a geometric sequence and interpret the answer',
      ru: 'Могу описать рост или убывание в реальной ситуации геометрической последовательностью и объяснить ответ',
    },
  ],
  termIds: ['geometric-sequence', 'common-ratio', 'geometric-series', 'sigma-notation-geometric'],
  formulaIds: ['geometric-nth-term', 'geometric-sum', 'geometric-common-ratio'],
  questionIds: ['q-1-3-01', 'q-1-3-02', 'q-1-3-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.3',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
