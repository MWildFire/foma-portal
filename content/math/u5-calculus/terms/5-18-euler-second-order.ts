import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'second-order-reduction-system',
    term: { en: 'reduction to a first-order system', ru: 'сведение к системе первого порядка (reduction to a first-order system)' },
    def: {
      en: 'Writing $v = \\frac{dx}{dt}$ turns $\\frac{d^{2}x}{dt^{2}} = f(x, v, t)$ into the pair $\\frac{dx}{dt} = v$ and $\\frac{dv}{dt} = f(x, v, t)$. Euler\'s method is then applied to both equations.',
      ru: 'Замена $v = \\frac{dx}{dt}$ превращает $\\frac{d^{2}x}{dt^{2}} = f(x, v, t)$ в пару уравнений $\\frac{dx}{dt} = v$ и $\\frac{dv}{dt} = f(x, v, t)$. Затем метод Эйлера применяют к обоим уравнениям.',
    },
    syllabus: '5.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.4, p. 560' },
  },
  {
    id: 'euler-second-order-step',
    term: { en: 'Euler step for a second-order equation', ru: 'шаг Эйлера для уравнения второго порядка (Euler step for a second-order equation)' },
    def: {
      en: 'Each new value of $x$ and $v$ is found from the values at the start of the step, so both variables are updated at the same time. $x$ changes by $h$ times $v$, and $v$ changes by $h$ times $f(x, v, t)$.',
      ru: 'Каждое новое значение $x$ и $v$ находят по значениям в начале шага, поэтому обе величины обновляются одновременно. $x$ меняется на $h$ умножить на $v$, а $v$ — на $h$ умножить на $f(x, v, t)$.',
    },
    syllabus: '5.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.4, p. 560' },
    pitfall: {
      en: 'Using the new $x$ inside the update for $v$ is a different method. Use the old values on the right-hand side.',
      ru: 'Подстановка нового $x$ в формулу для $v$ — уже другой метод. В правой части используйте старые значения.',
    },
  },
  {
    id: 'step-length-h-second-order',
    term: { en: 'second-order step length h', ru: 'длина шага h для уравнения второго порядка (second-order step length h)' },
    def: {
      en: 'The fixed time increment in Euler\'s method, so that after $n$ steps the time is $t_n = nh$. Covering the same interval with a smaller $h$ needs more steps.',
      ru: 'Фиксированный шаг по времени в методе Эйлера: после $n$ шагов время равно $t_n = nh$. Чтобы пройти тот же интервал с меньшим $h$, нужно больше шагов.',
    },
    syllabus: '5.18',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.4, p. 556' },
    pitfall: {
      en: 'The number of steps is the total time divided by $h$. For example, a time of $t = 0.5$ with $h = 0.1$ needs five steps.',
      ru: 'Число шагов равно полному времени, делённому на $h$. Например, при $t = 0{,}5$ и $h = 0{,}1$ нужно пять шагов.',
    },
  },
];
