import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'estimated-mean-grouped',
    term: { en: 'estimated mean', ru: 'оценка среднего по сгруппированным данным (estimated mean)' },
    def: {
      en: 'An estimate of the mean of grouped data. Each class is represented by its midpoint, and each midpoint is weighted by the class frequency.',
      ru: 'Оценка среднего по сгруппированным данным. Каждый класс представлен своей серединой, а каждая середина взвешена частотой класса.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.2, p. 57' },
    pitfall: {
      en: 'It is an estimate, because the exact values inside each class are unknown. Do not call it the mean.',
      ru: 'Это оценка, потому что точные значения внутри каждого класса неизвестны. Не называйте её просто средним.',
    },
  },
  {
    id: 'modal-class',
    term: { en: 'modal class', ru: 'модальный класс (modal class)' },
    def: {
      en: 'The class with the highest frequency. It can be identified when the data are grouped into classes of equal width.',
      ru: 'Класс с наибольшей частотой. Его можно найти, если данные сгруппированы в классы одинаковой ширины.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.2, p. 57' },
    pitfall: {
      en: 'For unequal widths, a histogram peak is identified by frequency density. The class containing the most observations is instead identified by frequency; follow the convention stated in the question.',
      ru: 'При разной ширине классов пик гистограммы определяется плотностью частоты. Класс с наибольшим числом наблюдений определяется частотой; следуйте соглашению в условии.',
    },
  },
  {
    id: 'interquartile-range',
    term: { en: 'interquartile range (IQR)', ru: 'межквартильный размах (interquartile range (IQR))' },
    def: {
      en: 'The difference between the upper quartile and the lower quartile. It is the spread of the middle half of the data.',
      ru: 'Разность между верхним и нижним квартилями. Это разброс средней половины данных.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.2, p. 53' },
    pitfall: {
      en: 'The IQR is not the range. It ignores the lowest and highest quarters of the data, so it is generally less sensitive to extreme magnitudes than the full range. It can still change with ranks, sample size and quartile convention.',
      ru: 'Межквартильный размах — это не размах. Он не учитывает нижнюю и верхнюю четверти данных, поэтому он обычно менее чувствителен к крайним величинам, чем полный размах. Он всё же может меняться при изменении рангов, объёма выборки и соглашения о квартилях.',
    },
  },
  {
    id: 'standard-deviation',
    term: { en: 'standard deviation', ru: 'стандартное отклонение (standard deviation)' },
    def: {
      en: 'Here, population standard deviation of a data set: the square root of the mean squared deviation from its mean. It measures the typical distance of values from the mean, in the units of the data.',
      ru: 'Здесь — стандартное отклонение всего набора данных: корень из среднего квадрата отклонений от его среднего. Оно показывает типичное расстояние значений от среднего в единицах данных.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.2, p. 52' },
    pitfall: {
      en: 'The variance is in squared units. The standard deviation is in the original units.',
      ru: 'Дисперсия измеряется в квадратных единицах, стандартное отклонение — в исходных единицах.',
    },
  },
];
