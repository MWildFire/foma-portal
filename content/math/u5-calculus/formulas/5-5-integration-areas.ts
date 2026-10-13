import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'integral-power-term',
    tex: '\\int x^{n}\\,dx=\\dfrac{x^{n+1}}{n+1}+C,\\quad n \\text{ an integer},\\ n\\neq -1',
    name: { en: 'Integral of a power of x', ru: 'Интеграл степенной функции x^n (Integral of a power of x)' },
    meaning: {
      en: 'The anti-derivative of x^n: raise the power by one, divide by the new power and add the constant C.',
      ru: 'Первообразная x^n: повысьте степень на единицу, разделите на новую степень и добавьте постоянную C.',
    },
    when: {
      en: 'Integrating a polynomial term by term, for an integer n that is not -1.',
      ru: 'Почленное интегрирование многочлена при целом n, не равном -1.',
    },
    syllabus: '5.5',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'The integral of 3x^2 is x^3 + C.',
      ru: 'Интеграл от 3x^2 равен x^3 + C.',
    },
  },
  {
    id: 'definite-integral-evaluation',
    tex: '\\int_{a}^{b} f(x)\\,dx=F(b)-F(a)',
    name: { en: 'Definite integral from an anti-derivative', ru: 'Определённый интеграл через первообразную (Definite integral from an anti-derivative)' },
    meaning: {
      en: 'F is any anti-derivative of f. The constant C cancels in F(b) - F(a), so it does not change the value.',
      ru: 'F — любая первообразная f. Постоянная C сокращается в разности F(b) - F(a), поэтому значение не меняется.',
    },
    when: {
      en: 'Evaluating a definite integral with limits a and b by hand, or checking a GDC result.',
      ru: 'Вычисление определённого интеграла с пределами a и b вручную или проверка результата калькулятора.',
    },
    syllabus: '5.5',
    inBooklet: false,
  },
  {
    id: 'area-integral-x-axis',
    tex: 'A=\\int_{a}^{b} f(x)\\,dx,\\quad f(x)>0 \\text{ on } [a,b]',
    name: { en: 'Area between a curve and the x-axis', ru: 'Площадь между кривой и осью x (Area between a curve and the x-axis)' },
    meaning: {
      en: 'The area enclosed by y = f(x), the x-axis and the lines x = a and x = b, when the curve is above the x-axis on [a, b].',
      ru: 'Площадь, ограниченная кривой y = f(x), осью x и прямыми x = a и x = b, если кривая лежит над осью x на отрезке [a, b].',
    },
    when: {
      en: 'The region is bounded by a curve above the x-axis and by two vertical lines.',
      ru: 'Область ограничена кривой над осью x и двумя вертикальными прямыми.',
    },
    syllabus: '5.5',
    inBooklet: true, // not checked against the IB formula booklet
  },
  {
    id: 'constant-from-boundary',
    tex: 'C=y_{0}-F(x_{0})',
    name: { en: 'Constant of integration from a boundary condition', ru: 'Постоянная интегрирования по граничному условию (Constant of integration from a boundary condition)' },
    meaning: {
      en: 'If the curve y = F(x) + C passes through (x0, y0), then C = y0 - F(x0).',
      ru: 'Если кривая y = F(x) + C проходит через точку (x0, y0), то C = y0 - F(x0).',
    },
    when: {
      en: 'The question gives a point on the curve, for example the value of the curve at a given x.',
      ru: 'В задаче дана точка кривой, например значение кривой при заданном x.',
    },
    syllabus: '5.5',
    inBooklet: false,
  },
];
