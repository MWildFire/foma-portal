import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-17-01',
    subject: 'math',
    topicIds: ['5-17-phase-portraits'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A system is given by $\\frac{dx}{dt} = -3x + y$ and $\\frac{dy}{dt} = 2x - 2y$. Find the eigenvalues of the coefficient matrix.',
      ru: 'Дана система $\\frac{dx}{dt} = -3x + y$, $\\frac{dy}{dt} = 2x - 2y$. Найдите собственные значения матрицы коэффициентов.',
    },
    markscheme: {
      en: 'M1: characteristic equation $\\det(A - \\lambda I) = 0$ for the matrix with entries $-3$, $1$, $2$ and $-2$, that is $\\lambda^{2} + 5\\lambda + 4 = 0$. A1: $(\\lambda + 1)(\\lambda + 4) = 0$. A1: $\\lambda = -1$ and $\\lambda = -4$.',
      ru: 'M1: характеристическое уравнение $\\det(A - \\lambda I) = 0$ для матрицы с элементами $-3$, $1$, $2$ и $-2$, то есть $\\lambda^{2} + 5\\lambda + 4 = 0$. A1: $(\\lambda + 1)(\\lambda + 4) = 0$. A1: $\\lambda = -1$ и $\\lambda = -4$.',
    },
    answer: '-1; -4',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-17-02',
    subject: 'math',
    topicIds: ['5-17-phase-portraits'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The origin is an equilibrium point of the system $\\frac{dx}{dt} = px + 5y$, $\\frac{dy}{dt} = -2x - py$, where $p$ is a constant. Find the greatest integer value of $p$ for which the origin is a centre.',
      ru: 'Начало координат — точка равновесия системы $\\frac{dx}{dt} = px + 5y$, $\\frac{dy}{dt} = -2x - py$, где $p$ — постоянная. Найдите наибольшее целое значение $p$, при котором начало координат является центром.',
    },
    markscheme: {
      en: 'M1: trace $T = p + (-p) = 0$ and determinant $D = p(-p) - 5(-2) = 10 - p^{2}$. R1: a centre needs $T = 0$ and $D > 0$, so the eigenvalues are purely imaginary. M1: $10 - p^{2} > 0$, so $p^{2} < 10$. A1: the greatest integer value is $p = 3$, since $p = 3$ satisfies the inequality and $p = 4$ does not.',
      ru: 'M1: след $T = p + (-p) = 0$ и определитель $D = p(-p) - 5(-2) = 10 - p^{2}$. R1: центр требует $T = 0$ и $D > 0$, поэтому собственные значения чисто мнимые. M1: $10 - p^{2} > 0$, то есть $p^{2} < 10$. A1: наибольшее целое значение $p = 3$, так как $p = 3$ удовлетворяет неравенству, а $p = 4$ — нет.',
    },
    answer: '3',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-17-03',
    subject: 'math',
    topicIds: ['5-17-phase-portraits'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A nature reserve has two animal populations close to an equilibrium. Let $x$ and $y$ be the deviations from the equilibrium numbers, in thousands, and let $t$ be the time in years. For small deviations, $\\frac{dx}{dt} = -x + 2y$ and $\\frac{dy}{dt} = -2x - y$.\n\n(a) Write the system in matrix form and find the trace and the determinant of the coefficient matrix. [2]\n\n(b) Find the eigenvalues of the coefficient matrix. Give the real part and the positive imaginary part. [4]\n\n(c) Find the period, in years, of the oscillations in $x$. Give your answer to 2 decimal places. [2]\n\n(d) Find the time, in years, for the amplitude of the oscillations to halve. Give your answer to 3 decimal places. [3]\n\n(e) Determine the type of the equilibrium point at the origin, and state what this means for the deviations. [3]',
      ru: 'В природном заповеднике два вида животных находятся вблизи равновесия. Пусть $x$ и $y$ — отклонения от равновесной численности в тысячах, а $t$ — время в годах. При малых отклонениях $\\frac{dx}{dt} = -x + 2y$ и $\\frac{dy}{dt} = -2x - y$.\n\n(a) Запишите систему в матричном виде и найдите след и определитель матрицы коэффициентов. [2]\n\n(b) Найдите собственные значения матрицы коэффициентов. Укажите вещественную часть и положительную мнимую часть. [4]\n\n(c) Найдите период колебаний по $x$ в годах. Дайте ответ с 2 знаками после запятой. [2]\n\n(d) Найдите время в годах, за которое амплитуда колебаний уменьшится вдвое. Дайте ответ с 3 знаками после запятой. [3]\n\n(e) Определите тип точки равновесия в начале координат и объясните, что это означает для отклонений. [3]',
    },
    markscheme: {
      en: '(a) A1: coefficient matrix $A$ with rows $(-1, 2)$ and $(-2, -1)$. A1: $T = -2$ and $D = (-1)(-1) - (2)(-2) = 5$.\n(b) M1: characteristic equation $\\lambda^{2} + 2\\lambda + 5 = 0$. M1: solving it, for example by completing the square, $(\\lambda + 1)^{2} = -4$. A1: real part $-1$. A1: imaginary part $\\pm 2$, so $\\lambda = -1 \\pm 2i$ and the positive imaginary part is 2.\n(c) M1: the imaginary part 2 gives solutions in $\\cos 2t$ and $\\sin 2t$, so the angular frequency is 2. A1: period $= \\dfrac{2\\pi}{2} = \\pi = 3.14$ (2 decimal places).\n(d) M1: the amplitude is proportional to $e^{-t}$, because the real part of the eigenvalues is $-1$. M1: $e^{-t} = \\dfrac{1}{2}$. A1: $t = \\ln 2 = 0.693$ (3 decimal places).\n(e) R1: $T = -2 < 0$, $D = 5 > 0$ and $T^{2} - 4D = -16 < 0$, so the origin is a stable spiral (focus). R1: the deviations spiral towards zero, so the populations oscillate about the equilibrium with decreasing amplitude. A1: a valid statement of stability in context.',
      ru: '(a) A1: матрица коэффициентов $A$ со строками $(-1, 2)$ и $(-2, -1)$. A1: $T = -2$ и $D = (-1)(-1) - (2)(-2) = 5$.\n(b) M1: характеристическое уравнение $\\lambda^{2} + 2\\lambda + 5 = 0$. M1: его решение, например выделением полного квадрата, $(\\lambda + 1)^{2} = -4$. A1: вещественная часть $-1$. A1: мнимая часть $\\pm 2$, то есть $\\lambda = -1 \\pm 2i$, а положительная мнимая часть равна 2.\n(c) M1: мнимая часть 2 даёт решения с $\\cos 2t$ и $\\sin 2t$, то есть угловая частота равна 2. A1: период $= \\dfrac{2\\pi}{2} = \\pi = 3{,}14$ (2 знака после запятой).\n(d) M1: амплитуда пропорциональна $e^{-t}$, так как вещественная часть собственных значений равна $-1$. M1: $e^{-t} = \\dfrac{1}{2}$. A1: $t = \\ln 2 = 0{,}693$ (3 знака после запятой).\n(e) R1: $T = -2 < 0$, $D = 5 > 0$ и $T^{2} - 4D = -16 < 0$, поэтому начало координат — устойчивый фокус (спираль). R1: отклонения закручиваются к нулю, то есть численность колеблется около равновесия с убывающей амплитудой. A1: верное утверждение об устойчивости в контексте.',
    },
    answer: '-2; 5; -1; 2; 3.14; 0.693',
    origin: 'original',
    minutes: 14,
  },
];
