import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'trapezoidal-estimate',
    tex: '\\int_{a}^{b} y\\,dx\\approx\\dfrac{h}{2}\\left[y_{0}+2\\left(y_{1}+y_{2}+\\dots+y_{n-1}\\right)+y_{n}\\right],\\quad h=\\dfrac{b-a}{n}',
    name: { en: 'Trapezoidal rule', ru: 'Формула трапеций (Trapezoidal rule)' },
    meaning: {
      en: 'Estimate of the area under y = f(x) from x = a to x = b, using n strips of width h.',
      ru: 'Оценка площади под графиком y = f(x) от x = a до x = b при n полосках ширины h.',
    },
    when: {
      en: 'The integral cannot be found by anti-differentiation, or only a table of values of the curve is given.',
      ru: 'Интеграл нельзя найти интегрированием, или дана только таблица значений функции.',
    },
    syllabus: '5.8',
    inBooklet: false,
  },
  {
    id: 'trapezium-strip-area',
    tex: 'A_{k}=\\dfrac{h}{2}\\left(y_{k-1}+y_{k}\\right)',
    name: { en: 'Area of one strip', ru: 'Площадь одной полоски (Area of one strip)' },
    meaning: {
      en: 'Area of the k-th trapezium: its parallel sides are the ordinates at the two ends of the strip, and its width is h.',
      ru: 'Площадь k-й трапеции: параллельные стороны — ординаты на концах полоски, ширина — h.',
    },
    when: {
      en: 'Finding the area of one strip, before the strip areas are added together.',
      ru: 'Нахождение площади одной полоски до сложения площадей всех полосок.',
    },
    syllabus: '5.8',
    inBooklet: false,
  },
  {
    id: 'trapezoidal-error-formula',
    tex: 'E=T_{n}-\\displaystyle\\int_{a}^{b} f(x)\\,dx',
    name: { en: 'Error of the trapezoidal estimate', ru: 'Погрешность оценки по формуле трапеций (Error of the trapezoidal estimate)' },
    meaning: {
      en: 'The estimate minus the exact value: E > 0 means an overestimate, E < 0 means an underestimate.',
      ru: 'Оценка минус точное значение: E > 0 означает завышенную оценку, E < 0 — заниженную.',
    },
    when: {
      en: 'Comparing the trapezoidal estimate with the exact integral, for example to find the sign of the error.',
      ru: 'Сравнение оценки с точным значением интеграла, например, чтобы найти знак погрешности.',
    },
    syllabus: '5.8',
    inBooklet: false,
    example: {
      en: 'With T = 2.75 and I = 2.667 (to 3 decimal places), E = 0.083 > 0, so the estimate is an overestimate.',
      ru: 'При T = 2,75 и I = 2,667 (с точностью до 3 знаков) E = 0,083 > 0, значит, оценка завышена.',
    },
  },
];
