import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-9-extended-models',
  subject: 'math',
  code: '2.9',
  title: { en: 'Extended models', ru: 'Расширенные модели (Extended models)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 24,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can choose a half-life, logistic, sinusoidal, logarithmic or piecewise model from the shape of the data and the context',
      ru: 'Могу выбрать модель периода полураспада, логистическую, синусоидальную, логарифмическую или кусочно заданную по форме данных и контексту',
    },
    {
      en: 'I can find the starting value, the inflection point, the upper limit and the greatest growth rate of a logistic model',
      ru: 'Могу найти начальное значение, точку перегиба, верхний предел и наибольшую скорость роста логистической модели',
    },
    {
      en: 'I can read the amplitude, period and principal axis of a sinusoidal model and check where a piecewise model is continuous',
      ru: 'Могу найти амплитуду, период и ось синусоидальной модели и проверить непрерывность кусочно заданной модели',
    },
  ],
  termIds: ['half-life-model', 'logistic-model', 'carrying-capacity', 'piecewise-model'],
  formulaIds: ['half-life-formula', 'logistic-formula', 'logistic-key-features', 'sinusoid-period'],
  sims: ['math.logistic-loglog-lab'],
  questionIds: ['q-2-9-01', 'q-2-9-02', 'q-2-9-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.9',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
