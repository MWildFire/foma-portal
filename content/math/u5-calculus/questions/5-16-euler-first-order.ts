import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-16-01',
    subject: 'math',
    topicIds: ['5-16-euler-first-order'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'A solution curve of $\\dfrac{dy}{dx} = x + y$ passes through the point $(1, 2)$.\n\n(a) Use Euler’s method with step length $h = 0.5$ to estimate $y$ when $x = 2$. Give your answer to 2 decimal places. [2]\n\n(b) State, with a reason, whether your estimate is an overestimate or an underestimate of the true value. [1]',
      ru: 'Кривая решения уравнения $\\dfrac{dy}{dx} = x + y$ проходит через точку $(1, 2)$.\n\n(a) Используйте метод Эйлера с шагом $h = 0{,}5$, чтобы оценить $y$ при $x = 2$. Ответ дайте с точностью до 2 знаков после запятой. [2]\n\n(b) Укажите с обоснованием, является ли ваша оценка завышенной или заниженной по сравнению с истинным значением. [1]',
    },
    markscheme: {
      en: '(a) M1: two steps from $(1, 2)$: $y(1.5) = 2 + 0.5(1 + 2) = 3.5$, then $y(2) = 3.5 + 0.5(1.5 + 3.5)$. A1: $y(2) = 6.00$ (2 decimal places).\n(b) R1: the solution curve bends upwards on this interval, since $\\dfrac{d^2y}{dx^2} = 1 + x + y > 0$. Each tangent lies below the curve, so the estimate is an underestimate.',
      ru: '(a) M1: два шага из $(1, 2)$: $y(1{,}5) = 2 + 0{,}5(1 + 2) = 3{,}5$, затем $y(2) = 3{,}5 + 0{,}5(1{,}5 + 3{,}5)$. A1: $y(2) = 6{,}00$ (с 2 знаками после запятой).\n(b) R1: на этом отрезке кривая выгибается вверх, так как $\\dfrac{d^2y}{dx^2} = 1 + x + y > 0$. Каждая касательная лежит ниже кривой, поэтому оценка занижена.',
    },
    answer: '6.00',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-16-02',
    subject: 'math',
    topicIds: ['5-16-euler-first-order'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'A coupled system is modelled by $\\dfrac{dx}{dt} = x + y$ and $\\dfrac{dy}{dt} = t - x$, where $x = 2$ and $y = 3$ when $t = 0$. Use Euler’s method with step length $h = 0.5$ to estimate the values of $x$ and $y$ when $t = 1$. Give each answer to 2 decimal places.',
      ru: 'Связанная система описывается уравнениями $\\dfrac{dx}{dt} = x + y$ и $\\dfrac{dy}{dt} = t - x$, где $x = 2$ и $y = 3$ при $t = 0$. Используйте метод Эйлера с шагом $h = 0{,}5$, чтобы оценить значения $x$ и $y$ при $t = 1$. Каждый ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: first step from $t = 0$, using the values at $t = 0$: $x = 2 + 0.5(2 + 3) = 4.5$ and $y = 3 + 0.5(0 - 2) = 2$. M1: second step from $t = 0.5$, using only the values at that time: $x = 4.5 + 0.5(4.5 + 2) = 7.75$ and $y = 2 + 0.5(0.5 - 4.5) = 0$. A1: $x = 7.75$ and $y = 0.00$ (2 decimal places).',
      ru: 'M1: первый шаг из $t = 0$ по значениям при $t = 0$: $x = 2 + 0{,}5(2 + 3) = 4{,}5$ и $y = 3 + 0{,}5(0 - 2) = 2$. M1: второй шаг из $t = 0{,}5$, снова только по значениям в этот момент: $x = 4{,}5 + 0{,}5(4{,}5 + 2) = 7{,}75$ и $y = 2 + 0{,}5(0{,}5 - 4{,}5) = 0$. A1: $x = 7{,}75$ и $y = 0{,}00$ (с 2 знаками после запятой).',
    },
    answer: '7.75; 0.00',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-16-03',
    subject: 'math',
    topicIds: ['5-16-euler-first-order'],
    paper: 'P2',
    marks: 14,
    command: 'Estimate',
    prompt: {
      en: 'A cup of tea cools in a room. Its temperature $T$ (in °C) at time $t$ (in minutes) satisfies $\\dfrac{dT}{dt} = -0.2(T - 20)$, and $T = 80$ when $t = 0$. The exact solution is $T = 20 + 60e^{-0.2t}$.\n\n(a) Use Euler’s method with step length $h = 2$ to estimate the temperature at $t = 4$. Give your answer to 2 decimal places. [3]\n\n(b) Show that $T = 20 + 60e^{-0.2t}$ satisfies the differential equation and the initial condition. [3]\n\n(c) Find the exact temperature at $t = 4$, and the difference between the exact temperature and the Euler estimate from part (a). Give each answer to 2 decimal places. [3]\n\n(d) Find the time, in minutes, when the exact temperature is 30 °C. Give your answer to 3 decimal places. [3]\n\n(e) State, with a reason, whether the Euler estimate in part (a) is an overestimate or an underestimate. [2]',
      ru: 'Чашка чая остывает в комнате. Её температура $T$ (в °C) в момент времени $t$ (в минутах) удовлетворяет уравнению $\\dfrac{dT}{dt} = -0{,}2(T - 20)$, а при $t = 0$ температура $T = 80$. Точное решение: $T = 20 + 60e^{-0{,}2t}$.\n\n(a) Используйте метод Эйлера с шагом $h = 2$, чтобы оценить температуру при $t = 4$. Ответ дайте с точностью до 2 знаков после запятой. [3]\n\n(b) Покажите, что $T = 20 + 60e^{-0{,}2t}$ удовлетворяет дифференциальному уравнению и начальному условию. [3]\n\n(c) Найдите точную температуру при $t = 4$ и разность между точным значением и оценкой Эйлера из пункта (a). Каждый ответ дайте с точностью до 2 знаков после запятой. [3]\n\n(d) Найдите время в минутах, когда точная температура равна 30 °C. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(e) Укажите с обоснованием, является ли оценка Эйлера из пункта (a) завышенной или заниженной. [2]',
    },
    markscheme: {
      en: '(a) M1: first step $80 + 2(-0.2)(80 - 20) = 56$ at $t = 2$. M1: second step $56 + 2(-0.2)(56 - 20) = 41.6$ at $t = 4$. A1: 41.60 (2 decimal places).\n(b) M1: $\\dfrac{dT}{dt} = -12e^{-0.2t}$. M1: $-0.2(T - 20) = -0.2 \\times 60e^{-0.2t} = -12e^{-0.2t}$. R1: the two expressions agree, and $T = 20 + 60 = 80$ when $t = 0$, so the function satisfies the equation and the initial condition (AG).\n(c) M1: $T(4) = 20 + 60e^{-0.8}$. A1: $T(4) = 46.96$. A1: difference $46.96 - 41.60 = 5.36$ (2 decimal places).\n(d) M1: $20 + 60e^{-0.2t} = 30$, so $e^{-0.2t} = \\dfrac{1}{6}$. M1: $t = 5\\ln 6$. A1: $t = 8.959$ (3 decimal places).\n(e) R1: each Euler step multiplies the excess over 20 by $0.6$, but the exact solution multiplies it by $e^{-0.4}$ over the same step, and $e^{-0.4} > 0.6$. So the Euler values fall faster and the estimate is an underestimate.',
      ru: '(a) M1: первый шаг $80 + 2(-0{,}2)(80 - 20) = 56$ при $t = 2$. M1: второй шаг $56 + 2(-0{,}2)(56 - 20) = 41{,}6$ при $t = 4$. A1: $41{,}60$ (с 2 знаками после запятой).\n(b) M1: $\\dfrac{dT}{dt} = -12e^{-0{,}2t}$. M1: $-0{,}2(T - 20) = -0{,}2 \\times 60e^{-0{,}2t} = -12e^{-0{,}2t}$. R1: выражения совпадают, а при $t = 0$ получаем $T = 20 + 60 = 80$, поэтому функция удовлетворяет уравнению и начальному условию (AG).\n(c) M1: $T(4) = 20 + 60e^{-0{,}8}$. A1: $T(4) = 46{,}96$. A1: разность $46{,}96 - 41{,}60 = 5{,}36$ (с 2 знаками после запятой).\n(d) M1: $20 + 60e^{-0{,}2t} = 30$, значит $e^{-0{,}2t} = \\dfrac{1}{6}$. M1: $t = 5\\ln 6$. A1: $t = 8{,}959$ (с 3 знаками после запятой).\n(e) R1: каждый шаг Эйлера умножает превышение над 20 на $0{,}6$, а точное решение за тот же шаг умножает его на $e^{-0{,}4}$, и $e^{-0{,}4} > 0{,}6$. Значит, оценки Эйлера падают быстрее и занижены.',
    },
    answer: '41.60; 46.96; 5.36; 8.959',
    origin: 'original',
    minutes: 14,
  },
];
