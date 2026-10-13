import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-7-optimisation',
  subject: 'math',
  code: '5.7',
  title: { en: 'Optimisation in context', ru: 'Оптимизация в прикладных задачах (Optimisation in context)' },
  papers: ['P1', 'P2', 'P3'],
  order: 67,
  minutes: 40,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can turn a practical problem into one function of one variable and state its domain',
      ru: 'Могу превратить практическую задачу в функцию одной переменной и указать её область определения',
    },
    {
      en: 'I can find a maximum or minimum by solving the gradient equation and checking the sign change',
      ru: 'Могу найти максимум или минимум, решив уравнение для градиента и проверив смену знака',
    },
    {
      en: 'I can justify that a value is a maximum or a minimum and answer in context, with units',
      ru: 'Могу обосновать, что значение является максимумом или минимумом, и дать ответ в контексте, с единицами измерения',
    },
  ],
  termIds: ['optimisation-in-context', 'objective-function', 'optimisation-constraint', 'feasible-domain'],
  formulaIds: ['optimisation-power-derivative', 'open-box-volume', 'average-cost-function', 'wall-enclosure-area'],
  questionIds: ['q-5-7-01', 'q-5-7-02', 'q-5-7-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.7',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
