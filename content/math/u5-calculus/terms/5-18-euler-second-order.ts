import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 5.18',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

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
    src: source,
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
    src: source,
    pitfall: {
      en: 'Using the new $x$ inside the update for $v$ is a different method. Use the old values on the right-hand side.',
      ru: 'Подстановка нового $x$ в формулу для $v$ — уже другой метод. В правой части используйте старые значения.',
    },
  },
  {
    id: 'step-length-h-second-order',
    term: { en: 'step length h', ru: 'длина шага h (step length h)' },
    def: {
      en: 'The fixed time increment in Euler\'s method, so that after $n$ steps the time is $t_n = nh$. A smaller $h$ gives a more accurate result over the same interval, but needs more steps.',
      ru: 'Фиксированный шаг по времени в методе Эйлера: после $n$ шагов время равно $t_n = nh$. Меньший $h$ даёт более точный результат на том же интервале, но требует больше шагов.',
    },
    syllabus: '5.18',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The number of steps is the total time divided by $h$. For example, a time of $t = 0.5$ with $h = 0.1$ needs five steps.',
      ru: 'Число шагов равно полному времени, делённому на $h$. Например, при $t = 0{,}5$ и $h = 0{,}1$ нужно пять шагов.',
    },
  },
];
