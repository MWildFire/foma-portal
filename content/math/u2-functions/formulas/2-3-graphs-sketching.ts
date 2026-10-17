import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'quadratic-vertex-x-coordinate',
    tex: 'x=-\\dfrac{b}{2a},\\quad a\\neq 0',
    name: { en: 'Turning-point x-coordinate of a quadratic', ru: 'Абсцисса вершины квадратичной функции (Turning point of a quadratic)' },
    meaning: {
      en: 'For y = ax^2 + bx + c the turning point has x-coordinate -b/(2a). The parabola is symmetric about this vertical line.',
      ru: 'Для y = ax^2 + bx + c абсцисса вершины равна -b/(2a). Парабола симметрична относительно этой вертикальной прямой.',
    },
    when: {
      en: 'Sketching a parabola, or finding its maximum or minimum point.',
      ru: 'Построение эскиза параболы или поиск точки максимума или минимума.',
    },
    syllabus: '2.3',
    inBooklet: true,
    example: {
      en: 'For y = x^2 - 2x + 2: x = 2/2 = 1, so the minimum point is (1, 1).',
      ru: 'Для y = x^2 - 2x + 2: x = 2/2 = 1, значит, точка минимума равна (1, 1).',
    },
  },
  {
    id: 'graph-sum-function',
    tex: '(f+g)(x)=f(x)+g(x)',
    name: { en: 'Sum of two functions', ru: 'Сумма двух функций (Sum of two functions)' },
    meaning: {
      en: 'The graph of y = (f + g)(x) is found by adding the y-coordinates of f and g at each x in both domains.',
      ru: 'График y = (f + g)(x) строится сложением координат y графиков f и g при каждом x из обеих областей определения.',
    },
    when: {
      en: 'Adding two models, for example a fixed charge plus a variable charge.',
      ru: 'Сложение двух моделей, например постоянной платы и переменной платы.',
    },
    syllabus: '2.3',
    inBooklet: false,
    example: {
      en: 'For f(x) = x and g(x) = 2: (f + g)(3) = 3 + 2 = 5.',
      ru: 'Для f(x) = x и g(x) = 2: (f + g)(3) = 3 + 2 = 5.',
    },
  },
  {
    id: 'graph-difference-function',
    tex: '(f-g)(x)=f(x)-g(x)',
    name: { en: 'Difference of two functions', ru: 'Разность двух функций (Difference of two functions)' },
    meaning: {
      en: 'The graph of y = (f - g)(x) is found by subtracting the y-coordinates of g from those of f at each x in both domains.',
      ru: 'График y = (f - g)(x) строится вычитанием координат y графика g из координат y графика f при каждом x из обеих областей определения.',
    },
    when: {
      en: 'Finding profit as revenue minus cost, or any gap between two graphs.',
      ru: 'Поиск прибыли как выручки минус издержки или любого разрыва между двумя графиками.',
    },
    syllabus: '2.3',
    inBooklet: false,
    example: {
      en: 'For R(x) = 18x and C(x) = 900 + 6x: (R - C)(100) = 1800 - 1500 = 300.',
      ru: 'Для R(x) = 18x и C(x) = 900 + 6x: (R - C)(100) = 1800 - 1500 = 300.',
    },
  },
];
