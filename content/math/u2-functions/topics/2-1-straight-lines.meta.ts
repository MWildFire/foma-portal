import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-1-straight-lines',
  subject: 'math',
  code: '2.1',
  title: { en: 'Straight lines', ru: 'Прямые линии' },
  papers: ['P1', 'P2', 'P3'],
  order: 16,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the gradient of a line from two points or from its equation',
      ru: 'Могу найти угловой коэффициент прямой по двум точкам или по её уравнению',
    },
    {
      en: 'I can write a line in gradient-intercept and point-gradient form, and find its intercepts',
      ru: 'Могу записать прямую в виде y = mx + c и через точку с заданным наклоном, а также найти точки пересечения с осями',
    },
    {
      en: 'I can use m1 × m2 = −1 for perpendicular lines and m1 = m2 for parallel lines',
      ru: 'Могу использовать условие m1 × m2 = −1 для перпендикулярных прямых и m1 = m2 для параллельных',
    },
  ],
  termIds: ['gradient-straight-line', 'gradient-intercept-form', 'perpendicular-lines'],
  formulaIds: ['line-gradient-two-points', 'line-gradient-intercept', 'line-point-gradient', 'line-perpendicular-gradients'],
  questionIds: ['q-2-1-01', 'q-2-1-02', 'q-2-1-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 2.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
