import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-3-differentiating-powers',
  subject: 'math',
  code: '5.3',
  title: { en: 'Differentiating power functions', ru: 'Дифференцирование степенных функций (Differentiating power functions)' },
  papers: ['P1', 'P2', 'P3'],
  order: 63,
  minutes: 30,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can differentiate a x^n for any integer n, including negative powers',
      ru: 'Могу дифференцировать a x^n при любом целом n, включая отрицательные степени',
    },
    {
      en: 'I can differentiate a sum of power terms term by term and treat a constant term correctly',
      ru: 'Могу дифференцировать сумму степенных членов почленно и правильно обрабатывать постоянный член',
    },
    {
      en: 'I can evaluate a derivative at a point and use it as the gradient of a curve in a context',
      ru: 'Могу вычислить производную в точке и использовать её как градиент кривой в задаче с контекстом',
    },
  ],
  termIds: ['power-rule-derivative', 'derivative-of-sum-of-terms'],
  formulaIds: ['derivative-power-formula', 'derivative-sum-formula'],
  sims: ['math.tangent-optimisation-lab'],
  questionIds: ['q-5-3-01', 'q-5-3-02', 'q-5-3-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.3',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
