import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-13-nonlinear-regression',
  subject: 'math',
  code: '4.13',
  title: { en: 'Non-linear regression and R²', ru: 'Нелинейная регрессия и R²' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 54,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can fit a logarithmic least-squares model with the GDC and interpret its coefficients',
      ru: 'Могу подобрать логарифмическую модель наименьших квадратов на калькуляторе и истолковать её коэффициенты',
    },
    {
      en: 'I can calculate the sum of squared residuals and the coefficient of determination R²',
      ru: 'Могу вычислить сумму квадратов остатков и коэффициент детерминации R²',
    },
    {
      en: 'I can compare two models by how well they fit and explain why extrapolation is less reliable',
      ru: 'Могу сравнить две модели по качеству подгонки и объяснить, почему экстраполяция менее надёжна',
    },
  ],
  termIds: ['least-squares-curve', 'regression-residual', 'coefficient-of-determination'],
  formulaIds: ['sum-squared-residuals', 'coefficient-of-determination-formula', 'logarithmic-regression-model'],
  sims: ['math.regression-lab'],
  questionIds: ['q-4-13-01', 'q-4-13-02', 'q-4-13-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 4.13',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
