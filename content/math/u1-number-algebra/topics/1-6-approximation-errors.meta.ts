import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-6-approximation-errors',
  subject: 'math',
  code: '1.6',
  title: { en: 'Approximation and errors', ru: 'Приближения и погрешности (Approximation and errors)' },
  papers: ['P1', 'P2', 'P3'],
  order: 6,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can round to decimal places and significant figures, and state how many digits of a value are meaningful',
      ru: 'Могу округлять до знаков после запятой и значащих цифр и объяснить, какие цифры значащие',
    },
    {
      en: 'I can find the upper and lower bounds of a rounded measurement, and of a calculation that uses it',
      ru: 'Могу найти верхнюю и нижнюю границы округлённого измерения и результата вычислений с ним',
    },
    {
      en: 'I can calculate a percentage error, and estimate a result by rounding each value to one significant figure',
      ru: 'Могу вычислить процентную погрешность и оценить результат, округлив каждое значение до одной значащей цифры',
    },
  ],
  termIds: ['significant-figures', 'bounds-of-rounded-value', 'percentage-error'],
  formulaIds: ['rounding-bounds', 'percentage-error-formula'],
  questionIds: ['q-1-6-01', 'q-1-6-02', 'q-1-6-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
