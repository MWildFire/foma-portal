import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-9-log-laws',
  subject: 'math',
  code: '1.9',
  title: { en: 'Laws of logarithms', ru: 'Законы логарифмов' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 9,
  minutes: 25,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can apply the product, quotient and power laws of logarithms to combine or split them',
      ru: 'Могу применять правила произведения, частного и степени для логарифмов, чтобы объединять или раскладывать их',
    },
    {
      en: 'I can solve a logarithmic equation and reject any root that makes an argument non-positive',
      ru: 'Могу решить логарифмическое уравнение и отбросить корень, при котором аргумент логарифма не положителен',
    },
    {
      en: 'I can find a logarithm from given values of other logarithms, using the laws',
      ru: 'Могу найти логарифм по заданным значениям других логарифмов, используя правила',
    },
  ],
  termIds: ['logarithm-definition', 'log-product-law', 'log-quotient-law', 'log-power-law'],
  formulaIds: ['log-product-rule', 'log-quotient-rule', 'log-power-rule'],
  sims: [],
  questionIds: ['q-1-9-01', 'q-1-9-02', 'q-1-9-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 1.9',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
