import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-7-01',
    subject: 'math',
    topicIds: ['4-7-discrete-random-variables'],
    paper: 'P1',
    marks: 4,
    command: 'Find, Hence',
    prompt: {
      en: 'The discrete random variable $X$ takes the values 0, 1, 2 and 3. Its probability distribution is $P(X = 0) = 0.1$, $P(X = 1) = 0.4$, $P(X = 2) = k$ and $P(X = 3) = 0.2$. Find the value of $k$, correct to three decimal places, and hence find $E(X)$, correct to two decimal places.',
      ru: 'Дискретная случайная величина $X$ принимает значения 0, 1, 2 и 3. Её распределение задано: $P(X = 0) = 0{,}1$, $P(X = 1) = 0{,}4$, $P(X = 2) = k$ и $P(X = 3) = 0{,}2$. Найдите значение $k$ с точностью до трёх знаков после запятой, а затем найдите $E(X)$ с точностью до двух знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the probabilities add to 1, so 0.1 + 0.4 + k + 0.2 = 1. A1: k = 0.300 (3 decimal places). M1: E(X) = 0 × 0.1 + 1 × 0.4 + 2 × 0.3 + 3 × 0.2. A1: E(X) = 1.60 (2 decimal places).',
      ru: 'M1: вероятности в сумме дают 1, поэтому 0,1 + 0,4 + k + 0,2 = 1. A1: k = 0,300 (с точностью до 3 знаков). M1: E(X) = 0 × 0,1 + 1 × 0,4 + 2 × 0,3 + 3 × 0,2. A1: E(X) = 1,60 (с точностью до 2 знаков).',
    },
    answer: '0.300; 1.60',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-7-02',
    subject: 'math',
    topicIds: ['4-7-discrete-random-variables'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A player pays 20 AED to play a game. A fair six-sided die is rolled once. If the score is 6, the player wins 100 AED; otherwise the player wins nothing. Find the expected net gain of the player, in AED, correct to two decimal places.',
      ru: 'Игрок платит 20 AED за участие в игре. Честный шестигранный кубик бросают один раз. Если выпадает 6, игрок выигрывает 100 AED; в остальных случаях выигрыш равен нулю. Найдите ожидаемый чистый выигрыш игрока в AED с точностью до двух знаков после запятой.',
    },
    markscheme: {
      en: 'M1: expected winnings = 100 × 1/6 = 16.67 (2 decimal places). M1: expected net gain = 100/6 − 20. A1: −3.33 (2 decimal places).',
      ru: 'M1: ожидаемый выигрыш = 100 × 1/6 = 16,67 (с точностью до 2 знаков). M1: ожидаемый чистый выигрыш = 100/6 − 20. A1: −3,33 (с точностью до 2 знаков).',
    },
    answer: '-3.33',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-7-03',
    subject: 'math',
    topicIds: ['4-7-discrete-random-variables'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bag contains 10 identical tickets: one ticket wins 50 AED, two tickets win 20 AED, three tickets win 5 AED, and the other four tickets win nothing. One ticket is chosen at random, and each ticket is equally likely to be chosen. Return the drawn ticket and remix the bag before each subsequent play, so every play has this same prize distribution. Let $X$ be the prize, in AED, won by the chosen ticket.\n\n(a) Find $P(X = 0)$, correct to three decimal places. [2]\n\n(b) Find $E(X)$, in AED, correct to two decimal places. [3]\n\n(c) A player pays 12 AED to choose one ticket. Find the expected net gain of the player, in AED, correct to two decimal places. [3]\n\n(d) On one day the stall sells 500 tickets. Find the expected total amount of prize money paid out, in AED. [3]\n\n(e) The stall receives 12 AED for each ticket it sells. Find the least number of tickets, $n$, that must be sold for the expected net profit of the stall to be at least 300 AED. [3]',
      ru: 'В мешке 10 одинаковых билетов: один билет выигрывает 50 AED, два билета — 20 AED, три билета — 5 AED, а остальные четыре билета ничего не выигрывают. Один билет выбирают наугад, и каждый билет равновероятен. Перед каждой следующей игрой верните выбранный билет в мешок и перемешайте его, сохраняя то же распределение выигрышей. Пусть $X$ — выигрыш в AED по выбранному билету.\n\n(a) Найдите $P(X = 0)$ с точностью до трёх знаков после запятой. [2]\n\n(b) Найдите $E(X)$ в AED с точностью до двух знаков после запятой. [3]\n\n(c) Игрок платит 12 AED за выбор одного билета. Найдите ожидаемый чистый выигрыш игрока в AED с точностью до двух знаков после запятой. [3]\n\n(d) В один день киоск продаёт 500 билетов. Найдите ожидаемую общую сумму выплат по призам в AED. [3]\n\n(e) Киоск получает 12 AED за каждый проданный билет. Найдите наименьшее число билетов $n$, которое нужно продать, чтобы ожидаемая чистая прибыль киоска была не меньше 300 AED. [3]',
    },
    markscheme: {
      en: '(a) M1: four of the ten tickets win nothing, so P(X = 0) = 4/10. A1: 0.400 (3 decimal places).\n(b) M1: the probabilities are 0.1, 0.2, 0.3 and 0.4 for the prizes 50, 20, 5 and 0. M1: E(X) = 50 × 0.1 + 20 × 0.2 + 5 × 0.3 + 0 × 0.4. A1: 10.50 (2 decimal places).\n(c) M1: net gain = X − 12. M1: E(net gain) = E(X) − 12 = 10.50 − 12. A1: −1.50 (2 decimal places).\n(d) M1: expected prize per ticket = 10.50 AED. M1: expected total = 500 × 10.50. A1: 5250 AED.\n(e) M1: expected net profit per ticket sold = 12 − 10.50 = 1.50 AED. M1: expected net profit from n tickets = 1.5n ≥ 300. A1: n ≥ 200, so the least value is n = 200.',
      ru: '(a) M1: четыре из десяти билетов ничего не выигрывают, поэтому P(X = 0) = 4/10. A1: 0,400 (с точностью до 3 знаков).\n(b) M1: вероятности 0,1; 0,2; 0,3 и 0,4 относятся к призам 50, 20, 5 и 0. M1: E(X) = 50 × 0,1 + 20 × 0,2 + 5 × 0,3 + 0 × 0,4. A1: 10,50 (с точностью до 2 знаков).\n(c) M1: чистый выигрыш = X − 12. M1: E(чистый выигрыш) = E(X) − 12 = 10,50 − 12. A1: −1,50 (с точностью до 2 знаков).\n(d) M1: ожидаемый приз за один билет = 10,50 AED. M1: ожидаемая общая сумма = 500 × 10,50. A1: 5250 AED.\n(e) M1: ожидаемая чистая прибыль за один проданный билет = 12 − 10,50 = 1,50 AED. M1: ожидаемая чистая прибыль от n билетов = 1,5n ≥ 300. A1: n ≥ 200, наименьшее значение n = 200.',
    },
    answer: '0.400; 10.50; -1.50; 5250; 200',
    origin: 'original',
    minutes: 14,
  },
];
