import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-10-01',
    subject: 'math',
    topicIds: ['3-10-vectors'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Points P(−1, 2, 5) and Q(2, −2, 1) are given. Find the distance PQ, giving your answer correct to 3 decimal places.',
      ru: 'Даны точки P(−1, 2, 5) и Q(2, −2, 1). Найдите расстояние PQ, ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: PQ = (2 − (−1), −2 − 2, 1 − 5) = (3, −4, −4). M1: |PQ| = √(9 + 16 + 16) = √41. A1: 6.403.',
      ru: 'M1: вектор PQ = (2 − (−1), −2 − 2, 1 − 5) = (3, −4, −4). M1: длина |PQ| = √(9 + 16 + 16) = √41. A1: 6,403.',
    },
    answer: '6.403',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-10-02',
    subject: 'math',
    topicIds: ['3-10-vectors'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The vector $\\mathbf{u} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$ is given. Find the positive value of k for which the magnitude of $k\\mathbf{u}$ is 10. Give your answer correct to 3 decimal places.',
      ru: 'Дан вектор $\\mathbf{u} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$. Найдите положительное значение k, при котором длина вектора $k\\mathbf{u}$ равна 10. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: |u| = √(1² + 2² + 2²) = 3. M1: |ku| = 3k = 10. A1: k = 3.333.',
      ru: 'M1: длина |u| = √(1² + 2² + 2²) = 3. M1: длина |ku| = 3k = 10. A1: k = 3,333.',
    },
    answer: '3.333',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-10-03',
    subject: 'math',
    topicIds: ['3-10-vectors'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'The position vectors of the points A and B, relative to the origin O, are $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$.\n\n(a) Find the vector $\\overrightarrow{AB}$ in component form, and its magnitude correct to 3 decimal places. [3]\n\n(b) Find the position vector of the midpoint M of AB. [2]\n\n(c) Find the unit vector in the direction of $\\overrightarrow{AB}$, giving each component correct to 3 decimal places. [3]\n\n(d) The point C is such that $\\overrightarrow{AC} = 2\\overrightarrow{AB}$. Find the position vector of C. [3]\n\n(e) The point D is such that $\\overrightarrow{AD} = -\\tfrac{1}{2}\\overrightarrow{AB}$. Find the position vector of D. [3]',
      ru: 'Радиус-векторы точек A и B относительно начала координат O равны $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ и $\\mathbf{b} = 5\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$.\n\n(a) Найдите вектор $\\overrightarrow{AB}$ в координатной форме и его длину с точностью до 3 знаков после запятой. [3]\n\n(b) Найдите радиус-вектор середины M отрезка AB. [2]\n\n(c) Найдите единичный вектор в направлении $\\overrightarrow{AB}$, каждую компоненту дайте с точностью до 3 знаков после запятой. [3]\n\n(d) Точка C такова, что $\\overrightarrow{AC} = 2\\overrightarrow{AB}$. Найдите радиус-вектор точки C. [3]\n\n(e) Точка D такова, что $\\overrightarrow{AD} = -\\tfrac{1}{2}\\overrightarrow{AB}$. Найдите радиус-вектор точки D. [3]',
    },
    markscheme: {
      en: '(a) M1: AB = b − a = (5 − 2, 3 − (−1), −2 − 3) = (3, 4, −5). M1: |AB| = √(9 + 16 + 25) = √50. A1: |AB| = 7.071 (3 decimal places).\n(b) M1: m = (a + b)/2. A1: m = (3.5, 1, 0.5).\n(c) M1: divide AB = (3, 4, −5) by its exact magnitude √50 (approximately7.071).\nM1: divide each component by √50 without intermediate rounding.\nA1: (0.424, 0.566, −0.707).\n(d) M1: c = a + 2AB.\nM1: substitute AB = (3, 4, −5): c = (2, −1, 3) + 2(3, 4, −5).\nA1: c = (2 + 6, −1 + 8, 3 − 10) = (8, 7, −7).\n(e) M1: d = a − ½AB.\nM1: substitute AB = (3, 4, −5): d = (2, −1, 3) − ½(3, 4, −5).\nA1: d = (2 − 1.5, −1 − 2, 3 + 2.5) = (0.5, −3, 5.5).',
      ru: '(a) M1: AB = b − a = (5 − 2, 3 − (−1), −2 − 3) = (3, 4, −5). M1: |AB| = √(9 + 16 + 25) = √50. A1: |AB| = 7,071 (с точностью до 3 знаков).\n(b) M1: m = (a + b)/2. A1: m = (3,5; 1; 0,5).\n(c) M1: деление AB = (3; 4; −5) на точную длину √50 (приближённо7,071).\nM1: деление каждой компоненты на √50 без промежуточного округления.\nA1: (0,424; 0,566; −0,707).\n(d) M1: c = a + 2AB.\nM1: подставить AB = (3; 4; −5): c = (2; −1; 3) + 2(3; 4; −5).\nA1: c = (2 + 6, −1 + 8, 3 − 10) = (8, 7, −7).\n(e) M1: d = a − ½AB.\nM1: подставить AB = (3; 4; −5): d = (2; −1; 3) − ½(3; 4; −5).\nA1: d = (2 − 1,5; −1 − 2; 3 + 2,5) = (0,5; −3; 5,5).',
    },
    answer: '3; 4; -5; 7.071; 3.5; 1; 0.5; 0.424; 0.566; -0.707; 8; 7; -7; 0.5; -3; 5.5',
    origin: 'original',
    minutes: 14,
  },
];
