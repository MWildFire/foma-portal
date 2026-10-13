import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'second-order-as-system',
    tex: 'v=\\dfrac{dx}{dt},\\qquad \\dfrac{dv}{dt}=\\dfrac{d^{2}x}{dt^{2}}=f(x,v,t)',
    name: { en: 'Second-order equation as a first-order system', ru: 'Уравнение второго порядка как система первого порядка' },
    meaning: {
      en: 'Writing v = dx/dt turns the second-order equation into two first-order equations: dx/dt = v and dv/dt = f(x, v, t).',
      ru: 'Запись v = dx/dt превращает уравнение второго порядка в два уравнения первого порядка: dx/dt = v и dv/dt = f(x, v, t).',
    },
    when: {
      en: 'Any second-order equation for x(t), before Euler\'s method is applied to it.',
      ru: 'Любое уравнение второго порядка для x(t) перед применением метода Эйлера.',
    },
    syllabus: '5.18',
    inBooklet: false,
  },
  {
    id: 'euler-second-order-update',
    tex: 'x_{n+1}=x_{n}+h\\,v_{n},\\qquad v_{n+1}=v_{n}+h\\,f(x_{n},v_{n},t_{n}),\\qquad t_{n+1}=t_{n}+h',
    name: { en: "Euler's update for a second-order equation", ru: 'Шаг Эйлера для уравнения второго порядка' },
    meaning: {
      en: 'x changes by h times v, and v changes by h times f. Both changes use the values at the start of the step, and t moves on by h.',
      ru: 'x меняется на h умножить на v, а v — на h умножить на f. Оба изменения используют значения в начале шага, а t увеличивается на h.',
    },
    when: {
      en: 'Approximating the solution of a second-order equation with a fixed step length h.',
      ru: 'Приближённое решение уравнения второго порядка с постоянной длиной шага h.',
    },
    syllabus: '5.18',
    inBooklet: false,
  },
  {
    id: 'euler-energy-growth',
    tex: 'E_{n+1}=\\left(1+h^{2}\\omega^{2}\\right)E_{n},\\qquad E_{n}=\\omega^{2}x_{n}^{2}+v_{n}^{2}',
    name: { en: 'Energy growth in Euler steps for simple harmonic motion', ru: 'Рост энергии при шагах Эйлера для простого гармонического движения' },
    meaning: {
      en: 'For d²x/dt² = −ω²x, one Euler step multiplies E = ω²x² + v² by 1 + h²ω². The amplitude therefore grows at every step.',
      ru: 'Для d²x/dt² = −ω²x один шаг Эйлера умножает E = ω²x² + v² на 1 + h²ω². Поэтому амплитуда растёт на каждом шаге.',
    },
    when: {
      en: 'Checking how Euler steps behave on oscillations, where the exact energy is constant.',
      ru: 'Проверка поведения шагов Эйлера на колебаниях, где точная энергия постоянна.',
    },
    syllabus: '5.18',
    inBooklet: false,
    example: {
      en: 'With omega = 2 and h = 0.2: 1 + h^2 omega^2 = 1.16, so E is multiplied by 1.16 at each step.',
      ru: 'При omega = 2 и h = 0.2: 1 + h^2 omega^2 = 1.16, поэтому E умножается на 1.16 на каждом шаге.',
    },
  },
];
