import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-3-01',
    subject: 'math',
    topicIds: ['2-3-graphs-sketching'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The functions f and g are defined by $f(x) = x^{2} - 4x + 1$ and g(x) = 0.5x + 2. Let h(x) = f(x) + g(x). Find the x-coordinate of the minimum point of the graph of y = h(x).',
      ru: 'Функции f и g заданы формулами $f(x) = x^{2} - 4x + 1$ и g(x) = 0,5x + 2. Пусть h(x) = f(x) + g(x). Найдите абсциссу точки минимума графика y = h(x).',
    },
    markscheme: {
      en: 'M1: h(x) = x^2 - 4x + 1 + 0.5x + 2 = x^2 - 3.5x + 3. M1: the x-coordinate is -b/(2a) = 3.5/2. A1: x = 1.75.',
      ru: 'M1: h(x) = x^2 - 4x + 1 + 0,5x + 2 = x^2 - 3,5x + 3. M1: абсцисса равна -b/(2a) = 3,5/2. A1: x = 1,75.',
    },
    answer: '1.75',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-3-02',
    subject: 'math',
    topicIds: ['2-3-graphs-sketching'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The graph of y = f(x) passes through the points (1, 3) and (4, -2). The graph of y = g(x) is obtained by translating the graph of y = f(x) by 2 units to the right and 1 unit down. Find g(3) and g(6).',
      ru: 'График y = f(x) проходит через точки (1, 3) и (4, -2). График y = g(x) получен сдвигом графика y = f(x) на 2 единицы вправо и на 1 единицу вниз. Найдите g(3) и g(6).',
    },
    markscheme: {
      en: 'M1: the translation gives g(x) = f(x - 2) - 1. M1: g(3) = f(1) - 1. A1: g(3) = 2. A1: g(6) = f(4) - 1 = -3.',
      ru: 'M1: сдвиг даёт g(x) = f(x - 2) - 1. M1: g(3) = f(1) - 1. A1: g(3) = 2. A1: g(6) = f(4) - 1 = -3.',
    },
    answer: '2; -3',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-3-03',
    subject: 'math',
    topicIds: ['2-3-graphs-sketching'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A food truck in Dubai sells wraps. For x wraps sold per day, where 0 ≤ x ≤ 500, the revenue is R(x) = 18x AED and the cost is $C(x) = 0.02x^{2} + 6x + 900$ AED. The profit is P(x) = R(x) - C(x).\n\n(a) Show that $P(x) = -0.02x^{2} + 12x - 900$. [3]\n\n(b) On the same axes, sketch the graphs of y = R(x) and y = C(x) for 0 ≤ x ≤ 500. Find the x-coordinate of their point of intersection with x > 0, giving your answer to 2 decimal places. [3]\n\n(c) Find the least whole number of wraps that must be sold for the profit to be positive. [2]\n\n(d) Find the number of wraps that gives the maximum profit for 0 ≤ x ≤ 500, and the maximum profit in AED. [3]\n\n(e) The price is raised so that the revenue becomes R2(x) = 20x for 0 ≤ x ≤ 500. Find the least whole number of wraps that gives a positive profit at this price. [3]',
      ru: 'Фудтрак в Дубае продаёт врапы (wraps). При продаже x врапов в день, где 0 ≤ x ≤ 500, выручка равна R(x) = 18x AED, а издержки равны $C(x) = 0{,}02x^{2} + 6x + 900$ AED. Прибыль равна P(x) = R(x) - C(x).\n\n(a) Покажите, что $P(x) = -0{,}02x^{2} + 12x - 900$. [3]\n\n(b) На одних осях постройте графики y = R(x) и y = C(x) при 0 ≤ x ≤ 500. Найдите абсциссу их точки пересечения при x > 0; ответ округлите до 2 знаков после запятой. [3]\n\n(c) Найдите наименьшее целое число врапов, которое нужно продать, чтобы прибыль была положительной. [2]\n\n(d) Найдите число врапов, при котором прибыль максимальна при 0 ≤ x ≤ 500, и максимальную прибыль в AED. [3]\n\n(e) Цену повышают так, что выручка становится R2(x) = 20x при 0 ≤ x ≤ 500. Найдите наименьшее целое число врапов, при котором прибыль по новой цене положительна. [3]',
    },
    markscheme: {
      en: '(a) M1: P(x) = R(x) - C(x) = 18x - (0.02x^2 + 6x + 900).\nM1: expand and collect the terms: 18x - 6x - 0.02x^2 - 900.\nA1: P(x) = -0.02x^2 + 12x - 900 (AG).\n(b) A1: a sketch for 0 ≤ x ≤ 500, with R a straight line from the origin and C a curve starting at (0, 900). M1: solve 18x = 0.02x^2 + 6x + 900, i.e. x^2 - 600x + 45000 = 0. A1: x = 87.87 (2 decimal places); the other root, 512.13, is outside the domain.\n(c) M1: P(x) > 0 for x > 87.87. A1: 88, since P(87) < 0 < P(88).\n(d) M1: the maximum is at x = -b/(2a) = -12/(2 × (-0.02)) = 300 (or the maximum point of the graph of P). A1: 300 wraps. A1: P(300) = 900 AED.\n(e) M1: P2(x) = 20x - C(x) = -0.02x^2 + 14x - 900. M1: solve P2(x) = 0, i.e. x^2 - 700x + 45000 = 0, giving the smaller root x = 71.61. A1: 72 wraps, since P2(71) < 0 < P2(72).',
      ru: '(a) M1: P(x) = R(x) - C(x) = 18x - (0,02x^2 + 6x + 900).\nM1: раскрыть скобки и собрать члены: 18x - 6x - 0,02x^2 - 900.\nA1: P(x) = -0,02x^2 + 12x - 900 (AG).\n(b) A1: эскиз при 0 ≤ x ≤ 500: R — прямая, проходящая через начало координат, C — кривая, начинающаяся в точке (0, 900). M1: решаем 18x = 0,02x^2 + 6x + 900, то есть x^2 - 600x + 45000 = 0. A1: x = 87,87 (2 знака после запятой); второй корень 512,13 лежит вне области определения.\n(c) M1: P(x) > 0 при x > 87,87. A1: 88, так как P(87) < 0 < P(88).\n(d) M1: максимум при x = -b/(2a) = -12/(2 × (-0,02)) = 300 (или точка максимума графика P). A1: 300 врапов. A1: P(300) = 900 AED.\n(e) M1: P2(x) = 20x - C(x) = -0,02x^2 + 14x - 900. M1: решаем P2(x) = 0, то есть x^2 - 700x + 45000 = 0, меньший корень x = 71,61. A1: 72 врапа, так как P2(71) < 0 < P2(72).',
    },
    answer: '87.87; 88; 300; 900; 72',
    origin: 'original',
    minutes: 14,
  },
];
