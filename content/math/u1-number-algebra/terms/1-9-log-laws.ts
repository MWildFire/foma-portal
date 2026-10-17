import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'logarithm-definition',
    term: { en: 'logarithm to base a', ru: 'логарифм по основанию a (logarithm to base a)' },
    def: {
      en: 'For $a>0$, $a\\neq 1$ and $x>0$, $\\log_a x=y$ means $a^{y}=x$. The logarithm is the power to which the base $a$ must be raised to give $x$.',
      ru: 'При $a>0$, $a\\neq 1$ и $x>0$ запись $\\log_a x=y$ означает $a^{y}=x$. Логарифм — это показатель степени, в которую нужно возвести основание $a$, чтобы получить $x$.',
    },
    syllabus: '1.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 320' },
    pitfall: {
      en: 'The argument must be positive: a logarithm of zero or of a negative number does not exist among the real numbers.',
      ru: 'Аргумент должен быть положительным: логарифм нуля или отрицательного числа не существует среди действительных чисел.',
    },
  },
  {
    id: 'log-product-law',
    term: { en: 'product law of logarithms', ru: 'свойство логарифма произведения (product law of logarithms)' },
    def: {
      en: 'For $a>0$, $a\\neq 1$ and $x,y>0$: $\\log_a(xy)=\\log_a x+\\log_a y$. The logarithm of a product is the sum of the logarithms.',
      ru: 'При $a>0$, $a\\neq 1$ и $x,y>0$: $\\log_a(xy)=\\log_a x+\\log_a y$. Логарифм произведения равен сумме логарифмов.',
    },
    syllabus: '1.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 322' },
    pitfall: {
      en: 'The law needs a product inside the logarithm. $\\log_a(x+y)$ does not split into $\\log_a x+\\log_a y$.',
      ru: 'Правило требует произведения внутри логарифма. $\\log_a(x+y)$ не раскладывается на $\\log_a x+\\log_a y$.',
    },
  },
  {
    id: 'log-quotient-law',
    term: { en: 'quotient law of logarithms', ru: 'свойство логарифма частного (quotient law of logarithms)' },
    def: {
      en: 'For $a>0$, $a\\neq 1$ and $x,y>0$: $\\log_a\\left(\\dfrac{x}{y}\\right)=\\log_a x-\\log_a y$. The logarithm of a quotient is the difference of the logarithms.',
      ru: 'При $a>0$, $a\\neq 1$ и $x,y>0$: $\\log_a\\left(\\dfrac{x}{y}\\right)=\\log_a x-\\log_a y$. Логарифм частного равен разности логарифмов.',
    },
    syllabus: '1.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 322' },
    pitfall: {
      en: 'There is no general quotient-of-logs identity of that form. For example, log₂8 / log₂4 = 3/2, whereas log₂(8/4) = 1. A quotient of logarithms also requires its denominator to be nonzero.',
      ru: 'Такого общего тождества для частного логарифмов нет. Например, log₂8 / log₂4 = 3/2, тогда как log₂(8/4) = 1. Кроме того, знаменатель частного логарифмов должен быть ненулевым.',
    },
  },
  {
    id: 'log-power-law',
    term: { en: 'power law of logarithms', ru: 'свойство логарифма степени (power law of logarithms)' },
    def: {
      en: 'For $a>0$, $a\\neq 1$, $x>0$ and any real $m$: $\\log_a(x^{m})=m\\log_a x$. The exponent moves in front as a multiplier.',
      ru: 'При $a>0$, $a\\neq 1$, $x>0$ и любом действительном $m$: $\\log_a(x^{m})=m\\log_a x$. Показатель выносится перед логарифмом в качестве множителя.',
    },
    syllabus: '1.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 322' },
    pitfall: {
      en: 'The power must sit inside the logarithm: $(\\log_2 8)^{2}=9$, but $\\log_2(8^{2})=6$.',
      ru: 'Степень должна стоять внутри логарифма: $(\\log_2 8)^{2}=9$, а $\\log_2(8^{2})=6$.',
    },
  },
];
