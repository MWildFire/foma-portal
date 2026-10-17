import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'sum-squared-residuals',
    tex: '\\mathrm{SSR}=\\sum (y_i-\\hat{y}_i)^{2}',
    name: {
      en: 'Sum of squared residuals',
      ru: 'сумма квадратов остатков (Sum of squared residuals)',
    },
    meaning: {
      en: 'The total squared misfit between the observed values $y_i$ and the predicted values $\\hat{y}_i$. Least squares makes it as small as possible.',
      ru: 'Общее квадратичное расхождение между наблюдаемыми значениями $y_i$ и предсказанными значениями $\\hat{y}_i$. Метод наименьших квадратов делает её как можно меньшей.',
    },
    when: {
      en: 'Compare the same observations, response scale and weighting: smaller SSR means smaller in-sample squared error, not necessarily better prediction on new data.',
      ru: 'Сравнивай одни наблюдения, шкалу отклика и веса: меньшая SSR означает меньшую сумму квадратов ошибок на исходных данных, но не обязательно лучший прогноз новых данных.',
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
      ru: 'коэффициент детерминации (Coefficient of determination)',
    },
    meaning: {
      en: 'For nonconstant observed y, this is one minus squared prediction error divided by total variation. For ordinary linear least squares fitted to these data with an intercept, it describes the proportion of variation accounted for; otherwise it can be negative.',
      ru: 'Для неодинаковых наблюдаемых y это единица минус сумма квадратов ошибок, делённая на общую вариацию. Для обычной линейной регрессии по методу наименьших квадратов, подогнанной к этим данным со свободным членом показатель описывает объяснённую долю вариации; в других случаях он может быть отрицательным.',
    },
    when: {
      en: 'Compare the same response, data and measurement scale; R² after transforming y is not directly comparable to R² on original y.',
      ru: 'Сравнивай одну зависимую величину, одни данные и одну шкалу; R² после преобразования y нельзя напрямую сравнивать с R² для исходного y.',
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
      ru: 'логарифмическая регрессионная модель (Logarithmic regression model)',
    },
    meaning: {
      en: 'A least-squares curve that is linear in $\\ln x$. The GDC finds a and b by fitting y against ln x.',
      ru: 'Кривая наименьших квадратов, линейная относительно $\\ln x$. Калькулятор находит a и b, подбирая y по ln x.',
    },
    when: {
      en: 'Requires x>0. With b>0 the model increases at a decreasing rate but has no finite horizontal asymptote; with b<0 it decreases, with b=0 it is constant.',
      ru: 'Требуется x>0. При b>0 рост замедляется, но конечной горизонтальной асимптоты нет; при b<0 модель убывает, при b=0 постоянна.',
    },
    syllabus: '4.13',
    inBooklet: false,
    example: {
      en: 'For the worked example: a = 3.98 and b = 2.67, so y = 3.98 + 2.67 ln x.',
      ru: 'Для разбора примера: a = 3,98 и b = 2,67, то есть y = 3,98 + 2,67 ln x.',
    },
  },
];
