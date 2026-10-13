import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'df-estimated-parameters',
    tex: '\\nu=k-1-p',
    name: { en: 'Degrees of freedom when parameters are estimated', ru: 'Степени свободы при оценённых параметрах (Degrees of freedom when parameters are estimated)' },
    meaning: {
      en: 'k is the number of classes used in the test and p is the number of parameters estimated from the sample. The 1 is subtracted because the total frequency is fixed.',
      ru: 'k — число классов в тесте, p — число параметров, оценённых по выборке. Единица вычитается, потому что сумма частот фиксирована.',
    },
    when: {
      en: 'Goodness-of-fit test in which the fitted model uses the sample mean or the sample standard deviation.',
      ru: 'Тест согласия, в котором модель подбирается по выборочному среднему или выборочному стандартному отклонению.',
    },
    syllabus: '4.12',
    inBooklet: false,
    example: {
      en: 'Normal model fitted with the sample mean and standard deviation to 7 classes: ν = 7 − 1 − 2 = 4.',
      ru: 'Нормальная модель с выборочными средним и стандартным отклонением на 7 классах: ν = 7 − 1 − 2 = 4.',
    },
  },
  {
    id: 'expected-fitted-poisson',
    tex: 'E_i=n\\,\\dfrac{e^{-\\bar{x}}\\,\\bar{x}^{\\,x_i}}{x_i!}',
    name: { en: 'Expected frequency under a fitted Poisson model', ru: 'Ожидаемая частота для подобранной модели Пуассона (Expected frequency under a fitted Poisson model)' },
    meaning: {
      en: 'Expected number of observations with x_i events when the Poisson mean is estimated by the sample mean.',
      ru: 'Ожидаемое число наблюдений с x_i событиями, когда среднее распределения Пуассона оценено выборочным средним.',
    },
    when: {
      en: 'Goodness-of-fit test for counts, after the mean has been estimated from the data.',
      ru: 'Тест согласия для подсчётов, когда среднее оценено по данным.',
    },
    syllabus: '4.12',
    inBooklet: false,
    example: {
      en: 'With n = 80 and sample mean 1.45, expected count for 4 late arrivals: E = 80 × e^(-1.45) × 1.45^4 / 4! = 3.46 (2 decimal places).',
      ru: 'При n = 80 и выборочном среднем 1,45 ожидаемое число дней с 4 опоздавшими: E = 80 × e^(-1,45) × 1,45^4 / 4! = 3,46 (с 2 знаками после запятой).',
    },
  },
  {
    id: 'expected-fitted-normal',
    tex: 'E_i=n\\,P(a_i<X\\le b_i),\\quad X\\sim N(\\bar{x},\\,s^{2})',
    name: { en: 'Expected frequency under a fitted normal model', ru: 'Ожидаемая частота для подобранной нормальной модели (Expected frequency under a fitted normal model)' },
    meaning: {
      en: 'Expected number of observations in the class from a_i to b_i, when the variable is modelled as normal with the sample mean and the sample variance.',
      ru: 'Ожидаемое число наблюдений в классе от a_i до b_i, когда величина моделируется нормальным распределением с выборочными средним и дисперсией.',
    },
    when: {
      en: 'Goodness-of-fit test for continuous data after the data have been grouped into classes.',
      ru: 'Тест согласия для непрерывных данных, разбитых на классы.',
    },
    syllabus: '4.12',
    inBooklet: false,
    example: {
      en: 'Mean 165, standard deviation 7, class below 158 out of n = 100: E = 100 × P(Z < -1) = 15.9 (1 decimal place).',
      ru: 'Среднее 165, стандартное отклонение 7, класс ниже 158 при n = 100: E = 100 × P(Z < -1) = 15,9 (с 1 знаком после запятой).',
    },
  },
  {
    id: 'z-score-class-boundary',
    tex: 'z=\\dfrac{x-\\mu}{\\sigma}',
    name: { en: 'Standardised score of a class boundary', ru: 'Стандартизация границы класса (Standardised score of a class boundary)' },
    meaning: {
      en: 'Converts a class boundary x into a z-score, so that the normal probability of the class can be read from the standard normal distribution.',
      ru: 'Переводит границу x класса в z-оценку, чтобы вероятность попадания в класс находилась по стандартному нормальному распределению.',
    },
    when: {
      en: 'Finding the normal probability of a class by hand, or checking a GDC result.',
      ru: 'Нахождение нормальной вероятности класса вручную или проверка результата калькулятора.',
    },
    syllabus: '4.12',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With mean 165 and standard deviation 7, the boundary 158 gives z = (158 − 165) / 7 = −1.',
      ru: 'При среднем 165 и стандартном отклонении 7 граница 158 даёт z = (158 − 165) / 7 = −1.',
    },
  },
];
