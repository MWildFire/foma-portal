import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'linear-transformation-rv',
    term: { en: 'linear transformation of a random variable', ru: 'линейное преобразование случайной величины (linear transformation of a random variable)' },
    def: {
      en: 'The new variable $Y = aX + b$, made by multiplying $X$ by a constant $a$ and adding a constant $b$. The mean becomes $aE(X) + b$ and the variance becomes $a^{2}\\operatorname{Var}(X)$, because $b$ shifts the values without changing their spread.',
      ru: 'Новая величина $Y = aX + b$, полученная умножением $X$ на константу $a$ и прибавлением константы $b$. Среднее становится равным $aE(X) + b$, дисперсия — $a^{2}\\operatorname{Var}(X)$, так как $b$ сдвигает значения, не меняя их разброс.',
    },
    syllabus: '4.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.5, p. 601' },
    pitfall: {
      en: 'Adding $b$ shifts the mean but leaves the variance unchanged. The variance is multiplied by $a^{2}$, so the standard deviation is multiplied by $|a|$, not by $a^{2}$.',
      ru: 'Прибавление $b$ сдвигает среднее, но не меняет дисперсию. Дисперсия умножается на $a^{2}$, поэтому стандартное отклонение умножается на $|a|$, а не на $a^{2}$.',
    },
  },
  {
    id: 'expected-value-linear-combination',
    term: { en: 'expected value of a linear combination', ru: 'математическое ожидание линейной комбинации (expected value of a linear combination)' },
    def: {
      en: 'For random variables $X_1, \\dots, X_n$ and constants $a_1, \\dots, a_n$, the expected value of $a_1X_1 + \\dots + a_nX_n$ is $a_1E(X_1) + \\dots + a_nE(X_n)$. This holds whether or not the variables are independent.',
      ru: 'Для случайных величин $X_1, \\dots, X_n$ и констант $a_1, \\dots, a_n$ математическое ожидание $a_1X_1 + \\dots + a_nX_n$ равно $a_1E(X_1) + \\dots + a_nE(X_n)$. Это верно независимо от того, независимы ли величины.',
    },
    syllabus: '4.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.5, p. 602' },
    pitfall: {
      en: 'Coefficients are not squared for the mean: $E(2X) = 2E(X)$, not $4E(X)$.',
      ru: 'Для среднего коэффициенты не возводятся в квадрат: $E(2X) = 2E(X)$, а не $4E(X)$.',
    },
  },
  {
    id: 'variance-linear-combination-independent',
    term: { en: 'variance of a linear combination of independent variables', ru: 'дисперсия линейной комбинации независимых величин (variance of a linear combination of independent variables)' },
    def: {
      en: 'If $X_1, \\dots, X_n$ are independent, then $\\operatorname{Var}(a_1X_1 + \\dots + a_nX_n) = a_1^{2}\\operatorname{Var}(X_1) + \\dots + a_n^{2}\\operatorname{Var}(X_n)$. Every coefficient is squared, so the variances add even when the combination is a difference.',
      ru: 'Если $X_1, \\dots, X_n$ независимы, то $\\operatorname{Var}(a_1X_1 + \\dots + a_nX_n) = a_1^{2}\\operatorname{Var}(X_1) + \\dots + a_n^{2}\\operatorname{Var}(X_n)$. Каждый коэффициент возводится в квадрат, поэтому дисперсии складываются даже для разности.',
    },
    syllabus: '4.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.5, p. 602' },
    pitfall: {
      en: 'Variances of a difference add: $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ for independent $X$ and $Y$. Never subtract the variances.',
      ru: 'Дисперсии разности складываются: $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ для независимых $X$ и $Y$. Дисперсии никогда не вычитают.',
    },
  },
  {
    id: 'unbiased-estimator',
    term: { en: 'unbiased estimator', ru: 'несмещённая оценка (unbiased estimator)' },
    def: {
      en: 'An estimator whose expected value equals the population parameter it estimates. The sample mean $\\bar{X}$ is unbiased for $\\mu$, and the sample variance $s_{n-1}^{2}$, with divisor $n - 1$, is unbiased for $\\sigma^{2}$.',
      ru: 'Оценка, математическое ожидание которой равно оцениваемому параметру генеральной совокупности. Выборочное среднее $\\bar{X}$ — несмещённая оценка $\\mu$, а выборочная дисперсия $s_{n-1}^{2}$ с делителем $n - 1$ — несмещённая оценка $\\sigma^{2}$.',
    },
    syllabus: '4.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.3, p. 643' },
    pitfall: {
      en: 'Dividing the sum of squared deviations by $n$ instead of $n - 1$ gives a biased estimate of $\\sigma^{2}$ that is too small on average.',
      ru: 'Деление суммы квадратов отклонений на $n$ вместо $n - 1$ даёт смещённую оценку $\\sigma^{2}$, которая в среднем занижена.',
    },
  },
];
