import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.1, p. 234' },
    pitfall: {
      en: 'The axis of symmetry is the vertical line $x = h$, not $y = h$.',
      ru: 'Ось симметрии — вертикальная прямая $x = h$, а не $y = h$.',
    },
  },
  {
    id: 'standard-exponential-asymptote',
    term: { en: 'horizontal asymptote of an exponential model', ru: 'горизонтальная асимптота экспоненциальной модели (horizontal asymptote of an exponential model)' },
    def: {
      en: 'For $y = k \\cdot a^{x} + c$ with $a > 0$, $a \\neq 1$ and $k \\neq 0$, the graph approaches the line $y = c$ as $x$ tends to infinity when $0 < a < 1$, and as $x$ tends to minus infinity when $a > 1$.',
      ru: 'Для $y = k \\cdot a^{x} + c$ при $a > 0$, $a \\neq 1$ и $k \\neq 0$ график приближается к прямой $y = c$ при $x$, стремящемся к бесконечности, если $0 < a < 1$, и при $x$, стремящемся к минус бесконечности, если $a > 1$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.3, p. 312' },
    pitfall: {
      en: 'The asymptote is $y = c$, not $y = k$. The $y$-intercept is $k + c$.',
      ru: 'Асимптота равна $y = c$, а не $y = k$. Ордината пересечения с осью y равна $k+c$.',
    },
  },
  {
    id: 'standard-direct-inverse-variation',
    term: { en: 'direct and inverse variation', ru: 'прямая и обратная пропорциональность (direct and inverse variation)' },
    def: {
      en: 'A power law $y = ax^{n}$, with constants $a$ and $n$, expresses proportionality of $y$ to $x^n$ where defined; direct variation between $y$ and $x$ specifically means $n=1$, and $y = ax$ is the case $n = 1$. If $y$ varies inversely with $x$ for $x > 0$, then $y = \\dfrac{k}{x}$.',
      ru: 'Степенная зависимость $y = ax^{n}$ с постоянными $a$ и $n$ выражает пропорциональность $y$ величине $x^n$ там, где она определена; прямая пропорциональность между $y$ и $x$ соответствует именно $n=1$, а при $n = 1$ получаем $y = ax$. Если $y$ обратно пропорционален $x$ при $x > 0$, то $y = \\dfrac{k}{x}$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.4, p. 271' },
  },
  {
    id: 'standard-sinusoidal-amplitude',
    term: { en: 'amplitude of a sinusoidal model', ru: 'амплитуда синусоидальной модели (amplitude of a sinusoidal model)' },
    def: {
      en: 'For $a\\neq0$, $b\\neq0$ and radian input in $y=a\\sin(bx)+d$ or $y=a\\cos(bx)+d$ the amplitude is $|a|$, half the distance between the maximum and minimum values. The midline is $y = d$, and the period is $2\\pi/|b|$.',
      ru: 'При $a\\neq0$, $b\\neq0$ и аргументе в радианах для $y=a\\sin(bx)+d$ или $y=a\\cos(bx)+d$ амплитуда равна $|a|$ — половине расстояния между наибольшим и наименьшим значениями. Средняя линия — $y = d$, а период равен $2\\pi/|b|$.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.2, p. 347' },
    pitfall: {
      en: 'The period is $2\\pi/|b|$, not $b$. The amplitude is $|a|$, not the maximum value.',
      ru: 'Период равен $2\\pi/|b|$, а не $b$. Амплитуда равна $|a|$, а не наибольшему значению.',
    },
  },
];
