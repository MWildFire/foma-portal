import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-2-functions-inverse',
  subject: 'math',
  code: '2.2',
  title: { en: 'Functions and inverse functions', ru: 'Функции и обратные функции (Functions and inverse functions)' },
  papers: ['P1', 'P2', 'P3'],
  order: 17,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can state the domain and range of a function and evaluate f(x), v(t) or C(n) in context',
      ru: 'Могу назвать область определения и область значений функции и вычислять f(x), v(t) или C(n) в контексте',
    },
    {
      en: 'I can find an inverse function f⁻¹ by swapping x and y and solving for y, and check it',
      ru: 'Могу найти обратную функцию f⁻¹, поменяв местами x и y и выразив y, и проверить результат',
    },
    {
      en: 'I can explain the inverse as a reflection in y = x and limit my answer to the context',
      ru: 'Могу объяснить обратную функцию как отражение в прямой y = x и ограничить ответ условиями задачи',
    },
  ],
  termIds: ['function-single-output', 'domain-and-range-of-function', 'inverse-function-reflection'],
  formulaIds: ['inverse-composition-identity', 'inverse-linear-function', 'inverse-exponential-log'],
  questionIds: ['q-2-2-01', 'q-2-2-02', 'q-2-2-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.2',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
