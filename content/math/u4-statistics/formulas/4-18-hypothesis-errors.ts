import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'population-mean-t-statistic',
    tex: 't=\\dfrac{\\bar{x}-\\mu_{0}}{s/\\sqrt{n}},\\quad \\nu=n-1',
    name: { en: 't-statistic for a population mean', ru: 'статистика t для среднего генеральной совокупности (t-statistic for a population mean)' },
    meaning: {
      en: 'Standardised difference between the sample mean and the hypothesised mean mu0, with n - 1 degrees of freedom.',
      ru: 'Стандартизованная разность между выборочным средним и гипотетическим средним μ0; число степеней свободы n − 1.',
    },
    when: {
      en: 'One-sample test of H0: mu = mu0 for a normal population with unknown variance.',
      ru: 'Одновыборочный тест H0: μ = μ0 для нормальной совокупности с неизвестной дисперсией.',
    },
    syllabus: '4.18',
    inBooklet: false,
    example: {
      en: 'With x-bar = 512, mu0 = 500, s = 18 and n = 9: t = 12 / (18 / 3) = 2.00, with 8 degrees of freedom.',
      ru: 'При x̄ = 512, μ0 = 500, s = 18 и n = 9: t = 12 / (18 / 3) = 2,00, число степеней свободы 8.',
    },
  },
  {
    id: 'correlation-t-statistic',
    tex: 't=\\dfrac{r\\sqrt{n-2}}{\\sqrt{1-r^{2}}},\\quad \\nu=n-2',
    name: { en: 't-statistic for the population correlation', ru: 'статистика t для коэффициента корреляции генеральной совокупности (t-statistic for the population correlation)' },
    meaning: {
      en: 'Test statistic for H0: rho = 0, from the sample correlation coefficient r of n pairs, with n - 2 degrees of freedom.',
      ru: 'Статистика для H0: ρ = 0 по выборочному коэффициенту корреляции r из n пар; число степеней свободы n − 2.',
    },
    when: {
      en: 'Testing whether the population correlation is zero, for bivariate normal data.',
      ru: 'Проверка, равен ли нулю коэффициент корреляции генеральной совокупности, для двумерно нормальных данных.',
    },
    syllabus: '4.18',
    inBooklet: false,
    example: {
      en: 'With r = 0.62 and n = 12: t = 0.62 x √10 / √(1 - 0.62^2) = 2.50 (3 s.f.), with 10 degrees of freedom.',
      ru: 'При r = 0,62 и n = 12: t = 0,62 × √10 / √(1 − 0,62²) = 2,50 (3 значащие цифры), число степеней свободы 10.',
    },
  },
  {
    id: 'poisson-total-count-test',
    tex: 'T=X_{1}+X_{2}+\\cdots+X_{n}\\sim\\text{Po}(n\\,m_{0})\\quad\\text{under } H_{0}: m=m_{0}',
    name: { en: 'Total of n Poisson counts under H0', ru: 'Сумма n подсчётов Пуассона при H0 (Total of n Poisson counts under H0)' },
    meaning: {
      en: 'For independent counts X1 to Xn, each with mean m0 under H0, the total T is Poisson with mean n m0.',
      ru: 'Для независимых подсчётов X1, …, Xn, каждый со средним m0 при H0, их сумма T имеет распределение Пуассона со средним n m0.',
    },
    when: {
      en: 'Testing a Poisson mean with several independent intervals of equal length.',
      ru: 'Проверка среднего Пуассона по нескольким независимым интервалам одинаковой длины.',
    },
    syllabus: '4.18',
    inBooklet: false,
    example: {
      en: 'Three shifts with m0 = 10 give T ~ Po(30) under H0.',
      ru: 'Три смены при m0 = 10 дают T ~ Po(30) при H0.',
    },
  },
];
