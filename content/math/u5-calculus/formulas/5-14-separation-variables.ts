import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'de-separated-form',
    tex: 'g(y)\\,dy=f(x)\\,dx\\quad\\Rightarrow\\quad\\int g(y)\\,dy=\\int f(x)\\,dx',
    name: { en: 'Separated form', ru: 'Разделённая форма уравнения (Separated form)' },
    meaning: {
      en: 'Once the variables are separated, each side is integrated with respect to its own variable, and one constant is added.',
      ru: 'После разделения переменных каждая часть интегрируется по своей переменной, и добавляется одна постоянная.',
    },
    when: {
      en: 'For dy/dx = f(x)g(y) with g(y) not zero; check the constant solutions g(y) = 0 separately.',
      ru: 'Для dy/dx = f(x)g(y) при g(y), не равном нулю; постоянные решения g(y) = 0 проверяйте отдельно.',
    },
    syllabus: '5.14',
    inBooklet: false,
  },
  {
    id: 'de-log-integral',
    tex: '\\int\\dfrac{dy}{y}=\\ln|y|+C',
    name: { en: 'Integral of 1 over y', ru: 'Интеграл от 1/y (Integral of 1 over y)' },
    meaning: {
      en: 'Integrating 1 over y gives the natural logarithm of the absolute value of y, plus a constant.',
      ru: 'Интеграл от 1/y даёт натуральный логарифм модуля y плюс постоянную.',
    },
    when: {
      en: 'When the separated equation has 1/y on one side; take exponentials to solve for y.',
      ru: 'Когда в разделённом уравнении слева стоит 1/y; для выражения y берут экспоненту.',
    },
    syllabus: '5.14',
    inBooklet: true,
    example: {
      en: 'dy/y = 2x dx gives ln|y| = x^2 + C, so y = A e^(x^2).',
      ru: 'dy/y = 2x dx даёт ln|y| = x^2 + C, откуда y = A e^(x^2).',
    },
  },
  {
    id: 'de-relaxation-solution',
    tex: 'y=L+(y_{0}-L)\\,e^{-kt}',
    name: { en: 'Solution of a limit or cooling model', ru: 'Решение модели предела или охлаждения (Solution of a limit or cooling model)' },
    meaning: {
      en: 'For dy/dt = -k(y - L) with y(0) = y0, the solution approaches the limit L as t grows.',
      ru: 'Для dy/dt = -k(y - L) при y(0) = y0 решение приближается к пределу L при росте t.',
    },
    when: {
      en: 'Cooling towards room temperature, growth towards a limit, or mixing with fresh water (then L = 0).',
      ru: 'Охлаждение к комнатной температуре, рост к пределу или смешивание с пресной водой (тогда L = 0).',
    },
    syllabus: '5.14',
    inBooklet: false,
    example: {
      en: 'With L = 20, y0 = 90 and k = 0.0693, the value after 10 minutes is 20 + 70 e^(-0.693), which is approximately 55.',
      ru: 'При L = 20, y0 = 90 и k = 0,0693 значение через 10 минут равно 20 + 70 e^(-0,693), то есть примерно 55.',
    },
  },
];
