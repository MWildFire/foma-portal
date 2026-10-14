import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'function-single-output',
    term: { en: 'function', ru: 'функция (function)' },
    def: {
      en: 'A rule that assigns exactly one output to each input in its domain. It is written $f(x)$, $v(t)$ or $C(n)$, where the letter names the function.',
      ru: 'Правило, которое сопоставляет каждому входу из области определения ровно один выход. Записывается как $f(x)$, $v(t)$ или $C(n)$, где буква называет функцию.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.1, p. 145' },
    pitfall: {
      en: 'Each input must have exactly one output. A rule that gives two outputs for the same input is not a function.',
      ru: 'Каждому входу должен соответствовать ровно один выход. Правило, дающее два выхода для одного входа, функцией не является.',
    },
  },
  {
    id: 'domain-and-range-of-function',
    term: { en: 'domain and range of a function', ru: 'область определения и область значений (domain and range of a function)' },
    def: {
      en: 'The domain is the set of inputs the function accepts, and the range is the set of outputs it actually produces. A context can make the domain smaller than the algebra alone allows.',
      ru: 'Область определения — множество входов, которые принимает функция, а область значений — множество выходов, которые она действительно даёт. Контекст может сузить область определения по сравнению с тем, что допускает одна только алгебра.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.1, p. 151' },
    pitfall: {
      en: 'A square root needs a non-negative expression, and a time or a count cannot be negative.',
      ru: 'Под знаком квадратного корня должно стоять неотрицательное выражение, а время или количество не могут быть отрицательными.',
    },
  },
  {
    id: 'inverse-function-reflection',
    term: { en: 'inverse function', ru: 'обратная функция (inverse function)' },
    def: {
      en: 'The function $f^{-1}$ that reverses $f$: if $f(b) = a$, then $f^{-1}(a) = b$. Its graph is the reflection of the graph of $f$ in the line $y = x$.',
      ru: 'Функция $f^{-1}$, которая обращает $f$: если $f(b) = a$, то $f^{-1}(a) = b$. Её график — отражение графика $f$ в прямой $y = x$.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.3, p. 169' },
    pitfall: {
      en: 'The notation $f^{-1}(x)$ does not mean $\\dfrac{1}{f(x)}$.',
      ru: 'Обозначение $f^{-1}(x)$ не означает $\\dfrac{1}{f(x)}$.',
    },
  },
];
