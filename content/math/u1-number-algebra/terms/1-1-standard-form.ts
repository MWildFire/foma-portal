import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'standard-form',
    term: { en: 'standard form', ru: 'стандартный вид (standard form)' },
    def: {
      en: 'For a positive number, a representation as $a \\times 10^{k}$, where $1 \\le a < 10$ and $k$ is an integer. It keeps very large and very small numbers short and easy to compare.',
      ru: 'Запись положительного числа в виде $a \\times 10^{k}$, где $1 \\le a < 10$ и $k$ — целое число. Так удобно записывать очень большие и очень малые числа и сравнивать их.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 9' },
    pitfall: {
      en: 'The number $a$ must be at least 1 and less than 10. Writing $45 \\times 10^{3}$ is not standard form until it is changed to $4.5 \\times 10^{4}$.',
      ru: 'Число $a$ должно быть не меньше 1 и меньше 10. Запись $45 \\times 10^{3}$ не является стандартным видом, пока её не перевели в $4{,}5 \\times 10^{4}$.',
    },
  },
  {
    id: 'standard-form-mantissa',
    term: { en: 'mantissa in standard form', ru: 'мантисса в стандартном виде (mantissa in standard form)' },
    def: {
      en: 'The number $a$ in standard form $a \\times 10^{k}$, also called the coefficient. For a positive value it satisfies $1 \\le a < 10$.',
      ru: 'Число $a$ в стандартном виде $a \\times 10^{k}$, которое также называют коэффициентом. Для положительного значения оно удовлетворяет условию $1 \\le a < 10$.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 9' },
  },
  {
    id: 'standard-form-order',
    term: { en: 'standard-form exponent (order convention)', ru: 'показатель стандартной записи (standard-form exponent)' },
    def: {
      en: 'The integer exponent $k$ in the normalised standard form of a positive number, $a \\times 10^{k}$. This is the exponent convention used here; order-of-magnitude terminology can use other rounding conventions, so follow the definition stated in the question.',
      ru: 'Целый показатель $k$ в нормализованной стандартной записи положительного числа $a \\times 10^{k}$. Здесь используется соглашение о показателе записи; термин «порядок величины» может иметь другие соглашения об округлении, поэтому следуйте определению в задаче.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 9: normalised standard-form definition' },
  },
];
