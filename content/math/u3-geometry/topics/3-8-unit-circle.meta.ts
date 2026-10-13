import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-8-unit-circle',
  subject: 'math',
  code: '3.8',
  title: { en: 'Unit circle and trigonometric equations', ru: 'Единичная окружность и тригонометрические уравнения' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 33,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can place the point (cos θ, sin θ) on the unit circle and give the sign of each ratio by quadrant',
      ru: 'Могу отметить точку (cos θ, sin θ) на единичной окружности и назвать знак каждой величины по четверти',
    },
    {
      en: 'I can use sin²θ + cos²θ = 1 and tan θ = sin θ / cos θ to find a missing ratio',
      ru: 'Могу использовать sin²θ + cos²θ = 1 и tan θ = sin θ / cos θ, чтобы найти недостающую величину',
    },
    {
      en: 'I can solve trigonometric equations in an interval and explain the two triangles of the ambiguous case',
      ru: 'Могу решать тригонометрические уравнения на промежутке и объяснить два треугольника в неоднозначном случае',
    },
  ],
  termIds: ['unit-circle', 'quadrant-sign-rule', 'ambiguous-case-sine-rule'],
  formulaIds: ['unit-circle-point', 'pythagorean-identity', 'tan-identity', 'sine-rule-ambiguous-case'],
  sims: ['math.unit-circle-lab'],
  questionIds: ['q-3-8-01', 'q-3-8-02', 'q-3-8-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.8',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
