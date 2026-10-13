import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'model-residual-formula',
    tex: 'e_i=y_i-\\hat{y}_i',
    name: { en: 'Residual', ru: 'Остаток' },
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
    name: { en: 'Sum of squared residuals', ru: 'Сумма квадратов остатков' },
    meaning: {
      en: 'Least-squares regression chooses the parameters that make S as small as possible.',
      ru: 'Регрессия по методу наименьших квадратов выбирает параметры, при которых S минимально.',
    },
    when: {
      en: 'Comparing candidate models for the same data, or fitting parameters to data.',
      ru: 'Сравнение возможных моделей для одних и тех же данных или подбор параметров по данным.',
    },
    syllabus: '2.6',
    inBooklet: false,
  },
  {
    id: 'model-regression-slope',
    tex: 'm=\\dfrac{\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum_{i=1}^{n}(x_i-\\bar{x})^2}',
    name: { en: 'Slope of the least-squares line', ru: 'Угловой коэффициент прямой наименьших квадратов' },
    meaning: {
      en: 'For the line y = mx + c fitted by least squares, the intercept is c = (mean of y) - m times (mean of x).',
      ru: 'Для прямой y = mx + c, подогнанной по методу наименьших квадратов, точка пересечения с осью y равна c = среднее y минус m умножить на среднее x.',
    },
    when: {
      en: 'Finding a linear model by hand, or checking the output of technology.',
      ru: 'Нахождение линейной модели вручную или проверка результата калькулятора.',
    },
    syllabus: '2.6',
    inBooklet: false,
  },
];
