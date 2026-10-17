import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'classical-probability-formula',
    tex: 'P(A)=\\dfrac{n(A)}{n(U)}',
    name: { en: 'Probability of an event (equally likely outcomes)', ru: 'Вероятность события (равновероятные исходы) (Probability of an event (equally likely outcomes))' },
    meaning: {
      en: 'The probability of event A is the number of outcomes in A divided by the number of outcomes in the sample space U.',
      ru: 'Вероятность события A равна числу исходов в A, делённому на число исходов в пространстве элементарных исходов U.',
    },
    when: {
      en: 'U is finite and non-empty, and all its outcomes are equally likely, so probability can be found by counting.',
      ru: 'Множество U конечно и непусто, все его исходы равновероятны, поэтому вероятность можно найти подсчётом.',
    },
    syllabus: '4.5',
    inBooklet: true,
    example: {
      en: 'Assume a fair spinner with 8 equal sectors numbered 1–8. Two of them are 3 and 6, so P(multiple of 3) = 2/8 = 0.250.',
      ru: 'Пусть спиннер с 8 одинаковыми секторами, пронумерованными от 1 до 8, даёт равновероятные результаты. Два из них — 3 и 6, поэтому P(кратно 3) = 2/8 = 0,250.',
    },
  },
  {
    id: 'complementary-probability-formula',
    tex: 'P(A^{\\prime})=1-P(A)',
    name: { en: 'Complementary event', ru: 'Противоположное событие (Complementary event)' },
    meaning: {
      en: 'The probability that A does not occur is one minus the probability that A occurs.',
      ru: 'Вероятность того, что A не происходит, равна единице минус вероятность того, что A происходит.',
    },
    when: {
      en: 'When the event A′ is easier to count, or when P(A) is easier to find from its complement.',
      ru: 'Когда событие A′ проще подсчитать или когда P(A) проще найти через противоположное событие.',
    },
    syllabus: '4.5',
    inBooklet: true,
  },
  {
    id: 'expected-occurrences-formula',
    tex: 'E=n\\,P(A)',
    name: { en: 'Expected number of occurrences', ru: 'Ожидаемое число появлений (Expected number of occurrences)' },
    meaning: {
      en: 'The expected number of times A occurs in n trials, where every trial has the same marginal probability P(A). Independence is not required.',
      ru: 'Ожидаемое число появлений события A в n испытаниях, где вероятность P(A) одинакова для всех испытаний. Независимость не требуется.',
    },
    when: {
      en: 'Predicting an average count over many repeats, for example faulty items in a batch. The booklet (page 9) has $E(X) = np$ for $X \\sim B(n, p)$; here $p = P(A)$.',
      ru: 'Прогноз среднего числа за много повторений, например бракованных изделий в партии. В книжке (стр. 9) есть $E(X) = np$ для $X \\sim B(n, p)$; здесь $p = P(A)$.',
    },
    syllabus: '4.5',
    inBooklet: false,
    example: {
      en: 'If each bottle has probability 0.035 of being faulty, a batch of 420 bottles is expected to contain 420 × 0.035 = 14.7 faulty bottles.',
      ru: 'Если вероятность брака для каждой бутылки равна 0,035, в партии из 420 бутылок ожидается 420 × 0,035 = 14,7 бракованных бутылки.',
    },
  },
];
