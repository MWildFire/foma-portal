import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-8-01',
    subject: 'math',
    topicIds: ['2-8-transformations'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The point P(4, −3) lies on the graph of y = f(x). Find the coordinates of the image of P under the transformation that maps the graph of y = f(x) onto the graph of y = −2f(0.5(x + 1)) + 5.',
      ru: 'Точка P(4, −3) лежит на графике y = f(x). Найдите координаты образа точки P при преобразовании, которое переводит график y = f(x) в график y = −2f(0,5(x + 1)) + 5.',
    },
    markscheme: {
      en: 'M1: x-coordinate: 4 ÷ 0.5 = 8 (horizontal stretch with scale factor 2).\nA1: translation by −1 gives 8 + (−1) = 7.\nM1: y-coordinate: −2 × (−3) + 5.\nA1: image (7, 11).',
      ru: 'M1: x-координата: 4 ÷ 0,5 = 8 (горизонтальное растяжение с коэффициентом 2).\nA1: сдвиг на −1 даёт 8 + (−1) = 7.\nM1: y-координата: −2 × (−3) + 5.\nA1: образ (7, 11).',
    },
    answer: '7; 11',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-8-02',
    subject: 'math',
    topicIds: ['2-8-transformations'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The graph of y = f(x) has a maximum point at (3, 8). Find the coordinates of the maximum point of the graph of y = f(2x − 6).',
      ru: 'График функции y = f(x) имеет точку максимума (3, 8). Найдите координаты точки максимума графика y = f(2x − 6).',
    },
    markscheme: {
      en: 'M1: f(2x − 6) = f(2(x − 3)), so the graph is stretched horizontally with scale factor 1/2 and translated 3 units to the right.\nA1: x-coordinate: 3 ÷ 2 + 3 = 4.5.\nA1: y-coordinate is unchanged: 8. Maximum point (4.5, 8).',
      ru: 'M1: f(2x − 6) = f(2(x − 3)), значит график растянут по горизонтали с коэффициентом 1/2 и сдвинут на 3 вправо.\nA1: x-координата: 3 ÷ 2 + 3 = 4,5.\nA1: y-координата не меняется: 8. Точка максимума (4,5; 8).',
    },
    answer: '4.5; 8',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-8-03',
    subject: 'math',
    topicIds: ['2-8-transformations'],
    paper: 'P2',
    marks: 14,
    command: 'Express, Hence, Write down',
    prompt: {
      en: 'The function f is defined for all real x by f(x) = x² − 4x + 5.\n\n(a) Express f(x) in the form (x − h)² + k. Hence write down the coordinates of the minimum point of the graph of y = f(x). [3]\n\n(b) The graph of y = g(x) is obtained from the graph of y = f(x) by a translation of 3 units to the left, followed by a vertical stretch with scale factor 2, followed by a translation of 4 units up. Show that g(x) = 2(x + 1)² + 6. [3]\n\n(c) Write down the coordinates of the minimum point of the graph of y = g(x). [2]\n\n(d) Find the values of x for which g(x) = 14. [3]\n\n(e) The graph of y = h(x) is obtained from the graph of y = f(x) by a horizontal stretch with scale factor 2. Find the coordinates of the minimum point of the graph of y = h(x). [3]',
      ru: 'Функция f задана для всех действительных x формулой f(x) = x² − 4x + 5.\n\n(a) Запишите f(x) в виде (x − h)² + k. Затем укажите координаты точки минимума графика y = f(x). [3]\n\n(b) График y = g(x) получается из графика y = f(x) сдвигом на 3 единицы влево, затем вертикальным растяжением с коэффициентом 2 и затем сдвигом на 4 единицы вверх. Покажите, что g(x) = 2(x + 1)² + 6. [3]\n\n(c) Укажите координаты точки минимума графика y = g(x). [2]\n\n(d) Найдите значения x, при которых g(x) = 14. [3]\n\n(e) График y = h(x) получается из графика y = f(x) горизонтальным растяжением с коэффициентом 2. Найдите координаты точки минимума графика y = h(x). [3]',
    },
    markscheme: {
      en: '(a) M1: x² − 4x + 5 = (x − 2)² − 4 + 5. A1: f(x) = (x − 2)² + 1. A1: minimum point (2, 1).\n(b) M1: g(x) = 2f(x + 3) + 4. A1: f(x + 3) = (x + 1)² + 1. A1: g(x) = 2(x + 1)² + 6 (AG).\n(c) M1: the vertex of 2(x + 1)² + 6 is at x = −1. A1: minimum point (−1, 6).\n(d) M1: 2(x + 1)² + 6 = 14, so (x + 1)² = 4. A1: x + 1 = ±2. A1: x = −3 or x = 1.\n(e) M1: h(x) = f(x/2). A1: minimum when x/2 = 2, so x = 4. A1: minimum point (4, 1).',
      ru: '(a) M1: x² − 4x + 5 = (x − 2)² − 4 + 5. A1: f(x) = (x − 2)² + 1. A1: точка минимума (2, 1).\n(b) M1: g(x) = 2f(x + 3) + 4. A1: f(x + 3) = (x + 1)² + 1. A1: g(x) = 2(x + 1)² + 6 (AG).\n(c) M1: вершина 2(x + 1)² + 6 находится при x = −1. A1: точка минимума (−1, 6).\n(d) M1: 2(x + 1)² + 6 = 14, откуда (x + 1)² = 4. A1: x + 1 = ±2. A1: x = −3 или x = 1.\n(e) M1: h(x) = f(x/2). A1: минимум при x/2 = 2, то есть x = 4. A1: точка минимума (4, 1).',
    },
    answer: '2; 1; -1; 6; -3; 1; 4; 1',
    origin: 'original',
    minutes: 14,
  },
];
