import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-7-radians',
  subject: 'math',
  code: '3.7',
  title: { en: 'Radians', ru: 'Радианы (Radians)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 32,
  minutes: 25,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can define a radian as the angle at the centre subtended by an arc equal in length to the radius',
      ru: 'Могу определить радиан как центральный угол, который опирается на дугу, равную радиусу',
    },
    {
      en: 'I can convert between degrees and radians, exactly in terms of pi and to a decimal value',
      ru: 'Могу переводить градусы в радианы и обратно: точно, через π, и в десятичном виде',
    },
    {
      en: 'I can find the arc length and the area of a sector when the angle is given in radians',
      ru: 'Могу найти длину дуги и площадь сектора, когда угол задан в радианах',
    },
  ],
  termIds: ['radian-measure', 'arc-length-in-radians', 'sector-area-in-radians'],
  formulaIds: ['radian-degree-conversion', 'radian-arc-length', 'radian-sector-area'],
  sims: ['math.unit-circle-lab'],
  questionIds: ['q-3-7-01', 'q-3-7-02', 'q-3-7-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.7',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
