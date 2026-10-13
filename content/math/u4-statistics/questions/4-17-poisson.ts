import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-17-01',
    subject: 'math',
    topicIds: ['4-17-poisson'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Faults occur at random along a cable, at an average of 0.4 faults per metre. Assume that the faults occur independently. Find the probability that a 5 metre length of cable has exactly 3 faults.',
      ru: 'Дефекты появляются вдоль кабеля случайно, в среднем 0,4 дефекта на метр. Считайте, что дефекты появляются независимо друг от друга. Найдите вероятность того, что в отрезке кабеля длиной 5 метров ровно 3 дефекта.',
    },
    markscheme: {
      en: 'M1: mean for 5 m is m = 0.4 × 5 = 2. M1: P(X = 3) = e^(-2) × 2^3 / 3!. A1: 0.180 (3 decimal places).',
      ru: 'M1: среднее для 5 м: m = 0,4 × 5 = 2. M1: P(X = 3) = e^(-2) × 2^3 / 3!. A1: 0,180 (с точностью до 3 знаков).',
    },
    answer: '0.180',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-17-02',
    subject: 'math',
    topicIds: ['4-17-poisson'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Calls to a helpline occur at random, at an average rate of 3 per hour. Assume that the calls are independent. Find the probability that there are at least 4 calls in a 2 hour period.',
      ru: 'Звонки на горячую линию поступают случайно, в среднем 3 в час. Считайте, что звонки независимы. Найдите вероятность того, что за 2 часа поступит не менее 4 звонков.',
    },
    markscheme: {
      en: 'M1: mean for 2 hours is m = 3 × 2 = 6. M1: P(X ≥ 4) = 1 − P(X ≤ 3). A1: 0.849 (3 decimal places).',
      ru: 'M1: среднее за 2 часа m = 3 × 2 = 6. M1: P(X ≥ 4) = 1 − P(X ≤ 3). A1: 0,849 (с точностью до 3 знаков).',
    },
    answer: '0.849',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-17-03',
    subject: 'math',
    topicIds: ['4-17-poisson'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, State',
    prompt: {
      en: 'Customers arrive at a café at random, at an average rate of 4 per 10 minutes. Assume that customers arrive independently and at a constant rate.\n\n(a) Show that the number of customers, X, arriving in a 30 minute period can be modelled by a Poisson distribution, and state its mean. [3]\n\n(b) Find the probability that exactly 10 customers arrive in a 30 minute period. [3]\n\n(c) Find the least value of n such that P(X ≤ n) > 0.95. [3]\n\n(d) Find P(X ≥ 16) for a 30 minute period. [2]\n\n(e) During one lunch hour, 16 customers arrive in a 30 minute period. Comment on whether this is evidence that the arrival rate has increased. [3]',
      ru: 'Посетители приходят в кафе случайно, в среднем 4 за 10 минут. Считайте, что посетители приходят независимо друг от друга и с постоянной средней частотой.\n\n(a) Покажите, что число посетителей X за 30 минут можно описать распределением Пуассона, и укажите его среднее. [3]\n\n(b) Найдите вероятность того, что за 30 минут придут ровно 10 посетителей. [3]\n\n(c) Найдите наименьшее n, при котором P(X ≤ n) > 0,95. [3]\n\n(d) Найдите P(X ≥ 16) за 30 минут. [2]\n\n(e) В один обеденный час за 30 минут пришли 16 посетителей. Прокомментируйте, является ли это доказательством роста частоты прихода. [3]',
    },
    markscheme: {
      en: '(a) M1: rate for 30 minutes is 4 × 3 = 12, so m = 12. R1: customers arrive one at a time, independently, at a constant rate. A1: X ~ Po(12).\n(b) M1: P(X = 10) = e^(-12) × 12^10 / 10!. A1: 0.105 (3 decimal places).\n(c) M1: cumulative probabilities for Po(12): P(X ≤ 17) = 0.937 and P(X ≤ 18) = 0.963. A1: n = 18. A1: P(X ≤ 17) < 0.95 < P(X ≤ 18), so 18 is the least value.\n(d) M1: P(X ≥ 16) = 1 − P(X ≤ 15). A1: 0.156 (3 decimal places).\n(e) R1: P(X ≥ 16) ≈ 0.156, so at the same rate about 16% of half-hours reach 16 customers. R1: such a count is consistent with the model. A1: a valid conclusion, for example that one half-hour count cannot show a change in the rate, and a longer sample is needed.',
      ru: '(a) M1: частота за 30 минут равна 4 × 3 = 12, значит m = 12. R1: посетители приходят по одному, независимо и с постоянной частотой. A1: X ~ Po(12).\n(b) M1: P(X = 10) = e^(-12) × 12^10 / 10!. A1: 0,105 (с точностью до 3 знаков).\n(c) M1: накопленные вероятности для Po(12): P(X ≤ 17) = 0,937 и P(X ≤ 18) = 0,963. A1: n = 18. A1: P(X ≤ 17) < 0,95 < P(X ≤ 18), значит 18 — наименьшее значение.\n(d) M1: P(X ≥ 16) = 1 − P(X ≤ 15). A1: 0,156 (с точностью до 3 знаков).\n(e) R1: P(X ≥ 16) ≈ 0,156, то есть при той же частоте примерно в 16% получасовых интервалов приходят 16 и более посетителей. R1: такой результат согласуется с моделью. A1: верный вывод, например, что один получасовой подсчёт не показывает изменения частоты и нужна более длинная выборка.',
    },
    answer: '0.105; 18; 0.156',
    origin: 'original',
    minutes: 14,
  },
];
