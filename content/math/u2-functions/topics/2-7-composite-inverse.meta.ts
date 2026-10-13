import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-7-composite-inverse',
  subject: 'math',
  code: '2.7',
  title: { en: 'Composite and inverse functions', ru: 'Композиция и обратная функция' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 22,
  minutes: 35,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can evaluate a composite function and say which function is applied first',
      ru: 'Могу вычислять сложную функцию и назвать, какая функция применяется первой',
    },
    {
      en: 'I can find an inverse function, including the domain restriction that makes it exist',
      ru: 'Могу найти обратную функцию, включая ограничение области определения, при котором она существует',
    },
    {
      en: 'I can use an inverse function to solve a composite equation and interpret the answer in context',
      ru: 'Могу использовать обратную функцию, чтобы решить уравнение с композицией, и объяснить ответ в контексте',
    },
  ],
  termIds: ['composite-function-fg', 'inverse-function-one-to-one', 'restricted-domain-inverse'],
  formulaIds: ['composite-function-definition', 'inverse-undo-identities', 'inverse-by-swapping', 'inverse-domain-range-swap'],
  sims: [],
  questionIds: ['q-2-7-01', 'q-2-7-02', 'q-2-7-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 2.7',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
