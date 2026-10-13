import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'sum-squared-residuals',
    tex: '\\mathrm{SSR}=\\sum (y_i-\\hat{y}_i)^{2}',
    name: {
      en: 'Sum of squared residuals',
      ru: 'сумма квадратов остатков',
    },
    meaning: {
      en: 'The total squared misfit between the observed values $y_i$ and the predicted values $\\hat{y}_i$. Least squares makes it as small as possible.',
      ru: 'Общее квадратичное расхождение между наблюдаемыми значениями $y_i$ и предсказанными значениями $\\hat{y}_i$. Метод наименьших квадратов делает её как можно меньшей.',
    },
    when: {
      en: 'Comparing candidate curves for the same data: the smaller the SSR, the better the fit.',
      ru: 'Сравнение кривых для одних и тех же данных: чем меньше SSR, тем лучше соответствие.',
    },
    syllabus: '4.13',
    inBooklet: false,
    example: {
      en: 'For the line y = 2x + 1 with residuals 0.5, −1, 0.5, 1 and −1, the sum of squared residuals is 3.50.',
      ru: 'Для прямой y = 2x + 1 с остатками 0,5; −1; 0,5; 1 и −1 сумма квадратов остатков равна 3,50.',
    },
  },
  {
    id: 'coefficient-of-determination-formula',
    tex: 'R^{2}=1-\\dfrac{\\sum (y_i-\\hat{y}_i)^{2}}{\\sum (y_i-\\bar{y})^{2}}',
    name: {
      en: 'Coefficient of determination',
      ru: 'коэффициент детерминации',
    },
    meaning: {
      en: 'The share of the variation in y that the model explains: one minus the unexplained variation divided by the total variation.',
      ru: 'Доля вариации y, которую объясняет модель: единица минус необъяснённая вариация, делённая на общую вариацию.',
    },
    when: {
      en: 'Judging how well a fitted curve or line matches the data.',
      ru: 'Оценка того, насколько подобранная кривая или прямая соответствует данным.',
    },
    syllabus: '4.13',
    inBooklet: false,
    example: {
      en: 'For the logarithmic model in the worked example, R² = 0.979.',
      ru: 'Для логарифмической модели из разбора примера R² = 0,979.',
    },
  },
  {
    id: 'logarithmic-regression-model',
    tex: 'y=a+b\\ln x',
    name: {
      en: 'Logarithmic regression model',
      ru: 'логарифмическая регрессионная модель',
    },
    meaning: {
      en: 'A least-squares curve that is linear in $\\ln x$. The GDC finds a and b by fitting y against ln x.',
      ru: 'Кривая наименьших квадратов, линейная относительно $\\ln x$. Калькулятор находит a и b, подбирая y по ln x.',
    },
    when: {
      en: 'Data that rise quickly at first and then level off, such as learning curves or sales that slow down over time.',
      ru: 'Данные, которые сначала быстро растут, а затем выравниваются, например кривые обучения или продажи, замедляющиеся со временем.',
    },
    syllabus: '4.13',
    inBooklet: false,
    example: {
      en: 'For the worked example: a = 3.98 and b = 2.67, so y = 3.98 + 2.67 ln x.',
      ru: 'Для разбора примера: a = 3,98 и b = 2,67, то есть y = 3,98 + 2,67 ln x.',
    },
  },
];
