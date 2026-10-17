import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'standard-form-representation',
    tex: 'x=a\\times 10^{k},\\quad 1\\le a<10,\\ k\\in\\mathbb{Z}',
    name: { en: 'Standard form', ru: 'Стандартный вид (Standard form)' },
    meaning: {
      en: 'Any positive number can be written as a coefficient $a$ with $1 \\le a < 10$, multiplied by an integer power of ten.',
      ru: 'Любое положительное число можно записать как коэффициент $a$ при $1 \\le a < 10$, умноженный на целую степень десяти.',
    },
    when: {
      en: 'Writing very large or very small quantities, and comparing their sizes.',
      ru: 'Запись очень больших и очень малых величин и сравнение их размеров.',
    },
    syllabus: '1.1',
    inBooklet: false,
    example: {
      en: 'The speed of light in vacuum is about 300000000 m/s, which is 3 × 10^8 m/s in standard form.',
      ru: 'Скорость света в вакууме примерно 300000000 м/с, что в стандартном виде равно 3 × 10^8 м/с.',
    },
  },
  {
    id: 'standard-form-product-quotient',
    tex: '(a_1\\times 10^{m})\\times(a_2\\times 10^{n})=(a_1a_2)\\times 10^{m+n}',
    name: { en: 'Multiplying in standard form', ru: 'Умножение в стандартном виде (Multiplying in standard form)' },
    meaning: {
      en: 'Multiply the numbers $a_1$ and $a_2$ and add the powers of ten. If $a_1a_2 \\ge 10$, divide by 10 and add 1 to the power.',
      ru: 'Перемножьте числа $a_1$ и $a_2$ и сложите степени десяти. Если $a_1a_2 \\ge 10$, разделите на 10 и прибавьте 1 к степени.',
    },
    when: {
      en: 'Multiplying or dividing two numbers given in standard form.',
      ru: 'Умножение или деление двух чисел, записанных в стандартном виде.',
    },
    syllabus: '1.1',
    inBooklet: false,
    example: {
      en: '(2 × 10^4) × (3 × 10^5) = 6 × 10^9. Division: (6 × 10^9) ÷ (2 × 10^4) = 3 × 10^5.',
      ru: '(2 × 10^4) × (3 × 10^5) = 6 × 10^9. Деление: (6 × 10^9) ÷ (2 × 10^4) = 3 × 10^5.',
    },
  },
];
