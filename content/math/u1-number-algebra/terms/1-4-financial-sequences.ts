import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 1.4',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'compound-interest',
    term: { en: 'compound interest', ru: 'сложные проценты (compound interest)' },
    def: {
      en: 'Interest that is added to the balance at the end of each period, so that later interest is earned on earlier interest too. The balance is multiplied by the same growth factor in every period.',
      ru: 'Проценты, которые добавляются к остатку в конце каждого периода, поэтому позже проценты начисляются и на уже начисленные проценты. Остаток умножается на один и тот же множитель роста в каждом периоде.',
    },
    syllabus: '1.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The growth factor is $1 + \\frac{r}{100k}$, not $\\frac{r}{100k}$: the original amount is kept as well as the interest.',
      ru: 'Множитель роста равен $1 + \\frac{r}{100k}$, а не $\\frac{r}{100k}$: исходная сумма сохраняется вместе с процентами.',
    },
    sim: 'math.tvm-lab',
  },
  {
    id: 'compounding-period',
    term: { en: 'compounding period', ru: 'период начисления (compounding period)' },
    def: {
      en: 'The equal time interval after which interest is added to the balance. If interest is added $k$ times a year, the rate for each period is the annual rate divided by $k$, and there are $kn$ periods in $n$ years.',
      ru: 'Равный промежуток времени, после которого проценты добавляются к остатку. Если проценты начисляются $k$ раз в год, ставка за период равна годовой ставке, делённой на $k$, а за $n$ лет будет $kn$ периодов.',
    },
    syllabus: '1.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'reducing-balance-depreciation',
    term: { en: 'reducing-balance depreciation', ru: 'амортизация по остаточной стоимости (reducing-balance depreciation)' },
    def: {
      en: 'A fixed percentage of the value at the start of each year is lost. The value after each year is found by multiplying by the same factor, so the yearly values form a geometric sequence.',
      ru: 'Каждый год теряется фиксированный процент от стоимости на начало года. Стоимость после каждого года получается умножением на один и тот же множитель, поэтому годовые значения образуют геометрическую последовательность.',
    },
    syllabus: '1.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The loss is a percentage of a shrinking value, so the amount lost each year gets smaller. It is not a fixed amount each year.',
      ru: 'Потеря — это процент от уменьшающейся стоимости, поэтому сумма потери каждый год становится меньше. Это не фиксированная сумма в год.',
    },
  },
];
