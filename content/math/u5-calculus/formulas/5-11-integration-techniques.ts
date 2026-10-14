import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'integral-power-rule',
    tex: '\\int x^{n}\\,dx=\\dfrac{x^{n+1}}{n+1}+C,\\quad n\\neq -1',
    name: { en: 'Integral of a power of x', ru: 'Интеграл степени x (Integral of a power of x)' },
    meaning: {
      en: 'The indefinite integral of x^n is x^(n+1)/(n+1) plus the constant C, for any rational n except n = -1.',
      ru: 'Неопределённый интеграл от x^n равен x^(n+1)/(n+1) плюс постоянная C, для любого рационального n, кроме n = -1.',
    },
    when: {
      en: 'Integrating a power of x, including negative and fractional powers such as x^(-3) or x^(1/2).',
      ru: 'Интегрирование степени x, включая отрицательные и дробные степени, например x^(-3) или x^(1/2).',
    },
    syllabus: '5.11',
    inBooklet: true,
    example: {
      en: 'The integral of x^3 is x^4/4 + C. For n = -1 use the integral of 1/x, which is ln|x| + C.',
      ru: 'Интеграл от x^3 равен x^4/4 + C. При n = -1 используется интеграл от 1/x, равный ln|x| + C.',
    },
  },
  {
    id: 'integral-substitution-rule',
    tex: '\\int f(g(x))\\,g\'(x)\\,dx=\\int f(u)\\,du,\\quad u=g(x)',
    name: { en: 'Substitution rule', ru: 'Правило подстановки (Substitution rule)' },
    meaning: {
      en: 'When the integrand is f(g(x)) times g\'(x), replace g(x) by u and g\'(x) dx by du.',
      ru: 'Если подынтегральная функция равна f(g(x)), умноженной на g\'(x), заменяйте g(x) на u, а g\'(x) dx на du.',
    },
    when: {
      en: 'The integrand contains a composite function and the derivative of its inner function, possibly up to a constant factor.',
      ru: 'Подынтегральная функция содержит сложную функцию и производную её внутренней функции, возможно с постоянным множителем.',
    },
    syllabus: '5.11',
    inBooklet: false,
  },
  {
    id: 'definite-integral-substitution',
    tex: '\\int_{a}^{b} f(g(x))\\,g\'(x)\\,dx=\\int_{g(a)}^{g(b)} f(u)\\,du',
    name: { en: 'Substitution in a definite integral', ru: 'Подстановка в определённом интеграле (Substitution in a definite integral)' },
    meaning: {
      en: 'The limits a and b become g(a) and g(b), the values of u at the original limits.',
      ru: 'Пределы a и b заменяются на g(a) и g(b), то есть на значения u при исходных пределах.',
    },
    when: {
      en: 'Evaluating a definite integral by substitution without substituting back to x.',
      ru: 'Вычисление определённого интеграла подстановкой без возврата к переменной x.',
    },
    syllabus: '5.11',
    inBooklet: false,
  },
];
