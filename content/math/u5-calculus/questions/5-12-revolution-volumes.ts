import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-12-01',
    subject: 'math',
    topicIds: ['5-12-revolution-volumes'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The region enclosed by the curve $y = e^{x}$, the x-axis and the lines $x = 0$ and $x = 1$ is rotated through 360 degrees about the x-axis. Find the volume of the solid formed. Give your answer to 2 decimal places.',
      ru: 'Область, ограниченная кривой $y = e^{x}$, осью x и прямыми $x = 0$ и $x = 1$, поворачивается на 360 градусов вокруг оси x. Найдите объём полученного тела. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: $V = \\pi \\int_0^1 (e^{x})^2\\,dx = \\pi \\int_0^1 e^{2x}\\,dx$. A1: $\\dfrac{\\pi(e^{2} - 1)}{2}$ or an equivalent exact form. A1: 10.04 (2 decimal places).',
      ru: 'M1: $V = \\pi \\int_0^1 (e^{x})^2\\,dx = \\pi \\int_0^1 e^{2x}\\,dx$. A1: $\\dfrac{\\pi(e^{2} - 1)}{2}$ или равное точное выражение. A1: 10,04 (с точностью до 2 знаков после запятой).',
    },
    answer: '10.04',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-12-02',
    subject: 'math',
    topicIds: ['5-12-revolution-volumes'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The region enclosed by the curve $y = x^2 + 1$ for $x \\ge 0$, the y-axis and the lines $y = 1$ and $y = 5$ is rotated through 360 degrees about the y-axis. Find the volume of the solid formed. Give your answer to 2 decimal places.',
      ru: 'Область, ограниченная кривой $y = x^2 + 1$ при $x \\ge 0$, осью y и прямыми $y = 1$ и $y = 5$, поворачивается на 360 градусов вокруг оси y. Найдите объём полученного тела. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the curve gives $x^2 = y - 1$, so $x = \\sqrt{y - 1}$ for $1 \\le y \\le 5$. M1: $V = \\pi \\int_1^5 (y - 1)\\,dy$. A1: $8\\pi$. A1: 25.13 (2 decimal places).',
      ru: 'M1: кривая даёт $x^2 = y - 1$, поэтому $x = \\sqrt{y - 1}$ при $1 \\le y \\le 5$. M1: $V = \\pi \\int_1^5 (y - 1)\\,dy$. A1: $8\\pi$. A1: 25,13 (с точностью до 2 знаков после запятой).',
    },
    answer: '25.13',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-12-03',
    subject: 'math',
    topicIds: ['5-12-revolution-volumes'],
    paper: 'P2',
    marks: 16,
    command: 'Find',
    prompt: {
      en: 'A designer makes a solid glass paperweight. Its outline is the region enclosed by the curve $y = 9 - x^2$, the x-axis and the y-axis, for $x \\ge 0$. Lengths are in centimetres.\n\n(a) Find the value of $x$ where the curve meets the x-axis, for $x > 0$. [1]\n\n(b) Find the area of this region. [3]\n\n(c) The paperweight is formed by rotating the region through 360 degrees about the x-axis. Find its volume, giving your answer to 2 decimal places. [4]\n\n(d) Instead, the paperweight is formed by rotating the region through 360 degrees about the y-axis. Find its volume, giving your answer to 2 decimal places. [4]\n\n(e) The paperweight from part (d) is cut by the horizontal plane $y = k$. The part for $0 \\le y \\le k$ has half the volume of the whole paperweight from part (d). Find $k$, giving your answer to 2 decimal places. [4]',
      ru: 'Дизайнер делает сплошное стеклянное пресс-папье. Его контур — область, ограниченная кривой $y = 9 - x^2$, осью x и осью y, при $x \\ge 0$. Длины даны в сантиметрах.\n\n(a) Найдите значение $x$, при котором кривая пересекает ось x, при $x > 0$. [1]\n\n(b) Найдите площадь этой области. [3]\n\n(c) Пресс-папье получено вращением области на 360 градусов вокруг оси x. Найдите его объём, ответ дайте с точностью до 2 знаков после запятой. [4]\n\n(d) В другом варианте пресс-папье получено вращением области на 360 градусов вокруг оси y. Найдите его объём, ответ дайте с точностью до 2 знаков после запятой. [4]\n\n(e) Пресс-папье из части (d) разрезано горизонтальной плоскостью $y = k$. Часть при $0 \\le y \\le k$ имеет половину объёма всего пресс-папье из части (d). Найдите $k$, ответ дайте с точностью до 2 знаков после запятой. [4]',
    },
    markscheme: {
      en: '(a) A1: x = 3.\n(b) M1: area = $\\int_0^3 (9 - x^2)\\,dx$. A1: $\\left[9x - \\dfrac{x^3}{3}\\right]_0^3$. A1: 18 (cm²).\n(c) M1: $V = \\pi \\int_0^3 (9 - x^2)^2\\,dx$. A1: integrand expanded as $81 - 18x^2 + x^4$. M1: integrate to $\\pi\\left[81x - 6x^3 + \\dfrac{x^5}{5}\\right]_0^3$. A1: 407.15 (2 decimal places, cm³).\n(d) M1: the curve gives $x^2 = 9 - y$, so the radius is $x = \\sqrt{9 - y}$ for $0 \\le y \\le 9$. M1: $V = \\pi \\int_0^9 (9 - y)\\,dy$. A1: $\\dfrac{81\\pi}{2}$. A1: 127.23 (2 decimal places, cm³).\n(e) M1: $\\pi\\left(9k - \\dfrac{k^2}{2}\\right) = \\dfrac{1}{2} \\cdot \\dfrac{81\\pi}{2}$, so $k^2 - 18k + 40.5 = 0$. M1: solve the quadratic. A1: k = 2.64 (2 decimal places). R1: the other root is greater than 9, so it lies outside $0 \\le y \\le 9$ and is rejected.',
      ru: '(a) A1: x = 3.\n(b) M1: площадь равна $\\int_0^3 (9 - x^2)\\,dx$. A1: $\\left[9x - \\dfrac{x^3}{3}\\right]_0^3$. A1: 18 (см²).\n(c) M1: $V = \\pi \\int_0^3 (9 - x^2)^2\\,dx$. A1: подынтегральное выражение раскрыто: $81 - 18x^2 + x^4$. M1: интеграл $\\pi\\left[81x - 6x^3 + \\dfrac{x^5}{5}\\right]_0^3$. A1: 407,15 (с точностью до 2 знаков после запятой, см³).\n(d) M1: кривая даёт $x^2 = 9 - y$, поэтому радиус $x = \\sqrt{9 - y}$ при $0 \\le y \\le 9$. M1: $V = \\pi \\int_0^9 (9 - y)\\,dy$. A1: $\\dfrac{81\\pi}{2}$. A1: 127,23 (с точностью до 2 знаков после запятой, см³).\n(e) M1: $\\pi\\left(9k - \\dfrac{k^2}{2}\\right) = \\dfrac{1}{2} \\cdot \\dfrac{81\\pi}{2}$, откуда $k^2 - 18k + 40{,}5 = 0$. M1: решите квадратное уравнение. A1: k = 2,64 (с точностью до 2 знаков после запятой). R1: второй корень больше 9, он лежит вне $0 \\le y \\le 9$ и отбрасывается.',
    },
    answer: '3; 18; 407.15; 127.23; 2.64',
    origin: 'original',
    minutes: 16,
  },
];
