import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'pearson-product-moment-r',
    tex: 'r=\\dfrac{\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum (x_i-\\bar{x})^{2}\\,\\sum (y_i-\\bar{y})^{2}}}',
    name: {
      en: 'Pearson\'s product-moment correlation coefficient',
      ru: 'коэффициент корреляции Пирсона (product-moment correlation coefficient)',
    },
    meaning: {
      en: 'Strength and direction of the linear relationship between x and y. It always lies between −1 and 1.',
      ru: 'Сила и направление линейной связи между x и y. Всегда лежит от −1 до 1.',
    },
    when: {
      en: 'Both variables are numerical and the scatter diagram looks roughly linear, with no extreme outliers.',
      ru: 'Обе величины числовые, а диаграмма рассеяния похожа на прямую без экстремальных выбросов.',
    },
    syllabus: '4.4',
    inBooklet: false,
    example: {
      en: 'For the plant data in the worked example, r = 0.986: a strong positive linear relationship.',
      ru: 'Для данных о растениях из разбора примера r = 0,986: сильная положительная линейная связь.',
    },
  },
  {
    id: 'regression-line-slope-intercept',
    tex: 'y=ax+b,\\quad a=r\\,\\dfrac{s_y}{s_x},\\quad b=\\bar{y}-a\\bar{x}',
    name: {
      en: 'Regression line of y on x: gradient and intercept',
      ru: 'линия регрессии y на x: угловой коэффициент и свободный член',
    },
    meaning: {
      en: 'a is the gradient and b the intercept; $s_x$ and $s_y$ are the standard deviations of x and y.',
      ru: 'a — угловой коэффициент, b — свободный член; $s_x$ и $s_y$ — стандартные отклонения x и y.',
    },
    when: {
      en: 'Finding the regression line by hand from summary statistics (r, the means and the standard deviations).',
      ru: 'Нахождение линии регрессии вручную по сводным статистикам (r, средним и стандартным отклонениям).',
    },
    syllabus: '4.4',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For the plant data: a = 1.55 and b = 1.90, so y = 1.55x + 1.90.',
      ru: 'Для данных о растениях: a = 1,55 и b = 1,90, то есть y = 1,55x + 1,90.',
    },
  },
  {
    id: 'regression-line-mean-point',
    tex: '\\bar{y}=a\\bar{x}+b',
    name: {
      en: 'The regression line passes through the mean point',
      ru: 'линия регрессии проходит через точку средних',
    },
    meaning: {
      en: 'Putting x equal to the mean of x gives the mean of y, so the line passes through $(\\bar{x}, \\bar{y})$.',
      ru: 'Подстановка x, равного среднему x, даёт среднее y, поэтому прямая проходит через $(\\bar{x}, \\bar{y})$.',
    },
    when: {
      en: 'Checking a regression line by hand, or sketching it on a scatter diagram.',
      ru: 'Проверка линии регрессии вручную или построение её на диаграмме рассеяния.',
    },
    syllabus: '4.4',
    inBooklet: false,
  },
];
