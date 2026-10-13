import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 1.1',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

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
    src: source,
    pitfall: {
      en: 'The number $a$ must be at least 1 and less than 10. Writing $45 \\times 10^{3}$ is not standard form until it is changed to $4.5 \\times 10^{4}$.',
      ru: 'Число $a$ должно быть не меньше 1 и меньше 10. Запись $45 \\times 10^{3}$ не является стандартным видом, пока её не перевели в $4{,}5 \\times 10^{4}$.',
    },
  },
  {
    id: 'standard-form-mantissa',
    term: { en: 'mantissa in standard form', ru: 'мантисса в стандартном виде (mantissa)' },
    def: {
      en: 'The number $a$ in $a \\times 10^{k}$ when it is written in standard form. It is always at least 1 and less than 10, and it carries the significant digits.',
      ru: 'Число $a$ в записи $a \\times 10^{k}$. Оно всегда не меньше 1 и меньше 10 и содержит значащие цифры числа.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
  },
];
