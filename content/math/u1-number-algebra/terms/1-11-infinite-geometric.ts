import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'sum-to-infinity',
    term: { en: 'sum to infinity', ru: 'сумма бесконечной прогрессии (sum to infinity)' },
    def: {
      en: 'The limit of the partial sums $S_{n}$ as $n$ grows without bound. For a geometric sequence with nonzero first term it exists only when $|r|<1$, and then $S_{\\infty}=\\dfrac{u_{1}}{1-r}$.',
      ru: 'Предел частичных сумм $S_{n}$ при неограниченном росте $n$. Для геометрической прогрессии с ненулевым первым членом он существует только при $|r|<1$, и тогда $S_{\\infty}=\\dfrac{u_{1}}{1-r}$.',
    },
    syllabus: '1.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.1, p. 299' },
    pitfall: {
      en: 'The formula gives no answer when $|r|\\geq 1$. Check the common ratio before you substitute.',
      ru: 'Формула не даёт ответа при $|r|\\geq 1$. Проверьте знаменатель прогрессии до подстановки.',
    },
  },
  {
    id: 'convergent-geometric-series',
    term: { en: 'convergent geometric series', ru: 'сходящийся геометрический ряд (convergent geometric series)' },
    def: {
      en: 'A geometric series whose partial sums approach a finite limit. With $u_{1}\\neq 0$, it converges if and only if $|r|<1$.',
      ru: 'Геометрический ряд, частичные суммы которого приближаются к конечному пределу. При $u_{1}\\neq 0$ он сходится тогда и только тогда, когда $|r|<1$.',
    },
    syllabus: '1.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.1, p. 299' },
    pitfall: {
      en: 'For a nonzero first term, convergence depends on the ratio. At $r=1$ the partial sums have unbounded magnitude (positive or negative according to the first term). The all-zero series is a separate convergent case.',
      ru: 'При ненулевом первом члене сходимость зависит от знаменателя. При $r=1$ модуль частичных сумм неограничен, а знак совпадает со знаком первого члена. Нулевой ряд — отдельный сходящийся случай.',
    },
  },
  {
    id: 'partial-sum-limit',
    term: { en: 'limit of the partial sums', ru: 'предел частичных сумм (limit of the partial sums)' },
    def: {
      en: 'The partial sum $S_{n}=\\dfrac{u_{1}(1-r^{n})}{1-r}$ approaches $S_{\\infty}$ as $n$ increases, because $r^{n}\\to 0$ when $|r|<1$.',
      ru: 'Частичная сумма $S_{n}=\\dfrac{u_{1}(1-r^{n})}{1-r}$ приближается к $S_{\\infty}$ при росте $n$, потому что $r^{n}\\to 0$ при $|r|<1$.',
    },
    syllabus: '1.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.1, p. 299' },
    pitfall: {
      en: 'With a negative ratio the partial sums swing above and below the limit, but they still settle down when $|r|<1$.',
      ru: 'При отрицательном знаменателе частичные суммы колеблются вокруг предела, но всё равно приближаются к нему при $|r|<1$.',
    },
  },
];
