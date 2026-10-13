import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-2-01',
    subject: 'math',
    topicIds: ['5-2-increasing-decreasing'],
    paper: 'P1',
    marks: 2,
    command: 'Write down',
    prompt: {
      en: 'The function $f$ has gradient function $f\'(x) = 3x^2 - 12x + 9$. Write down the $x$-coordinates of the points on the graph of $f$ where the gradient is zero.',
      ru: 'Функция $f$ имеет функцию градиента $f\'(x) = 3x^2 - 12x + 9$. Запишите $x$-координаты точек графика $f$, в которых градиент равен нулю.',
    },
    markscheme: {
      en: 'A1: $3x^2 - 12x + 9 = 3(x - 1)(x - 3) = 0$. A1: $x = 1$ and $x = 3$.',
      ru: 'A1: $3x^2 - 12x + 9 = 3(x - 1)(x - 3) = 0$. A1: $x = 1$ и $x = 3$.',
    },
    answer: '1; 3',
    origin: 'original',
    minutes: 2,
  },
  {
    id: 'q-5-2-02',
    subject: 'math',
    topicIds: ['5-2-increasing-decreasing'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The function $g$ is defined by $g(x) = x^3 - 3x$. Find the set of values of $x$ for which $g$ is decreasing. Give the two end values of this interval.',
      ru: 'Функция $g$ задана формулой $g(x) = x^3 - 3x$. Найдите множество значений $x$, при которых $g$ убывает. Укажите два конца этого промежутка.',
    },
    markscheme: {
      en: 'M1: $g\'(x) = 3x^2 - 3$. M1: $3x^2 - 3 < 0$, so $x^2 < 1$. A1: $-1 < x < 1$, so the end values are $-1$ and $1$.',
      ru: 'M1: $g\'(x) = 3x^2 - 3$. M1: $3x^2 - 3 < 0$, то есть $x^2 < 1$. A1: $-1 < x < 1$, значит концы промежутка равны $-1$ и $1$.',
    },
    answer: '-1; 1',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-2-03',
    subject: 'math',
    topicIds: ['5-2-increasing-decreasing'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'The function $f$ is defined by $f(x) = x^3 - 6x^2 + 9x + 1$ for $-1 \\le x \\le 5$.\n\n(a) Show that $f\'(x) = 3(x - 1)(x - 3)$. [2]\n\n(b) Find the $x$-coordinates of the points where the gradient of the graph of $f$ is zero. [2]\n\n(c) Find the total length of the intervals on which $f$ is increasing. [3]\n\n(d) Justify, using the sign of $f\'(x)$, why $f$ is decreasing on $1 < x < 3$. Then find $f\'(2)$. [3]\n\n(e) Find the value of $x$ in the interval $3 < x \\le 5$ for which $f\'(x) = 9$. [4]',
      ru: 'Функция $f$ задана формулой $f(x) = x^3 - 6x^2 + 9x + 1$ при $-1 \\le x \\le 5$.\n\n(a) Покажите, что $f\'(x) = 3(x - 1)(x - 3)$. [2]\n\n(b) Найдите $x$-координаты точек графика $f$, в которых градиент равен нулю. [2]\n\n(c) Найдите суммарную длину промежутков, на которых $f$ возрастает. [3]\n\n(d) Обоснуйте, используя знак $f\'(x)$, почему $f$ убывает при $1 < x < 3$. Затем найдите $f\'(2)$. [3]\n\n(e) Найдите значение $x$ на промежутке $3 < x \\le 5$, при котором $f\'(x) = 9$. [4]',
    },
    markscheme: {
      en: '(a) M1: differentiate term by term: $f\'(x) = 3x^2 - 12x + 9$. A1: $= 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$ (AG).\n(b) M1: $3(x - 1)(x - 3) = 0$. A1: $x = 1$ and $x = 3$.\n(c) M1: $f\'(x) > 0$ for $-1 \\le x < 1$ and for $3 < x \\le 5$. A1: the lengths are $2$ and $2$. A1: total length $4$.\n(d) R1: $f\'(x) < 0$ for $1 < x < 3$, because $(x - 1) > 0$ and $(x - 3) < 0$ there. M1: $f\'(2) = 3(1)(-1)$. A1: $f\'(2) = -3$.\n(e) M1: $3(x - 1)(x - 3) = 9$, so $x^2 - 4x = 0$. A1: $x(x - 4) = 0$, so $x = 0$ or $x = 4$. A1: only $x = 4$ lies in $3 < x \\le 5$. A1: $x = 4$.',
      ru: '(a) M1: дифференцируем почленно: $f\'(x) = 3x^2 - 12x + 9$. A1: $= 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$ (AG).\n(b) M1: $3(x - 1)(x - 3) = 0$. A1: $x = 1$ и $x = 3$.\n(c) M1: $f\'(x) > 0$ при $-1 \\le x < 1$ и при $3 < x \\le 5$. A1: длины равны $2$ и $2$. A1: суммарная длина $4$.\n(d) R1: $f\'(x) < 0$ при $1 < x < 3$, потому что там $(x - 1) > 0$, а $(x - 3) < 0$. M1: $f\'(2) = 3(1)(-1)$. A1: $f\'(2) = -3$.\n(e) M1: $3(x - 1)(x - 3) = 9$, откуда $x^2 - 4x = 0$. A1: $x(x - 4) = 0$, значит $x = 0$ или $x = 4$. A1: в промежуток $3 < x \\le 5$ попадает только $x = 4$. A1: $x = 4$.',
    },
    answer: '1; 3; 4; -3; 4',
    origin: 'original',
    minutes: 14,
  },
];
