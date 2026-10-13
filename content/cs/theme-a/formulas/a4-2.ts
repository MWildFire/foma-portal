import type { Formula } from '../../../../src/contract/types';

// A4.2 formulas: min-max normalization and z-score standardization (ch. A4.2, pp. 255–256).
// Numbers were checked with python3: for incomes 20, 30, 40, 60, 100 the minimum is 20, the maximum 100, the mean 50 and the
// population standard deviation sqrt(800) = 28.28; 40 gives 0.25 (min-max) and -0.35 (z-score).
export const formulas: Formula[] = [
  {
    id: 'cs-min-max-normalization',
    tex: 'x^{\\prime} = \\frac{x - \\min(X)}{\\max(X) - \\min(X)}',
    name: { en: 'Min–max normalization', ru: 'нормализация min–max (min–max scaling)' },
    meaning: {
      en: 'For a value $x$ of a feature $X$, the normalized value $x^{\\prime}$ is 0 at the minimum of $X$, 1 at the maximum, and lies between 0 and 1 for every other value.',
      ru: 'Для значения $x$ признака $X$ нормализованное значение $x^{\\prime}$ равно 0 при минимуме $X$, 1 при максимуме и лежит между 0 и 1 для всех остальных значений.',
    },
    when: {
      en: 'Use it when a feature must sit in a fixed range, for example for algorithms that are sensitive to input scale, such as gradient descent-based methods. Check for outliers first, because one extreme value compresses all the other values.',
      ru: 'Применяйте, когда признак должен лежать в фиксированном диапазоне, например для алгоритмов, чувствительных к масштабу входных данных, таких как методы на основе градиентного спуска. Сначала проверьте выбросы: одно крайнее значение сжимает все остальные.',
    },
    syllabus: 'A4.2',
    example: {
      en: 'Incomes of 20, 30, 40, 60 and 100 (thousands): the minimum is 20 and the maximum is 100, so 40 becomes $(40 - 20)/(100 - 20) = 0.25$.',
      ru: 'Доходы 20, 30, 40, 60 и 100 (тысяч): минимум 20, максимум 100, поэтому 40 становится $(40 - 20)/(100 - 20) = 0.25$.',
    },
  },
  {
    id: 'cs-z-score-standardization',
    tex: 'z = \\frac{x - \\mu}{\\sigma}',
    name: { en: 'Z-score standardization', ru: 'стандартизация (Z-score standardization)' },
    meaning: {
      en: 'For a value $x$ with mean $\\mu$ and standard deviation $\\sigma$, the z-score $z$ counts how many standard deviations $x$ lies above or below the mean.',
      ru: 'Для значения $x$ со средним $\\mu$ и стандартным отклонением $\\sigma$ z-оценка $z$ показывает, на сколько стандартных отклонений $x$ лежит выше или ниже среднего.',
    },
    when: {
      en: 'Use it when the minimum and maximum are unknown, when outliers are present, or when the method assumes a normal distribution, such as logistic regression.',
      ru: 'Применяйте, когда минимум и максимум неизвестны, есть выбросы или метод предполагает нормальное распределение, например логистическую регрессию.',
    },
    syllabus: 'A4.2',
    example: {
      en: 'For incomes of 20, 30, 40, 60 and 100 (thousands) the mean is 50 and the population standard deviation is $\\sqrt{800} \\approx 28.28$, so 40 gives $z \\approx -0.35$.',
      ru: 'Для доходов 20, 30, 40, 60 и 100 (тысяч) среднее равно 50, стандартное отклонение генеральной совокупности $\\sqrt{800} \\approx 28.28$, поэтому для 40 получаем $z \\approx -0.35$.',
    },
  },
];
