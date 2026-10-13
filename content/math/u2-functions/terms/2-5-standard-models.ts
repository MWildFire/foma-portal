import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 2.5',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'standard-quadratic-vertex',
    term: { en: 'vertex of a quadratic model', ru: 'вершина квадратичной модели (vertex of a quadratic model)' },
    def: {
      en: 'The turning point of a parabola: in vertex form $y = a(x - h)^2 + k$ it is $(h, k)$, a maximum when $a < 0$ and a minimum when $a > 0$.',
      ru: 'Точка поворота параболы: в виде $y = a(x - h)^2 + k$ это $(h, k)$, максимум при $a < 0$ и минимум при $a > 0$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The axis of symmetry is the vertical line $x = h$, not $y = h$.',
      ru: 'Ось симметрии — вертикальная прямая $x = h$, а не $y = h$.',
    },
  },
  {
    id: 'standard-exponential-asymptote',
    term: { en: 'horizontal asymptote of an exponential model', ru: 'горизонтальная асимптота экспоненциальной модели (horizontal asymptote of an exponential model)' },
    def: {
      en: 'For $y = k \\cdot a^{x} + c$ with $a > 0$ and $a \\neq 1$, the graph approaches the line $y = c$ as $x$ tends to infinity when $0 < a < 1$, and as $x$ tends to minus infinity when $a > 1$.',
      ru: 'Для $y = k \\cdot a^{x} + c$ при $a > 0$ и $a \\neq 1$ график приближается к прямой $y = c$ при $x$, стремящемся к бесконечности, если $0 < a < 1$, и при $x$, стремящемся к минус бесконечности, если $a > 1$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The asymptote is $y = c$, not $y = k$. The $y$-intercept is $k + c$.',
      ru: 'Асимптота равна $y = c$, а не $y = k$. Точка пересечения с осью $y$ равна $k + c$.',
    },
  },
  {
    id: 'standard-direct-inverse-variation',
    term: { en: 'direct and inverse variation', ru: 'прямая и обратная пропорциональность (direct and inverse variation)' },
    def: {
      en: 'Direct variation $y = ax$ and inverse variation $y = a/x$ are power models $y = ax^{n}$ with $n = 1$ and $n = -1$. Doubling $x$ doubles $y$ under direct variation and halves $y$ under inverse variation.',
      ru: 'Прямая пропорциональность $y = ax$ и обратная пропорциональность $y = a/x$ — степенные модели $y = ax^{n}$ при $n = 1$ и $n = -1$. При прямой пропорциональности удвоение $x$ удваивает $y$, а при обратной — уменьшает $y$ вдвое.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'standard-sinusoidal-amplitude',
    term: { en: 'amplitude of a sinusoidal model', ru: 'амплитуда синусоидальной модели (amplitude of a sinusoidal model)' },
    def: {
      en: 'For $y = a\\sin(bx) + d$ or $y = a\\cos(bx) + d$ the amplitude is $|a|$, half the distance between the maximum and minimum values. The midline is $y = d$, and the period is $2\\pi/b$.',
      ru: 'Для $y = a\\sin(bx) + d$ или $y = a\\cos(bx) + d$ амплитуда равна $|a|$ — половине расстояния между наибольшим и наименьшим значениями. Средняя линия — $y = d$, а период равен $2\\pi/b$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The period is $2\\pi/b$, not $b$. The amplitude is $|a|$, not the maximum value.',
      ru: 'Период равен $2\\pi/b$, а не $b$. Амплитуда равна $|a|$, а не наибольшему значению.',
    },
  },
];
