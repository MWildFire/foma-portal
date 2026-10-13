import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 2.4',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'key-feature-x-intercept',
    term: { en: 'x-intercept (zero)', ru: 'точка пересечения с осью x (x-intercept)' },
    def: {
      en: 'A point where the graph crosses the x-axis, so y = 0; its x-coordinate is a zero of the function. The y-intercept is f(0), the value at x = 0.',
      ru: 'Точка, в которой график пересекает ось x, то есть y = 0; её абсцисса — нуль функции. Точка пересечения с осью y имеет ординату f(0).',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The x-intercepts come from f(x) = 0. Solving x = 0 gives the y-intercept instead.',
      ru: 'Точки пересечения с осью x находят из уравнения f(x) = 0. Если решать x = 0, получится точка пересечения с осью y.',
    },
  },
  {
    id: 'key-feature-asymptote',
    term: { en: 'asymptote', ru: 'асимптота (asymptote)' },
    def: {
      en: 'A line that the graph gets closer and closer to, as x tends to a value or to plus or minus infinity. A vertical asymptote x = a means f(x) grows without bound as x approaches a, while a horizontal asymptote y = L means f(x) approaches L as x tends to infinity.',
      ru: 'Прямая, к которой график неограниченно приближается, когда x стремится к некоторому значению или к плюс или минус бесконечности. Вертикальная асимптота x = a означает, что f(x) неограниченно растёт при приближении x к a, а горизонтальная асимптота y = L — что f(x) стремится к L при x, стремящемся к бесконечности.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A graph can cross a horizontal asymptote. An asymptote describes behaviour near a value or far away, not the whole graph.',
      ru: 'График может пересекать горизонтальную асимптоту. Асимптота описывает поведение вблизи некоторого значения или при очень больших по модулю x, а не весь график.',
    },
  },
  {
    id: 'key-feature-turning-point',
    term: { en: 'maximum or minimum point (turning point)', ru: 'точка максимума или минимума (turning point)' },
    def: {
      en: 'A point where the graph changes from rising to falling (a maximum) or from falling to rising (a minimum). A local maximum is the highest point near it, while the greatest value is the highest point over the whole interval considered.',
      ru: 'Точка, в которой график меняется с возрастания на убывание (максимум) или с убывания на возрастание (минимум). Локальный максимум — самая высокая точка в своей окрестности, а наибольшее значение — самая высокая точка на всём рассматриваемом промежутке.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A maximum is a value of y, so give both coordinates (x, y), not only the x-value.',
      ru: 'Максимум — это значение y, поэтому записывайте обе координаты (x, y), а не только x.',
    },
  },
  {
    id: 'key-feature-intersection-point',
    term: { en: 'point of intersection', ru: 'точка пересечения графиков (point of intersection)' },
    def: {
      en: 'A point where the graphs of two functions meet. Its x-coordinate solves f(x) = g(x), and its y-coordinate is the common value of the two functions there.',
      ru: 'Точка, в которой графики двух функций пересекаются. Её абсцисса — решение уравнения f(x) = g(x), а ордината — общее значение обеих функций в этой точке.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
