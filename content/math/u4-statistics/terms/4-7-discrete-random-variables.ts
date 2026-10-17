import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'discrete-random-variable',
    term: { en: 'discrete random variable', ru: 'дискретная случайная величина (discrete random variable)' },
    def: {
      en: 'A variable $X$ whose possible values are separate numbers $x$, each occurring with probability $P(X = x)$. These probabilities add to 1.',
      ru: 'Величина $X$, возможные значения которой — отдельные числа $x$, каждое с вероятностью $P(X = x)$. Эти вероятности в сумме дают 1.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.1, p. 572' },
  },
  {
    id: 'discrete-probability-distribution',
    term: { en: 'probability distribution of X', ru: 'распределение вероятностей величины X (probability distribution of X)' },
    def: {
      en: 'A table or list giving every value $x$ of $X$ together with its probability $P(X = x)$. Each probability lies between 0 and 1, and the probabilities add to 1.',
      ru: 'Таблица или список, в которых для каждого значения $x$ величины $X$ указана вероятность $P(X = x)$. Каждая вероятность лежит от 0 до 1, а все вероятности в сумме дают 1.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.1, p. 572' },
    pitfall: {
      en: 'If the probabilities do not add to 1, a value is missing from the table or one of the probabilities is wrong.',
      ru: 'Если вероятности не дают в сумме 1, в таблице не хватает значения или одна из вероятностей неверна.',
    },
  },
  {
    id: 'expected-value-discrete',
    term: { en: 'expected value E(X)', ru: 'математическое ожидание E(X) (expected value E(X))' },
    def: {
      en: 'For finite support, or a countable distribution with an absolutely convergent expectation sum, the mean value of $X$: $E(X) = \\sum x\\,P(X = x)$, the sum of each value multiplied by its probability. It need not be a value that $X$ can take.',
      ru: 'Для конечного числа значений либо счётного распределения с абсолютно сходящейся суммой — среднее значение $X$: $E(X) = \\sum x\\,P(X = x)$, сумма каждого значения, умноженного на его вероятность. Оно не обязательно совпадает со значением, которое может принять $X$.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.1, p. 575' },
    pitfall: {
      en: 'Weight each value by its probability. The unweighted average is not a general substitute: it agrees under equal probabilities and can also coincide accidentally for some unequal probabilities.',
      ru: 'Умножайте каждое значение на его вероятность. Простое среднее нельзя использовать как общее правило: при равных вероятностях оно совпадает с E(X), но совпадение возможно и случайно при некоторых неравных вероятностях.',
    },
  },
];
