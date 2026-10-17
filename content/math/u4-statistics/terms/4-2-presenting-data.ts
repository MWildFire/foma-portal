import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'histogram-grouped-data',
    term: { en: 'histogram', ru: 'гистограмма (histogram)' },
    def: {
      en: 'A diagram for grouped continuous data in which each class is drawn as a bar on a continuous horizontal axis, without decorative gaps between adjacent intervals; a zero-frequency class has zero height. The area of each bar is proportional to the class frequency.',
      ru: 'Диаграмма для сгруппированных непрерывных данных: каждый класс изображается столбцом на непрерывной горизонтальной оси без декоративных зазоров между смежными интервалами; класс с нулевой частотой имеет нулевую высоту. Площадь каждого столбца пропорциональна частоте класса.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.3, p. 59' },
    pitfall: {
      en: 'When class widths differ, the height is the frequency density, not the frequency.',
      ru: 'Если ширина классов разная, по высоте откладывают плотность частоты, а не частоту.',
    },
  },
  {
    id: 'cumulative-frequency-graph',
    term: { en: 'cumulative frequency graph', ru: 'график накопленных частот (cumulative frequency graph)' },
    def: {
      en: 'A graph of the running total of frequencies, plotted against the upper class boundary, with the points joined. It is used to read the median, the quartiles and any percentile.',
      ru: 'График нарастающей суммы частот, построенный против верхней границы класса; точки соединяются линией. По нему читают медиану, квартили и любой перцентиль.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.3, p. 63' },
    pitfall: {
      en: 'Plot each cumulative frequency at the upper class boundary, and start the curve at zero at the lower end of the first class.',
      ru: 'Каждую накопленную частоту откладывайте при верхней границе класса, а кривую начинайте с нуля у нижнего края первого класса.',
    },
  },
  {
    id: 'box-and-whisker-diagram',
    term: { en: 'box and whisker diagram', ru: 'диаграмма размаха (box and whisker diagram)' },
    def: {
      en: 'A diagram that shows the lowest value, the lower quartile, the median, the upper quartile and the highest value of a data set. The box runs from the lower to the upper quartile with a line at the median, and ordinary whiskers reach the minimum and maximum. In a modified plot, outliers are separate and whiskers end at the most extreme non-outliers; check the convention.',
      ru: 'Диаграмма, которая показывает наименьшее значение, нижний квартиль, медиану, верхний квартиль и наибольшее значение набора данных. Ящик идёт от нижнего квартиля до верхнего с линией на медиане, в обычной диаграмме усы доходят до минимума и максимума. В модифицированной выбросы отмечают отдельно, а усы доводят до крайних невыбросов; проверьте соглашение.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.3, p. 60' },
  },
];
