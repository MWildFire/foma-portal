import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'binomial-distribution',
    term: { en: 'binomial distribution', ru: 'биномиальное распределение (binomial distribution)' },
    def: {
      en: 'The distribution of the number of successes $X$ in $n$ independent trials, each with the same probability $p$ of success. Written $X \\sim \\text{B}(n, p)$.',
      ru: 'Распределение числа успехов $X$ в $n$ независимых испытаниях, в каждом из которых вероятность успеха одна и та же и равна $p$. Записывается $X \\sim \\text{B}(n, p)$.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.2, p. 582' },
    sim: 'math.binomial-poisson-lab',
  },
  {
    id: 'binomial-conditions',
    term: { en: 'conditions for a binomial model', ru: 'условия биномиальной модели (conditions for a binomial model)' },
    def: {
      en: 'A fixed number $n$ of trials, two outcomes (success or failure) in each trial, the same probability $p$ in every trial, and independent trials.',
      ru: 'Фиксированное число $n$ испытаний, два исхода в каждом испытании (успех или неудача), одинаковая вероятность $p$ в каждом испытании и независимость испытаний.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.2, p. 582' },
    pitfall: {
      en: 'Sampling from a finite mixed population without replacement generally makes the draws dependent and changes conditional success probabilities. Do not assume a binomial model without checking the conditions.',
      ru: 'При отборе без возвращения из конечной смешанной совокупности извлечения обычно зависимы, а условные вероятности успеха меняются. Нельзя автоматически применять биномиальную модель без проверки условий.',
    },
  },
  {
    id: 'binomial-cumulative-probability',
    term: { en: 'cumulative binomial probability', ru: 'накопленная биномиальная вероятность (cumulative binomial probability)' },
    def: {
      en: 'A probability for a range of values, such as $P(X \\le k)$ or $P(X \\ge k)$. It is found by adding individual probabilities or from the cdf on the GDC.',
      ru: 'Вероятность для диапазона значений, например $P(X \\le k)$ или $P(X \\ge k)$. Её находят сложением отдельных вероятностей или по функции cdf на калькуляторе.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.2, p. 582' },
  },
];
