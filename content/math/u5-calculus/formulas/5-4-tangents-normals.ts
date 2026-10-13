import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'gradient-function-power-term',
    tex: '\\dfrac{d}{dx}\\left(a x^{n}\\right)=a n x^{n-1},\\quad n \\text{ an integer}',
    name: { en: 'Gradient function of a power term', ru: 'Функция градиента степенного члена' },
    meaning: {
      en: 'The derivative of a x^n is a n x^(n-1). Substitute x = a to get the gradient of the curve at that point.',
      ru: 'Производная a x^n равна a n x^(n-1). Подставьте x = a, чтобы получить угловой коэффициент кривой в этой точке.',
    },
    when: {
      en: 'Finding the gradient of a polynomial curve at a given point, before writing the tangent or the normal.',
      ru: 'Поиск углового коэффициента многочлена в заданной точке перед записью касательной или нормали.',
    },
    syllabus: '5.4',
    inBooklet: true,
    example: {
      en: 'For f(x) = x^3 - 2x + 1 the gradient function is 3x^2 - 2, so the gradient at x = 2 is 10.',
      ru: 'Для f(x) = x^3 - 2x + 1 функция градиента равна 3x^2 - 2, поэтому угловой коэффициент при x = 2 равен 10.',
    },
  },
  {
    id: 'tangent-equation',
    tex: 'y-f(a)=f^{\\prime}(a)\\,(x-a)',
    name: { en: 'Equation of the tangent at (a, f(a))', ru: 'Уравнение касательной в точке (a, f(a))' },
    meaning: {
      en: 'The line through the point (a, f(a)) whose gradient is the derivative of f at x = a.',
      ru: 'Прямая через точку (a, f(a)), угловой коэффициент которой равен производной f в точке x = a.',
    },
    when: {
      en: 'Any question asking for the tangent to a curve at a given point.',
      ru: 'Любой вопрос о касательной к кривой в заданной точке.',
    },
    syllabus: '5.4',
    inBooklet: false,
  },
  {
    id: 'normal-gradient',
    tex: 'm_{\\text{N}}=-\\dfrac{1}{f^{\\prime}(a)},\\quad f^{\\prime}(a)\\neq 0',
    name: { en: 'Gradient of the normal', ru: 'Угловой коэффициент нормали' },
    meaning: {
      en: 'The normal is perpendicular to the tangent, so the product of the two gradients is -1.',
      ru: 'Нормаль перпендикулярна касательной, поэтому произведение их угловых коэффициентов равно -1.',
    },
    when: {
      en: 'The tangent gradient at the point is not zero. If it is zero, the normal is vertical.',
      ru: 'Угловой коэффициент касательной в точке не равен нулю. Если он равен нулю, нормаль вертикальна.',
    },
    syllabus: '5.4',
    inBooklet: false,
  },
  {
    id: 'normal-equation',
    tex: 'y-f(a)=-\\dfrac{1}{f^{\\prime}(a)}\\,(x-a)',
    name: { en: 'Equation of the normal at (a, f(a))', ru: 'Уравнение нормали в точке (a, f(a))' },
    meaning: {
      en: 'The line through the point (a, f(a)) that is perpendicular to the tangent there.',
      ru: 'Прямая через точку (a, f(a)), перпендикулярная касательной в этой точке.',
    },
    when: {
      en: 'Any question asking for the normal to a curve at a given point.',
      ru: 'Любой вопрос о нормали к кривой в заданной точке.',
    },
    syllabus: '5.4',
    inBooklet: false,
    example: {
      en: 'For f(x) = x^3 - 2x + 1 at x = 2 the normal is y = -0.1x + 5.2.',
      ru: 'Для f(x) = x^3 - 2x + 1 при x = 2 нормаль имеет вид y = -0.1x + 5.2.',
    },
  },
];
