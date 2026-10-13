import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-15-01',
    subject: 'math',
    topicIds: ['5-15-slope-fields'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A slope field is drawn for $\\dfrac{dy}{dx} = x - 2y$. Find the gradient $m$ and the $y$-intercept $c$ of the isocline on which every segment has gradient $\\dfrac{1}{2}$. Write the isocline in the form $y = mx + c$ and give $m$ and $c$ as exact decimals.',
      ru: 'Построено поле направлений для $\\dfrac{dy}{dx} = x - 2y$. Найдите наклон $m$ и отрезок $c$ на оси $y$ изоклины, на которой все отрезки имеют наклон $\\dfrac{1}{2}$. Запишите изоклину в виде $y = mx + c$ и дайте $m$ и $c$ в виде десятичных дробей.',
    },
    markscheme: {
      en: 'M1: set $x - 2y = \\dfrac{1}{2}$. M1: rearrange to $y = \\dfrac{1}{2}x - \\dfrac{1}{4}$. A1: $m = 0.5$ and $c = -0.25$.',
      ru: 'M1: положить $x - 2y = \\dfrac{1}{2}$. M1: выразить $y = \\dfrac{1}{2}x - \\dfrac{1}{4}$. A1: $m = 0{,}5$ и $c = -0{,}25$.',
    },
    answer: '0.5; -0.25',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-15-02',
    subject: 'math',
    topicIds: ['5-15-slope-fields'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A solution curve of $\\dfrac{dy}{dx} = x - y$ passes through the point $(0, 1)$. Find the equation of the tangent to this curve at $(0, 1)$ in the form $y = mx + c$. Give the values of $m$ and $c$.',
      ru: 'Кривая решения уравнения $\\dfrac{dy}{dx} = x - y$ проходит через точку $(0, 1)$. Найдите уравнение касательной к этой кривой в точке $(0, 1)$ в виде $y = mx + c$. Укажите значения $m$ и $c$.',
    },
    markscheme: {
      en: 'M1: the gradient at $(0, 1)$ is $f(0, 1) = 0 - 1 = -1$, so $m = -1$. M1: the tangent is $y - 1 = -1(x - 0)$. A1: $m = -1$ and $c = 1$.',
      ru: 'M1: наклон в точке $(0, 1)$ равен $f(0, 1) = 0 - 1 = -1$, значит, $m = -1$. M1: касательная $y - 1 = -1(x - 0)$. A1: $m = -1$ и $c = 1$.',
    },
    answer: '-1; 1',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-15-03',
    subject: 'math',
    topicIds: ['5-15-slope-fields'],
    paper: 'P2',
    marks: 14,
    command: 'Determine',
    prompt: {
      en: 'A population of rabbits in a reserve is modelled by $\\dfrac{dy}{dx} = y\\left(1 - \\dfrac{y}{4}\\right)$, where $y$ is the population in hundreds and $x$ is the time in years. At $x = 0$ the population is 100 rabbits, so the solution curve passes through $(0, 1)$. The solution is $y = \\dfrac{4}{1 + 3e^{-x}}$.\n\n(a) Show that $y = \\dfrac{4}{1 + 3e^{-x}}$ satisfies the differential equation. [3]\n\n(b) Using the slope field, determine the two values of $y$ (in hundreds) at which the population does not change. [3]\n\n(c) Find the rate of change of the population, in rabbits per year, when the population is 200 rabbits. [3]\n\n(d) Find the time, in years, when the population first reaches 300 rabbits. Give your answer to 3 decimal places. [4]\n\n(e) Comment on whether the model is realistic for the population in the long run. [1]',
      ru: 'Популяция кроликов в заповеднике описывается уравнением $\\dfrac{dy}{dx} = y\\left(1 - \\dfrac{y}{4}\\right)$, где $y$ — численность в сотнях, а $x$ — время в годах. В момент $x = 0$ популяция составляет 100 кроликов, поэтому кривая решения проходит через точку $(0, 1)$. Решение: $y = \\dfrac{4}{1 + 3e^{-x}}$.\n\n(a) Покажите, что $y = \\dfrac{4}{1 + 3e^{-x}}$ удовлетворяет дифференциальному уравнению. [3]\n\n(b) По полю направлений определите два значения $y$ (в сотнях), при которых численность не меняется. [3]\n\n(c) Найдите скорость изменения численности, в кроликах в год, когда популяция составляет 200 кроликов. [3]\n\n(d) Найдите время в годах, когда численность впервые достигнет 300 кроликов. Ответ дайте с точностью до 3 знаков после запятой. [4]\n\n(e) Прокомментируйте, реалистична ли модель для численности в долгосрочной перспективе. [1]',
    },
    markscheme: {
      en: '(a) M1: $\\dfrac{dy}{dx} = \\dfrac{12e^{-x}}{(1 + 3e^{-x})^2}$. M1: $y\\left(1 - \\dfrac{y}{4}\\right) = \\dfrac{4}{1 + 3e^{-x}} \\cdot \\dfrac{3e^{-x}}{1 + 3e^{-x}} = \\dfrac{12e^{-x}}{(1 + 3e^{-x})^2}$. R1: both sides are equal, so the function satisfies the equation (AG).\n(b) M1: set $y\\left(1 - \\dfrac{y}{4}\\right) = 0$. A1: $y = 0$ and $y = 4$. R1: the segments are horizontal along these two lines for every $x$.\n(c) M1: $\\dfrac{dy}{dx} = 2\\left(1 - \\dfrac{2}{4}\\right)$. A1: $\\dfrac{dy}{dx} = 1$, that is 1 hundred rabbits per year. A1: 100 rabbits per year.\n(d) M1: $\\dfrac{4}{1 + 3e^{-x}} = 3$. M1: $e^{-x} = \\dfrac{1}{9}$. A1: $x = \\ln 9$. A1: $x = 2.197$ (3 decimal places).\n(e) R1: a valid comment, for example that the model predicts a limit of 400 rabbits, which is plausible if food limits growth, but that it ignores predators, disease and migration.',
      ru: '(a) M1: $\\dfrac{dy}{dx} = \\dfrac{12e^{-x}}{(1 + 3e^{-x})^2}$. M1: $y\\left(1 - \\dfrac{y}{4}\\right) = \\dfrac{4}{1 + 3e^{-x}} \\cdot \\dfrac{3e^{-x}}{1 + 3e^{-x}} = \\dfrac{12e^{-x}}{(1 + 3e^{-x})^2}$. R1: обе части равны, значит, функция удовлетворяет уравнению (AG).\n(b) M1: положить $y\\left(1 - \\dfrac{y}{4}\\right) = 0$. A1: $y = 0$ и $y = 4$. R1: отрезки горизонтальны вдоль этих двух прямых при всех $x$.\n(c) M1: $\\dfrac{dy}{dx} = 2\\left(1 - \\dfrac{2}{4}\\right)$. A1: $\\dfrac{dy}{dx} = 1$, то есть 1 сотня кроликов в год. A1: 100 кроликов в год.\n(d) M1: $\\dfrac{4}{1 + 3e^{-x}} = 3$. M1: $e^{-x} = \\dfrac{1}{9}$. A1: $x = \\ln 9$. A1: $x = 2{,}197$ (с 3 знаками после запятой).\n(e) R1: допустимый комментарий, например: модель предсказывает предел в 400 кроликов, что правдоподобно, если рост ограничен кормом, но модель не учитывает хищников, болезни и миграцию.',
    },
    answer: '0; 4; 100; 2.197',
    origin: 'original',
    minutes: 14,
  },
];
