import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'normal-standardisation-formula',
    tex: 'Z=\\dfrac{X-\\mu}{\\sigma}',
    name: { en: 'Standardisation', ru: 'Стандартизация (Standardisation)' },
    meaning: {
      en: 'Converts a value of $X \\sim N(\\mu, \\sigma^2)$ into a standard normal value $Z \\sim N(0, 1)$.',
      ru: 'Переводит значение величины $X \\sim N(\\mu, \\sigma^2)$ в стандартное нормальное значение $Z \\sim N(0, 1)$.',
    },
    when: {
      en: 'Comparing values from different normal distributions, or using one table of the standard normal.',
      ru: 'Сравнение значений из разных нормальных распределений или использование одной таблицы стандартного нормального распределения.',
    },
    syllabus: '4.9',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With μ = 32 and σ = 4: x = 36 gives z = (36 − 32) / 4 = 1.',
      ru: 'При μ = 32 и σ = 4: x = 36 даёт z = (36 − 32) / 4 = 1.',
    },
  },
  {
    id: 'normal-density-formula',
    tex: 'f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\dfrac{(x-\\mu)^{2}}{2\\sigma^{2}}}',
    name: { en: 'Normal probability density function', ru: 'Функция плотности нормального распределения (Normal probability density function)' },
    meaning: {
      en: 'The height of the normal curve at x. Probabilities are areas under the curve, not heights.',
      ru: 'Высота нормальной кривой в точке x. Вероятности — это площади под кривой, а не высоты.',
    },
    when: {
      en: 'Explaining the shape of the curve. The GDC evaluates the probabilities without it.',
      ru: 'Объяснение формы кривой. Калькулятор вычисляет вероятности без прямого использования этой формулы.',
    },
    syllabus: '4.9',
    inBooklet: false,
  },
  {
    id: 'normal-inverse-formula',
    tex: 'x=\\mu+z\\sigma',
    name: { en: 'Value from a standardised score', ru: 'Значение по стандартизованной величине (Value from a standardised score)' },
    meaning: {
      en: 'Turns a standardised score $z$ back into a value $x$ of $X \\sim N(\\mu, \\sigma^2)$.',
      ru: 'Переводит стандартизованную величину $z$ обратно в значение $x$ величины $X \\sim N(\\mu, \\sigma^2)$.',
    },
    when: {
      en: 'Solving inverse normal problems when the given area corresponds to a z-value.',
      ru: 'Решение обратных задач, когда заданная площадь соответствует значению z.',
    },
    syllabus: '4.9',
    inBooklet: false,
    example: {
      en: 'With μ = 32, σ = 4 and z = 1: x = 32 + 4 × 1 = 36.',
      ru: 'При μ = 32, σ = 4 и z = 1: x = 32 + 4 × 1 = 36.',
    },
  },
];
