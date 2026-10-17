import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'compound-interest-periods',
    tex: 'FV=PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}',
    name: { en: 'Compound interest', ru: 'Сложные проценты (Compound interest)' },
    meaning: {
      en: 'The value after $n$ years of a principal $PV$ invested at $r\\%$ a year, with interest added $k$ times a year. Use $k = 1$ for annual compounding and $k = 12$ for monthly compounding.',
      ru: 'Стоимость через $n$ лет вклада $PV$ под $r\\%$ годовых при $k$ начислениях процентов в год. Для ежегодного начисления $k = 1$, для ежемесячного $k = 12$.',
    },
    when: {
      en: 'A deposit or a debt that grows by compound interest, where $r$ is the fixed nominal annual rate, $k$ a positive integer and $kn$ the number of complete periods; no other cash flows or charges.',
      ru: 'Вклад или долг, который растёт за счёт сложных процентов; $r$ — постоянная номинальная годовая ставка, $k$ — положительное целое, $kn$ — число полных периодов; других денежных потоков и комиссий нет.',
    },
    syllabus: '1.4',
    inBooklet: true,
    example: {
      en: 'With PV = 20000, r = 3.5, n = 5 and k = 1: FV = 20000 x 1.035^5 = 23753.73, to 2 decimal places.',
      ru: 'При PV = 20000, r = 3,5, n = 5 и k = 1: FV = 20000 × 1,035^5 = 23753,73 с точностью до 2 знаков.',
    },
  },
  {
    id: 'reducing-balance-value',
    tex: 'V_n=V_0\\left(1-\\dfrac{r}{100}\\right)^{n}',
    name: { en: 'Reducing-balance depreciation', ru: 'Амортизация по остаточной стоимости (Reducing-balance depreciation)' },
    meaning: {
      en: 'The value after $n$ years is $V_n$, where $V_0$ is the value at the start and $r\\%$ is the percentage lost each year.',
      ru: 'Стоимость через $n$ лет равна $V_n$, где $V_0$ — стоимость на начало, а $r\\%$ — процент, теряемый каждый год.',
    },
    when: {
      en: 'For $V_0>0$, $0<r<100$ and a nonnegative integer $n$: the value falls each year by the same percentage of its value at the start of that year.',
      ru: 'При $V_0>0$, $0<r<100$ и неотрицательном целом $n$ стоимость каждый год уменьшается на один и тот же процент от стоимости на начало года.',
    },
    syllabus: '1.4',
    inBooklet: false,
    example: {
      en: 'With V0 = 85000, r = 12 and n = 4: V4 = 85000 x 0.88^4 = 50974.11, to 2 decimal places.',
      ru: 'При V0 = 85000, r = 12 и n = 4: V4 = 85000 × 0,88^4 = 50974,11 с точностью до 2 знаков.',
    },
  },
  {
    id: 'depreciation-rate',
    tex: 'r=100\\left(1-\\left(\\dfrac{V_n}{V_0}\\right)^{\\frac{1}{n}}\\right)',
    name: { en: 'Annual percentage depreciation rate', ru: 'Годовая процентная ставка амортизации (Annual percentage depreciation rate)' },
    meaning: {
      en: 'The fixed percentage $r$ lost each year, found from the starting value $V_0$ and the value $V_n$ after $n$ years.',
      ru: 'Фиксированный процент $r$, теряемый каждый год, найденный по стоимости на начало $V_0$ и стоимости $V_n$ через $n$ лет.',
    },
    when: {
      en: 'For $V_0>0$, $n>0$ and $0<V_n<V_0$, finding a constant depreciation rate from the starting and ending values.',
      ru: 'При $V_0>0$, $n>0$ и $0<V_n<V_0$ — поиск постоянного процента снижения по начальной и конечной стоимости.',
    },
    syllabus: '1.4',
    inBooklet: false,
  },
];
