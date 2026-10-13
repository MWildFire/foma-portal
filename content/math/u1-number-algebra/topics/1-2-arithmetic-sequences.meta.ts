import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-2-arithmetic-sequences',
  subject: 'math',
  code: '1.2',
  title: { en: 'Arithmetic sequences and series', ru: 'Арифметические последовательности и ряды (Arithmetic sequences and series)' },
  papers: ['P1', 'P2', 'P3'],
  order: 2,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can find the common difference d and the nth term u_n = u_1 + (n − 1)d of an arithmetic sequence',
      ru: 'Могу найти разность d и n-й член u_n = u_1 + (n − 1)d арифметической последовательности',
    },
    {
      en: 'I can find the sum of the first n terms, including sums written in sigma notation',
      ru: 'Могу найти сумму первых n членов, в том числе записанную с помощью знака Σ',
    },
    {
      en: 'I can use an arithmetic model in context and judge how well it fits data that are not perfectly arithmetic',
      ru: 'Могу применить арифметическую модель к реальной ситуации и оценить, насколько она подходит к данным, которые не идеально арифметические',
    },
  ],
  termIds: ['arithmetic-sequence', 'common-difference', 'arithmetic-series', 'sigma-notation-arithmetic'],
  formulaIds: ['arithmetic-nth-term', 'arithmetic-sum', 'arithmetic-common-difference'],
  questionIds: ['q-1-2-01', 'q-1-2-02', 'q-1-2-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.2',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
