import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'slope-field-de',
    tex: '\\dfrac{dy}{dx}=f(x,y)',
    name: { en: 'First-order differential equation', ru: 'Дифференциальное уравнение первого порядка' },
    meaning: {
      en: 'The gradient of the solution curve through the point (x, y) is f(x, y).',
      ru: 'Наклон кривой решения, проходящей через точку (x, y), равен f(x, y).',
    },
    when: {
      en: 'Drawing a slope field, or checking whether a curve follows the field.',
      ru: 'При построении поля направлений или проверке, следует ли кривая полю.',
    },
    syllabus: '5.15',
    inBooklet: false,
    example: {
      en: 'For dy/dx = x - y at the point (0, 1) the gradient is 0 - 1 = -1.',
      ru: 'Для dy/dx = x - y в точке (0, 1) наклон равен 0 - 1 = -1.',
    },
  },
  {
    id: 'isocline-equation',
    tex: 'f(x,y)=k',
    name: { en: 'Isocline', ru: 'Изоклина' },
    meaning: {
      en: 'Every point on this curve has the same gradient k.',
      ru: 'Все точки этой кривой имеют один и тот же наклон k.',
    },
    when: {
      en: 'Sketching a slope field quickly. With k = 0 the segments are horizontal.',
      ru: 'Быстрое построение поля направлений. При k = 0 отрезки горизонтальны.',
    },
    syllabus: '5.15',
    inBooklet: false,
  },
  {
    id: 'tangent-line-at-point',
    tex: 'y-y_0=f(x_0,y_0)\\,(x-x_0)',
    name: { en: 'Tangent to a solution curve', ru: 'Касательная к кривой решения' },
    meaning: {
      en: 'The tangent at the point (x0, y0) of a solution curve has the gradient given by the field at that point.',
      ru: 'Касательная в точке (x0, y0) кривой решения имеет наклон, заданный полем в этой точке.',
    },
    when: {
      en: 'Estimating a solution near a known point. The first step of Euler’s method uses this line.',
      ru: 'Оценка решения вблизи известной точки. Первый шаг метода Эйлера использует эту прямую.',
    },
    syllabus: '5.15',
    inBooklet: false,
  },
];
