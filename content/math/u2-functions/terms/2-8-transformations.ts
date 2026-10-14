import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'function-graph-translation',
    term: { en: 'translation of a graph', ru: 'параллельный перенос графика (translation of a graph)' },
    def: {
      en: 'A transformation that moves every point of a graph by the same amount: $y = f(x - a) + b$ moves the graph $a$ units to the right and $b$ units up.',
      ru: 'Преобразование, которое сдвигает каждую точку графика на одну и ту же величину: $y = f(x - a) + b$ сдвигает график на $a$ единиц вправо и на $b$ единиц вверх.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 253' },
    pitfall: {
      en: 'The direction is easy to reverse: $y = f(x + 2)$ moves the graph 2 units to the left. Factorise the coefficient of $x$ out of the bracket before reading the shift.',
      ru: 'Направление легко перепутать: $y = f(x + 2)$ сдвигает график на 2 единицы влево. Прежде чем читать сдвиг, вынесите коэффициент при $x$ из скобки.',
    },
    sim: 'math.transformations-lab',
  },
  {
    id: 'function-graph-reflection',
    term: { en: 'reflection of a graph', ru: 'отражение графика (reflection of a graph)' },
    def: {
      en: 'A transformation that flips a graph over a line. $y = -f(x)$ reflects the graph in the $x$-axis, so every $y$-value changes sign; $y = f(-x)$ reflects it in the $y$-axis, so every $x$-value changes sign.',
      ru: 'Преобразование, которое отражает график относительно прямой. $y = -f(x)$ отражает график в оси $x$: каждое значение $y$ меняет знак; $y = f(-x)$ отражает его в оси $y$: каждое значение $x$ меняет знак.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 254' },
  },
  {
    id: 'function-graph-stretch',
    term: { en: 'stretch with scale factor', ru: 'растяжение с коэффициентом (stretch with scale factor)' },
    def: {
      en: 'A transformation that multiplies distances from an axis by a fixed factor. $y = p f(x)$ is a vertical stretch by factor $p$, parallel to the $y$-axis. $y = f(qx)$ is a horizontal stretch by factor $\\frac{1}{q}$, parallel to the $x$-axis.',
      ru: 'Преобразование, которое умножает расстояния от оси на постоянный коэффициент. $y = p f(x)$ — вертикальное растяжение с коэффициентом $p$, параллельно оси $y$. $y = f(qx)$ — горизонтальное растяжение с коэффициентом $\\frac{1}{q}$, параллельно оси $x$.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 254' },
    pitfall: {
      en: 'The factor for $f(qx)$ is $\\frac{1}{q}$, not $q$: $f(2x)$ halves every $x$-coordinate, so the graph becomes half as wide.',
      ru: 'Коэффициент для $f(qx)$ равен $\\frac{1}{q}$, а не $q$: $f(2x)$ уменьшает каждую $x$-координату вдвое, и график становится вдвое уже.',
    },
  },
  {
    id: 'function-graph-image-point',
    term: { en: 'image of a point under a transformation', ru: 'образ точки при преобразовании (image of a point under a transformation)' },
    def: {
      en: 'The point to which a point of the original graph is moved. For $y = p f(q(x - a)) + b$, the point $(x, y)$ of $y = f(x)$ maps to $\\left(a + \\frac{x}{q}, py + b\\right)$.',
      ru: 'Точка, в которую переходит точка исходного графика. Для $y = p f(q(x - a)) + b$ точка $(x, y)$ графика $y = f(x)$ переходит в точку $\\left(a + \\frac{x}{q}, py + b\\right)$.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 258' },
    pitfall: {
      en: 'Divide $x$ by $q$ first and then add $a$: the $x$-coordinate is $a + \\frac{x}{q}$, not $\\frac{x + a}{q}$.',
      ru: 'Сначала делите $x$ на $q$, затем прибавляйте $a$: $x$-координата равна $a + \\frac{x}{q}$, а не $\\frac{x + a}{q}$.',
    },
  },
];
