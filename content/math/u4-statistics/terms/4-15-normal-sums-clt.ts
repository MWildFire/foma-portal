import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'normal-linear-combination',
    term: { en: 'linear combination of independent normal variables', ru: 'линейная комбинация независимых нормальных величин (linear combination of independent normal variables)' },
    def: {
      en: 'If independent normal variables X and Y have positive variances, aX+bY is normal when at least one coefficient is nonzero, with mean aμ₁+bμ₂ and variance a²σ₁²+b²σ₂². If both coefficients are zero, the result is the constant 0.',
      ru: 'Если независимые нормальные величины X и Y имеют положительные дисперсии, то при хотя бы одном ненулевом коэффициенте aX+bY нормальна со средним aμ₁+bμ₂ и дисперсией a²σ₁²+b²σ₂². При двух нулевых коэффициентах получается константа 0.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.6, p. 607' },
    pitfall: {
      en: 'Independence is a sufficient assumption here. Jointly normal dependent variables can also have normal combinations, but covariance terms are then needed. Variances combine with squared coefficients; standard deviations do not generally add directly.',
      ru: 'Независимость здесь — достаточное условие. Линейные комбинации совместно нормальных зависимых величин тоже могут быть нормальными, но тогда нужны слагаемые с ковариацией. Дисперсии складываются с квадратами коэффициентов; стандартные отклонения в общем случае напрямую не складываются.',
    },
  },
  {
    id: 'sampling-distribution-sample-mean',
    term: { en: 'sampling distribution of the sample mean', ru: 'выборочное распределение среднего (sampling distribution of the sample mean)' },
    def: {
      en: 'The distribution of $\\bar{X}$ over all independent identically distributed samples of size $n$. For a normal population $N(\\mu, \\sigma^{2})$ it is $N(\\mu, \\sigma^{2}/n)$.',
      ru: 'Распределение $\\bar{X}$ по всем выборкам из независимых одинаково распределённых наблюдений объёма $n$. Для нормальной совокупности $N(\\mu, \\sigma^{2})$ оно равно $N(\\mu, \\sigma^{2}/n)$.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.6, p. 608' },
  },
  {
    id: 'central-limit-theorem',
    term: { en: 'central limit theorem (CLT)', ru: 'центральная предельная теорема, ЦПТ (central limit theorem (CLT))' },
    def: {
      en: 'For independent identically distributed observations with finite mean $\\mu$ and finite positive variance $\\sigma^{2}$, the mean of a sufficiently large sample is approximately $N(\\mu, \\sigma^{2}/n)$, whatever the shape of the population.',
      ru: 'Для независимых одинаково распределённых наблюдений с конечным средним $\\mu$ и конечной положительной дисперсией $\\sigma^{2}$ среднее достаточно большой выборки приближённо распределено как $N(\\mu, \\sigma^{2}/n)$, какова бы ни была форма совокупности.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.6, p. 612' },
    pitfall: {
      en: 'The theorem describes the distribution of the sample mean, not of the individual values. Say "approximately" and state that $n$ is large. The n ≥ 30 rule is a guide, not a universal accuracy guarantee.',
      ru: 'Теорема описывает распределение выборочного среднего, а не отдельных значений. Пишите «приближённо» и отмечайте, что $n$ велико. Правило n ≥ 30 — ориентир, а не универсальная гарантия точности.',
    },
  },
  {
    id: 'standard-error-sample-mean',
    term: { en: 'standard error of the mean', ru: 'стандартная ошибка среднего (standard error of the mean)' },
    def: {
      en: 'The standard deviation of the sampling distribution of $\\bar{X}$, equal to $\\sigma/\\sqrt{n}$ for independent identically distributed observations with finite variance. For n > 1 and positive variance it is smaller than $\\sigma$, so sample means vary less than single values do.',
      ru: 'Стандартное отклонение выборочного распределения $\\bar{X}$, равное $\\sigma/\\sqrt{n}$ для независимых одинаково распределённых наблюдений с конечной дисперсией. При n > 1 и положительной дисперсии оно меньше $\\sigma$, поэтому выборочные средние колеблются меньше, чем отдельные значения.',
    },
    syllabus: '4.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.6, p. 610' },
  },
];
