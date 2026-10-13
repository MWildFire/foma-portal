import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-8-01',
    subject: 'math',
    topicIds: ['5-8-trapezoidal-rule'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'Water flows into a tank at a rate of $r$ litres per minute. The rate was measured every 2 minutes: $r = 3.0$, $4.2$, $5.1$ and $4.8$ at $t = 0$, $2$, $4$ and $6$ minutes. Use the trapezoidal rule to estimate the volume of water that flowed into the tank in the first 6 minutes. Give your answer in litres, correct to 1 decimal place.',
      ru: 'Вода поступает в бак со скоростью $r$ литров в минуту. Скорость измеряли каждые 2 минуты: $r = 3{,}0$, $4{,}2$, $5{,}1$ и $4{,}8$ в моменты $t = 0$, $2$, $4$ и $6$ минут. Используя формулу трапеций, оцените объём воды, поступившей в бак за первые 6 минут. Ответ дайте в литрах с точностью до 1 знака после запятой.',
    },
    markscheme: {
      en: 'M1: strip width $h = 2$ and the trapezoidal form $\\dfrac{h}{2}\\left[r_{0} + 2(r_{1} + r_{2}) + r_{3}\\right]$. M1: substitution, with $\\dfrac{h}{2} = 1$: $1 \\times \\left[3.0 + 2(4.2 + 5.1) + 4.8\\right]$. A1: 26.4 litres (1 decimal place).',
      ru: 'M1: ширина полоски $h = 2$ и формула трапеций $\\dfrac{h}{2}\\left[r_{0} + 2(r_{1} + r_{2}) + r_{3}\\right]$. M1: подстановка при $\\dfrac{h}{2} = 1$: $1 \\times \\left[3{,}0 + 2(4{,}2 + 5{,}1) + 4{,}8\\right]$. A1: 26,4 литра (с 1 знаком после запятой).',
    },
    answer: '26.4',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-8-02',
    subject: 'math',
    topicIds: ['5-8-trapezoidal-rule'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'Use the trapezoidal rule with 2 strips to estimate $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx$. Give your answer correct to 3 decimal places.',
      ru: 'Используя формулу трапеций с 2 полосками, оцените $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx$. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: $h = 0.5$ and the ordinates $f(0) = 0$, $f(0.5) = 0.5e^{0.5} = 0.824$ and $f(1) = e = 2.718$. M1: $\\dfrac{0.5}{2}\\left[0 + 2(0.5e^{0.5}) + e\\right]$. A1: 1.092 (3 decimal places).',
      ru: 'M1: $h = 0{,}5$ и ординаты $f(0) = 0$, $f(0{,}5) = 0{,}5e^{0{,}5} = 0{,}824$ и $f(1) = e = 2{,}718$. M1: $\\dfrac{0{,}5}{2}\\left[0 + 2(0{,}5e^{0{,}5}) + e\\right]$. A1: 1,092 (с точностью до 3 знаков).',
    },
    answer: '1.092',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-8-03',
    subject: 'math',
    topicIds: ['5-8-trapezoidal-rule'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'The rate at which water flows out of a tank is modelled by $f(t) = \\dfrac{1}{t+1}$ litres per second, for $0 \\le t \\le 4$, where $t$ is the time in seconds.\n\n(a) Find the volume of water that flows out in the first 4 seconds, that is $\\displaystyle\\int_{0}^{4} f(t)\\,dt$. Give your answer to 3 decimal places. [3]\n\n(b) Use the trapezoidal rule with 4 strips to estimate this volume. Give your answer to 3 decimal places. [3]\n\n(c) Find the error of the estimate in (b), defined as the estimate minus the exact value. Give your answer to 3 decimal places. [2]\n\n(d) By considering $f\'\'(t)$, justify whether the estimate in (b) is an overestimate or an underestimate. [3]\n\n(e) Use the trapezoidal rule with 8 strips to estimate the volume again. Give your answer to 3 decimal places, and comment on whether this estimate is closer to the exact value than the estimate in (b). [3]',
      ru: 'Скорость вытекания воды из бака задана функцией $f(t) = \\dfrac{1}{t+1}$ литров в секунду при $0 \\le t \\le 4$, где $t$ — время в секундах.\n\n(a) Найдите объём воды, вытекшей за первые 4 секунды, то есть $\\displaystyle\\int_{0}^{4} f(t)\\,dt$. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(b) Используя формулу трапеций с 4 полосками, оцените этот объём. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(c) Найдите погрешность оценки из пункта (b), определённую как оценка минус точное значение. Ответ дайте с точностью до 3 знаков после запятой. [2]\n\n(d) Рассмотрев $f\'\'(t)$, обоснуйте, является ли оценка из пункта (b) завышенной или заниженной. [3]\n\n(e) Оцените тот же объём по формуле трапеций с 8 полосками. Ответ дайте с точностью до 3 знаков после запятой и прокомментируйте, ближе ли эта оценка к точному значению, чем оценка из пункта (b). [3]',
    },
    markscheme: {
      en: '(a) M1: antiderivative $\\ln(t+1)$. A1: $\\left[\\ln(t+1)\\right]_{0}^{4} = \\ln 5 - \\ln 1 = \\ln 5$. A1: 1.609 (3 decimal places).\n(b) M1: $h = 1$ and the ordinates $1$, $0.5$, $0.333$, $0.25$ and $0.2$ at $t = 0, 1, 2, 3, 4$. M1: $\\dfrac{1}{2}\\left[y_{0} + 2(y_{1} + y_{2} + y_{3}) + y_{4}\\right]$ with these ordinates. A1: 1.683 (3 decimal places).\n(c) M1: $E = T_{4} - I = 1.683 - 1.609$. A1: 0.074 (3 decimal places).\n(d) R1: $f\'\'(t) = \\dfrac{2}{(t+1)^{3}} > 0$ for $0 \\le t \\le 4$, so the curve is concave up. R1: the chords lie above a concave up curve, so the trapezia overestimate the area. A1: an overestimate, $T_{4} > I$.\n(e) M1: $h = 0.5$, giving 9 ordinates. A1: $T_{8} = 1.629$ (3 decimal places). R1: $|T_{8} - I| = 0.020 < 0.074$, so the 8-strip estimate is closer to the exact value.',
      ru: '(a) M1: первообразная $\\ln(t+1)$. A1: $\\left[\\ln(t+1)\\right]_{0}^{4} = \\ln 5 - \\ln 1 = \\ln 5$. A1: 1,609 (с точностью до 3 знаков).\n(b) M1: $h = 1$ и ординаты $1$, $0{,}5$, $0{,}333$, $0{,}25$ и $0{,}2$ при $t = 0, 1, 2, 3, 4$. M1: $\\dfrac{1}{2}\\left[y_{0} + 2(y_{1} + y_{2} + y_{3}) + y_{4}\\right]$ с этими ординатами. A1: 1,683 (с точностью до 3 знаков).\n(c) M1: $E = T_{4} - I = 1{,}683 - 1{,}609$. A1: 0,074 (с точностью до 3 знаков).\n(d) R1: $f\'\'(t) = \\dfrac{2}{(t+1)^{3}} > 0$ при $0 \\le t \\le 4$, значит, график выпуклый вниз. R1: хорды лежат над графиком, выпуклым вниз, поэтому трапеции завышают площадь. A1: оценка завышена, $T_{4} > I$.\n(e) M1: $h = 0{,}5$, получаем 9 ординат. A1: $T_{8} = 1{,}629$ (с точностью до 3 знаков). R1: $|T_{8} - I| = 0{,}020 < 0{,}074$, значит, оценка по 8 полоскам ближе к точному значению.',
    },
    answer: '1.609; 1.683; 0.074; 1.629',
    origin: 'original',
    minutes: 14,
  },
];
