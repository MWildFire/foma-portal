import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'frequency-density',
    tex: '\\text{frequency density}=\\dfrac{\\text{frequency}}{\\text{class width}}',
    name: { en: 'Frequency density', ru: 'Плотность частоты (frequency density)' },
    meaning: {
      en: 'The height of a histogram bar. The bar area then equals the class frequency, even when the class widths differ.',
      ru: 'Высота столбца гистограммы. Тогда площадь столбца равна частоте класса, даже если ширина классов разная.',
    },
    when: {
      en: 'Drawing a histogram with classes of unequal width.',
      ru: 'Построение гистограммы с классами разной ширины.',
    },
    syllabus: '4.2',
    inBooklet: false,
    example: {
      en: 'Class 30 to 50 minutes with frequency 10: frequency density = 10 / 20 = 0.5.',
      ru: 'Класс от 30 до 50 минут с частотой 10: плотность частоты = 10 / 20 = 0,5.',
    },
  },
  {
    id: 'quartile-cumulative-position',
    tex: '\\dfrac{n}{4},\\quad \\dfrac{n}{2},\\quad \\dfrac{3n}{4}',
    name: {
      en: 'Cumulative frequencies for the quartiles and median',
      ru: 'Накопленные частоты для квартилей и медианы (Cumulative frequencies for the quartiles and median)',
    },
    meaning: {
      en: 'On a cumulative frequency graph, read the lower quartile at n/4, the median at n/2 and the upper quartile at 3n/4, where n is the total frequency.',
      ru: 'На графике накопленных частот нижний квартиль читают при n/4, медиану при n/2, верхний квартиль при 3n/4, где n — общая сумма частот.',
    },
    when: {
      en: 'Reading quartiles or percentiles from a cumulative frequency graph.',
      ru: 'Чтение квартилей или перцентилей по графику накопленных частот.',
    },
    syllabus: '4.2',
    inBooklet: false,
    example: {
      en: 'For n = 80: n/4 = 20, n/2 = 40 and 3n/4 = 60.',
      ru: 'При n = 80: n/4 = 20, n/2 = 40 и 3n/4 = 60.',
    },
  },
];
