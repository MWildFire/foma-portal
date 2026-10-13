import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-18-01',
    subject: 'math',
    topicIds: ['5-18-euler-second-order'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A particle moves along a line so that its position $x$ at time $t$ satisfies $\\frac{d^{2}x}{dt^{2}} = 2t - x$. When $t = 0$, $x = 0$ and $\\frac{dx}{dt} = 1$. Use Euler\'s method with step length $h = 0.5$ to find the approximate values of $x$ and $\\frac{dx}{dt}$ when $t = 1$. Give both answers to 2 decimal places.',
      ru: 'Частица движется по прямой так, что её положение $x$ в момент $t$ удовлетворяет уравнению $\\frac{d^{2}x}{dt^{2}} = 2t - x$. При $t = 0$ имеем $x = 0$ и $\\frac{dx}{dt} = 1$. Используйте метод Эйлера с длиной шага $h = 0{,}5$, чтобы найти приближённые значения $x$ и $\\frac{dx}{dt}$ при $t = 1$. Дайте оба ответа с 2 знаками после запятой.',
    },
    markscheme: {
      en: 'M1: first-order system $\\frac{dx}{dt} = v$ and $\\frac{dv}{dt} = 2t - x$, where $v = \\frac{dx}{dt}$. M1: Euler steps $x_{n+1} = x_n + hv_n$ and $v_{n+1} = v_n + h(2t_n - x_n)$ with $h = 0.5$. A1: after the first step, $x = 0.5$ and $\\frac{dx}{dt} = 1.0$. A1: at $t = 1$, $x = 1.00$ and $\\frac{dx}{dt} = 1.25$.',
      ru: 'M1: система первого порядка $\\frac{dx}{dt} = v$ и $\\frac{dv}{dt} = 2t - x$, где $v = \\frac{dx}{dt}$. M1: шаги Эйлера $x_{n+1} = x_n + hv_n$ и $v_{n+1} = v_n + h(2t_n - x_n)$ при $h = 0{,}5$. A1: после первого шага $x = 0{,}5$ и $\\frac{dx}{dt} = 1{,}0$. A1: при $t = 1$ имеем $x = 1{,}00$ и $\\frac{dx}{dt} = 1{,}25$.',
    },
    answer: '1.00; 1.25',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-5-18-02',
    subject: 'math',
    topicIds: ['5-18-euler-second-order'],
    paper: 'P1',
    marks: 3,
    command: 'Show that',
    prompt: {
      en: 'The equation $\\frac{d^{2}x}{dt^{2}} = -\\omega^{2}x$, where $\\omega > 0$, is solved by Euler\'s method with step length $h$. The method gives $x_{n+1} = x_n + hv_n$ and $v_{n+1} = v_n - h\\omega^{2}x_n$, where $v_n$ approximates $\\frac{dx}{dt}$ at step $n$. Let $E_n = \\omega^{2}x_n^{2} + v_n^{2}$. Show that $E_{n+1} = (1 + h^{2}\\omega^{2})E_n$.',
      ru: 'Уравнение $\\frac{d^{2}x}{dt^{2}} = -\\omega^{2}x$, где $\\omega > 0$, решается методом Эйлера с длиной шага $h$. Метод даёт $x_{n+1} = x_n + hv_n$ и $v_{n+1} = v_n - h\\omega^{2}x_n$, где $v_n$ приближает $\\frac{dx}{dt}$ на шаге $n$. Пусть $E_n = \\omega^{2}x_n^{2} + v_n^{2}$. Покажите, что $E_{n+1} = (1 + h^{2}\\omega^{2})E_n$.',
    },
    markscheme: {
      en: 'M1: substitute $x_{n+1}$ and $v_{n+1}$ into $E_{n+1} = \\omega^{2}x_{n+1}^{2} + v_{n+1}^{2}$. M1: expand the squares; the cross terms $+2h\\omega^{2}x_n v_n$ and $-2h\\omega^{2}x_n v_n$ cancel. A1: $E_{n+1} = \\omega^{2}x_n^{2} + v_n^{2} + h^{2}\\omega^{2}(\\omega^{2}x_n^{2} + v_n^{2}) = (1 + h^{2}\\omega^{2})E_n$ (AG).',
      ru: 'M1: подставьте $x_{n+1}$ и $v_{n+1}$ в $E_{n+1} = \\omega^{2}x_{n+1}^{2} + v_{n+1}^{2}$. M1: раскройте скобки; перекрёстные члены $+2h\\omega^{2}x_n v_n$ и $-2h\\omega^{2}x_n v_n$ сокращаются. A1: $E_{n+1} = \\omega^{2}x_n^{2} + v_n^{2} + h^{2}\\omega^{2}(\\omega^{2}x_n^{2} + v_n^{2}) = (1 + h^{2}\\omega^{2})E_n$ (AG).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-18-03',
    subject: 'math',
    topicIds: ['5-18-euler-second-order'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A particle moves along a straight line. Its displacement $x$ metres at time $t$ seconds satisfies $\\frac{d^{2}x}{dt^{2}} = -4x$, which describes simple harmonic motion. Initially $x = 2$ and $\\frac{dx}{dt} = 0$. Euler\'s method is used with step length $h = 0.2$.\n\n(a) Write the equation as a system of two first-order differential equations. [2]\n\n(b) Find the approximate values of $x$ and $\\frac{dx}{dt}$ at $t = 0.4$. Give your answers to 3 decimal places. [3]\n\n(c) Find the approximate value of $x$ at $t = 1$. Give your answer to 3 decimal places. [3]\n\n(d) The exact solution of this equation with these initial conditions is $x = 2\\cos 2t$. Find the percentage error in the Euler value of $x$ at $t = 1$, relative to the exact value. Give your answer to 1 decimal place. [3]\n\n(e) Let $E = 4x^{2} + \\left(\\frac{dx}{dt}\\right)^{2}$. For the exact solution, $E$ is constant and equals $4A^{2}$, where $A$ is the amplitude. Show that Euler\'s method multiplies $E$ by the same factor at each step, and hence find, to 3 decimal places, the factor by which the amplitude of the approximate solution increases over the first five steps. [3]',
      ru: 'Частица движется по прямой. Её смещение $x$ в метрах в момент $t$ секунд удовлетворяет уравнению $\\frac{d^{2}x}{dt^{2}} = -4x$, которое описывает простое гармоническое движение. Вначале $x = 2$ и $\\frac{dx}{dt} = 0$. Используется метод Эйлера с длиной шага $h = 0{,}2$.\n\n(a) Запишите уравнение как систему двух уравнений первого порядка. [2]\n\n(b) Найдите приближённые значения $x$ и $\\frac{dx}{dt}$ при $t = 0{,}4$. Дайте ответы с 3 знаками после запятой. [3]\n\n(c) Найдите приближённое значение $x$ при $t = 1$. Дайте ответ с 3 знаками после запятой. [3]\n\n(d) Точное решение этого уравнения при тех же начальных условиях: $x = 2\\cos 2t$. Найдите процентную ошибку приближения Эйлера для $x$ при $t = 1$ относительно точного значения. Дайте ответ с 1 знаком после запятой. [3]\n\n(e) Пусть $E = 4x^{2} + \\left(\\frac{dx}{dt}\\right)^{2}$. Для точного решения $E$ постоянна и равна $4A^{2}$, где $A$ — амплитуда. Покажите, что метод Эйлера умножает $E$ на один и тот же множитель на каждом шаге, и найдите с 3 знаками после запятой, во сколько раз возрастает амплитуда приближённого решения за первые пять шагов. [3]',
    },
    markscheme: {
      en: '(a) M1: put $v = \\frac{dx}{dt}$, so $\\frac{dv}{dt} = \\frac{d^{2}x}{dt^{2}} = -4x$. A1: the system $\\frac{dx}{dt} = v$ and $\\frac{dv}{dt} = -4x$.\n(b) M1: Euler steps $x_{n+1} = x_n + 0.2v_n$ and $v_{n+1} = v_n - 0.8x_n$. A1: $x = 1.680$ at $t = 0.4$. A1: $\\frac{dx}{dt} = -3.200$ at $t = 0.4$.\n(c) M1: continue the steps. At $t = 0.6$, $x = 1.040$ and $\\frac{dx}{dt} = -4.544$; at $t = 0.8$, $x = 0.131$ and $\\frac{dx}{dt} = -5.376$. A1: both pairs correct. A1: $x = -0.944$ at $t = 1$.\n(d) M1: the exact value is $x = 2\\cos 2 = -0.83229$ (keep full accuracy). M1: percentage error $= \\dfrac{|-0.944 - (-0.83229)|}{|-0.83229|} \\times 100$. A1: $13.4$ (1 decimal place).\n(e) M1: substitute the Euler steps into $E_{n+1} = 4x_{n+1}^{2} + v_{n+1}^{2}$ and expand; the cross terms cancel. A1: $E_{n+1} = (1 + 4h^{2})E_n = 1.16E_n$ (AG). A1: after five steps $E$ is multiplied by $1.16^{5}$, so the amplitude $\\sqrt{E}/2$ is multiplied by $1.16^{5/2} = 1.449$.',
      ru: '(a) M1: положим $v = \\frac{dx}{dt}$, тогда $\\frac{dv}{dt} = \\frac{d^{2}x}{dt^{2}} = -4x$. A1: система $\\frac{dx}{dt} = v$ и $\\frac{dv}{dt} = -4x$.\n(b) M1: шаги Эйлера $x_{n+1} = x_n + 0{,}2v_n$ и $v_{n+1} = v_n - 0{,}8x_n$. A1: $x = 1{,}680$ при $t = 0{,}4$. A1: $\\frac{dx}{dt} = -3{,}200$ при $t = 0{,}4$.\n(c) M1: продолжаем шаги. При $t = 0{,}6$ имеем $x = 1{,}040$ и $\\frac{dx}{dt} = -4{,}544$; при $t = 0{,}8$ имеем $x = 0{,}131$ и $\\frac{dx}{dt} = -5{,}376$. A1: обе пары верны. A1: $x = -0{,}944$ при $t = 1$.\n(d) M1: точное значение $x = 2\\cos 2 = -0{,}83229$ (сохраняйте полную точность). M1: процентная ошибка $= \\dfrac{|-0{,}944 - (-0{,}83229)|}{|-0{,}83229|} \\times 100$. A1: $13{,}4$ (1 знак после запятой).\n(e) M1: подставьте шаги Эйлера в $E_{n+1} = 4x_{n+1}^{2} + v_{n+1}^{2}$ и раскройте скобки; перекрёстные члены сокращаются. A1: $E_{n+1} = (1 + 4h^{2})E_n = 1{,}16E_n$ (AG). A1: после пяти шагов $E$ умножается на $1{,}16^{5}$, поэтому амплитуда $\\sqrt{E}/2$ умножается на $1{,}16^{5/2} = 1{,}449$.',
    },
    answer: '1.680; -3.200; -0.944; 13.4; 1.449',
    origin: 'original',
    minutes: 14,
  },
];
