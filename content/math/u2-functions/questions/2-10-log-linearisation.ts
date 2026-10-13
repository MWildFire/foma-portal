import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-10-01',
    subject: 'math',
    topicIds: ['2-10-log-linearisation'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The sound intensity of a machine is $I = 3.2\\times10^{-9}$ W/m². The sound level is $L = 10\\log_{10}\\dfrac{I}{I_0}$ decibels, where $I_0 = 10^{-12}$ W/m². Calculate the sound level, in decibels, giving your answer to 2 decimal places.',
      ru: 'Сила звука станка $I = 3{,}2\\times10^{-9}$ Вт/м². Уровень звука $L = 10\\log_{10}\\dfrac{I}{I_0}$ децибел, где $I_0 = 10^{-12}$ Вт/м². Вычислите уровень звука в децибелах, ответ округлите до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: $\\dfrac{I}{I_0} = \\dfrac{3.2\\times10^{-9}}{10^{-12}} = 3200$. M1: $\\log_{10} 3200 = 3.505$ (3 decimal places). A1: $L = 10 \\times 3.505 = 35.05$ decibels.',
      ru: 'M1: $\\dfrac{I}{I_0} = \\dfrac{3{,}2\\times10^{-9}}{10^{-12}} = 3200$. M1: $\\log_{10} 3200 = 3{,}505$ (с точностью до 3 знаков). A1: $L = 10 \\times 3{,}505 = 35{,}05$ децибел.',
    },
    answer: '35.05',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-10-02',
    subject: 'math',
    topicIds: ['2-10-log-linearisation'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'On a log-log graph, the horizontal axis shows $\\log_{10} x$ and the vertical axis shows $\\log_{10} y$. Data that follow a power model $y = ax^{b}$ lie on a straight line through the points $(0, 0.5)$ and $(1, 2.0)$ on this graph. Find the values of $a$ and $b$, giving $a$ to 3 significant figures and $b$ to 2 decimal places.',
      ru: 'На графике log-log по горизонтали отложено $\\log_{10} x$, а по вертикали — $\\log_{10} y$. Данные, которые следуют степенной модели $y = ax^{b}$, лежат на прямой, проходящей через точки $(0;\\ 0{,}5)$ и $(1;\\ 2{,}0)$ этого графика. Найдите значения $a$ и $b$: $a$ — с точностью до 3 значащих цифр, $b$ — с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: gradient $b = \\dfrac{2.0 - 0.5}{1 - 0} = 1.5$. M1: the vertical intercept is $\\log_{10} a = 0.5$, so $a = 10^{0.5}$. A1: $b = 1.50$. A1: $a = 3.16$ (3 significant figures).',
      ru: 'M1: угловой коэффициент $b = \\dfrac{2{,}0 - 0{,}5}{1 - 0} = 1{,}5$. M1: вертикальный отрезок $\\log_{10} a = 0{,}5$, значит, $a = 10^{0{,}5}$. A1: $b = 1{,}50$. A1: $a = 3{,}16$ (3 значащие цифры).',
    },
    answer: '3.16; 1.50',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-10-03',
    subject: 'math',
    topicIds: ['2-10-log-linearisation'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A fisheries scientist measures the length $L$ cm and the mass $M$ g of six fish of one species:\n\n$L$: 12, 18, 24, 30, 36, 42\n\n$M$: 21, 66, 168, 320, 565, 872\n\nThe relationship is modelled by $M = aL^{b}$.\n\n(a) Find the equation of the least squares line of $\\log_{10} M$ against $\\log_{10} L$. Give the gradient and the vertical intercept, each to 3 decimal places. [3]\n\n(b) Hence find the value of $a$ to 3 significant figures. [3]\n\n(c) Find the factor by which the mass is multiplied when the length is doubled. Give your answer to 2 decimal places. [2]\n\n(d) Estimate the mass, in grams to the nearest gram, of a fish of length 27 cm. [2]\n\n(e) Find the correlation coefficient $r$ for the log-log graph and for the semi-log graph of $\\log_{10} M$ against $L$, each to 4 decimal places. State which model is more appropriate. [4]',
      ru: 'Специалист по рыбным запасам измеряет длину $L$ см и массу $M$ г шести рыб одного вида:\n\n$L$: 12, 18, 24, 30, 36, 42\n\n$M$: 21, 66, 168, 320, 565, 872\n\nСвязь описывается моделью $M = aL^{b}$.\n\n(a) Найдите уравнение прямой наименьших квадратов для $\\log_{10} M$ по $\\log_{10} L$. Укажите угловой коэффициент и вертикальный отрезок, каждый с точностью до 3 знаков после запятой. [3]\n\n(b) Затем найдите значение $a$ с точностью до 3 значащих цифр. [3]\n\n(c) Найдите, во сколько раз увеличивается масса при удвоении длины. Ответ округлите до 2 знаков после запятой. [2]\n\n(d) Оцените массу рыбы длиной 27 см в граммах, с точностью до грамма. [2]\n\n(e) Найдите коэффициент корреляции $r$ для графика log-log и для полулогарифмического графика $\\log_{10} M$ от $L$, каждый с точностью до 4 знаков после запятой. Укажите, какая модель более подходит. [4]',
    },
    markscheme: {
      en: '(a) M1: least squares regression of $\\log_{10} M$ on $\\log_{10} L$. A1: gradient $3.000$. A1: vertical intercept $-1.925$.\n(b) M1: $\\log_{10} a = -1.925$. M1: $a = 10^{-1.925}$. A1: $a = 0.0119$ (3 significant figures).\n(c) M1: the ratio $\\dfrac{M(2L)}{M(L)} = 2^{b}$. A1: $2^{3.000} = 8.00$.\n(d) M1: $M = 0.0119 \\times 27^{3.000}$. A1: $M = 234$ g.\n(e) M1: correlation coefficients for both graphs. A1: $r = 0.9998$ for the log-log graph. A1: $r = 0.9841$ for the semi-log graph. R1: the log-log points lie closer to a straight line, so the power model $M = aL^{b}$ is more appropriate than an exponential one.',
      ru: '(a) M1: метод наименьших квадратов для $\\log_{10} M$ по $\\log_{10} L$. A1: угловой коэффициент $3{,}000$. A1: вертикальный отрезок $-1{,}925$.\n(b) M1: $\\log_{10} a = -1{,}925$. M1: $a = 10^{-1{,}925}$. A1: $a = 0{,}0119$ (3 значащие цифры).\n(c) M1: отношение $\\dfrac{M(2L)}{M(L)} = 2^{b}$. A1: $2^{3{,}000} = 8{,}00$.\n(d) M1: $M = 0{,}0119 \\times 27^{3{,}000}$. A1: $M = 234$ г.\n(e) M1: коэффициенты корреляции для обоих графиков. A1: $r = 0{,}9998$ для графика log-log. A1: $r = 0{,}9841$ для полулогарифмического графика. R1: точки log-log ближе к прямой, поэтому степенная модель $M = aL^{b}$ подходит лучше показательной.',
    },
    answer: '3.000; -1.925; 0.0119; 8.00; 234; 0.9998; 0.9841',
    origin: 'original',
    minutes: 14,
  },
];
