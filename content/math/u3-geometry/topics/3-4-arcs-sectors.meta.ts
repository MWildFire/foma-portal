import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-4-arcs-sectors',
  subject: 'math',
  code: '3.4',
  title: { en: 'Arcs and sectors of a circle', ru: 'Дуги и сектора окружности' },
  papers: ['P1', 'P2', 'P3'],
  order: 29,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the arc length of a sector from its radius and central angle',
      ru: 'Могу найти длину дуги сектора по его радиусу и центральному углу',
    },
    {
      en: 'I can find the area of a sector, and use the formulas in reverse to find an angle or a radius',
      ru: 'Могу найти площадь сектора и обратными формулами найти угол или радиус',
    },
    {
      en: 'I can work with the angle in degrees or radians, and state units and accuracy in the answer',
      ru: 'Могу работать с углом в градусах или радианах и указывать единицы и точность ответа',
    },
  ],
  termIds: ['arc-of-circle', 'sector-of-circle', 'central-angle'],
  formulaIds: ['arc-length-degrees', 'sector-area-degrees', 'arc-length-radians', 'sector-area-radians'],
  questionIds: ['q-3-4-01', 'q-3-4-02', 'q-3-4-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.4',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
