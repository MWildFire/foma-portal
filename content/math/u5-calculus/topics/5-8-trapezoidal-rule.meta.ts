import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-8-trapezoidal-rule',
  subject: 'math',
  code: '5.8',
  title: { en: 'The trapezoidal rule', ru: 'Формула трапеций' },
  papers: ['P1', 'P2', 'P3'],
  order: 68,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can estimate the area under a curve with the trapezoidal rule, from a formula or from a table of values',
      ru: 'Могу оценить площадь под кривой по формуле трапеций, заданной функцией или таблицей значений',
    },
    {
      en: 'I can compare the estimate with the exact integral and state whether it is an overestimate or an underestimate',
      ru: 'Могу сравнить оценку с точным значением интеграла и сказать, завышена она или занижена',
    },
    {
      en: 'I can justify the sign of the error from the second derivative, and explain how more strips improve the estimate',
      ru: 'Могу обосновать знак погрешности по второй производной и объяснить, как больше полосок улучшают оценку',
    },
  ],
  termIds: ['trapezoidal-rule', 'trapezoidal-strip-width', 'trapezoidal-error-sign'],
  formulaIds: ['trapezoidal-estimate', 'trapezium-strip-area', 'trapezoidal-error-formula'],
  sims: ['math.trapezoid-lab'],
  questionIds: ['q-5-8-01', 'q-5-8-02', 'q-5-8-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.8',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
