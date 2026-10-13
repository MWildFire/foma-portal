import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'rational-power-definition',
    tex: 'a^{\\frac{m}{n}}=\\sqrt[n]{a^{m}}=\\left(\\sqrt[n]{a}\\right)^{m},\\quad a>0,\\; n>0',
    name: { en: 'Rational exponent', ru: 'Рациональный показатель степени (Rational exponent)' },
    meaning: {
      en: 'A fractional power is the nth root combined with an integer power.',
      ru: 'Степень с дробным показателем — это корень n-й степени, возведённый в целую степень.',
    },
    when: {
      en: 'Changing between root form and fractional-power form for a positive base.',
      ru: 'Переход между записью с корнем и записью с дробным показателем для положительного основания.',
    },
    syllabus: '1.10',
    inBooklet: false,
    example: {
      en: '8^(2/3) = (cube root of 8)^2 = 2^2 = 4.',
      ru: '8^(2/3) = (кубический корень из 8)^2 = 2^2 = 4.',
    },
  },
  {
    id: 'rational-power-laws',
    tex: 'a^{p}\\,a^{q}=a^{p+q},\\qquad \\dfrac{a^{p}}{a^{q}}=a^{p-q},\\qquad \\left(a^{p}\\right)^{q}=a^{pq},\\qquad a>0',
    name: { en: 'Laws of exponents for rational powers', ru: 'Законы степеней для рациональных показателей (Laws of exponents for rational powers)' },
    meaning: {
      en: 'The laws of exponents for whole numbers hold for rational p and q when the base is positive.',
      ru: 'Законы степеней для целых показателей выполняются и для рациональных p и q при положительном основании.',
    },
    when: {
      en: 'Multiplying, dividing or raising to a power expressions with fractional exponents.',
      ru: 'Умножение, деление и возведение в степень выражений с дробными показателями.',
    },
    syllabus: '1.10',
    inBooklet: false,
    example: {
      en: 'x^(3/4) x x^(-1/2) = x^(1/4), since 3/4 - 1/2 = 1/4.',
      ru: 'x^(3/4) × x^(-1/2) = x^(1/4), так как 3/4 - 1/2 = 1/4.',
    },
  },
  {
    id: 'rational-power-negative',
    tex: 'a^{-p}=\\dfrac{1}{a^{p}},\\qquad a^{0}=1,\\quad a\\neq 0',
    name: { en: 'Negative and zero exponents', ru: 'Отрицательный и нулевой показатели (Negative and zero exponents)' },
    meaning: {
      en: 'A negative exponent gives the reciprocal of the power with the positive exponent; any non-zero base to the power 0 is 1.',
      ru: 'Отрицательный показатель даёт обратную величину степени с положительным показателем; любое ненулевое основание в нулевой степени равно 1.',
    },
    when: {
      en: 'Removing negative exponents before simplifying or evaluating.',
      ru: 'Устранение отрицательных показателей перед упрощением или вычислением.',
    },
    syllabus: '1.10',
    inBooklet: false,
    example: {
      en: '(27/8)^(-2/3) = (8/27)^(2/3) = 4/9.',
      ru: '(27/8)^(-2/3) = (8/27)^(2/3) = 4/9.',
    },
  },
];
