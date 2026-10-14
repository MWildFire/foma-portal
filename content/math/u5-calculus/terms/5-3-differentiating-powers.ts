import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'power-rule-derivative',
    term: { en: 'power rule (for integer n)', ru: 'правило степени для целого n (power rule (for integer n))' },
    def: {
      en: 'For an integer $n$, the derivative of $ax^n$ is $anx^{n-1}$: the power is multiplied into the coefficient and reduced by one. The rule also works for negative integer powers.',
      ru: 'Для целого $n$ производная от $ax^n$ равна $anx^{n-1}$: показатель умножается на коэффициент и уменьшается на единицу. Правило работает и для отрицательных целых степеней.',
    },
    syllabus: '5.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 430' },
    pitfall: {
      en: 'Write a fraction such as $\\dfrac{6}{x^2}$ as $6x^{-2}$ before differentiating. The rule applies to powers of $x$.',
      ru: 'Перед дифференцированием запишите дробь $\\dfrac{6}{x^2}$ как $6x^{-2}$: правило применяется к степеням $x$.',
    },
  },
  {
    id: 'derivative-of-sum-of-terms',
    term: { en: 'derivative of a sum of terms', ru: 'производная суммы членов (derivative of a sum of terms)' },
    def: {
      en: 'The derivative of a sum or difference of terms is the sum or difference of their derivatives, taken term by term. The derivative of a constant term is 0.',
      ru: 'Производная суммы или разности членов равна сумме или разности их производных, взятых почленно. Производная постоянного члена равна 0.',
    },
    syllabus: '5.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 430' },
    pitfall: {
      en: 'A constant term disappears after differentiation: the derivative of -7 is 0, not -7x.',
      ru: 'Постоянный член исчезает после дифференцирования: производная от -7 равна 0, а не -7x.',
    },
  },
];
