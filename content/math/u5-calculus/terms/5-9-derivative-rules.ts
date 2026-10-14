import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'chain-rule-derivative',
    term: { en: 'chain rule', ru: 'правило цепочки (chain rule)' },
    def: {
      en: 'For a function of a function $y = f(g(x))$, the derivative is the derivative of the outer function, evaluated at the inner function, times the derivative of the inner function: $\\dfrac{dy}{dx} = f\'(g(x))\\,g\'(x)$.',
      ru: 'Для сложной функции $y = f(g(x))$ производная равна производной внешней функции, взятой в точке $g(x)$, умноженной на производную внутренней функции: $\\dfrac{dy}{dx} = f\'(g(x))\\,g\'(x)$.',
    },
    syllabus: '5.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.2, p. 443' },
    pitfall: {
      en: 'The factor for the inner function is easy to forget: multiply by the derivative of the inside as well.',
      ru: 'Легко забыть множитель для внутренней функции: умножайте и на её производную.',
    },
  },
  {
    id: 'product-rule-derivative',
    term: { en: 'product rule', ru: 'правило произведения (product rule)' },
    def: {
      en: 'For a product $y = uv$ of two functions of $x$, the derivative is $u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}$: each factor is differentiated in turn while the other is kept.',
      ru: 'Для произведения $y = uv$ двух функций от $x$ производная равна $u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}$: по очереди дифференцируется каждый множитель, а другой сохраняется.',
    },
    syllabus: '5.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.2, p. 445' },
    pitfall: {
      en: 'The derivative of a product is not the product of the derivatives.',
      ru: 'Производная произведения не равна произведению производных.',
    },
  },
  {
    id: 'quotient-rule-derivative',
    term: { en: 'quotient rule', ru: 'правило частного (quotient rule)' },
    def: {
      en: 'For a quotient $y = \\dfrac{u}{v}$ with $v \\neq 0$, the derivative is $\\dfrac{v\\dfrac{du}{dx} - u\\dfrac{dv}{dx}}{v^{2}}$.',
      ru: 'Для частного $y = \\dfrac{u}{v}$ при $v \\neq 0$ производная равна $\\dfrac{v\\dfrac{du}{dx} - u\\dfrac{dv}{dx}}{v^{2}}$.',
    },
    syllabus: '5.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.2, p. 446' },
    pitfall: {
      en: 'The order matters: the numerator starts with v times the derivative of u, and subtracts u times the derivative of v. Swapping the two terms changes the sign of the answer.',
      ru: 'Порядок важен: в числителе сначала идёт $v\\dfrac{du}{dx}$, затем вычитается $u\\dfrac{dv}{dx}$. Перестановка меняет знак ответа.',
    },
  },
  {
    id: 'related-rates-change',
    term: { en: 'related rates', ru: 'связанные скорости (related rates)' },
    def: {
      en: 'Rates of change of quantities that are linked by a relation and all depend on time, such as the volume and the radius of a balloon. The relation is differentiated with respect to time, using the chain rule.',
      ru: 'Скорости изменения величин, связанных уравнением и зависящих от времени, например объёма и радиуса шара. Уравнение дифференцируют по времени по правилу цепочки.',
    },
    syllabus: '5.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.3, p. 462' },
    pitfall: {
      en: 'Substitute the known values after differentiating, not before.',
      ru: 'Подставляйте известные значения после дифференцирования, а не до него.',
    },
  },
];
