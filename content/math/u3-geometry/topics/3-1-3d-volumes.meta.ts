import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-1-3d-volumes',
  subject: 'math',
  code: '3.1',
  title: { en: '3D distance, volume and surface area', ru: 'Расстояние в 3D, объём и площадь поверхности (3D distance, volume and surface area)' },
  papers: ['P1', 'P2', 'P3'],
  order: 26,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the distance between two points in 3D and the coordinates of their midpoint',
      ru: 'Могу найти расстояние между двумя точками в 3D и координаты их середины',
    },
    {
      en: 'I can find the volume and surface area of pyramids, cones, spheres and hemispheres, and of their combinations',
      ru: 'Могу найти объём и площадь поверхности пирамид, конусов, шаров и полушаров, а также их комбинаций',
    },
    {
      en: 'I can find the angle between intersecting lines and the angle between a line and a plane',
      ru: 'Могу найти угол между пересекающимися прямыми и угол между прямой и плоскостью',
    },
  ],
  termIds: ['distance-between-points-3d', 'right-pyramid', 'right-cone', 'angle-between-line-and-plane'],
  formulaIds: ['distance-3d-points', 'pyramid-volume', 'cone-volume', 'sphere-volume'],
  questionIds: ['q-3-1-01', 'q-3-1-02', 'q-3-1-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
