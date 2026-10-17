import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'key-feature-x-intercept',
    term: { en: 'x-intercept (zero)', ru: 'точка пересечения с осью x (x-intercept (zero))' },
    def: {
      en: 'A point where the graph meets the x-axis, including a tangency, so y = 0; its x-coordinate is a zero of the function. When 0 belongs to the domain, the y-intercept point is (0,f(0)).',
      ru: 'Общая точка графика и оси x, включая касание, то есть y = 0; её абсцисса — нуль функции. Если 0 входит в область определения, точка пересечения с осью y равна (0,f(0)).',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.2, p. 163' },
    pitfall: {
      en: 'The x-intercepts come from f(x) = 0. For the y-intercept, evaluate f(0) if defined; this is not solving a new equation for x.',
      ru: 'Точки пересечения с осью x находят из уравнения f(x) = 0. Для пересечения с осью y вычисляют f(0), если оно определено; это подстановка, а не решение нового уравнения относительно x.',
    },
  },
  {
    id: 'key-feature-asymptote',
    term: { en: 'asymptote', ru: 'асимптота (asymptote)' },
    def: {
      en: 'A line that the graph gets closer and closer to, as x tends to a value or to plus or minus infinity. A vertical asymptote x=a requires f(x) to tend to positive or negative infinity from at least one side of a, while a horizontal asymptote y = L means f(x) approaches L as x tends to infinity.',
      ru: 'Прямая, к которой график неограниченно приближается, когда x стремится к некоторому значению или к плюс или минус бесконечности. Вертикальная асимптота x=a означает, что f(x) стремится к плюс или минус бесконечности при приближении к a хотя бы с одной стороны, а горизонтальная асимптота y = L — что f(x) стремится к L при x, стремящемся к бесконечности.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.4, p. 274' },
    pitfall: {
      en: 'A graph can cross a horizontal asymptote. An asymptote describes behaviour near a value or far away, not the whole graph.',
      ru: 'График может пересекать горизонтальную асимптоту. Асимптота описывает поведение вблизи некоторого значения или при очень больших по модулю x, а не весь график.',
    },
  },
  {
    id: 'key-feature-turning-point',
    term: { en: 'maximum or minimum point (turning point)', ru: 'точка максимума или минимума (maximum or minimum point (turning point))' },
    def: {
      en: 'A turning point where the graph changes from rising to falling (a maximum) or from falling to rising (a minimum). A local maximum is the highest point near it, while the greatest value is the highest output on the whole interval, possibly at an included endpoint or plateau without a turn.',
      ru: 'Точка поворота, в которой график меняется с возрастания на убывание (максимум) или с убывания на возрастание (минимум). Локальный максимум — самая высокая точка в своей окрестности, а наибольшее значение — наибольшая ордината на всём промежутке, в том числе на включённом конце или горизонтальном участке без поворота.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.1, p. 234' },
    pitfall: {
      en: 'Follow the quantity requested: a maximum value is a y-value, while the coordinates of a maximum point are (x, y). If only the x-coordinate is requested, give x.',
      ru: 'Следуй вопросу: наибольшее значение — значение y, а координаты точки максимума — (x, y). Если спрашивают только абсциссу, достаточно x.',
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.1, p. 149' },
  },
];
