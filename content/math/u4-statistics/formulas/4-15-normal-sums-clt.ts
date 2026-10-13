import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'normal-linear-combination-distribution',
    tex: 'aX+bY\\sim N\\left(a\\mu_{1}+b\\mu_{2},\\;a^{2}\\sigma_{1}^{2}+b^{2}\\sigma_{2}^{2}\\right)',
    name: { en: 'Linear combination of independent normal variables', ru: 'Линейная комбинация независимых нормальных величин' },
    meaning: {
      en: 'If $X \\sim N(\\mu_1, \\sigma_1^{2})$ and $Y \\sim N(\\mu_2, \\sigma_2^{2})$ are independent, then $aX + bY$ is normal with the mean and variance shown.',
      ru: 'Если $X \\sim N(\\mu_1, \\sigma_1^{2})$ и $Y \\sim N(\\mu_2, \\sigma_2^{2})$ независимы, то $aX + bY$ нормальна, со средним и дисперсией, показанными в формуле.',
    },
    when: {
      en: 'Totals, differences and weighted sums of independent normal measurements.',
      ru: 'Суммы, разности и взвешенные суммы независимых нормальных измерений.',
    },
    syllabus: '4.15',
    inBooklet: false,
    example: {
      en: 'If X ~ N(150, 144) and Y ~ N(180, 225) are independent (variances 144 and 225), then X + Y ~ N(330, 369).',
      ru: 'Если X ~ N(150, 144) и Y ~ N(180, 225) независимы (дисперсии 144 и 225), то X + Y ~ N(330, 369).',
    },
  },
  {
    id: 'sample-mean-normal-distribution',
    tex: '\\bar{X}\\sim N\\left(\\mu,\\dfrac{\\sigma^{2}}{n}\\right)',
    name: { en: 'Sample mean from a normal population', ru: 'Выборочное среднее нормальной совокупности' },
    meaning: {
      en: 'If $X \\sim N(\\mu, \\sigma^{2})$, the mean of a random sample of size $n$ is normal with mean $\\mu$ and variance $\\sigma^{2}/n$.',
      ru: 'Если $X \\sim N(\\mu, \\sigma^{2})$, то среднее случайной выборки объёма $n$ нормально со средним $\\mu$ и дисперсией $\\sigma^{2}/n$.',
    },
    when: {
      en: 'The population is normal, so the result holds exactly for every sample size n.',
      ru: 'Совокупность нормальна, поэтому результат точен при любом объёме выборки n.',
    },
    syllabus: '4.15',
    inBooklet: false,
    example: {
      en: 'If X ~ N(100, 9) and n = 25, then the sample mean is N(100, 0.36), with standard deviation 0.6.',
      ru: 'Если X ~ N(100, 9) и n = 25, то выборочное среднее имеет распределение N(100; 0,36) со стандартным отклонением 0,6.',
    },
  },
  {
    id: 'clt-sample-mean-approximation',
    tex: '\\bar{X}\\approx N\\left(\\mu,\\dfrac{\\sigma^{2}}{n}\\right)\\quad\\text{for large }n',
    name: { en: 'Central limit theorem for the sample mean', ru: 'Центральная предельная теорема для выборочного среднего' },
    meaning: {
      en: 'For a large sample from any population with mean $\\mu$ and variance $\\sigma^{2}$, the sample mean is approximately normal with mean $\\mu$ and variance $\\sigma^{2}/n$.',
      ru: 'Для большой выборки из любой совокупности со средним $\\mu$ и дисперсией $\\sigma^{2}$ выборочное среднее приближённо нормально со средним $\\mu$ и дисперсией $\\sigma^{2}/n$.',
    },
    when: {
      en: 'The population is not normal or its shape is unknown, and n is large (a common rule of thumb is n ≥ 30).',
      ru: 'Совокупность не нормальна или её форма неизвестна, а n велико (обычно берут n ≥ 30).',
    },
    syllabus: '4.15',
    inBooklet: false,
    example: {
      en: 'For a waiting time with mean 4.2 and standard deviation 3.0, a sample of 40 gives the approximate distribution N(4.2, 0.225).',
      ru: 'Для времени ожидания со средним 4,2 и стандартным отклонением 3,0 выборка из 40 человек даёт приближённое распределение N(4,2; 0,225).',
    },
  },
  {
    id: 'se-sample-mean-formula',
    tex: '\\sigma_{\\bar{X}}=\\dfrac{\\sigma}{\\sqrt{n}}',
    name: { en: 'Standard error of the sample mean', ru: 'Стандартная ошибка выборочного среднего' },
    meaning: {
      en: 'The standard deviation of the sample mean is the population standard deviation divided by the square root of the sample size.',
      ru: 'Стандартное отклонение выборочного среднего равно стандартному отклонению совокупности, делённому на квадратный корень из объёма выборки.',
    },
    when: {
      en: 'Finding probabilities for sample means, or choosing a sample size for a required precision.',
      ru: 'Вычисление вероятностей для выборочных средних или выбор объёма выборки для нужной точности.',
    },
    syllabus: '4.15',
    inBooklet: false,
    example: {
      en: 'With sigma = 3 and n = 40, the standard error is 3/sqrt(40) = 0.474.',
      ru: 'При σ = 3 и n = 40 стандартная ошибка равна 3/√40 = 0,474.',
    },
  },
];
