import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 2.3',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'graph-points-of-function',
    term: { en: 'graph of a function', ru: 'график функции (graph of a function)' },
    def: {
      en: 'The set of points $(x, f(x))$ in the plane, for $x$ in the domain of $f$. A curve is the graph of a function when each vertical line meets it at most once.',
      ru: 'Множество точек $(x, f(x))$ на плоскости при $x$ из области определения $f$. Кривая является графиком функции, если каждая вертикальная прямая пересекает её не более одного раза.',
    },
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.1, p. 146' },
    pitfall: {
      en: 'Points of the form (f(x), x) are not on the graph of y = f(x). The first coordinate is always the input x.',
      ru: 'Точки вида (f(x), x) не лежат на графике y = f(x): первая координата всегда остаётся входом x.',
    },
  },
  {
    id: 'sketch-key-features',
    term: { en: 'sketch of a graph', ru: 'эскиз графика (sketch of a graph)' },
    def: {
      en: 'A labelled diagram that shows the shape of a graph and its key features, such as intercepts, turning points and the ends of the domain. It need not be drawn to scale unless the question asks for it.',
      ru: 'Подписанный рисунок, показывающий форму графика и его ключевые точки: пересечения с осями, точки максимума и минимума и концы области определения. Не обязан быть в масштабе, если в задании этого не требуют.',
    },
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.1, p. 235' },
    pitfall: {
      en: 'A sketch without labelled key points usually loses the marks for those features, even if the shape is right.',
      ru: 'Эскиз без подписанных ключевых точек обычно теряет баллы за эти точки, даже если форма верна.',
    },
  },
  {
    id: 'translating-graph-vector',
    term: { en: 'translation of a graph', ru: 'сдвиг графика (translation of a graph)' },
    def: {
      en: 'Moving every point $(p, q)$ of $y = f(x)$ to $(p + a, q + b)$ gives the graph of $y = f(x - a) + b$: a shift of $a$ units right and $b$ units up.',
      ru: 'Перенос каждой точки $(p, q)$ графика $y = f(x)$ в точку $(p + a, q + b)$ даёт график $y = f(x - a) + b$: сдвиг на $a$ единиц вправо и на $b$ единиц вверх.',
    },
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 253' },
    pitfall: {
      en: 'The sign inside the bracket works in reverse: $f(x - 2)$ shifts the graph 2 units right, not left.',
      ru: 'Знак внутри скобок работает наоборот: $f(x - 2)$ сдвигает график вправо на 2, а не влево.',
    },
  },
  {
    id: 'graph-sum-difference',
    term: { en: 'graph of a sum or difference of functions', ru: 'график суммы и разности функций (graph of a sum or difference of functions)' },
    def: {
      en: 'The graph of $y = f(x) + g(x)$ is obtained by adding the heights of the graphs of $f$ and $g$ at each $x$; the graph of $y = f(x) - g(x)$ by subtracting them.',
      ru: 'График $y = f(x) + g(x)$ получается сложением высот графиков $f$ и $g$ при каждом $x$; график $y = f(x) - g(x)$ — вычитанием высот.',
    },
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Add the heights (y-values), never the x-values. Where one graph is zero, the combined graph equals the other one.',
      ru: 'Складывайте высоты (значения y), а не значения x. Там, где один из графиков равен нулю, суммарный график совпадает с другим.',
    },
  },
];
