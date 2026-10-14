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
      en: 'With classes of unequal width, compare frequency densities, not frequencies.',
      ru: 'Если классы разной ширины, сравнивайте плотности частот, а не частоты.',
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
      en: 'The IQR is not the range. It ignores the lowest and highest quarters of the data, so extreme values do not affect it.',
      ru: 'Межквартильный размах — это не размах. Он не учитывает нижнюю и верхнюю четверти данных, поэтому крайние значения на него не влияют.',
    },
  },
  {
    id: 'standard-deviation',
    term: { en: 'standard deviation', ru: 'стандартное отклонение (standard deviation)' },
    def: {
      en: 'The square root of the variance, which is the mean of the squared deviations from the mean. It measures the typical distance of values from the mean, in the units of the data.',
      ru: 'Квадратный корень из дисперсии, а дисперсия — это среднее квадратов отклонений от среднего. Оно показывает типичное расстояние значений от среднего в единицах данных.',
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
