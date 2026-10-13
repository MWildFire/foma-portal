import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-5-01',
    subject: 'math',
    topicIds: ['4-5-probability-basics'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A bag contains 3 red, 5 white and 4 green counters. One counter is chosen at random, and each counter is equally likely to be chosen. Find the probability that the counter is not white. Give your answer correct to three decimal places.',
      ru: 'В мешке 3 красные, 5 белых и 4 зелёные фишки. Одну фишку выбирают наугад, и каждая фишка равновероятна. Найдите вероятность того, что выбранная фишка не белая. Ответ дайте с точностью до трёх знаков после запятой.',
    },
    markscheme: {
      en: 'M1: n(U) = 3 + 5 + 4 = 12, and the counters are equally likely. M1: n(not white) = 3 + 4 = 7, or P(white) = 5/12 and P(not white) = 1 − 5/12. A1: 0.583 (3 decimal places).',
      ru: 'M1: n(U) = 3 + 5 + 4 = 12, фишки равновероятны. M1: n(не белая) = 3 + 4 = 7, или P(белая) = 5/12 и P(не белая) = 1 − 5/12. A1: 0,583 (с точностью до 3 знаков).',
    },
    answer: '0.583',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-5-02',
    subject: 'math',
    topicIds: ['4-5-probability-basics'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'In a school year group, the probability that a randomly chosen student chooses Spanish as an optional subject is 0.27. There are 380 students in the year group. Find the expected number of students who do not choose Spanish. Give your answer correct to one decimal place.',
      ru: 'В параллели школы вероятность того, что случайно выбранный ученик выберет испанский язык как факультатив, равна 0,27. В параллели 380 учеников. Найдите ожидаемое число учеников, которые не выберут испанский язык. Ответ дайте с точностью до одного знака после запятой.',
    },
    markscheme: {
      en: 'M1: P(not Spanish) = 1 − 0.27 = 0.73. M1: expected number = 380 × 0.73. A1: 277.4 (1 decimal place).',
      ru: 'M1: P(не испанский) = 1 − 0,27 = 0,73. M1: ожидаемое число = 380 × 0,73. A1: 277,4 (с точностью до 1 знака после запятой).',
    },
    answer: '277.4',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-5-03',
    subject: 'math',
    topicIds: ['4-5-probability-basics'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A game uses two fair six-sided dice, with faces numbered 1 to 6. The score is the sum of the two numbers shown. Each of the 36 pairs of results is equally likely.\n\n(a) Find the probability that the score is 10 or more. [3]\n\n(b) Find the probability that the score is a prime number. [3]\n\n(c) A player takes part in 150 rounds. Find the expected number of rounds in which the score is a prime number. [3]\n\n(d) Find the least number of rounds, n, for which the expected number of rounds with a score of 10 or more is at least 5. [3]\n\n(e) Find the probability that the score is not 7. [2]',
      ru: 'В игре используются два честных шестигранных кубика с гранями от 1 до 6. Счёт равен сумме двух выпавших чисел. Каждая из 36 пар результатов равновероятна.\n\n(a) Найдите вероятность того, что счёт равен 10 или больше. [3]\n\n(b) Найдите вероятность того, что счёт является простым числом. [3]\n\n(c) Игрок участвует в 150 раундах. Найдите ожидаемое число раундов, в которых счёт является простым числом. [3]\n\n(d) Найдите наименьшее число раундов n, при котором ожидаемое число раундов со счётом 10 или больше будет не меньше 5. [3]\n\n(e) Найдите вероятность того, что счёт не равен 7. [2]',
    },
    markscheme: {
      en: '(a) M1: scores 10, 11 and 12 come from 3 + 2 + 1 = 6 pairs. M1: P = 6/36. A1: 0.167 (3 decimal places).\n(b) M1: the prime scores 2, 3, 5, 7 and 11 come from 1 + 2 + 4 + 6 + 2 = 15 pairs. M1: P = 15/36. A1: 0.417 (3 decimal places).\n(c) M1: expected number = 150 × P(prime score). M1: P(prime score) = 15/36. A1: 62.5.\n(d) M1: expected number over n rounds = n × 6/36 = n/6. M1: n/6 ≥ 5. A1: n ≥ 30, so the least value is n = 30.\n(e) M1: P(not 7) = 1 − 6/36. A1: 0.833 (3 decimal places).',
      ru: '(a) M1: счёт 10, 11 и 12 получается парами результатов: 3 + 2 + 1 = 6. M1: P = 6/36. A1: 0,167 (с точностью до 3 знаков).\n(b) M1: простые счёты 2, 3, 5, 7 и 11 дают 1 + 2 + 4 + 6 + 2 = 15 пар. M1: P = 15/36. A1: 0,417 (с точностью до 3 знаков).\n(c) M1: ожидаемое число = 150 × P(простой счёт). M1: P(простой счёт) = 15/36. A1: 62,5.\n(d) M1: ожидаемое число за n раундов = n × 6/36 = n/6. M1: n/6 ≥ 5. A1: n ≥ 30, наименьшее n = 30.\n(e) M1: P(не 7) = 1 − 6/36. A1: 0,833 (с точностью до 3 знаков).',
    },
    answer: '0.167; 0.417; 62.5; 30; 0.833',
    origin: 'original',
    minutes: 14,
  },
];
