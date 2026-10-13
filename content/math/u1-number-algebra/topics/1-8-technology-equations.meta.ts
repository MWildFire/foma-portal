import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-8-technology-equations',
  subject: 'math',
  code: '1.8',
  title: { en: 'Solving equations with technology', ru: 'Решение уравнений с помощью технологий (Solving equations with technology)' },
  papers: ['P1', 'P2', 'P3'],
  order: 8,
  minutes: 25,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can set up a system of up to three linear equations from a context and solve it with technology',
      ru: 'Могу составить систему до трёх линейных уравнений по условию задачи и решить её с помощью технологии',
    },
    {
      en: 'I can find the real roots of a polynomial equation with technology and check each root by substitution',
      ru: 'Могу найти действительные корни многочлена с помощью технологии и проверить каждый корень подстановкой',
    },
    {
      en: 'I can recognise a system with no solution and explain what that means in the context',
      ru: 'Могу распознать систему, не имеющую решения, и объяснить, что это значит в контексте задачи',
    },
  ],
  termIds: ['system-linear-equations', 'inconsistent-system', 'polynomial-root'],
  formulaIds: ['linear-system-three-unknowns', 'polynomial-degree-roots', 'quadratic-formula-roots'],
  questionIds: ['q-1-8-01', 'q-1-8-02', 'q-1-8-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.8',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
