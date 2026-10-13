import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-5-01',
    subject: 'math',
    topicIds: ['1-5-exponents-logarithms'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The pH of a solution is given by $\\mathrm{pH}=-\\log_{10}[\\mathrm{H}^{+}]$, where $[\\mathrm{H}^{+}]$ is the concentration of hydrogen ions in mol per litre. A cleaning solution has $[\\mathrm{H}^{+}]=3.2\\times 10^{-5}$ mol per litre. Calculate the pH of this solution, giving your answer correct to 2 decimal places.',
      ru: 'Водородный показатель раствора (pH) вычисляется по формуле $\\mathrm{pH}=-\\log_{10}[\\mathrm{H}^{+}]$, где $[\\mathrm{H}^{+}]$ — концентрация ионов водорода в молях на литр. Концентрация $[\\mathrm{H}^{+}]$ в моющем растворе равна $3{,}2\\times 10^{-5}$ моль на литр. Вычислите pH этого раствора и дайте ответ с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: substitutes $[\\mathrm{H}^{+}]=3.2\\times 10^{-5}$ into the formula. (A1): evaluates $\\log_{10}(3.2\\times 10^{-5})$ with technology; the value is negative. A1: pH = 4.49 (2 decimal places).',
      ru: 'M1: подставляет $[\\mathrm{H}^{+}]=3{,}2\\times 10^{-5}$ в формулу. (A1): вычисляет $\\log_{10}(3{,}2\\times 10^{-5})$ с помощью технологии; значение отрицательно. A1: $\\mathrm{pH}=4{,}49$ (с точностью до 2 знаков после запятой).',
    },
    answer: '4.49',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-5-02',
    subject: 'math',
    topicIds: ['1-5-exponents-logarithms'],
    paper: 'P1',
    marks: 3,
    command: 'Show that',
    prompt: {
      en: 'Show that $\\dfrac{5^{n+1}-5^{n-1}}{5^{n}}=\\dfrac{24}{5}$ for every integer $n$.',
      ru: 'Покажите, что $\\dfrac{5^{n+1}-5^{n-1}}{5^{n}}=\\dfrac{24}{5}$ при любом целом $n$.',
    },
    markscheme: {
      en: 'M1: writes $5^{n+1}=5^{2}\\times 5^{n-1}$ and $5^{n}=5\\times 5^{n-1}$ using the laws of exponents. M1: factorises the numerator: $5^{2}\\times 5^{n-1}-5^{n-1}=5^{n-1}(25-1)=24\\times 5^{n-1}$. A1: divides to get $\\dfrac{24\\times 5^{n-1}}{5\\times 5^{n-1}}=\\dfrac{24}{5}$, as required. AG',
      ru: 'M1: записывает $5^{n+1}=5^{2}\\times 5^{n-1}$ и $5^{n}=5\\times 5^{n-1}$ по законам степеней. M1: выносит общий множитель в числителе: $5^{2}\\times 5^{n-1}-5^{n-1}=5^{n-1}(25-1)=24\\times 5^{n-1}$. A1: делит и получает $\\dfrac{24\\times 5^{n-1}}{5\\times 5^{n-1}}=\\dfrac{24}{5}$, что и требовалось. AG',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-5-03',
    subject: 'math',
    topicIds: ['1-5-exponents-logarithms'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A swimming pool in Dubai is treated with chlorine. The concentration of free chlorine, $C$ mg per litre, $t$ hours after treatment is modelled by $C(t)=4e^{-0.12t}$, $t\\geq 0$. The pool must be treated again when the concentration falls below 1 mg per litre.\n\n(a) Write down $C(0)$ and find $C(6)$, giving your answer correct to 3 significant figures. [2]\n\n(b) Show that $C(t+1)=e^{-0.12}\\,C(t)$ for all $t\\geq 0$. Hence find the percentage of chlorine remaining after 1 hour, giving your answer correct to 3 significant figures. [3]\n\n(c) Find the half-life of the chlorine, that is the time taken for $C$ to become half of its initial value. Give your answer correct to 2 decimal places. [3]\n\n(d) Find the time, in hours, at which $C(t)=1$. Give your answer correct to 2 decimal places. [3]\n\n(e) Find the least whole number of hours $t$ for which $C(t)<1$. [3]',
      ru: 'Бассейн в Дубае обрабатывают хлором. Концентрация свободного хлора $C$ в мг на литр через $t$ часов после обработки описывается моделью $C(t)=4e^{-0.12t}$, $t\\geq 0$. Бассейн нужно обработать снова, когда концентрация становится меньше 1 мг на литр.\n\n(a) Запишите $C(0)$ и найдите $C(6)$; ответ дайте с точностью до 3 значащих цифр. [2]\n\n(b) Покажите, что $C(t+1)=e^{-0.12}\\,C(t)$ при всех $t\\geq 0$. Затем найдите процент хлора, оставшегося через 1 час; ответ дайте с точностью до 3 значащих цифр. [3]\n\n(c) Найдите период полураспада хлора, то есть время, за которое $C$ уменьшится вдвое. Ответ дайте с точностью до 2 знаков после запятой. [3]\n\n(d) Найдите время в часах, при котором $C(t)=1$. Ответ дайте с точностью до 2 знаков после запятой. [3]\n\n(e) Найдите наименьшее целое число часов $t$, при котором $C(t)<1$. [3]',
    },
    markscheme: {
      en: '(a) A1: $C(0)=4$. A1: $C(6)=4e^{-0.72}=1.95$ (3 significant figures).\n(b) M1: $C(t+1)=4e^{-0.12(t+1)}=e^{-0.12}\\times 4e^{-0.12t}$ by the laws of exponents. A1: so $C(t+1)=e^{-0.12}\\,C(t)$, as required. AG. A1: the percentage remaining after 1 hour is $100e^{-0.12}=88.7\\%$ (3 significant figures).\n(c) M1: sets $4e^{-0.12t}=2$. M1: takes natural logarithms: $-0.12t=\\ln 0.5$. A1: $t=5.78$ hours (2 decimal places).\n(d) M1: sets $4e^{-0.12t}=1$. M1: takes natural logarithms: $t=\\dfrac{\\ln 4}{0.12}$. A1: $t=11.55$ hours (2 decimal places).\n(e) M1: evaluates $C(11)=4e^{-1.32}=1.07$ and $C(12)=4e^{-1.44}=0.948$. A1: $C(11)>1$ and $C(12)<1$. A1: the least whole number of hours is 12.',
      ru: '(a) A1: $C(0)=4$. A1: $C(6)=4e^{-0.72}=1{,}95$ (3 значащие цифры).\n(b) M1: $C(t+1)=4e^{-0.12(t+1)}=e^{-0.12}\\times 4e^{-0.12t}$ по законам степеней. A1: значит, $C(t+1)=e^{-0.12}\\,C(t)$, что и требовалось. AG. A1: процент хлора, оставшегося через 1 час, равен $100e^{-0.12}=88{,}7\\%$ (3 значащие цифры).\n(c) M1: составляет уравнение $4e^{-0.12t}=2$. M1: берёт натуральные логарифмы: $-0.12t=\\ln 0{,}5$. A1: $t=5{,}78$ часа (с точностью до 2 знаков после запятой).\n(d) M1: составляет уравнение $4e^{-0.12t}=1$. M1: берёт натуральные логарифмы: $t=\\dfrac{\\ln 4}{0.12}$. A1: $t=11{,}55$ часа (с точностью до 2 знаков после запятой).\n(e) M1: вычисляет $C(11)=4e^{-1.32}=1{,}07$ и $C(12)=4e^{-1.44}=0{,}948$. A1: $C(11)>1$ и $C(12)<1$. A1: наименьшее целое число часов равно 12.',
    },
    answer: '4; 1.95; 88.7; 5.78; 11.55; 12',
    origin: 'original',
    minutes: 14,
  },
];
