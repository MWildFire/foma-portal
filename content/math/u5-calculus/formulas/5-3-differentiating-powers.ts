import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'derivative-power-formula',
    tex: '\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(ax^{n}\\right)=anx^{n-1},\\quad n\\in\\mathbb{Z}',
    name: { en: 'Derivative of a power of x', ru: 'Производная степени x' },
    meaning: {
      en: 'For an integer n, the derivative of a x^n is a n x^(n-1): the power comes down as a multiplier and the new power is one less.',
      ru: 'Для целого n производная от a x^n равна a n x^(n-1): показатель выносится множителем, а новый показатель на единицу меньше.',
    },
    when: {
      en: 'Differentiating any term that is a constant times an integer power of x, including negative powers.',
      ru: 'Дифференцирование любого члена вида a x^n с целым n, включая отрицательные степени.',
    },
    syllabus: '5.3',
    inBooklet: true,
    example: {
      en: 'For y = 3x^4 - 2x^(-1): dy/dx = 12x^3 + 2x^(-2).',
      ru: 'Для y = 3x^4 - 2x^(-1): dy/dx = 12x^3 + 2x^(-2).',
    },
  },
  {
    id: 'derivative-sum-formula',
    tex: '\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(u+v)=\\dfrac{\\mathrm{d}u}{\\mathrm{d}x}+\\dfrac{\\mathrm{d}v}{\\mathrm{d}x}',
    name: { en: 'Derivative of a sum', ru: 'Производная суммы' },
    meaning: {
      en: 'The derivative of a sum is the sum of the derivatives, so a sum of power terms is differentiated term by term.',
      ru: 'Производная суммы равна сумме производных, поэтому сумму степенных членов дифференцируют почленно.',
    },
    when: {
      en: 'Differentiating a polynomial or any expression written as a sum or difference of terms.',
      ru: 'Дифференцирование многочлена или любого выражения, записанного как сумма или разность членов.',
    },
    syllabus: '5.3',
    inBooklet: false,
  },
];
