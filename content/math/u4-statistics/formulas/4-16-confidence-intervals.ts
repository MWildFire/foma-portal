import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'ci-mean-z-known-sigma',
    tex: '\\bar{x}\\pm z^{*}\\dfrac{\\sigma}{\\sqrt{n}}',
    name: { en: 'Confidence interval for μ, σ known (z case)', ru: 'Доверительный интервал для μ при известной σ (z-случай) (Confidence interval for μ, σ known (z case))' },
    meaning: {
      en: 'The sample mean plus or minus $z^{*}$ standard errors, where $z^{*}$ is the critical value for the confidence level.',
      ru: 'Выборочное среднее плюс-минус $z^{*}$ стандартных ошибок, где $z^{*}$ — критическое значение для уровня доверия.',
    },
    when: {
      en: 'A normal population with known σ, or any population with a large sample (central limit theorem).',
      ru: 'Нормальная совокупность с известной σ или любая совокупность при большой выборке (центральная предельная теорема).',
    },
    syllabus: '4.16',
    inBooklet: false,
    example: {
      en: 'For 95%, z* = 1.960. With sample mean 329.6, sigma = 4.5 and n = 36, the interval is 329.6 ± 1.47.',
      ru: 'Для 95%: z* = 1,960. При выборочном среднем 329,6, σ = 4,5 и n = 36 интервал равен 329,6 ± 1,47.',
    },
  },
  {
    id: 'ci-mean-t-unknown-sigma',
    tex: '\\bar{x}\\pm t^{*}\\dfrac{s_{n-1}}{\\sqrt{n}},\\qquad \\nu=n-1',
    name: { en: 'Confidence interval for μ, σ unknown (t case)', ru: 'Доверительный интервал для μ при неизвестной σ (t-случай) (Confidence interval for μ, σ unknown (t case))' },
    meaning: {
      en: 'The sample mean plus or minus $t^{*}$ estimated standard errors, where $t^{*}$ has $\\nu = n - 1$ degrees of freedom.',
      ru: 'Выборочное среднее плюс-минус $t^{*}$ оценённых стандартных ошибок, где $t^{*}$ имеет $\\nu = n - 1$ степеней свободы.',
    },
    when: {
      en: 'A normal population with σ unknown, estimated by $s_{n-1}$ from the sample.',
      ru: 'Нормальная совокупность с неизвестной σ, которую оценивают по выборке через $s_{n-1}$.',
    },
    syllabus: '4.16',
    inBooklet: false,
    example: {
      en: 'For n = 12, sample mean 58.3, s = 4.3 and 95%: t* = 2.201 with 11 degrees of freedom, so the interval is 58.3 ± 2.73.',
      ru: 'Для n = 12, выборочного среднего 58,3, s = 4,3 и 95%: t* = 2,201 при 11 степенях свободы, интервал равен 58,3 ± 2,73.',
    },
  },
  {
    id: 'sample-size-margin-error',
    tex: 'n\\geq\\left(\\dfrac{z^{*}\\sigma}{E}\\right)^{2}',
    name: { en: 'Sample size for a given margin of error', ru: 'Объём выборки для заданной погрешности (Sample size for a given margin of error)' },
    meaning: {
      en: 'The smallest sample size n for which the margin of error is at most E, when σ is known.',
      ru: 'Наименьший объём выборки n, при котором погрешность не превышает E, если σ известна.',
    },
    when: {
      en: 'Planning a sample before collecting data, when σ is known from earlier studies.',
      ru: 'Планирование выборки до сбора данных, когда σ известна по предыдущим исследованиям.',
    },
    syllabus: '4.16',
    inBooklet: false,
    example: {
      en: 'With z* = 1.960, sigma = 3.2 and E = 1: n >= (1.960 x 3.2)^2 = 39.3, so n = 40.',
      ru: 'При z* = 1,960, σ = 3,2 и E = 1: n ≥ (1,960 × 3,2)² = 39,3, поэтому n = 40.',
    },
  },
];
