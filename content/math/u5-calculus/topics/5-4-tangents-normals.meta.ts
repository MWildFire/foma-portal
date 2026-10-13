import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-4-tangents-normals',
  subject: 'math',
  code: '5.4',
  title: { en: 'Tangents and normals', ru: 'Касательные и нормали' },
  papers: ['P1', 'P2', 'P3'],
  order: 64,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the gradient of a curve at a point and write the equation of the tangent there',
      ru: 'Могу найти угловой коэффициент кривой в точке и записать уравнение касательной в этой точке',
    },
    {
      en: 'I can find the gradient of the normal, which is perpendicular to the tangent, and write its equation',
      ru: 'Могу найти угловой коэффициент нормали, перпендикулярной касательной, и записать её уравнение',
    },
    {
      en: 'I can use tangents and normals to find intercepts, distances and areas in a context',
      ru: 'Могу использовать касательные и нормали, чтобы найти точки пересечения с осями, расстояния и площади в задаче',
    },
  ],
  termIds: ['tangent-to-curve', 'normal-to-curve', 'gradient-of-normal'],
  formulaIds: ['gradient-function-power-term', 'tangent-equation', 'normal-gradient', 'normal-equation'],
  questionIds: ['q-5-4-01', 'q-5-4-02', 'q-5-4-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.4',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
