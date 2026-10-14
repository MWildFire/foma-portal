import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'stationary-point',
    term: { en: 'stationary point', ru: 'стационарная точка (stationary point)' },
    def: {
      en: 'A point on a curve where the gradient is zero, so that $f\'(x)=0$ there. The curve is momentarily flat at that point.',
      ru: 'Точка на графике, в которой градиент равен нулю, то есть $f\'(x)=0$. В этой точке график на мгновение горизонтален.',
    },
    syllabus: '5.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.3, p. 457' },
    pitfall: {
      en: 'A zero of the gradient is only a candidate. It may be a maximum, a minimum, or neither.',
      ru: 'Нуль градиента — лишь кандидат. Это может быть максимум, минимум или ни то, ни другое.',
    },
  },
  {
    id: 'local-maximum-point',
    term: { en: 'local maximum point', ru: 'точка локального максимума (local maximum point)' },
    def: {
      en: 'A stationary point at which the gradient changes from positive to negative. The function is larger there than at nearby points on both sides.',
      ru: 'Стационарная точка, в которой градиент меняет знак с плюса на минус. Значение функции в ней больше, чем в близких точках по обе стороны.',
    },
    syllabus: '5.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 438' },
  },
  {
    id: 'local-minimum-point',
    term: { en: 'local minimum point', ru: 'точка локального минимума (local minimum point)' },
    def: {
      en: 'A stationary point at which the gradient changes from negative to positive. The function is smaller there than at nearby points on both sides.',
      ru: 'Стационарная точка, в которой градиент меняет знак с минуса на плюс. Значение функции в ней меньше, чем в близких точках по обе стороны.',
    },
    syllabus: '5.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 438' },
  },
  {
    id: 'first-derivative-sign-test',
    term: { en: 'first derivative sign test', ru: 'проверка знака первой производной (first derivative sign test)' },
    def: {
      en: 'A method that classifies a stationary point by the sign of $f\'(x)$ just before and just after it. Positive then negative gives a maximum; negative then positive gives a minimum.',
      ru: 'Метод классификации стационарной точки по знаку $f\'(x)$ непосредственно слева и справа от неё. Плюс, затем минус, даёт максимум; минус, затем плюс, даёт минимум.',
    },
    syllabus: '5.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 438' },
  },
];
