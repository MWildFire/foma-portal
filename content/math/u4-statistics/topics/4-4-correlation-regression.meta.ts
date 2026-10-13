import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-4-correlation-regression',
  subject: 'math',
  code: '4.4',
  title: { en: 'Correlation and linear regression', ru: 'Корреляция и линейная регрессия (Correlation and linear regression)' },
  papers: ['P1', 'P2', 'P3'],
  order: 45,
  minutes: 45,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can calculate Pearson\'s r and describe the strength and direction of a linear relationship',
      ru: 'Могу вычислить коэффициент корреляции Пирсона r и описать силу и направление линейной связи',
    },
    {
      en: 'I can find the regression line of y on x with the GDC and use it to predict y from x',
      ru: 'Могу найти линию регрессии y на x на калькуляторе и предсказать y по x',
    },
    {
      en: 'I can explain what a and b mean in context and say when a prediction is unreliable',
      ru: 'Могу объяснить смысл a и b в контексте и сказать, когда прогноз ненадёжен',
    },
  ],
  termIds: ['pearson-r-coefficient', 'regression-line-y-on-x', 'mean-point-regression'],
  formulaIds: ['pearson-product-moment-r', 'regression-line-slope-intercept', 'regression-line-mean-point'],
  sims: ['math.regression-lab'],
  questionIds: ['q-4-4-01', 'q-4-4-02', 'q-4-4-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.4',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
