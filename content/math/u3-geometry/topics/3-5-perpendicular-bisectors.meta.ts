import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-5-perpendicular-bisectors',
  subject: 'math',
  code: '3.5',
  title: { en: 'Perpendicular bisectors', ru: 'Серединные перпендикуляры (Perpendicular bisectors)' },
  papers: ['P1', 'P2', 'P3'],
  order: 30,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the midpoint of a segment and the gradient of its perpendicular bisector',
      ru: 'Могу найти середину отрезка и угловой коэффициент его серединного перпендикуляра',
    },
    {
      en: 'I can write the equation of a perpendicular bisector, including for horizontal and vertical segments',
      ru: 'Могу записать уравнение серединного перпендикуляра, в том числе для горизонтального и вертикального отрезка',
    },
    {
      en: 'I can find the circumcentre of a triangle as the meeting point of two perpendicular bisectors',
      ru: 'Могу найти центр описанной окружности треугольника как точку пересечения двух серединных перпендикуляров',
    },
  ],
  termIds: ['perpendicular-bisector', 'midpoint-of-segment', 'circumcentre-of-triangle'],
  formulaIds: ['segment-midpoint-formula', 'perpendicular-gradient-formula', 'perpendicular-bisector-equation-formula'],
  questionIds: ['q-3-5-01', 'q-3-5-02', 'q-3-5-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.5',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
