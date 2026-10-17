import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'inverse-composition-identity',
    tex: 'f^{-1}(f(x))=x',
    name: { en: 'Inverse identity', ru: 'Тождество для обратной функции (Inverse identity)' },
    meaning: {
      en: 'Applying f and then its inverse returns the original input x, for every x in the domain of f.',
      ru: 'Применение f, а затем обратной функции возвращает исходный вход x, для любого x из области определения f.',
    },
    when: {
      en: 'Requires f to be one-to-one on its stated domain. Checking an inverse, or undoing a function step by step.',
      ru: 'Требуется взаимная однозначность f на указанной области определения. Проверка обратной функции или отмена действия функции по шагам.',
    },
    syllabus: '2.2',
    inBooklet: false,
  },
  {
    id: 'inverse-linear-function',
    tex: 'f(x)=ax+b\\ \\Rightarrow\\ f^{-1}(x)=\\dfrac{x-b}{a},\\quad a\\neq 0',
    name: { en: 'Inverse of a linear function', ru: 'Обратная функция линейной функции (Inverse of a linear function)' },
    meaning: {
      en: 'The inverse of f(x) = ax + b undoes the addition of b and the multiplication by a.',
      ru: 'Обратная функция к f(x) = ax + b отменяет прибавление b и умножение на a.',
    },
    when: {
      en: 'Reversing a linear model, for example to find the input that gives a known output.',
      ru: 'Обращение линейной модели, например поиск входа по известному выходу.',
    },
    syllabus: '2.2',
    inBooklet: false,
    example: {
      en: 'For f(x) = 2x + 6: f^(-1)(x) = (x - 6)/2, so f^(-1)(10) = 2.',
      ru: 'Для f(x) = 2x + 6: f^(-1)(x) = (x - 6)/2, поэтому f^(-1)(10) = 2.',
    },
  },
  {
    id: 'inverse-exponential-log',
    tex: 'f(x)=e^{x}\\ \\Rightarrow\\ f^{-1}(x)=\\ln x,\\quad x>0',
    name: { en: 'Inverse of the exponential function', ru: 'Обратная функция к показательной функции (Inverse of the exponential function)' },
    meaning: {
      en: 'The natural logarithm reverses the exponential function e^x.',
      ru: 'Натуральный логарифм обращает показательную функцию e^x.',
    },
    when: {
      en: 'Solving e^x = a for x, or finding the input of an exponential model from its output.',
      ru: 'Решение уравнения e^x = a относительно x или поиск входа показательной модели по выходу.',
    },
    syllabus: '2.2',
    inBooklet: false,
  },
];
