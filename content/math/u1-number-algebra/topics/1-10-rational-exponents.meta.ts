import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-10-rational-exponents',
  subject: 'math',
  code: '1.10',
  title: { en: 'Rational exponents', ru: 'Рациональные показатели степени (Rational exponents)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 10,
  minutes: 30,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can rewrite a root as a power with a fractional exponent, and back, for a positive base',
      ru: 'Могу записать корень в виде степени с дробным показателем и обратно (для положительного основания)',
    },
    {
      en: 'I can evaluate expressions with rational exponents exactly, without relying on rounded decimals',
      ru: 'Могу точно вычислять выражения с рациональными показателями, не опираясь на округлённые десятичные дроби',
    },
    {
      en: 'I can simplify algebraic expressions with rational exponents using the laws of exponents',
      ru: 'Могу упрощать алгебраические выражения с рациональными показателями по законам степеней',
    },
  ],
  termIds: ['rational-exponent', 'exponent-laws-rational', 'odd-root-negative-base'],
  formulaIds: ['rational-power-definition', 'rational-power-laws', 'rational-power-negative'],
  sims: [],
  questionIds: ['q-1-10-01', 'q-1-10-02', 'q-1-10-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.10',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
