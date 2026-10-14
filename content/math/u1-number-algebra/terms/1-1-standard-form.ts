import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'standard-form',
    term: { en: 'standard form', ru: 'стандартный вид (standard form)' },
    def: {
      en: 'A way of writing a number as $a \\times 10^{k}$, where $1 \\le a < 10$ and $k$ is an integer. It keeps very large and very small numbers short and easy to compare.',
      ru: 'Запись числа в виде $a \\times 10^{k}$, где $1 \\le a < 10$ и $k$ — целое число. Так удобно записывать очень большие и очень малые числа и сравнивать их.',
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
      en: 'The number $a$ in standard form $a \\times 10^{k}$, also called the coefficient. It always satisfies $1 \\le a < 10$.',
      ru: 'Число $a$ в стандартном виде $a \\times 10^{k}$, которое также называют коэффициентом. Оно всегда удовлетворяет условию $1 \\le a < 10$.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 9' },
  },
  {
    id: 'standard-form-order',
    term: { en: 'order of magnitude', ru: 'порядок величины (order of magnitude)' },
    def: {
      en: 'The power of ten $k$ in the standard form $a \\times 10^{k}$. It gives a rough size of the number, which is useful when comparing quantities.',
      ru: 'Степень десятки $k$ в стандартном виде $a \\times 10^{k}$. Она даёт грубый масштаб числа, что удобно при сравнении величин.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 10' },
  },
];
