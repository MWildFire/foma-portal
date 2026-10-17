import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-9-01',
    subject: 'math',
    topicIds: ['2-9-extended-models'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A drug is given to a patient. The amount of the drug in the blood, $A$ mg, $t$ hours after the dose, is modelled by $A = 400e^{-0.231t}$. Find the half-life of the drug in hours, giving your answer to 2 decimal places.',
      ru: 'Препарат дают пациенту. Количество препарата в крови $A$ мг через $t$ часов после приёма описывается моделью $A = 400e^{-0{,}231t}$. Найдите период полураспада препарата в часах, ответ округлите до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the amount halves when $400e^{-0.231T} = 200$. M1: $T = \\dfrac{\\ln 2}{0.231}$. A1: $T = 3.00$ hours (to 2 decimal places).',
      ru: 'M1: количество уменьшается вдвое при $400e^{-0{,}231T} = 200$. M1: $T = \\dfrac{\\ln 2}{0{,}231}$. A1: $T = 3{,}00$ часа (с точностью до 2 знаков после запятой).',
    },
    answer: '3.00',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-9-02',
    subject: 'math',
    topicIds: ['2-9-extended-models'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The depth of water in a harbour, $h$ metres, $t$ hours after midnight, is modelled by $h = 1.8\\sin\\big(0.5(t-1)\\big) + 2.4$ for $0 \\le t \\le 12$, where the sine is taken in radians. Find the period of the model, in hours, and the value of $t$ at which the depth is greatest. Give both answers to 2 decimal places.',
      ru: 'Глубина воды в гавани $h$ метров через $t$ часов после полуночи описывается моделью $h = 1{,}8\\sin\\big(0{,}5(t-1)\\big) + 2{,}4$ при $0 \\le t \\le 12$; синус берётся в радианах. Найдите период модели в часах и значение $t$, при котором глубина наибольшая. Оба ответа округлите до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: period $= \\dfrac{2\\pi}{0.5} = 4\\pi$. A1: period $= 12.57$ hours. M1: the depth is greatest when $\\sin(0.5(t-1)) = 1$, so $0.5(t-1) = \\dfrac{\\pi}{2}$, the only solution with $0 \\le t \\le 12$. A1: $t = 4.14$.',
      ru: 'M1: период $= \\dfrac{2\\pi}{0{,}5} = 4\\pi$. A1: период $= 12{,}57$ часа. M1: глубина наибольшая при $\\sin(0{,}5(t-1)) = 1$, то есть $0{,}5(t-1) = \\dfrac{\\pi}{2}$; это единственное решение при $0 \\le t \\le 12$. A1: $t = 4{,}14$.',
    },
    answer: '12.57; 4.14',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-9-03',
    subject: 'math',
    topicIds: ['2-9-extended-models'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A school launches a sign-up campaign for a new study club. The number of students, $N$, who have signed up $t$ days after the launch is modelled by $N = \\dfrac{200}{1 + 99e^{-0.9t}}$ for $t \\ge 0$.\n\n(a) Find the number of students who signed up on the day of the launch. [2]\n\n(b) Find the value of $t$ when $N = 100$, giving your answer to 2 decimal places. [3]\n\n(c) Use your GDC to estimate the maximum rate of increase of $N$, in students per day. Graph the central-difference quotient $(N(t+0.001)-N(t-0.001))/0.002$ for $t \\ge 0.001$ and find its maximum. Analytic differentiation is not required. [4]\n\n(d) Find the value of $t$ when $N = 180$, giving your answer to 2 decimal places. [3]\n\n(e) The organisers claim that 250 students will sign up. Comment on this claim using the model. [2]',
      ru: 'В школе стартует запись в новый учебный клуб. Число учеников $N$, записавшихся через $t$ дней после старта, описывается моделью $N = \\dfrac{200}{1 + 99e^{-0{,}9t}}$ при $t \\ge 0$.\n\n(a) Найдите число учеников, записавшихся в день старта. [2]\n\n(b) Найдите значение $t$, при котором $N = 100$; ответ округлите до 2 знаков после запятой. [3]\n\n(c) На GDC оцени наибольшую скорость роста $N$ в учениках в день: построй центральную разность $(N(t+0.001)-N(t-0.001))/0.002$ при $t \\ge 0.001$ и найди её максимум. Аналитическая производная не требуется. [4]\n\n(d) Найдите значение $t$, при котором $N = 180$; ответ округлите до 2 знаков после запятой. [3]\n\n(e) Организаторы утверждают, что запишутся 250 учеников. Прокомментируйте это утверждение, используя модель. [2]',
    },
    markscheme: {
      en: '(a) M1: substitutes $t = 0$: $N = \\dfrac{200}{1 + 99} = 2$. A1: 2 students.\n(b) M1: $\\dfrac{200}{1 + 99e^{-0.9t}} = 100$, so $e^{-0.9t} = \\dfrac{1}{99}$. M1: $t = \\dfrac{\\ln 99}{0.9}$. A1: $t = 5.11$ days.\n(c) Numerical GDC route: M1: enter the central-difference quotient with h = 0.001 and t >= 0.001. M1: graph and locate its maximum near t = 5.10569. A1: maximum approximately 45. A1: students per day, an estimate stable when h is reduced.\n(d) M1: $\\dfrac{200}{1 + 99e^{-0.9t}} = 180$. M1: $e^{-0.9t} = \\dfrac{1}{891}$. A1: $t = 7.55$ days (to 2 decimal places).\n(e) R1: the model has the upper limit $L = 200$, so it never predicts more than 200 students. A1: the model does not support the claim of 250 students; the organisers would need a different model or more data.',
      ru: '(a) M1: подставляем $t = 0$: $N = \\dfrac{200}{1 + 99} = 2$. A1: 2 ученика.\n(b) M1: $\\dfrac{200}{1 + 99e^{-0{,}9t}} = 100$, откуда $e^{-0{,}9t} = \\dfrac{1}{99}$. M1: $t = \\dfrac{\\ln 99}{0{,}9}$. A1: $t = 5{,}11$ суток.\n(c) Численный путь на GDC: M1: введена центральная разность при h = 0,001 и t >= 0,001. M1: найден максимум около t = 5,10569. A1: примерно 45. A1: учеников в сутки; оценка устойчива при уменьшении h.\n(d) M1: $\\dfrac{200}{1 + 99e^{-0{,}9t}} = 180$. M1: $e^{-0{,}9t} = \\dfrac{1}{891}$. A1: $t = 7{,}55$ суток (с точностью до 2 знаков после запятой).\n(e) R1: модель имеет верхний предел $L = 200$, поэтому она никогда не даёт более 200 учеников. A1: модель не подтверждает утверждение о 250 учениках; организаторам нужна другая модель или больше данных.',
    },
    answer: '2; 5.11; 45; 7.55',
    origin: 'original',
    minutes: 14,
  },
];
