import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'poisson-pmf',
    tex: 'P(X=x)=\\dfrac{e^{-m}\\,m^{x}}{x!},\\quad x=0,1,2,\\dots',
    name: { en: 'Poisson probability', ru: 'Вероятность по распределению Пуассона (Poisson probability)' },
    meaning: {
      en: 'Probability of exactly x events in the interval when the mean number of events is m.',
      ru: 'Вероятность ровно x событий в интервале, если среднее число событий равно m.',
    },
    when: {
      en: 'Counting events in a fixed interval at a constant mean rate.',
      ru: 'Подсчёт событий за фиксированный интервал при постоянной средней частоте.',
    },
    syllabus: '4.17',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With m = 3: P(X = 5) = e^(-3) x 3^5 / 5! = 0.101 to 3 decimal places.',
      ru: 'При m = 3: P(X = 5) = e^(-3) × 3^5 / 5! = 0,101 с точностью до 3 знаков.',
    },
  },
  {
    id: 'poisson-mean-variance',
    tex: 'E(X)=\\operatorname{Var}(X)=m',
    name: { en: 'Mean and variance of a Poisson variable', ru: 'Среднее и дисперсия величины Пуассона (Mean and variance of a Poisson variable)' },
    meaning: {
      en: 'For X ~ Po(m) the mean and the variance both equal m.',
      ru: 'Для X ~ Po(m) среднее и дисперсия равны m.',
    },
    when: {
      en: 'Checking whether a count is plausibly Poisson: the sample mean and the sample variance should be close.',
      ru: 'Проверка, похож ли подсчёт на распределение Пуассона: выборочные среднее и дисперсия должны быть близки.',
    },
    syllabus: '4.17',
    inBooklet: false,
  },
  {
    id: 'poisson-additive',
    tex: 'X+Y\\sim\\text{Po}(m_1+m_2)',
    name: { en: 'Sum of independent Poisson variables', ru: 'Сумма независимых величин Пуассона (Sum of independent Poisson variables)' },
    meaning: {
      en: 'If X ~ Po(m1) and Y ~ Po(m2) are independent, their sum is Poisson with the added means.',
      ru: 'Если X ~ Po(m1) и Y ~ Po(m2) независимы, их сумма имеет распределение Пуассона со средним, равным сумме средних.',
    },
    when: {
      en: 'Combining counts from adjacent intervals of the same process.',
      ru: 'Объединение подсчётов за соседние интервалы одного и того же процесса.',
    },
    syllabus: '4.17',
    inBooklet: false,
  },
];
