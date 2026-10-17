import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'own' as const,
  title: 'Author explanation; a standalone textbook page has not been verified / Авторское объяснение; отдельная страница учебника не подтверждена',
};

export const terms: Term[] = [
  {
    id: 'trapezoidal-rule',
    term: { en: 'trapezoidal rule', ru: 'формула трапеций (trapezoidal rule)' },
    def: {
      en: 'A way to approximate a definite integral. The interval is split into equal strips, and the area under the curve is replaced by trapezia whose top sides are chords of the curve.',
      ru: 'Способ приближённо вычислить определённый интеграл. Отрезок делят на равные полоски, а площадь под кривой заменяют трапециями, верхние стороны которых — хорды кривой.',
    },
    syllabus: '5.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.1, p. 484' },
    pitfall: {
      en: 'Every inner ordinate is counted twice, but only the two end ordinates are counted once.',
      ru: 'Каждая внутренняя ордината учитывается дважды, а только крайние — один раз.',
    },
    sim: 'math.trapezoid-lab',
  },
  {
    id: 'trapezoidal-strip-width',
    term: { en: 'strip width h', ru: 'ширина полоски h (strip width h)' },
    def: {
      en: 'The width of each of the $n$ equal strips, $h = \\dfrac{b-a}{n}$, on the interval from $a$ to $b$. The strips need $n + 1$ ordinates, at $x = a, a + h, \\dots, b$.',
      ru: 'Ширина каждой из $n$ равных полосок, $h = \\dfrac{b-a}{n}$, на отрезке от $a$ до $b$. Полоски требуют $n + 1$ ординат, в точках $x = a, a + h, \\dots, b$.',
    },
    syllabus: '5.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.1, p. 484' },
    pitfall: {
      en: 'Dividing by $n - 1$ is wrong: $n$ strips always need $n + 1$ ordinates.',
      ru: 'Деление на $n - 1$ неверно: $n$ полосок всегда требуют $n + 1$ ординат.',
    },
  },
  {
    id: 'trapezoidal-error-sign',
    term: { en: 'error of the trapezoidal estimate', ru: 'погрешность формулы трапеций (error of the trapezoidal estimate)' },
    def: {
      en: 'The error is $E = T_{n} - I$: the estimate minus the exact integral. If $f\'\'(x) > 0$ on the interval, the estimate is an overestimate; if $f\'\'(x) < 0$, it is an underestimate.',
      ru: 'Погрешность $E = T_{n} - I$: оценка минус точное значение интеграла. Если $f\'\'(x) > 0$ на отрезке, оценка завышена; если $f\'\'(x) < 0$, она занижена.',
    },
    syllabus: '5.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The sign follows the curvature, not the height of the curve: a high curve can still give an underestimate.',
      ru: 'Знак определяет кривизна графика, а не его высота: высокий график может дать занижение.',
    },
  },
];
