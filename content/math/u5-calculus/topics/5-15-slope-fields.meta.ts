import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-15-slope-fields',
  subject: 'math',
  code: '5.15',
  title: { en: 'Slope fields', ru: 'Поля направлений (Slope fields)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 75,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can draw a slope field for dy/dx = f(x, y) from the gradients at grid points',
      ru: 'Могу построить поле направлений для dy/dx = f(x, y) по наклонам в узлах сетки',
    },
    {
      en: 'I can sketch a solution curve through a given point by following the field',
      ru: 'Могу построить кривую решения через заданную точку, следуя полю направлений',
    },
    {
      en: 'I can read an equilibrium value and the long-term behaviour of solutions from the field',
      ru: 'Могу найти равновесное значение и долгосрочное поведение решений по полю направлений',
    },
  ],
  termIds: ['slope-field-dy-dx', 'solution-curve-dy-dx', 'isocline-fxy-k', 'equilibrium-value-first-order'],
  formulaIds: ['slope-field-de', 'isocline-equation', 'tangent-line-at-point'],
  sims: ['math.direction-field-lab'],
  questionIds: ['q-5-15-01', 'q-5-15-02', 'q-5-15-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.15',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
