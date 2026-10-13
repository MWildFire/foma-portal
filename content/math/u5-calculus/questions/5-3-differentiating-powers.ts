import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-3-01',
    subject: 'math',
    topicIds: ['5-3-differentiating-powers'],
    paper: 'P1',
    marks: 3,
    command: 'Find, Hence',
    prompt: {
      en: 'The curve has equation $y = 4x^5 - 3x^2 + 7x - 2$. Find $\\dfrac{dy}{dx}$, and hence find the value of $\\dfrac{dy}{dx}$ at $x = 2$.',
      ru: 'Кривая задана уравнением $y = 4x^5 - 3x^2 + 7x - 2$. Найдите $\\dfrac{dy}{dx}$, а затем значение $\\dfrac{dy}{dx}$ при $x = 2$.',
    },
    markscheme: {
      en: 'M1: differentiate each term with the power rule. A1: $\\dfrac{dy}{dx} = 20x^4 - 6x + 7$. A1: at $x = 2$, $\\dfrac{dy}{dx} = 320 - 12 + 7 = 315$.',
      ru: 'M1: дифференцируем каждый член по правилу степени. A1: $\\dfrac{dy}{dx} = 20x^4 - 6x + 7$. A1: при $x = 2$, $\\dfrac{dy}{dx} = 320 - 12 + 7 = 315$.',
    },
    answer: '315',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-3-02',
    subject: 'math',
    topicIds: ['5-3-differentiating-powers'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The curve has equation $y = \\dfrac{6}{x^2} + x^3$, where $x \\neq 0$. Find the gradient of the curve at $x = -1$.',
      ru: 'Кривая задана уравнением $y = \\dfrac{6}{x^2} + x^3$, где $x \\neq 0$. Найдите градиент кривой при $x = -1$.',
    },
    markscheme: {
      en: 'M1: write $y = 6x^{-2} + x^3$. A1: $\\dfrac{dy}{dx} = -12x^{-3} + 3x^2$. A1: at $x = -1$, $\\dfrac{dy}{dx} = 12 + 3 = 15$.',
      ru: 'M1: запишем $y = 6x^{-2} + x^3$. A1: $\\dfrac{dy}{dx} = -12x^{-3} + 3x^2$. A1: при $x = -1$, $\\dfrac{dy}{dx} = 12 + 3 = 15$.',
    },
    answer: '15',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-3-03',
    subject: 'math',
    topicIds: ['5-3-differentiating-powers'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bakery in Dubai has a total daily cost of $C(n)$ AED when it bakes $n$ trays of pastries, where $0 \\le n \\le 30$. The cost is modelled by $C(n) = 0.02n^3 - 0.9n^2 + 20n + 150$.\n\n(a) Find $C\'(n)$. [3]\n\n(b) Find the marginal cost $C\'(10)$, in AED per tray. [2]\n\n(c) Find the value of $n$ at which the marginal cost is least, and state this least marginal cost. [3]\n\n(d) Find the increase in the daily cost when production rises from 10 trays to 12 trays. [3]\n\n(e) Use $C\'(10)$ to estimate the increase in part (d). Find the absolute error of this estimate. [3]',
      ru: 'Пекарня в Дубае имеет суммарные ежедневные издержки $C(n)$ дирхамов ОАЭ (AED), когда она выпекает $n$ противней с выпечкой, где $0 \\le n \\le 30$. Издержки описываются моделью $C(n) = 0{,}02n^3 - 0{,}9n^2 + 20n + 150$.\n\n(a) Найдите $C\'(n)$. [3]\n\n(b) Найдите предельные издержки $C\'(10)$ в AED на противень. [2]\n\n(c) Найдите значение $n$, при котором предельные издержки наименьшие, и укажите эти наименьшие предельные издержки. [3]\n\n(d) Найдите прирост ежедневных издержек при увеличении выпечки с 10 до 12 противней. [3]\n\n(e) Используя $C\'(10)$, оцените прирост из части (d). Найдите абсолютную погрешность этой оценки. [3]',
    },
    markscheme: {
      en: '(a) M1: differentiate each term with the power rule. A1: $C\'(n) = 0.06n^2 - 1.8n + 20$. A1: the constant 150 gives 0.\n(b) M1: substitute $n = 10$. A1: $C\'(10) = 6 - 18 + 20 = 8$ AED per tray.\n(c) M1: complete the square: $C\'(n) = 0.06(n - 15)^2 + 6.5$. A1: the least value is at $n = 15$. A1: the least marginal cost is $6.5$ AED per tray.\n(d) M1: $C(10) = 280$ and $C(12) = 294.96$.\nM1: the increase is $C(12) - C(10)$.\nA1: increase $= 294.96 - 280 = 14.96$ AED.\n(e) M1: estimate $= 2 \\times C\'(10) = 16$ AED.\nM1: absolute error is the difference between the estimate and the exact increase.\nA1: absolute error $= |16 - 14.96| = 1.04$ AED.',
      ru: '(a) M1: дифференцируем каждый член по правилу степени. A1: $C\'(n) = 0{,}06n^2 - 1{,}8n + 20$. A1: постоянный член 150 даёт 0.\n(b) M1: подставляем $n = 10$. A1: $C\'(10) = 6 - 18 + 20 = 8$ AED на противень.\n(c) M1: выделяем полный квадрат: $C\'(n) = 0{,}06(n - 15)^2 + 6{,}5$. A1: наименьшее значение при $n = 15$. A1: наименьшие предельные издержки равны $6{,}5$ AED на противень.\n(d) M1: $C(10) = 280$ и $C(12) = 294{,}96$.\nM1: прирост равен $C(12) - C(10)$.\nA1: прирост $= 294{,}96 - 280 = 14{,}96$ AED.\n(e) M1: оценка $= 2 \\times C\'(10) = 16$ AED.\nM1: абсолютная погрешность — разность между оценкой и точным приростом.\nA1: абсолютная погрешность $= |16 - 14{,}96| = 1{,}04$ AED.',
    },
    answer: '8; 15; 6.5; 14.96; 16; 1.04',
    origin: 'original',
    minutes: 14,
  },
];
