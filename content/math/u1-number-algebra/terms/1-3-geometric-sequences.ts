import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.3',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'geometric-sequence',
    term: { en: 'geometric sequence', ru: 'геометрическая последовательность (geometric sequence)' },
    def: {
      en: 'A sequence in which each term is found from the previous one by multiplying by the same non-zero constant $r$. Its terms are $u_1, u_1 r, u_1 r^2, \\dots$',
      ru: 'Последовательность, в которой каждый член получается из предыдущего умножением на одно и то же ненулевое число $r$. Её члены: $u_1, u_1 r, u_1 r^2, \\dots$',
    },
    syllabus: '1.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Multiplying by $r$ is different from adding $d$. The sequence 2, 4, 6, 8 is arithmetic, not geometric.',
      ru: 'Умножение на $r$ отличается от сложения с $d$. Последовательность 2, 4, 6, 8 арифметическая, а не геометрическая.',
    },
  },
  {
    id: 'common-ratio',
    term: { en: 'common ratio', ru: 'знаменатель (common ratio)' },
    def: {
      en: 'The constant $r$ of a geometric sequence, found by dividing any term by the term before it: $r = u_{n+1}/u_n$.',
      ru: 'Постоянное число $r$ геометрической последовательности; его находят делением любого члена на предыдущий: $r = u_{n+1}/u_n$.',
    },
    syllabus: '1.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The ratio is found by division, so it is only defined when the earlier term is not zero. A negative $r$ makes the signs of the terms alternate.',
      ru: 'Число $r$ находят делением, поэтому оно определено, только если предыдущий член не равен нулю. При отрицательном $r$ знаки членов чередуются.',
    },
  },
  {
    id: 'geometric-series',
    term: { en: 'geometric series', ru: 'геометрический ряд (geometric series)' },
    def: {
      en: 'The sum of the terms of a geometric sequence: $S_n = u_1 + u_2 + \\dots + u_n$ is the sum of the first $n$ terms.',
      ru: 'Сумма членов геометрической последовательности: $S_n = u_1 + u_2 + \\dots + u_n$ — сумма первых $n$ членов.',
    },
    syllabus: '1.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The formula with $1 - r$ in the denominator needs $r \\ne 1$. If $r = 1$ all terms are equal, and the sum is $n u_1$.',
      ru: 'Формула с $1 - r$ в знаменателе требует $r \\ne 1$. Если $r = 1$, все члены равны, и сумма равна $n u_1$.',
    },
  },
  {
    id: 'sigma-notation-geometric',
    term: { en: 'sigma notation for a geometric sum', ru: 'обозначение суммы через Σ для геометрической суммы (sigma notation)' },
    def: {
      en: 'The compact form $\\sum_{k=1}^{n} u_1 r^{k-1}$ of a geometric sum, where the index $k$ runs from 1 to $n$ and $u_1 r^{k-1}$ is the $k$th term.',
      ru: 'Краткая запись геометрической суммы $\\sum_{k=1}^{n} u_1 r^{k-1}$, где индекс $k$ идёт от 1 до $n$, а $u_1 r^{k-1}$ — $k$-й член.',
    },
    syllabus: '1.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The power is $r^{k-1}$, not $r^{k}$: the first term is $u_1 r^{0} = u_1$.',
      ru: 'Степень равна $r^{k-1}$, а не $r^{k}$: первый член равен $u_1 r^{0} = u_1$.',
    },
  },
];
