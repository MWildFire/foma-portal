import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-3-01',
    subject: 'math',
    topicIds: ['1-3-geometric-sequences'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A ball is dropped from a height of 2 m. Each bounce reaches 60% of the height of the previous bounce. The heights form a geometric sequence u_1, u_2, u_3, …, where u_1 = 2 is the drop height. Find the common ratio r, and the height u_5 reached after the 4th bounce. Give the height correct to 3 decimal places.',
      ru: 'Мяч роняют с высоты 2 м. Каждый отскок достигает 60% высоты предыдущего отскока. Высоты образуют геометрическую последовательность u_1, u_2, u_3, …, где u_1 = 2 — высота падения. Найдите знаменатель r и высоту u_5, которой мяч достигает после 4-го отскока. Высоту дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: r = 60% = 0.6, the ratio of successive heights. A1: r = 0.6. M1: u_5 = u_1 r^4 = 2 × 0.6^4 = 2 × 0.1296. A1: 0.259 m (3 decimal places; unrounded 0.2592).',
      ru: 'M1: знаменатель r = 60% = 0,6, отношение соседних высот. A1: r = 0,6. M1: u_5 = u_1 r^4 = 2 × 0,6^4 = 2 × 0,1296. A1: 0,259 м (с точностью до 3 знаков; без округления 0,2592).',
    },
    answer: '0.600; 0.259',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-3-02',
    subject: 'math',
    topicIds: ['1-3-geometric-sequences'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A new website has 400 visitors on its first day. On each following day the number of visitors is 80% of the number on the previous day. Calculate the total number of visitors in the first 7 days, correct to the nearest whole number.',
      ru: 'В первый день у нового сайта 400 посетителей. Каждый следующий день число посетителей составляет 80% от числа предыдущего дня. Вычислите общее число посетителей за первые 7 дней, с точностью до целого числа.',
    },
    markscheme: {
      en: 'M1: geometric series with u_1 = 400, r = 0.8 and n = 7. M1: S_7 = 400 × (1 − 0.8^7) / (1 − 0.8). A1: 1581 visitors (unrounded 1580.57).',
      ru: 'M1: геометрическая сумма с u_1 = 400, r = 0,8 и n = 7. M1: S_7 = 400 × (1 − 0,8^7) / (1 − 0,8). A1: 1581 посетитель (без округления 1580,57).',
    },
    answer: '1581',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-3-03',
    subject: 'math',
    topicIds: ['1-3-geometric-sequences'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A patient takes a 500 mg dose of a medicine at the start of each day. Overnight, 30% of the medicine still in the body is eliminated, so a dose taken j days earlier has been reduced to $0.7^{j}$ of its original amount. Let A_n be the total amount of medicine in the body, in mg, just after the nth dose has been taken.\n\n(a) Find A_3, the amount in mg just after the 3rd dose. [3]\n\n(b) Find the smallest value of n for which A_n is greater than 1600 mg. [3]\n\n(c) Find A_10, correct to the nearest mg. [3]\n\n(d) Explain why the amount of medicine in the body increases by less from one day to the next as the number of doses grows. [5]',
      ru: 'Пациент принимает 500 мг лекарства в начале каждого дня. За ночь выводится 30% лекарства, оставшегося в организме, поэтому доза, принятая j дней назад, уменьшилась до $0{,}7^{j}$ от первоначального количества. Пусть A_n — общее количество лекарства в организме в мг сразу после приёма n-й дозы.\n\n(a) Найдите A_3, количество лекарства в мг сразу после 3-й дозы. [3]\n\n(b) Найдите наименьшее значение n, при котором A_n больше 1600 мг. [3]\n\n(c) Найдите A_10 с точностью до ближайшего мг. [3]\n\n(d) Объясните, почему количество лекарства в организме с каждым днём увеличивается всё меньше по мере роста числа доз. [5]',
    },
    markscheme: {
      en: '(a) M1: A_3 = 500 + 500(0.7) + 500(0.7)^2, a geometric series with u_1 = 500 and r = 0.7. M1: A_3 = 500(1 − 0.7^3)/(1 − 0.7). A1: 1095 mg.\n(b) M1: A_n = 500(1 − 0.7^n)/(1 − 0.7) > 1600. M1: 0.7^n < 0.04, so n > ln 0.04 / ln 0.7 = 9.02 (the inequality reverses when dividing by ln 0.7, which is negative). A1: n = 10, since A_9 = 1599.4 is below 1600 and A_10 = 1619.6 is above it.\n(c) M1: A_10 = 500(1 − 0.7^10)/(1 − 0.7). M1: 0.7^10 = 0.02825, so A_10 = 1619.6. A1: 1620 mg (nearest mg).\n(d) R1: a dose taken j days earlier contributes 500 × 0.7^j, so the contributions form a geometric sequence with common ratio 0.7. R1: the increase from A_n to A_(n+1) is 500 − 0.3A_n, which equals 500 × 0.7^n. R1: the overnight loss 0.3A_n grows as the amount in the body grows, so the net increase falls. R1: since 0 < 0.7 < 1, each power 0.7^n is smaller than the one before. A1: a conclusion in context, that each extra dose adds less because more of the medicine is removed overnight.',
      ru: '(a) M1: A_3 = 500 + 500(0,7) + 500(0,7)^2, геометрическая сумма с u_1 = 500 и r = 0,7. M1: A_3 = 500(1 − 0,7^3)/(1 − 0,7). A1: 1095 мг.\n(b) M1: A_n = 500(1 − 0,7^n)/(1 − 0,7) > 1600. M1: 0,7^n < 0,04, поэтому n > ln 0,04 / ln 0,7 = 9,02 (знак неравенства меняется при делении на ln 0,7, который отрицателен). A1: n = 10, так как A_9 = 1599,4 меньше 1600, а A_10 = 1619,6 больше.\n(c) M1: A_10 = 500(1 − 0,7^10)/(1 − 0,7). M1: 0,7^10 = 0,02825, поэтому A_10 = 1619,6. A1: 1620 мг (до ближайшего мг).\n(d) R1: доза, принятая j дней назад, даёт вклад 500 × 0,7^j, то есть вклады образуют геометрическую последовательность со знаменателем 0,7. R1: прирост от A_n к A_(n+1) равен 500 − 0,3A_n, что равно 500 × 0,7^n. R1: ночная потеря 0,3A_n растёт вместе с количеством лекарства в организме, поэтому чистый прирост уменьшается. R1: так как 0 < 0,7 < 1, каждая степень 0,7^n меньше предыдущей. A1: вывод в контексте: каждая новая доза добавляет всё меньше, потому что за ночь выводится всё больше лекарства.',
    },
    answer: '1095; 10; 1620',
    origin: 'original',
    minutes: 14,
  },
];
