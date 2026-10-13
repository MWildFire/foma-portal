import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'geometric-sum-to-infinity',
    tex: 'S_{\\infty}=\\dfrac{u_{1}}{1-r},\\qquad |r|<1',
    name: { en: 'Sum to infinity of a geometric sequence', ru: 'Сумма бесконечной геометрической прогрессии (Sum to infinity of a geometric sequence)' },
    meaning: {
      en: 'The limit of the partial sums, where u1 is the first term and r the common ratio.',
      ru: 'Предел частичных сумм; u1 — первый член, r — знаменатель прогрессии.',
    },
    when: {
      en: 'Adding infinitely many terms of a geometric sequence whose common ratio satisfies |r| < 1.',
      ru: 'Сложение бесконечного числа членов геометрической прогрессии, знаменатель которой удовлетворяет условию |r| < 1.',
    },
    syllabus: '1.11',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: '0.36 + 0.0036 + 0.000036 + ... has u1 = 0.36 and r = 0.01, so S = 0.36 / 0.99 = 4/11 = 0.3636...',
      ru: '0.36 + 0.0036 + 0.000036 + ... имеет u1 = 0.36 и r = 0.01, поэтому S = 0.36 / 0.99 = 4/11 = 0.3636...',
    },
  },
  {
    id: 'geometric-partial-sum-formula',
    tex: 'S_{n}=\\dfrac{u_{1}\\left(1-r^{n}\\right)}{1-r},\\qquad r\\neq 1',
    name: { en: 'Sum of the first n terms of a geometric sequence', ru: 'Сумма первых n членов геометрической прогрессии (Sum of the first n terms of a geometric sequence)' },
    meaning: {
      en: 'The sum of the first n terms, with u1 the first term and r the common ratio.',
      ru: 'Сумма первых n членов; u1 — первый член, r — знаменатель прогрессии.',
    },
    when: {
      en: 'Summing a finite number of terms, and as the starting point for the limit when |r| < 1.',
      ru: 'Суммирование конечного числа членов и исходная точка для перехода к пределу при |r| < 1.',
    },
    syllabus: '1.11',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With u1 = 2 and r = 3: S3 = 2(1 - 3^3)/(1 - 3) = 2 x 13 = 26, which is 2 + 6 + 18.',
      ru: 'При u1 = 2 и r = 3: S3 = 2(1 - 3^3)/(1 - 3) = 2 × 13 = 26, что равно 2 + 6 + 18.',
    },
  },
  {
    id: 'geometric-tail-remainder',
    tex: 'S_{\\infty}-S_{n}=\\dfrac{u_{1}\\,r^{n}}{1-r},\\qquad |r|<1',
    name: { en: 'Remainder after n terms of a convergent geometric series', ru: 'Остаток сходящейся геометрической прогрессии после n членов (Remainder after n terms of a convergent geometric series)' },
    meaning: {
      en: 'The amount still to be added after the first n terms.',
      ru: 'Сумма, которую ещё нужно добавить после первых n членов.',
    },
    when: {
      en: 'Finding how many terms are needed to get within a given distance of the sum to infinity.',
      ru: 'Поиск числа членов, при котором частичная сумма отличается от суммы до бесконечности не более чем на заданную величину.',
    },
    syllabus: '1.11',
    inBooklet: false,
    example: {
      en: 'With u1 = 1 and r = 0.5: S = 2 and S3 = 1.75, so the remainder after 3 terms is 0.25.',
      ru: 'При u1 = 1 и r = 0.5: S = 2 и S3 = 1.75, поэтому остаток после 3 членов равен 0.25.',
    },
  },
];
