import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-16-euler-first-order',
  subject: 'math',
  code: '5.16',
  title: {
    en: "Euler's method for first-order equations and systems",
    ru: 'Метод Эйлера для уравнений первого порядка и систем',
  },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 76,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: "I can apply Euler's method with step length h to dy/dx = f(x, y) by filling in a table of values",
      ru: 'Могу применить метод Эйлера с шагом h к dy/dx = f(x, y), заполняя таблицу значений',
    },
    {
      en: 'I can say whether an Euler estimate is an overestimate or an underestimate, and how its error changes when h is reduced',
      ru: 'Могу сказать, завышена или занижена оценка Эйлера, и как меняется погрешность при уменьшении h',
    },
    {
      en: 'I can apply Euler’s method to a coupled system dx/dt = f1, dy/dt = f2 that contains t, updating both variables from the start of each step',
      ru: 'Могу применить метод Эйлера к связанной системе dx/dt = f1, dy/dt = f2, содержащей t, обновляя обе переменные по значениям в начале шага',
    },
  ],
  termIds: ['euler-method-first-order', 'euler-step-length-first-order', 'euler-coupled-system'],
  formulaIds: ['euler-step-first-order', 'euler-system-step'],
  sims: ['math.direction-field-lab'],
  questionIds: ['q-5-16-01', 'q-5-16-02', 'q-5-16-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.16',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
