import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'binomial-pmf',
    tex: 'P(X=r)=\\binom{n}{r}p^{r}(1-p)^{n-r},\\quad r=0,1,\\dots,n',
    name: { en: 'Binomial probability', ru: 'Вероятность по биномиальному распределению' },
    meaning: {
      en: 'Probability of exactly r successes in n trials, where p is the probability of success in one trial.',
      ru: 'Вероятность ровно r успехов в n испытаниях, где p — вероятность успеха в одном испытании.',
    },
    when: {
      en: 'A fixed number of independent trials, each with two outcomes and the same probability of success.',
      ru: 'Фиксированное число независимых испытаний, каждое с двумя исходами и одинаковой вероятностью успеха.',
    },
    syllabus: '4.8',
    inBooklet: true,
    example: {
      en: 'With n = 10 and p = 0.7: P(X = 8) = C(10, 8) × 0.7^8 × 0.3^2 = 0.233 to 3 decimal places.',
      ru: 'При n = 10 и p = 0.7: P(X = 8) = C(10, 8) × 0.7^8 × 0.3^2 = 0,233 с точностью до 3 знаков.',
    },
  },
  {
    id: 'binomial-mean-variance',
    tex: 'E(X)=np,\\qquad \\operatorname{Var}(X)=np(1-p)',
    name: { en: 'Mean and variance of a binomial variable', ru: 'Среднее и дисперсия биномиальной величины' },
    meaning: {
      en: 'For X ~ B(n, p) the mean is np and the variance is np(1 − p).',
      ru: 'Для X ~ B(n, p) среднее равно np, а дисперсия равна np(1 − p).',
    },
    when: {
      en: 'Describing the expected number of successes and how widely the count varies.',
      ru: 'Описание ожидаемого числа успехов и разброса подсчёта.',
    },
    syllabus: '4.8',
    inBooklet: false,
    example: {
      en: 'With n = 10 and p = 0.7: the mean is 7 and the variance is 2.1.',
      ru: 'При n = 10 и p = 0.7: среднее равно 7, а дисперсия равна 2,1.',
    },
  },
  {
    id: 'binomial-tail-complement',
    tex: 'P(X\\ge k)=1-P(X\\le k-1)',
    name: { en: 'Complement for a tail probability', ru: 'Дополнение для вероятности «хвоста»' },
    meaning: {
      en: 'The probability of at least k successes is one minus the probability of at most k − 1 successes.',
      ru: 'Вероятность не менее k успехов равна единице минус вероятность не более k − 1 успехов.',
    },
    when: {
      en: 'The question asks for "at least" or "more than", and the GDC cdf accumulates from zero.',
      ru: 'В вопросе спрашивают «не менее» или «больше», а cdf на калькуляторе накапливается от нуля.',
    },
    syllabus: '4.8',
    inBooklet: false,
    example: {
      en: 'With X ~ B(12, 0.05): P(X ≥ 2) = 1 − P(X ≤ 1) = 0.118 to 3 decimal places.',
      ru: 'При X ~ B(12, 0.05): P(X ≥ 2) = 1 − P(X ≤ 1) = 0,118 с точностью до 3 знаков.',
    },
  },
];
