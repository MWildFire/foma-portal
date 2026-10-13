import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 5.10',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'second-derivative',
    term: { en: 'second derivative', ru: 'вторая производная (second derivative)' },
    def: {
      en: 'The derivative of the first derivative: $f\'\'(x)$ is found by differentiating $f\'(x)$ again. For $y = f(x)$ it is written $\\dfrac{d^{2}y}{dx^{2}}$, and it gives the rate of change of the gradient.',
      ru: 'Производная от первой производной: $f\'\'(x)$ получают, дифференцируя $f\'(x)$ ещё раз. При $y = f(x)$ её записывают как $\\dfrac{d^{2}y}{dx^{2}}$, она показывает скорость изменения градиента.',
    },
    syllabus: '5.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Differentiate $f\'(x)$, not $f(x)$. One differentiation of $f(x)$ gives the gradient function, not the second derivative.',
      ru: 'Дифференцируйте $f\'(x)$, а не $f(x)$. Однократное дифференцирование $f(x)$ даёт функцию градиента, а не вторую производную.',
    },
  },
  {
    id: 'second-derivative-test',
    term: { en: 'second derivative test', ru: 'признак второй производной (second derivative test)' },
    def: {
      en: 'A test for a stationary point $x = a$, where $f\'(a) = 0$: if $f\'\'(a) > 0$ the point is a local minimum, and if $f\'\'(a) < 0$ it is a local maximum. If $f\'\'(a) = 0$ the test is inconclusive.',
      ru: 'Признак для стационарной точки $x = a$, где $f\'(a) = 0$: при $f\'\'(a) > 0$ точка является локальным минимумом, при $f\'\'(a) < 0$ локальным максимумом. При $f\'\'(a) = 0$ признак ничего не решает.',
    },
    syllabus: '5.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The test applies only where $f\'(a) = 0$. Confirm that first, then read the sign of $f\'\'(a)$.',
      ru: 'Признак работает только там, где $f\'(a) = 0$. Сначала проверьте это, затем определите знак $f\'\'(a)$.',
    },
  },
  {
    id: 'concavity',
    term: { en: 'concavity', ru: 'выпуклость (concavity)' },
    def: {
      en: 'The bend of a curve: it is concave up where $f\'\'(x) > 0$, so the gradient is increasing, and concave down where $f\'\'(x) < 0$, so the gradient is decreasing.',
      ru: 'Изгиб кривой: кривая выпукла вниз (concave up) там, где $f\'\'(x) > 0$, и градиент растёт; выпукла вверх (concave down) там, где $f\'\'(x) < 0$, и градиент убывает.',
    },
    syllabus: '5.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Concavity describes the bend of the curve, not whether the function is increasing or decreasing.',
      ru: 'Выпуклость описывает изгиб кривой, а не то, возрастает функция или убывает.',
    },
  },
];
