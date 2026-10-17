import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'model-residual-formula',
    tex: 'e_i=y_i-\\hat{y}_i',
    name: { en: 'Residual', ru: 'Остаток (Residual)' },
    meaning: {
      en: 'The observed value y_i minus the predicted value (y-hat) for the i-th data point.',
      ru: 'Наблюдаемое значение y_i минус предсказанное значение (y с крышкой) для i-го наблюдения.',
    },
    when: {
      en: 'Checking how well a model fits each data point, and whether its errors show a pattern.',
      ru: 'Проверка того, насколько модель согласуется с каждым наблюдением и есть ли в ошибках закономерность.',
    },
    syllabus: '2.6',
    inBooklet: false,
  },
  {
    id: 'model-least-squares-sum',
    tex: 'S=\\sum_{i=1}^{n}\\left(y_i-\\hat{y}_i\\right)^2',
    name: { en: 'Sum of squared residuals', ru: 'Сумма квадратов остатков (Sum of squared residuals)' },
    meaning: {
      en: 'Within a specified model family and allowed parameter values, least-squares fitting minimises S, when a minimum exists. This does not compare every possible curve.',
      ru: 'В выбранном семействе моделей и при допустимых параметрах метод наименьших квадратов минимизирует S, если минимум существует. Это не сравнение всех возможных кривых.',
    },
    when: {
      en: 'Fitting parameters or comparing residual error for the same observations, output scale and weighting. A more flexible model can reduce in-sample S without improving new predictions.',
      ru: 'Подбор параметров или сравнение ошибок на одних наблюдениях, в одной шкале и с одинаковыми весами. Более гибкая модель может уменьшить S на исходных точках, не улучшив новые прогнозы.',
    },
    syllabus: '2.6',
    inBooklet: false,
  },
  {
    id: 'model-regression-slope',
    tex: 'm=\\dfrac{\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum_{i=1}^{n}(x_i-\\bar{x})^2}',
    name: { en: 'Slope of the least-squares line', ru: 'Угловой коэффициент прямой наименьших квадратов (Slope of the least-squares line)' },
    meaning: {
      en: 'For the line y = mx + c fitted by least squares, the intercept is c = (mean of y) - m times (mean of x).',
      ru: 'Для прямой y = mx + c, подогнанной по методу наименьших квадратов, ордината пересечения с осью y равна c = среднее y минус m умножить на среднее x.',
    },
    when: {
      en: 'The observed x-values must not all be equal. For nonconstant observed x-values (the denominator must be positive). Finding a linear model by hand, or checking the output of technology.',
      ru: 'Наблюдаемые x не должны все совпадать. При неодинаковых наблюдаемых x (знаменатель должен быть положительным). Нахождение линейной модели вручную или проверка результата калькулятора.',
    },
    syllabus: '2.6',
    inBooklet: false,
  },
];
