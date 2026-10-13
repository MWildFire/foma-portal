import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.18',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'population-mean-t-test',
    term: { en: 't-test for a population mean', ru: 't-тест для среднего генеральной совокупности (t-test for a population mean)' },
    def: {
      en: 'A test of $H_0: \\mu = \\mu_0$ for a normal population with unknown variance. When $H_0$ is true, the statistic $\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}$ has a $t$-distribution with $n-1$ degrees of freedom.',
      ru: 'Проверка $H_0: \\mu = \\mu_0$ для нормальной совокупности с неизвестной дисперсией. Если $H_0$ верна, статистика $\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}$ имеет $t$-распределение с $n-1$ степенями свободы.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Use the sample standard deviation s, which divides by n - 1, and n - 1 degrees of freedom. The z-test is only for a known population standard deviation.',
      ru: 'Используйте выборочное стандартное отклонение s (делитель n − 1) и n − 1 степеней свободы. z-тест применяют только при известном стандартном отклонении генеральной совокупности.',
    },
    sim: 'math.t-test-lab',
  },
  {
    id: 'type-i-error-probability',
    term: { en: 'Type I error', ru: 'ошибка I рода (Type I error)' },
    def: {
      en: 'Rejecting $H_0$ when $H_0$ is true. Its probability is the significance level $\\alpha$ for a continuous test, and at most $\\alpha$ for a discrete test.',
      ru: 'Отклонение $H_0$, когда $H_0$ верна. Её вероятность равна уровню значимости $\\alpha$ для непрерывного теста и не превосходит $\\alpha$ для дискретного.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'It is a false positive. Its probability is not the probability that $H_0$ is true.',
      ru: 'Это ложное срабатывание. Её вероятность — не вероятность того, что $H_0$ верна.',
    },
  },
  {
    id: 'type-ii-error-probability',
    term: { en: 'Type II error', ru: 'ошибка II рода (Type II error)' },
    def: {
      en: 'Failing to reject $H_0$ when $H_1$ is true. Its probability is $\\beta$, and the power of the test is $1 - \\beta$.',
      ru: 'Сохранение $H_0$, когда верна $H_1$. Её вероятность равна $\\beta$, а мощность теста равна $1 - \\beta$.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: '$\\beta$ depends on one specific value of the parameter under $H_1$, so state that value before you calculate.',
      ru: '$\\beta$ зависит от одного конкретного значения параметра при $H_1$, поэтому назовите это значение до вычислений.',
    },
  },
];
