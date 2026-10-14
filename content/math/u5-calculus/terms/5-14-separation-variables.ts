import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'de-first-order-equation',
    term: { en: 'first-order differential equation', ru: 'дифференциальное уравнение первого порядка (first-order differential equation)' },
    def: {
      en: 'An equation that links an unknown function $y(x)$ with its first derivative $\\dfrac{dy}{dx}$. Its general solution contains one arbitrary constant, which a condition such as $y(0)=3$ fixes.',
      ru: 'Уравнение, связывающее неизвестную функцию $y(x)$ с её первой производной $\\dfrac{dy}{dx}$. Общее решение содержит одну произвольную постоянную, которую задаёт условие, например $y(0)=3$.',
    },
    syllabus: '5.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.4, p. 515' },
  },
  {
    id: 'de-separation-of-variables',
    term: { en: 'separation of variables', ru: 'разделение переменных (separation of variables)' },
    def: {
      en: 'A method for $\\dfrac{dy}{dx}=f(x)\\,g(y)$: rewrite it as $\\dfrac{1}{g(y)}\\,dy=f(x)\\,dx$, integrate both sides and add one constant. Then solve for $y$.',
      ru: 'Метод решения $\\dfrac{dy}{dx}=f(x)\\,g(y)$: уравнение переписывают в виде $\\dfrac{1}{g(y)}\\,dy=f(x)\\,dx$, интегрируют обе части и добавляют одну постоянную. Затем выражают $y$.',
    },
    syllabus: '5.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.4, p. 515' },
    pitfall: {
      en: 'Dividing by $g(y)$ can lose constant solutions such as $y=0$. Check them separately.',
      ru: 'Деление на $g(y)$ может потерять постоянные решения, например $y=0$. Проверьте их отдельно.',
    },
  },
  {
    id: 'de-initial-condition',
    term: { en: 'initial condition', ru: 'начальное условие (initial condition)' },
    def: {
      en: 'A known value of the solution at a given point, such as $T(0)=90$. It is used to find the arbitrary constant in the general solution.',
      ru: 'Известное значение решения в заданной точке, например $T(0)=90$. С его помощью находят произвольную постоянную общего решения.',
    },
    syllabus: '5.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.4, p. 515' },
  },
];
