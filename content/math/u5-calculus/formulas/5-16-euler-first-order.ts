import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'euler-step-first-order',
    tex: 'y_{n+1}=y_n+h\\,f(x_n,y_n),\\qquad x_{n+1}=x_n+h',
    name: { en: "Euler's step for dy/dx = f(x, y)", ru: 'Шаг метода Эйлера для dy/dx = f(x, y) (Euler\'s step for dy/dx = f(x, y))' },
    meaning: {
      en: 'The next value of y is the current value plus h times the gradient at the start of the step. x increases by h.',
      ru: 'Следующее значение y равно текущему плюс h, умноженное на наклон в начале шага; x увеличивается на h.',
    },
    when: {
      en: 'Each step of Euler’s method for a first-order equation with a fixed step length h.',
      ru: 'Каждый шаг метода Эйлера для уравнения первого порядка при фиксированном шаге h.',
    },
    syllabus: '5.16',
    inBooklet: true,
    example: {
      en: 'With dy/dx = x - y, y(0) = 1 and h = 0.2: y1 = 1 + 0.2 x (0 - 1) = 0.8.',
      ru: 'При dy/dx = x - y, y(0) = 1 и h = 0,2: y1 = 1 + 0,2 × (0 - 1) = 0,8.',
    },
  },
  {
    id: 'euler-system-step',
    tex: 'x_{n+1}=x_n+h\\,f_1(x_n,y_n,t_n),\\quad y_{n+1}=y_n+h\\,f_2(x_n,y_n,t_n),\\quad t_{n+1}=t_n+h',
    name: { en: 'Euler’s step for a coupled system', ru: 'Шаг метода Эйлера для связанной системы (Euler’s step for a coupled system)' },
    meaning: {
      en: 'x, y and the time t all move on by one step, using the values at the start of the step.',
      ru: 'Значения x и y и время t переходят на один шаг, используя значения в начале шага.',
    },
    when: {
      en: 'Numerical solution of dx/dt = f1(x, y, t) and dy/dt = f2(x, y, t).',
      ru: 'Численное решение систем dx/dt = f1(x, y, t) и dy/dt = f2(x, y, t).',
    },
    syllabus: '5.16',
    inBooklet: true,
    example: {
      en: 'With dx/dt = y, dy/dt = t - x, x(0) = 1, y(0) = 0 and h = 0.5: x1 = 1, y1 = -0.5, t1 = 0.5.',
      ru: 'При dx/dt = y, dy/dt = t - x, x(0) = 1, y(0) = 0 и h = 0,5: x1 = 1, y1 = -0,5, t1 = 0,5.',
    },
  },
];
