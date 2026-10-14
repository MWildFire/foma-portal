import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 5.15',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'slope-field-dy-dx',
    term: { en: 'slope field', ru: 'поле направлений (slope field)' },
    def: {
      en: 'A diagram of short line segments drawn at grid points, each with the gradient $f(x, y)$ of the solution curves through that point, for the equation $dy/dx = f(x, y)$.',
      ru: 'Рисунок из коротких отрезков в узлах сетки, каждый с наклоном $f(x, y)$ кривых решений, проходящих через этот узел, для уравнения $dy/dx = f(x, y)$.',
    },
    syllabus: '5.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.5, p. 520' },
    pitfall: {
      en: 'The gradient at $(x, y)$ is $f(x, y)$: substitute x first, then y, in that order.',
      ru: 'Наклон в точке $(x, y)$ равен $f(x, y)$: подставляйте сначала x, затем y.',
    },
    sim: 'math.direction-field-lab',
  },
  {
    id: 'solution-curve-dy-dx',
    term: { en: 'solution curve', ru: 'кривая решения (solution curve)' },
    def: {
      en: 'A curve $y(x)$ whose gradient equals $f(x, y)$ at every point, and which passes through the given starting point. It follows the slope field everywhere.',
      ru: 'Кривая $y(x)$, в каждой точке которой наклон равен $f(x, y)$; она проходит через заданную начальную точку и повсюду следует полю направлений.',
    },
    syllabus: '5.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.5, p. 520' },
  },
  {
    id: 'isocline-fxy-k',
    term: { en: 'isocline', ru: 'изоклина (isocline)' },
    def: {
      en: 'A curve $f(x, y) = k$ on which every segment of the slope field has the same gradient $k$. The isocline $f(x, y) = 0$ carries the horizontal segments.',
      ru: 'Кривая $f(x, y) = k$, на которой все отрезки поля направлений имеют один и тот же наклон $k$. Изоклина $f(x, y) = 0$ содержит горизонтальные отрезки.',
    },
    syllabus: '5.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.5, p. 529' },
  },
  {
    id: 'equilibrium-value-first-order',
    term: { en: 'equilibrium value', ru: 'равновесное значение (equilibrium value)' },
    def: {
      en: 'A value $c$ with $f(x, c) = 0$ for all $x$. Then $y = c$ is a constant solution of $dy/dx = f(x, y)$.',
      ru: 'Значение $c$, для которого $f(x, c) = 0$ при всех $x$. Тогда $y = c$ — постоянное решение уравнения $dy/dx = f(x, y)$.',
    },
    syllabus: '5.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A zero gradient at a single point does not make an equilibrium. The gradient must be zero along the whole horizontal line $y = c$.',
      ru: 'Нулевой наклон в одной точке не делает значение равновесным: наклон должен равняться нулю на всей горизонтальной линии $y = c$.',
    },
  },
];
