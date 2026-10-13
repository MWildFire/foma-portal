import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-1-01',
    subject: 'math',
    topicIds: ['5-1-limits-derivative'],
    paper: 'P1',
    marks: 3,
    command: 'Find, State',
    prompt: {
      en: 'The function $f(x) = x^3 - 6x^2 + 9x + 1$ is given. For $h \\neq 0$, let $g(h)$ be the gradient of the chord joining the points on the graph where $x = 1$ and $x = 1 + h$. Find $g(0.1)$ and $g(0.01)$, giving each answer correct to 4 decimal places. Then state the exact value that $g(h)$ approaches as $h \\to 0$.',
      ru: 'Дана функция $f(x) = x^3 - 6x^2 + 9x + 1$. Для $h \\neq 0$ пусть $g(h)$ — градиент хорды, соединяющей точки графика с $x = 1$ и $x = 1 + h$. Найдите $g(0{,}1)$ и $g(0{,}01)$, каждый ответ округлите до 4 знаков после запятой. Затем укажите точное значение, к которому приближается $g(h)$ при $h \\to 0$.',
    },
    markscheme: {
      en: 'M1: chord gradient g(h) = (f(1 + h) - f(1)) / h. A1: f(1) = 5 and f(1.1) = 4.971, so g(0.1) = -0.2900. A1: g(0.01) = -0.0299, and the limit as h tends to 0 is 0, the gradient of the curve at x = 1.',
      ru: 'M1: градиент хорды g(h) = (f(1 + h) - f(1)) / h. A1: f(1) = 5 и f(1,1) = 4,971, поэтому g(0,1) = -0,2900. A1: g(0,01) = -0,0299, а предел при h → 0 равен 0, то есть градиенту кривой при x = 1.',
    },
    answer: '-0.2900; -0.0299; 0',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-1-02',
    subject: 'math',
    topicIds: ['5-1-limits-derivative'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'The volume of water in a tank, $V$ litres, is modelled by $V(t) = 0.5t^3 + 4t$, where $t$ is the time in minutes after a tap is opened and $0 \\le t \\le 10$. Use the average rate of change of $V$ over the interval $2 \\le t \\le 2.001$ to estimate the instantaneous rate of change at $t = 2$. Give the rate in litres per minute, correct to 2 decimal places.',
      ru: 'Объём воды в баке $V$ литров моделируется функцией $V(t) = 0{,}5t^3 + 4t$, где $t$ — время в минутах после открытия крана и $0 \\le t \\le 10$. Используя среднюю скорость изменения $V$ на промежутке $2 \\le t \\le 2{,}001$, оцените мгновенную скорость изменения при $t = 2$. Ответ дайте в литрах в минуту с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: average rate = (V(2.001) - V(2)) / 0.001. M1: V(2) = 12 and V(2.001) = 12.010003, so the change is 0.010003. A1: average rate = 10.003, so the rate is 10.00 litres per minute.',
      ru: 'M1: средняя скорость = (V(2,001) - V(2)) / 0,001. M1: V(2) = 12 и V(2,001) = 12,010003, поэтому изменение равно 0,010003. A1: средняя скорость = 10,003, значит скорость равна 10,00 литра в минуту.',
    },
    answer: '10.00',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-1-03',
    subject: 'math',
    topicIds: ['5-1-limits-derivative'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'The curve has equation $f(x) = x^3 - 6x^2 + 9x + 1$. For $h \\neq 0$, let $g(h)$ be the gradient of the chord joining the points on the curve where $x = 2$ and $x = 2 + h$.\n\n(a) Show that $g(h) = -3 + h^2$. [3]\n\n(b) Hence write down the gradient of the curve at $x = 2$. [2]\n\n(c) Find the positive value of $h$ for which $g(h) = -2.99$. Give your answer correct to 3 decimal places. [3]\n\n(d) Find $g(0.01) - f\'(2)$, giving your answer correct to 4 decimal places. [3]\n\n(e) Comment on how $g(h)$ behaves as $h \\to 0$, and explain what this means for the gradient of the curve at $x = 2$. [3]',
      ru: 'Кривая задана уравнением $f(x) = x^3 - 6x^2 + 9x + 1$. Для $h \\neq 0$ пусть $g(h)$ — градиент хорды, соединяющей точки кривой с $x = 2$ и $x = 2 + h$.\n\n(a) Покажите, что $g(h) = -3 + h^2$. [3]\n\n(b) Используя это, запишите градиент кривой при $x = 2$. [2]\n\n(c) Найдите положительное значение $h$, при котором $g(h) = -2{,}99$. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(d) Найдите $g(0{,}01) - f\'(2)$, ответ дайте с точностью до 4 знаков после запятой. [3]\n\n(e) Прокомментируйте, как ведёт себя $g(h)$ при $h \\to 0$, и объясните, что это означает для градиента кривой при $x = 2$. [3]',
    },
    markscheme: {
      en: '(a) M1: f(2) = 3 and f(2 + h) = 3 - 3h + h^3. M1: g(h) = (f(2 + h) - f(2)) / h = (-3h + h^3) / h. A1: g(h) = -3 + h^2 (AG).\n(b) M1: as h tends to 0, g(h) tends to -3. A1: the gradient of the curve at x = 2 is -3.\n(c) M1: -3 + h^2 = -2.99. A1: h^2 = 0.01. A1: h = 0.100.\n(d) M1: g(0.01) = -3 + 0.0001 = -2.9999.\nM1: f\'(2) = -3, from part (b).\nA1: g(0.01) - f\'(2) = 0.0001 (4 decimal places).\n(e) R1: h^2 gets smaller as h gets smaller, so g(h) = -3 + h^2 gets closer to -3. R1: the chord gradients approach the gradient of the curve at x = 2. A1: a valid comment that links the chord to the tangent.',
      ru: '(a) M1: f(2) = 3 и f(2 + h) = 3 - 3h + h^3. M1: g(h) = (f(2 + h) - f(2)) / h = (-3h + h^3) / h. A1: g(h) = -3 + h^2 (AG).\n(b) M1: при h → 0 значение g(h) стремится к -3. A1: градиент кривой при x = 2 равен -3.\n(c) M1: -3 + h^2 = -2,99. A1: h^2 = 0,01. A1: h = 0,100.\n(d) M1: g(0,01) = -3 + 0,0001 = -2,9999.\nM1: f\'(2) = -3, из части (b).\nA1: g(0,01) - f\'(2) = 0,0001 (4 знака после запятой).\n(e) R1: h^2 становится меньше при уменьшении h, поэтому g(h) = -3 + h^2 приближается к -3. R1: градиенты хорд стремятся к градиенту кривой при x = 2. A1: верный комментарий, связывающий хорду с касательной.',
    },
    answer: '-3; 0.100; 0.0001',
    origin: 'original',
    minutes: 14,
  },
];
