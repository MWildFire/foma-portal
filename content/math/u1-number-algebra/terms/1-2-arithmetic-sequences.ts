import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 1.2',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'arithmetic-sequence',
    term: { en: 'arithmetic sequence', ru: 'арифметическая последовательность (arithmetic sequence)' },
    def: {
      en: 'A sequence in which each term is found from the previous one by adding the same constant $d$. Its terms are $u_1, u_1 + d, u_1 + 2d, \\dots$',
      ru: 'Последовательность, в которой каждый член получается из предыдущего прибавлением одного и того же постоянного числа $d$. Её члены: $u_1, u_1 + d, u_1 + 2d, \\dots$',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The difference must be the same for every pair of neighbouring terms. Check at least two pairs before you call a sequence arithmetic.',
      ru: 'Разность должна быть одинаковой для каждой пары соседних членов. Проверьте хотя бы две пары, прежде чем называть последовательность арифметической.',
    },
  },
  {
    id: 'common-difference',
    term: { en: 'common difference', ru: 'разность (common difference)' },
    def: {
      en: 'The constant $d$ of an arithmetic sequence, found by subtracting any term from the term that follows it: $d = u_{n+1} - u_n$.',
      ru: 'Постоянное число $d$ арифметической последовательности; его находят как разность следующего члена и предыдущего: $d = u_{n+1} - u_n$.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'arithmetic-series',
    term: { en: 'arithmetic series', ru: 'арифметический ряд (arithmetic series)' },
    def: {
      en: 'The sum of the terms of an arithmetic sequence: $S_n = u_1 + u_2 + \\dots + u_n$ is the sum of the first $n$ terms.',
      ru: 'Сумма членов арифметической последовательности: $S_n = u_1 + u_2 + \\dots + u_n$ — сумма первых $n$ членов.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: '$u_n$ is one term and $S_n$ is the sum of n terms. Do not confuse them, and check which one the question asks for.',
      ru: '$u_n$ — это один член, а $S_n$ — сумма n членов. Не путайте их и проверяйте, что именно спрашивает вопрос.',
    },
  },
  {
    id: 'sigma-notation-arithmetic',
    term: { en: 'sigma notation', ru: 'обозначение суммы через Σ (sigma notation)' },
    def: {
      en: 'The compact way of writing a sum: $\\sum_{k=1}^{n} u_k$ means $u_1 + u_2 + \\dots + u_n$, where the index $k$ takes each whole value from the lower limit 1 to the upper limit $n$.',
      ru: 'Краткая запись суммы: $\\sum_{k=1}^{n} u_k$ означает $u_1 + u_2 + \\dots + u_n$, где индекс $k$ принимает каждое целое значение от нижнего предела 1 до верхнего предела $n$.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Substitute every value of $k$ from the lower to the upper limit and add the results. The top term alone is not the sum.',
      ru: 'Подставьте каждое значение $k$ от нижнего до верхнего предела и сложите результаты. Один последний член — это ещё не сумма.',
    },
  },
];
