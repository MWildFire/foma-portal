import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'second-derivative-notation',
    tex: 'f\'\'(x)=\\dfrac{d}{dx}\\left(f\'(x)\\right)=\\dfrac{d^{2}y}{dx^{2}}',
    name: { en: 'Second derivative', ru: 'Вторая производная' },
    meaning: {
      en: 'The second derivative is the derivative of f\'(x). When y = f(x) it is written d^2 y / dx^2.',
      ru: 'Вторая производная есть производная от f\'(x). При y = f(x) её записывают как d^2 y / dx^2.',
    },
    when: {
      en: 'Finding how the gradient of a curve changes, or classifying a stationary point.',
      ru: 'Поиск того, как меняется градиент кривой, или классификация стационарной точки.',
    },
    syllabus: '5.10',
    inBooklet: false,
  },
  {
    id: 'second-derivative-test-rule',
    tex: 'f\'(a)=0,\\quad f\'\'(a)>0\\Rightarrow\\text{local minimum},\\quad f\'\'(a)<0\\Rightarrow\\text{local maximum}',
    name: { en: 'Second derivative test', ru: 'Признак второй производной' },
    meaning: {
      en: 'At a stationary point x = a, where f\'(a) = 0, the sign of f\'\'(a) gives the type of point. A zero value gives no conclusion.',
      ru: 'В стационарной точке x = a, где f\'(a) = 0, знак f\'\'(a) задаёт тип точки. Нулевое значение ничего не решает.',
    },
    when: {
      en: 'Deciding whether a stationary point is a local maximum or a local minimum.',
      ru: 'Определение того, является ли стационарная точка локальным максимумом или локальным минимумом.',
    },
    syllabus: '5.10',
    inBooklet: false,
  },
  {
    id: 'second-derivative-power',
    tex: '\\dfrac{d^{2}}{dx^{2}}\\left(x^{n}\\right)=n(n-1)\\,x^{n-2}',
    name: { en: 'Second derivative of a power', ru: 'Вторая производная степенной функции' },
    meaning: {
      en: 'Differentiate a power of x twice: the power falls by two and the coefficient is multiplied by n(n-1).',
      ru: 'Дифференцируйте степень x дважды: показатель уменьшается на два, а коэффициент умножается на n(n-1).',
    },
    when: {
      en: 'Second derivatives of power terms, for example x^4 or x^(-2).',
      ru: 'Вторые производные степенных членов, например x^4 или x^(-2).',
    },
    syllabus: '5.10',
    inBooklet: false,
    example: {
      en: 'For f(x) = x^4, f\'(x) = 4x^3 and f\'\'(x) = 12x^2.',
      ru: 'Для f(x) = x^4 получаем f\'(x) = 4x^3 и f\'\'(x) = 12x^2.',
    },
  },
];
