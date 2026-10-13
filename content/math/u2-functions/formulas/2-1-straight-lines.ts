import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'line-gradient-two-points',
    tex: 'm=\\dfrac{y_2-y_1}{x_2-x_1},\\quad x_2\\neq x_1',
    name: { en: 'Gradient through two points', ru: 'Угловой коэффициент по двум точкам' },
    meaning: {
      en: 'The gradient m of the line through (x1, y1) and (x2, y2): rise over run.',
      ru: 'Угловой коэффициент m прямой, проходящей через (x1, y1) и (x2, y2): подъём над горизонтальным смещением.',
    },
    when: {
      en: 'The coordinates of two points on a line are known.',
      ru: 'Известны координаты двух точек прямой.',
    },
    syllabus: '2.1',
    inBooklet: false,
    example: {
      en: 'For (-3, 4) and (5, -2): m = (-2 - 4)/(5 - (-3)) = -0.75.',
      ru: 'Для точек (-3, 4) и (5, -2): m = (-2 - 4)/(5 - (-3)) = -0,75.',
    },
  },
  {
    id: 'line-gradient-intercept',
    tex: 'y=mx+c',
    name: { en: 'Gradient–intercept form', ru: 'Уравнение в виде y = mx + c' },
    meaning: {
      en: 'The straight line with gradient m that crosses the y-axis at (0, c).',
      ru: 'Прямая с угловым коэффициентом m, которая пересекает ось y в точке (0, c).',
    },
    when: {
      en: 'The gradient and the y-intercept are known, or are read from an equation.',
      ru: 'Известны угловой коэффициент и пересечение с осью y либо они считываются из уравнения.',
    },
    syllabus: '2.1',
    inBooklet: false,
  },
  {
    id: 'line-point-gradient',
    tex: 'y-y_1=m(x-x_1)',
    name: { en: 'Point–gradient form', ru: 'Уравнение через точку и угловой коэффициент' },
    meaning: {
      en: 'The straight line with gradient m that passes through the point (x1, y1).',
      ru: 'Прямая с угловым коэффициентом m, которая проходит через точку (x1, y1).',
    },
    when: {
      en: 'A point on the line and its gradient are known.',
      ru: 'Известны точка на прямой и её угловой коэффициент.',
    },
    syllabus: '2.1',
    inBooklet: false,
  },
  {
    id: 'line-perpendicular-gradients',
    tex: 'm_1\\times m_2=-1',
    name: { en: 'Perpendicular and parallel lines', ru: 'Перпендикулярные и параллельные прямые' },
    meaning: {
      en: 'Two non-vertical lines are perpendicular exactly when the product of their gradients is -1. Parallel lines have equal gradients, m1 = m2.',
      ru: 'Две невертикальные прямые перпендикулярны тогда и только тогда, когда произведение их угловых коэффициентов равно -1. Параллельные прямые имеют равные угловые коэффициенты, m1 = m2.',
    },
    when: {
      en: 'Finding the gradient or the equation of a line that is perpendicular or parallel to a given line.',
      ru: 'Поиск углового коэффициента или уравнения прямой, перпендикулярной или параллельной данной.',
    },
    syllabus: '2.1',
    inBooklet: false,
    example: {
      en: 'If m1 = 3/4, then the perpendicular gradient is m2 = -4/3.',
      ru: 'Если m1 = 3/4, то перпендикулярный угловой коэффициент равен m2 = -4/3.',
    },
  },
];
