import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'rounding-bounds',
    tex: 'a-\\tfrac{1}{2}\\times 10^{-d}\\le x<a+\\tfrac{1}{2}\\times 10^{-d}',
    name: { en: 'Bounds of a rounded value', ru: 'Границы округлённого значения' },
    meaning: {
      en: '$a$ is the value rounded to $d$ decimal places and $x$ is the exact value. The exact value lies in this interval, and the upper bound is not included.',
      ru: '$a$ — значение, округлённое до $d$ знаков после запятой, $x$ — точное значение. Точное значение лежит в этом промежутке; верхняя граница в него не входит.',
    },
    when: {
      en: 'Finding the bounds of a measurement or of a rounded answer.',
      ru: 'Поиск границ измерения или округлённого ответа.',
    },
    syllabus: '1.6',
    inBooklet: false,
    example: {
      en: 'With a = 12.4 and d = 1, the bounds are 12.35 and 12.45, and 12.45 is not included.',
      ru: 'При a = 12,4 и d = 1 границы равны 12,35 и 12,45, причём 12,45 в промежуток не входит.',
    },
  },
  {
    id: 'percentage-error-formula',
    tex: '\\text{Percentage error}=\\dfrac{|\\text{approximate}-\\text{exact}|}{|\\text{exact}|}\\times 100\\%',
    name: { en: 'Percentage error', ru: 'Процентная погрешность' },
    meaning: {
      en: 'The size of the error as a percentage of the exact value.',
      ru: 'Размер погрешности в процентах от точного значения.',
    },
    when: {
      en: 'Comparing an approximate or measured value with a known exact value.',
      ru: 'Сравнение приближённого или измеренного значения с известным точным значением.',
    },
    syllabus: '1.6',
    inBooklet: false,
  },
];
