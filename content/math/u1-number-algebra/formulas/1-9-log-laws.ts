import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'log-product-rule',
    tex: '\\log_{a}(xy)=\\log_{a}x+\\log_{a}y',
    name: { en: 'Product law of logarithms', ru: 'Правило произведения логарифмов (Product law of logarithms)' },
    meaning: {
      en: 'The logarithm of a product equals the sum of the logarithms of its factors.',
      ru: 'Логарифм произведения равен сумме логарифмов множителей.',
    },
    when: {
      en: 'Combining a sum of logarithms into one logarithm, or splitting a product inside a logarithm (a > 0, a ≠ 1, x, y > 0).',
      ru: 'Объединение суммы логарифмов в один логарифм или разложение произведения внутри логарифма (a > 0, a ≠ 1, x, y > 0).',
    },
    syllabus: '1.9',
    inBooklet: false,
    example: {
      en: 'log2(12) = log2(3) + log2(4), because 3 x 4 = 12.',
      ru: 'log2(12) = log2(3) + log2(4), так как 3 × 4 = 12.',
    },
  },
  {
    id: 'log-quotient-rule',
    tex: '\\log_{a}\\left(\\dfrac{x}{y}\\right)=\\log_{a}x-\\log_{a}y',
    name: { en: 'Quotient law of logarithms', ru: 'Правило частного логарифмов (Quotient law of logarithms)' },
    meaning: {
      en: 'The logarithm of a quotient equals the logarithm of the numerator minus the logarithm of the denominator.',
      ru: 'Логарифм частного равен логарифму числителя минус логарифм знаменателя.',
    },
    when: {
      en: 'Splitting a quotient inside a logarithm, or combining a difference of logarithms (a > 0, a ≠ 1, x, y > 0).',
      ru: 'Разложение частного внутри логарифма или объединение разности логарифмов (a > 0, a ≠ 1, x, y > 0).',
    },
    syllabus: '1.9',
    inBooklet: false,
    example: {
      en: 'log2(24) - log2(3) = log2(8) = 3, because 24 / 3 = 8.',
      ru: 'log2(24) - log2(3) = log2(8) = 3, так как 24 / 3 = 8.',
    },
  },
  {
    id: 'log-power-rule',
    tex: '\\log_{a}\\left(x^{m}\\right)=m\\log_{a}x',
    name: { en: 'Power law of logarithms', ru: 'Правило степени логарифмов (Power law of logarithms)' },
    meaning: {
      en: 'The exponent m of the argument moves in front of the logarithm as a multiplier.',
      ru: 'Показатель m аргумента выносится перед логарифмом множителем.',
    },
    when: {
      en: 'Bringing a coefficient inside or outside a logarithm, and solving exponential equations (x > 0, a > 0, a ≠ 1).',
      ru: 'Внесение коэффициента в логарифм или вынесение его из логарифма, а также решение показательных уравнений (x > 0, a > 0, a ≠ 1).',
    },
    syllabus: '1.9',
    inBooklet: false,
    example: {
      en: 'log2(8^2) = 2 log2(8) = 2 x 3 = 6, which is not (log2 8)^2 = 9.',
      ru: 'log2(8^2) = 2 log2(8) = 2 × 3 = 6, что не равно (log2 8)^2 = 9.',
    },
  },
];
