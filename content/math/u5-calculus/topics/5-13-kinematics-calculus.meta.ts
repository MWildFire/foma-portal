import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-13-kinematics-calculus',
  subject: 'math',
  code: '5.13',
  title: { en: 'Kinematics with calculus', ru: 'Кинематика с дифференцированием и интегрированием' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 73,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can move between displacement, velocity and acceleration by differentiating and integrating in context',
      ru: 'Могу переходить между перемещением, скоростью и ускорением, дифференцируя и интегрируя в контексте',
    },
    {
      en: 'I can use a starting condition such as s(0) or v(0) to find the constant of integration',
      ru: 'Могу использовать начальное условие, например s(0) или v(0), чтобы найти постоянную интегрирования',
    },
    {
      en: 'I can find the times at rest and the distance travelled when the velocity changes sign',
      ru: 'Могу найти моменты покоя и пройденный путь, когда скорость меняет знак',
    },
  ],
  termIds: ['calc-kinematics-displacement', 'calc-kinematics-velocity', 'calc-kinematics-acceleration', 'calc-kinematics-distance'],
  formulaIds: ['calc-kinematics-derivatives', 'calc-kinematics-integrals', 'calc-kinematics-power-integral', 'calc-kinematics-total-distance'],
  questionIds: ['q-5-13-01', 'q-5-13-02', 'q-5-13-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.13',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
