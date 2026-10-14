import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'sample-space-probability',
    term: { en: 'sample space', ru: 'пространство выборки (sample space)' },
    def: {
      en: 'The universal set $U$ that lists every outcome a trial could have. $n(U)$ counts these outcomes.',
      ru: 'Множество $U$ всех возможных исходов испытания. $n(U)$ — число исходов в $U$.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 5.1, p. 207' },
    pitfall: {
      en: 'List every outcome once. Leaving out an outcome that you do not care about changes the denominator and gives a wrong probability.',
      ru: 'Перечисляйте каждый исход один раз. Пропуск исхода, который вам не важен, меняет знаменатель и даёт неверную вероятность.',
    },
  },
  {
    id: 'equally-likely-outcomes',
    term: { en: 'equally likely outcomes', ru: 'равновероятные исходы (equally likely outcomes)' },
    def: {
      en: 'Outcomes that all have the same probability. Only for equally likely outcomes can $P(A)$ be found by counting, as $n(A)/n(U)$.',
      ru: 'Исходы, имеющие одинаковую вероятность. Только для равновероятных исходов $P(A)$ можно найти подсчётом как $n(A)/n(U)$.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 5.1, p. 207' },
    pitfall: {
      en: 'The totals of two dice are not equally likely: a total of 2 comes from one pair of results, a total of 7 from six pairs. Count the results of the dice instead.',
      ru: 'Суммы двух кубиков не равновероятны: сумма 2 получается одним набором результатов, сумма 7 — шестью. Считайте результаты кубиков, а не их суммы.',
    },
  },
  {
    id: 'complementary-event',
    term: { en: 'complementary event', ru: 'противоположное событие (complementary event)' },
    def: {
      en: 'The event $A\'$ that happens exactly when $A$ does not happen. Together $A$ and $A\'$ cover the whole sample space, so $P(A\') = 1 - P(A)$.',
      ru: 'Событие $A\'$, которое происходит тогда и только тогда, когда $A$ не происходит. Вместе $A$ и $A\'$ покрывают всё пространство выборки, поэтому $P(A\') = 1 - P(A)$.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 5.3, p. 218' },
  },
  {
    id: 'expected-number-of-occurrences',
    term: { en: 'expected number of occurrences', ru: 'ожидаемое число появлений (expected number of occurrences)' },
    def: {
      en: 'For $n$ trials, the expected number of times an event $A$ occurs is $n\\,P(A)$. It is an average over many repeats, so it need not be a whole number.',
      ru: 'Для $n$ испытаний ожидаемое число появлений события $A$ равно $n\\,P(A)$. Это среднее по многим повторениям, поэтому оно не обязано быть целым числом.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 5.1, p. 210' },
  },
];
