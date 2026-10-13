import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-14-01',
    subject: 'math',
    topicIds: ['1-14-matrices'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The matrix $A = \\begin{pmatrix} k & 2 \\\\ 1 & 3 \\end{pmatrix}$ has no inverse. Find the value of $k$, giving your answer to 3 significant figures.',
      ru: 'Матрица $A = \\begin{pmatrix} k & 2 \\\\ 1 & 3 \\end{pmatrix}$ не имеет обратной матрицы. Найдите значение $k$ с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: det A = 3k - 2. M1: no inverse means det A = 0, so 3k - 2 = 0. A1: k = 0.667 (3 s.f.).',
      ru: 'M1: det A = 3k − 2. M1: отсутствие обратной матрицы означает det A = 0, то есть 3k − 2 = 0. A1: k = 0,667 (3 значащие цифры).',
    },
    answer: '0.667',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-14-02',
    subject: 'math',
    topicIds: ['1-14-matrices'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The simultaneous equations $3x - y = 7$ and $x + 2y = 4$ are written as $M\\mathbf{x} = \\mathbf{b}$. Use the inverse of $M$ to find $x$ and $y$, giving each answer to 3 significant figures.',
      ru: 'Система уравнений $3x - y = 7$ и $x + 2y = 4$ записана в виде $M\\mathbf{x} = \\mathbf{b}$. С помощью обратной матрицы $M$ найдите $x$ и $y$, каждый ответ округлите до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: M = [[3, -1], [1, 2]] and det M = 3 × 2 - (-1) × 1 = 7. M1: M^(-1) = (1/7) [[2, 1], [-1, 3]], so x = M^(-1) b with b = (7, 4). A1: x = 2.57. A1: y = 0.714.',
      ru: 'M1: M = [[3, -1], [1, 2]] и det M = 3 × 2 − (−1) × 1 = 7. M1: M^(-1) = (1/7) [[2, 1], [-1, 3]], поэтому x = M^(-1) b при b = (7, 4). A1: x = 2,57. A1: y = 0,714.',
    },
    answer: '2.57; 0.714',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-14-03',
    subject: 'math',
    topicIds: ['1-14-matrices'],
    paper: 'P2',
    marks: 14,
    command: 'Determine',
    prompt: {
      en: 'A café in Dubai makes two drinks, a latte (L) and a flat white (F). The matrix $R = \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$ shows, for one drink of each type, the number of espresso shots (row 1) and the number of units of milk (row 2). Column 1 is for L and column 2 is for F.\n\n(a) Find the determinant of $R$, and explain what it tells you about whether $R^{-1}$ exists. [3]\n\n(b) Find $R^{-1}$, giving its entries exactly, row by row. [3]\n\n(c) One morning the café uses 8 espresso shots and 9 units of milk. Use $R^{-1}$ to find how many lattes and how many flat whites were made. [3]\n\n(d) The matrix $O = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ gives the number of drinks sold on Monday (column 1) and on Tuesday (column 2), with row 1 for L and row 2 for F. Find the matrix $RO$, giving its entries row by row. [3]\n\n(e) Explain why $RO$ has a sensible meaning for the café, but $OR$ does not. [2]',
      ru: 'Кафе в Дубае готовит два напитка: латте (L) и флэт уайт (F). Матрица $R = \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$ показывает для одной порции каждого напитка число порций эспрессо (первая строка) и число единиц молока (вторая строка). Первый столбец относится к L, второй — к F.\n\n(a) Найдите определитель $R$ и объясните, что он говорит о существовании $R^{-1}$. [3]\n\n(b) Найдите $R^{-1}$ и запишите её элементы точно, по строкам. [3]\n\n(c) Одним утром кафе использовало 8 порций эспрессо и 9 единиц молока. С помощью $R^{-1}$ найдите, сколько латте и сколько флэт уайт было приготовлено. [3]\n\n(d) Матрица $O = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ показывает число напитков, проданных в понедельник (первый столбец) и во вторник (второй столбец); первая строка — L, вторая — F. Найдите матрицу $RO$ и запишите её элементы по строкам. [3]\n\n(e) Объясните, почему $RO$ имеет понятный смысл для кафе, а $OR$ — нет. [2]',
    },
    markscheme: {
      en: '(a) M1: det R = 1 × 1 - 2 × 3. A1: det R = -5. R1: det R is not zero, so R has an inverse.\n(b) M1: inverse formula (1/det R) [[1, -2], [-3, 1]]. A1: entries -0.2, 0.4, 0.6, -0.2 in row order.\n(c) M1: x = R^(-1) (8, 9)^T. A1: 2 lattes. A1: 3 flat whites.\n(d) M1: RO = [[1 × 4 + 2 × 2, 1 × 1 + 2 × 3], [3 × 4 + 1 × 2, 3 × 1 + 1 × 3]]. A1: RO = [[8, 7], [14, 6]], in row order 8, 7, 14, 6. A1: the first row gives espresso shots and the second row milk, for Monday and Tuesday.\n(e) R1: RO has ingredients as rows and days as columns, so each entry is one ingredient total for one day. R1: OR has drinks as both its rows and its columns, so it describes nothing about the café.',
      ru: '(a) M1: det R = 1 × 1 − 2 × 3. A1: det R = −5. R1: det R не равен нулю, значит R имеет обратную матрицу.\n(b) M1: формула обратной матрицы (1/det R) [[1, -2], [-3, 1]]. A1: элементы -0,2; 0,4; 0,6; -0,2 по строкам.\n(c) M1: x = R^(-1) (8, 9)^T. A1: 2 латте. A1: 3 флэт уайт.\n(d) M1: RO = [[1 × 4 + 2 × 2, 1 × 1 + 2 × 3], [3 × 4 + 1 × 2, 3 × 1 + 1 × 3]]. A1: RO = [[8, 7], [14, 6]], по строкам 8, 7, 14, 6. A1: первая строка даёт порции эспрессо, вторая — молоко, для понедельника и вторника.\n(e) R1: в RO строки — ингредиенты, столбцы — дни, поэтому каждый элемент — итог по одному ингредиенту за один день. R1: в OR строки и столбцы — напитки, поэтому она ничего не говорит о работе кафе.',
    },
    answer: '-5; -0.2; 0.4; 0.6; -0.2; 2; 3; 8; 7; 14; 6',
    origin: 'original',
    minutes: 14,
  },
];
