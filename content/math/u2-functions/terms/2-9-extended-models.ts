import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'half-life-model',
    term: { en: 'half-life', ru: 'период полураспада (half-life)' },
    def: {
      en: 'For exponential decay $N=N_0e^{-kt}$ with $N_0>0$ and $k>0$, the time $T$ after which the amount has halved. It equals $T=\\dfrac{\\ln 2}{k}$ and does not depend on $N_0$.',
      ru: 'Для экспоненциального убывания $N=N_0e^{-kt}$ при $N_0>0$ и $k>0$ — время $T$, за которое величина уменьшается вдвое. Оно равно $T=\\dfrac{\\ln 2}{k}$ и не зависит от $N_0$.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.3, p. 315' },
    pitfall: {
      en: 'The half-life is $\\dfrac{\\ln 2}{k}$, not $k$. A larger $k$ gives a shorter half-life.',
      ru: 'Период полураспада равен $\\dfrac{\\ln 2}{k}$, а не $k$. Чем больше $k$, тем короче период полураспада.',
    },
  },
  {
    id: 'logistic-model',
    term: { en: 'logistic model', ru: 'логистическая модель (logistic model)' },
    def: {
      en: 'A model $y=\\dfrac{L}{1+Ce^{-kx}}$ with $L>0$, $C>0$ and $k>0$, whose graph is S-shaped. It grows fastest near its middle and levels off at the upper limit $L$.',
      ru: 'Модель $y=\\dfrac{L}{1+Ce^{-kx}}$, при $L>0$, $C>0$ и $k>0$: её график имеет форму буквы S. Величина растёт быстрее всего в середине и выходит на верхний предел $L$.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.5, p. 329' },
    sim: 'math.logistic-loglog-lab',
  },
  {
    id: 'carrying-capacity',
    term: { en: 'carrying capacity', ru: 'предельная величина (carrying capacity)' },
    def: {
      en: 'In a logistic model, the upper limit $L$ that $y$ approaches as $x$ grows. It is the horizontal asymptote $y=L$.',
      ru: 'В логистической модели — верхний предел $L$, к которому стремится $y$ при росте $x$. Это горизонтальная асимптота $y=L$.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7 summary, p. 332' },
    pitfall: {
      en: 'The limit $L$ is not the starting value. The starting value is $\\dfrac{L}{1+C}$, which is below $L$.',
      ru: 'Предел $L$ — не начальное значение. Начальное значение равно $\\dfrac{L}{1+C}$ и меньше $L$.',
    },
  },
  {
    id: 'piecewise-model',
    term: { en: 'piecewise model', ru: 'кусочно заданная модель (piecewise model)' },
    def: {
      en: 'A model with different rules on specified parts of its domain. State which endpoints are included. A jump is allowed; continuity is an additional requirement only when specified or justified by the context.',
      ru: 'Модель с разными правилами на указанных частях области определения. Укажи принадлежность граничных точек. Скачок допустим; непрерывность — дополнительное условие, которое должно быть задано или обосновано контекстом.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'web', title: 'OpenStax Calculus Volume 1', locator: '§1.2, piecewise-defined functions and domains', url: 'https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions' },
    pitfall: {
      en: 'Every input must have one output. Overlapping rules must agree; a simple alternative is non-overlapping intervals, for example $0 \\le t < 3$ and $t \\ge 3$.',
      ru: 'Каждому аргументу соответствует одно значение. На пересечении областей правила должны согласоваться; проще задать промежутки без наложения, например $0 \\le t < 3$ и $t \\ge 3$.',
    },
  },
];
