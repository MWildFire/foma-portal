import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'normal-linear-combination-distribution',
    tex: 'aX+bY\\sim N\\left(a\\mu_{1}+b\\mu_{2},\\;a^{2}\\sigma_{1}^{2}+b^{2}\\sigma_{2}^{2}\\right)',
    name: { en: 'Linear combination of independent normal variables', ru: 'Линейная комбинация независимых нормальных величин (Linear combination of independent normal variables)' },
    meaning: {
      en: 'If $X \\sim N(\\mu_1, \\sigma_1^{2})$ and $Y \\sim N(\\mu_2, \\sigma_2^{2})$ are independent, then $aX + bY$ is normal with the mean and variance shown.',
      ru: 'Если $X \\sim N(\\mu_1, \\sigma_1^{2})$ и $Y \\sim N(\\mu_2, \\sigma_2^{2})$ независимы, то $aX + bY$ нормальна, со средним и дисперсией, показанными в формуле.',
    },
    when: {
      en: 'Totals, differences and weighted sums of independent normal measurements. If both coefficients are zero, the result is the constant 0 rather than a positive-variance normal variable.',
      ru: 'Суммы, разности и взвешенные суммы независимых нормальных измерений. Если оба коэффициента нулевые, результат — константа 0, а не нормальная величина с положительной дисперсией.',
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
    name: { en: 'Sample mean from a normal population', ru: 'Выборочное среднее нормальной совокупности (Sample mean from a normal population)' },
    meaning: {
      en: 'If $X \\sim N(\\mu, \\sigma^{2})$, the mean of a random sample of size $n$ is normal with mean $\\mu$ and variance $\\sigma^{2}/n$.',
      ru: 'Если $X \\sim N(\\mu, \\sigma^{2})$, то среднее случайной выборки объёма $n$ нормально со средним $\\mu$ и дисперсией $\\sigma^{2}/n$.',
    },
    when: {
      en: 'Here random sample means independent identically distributed observations, n≥1. The population is normal, so the result holds exactly for every sample size n.',
      ru: 'Здесь случайная выборка означает независимые одинаково распределённые наблюдения, n≥1. Совокупность нормальна, поэтому результат точен при любом объёме выборки n.',
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
    name: { en: 'Central limit theorem for the sample mean', ru: 'Центральная предельная теорема для выборочного среднего (Central limit theorem for the sample mean)' },
    meaning: {
      en: 'For independent identically distributed observations from a population with finite mean $\\mu$ and finite positive variance $\\sigma^{2}$, the sample mean is approximately normal with mean $\\mu$ and variance $\\sigma^{2}/n$.',
      ru: 'Для независимых одинаково распределённых наблюдений из совокупности с конечным средним $\\mu$ и конечной положительной дисперсией $\\sigma^{2}$ выборочное среднее приближённо нормально со средним $\\mu$ и дисперсией $\\sigma^{2}/n$.',
    },
    when: {
      en: 'The population is not normal or its shape is unknown; n is large. The n≥30 rule is a guide, not a guarantee: strong skewness/heavy tails may need much larger n.',
      ru: 'Совокупность не нормальна или её форма неизвестна; n велико. Правило n≥30 — ориентир, не гарантия: сильная асимметрия или тяжёлые хвосты могут требовать большего n.',
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
    name: { en: 'Standard error of the sample mean', ru: 'Стандартная ошибка выборочного среднего (Standard error of the sample mean)' },
    meaning: {
      en: 'The standard deviation of the sample mean is the population standard deviation divided by the square root of the sample size.',
      ru: 'Стандартное отклонение выборочного среднего равно стандартному отклонению совокупности, делённому на квадратный корень из объёма выборки.',
    },
    when: {
      en: 'Requires independent identically distributed observations with finite variance; dependence changes the variance of the mean. Finding probabilities for sample means, or choosing a sample size for a required precision.',
      ru: 'Требуются независимые одинаково распределённые наблюдения с конечной дисперсией; зависимость меняет дисперсию среднего. Вычисление вероятностей для выборочных средних или выбор объёма выборки для нужной точности.',
    },
    syllabus: '4.15',
    inBooklet: false,
    example: {
      en: 'With sigma = 3 and n = 40, the standard error is 3/sqrt(40) = 0.474.',
      ru: 'При σ = 3 и n = 40 стандартная ошибка равна 3/√40 = 0,474.',
    },
  },
];
