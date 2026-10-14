import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'exponent-product-quotient-power',
    tex: 'a^{m}\\times a^{n}=a^{m+n},\\qquad \\dfrac{a^{m}}{a^{n}}=a^{m-n},\\qquad \\left(a^{m}\\right)^{n}=a^{mn}',
    name: { en: 'Laws of integer exponents', ru: 'Законы степеней с целым показателем (Laws of integer exponents)' },
    meaning: {
      en: 'Powers of the same base multiply by adding the exponents, divide by subtracting the exponents, and raise to a power by multiplying the exponents.',
      ru: 'Степени с одним основанием перемножаются сложением показателей, делятся вычитанием показателей и возводятся в степень умножением показателей.',
    },
    when: {
      en: 'Simplifying an expression written as powers of one base, before evaluating it.',
      ru: 'Упрощение выражения, записанного степенями одного основания, перед вычислением.',
    },
    syllabus: '1.5',
    inBooklet: false,
    example: {
      en: 'Example: 2^3 x 2^(-5) = 2^(3 + (-5)) = 2^(-2) = 1/4.',
      ru: 'Пример: 2^3 x 2^(-5) = 2^(3 + (-5)) = 2^(-2) = 1/4.',
    },
  },
  {
    id: 'exponent-zero-negative',
    tex: 'a^{0}=1,\\qquad a^{-n}=\\dfrac{1}{a^{n}},\\qquad a\\neq 0',
    name: { en: 'Zero and negative integer exponents', ru: 'Нулевой и отрицательный целые показатели (Zero and negative integer exponents)' },
    meaning: {
      en: 'A non-zero number to the power 0 is 1. A negative exponent gives the reciprocal of the power with the positive exponent.',
      ru: 'Ненулевое число в нулевой степени равно 1. Отрицательный показатель даёт обратную величину степени с положительным показателем.',
    },
    when: {
      en: 'An expression contains a zero or negative exponent, for example after a smaller power is divided by a larger one.',
      ru: 'В выражении есть нулевой или отрицательный показатель, например после деления меньшей степени на большую.',
    },
    syllabus: '1.5',
    inBooklet: false,
    example: {
      en: 'Example: 5^0 = 1, and 4^(-2) = 1/4^2 = 1/16.',
      ru: 'Пример: 5^0 = 1, и 4^(-2) = 1/4^2 = 1/16.',
    },
  },
  {
    id: 'log-inverse-10-e',
    tex: '10^{\\log_{10}x}=x,\\qquad e^{\\ln x}=x,\\qquad x>0',
    name: { en: 'Logarithm as the inverse of a power', ru: 'Логарифм как обратная операция к степени (Logarithm as the inverse of a power)' },
    meaning: {
      en: 'A logarithm undoes its power: $10^{\\log_{10}x}=x$ and $e^{\\ln x}=x$. Taking $\\log_{10}$ of a power of 10 returns the exponent, and $\\ln$ does the same for a power of e.',
      ru: 'Логарифм отменяет свою степень: $10^{\\log_{10}x}=x$ и $e^{\\ln x}=x$. Логарифм по основанию 10 от степени 10 возвращает показатель, а $\\ln$ делает то же для степени e.',
    },
    when: {
      en: 'Solving $10^{x}=a$ or $e^{x}=b$ for x, or checking a logarithm by raising the base to it. The booklet has the general form $a^{x} = b \\Leftrightarrow x = \\log_a b$ (page 3); the two identities above are its special cases.',
      ru: 'Решение $10^{x}=a$ или $e^{x}=b$ относительно x, а также проверка логарифма возведением основания в найденную степень. В формульной книжке есть общая форма $a^{x} = b \\Leftrightarrow x = \\log_a b$ (стр. 3); два тождества выше — её частные случаи.',
    },
    syllabus: '1.5',
    inBooklet: false,
    example: {
      en: 'Example: if 10^y = 250, then y = log10 250. If e^y = 20, then y = ln 20.',
      ru: 'Пример: если 10^y = 250, то y = log10 250. Если e^y = 20, то y = ln 20.',
    },
  },
];
