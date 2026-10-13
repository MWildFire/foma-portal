import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'key-feature-vertical-asymptote',
    tex: 'x=-\\dfrac{d}{c}',
    name: { en: 'Vertical asymptote of a rational function', ru: 'Вертикальная асимптота рациональной функции (Vertical asymptote of a rational function)' },
    meaning: {
      en: 'For f(x) = (ax + b)/(cx + d), the line x = -d/c is a vertical asymptote, unless the numerator is also zero at that x-value.',
      ru: 'Для f(x) = (ax + b)/(cx + d) прямая x = -d/c является вертикальной асимптотой, если в этой точке числитель не равен нулю.',
    },
    when: {
      en: 'The denominator is zero at some x-value, so the function grows without bound near that value.',
      ru: 'Знаменатель обращается в нуль при некотором значении x, и функция неограниченно растёт вблизи этого значения.',
    },
    syllabus: '2.4',
    inBooklet: false,
  },
  {
    id: 'key-feature-horizontal-asymptote',
    tex: 'y=\\dfrac{a}{c}',
    name: { en: 'Horizontal asymptote of a rational function', ru: 'Горизонтальная асимптота рациональной функции (Horizontal asymptote of a rational function)' },
    meaning: {
      en: 'For f(x) = (ax + b)/(cx + d) with c ≠ 0, f(x) approaches a/c as x tends to plus or minus infinity, so y = a/c is a horizontal asymptote.',
      ru: 'Для f(x) = (ax + b)/(cx + d) при c ≠ 0 значение f(x) стремится к a/c, когда x стремится к плюс или минус бесконечности; поэтому y = a/c — горизонтальная асимптота.',
    },
    when: {
      en: 'Describing the long-run behaviour of a rational model, such as the average cost per item as the output grows.',
      ru: 'Описание долгосрочного поведения рациональной модели, например средней стоимости единицы продукции при росте объёма.',
    },
    syllabus: '2.4',
    inBooklet: false,
  },
  {
    id: 'key-feature-intersection-condition',
    tex: 'f(x)=g(x)',
    name: { en: 'Points of intersection of two graphs', ru: 'Точки пересечения двух графиков (Points of intersection of two graphs)' },
    meaning: {
      en: 'The x-coordinates of the intersection points solve f(x) = g(x). The y-coordinate is f(x) at each solution.',
      ru: 'Абсциссы точек пересечения — решения уравнения f(x) = g(x); ордината — значение f(x) в каждом решении.',
    },
    when: {
      en: 'Two models describe the same quantity, for example a cost and a revenue; the intersection gives the break-even point.',
      ru: 'Две модели описывают одну величину, например затраты и выручку; точка пересечения даёт точку безубыточности.',
    },
    syllabus: '2.4',
    inBooklet: false,
  },
];
