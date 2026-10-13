import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-6-stationary-points',
  subject: 'math',
  code: '5.6',
  title: { en: 'Stationary points', ru: 'Стационарные точки' },
  papers: ['P1', 'P2', 'P3'],
  order: 66,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the points where the gradient is zero by solving f′(x) = 0',
      ru: 'Могу найти точки, в которых градиент равен нулю, решив уравнение f′(x) = 0',
    },
    {
      en: 'I can say whether a stationary point is a local maximum or a local minimum from the sign of the gradient on each side',
      ru: 'Могу по знаку градиента слева и справа от точки определить, является ли она локальным максимумом или локальным минимумом',
    },
    {
      en: 'I can give the coordinates of a stationary point and answer a question in context, with units',
      ru: 'Могу записать координаты стационарной точки и ответить на вопрос в контексте, с единицами измерения',
    },
  ],
  termIds: ['stationary-point', 'local-maximum-point', 'local-minimum-point', 'first-derivative-sign-test'],
  formulaIds: ['stationary-point-condition', 'stationary-power-derivative', 'stationary-quadratic-roots'],
  questionIds: ['q-5-6-01', 'q-5-6-02', 'q-5-6-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
