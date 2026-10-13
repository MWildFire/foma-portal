import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-18-euler-second-order',
  subject: 'math',
  code: '5.18',
  title: { en: "Euler's method for second-order equations", ru: 'Метод Эйлера для уравнений второго порядка' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 78,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can rewrite a second-order equation as two first-order equations, using v = dx/dt',
      ru: 'Могу записать уравнение второго порядка как два уравнения первого порядка, введя v = dx/dt',
    },
    {
      en: "I can apply Euler's method to x and dx/dt together, step by step, for a given step length h",
      ru: 'Могу применить метод Эйлера к x и dx/dt вместе, шаг за шагом, при заданной длине шага h',
    },
    {
      en: 'I can explain how the step length h affects accuracy, and compare a result with an exact solution',
      ru: 'Могу объяснить, как длина шага h влияет на точность, и сравнить результат с точным решением',
    },
  ],
  termIds: ['second-order-reduction-system', 'euler-second-order-step', 'step-length-h-second-order'],
  formulaIds: ['second-order-as-system', 'euler-second-order-update', 'euler-energy-growth'],
  questionIds: ['q-5-18-01', 'q-5-18-02', 'q-5-18-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.18',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
