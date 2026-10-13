import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 2.9',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'half-life-model',
    term: { en: 'half-life', ru: 'период полураспада (half-life)' },
    def: {
      en: 'For exponential decay $N=N_0e^{-kt}$, the time $T$ after which the amount has halved. It equals $T=\\dfrac{\\ln 2}{k}$ and does not depend on $N_0$.',
      ru: 'Для экспоненциального убывания $N=N_0e^{-kt}$ — время $T$, за которое величина уменьшается вдвое. Оно равно $T=\\dfrac{\\ln 2}{k}$ и не зависит от $N_0$.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The half-life is $\\dfrac{\\ln 2}{k}$, not $k$. A larger $k$ gives a shorter half-life.',
      ru: 'Период полураспада равен $\\dfrac{\\ln 2}{k}$, а не $k$. Чем больше $k$, тем короче период полураспада.',
    },
  },
  {
    id: 'logistic-model',
    term: { en: 'logistic model', ru: 'логистическая модель (logistic model)' },
    def: {
      en: 'A model $y=\\dfrac{L}{1+Ce^{-kx}}$ whose graph is S-shaped. It grows fastest near its middle and levels off at the upper limit $L$.',
      ru: 'Модель $y=\\dfrac{L}{1+Ce^{-kx}}$, график которой имеет форму буквы S. Величина растёт быстрее всего в середине и выходит на верхний предел $L$.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
    pitfall: {
      en: 'The limit $L$ is not the starting value. The starting value is $\\dfrac{L}{1+C}$, which is below $L$.',
      ru: 'Предел $L$ — не начальное значение. Начальное значение равно $\\dfrac{L}{1+C}$ и меньше $L$.',
    },
  },
  {
    id: 'piecewise-model',
    term: { en: 'piecewise model', ru: 'кусочно заданная модель (piecewise model)' },
    def: {
      en: 'A model that uses a different formula on each interval of its domain. It is continuous when the formulas give the same value at each shared boundary.',
      ru: 'Модель, которая использует разную формулу на каждом промежутке области определения. Она непрерывна, если формулы дают одинаковое значение в каждой общей границе.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Write the interval conditions so that no value belongs to two pieces, for example $0 \\le t < 3$ and $t \\ge 3$.',
      ru: 'Записывайте условия промежутков так, чтобы ни одно значение не попадало в два куска, например $0 \\le t < 3$ и $t \\ge 3$.',
    },
  },
];
