import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'derivative-limit-definition',
    tex: "f'(x)=\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}",
    name: { en: 'Derivative as a limit', ru: 'Производная как предел' },
    meaning: {
      en: 'The gradient function is the limit of the gradient of the chord from x to x + h as h tends to zero.',
      ru: 'Функция градиента есть предел градиента хорды от x до x + h при стремлении h к нулю.',
    },
    when: {
      en: 'Finding a derivative from first principles, or explaining what a derivative means.',
      ru: 'Нахождение производной по определению или объяснение её смысла.',
    },
    syllabus: '5.1',
    inBooklet: false,
  },
  {
    id: 'chord-gradient',
    tex: '\\dfrac{f(x+h)-f(x)}{h}',
    name: { en: 'Gradient of a chord', ru: 'Градиент хорды' },
    meaning: {
      en: 'The average rate of change of f between x and x + h. It equals the gradient of the line joining the two points on the curve.',
      ru: 'Средняя скорость изменения f между x и x + h. Равна градиенту прямой, соединяющей две точки кривой.',
    },
    when: {
      en: 'Estimating the gradient of a curve numerically, by making h smaller and smaller.',
      ru: 'Численная оценка градиента кривой при уменьшении h.',
    },
    syllabus: '5.1',
    inBooklet: false,
    example: {
      en: 'For f(x) = x^3 - 6x^2 + 9x + 1 with x = 1 and h = 0.1: (4.971 - 5) / 0.1 = -0.29.',
      ru: 'Для f(x) = x^3 - 6x^2 + 9x + 1 при x = 1 и h = 0,1: (4,971 - 5) / 0,1 = -0,29.',
    },
  },
];
