import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-2-triangles-rules',
  subject: 'math',
  code: '3.2',
  title: { en: 'Triangles: sine and cosine rules, area', ru: 'Треугольники: теоремы синусов и косинусов, площадь' },
  papers: ['P1', 'P2', 'P3'],
  order: 27,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can use SOH CAH TOA to find sides and angles in right-angled triangles',
      ru: 'Могу применять SOH CAH TOA, чтобы найти стороны и углы прямоугольных треугольников',
    },
    {
      en: 'I can use the sine rule and the cosine rule to find unknown sides and angles',
      ru: 'Могу применять теорему синусов и теорему косинусов, чтобы найти неизвестные стороны и углы',
    },
    {
      en: 'I can find the area of a triangle from two sides and the included angle',
      ru: 'Могу найти площадь треугольника по двум сторонам и углу между ними',
    },
  ],
  termIds: ['sine-rule-triangle', 'cosine-rule-triangle', 'included-angle', 'soh-cah-toa'],
  formulaIds: ['triangle-sine-rule', 'triangle-cosine-rule', 'triangle-area-sine', 'soh-cah-toa-ratios'],
  questionIds: ['q-3-2-01', 'q-3-2-02', 'q-3-2-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.2',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
