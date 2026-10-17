import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'log-log-graph',
    term: { en: 'log-log graph', ru: 'двойной логарифмический график (log-log graph)' },
    def: {
      en: 'A graph of $\\log y$ against $\\log x$. For positive a,x,y and one valid log base, a power relationship $y=ax^b$ plots as a straight line with gradient $b$ and vertical intercept $\\log a$.',
      ru: 'График $\\log y$ от $\\log x$. При положительных a,x,y и одном допустимом основании степенная зависимость $y=ax^b$ даёт прямую с угловым коэффициентом $b$ и отрезком $\\log a$ на вертикальной оси.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 325' },
    pitfall: {
      en: 'The intercept is $\\log a$, not $a$. Recover $a$ by undoing the logarithm, for example $a=10^{c}$ for base 10.',
      ru: 'Отрезок равен $\\log a$, а не $a$. Чтобы найти $a$, отмените логарифм, например $a=10^{c}$ при основании 10.',
    },
  },
  {
    id: 'semi-log-graph',
    term: { en: 'semi-log graph', ru: 'полулогарифмический график (semi-log graph)' },
    def: {
      en: 'A graph with one axis on a logarithmic scale. For positive a,b,y, an exponential relationship $y=ab^x$ plots as a straight line when $\\log y$ is plotted against $x$, with gradient $\\log b$.',
      ru: 'График, у которого одна ось логарифмическая. При положительных a,b,y показательная зависимость $y=ab^x$ даёт прямую, если строить $\\log y$ от $x$; её угловой коэффициент равен $\\log b$.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 325' },
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 326' },
  },
  {
    id: 'order-of-magnitude',
    term: { en: 'order of magnitude', ru: 'порядок величины (order of magnitude)' },
    def: {
      en: 'Using the standard-form-exponent convention (not nearest-power rounding), the power of ten describing a positive number: a number between $10^{k}$ and $10^{k+1}$ has order of magnitude $10^{k}$, and its $\\log_{10}$ lies between $k$ and $k+1$.',
      ru: 'При соглашении о показателе стандартной записи (не округлении к ближайшей степени) степень десяти, описывающая положительное число: число между $10^{k}$ и $10^{k+1}$ имеет порядок $10^{k}$, а его $\\log_{10}$ лежит между $k$ и $k+1$.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 9: normalised standard-form definition; exponent convention stated here' },
    pitfall: {
      en: 'The order of magnitude is a whole power of ten, so 3200 has order of magnitude $10^{3}$, even though $\\log_{10} 3200 \\approx 3.5$.',
      ru: 'Порядок величины — целая степень десяти: 3200 имеет порядок $10^{3}$, хотя $\\log_{10} 3200 \\approx 3{,}5$.',
    },
  },
];
