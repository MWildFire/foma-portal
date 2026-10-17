import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'population-mean-t-test',
    term: { en: 't-test for a population mean', ru: 't-тест для среднего генеральной совокупности (t-test for a population mean)' },
    def: {
      en: 'A test of $H_0: \\mu = \\mu_0$ for independent observations from a normal population with positive unknown variance, n>1 and s>0. When $H_0$ is true, the statistic $\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}$ has a $t$-distribution with $n-1$ degrees of freedom.',
      ru: 'Проверка $H_0: \\mu = \\mu_0$ для независимых наблюдений из нормальной совокупности с неизвестной положительной дисперсией при n>1 и s>0. Если $H_0$ верна, статистика $\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}$ имеет $t$-распределение с $n-1$ степенями свободы.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.3, p. 644' },
    pitfall: {
      en: 'Use the sample standard deviation s, which divides by n - 1, and n - 1 degrees of freedom. The exact normal-mean z-test uses known population SD; replacing it by a sample estimate is a large-sample approximation, not this exact small-sample test.',
      ru: 'Используйте выборочное стандартное отклонение s (делитель n − 1) и n − 1 степеней свободы. Точный z-тест нормального среднего использует известное стандартное отклонение совокупности; подстановка выборочной оценки — большевыборочное приближение, а не этот точный тест малой выборки.',
    },
    sim: 'math.t-test-lab',
  },
  {
    id: 'type-i-error-probability',
    term: { en: 'Type I error', ru: 'ошибка I рода (Type I error)' },
    def: {
      en: 'Rejecting $H_0$ when $H_0$ is true. For a correctly calibrated exact continuous test its probability equals the nominal significance level α; a valid discrete test can have smaller size. Approximate procedures need not attain nominal size.',
      ru: 'Отклонение $H_0$, когда $H_0$ верна. Для правильно откалиброванного точного непрерывного теста её вероятность равна номинальному уровню α; у корректного дискретного критерия она может быть ниже. Приближённая процедура не обязана иметь номинальный размер.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.6, p. 676' },
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
      ru: 'Неотклонение $H_0$, когда верна $H_1$. Её вероятность равна $\\beta$, а мощность теста равна $1 - \\beta$.',
    },
    syllabus: '4.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.6, p. 676' },
    pitfall: {
      en: '$\\beta$ depends on one specific value of the parameter under $H_1$, so state that value before you calculate.',
      ru: '$\\beta$ зависит от одного конкретного значения параметра при $H_1$, поэтому назовите это значение до вычислений.',
    },
  },
];
