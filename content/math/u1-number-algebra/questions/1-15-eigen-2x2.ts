import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-15-01',
    subject: 'math',
    topicIds: ['1-15-eigen-2x2'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Find the eigenvalues $\\lambda_1 > \\lambda_2$ of the matrix $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 2 \\end{pmatrix}$.',
      ru: 'Найдите собственные значения $\\lambda_1 > \\lambda_2$ матрицы $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 2 \\end{pmatrix}$.',
    },
    markscheme: {
      en: 'M1: characteristic equation det(A - lambda I) = 0, so (1 - lambda)(2 - lambda) - 6 = 0. A1: lambda^2 - 3 lambda - 4 = 0. M1: factorise or use the quadratic formula. A1: lambda1 = 4 and lambda2 = -1.',
      ru: 'M1: характеристическое уравнение det(A − λI) = 0, то есть (1 − λ)(2 − λ) − 6 = 0. A1: λ² − 3λ − 4 = 0. M1: разложение на множители или формула корней. A1: λ1 = 4 и λ2 = −1.',
    },
    answer: '4; -1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-15-02',
    subject: 'math',
    topicIds: ['1-15-eigen-2x2'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The matrix $C = \\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix}$ has eigenvalue 5 with eigenvector $\\begin{pmatrix} 1 \\\\ k \\end{pmatrix}$. Calculate the value of $k$ and the other eigenvalue of $C$.',
      ru: 'Матрица $C = \\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix}$ имеет собственное значение 5 с собственным вектором $\\begin{pmatrix} 1 \\\\ k \\end{pmatrix}$. Вычислите значение $k$ и второе собственное значение матрицы $C$.',
    },
    markscheme: {
      en: 'M1: C(1, k)^T = 5(1, k)^T, so the first row gives 2 + 3k = 5. A1: k = 1. M1: the sum of the eigenvalues equals the trace, so the other eigenvalue is 3 - 5. A1: -2.',
      ru: 'M1: C(1, k)^T = 5(1, k)^T, поэтому первая строка даёт 2 + 3k = 5. A1: k = 1. M1: сумма собственных значений равна следу матрицы, значит второе собственное значение равно 3 − 5. A1: −2.',
    },
    answer: '1; -2',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-15-03',
    subject: 'math',
    topicIds: ['1-15-eigen-2x2'],
    paper: 'P2',
    marks: 14,
    command: 'Determine',
    prompt: {
      en: 'A city has two districts, the centre (C) and the suburbs (S). Each year, 80% of the people in the centre stay there and 20% move to the suburbs. Of the people in the suburbs, 30% move to the centre and 70% stay. Let $\\mathbf{x}_n = \\begin{pmatrix} c_n \\\\ s_n \\end{pmatrix}$ be the populations, in thousands, after $n$ years, so that $\\mathbf{x}_{n+1} = A\\mathbf{x}_n$, where $A = \\begin{pmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{pmatrix}$. At the start all 100 thousand residents live in the centre, so $\\mathbf{x}_0 = \\begin{pmatrix} 100 \\\\ 0 \\end{pmatrix}$.\n\n(a) Find the eigenvalues of $A$, giving the larger one first. [3]\n\n(b) Find an eigenvector for each eigenvalue, with integer components that have no common factor and a positive first component. [4]\n\n(c) Let $P$ be the matrix whose columns are the eigenvectors from part (b), with the eigenvector for the larger eigenvalue first. Find $P^{-1}$. [2]\n\n(d) Show that $c_n = 60 + 40(0.5)^n$, and hence find the number of thousand residents in the centre after 3 years. [3]\n\n(e) Find the least value of $n$ for which the centre has fewer than 62 thousand residents. [2]',
      ru: 'Город делится на два района: центр (C) и пригороды (S). Каждый год 80% жителей центра остаются в нём, а 20% переезжают в пригороды. Из жителей пригородов 30% переезжают в центр, а 70% остаются. Пусть $\\mathbf{x}_n = \\begin{pmatrix} c_n \\\\ s_n \\end{pmatrix}$ — численность жителей (в тысячах) через $n$ лет, так что $\\mathbf{x}_{n+1} = A\\mathbf{x}_n$, где $A = \\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7 \\end{pmatrix}$. В начале все 100 тысяч жителей живут в центре, поэтому $\\mathbf{x}_0 = \\begin{pmatrix} 100 \\\\ 0 \\end{pmatrix}$.\n\n(a) Найдите собственные значения $A$, большее из них запишите первым. [3]\n\n(b) Найдите собственный вектор для каждого собственного значения с целыми координатами, без общего множителя и с положительной первой координатой. [4]\n\n(c) Пусть $P$ — матрица, столбцами которой являются собственные векторы из части (b), причём вектор для большего собственного значения стоит первым. Найдите $P^{-1}$. [2]\n\n(d) Покажите, что $c_n = 60 + 40(0{,}5)^n$, и затем найдите число тысяч жителей центра через 3 года. [3]\n\n(e) Найдите наименьшее значение $n$, при котором в центре останется меньше 62 тысяч жителей. [2]',
    },
    markscheme: {
      en: '(a) M1: characteristic equation lambda^2 - 1.5 lambda + 0.5 = 0 (trace 1.5, determinant 0.8 × 0.7 - 0.3 × 0.2 = 0.5). A1: (lambda - 1)(lambda - 0.5) = 0. A1: lambda = 1 and lambda = 0.5.\n(b) M1: for lambda = 1, -0.2 v1 + 0.3 v2 = 0, so (3, 2). M1: for lambda = 0.5, 0.3 v1 + 0.3 v2 = 0, so (1, -1). A1: (3, 2) for lambda = 1. A1: (1, -1) for lambda = 0.5.\n(c) M1: P = [[3, 1], [2, -1]], det P = -5, P^(-1) = (1/(-5)) [[-1, -1], [-2, 3]]. A1: P^(-1) = [[0.2, 0.2], [0.4, -0.6]].\n(d) M1: P^(-1) (100, 0)^T = (20, 40)^T. M1: D^n (20, 40)^T = (20, 40 × 0.5^n)^T, and multiplying by P gives c_n = 3 × 20 + 40 × 0.5^n = 60 + 40(0.5)^n. A1: c_3 = 60 + 40 × 0.125 = 65.\n(e) M1: 60 + 40(0.5)^n < 62, so (0.5)^n < 0.05. A1: n = 5, since c_4 = 62.5 and c_5 = 61.25.',
      ru: '(a) M1: характеристическое уравнение λ² − 1,5λ + 0,5 = 0 (след 1,5, определитель 0,8 × 0,7 − 0,3 × 0,2 = 0,5). A1: (λ − 1)(λ − 0,5) = 0. A1: λ = 1 и λ = 0,5.\n(b) M1: для λ = 1: −0,2v1 + 0,3v2 = 0, откуда (3, 2). M1: для λ = 0,5: 0,3v1 + 0,3v2 = 0, откуда (1, −1). A1: (3, 2) для λ = 1. A1: (1, −1) для λ = 0,5.\n(c) M1: P = [[3, 1], [2, -1]], det P = −5, P^(-1) = (1/(−5)) [[−1, −1], [−2, 3]]. A1: P^(-1) = [[0,2; 0,2], [0,4; −0,6]].\n(d) M1: P^(-1) (100, 0)^T = (20, 40)^T. M1: D^n (20, 40)^T = (20, 40 × 0,5^n)^T, а умножение на P даёт c_n = 3 × 20 + 40 × 0,5^n = 60 + 40(0,5)^n. A1: c_3 = 60 + 40 × 0,125 = 65.\n(e) M1: 60 + 40(0,5)^n < 62, значит (0,5)^n < 0,05. A1: n = 5, так как c_4 = 62,5 и c_5 = 61,25.',
    },
    answer: '1; 0.5; 3; 2; 1; -1; 0.2; 0.2; 0.4; -0.6; 65; 5',
    origin: 'original',
    minutes: 14,
  },
];
