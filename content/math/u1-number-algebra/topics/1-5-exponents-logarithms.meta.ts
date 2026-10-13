import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-5-exponents-logarithms',
  subject: 'math',
  code: '1.5',
  title: { en: 'Laws of exponents; logarithms', ru: 'Законы степеней; логарифмы (Laws of exponents; logarithms)' },
  papers: ['P1', 'P2', 'P3'],
  order: 5,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can apply the laws of integer exponents to simplify and evaluate expressions',
      ru: 'Могу применять законы степеней с целым показателем для упрощения и вычисления выражений',
    },
    {
      en: 'I can explain that a logarithm undoes a power of 10 or of e, and evaluate $\\log_{10}x$ and $\\ln x$ with technology',
      ru: 'Могу объяснить, что логарифм отменяет степень с основанием 10 или e, и вычислять $\\log_{10}x$ и $\\ln x$ с помощью технологии',
    },
    {
      en: 'I can solve $10^{x}=a$ and $e^{x}=b$ for x and give the answer to the required accuracy',
      ru: 'Могу решить $10^{x}=a$ и $e^{x}=b$ относительно x и дать ответ с нужной точностью',
    },
  ],
  termIds: ['exponent-laws-integer', 'logarithm-base-10', 'logarithm-base-e'],
  formulaIds: ['exponent-product-quotient-power', 'exponent-zero-negative', 'log-inverse-10-e'],
  questionIds: ['q-1-5-01', 'q-1-5-02', 'q-1-5-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.5',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
