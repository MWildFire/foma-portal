import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 4.17',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'poisson-distribution',
    term: { en: 'Poisson distribution', ru: 'распределение Пуассона (Poisson distribution)' },
    def: {
      en: 'A discrete distribution for the number of events in a fixed interval, when the events happen one at a time, independently and at a constant mean rate. Written $X \\sim \\text{Po}(m)$.',
      ru: 'Дискретное распределение числа событий за фиксированный интервал, если события происходят по одному, независимо и с постоянной средней частотой. Записывается $X \\sim \\text{Po}(m)$.',
    },
    syllabus: '4.17',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.binomial-poisson-lab',
  },
  {
    id: 'poisson-parameter',
    term: { en: 'Poisson parameter m', ru: 'параметр m (Poisson parameter)' },
    def: {
      en: 'The average number of events in the interval being modelled. Both the mean and the variance of the distribution equal $m$.',
      ru: 'Среднее число событий в рассматриваемом интервале. И среднее, и дисперсия распределения равны $m$.',
    },
    syllabus: '4.17',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The parameter belongs to one interval. When the interval changes, $m$ must be rescaled.',
      ru: 'Параметр относится к одному интервалу. При смене интервала $m$ нужно пересчитать.',
    },
  },
  {
    id: 'independent-poisson-sum',
    term: { en: 'sum of independent Poisson variables', ru: 'сумма независимых величин Пуассона (sum of independent Poisson variables)' },
    def: {
      en: 'If $X$ and $Y$ are independent Poisson variables with means $m_1$ and $m_2$, then $X + Y$ is Poisson with mean $m_1 + m_2$.',
      ru: 'Если $X$ и $Y$ независимы и их средние равны $m_1$ и $m_2$, то $X + Y$ имеет распределение Пуассона со средним $m_1 + m_2$.',
    },
    syllabus: '4.17',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
