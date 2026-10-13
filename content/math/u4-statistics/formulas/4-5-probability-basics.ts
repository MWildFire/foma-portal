import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'classical-probability-formula',
    tex: 'P(A)=\\dfrac{n(A)}{n(U)}',
    name: { en: 'Probability of an event (equally likely outcomes)', ru: 'Вероятность события (равновероятные исходы) (Probability of an event (equally likely outcomes))' },
    meaning: {
      en: 'The probability of event A is the number of outcomes in A divided by the number of outcomes in the sample space U.',
      ru: 'Вероятность события A равна числу исходов в A, делённому на число исходов в пространстве выборки U.',
    },
    when: {
      en: 'All outcomes in U are equally likely, so probability can be found by counting.',
      ru: 'Все исходы в U равновероятны, поэтому вероятность можно найти подсчётом.',
    },
    syllabus: '4.5',
    inBooklet: false,
    example: {
      en: 'A spinner has 8 equal sectors. Two of them are 3 and 6, so P(multiple of 3) = 2/8 = 0.250.',
      ru: 'У спиннера 8 одинаковых секторов. Два из них — 3 и 6, поэтому P(кратно 3) = 2/8 = 0,250.',
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
    inBooklet: false,
  },
  {
    id: 'expected-occurrences-formula',
    tex: 'E=n\\,P(A)',
    name: { en: 'Expected number of occurrences', ru: 'Ожидаемое число появлений (Expected number of occurrences)' },
    meaning: {
      en: 'The expected number of times A occurs in n trials, where P(A) is the probability of A in one trial.',
      ru: 'Ожидаемое число появлений события A в n испытаниях, где P(A) — вероятность A в одном испытании.',
    },
    when: {
      en: 'Predicting an average count over many repeats, for example faulty items in a batch.',
      ru: 'Прогноз среднего числа за много повторений, например бракованных изделий в партии.',
    },
    syllabus: '4.5',
    inBooklet: false,
    example: {
      en: 'If 3.5% of bottles are faulty, a batch of 420 bottles is expected to contain 420 × 0.035 = 14.7 faulty bottles.',
      ru: 'Если 3,5% бутылок бракованные, в партии из 420 бутылок ожидается 420 × 0,035 = 14,7 бракованных бутылки.',
    },
  },
];
