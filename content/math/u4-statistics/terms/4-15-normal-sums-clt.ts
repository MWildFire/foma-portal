import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.15',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'normal-linear-combination',
    term: { en: 'linear combination of independent normal variables', ru: 'линейная комбинация независимых нормальных величин (linear combination of independent normal variables)' },
    def: {
      en: 'If $X$ and $Y$ are independent normal variables, then $aX + bY$ is also normal, with mean $a\\mu_1 + b\\mu_2$ and variance $a^{2}\\sigma_1^{2} + b^{2}\\sigma_2^{2}$.',
      ru: 'Если $X$ и $Y$ — независимые нормальные величины, то $aX + bY$ тоже нормальна, со средним $a\\mu_1 + b\\mu_2$ и дисперсией $a^{2}\\sigma_1^{2} + b^{2}\\sigma_2^{2}$.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Independence is needed. Variances combine with squared coefficients; standard deviations never add directly.',
      ru: 'Нужна независимость. Дисперсии складываются с квадратами коэффициентов; стандартные отклонения напрямую не складываются.',
    },
  },
  {
    id: 'sampling-distribution-sample-mean',
    term: { en: 'sampling distribution of the sample mean', ru: 'выборочное распределение среднего (sampling distribution of the sample mean)' },
    def: {
      en: 'The distribution of $\\bar{X}$ over all random samples of size $n$. For a normal population $N(\\mu, \\sigma^{2})$ it is $N(\\mu, \\sigma^{2}/n)$.',
      ru: 'Распределение $\\bar{X}$ по всем случайным выборкам объёма $n$. Для нормальной совокупности $N(\\mu, \\sigma^{2})$ оно равно $N(\\mu, \\sigma^{2}/n)$.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'central-limit-theorem',
    term: { en: 'central limit theorem (CLT)', ru: 'центральная предельная теорема, ЦПТ (central limit theorem (CLT))' },
    def: {
      en: 'For a large random sample of size $n$ from any population with mean $\\mu$ and variance $\\sigma^{2}$, the sample mean is approximately $N(\\mu, \\sigma^{2}/n)$, whatever the shape of the population.',
      ru: 'Для большой случайной выборки объёма $n$ из любой совокупности со средним $\\mu$ и дисперсией $\\sigma^{2}$ выборочное среднее приближённо распределено как $N(\\mu, \\sigma^{2}/n)$, какова бы ни была форма совокупности.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The theorem describes the distribution of the sample mean, not of the individual values. Say "approximately" and state that $n$ is large.',
      ru: 'Теорема описывает распределение выборочного среднего, а не отдельных значений. Пишите «приближённо» и отмечайте, что $n$ велико.',
    },
  },
  {
    id: 'standard-error-sample-mean',
    term: { en: 'standard error of the mean', ru: 'стандартная ошибка среднего (standard error of the mean)' },
    def: {
      en: 'The standard deviation of the sampling distribution of $\\bar{X}$, equal to $\\sigma/\\sqrt{n}$. It is smaller than $\\sigma$, so sample means vary less than single values do.',
      ru: 'Стандартное отклонение выборочного распределения $\\bar{X}$, равное $\\sigma/\\sqrt{n}$. Оно меньше $\\sigma$, поэтому выборочные средние колеблются меньше, чем отдельные значения.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
