import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.11',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'sum-to-infinity',
    term: { en: 'sum to infinity', ru: 'сумма бесконечной прогрессии (sum to infinity)' },
    def: {
      en: 'The limit of the partial sums $S_{n}$ as $n$ grows without bound. For a geometric sequence it exists only when $|r|<1$, and then $S_{\\infty}=\\dfrac{u_{1}}{1-r}$.',
      ru: 'Предел частичных сумм $S_{n}$ при неограниченном росте $n$. Для геометрической прогрессии он существует только при $|r|<1$, и тогда $S_{\\infty}=\\dfrac{u_{1}}{1-r}$.',
    },
    syllabus: '1.11',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
    pitfall: {
      en: 'Convergence depends only on the common ratio, not on the size of the first term. When $r=1$ the partial sums grow without bound.',
      ru: 'Сходимость зависит только от знаменателя, а не от первого члена. При $r=1$ частичные суммы растут без ограничения.',
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
    src: source,
    pitfall: {
      en: 'With a negative ratio the partial sums swing above and below the limit, but they still settle down when $|r|<1$.',
      ru: 'При отрицательном знаменателе частичные суммы колеблются вокруг предела, но всё равно приближаются к нему при $|r|<1$.',
    },
  },
];
