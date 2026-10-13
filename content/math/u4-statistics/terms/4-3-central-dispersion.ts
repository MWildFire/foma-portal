import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.3',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

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
    src: source,
    pitfall: {
      en: 'It is an estimate, because the exact values inside each class are unknown. Do not call it the mean.',
      ru: 'Это оценка, потому что точные значения внутри каждого класса неизвестны. Не называйте её просто средним.',
    },
  },
  {
    id: 'modal-class',
    term: { en: 'modal class', ru: 'модальный класс (modal class)' },
    def: {
      en: 'The class with the highest frequency density. For classes of equal width, this is the class with the highest frequency.',
      ru: 'Класс с наибольшей плотностью частоты. Если все классы одинаковой ширины, это класс с наибольшей частотой.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'With classes of unequal width, compare frequency densities, not frequencies.',
      ru: 'Если классы разной ширины, сравнивайте плотности частот, а не частоты.',
    },
  },
  {
    id: 'interquartile-range',
    term: { en: 'interquartile range (IQR)', ru: 'межквартильный размах (interquartile range)' },
    def: {
      en: 'The difference between the upper quartile and the lower quartile. It is the spread of the middle half of the data.',
      ru: 'Разность между верхним и нижним квартилями. Это разброс средней половины данных.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
    pitfall: {
      en: 'The variance is in squared units. The standard deviation is in the original units.',
      ru: 'Дисперсия измеряется в квадратных единицах, стандартное отклонение — в исходных единицах.',
    },
  },
];
