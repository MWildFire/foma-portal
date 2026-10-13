import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 2.10',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'log-log-graph',
    term: { en: 'log-log graph', ru: 'двойной логарифмический график (log-log graph)' },
    def: {
      en: 'A graph of $\\log y$ against $\\log x$. A power relationship $y=ax^{b}$ plots as a straight line with gradient $b$ and vertical intercept $\\log a$.',
      ru: 'График $\\log y$ от $\\log x$. Степенная зависимость $y=ax^{b}$ даёт прямую с угловым коэффициентом $b$ и отрезком $\\log a$ на вертикальной оси.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The intercept is $\\log a$, not $a$. Recover $a$ by undoing the logarithm, for example $a=10^{c}$ for base 10.',
      ru: 'Отрезок равен $\\log a$, а не $a$. Чтобы найти $a$, отмените логарифм, например $a=10^{c}$ при основании 10.',
    },
  },
  {
    id: 'semi-log-graph',
    term: { en: 'semi-log graph', ru: 'полулогарифмический график (semi-log graph)' },
    def: {
      en: 'A graph with one axis on a logarithmic scale. An exponential relationship $y=ab^{x}$ plots as a straight line when $\\log y$ is plotted against $x$, with gradient $\\log b$.',
      ru: 'График, у которого одна ось логарифмическая. Показательная зависимость $y=ab^{x}$ даёт прямую, если строить $\\log y$ от $x$; её угловой коэффициент равен $\\log b$.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.logistic-loglog-lab',
  },
  {
    id: 'linearisation',
    term: { en: 'linearisation', ru: 'линеаризация (linearisation)' },
    def: {
      en: 'Transforming data, often by taking logarithms, so that a non-linear relationship becomes a straight line. A best-fit line through the transformed points then gives the parameters of the original model.',
      ru: 'Преобразование данных, чаще всего логарифмированием, после которого нелинейная зависимость становится прямой. Прямая наилучшего приближения по преобразованным точкам даёт параметры исходной модели.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'order-of-magnitude',
    term: { en: 'order of magnitude', ru: 'порядок величины (order of magnitude)' },
    def: {
      en: 'The power of ten that describes the size of a number: a number between $10^{k}$ and $10^{k+1}$ has order of magnitude $10^{k}$, and its $\\log_{10}$ lies between $k$ and $k+1$.',
      ru: 'Степень десяти, описывающая размер числа: число между $10^{k}$ и $10^{k+1}$ имеет порядок $10^{k}$, а его $\\log_{10}$ лежит между $k$ и $k+1$.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The order of magnitude is a whole power of ten, so 3200 has order of magnitude $10^{3}$, even though $\\log_{10} 3200 \\approx 3.5$.',
      ru: 'Порядок величины — целая степень десяти: 3200 имеет порядок $10^{3}$, хотя $\\log_{10} 3200 \\approx 3{,}5$.',
    },
  },
];
