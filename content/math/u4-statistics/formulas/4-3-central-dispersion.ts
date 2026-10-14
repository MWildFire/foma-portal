import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'grouped-mean-estimate',
    tex: '\\bar{x}\\approx\\dfrac{\\sum f\\,x}{\\sum f}',
    name: { en: 'Estimated mean from grouped data', ru: 'Оценка среднего по сгруппированным данным (Estimated mean from grouped data)' },
    meaning: {
      en: 'x is the midpoint of a class and f is its frequency. The result estimates the mean, because the exact values inside each class are not known.',
      ru: 'x — середина класса, f — его частота. Результат оценивает среднее, потому что точные значения внутри класса неизвестны.',
    },
    when: {
      en: 'Grouped data in which the individual values are not given.',
      ru: 'Сгруппированные данные, в которых отдельные значения не даны.',
    },
    syllabus: '4.3',
    inBooklet: true,
    example: {
      en: 'Midpoints 5 and 15 with frequencies 4 and 6: (4 x 5 + 6 x 15) / 10 = 11.',
      ru: 'Середины 5 и 15 с частотами 4 и 6: (4 × 5 + 6 × 15) / 10 = 11.',
    },
  },
  {
    id: 'sd-formula',
    tex: '\\sigma=\\sqrt{\\dfrac{\\sum f\\,(x-\\bar{x})^{2}}{\\sum f}}',
    name: { en: 'Standard deviation', ru: 'Стандартное отклонение (standard deviation)' },
    meaning: {
      en: 'The square root of the mean squared deviation from the mean. The variance is sigma squared.',
      ru: 'Квадратный корень из среднего квадратов отклонений от среднего. Дисперсия равна сигма в квадрате.',
    },
    when: {
      en: 'Measuring the typical distance of the values from the mean for a whole data set.',
      ru: 'Измерение типичного расстояния значений от среднего для всего набора данных.',
    },
    syllabus: '4.3',
    inBooklet: false,
    example: {
      en: 'Values 2, 4, 6 and 8 have mean 5 and squared deviations 9, 1, 1, 9: sigma = sqrt(20 / 4) = 2.24 to 2 decimal places.',
      ru: 'Значения 2, 4, 6 и 8 имеют среднее 5 и квадраты отклонений 9, 1, 1, 9: σ = √(20 / 4) = 2,24 с точностью до 2 знаков.',
    },
  },
  {
    id: 'iqr-formula',
    tex: '\\text{IQR}=Q_3-Q_1',
    name: { en: 'Interquartile range', ru: 'Межквартильный размах (interquartile range)' },
    meaning: {
      en: 'The width of the middle half of the data, from the lower quartile Q1 to the upper quartile Q3.',
      ru: 'Ширина средней половины данных, от нижнего квартиля Q1 до верхнего квартиля Q3.',
    },
    when: {
      en: 'Comparing spread when the data contain outliers or are skewed.',
      ru: 'Сравнение разброса, когда данные содержат выбросы или несимметричны.',
    },
    syllabus: '4.3',
    inBooklet: true,
    example: {
      en: 'Q1 = 7 and Q3 = 14.5 give IQR = 14.5 - 7 = 7.5.',
      ru: 'Q1 = 7 и Q3 = 14,5 дают IQR = 14,5 − 7 = 7,5.',
    },
  },
  {
    id: 'linear-change-effect',
    tex: 'y=ax+b:\\quad \\bar{y}=a\\bar{x}+b,\\quad \\sigma_y=|a|\\,\\sigma_x',
    name: {
      en: 'Effect of a linear change on the mean and standard deviation',
      ru: 'Влияние линейного преобразования на среднее и стандартное отклонение (Effect of a linear change on the mean and standard deviation)',
    },
    meaning: {
      en: 'Each value x is replaced by y = ax + b. The mean changes in the same way. The standard deviation is multiplied by |a| and is not changed by b.',
      ru: 'Каждое значение x заменяется на y = ax + b. Среднее меняется так же. Стандартное отклонение умножается на |a| и не зависит от b.',
    },
    when: {
      en: 'Every value is rescaled or shifted, for example by changing units or adding a fixed amount.',
      ru: 'Все значения умножаются или сдвигаются, например при смене единиц или при добавлении фиксированной суммы.',
    },
    syllabus: '4.3',
    inBooklet: false,
    example: {
      en: 'Changing metres to centimetres multiplies every value by 100, so the mean and the standard deviation are both multiplied by 100.',
      ru: 'При переходе от метров к сантиметрам каждое значение умножается на 100, поэтому среднее и стандартное отклонение тоже умножаются на 100.',
    },
  },
];
