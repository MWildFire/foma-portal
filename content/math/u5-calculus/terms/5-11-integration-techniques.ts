import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'integration-by-inspection',
    term: { en: 'integration by inspection', ru: 'интегрирование подбором (integration by inspection)' },
    def: {
      en: 'Finding an antiderivative by recognising a function whose derivative is the integrand, then adjusting the constant factor. It works when the integrand is the derivative of a standard function, such as $x^{n}$ or $e^{x}$, up to a constant multiple.',
      ru: 'Нахождение первообразной по виду подынтегральной функции: подбирается функция, производная которой равна ей, затем исправляется постоянный множитель. Метод работает, когда подынтегральная функция является производной стандартной функции, например $x^{n}$ или $e^{x}$, с точностью до постоянного множителя.',
    },
    syllabus: '5.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.2, p. 488' },
    pitfall: {
      en: 'Check the answer by differentiating it; a wrong constant multiple is the most common slip.',
      ru: 'Проверяйте ответ дифференцированием; ошибка в постоянном множителе — самая частая.',
    },
  },
  {
    id: 'integration-by-substitution',
    term: { en: 'integration by substitution', ru: 'интегрирование подстановкой (integration by substitution)' },
    def: {
      en: 'For an integrand of the form $f(g(x))\\,g\'(x)$, put $u = g(x)$ and $du = g\'(x)\\,dx$, so that $\\int f(g(x))\\,g\'(x)\\,dx = \\int f(u)\\,du$.',
      ru: 'Для подынтегральной функции вида $f(g(x))\\,g\'(x)$ вводят $u = g(x)$ и $du = g\'(x)\\,dx$, поэтому $\\int f(g(x))\\,g\'(x)\\,dx = \\int f(u)\\,du$.',
    },
    syllabus: '5.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.2, p. 492' },
    pitfall: {
      en: 'In a definite integral, change the limits to values of $u$ at the same time, or substitute back to $x$ before using the original limits.',
      ru: 'В определённом интеграле одновременно меняйте пределы на значения $u$, или вернитесь к переменной $x$ перед подстановкой исходных пределов.',
    },
  },
  {
    id: 'constant-of-integration',
    term: { en: 'constant of integration', ru: 'постоянная интегрирования (constant of integration)' },
    def: {
      en: 'The arbitrary constant $C$ added to an indefinite integral. Antiderivatives of the same function differ only by $C$; a definite integral has no $C$.',
      ru: 'Произвольная постоянная $C$, добавляемая к неопределённому интегралу. Первообразные одной и той же функции отличаются только на $C$; у определённого интеграла $C$ нет.',
    },
    syllabus: '5.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.2, p. 496' },
  },
];
