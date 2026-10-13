import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'stationary-point-condition',
    tex: 'f\'(x)=0',
    name: { en: 'Stationary point condition', ru: 'Условие стационарной точки' },
    meaning: {
      en: 'At a stationary point the gradient of $f$ is zero, so $f\'(x)=0$ there.',
      ru: 'В стационарной точке градиент функции $f$ равен нулю, то есть $f\'(x)=0$.',
    },
    when: {
      en: 'Finding the $x$-coordinates of the stationary points of a curve $y=f(x)$.',
      ru: 'Поиск $x$-координат стационарных точек кривой $y=f(x)$.',
    },
    syllabus: '5.6',
    inBooklet: false,
  },
  {
    id: 'stationary-power-derivative',
    tex: '\\dfrac{d}{dx}\\left(a x^{n}\\right)=a n x^{n-1}',
    name: { en: 'Derivative of a power term', ru: 'Производная степенного слагаемого' },
    meaning: {
      en: 'For an integer $n$, the derivative of $a x^{n}$ is $a n x^{n-1}$. A polynomial is differentiated term by term.',
      ru: 'Для целого $n$ производная $a x^{n}$ равна $a n x^{n-1}$. Многочлен дифференцируется почленно.',
    },
    when: {
      en: 'Finding the gradient function of a polynomial before solving $f\'(x)=0$.',
      ru: 'Нахождение функции градиента многочлена перед решением $f\'(x)=0$.',
    },
    syllabus: '5.6',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For f(x) = x^3 - 6x^2 + 9x + 1, the gradient is 3x^2 - 12x + 9.',
      ru: 'Для f(x) = x^3 - 6x^2 + 9x + 1 градиент равен 3x^2 - 12x + 9.',
    },
  },
  {
    id: 'stationary-quadratic-roots',
    tex: 'x=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}',
    name: { en: 'Quadratic formula', ru: 'Формула корней квадратного уравнения' },
    meaning: {
      en: 'The two solutions of $ax^{2}+bx+c=0$, where $a \\neq 0$ and $b^{2}-4ac \\geq 0$.',
      ru: 'Два решения уравнения $ax^{2}+bx+c=0$ при $a \\neq 0$ и $b^{2}-4ac \\geq 0$.',
    },
    when: {
      en: 'Solving a quadratic gradient equation $f\'(x)=0$ when its factors are not obvious.',
      ru: 'Решение квадратного уравнения $f\'(x)=0$, когда множители не очевидны.',
    },
    syllabus: '5.6',
    inBooklet: true, // not checked against the IB formula booklet
  },
];
