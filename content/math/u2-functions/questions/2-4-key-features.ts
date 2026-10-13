import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-4-01',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The function f(x) = (4x - 7)/(3x + 2) is defined for x not equal to -2/3. Find (a) the x-value of the vertical asymptote; (b) the y-value of the horizontal asymptote; (c) the y-intercept of the graph. Give each value to 3 decimal places.',
      ru: 'Функция f(x) = (4x - 7)/(3x + 2) определена при x, не равном -2/3. Найдите (a) значение x вертикальной асимптоты; (b) значение y горизонтальной асимптоты; (c) точку пересечения графика с осью y, то есть ординату. Каждое значение дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: '(a) M1: the denominator is zero when 3x + 2 = 0. A1: x = -0.667.\n(b) A1: the ratio of the x-coefficients gives y = 4/3 = 1.333.\n(c) A1: f(0) = -7/2 = -3.500.',
      ru: '(a) M1: знаменатель равен нулю при 3x + 2 = 0. A1: x = -0,667.\n(b) A1: отношение коэффициентов при x даёт y = 4/3 = 1,333.\n(c) A1: f(0) = -7/2 = -3,500.',
    },
    answer: '-0.667; 1.333; -3.500',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-4-02',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The function $g(x) = x^{3} - 4x^{2} + 2x + 1$ has a local maximum point. Find its coordinates. Give both coordinates to 2 decimal places.',
      ru: 'Функция $g(x) = x^{3} - 4x^{2} + 2x + 1$ имеет точку локального максимума. Найдите её координаты. Обе координаты дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: a graph window that shows both turning points, with the maximum function used with a left bound and a right bound around the first turning point.\nA1: x = 0.28.\nA1: y = 1.27, so the local maximum point is (0.28, 1.27).',
      ru: 'M1: окно графика с обеими точками поворота и функция максимума с левой и правой границами вокруг первой точки поворота.\nA1: x = 0,28.\nA1: y = 1,27, то есть точка локального максимума (0,28; 1,27).',
    },
    answer: '0.28; 1.27',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-4-03',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A desert safari company sells x tickets per day, for 0 ≤ x ≤ 300. Its revenue is $R(x) = 350x - 0.5x^{2}$ AED and its cost is C(x) = 4000 + 120x AED. The profit is P(x) = R(x) - C(x).\n\n(a) Show that $P(x) = -0.5x^{2} + 230x - 4000$. [2]\n\n(b) Find the number of tickets at which P(x) = 0 within the domain 0 ≤ x ≤ 300. Give your answer to 2 decimal places. [3]\n\n(c) Find the number of tickets that gives the maximum profit, and the maximum profit to the nearest AED. [3]\n\n(d) The average cost per ticket is A(x) = C(x)/x. Write down the horizontal asymptote of A, and explain its meaning in this context. [3]\n\n(e) Find the number of tickets for which the average cost per ticket is AED 150. Give your answer to 2 decimal places. [3]',
      ru: 'Компания-организатор сафари в пустыне продаёт x билетов в день, при 0 ≤ x ≤ 300. Её выручка $R(x) = 350x - 0{,}5x^{2}$ AED, а затраты C(x) = 4000 + 120x AED. Прибыль P(x) = R(x) - C(x).\n\n(a) Покажите, что $P(x) = -0{,}5x^{2} + 230x - 4000$. [2]\n\n(b) Найдите число билетов, при котором P(x) = 0 в области 0 ≤ x ≤ 300. Ответ дайте с точностью до 2 знаков после запятой. [3]\n\n(c) Найдите число билетов, при котором прибыль максимальна, и максимальную прибыль с точностью до целых AED. [3]\n\n(d) Средняя стоимость одного билета равна A(x) = C(x)/x. Запишите горизонтальную асимптоту A и объясните её смысл в этом контексте. [3]\n\n(e) Найдите число билетов, при котором средняя стоимость одного билета равна 150 AED. Ответ дайте с точностью до 2 знаков после запятой. [3]',
    },
    markscheme: {
      en: '(a) M1: P(x) = 350x - 0.5x^2 - (4000 + 120x). A1: P(x) = -0.5x^2 + 230x - 4000 (AG).\n(b) M1: solve P(x) = 0 with the zero function, or with the quadratic formula. A1: the roots are x = 18.10 and x = 441.90. A1: x = 441.90 is outside 0 ≤ x ≤ 300, so the answer is 18.10 tickets.\n(c) M1: the maximum of P, for example at the axis of symmetry x = 230 or with the maximum function. A1: x = 230 tickets. A1: maximum profit P = AED 22450.\n(d) M1: A(x) = 4000/x + 120. A1: horizontal asymptote y = 120. R1: as the number of tickets grows, the average cost approaches AED 120 from above, so it can never fall below AED 120 per ticket.\n(e) M1: A(x) = 150 gives 4000/x = 30. A1: x = 133.33. A1: 133.33 lies in the domain, so it is the answer.',
      ru: '(a) M1: P(x) = 350x - 0,5x^2 - (4000 + 120x). A1: P(x) = -0,5x^2 + 230x - 4000 (AG).\n(b) M1: решить P(x) = 0 функцией нуля или формулой корней квадратного уравнения. A1: корни x = 18,10 и x = 441,90. A1: x = 441,90 лежит вне 0 ≤ x ≤ 300, поэтому ответ 18,10 билета.\n(c) M1: максимум P, например в оси симметрии x = 230, или функцией максимума. A1: x = 230 билетов. A1: максимальная прибыль P = 22450 AED.\n(d) M1: A(x) = 4000/x + 120. A1: горизонтальная асимптота y = 120. R1: с ростом числа билетов средняя стоимость приближается к 120 AED сверху, поэтому она никогда не опускается ниже 120 AED за билет.\n(e) M1: A(x) = 150 даёт 4000/x = 30. A1: x = 133,33. A1: 133,33 входит в область определения, поэтому это ответ.',
    },
    answer: '18.10; 230; 22450; 120; 133.33',
    origin: 'original',
    minutes: 14,
  },
];
