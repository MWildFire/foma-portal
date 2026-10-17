import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-10-01',
    subject: 'math',
    topicIds: ['1-10-rational-exponents'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Calculate the value of $\\left(\\dfrac{27}{8}\\right)^{-\\frac{2}{3}}$. Give your answer as a decimal correct to 3 decimal places.',
      ru: 'Вычислите значение $\\left(\\dfrac{27}{8}\\right)^{-\\frac{2}{3}}$. Ответ запишите десятичной дробью с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: negative exponent: $\\left(\\dfrac{27}{8}\\right)^{-\\frac{2}{3}}=\\left(\\dfrac{8}{27}\\right)^{\\frac{2}{3}}$. M1: cube root of each part: $=\\left(\\dfrac{2}{3}\\right)^{2}$. A1: $=\\dfrac{4}{9}=0.444$ (3 decimal places).',
      ru: 'M1: отрицательный показатель: $\\left(\\dfrac{27}{8}\\right)^{-\\frac{2}{3}}=\\left(\\dfrac{8}{27}\\right)^{\\frac{2}{3}}$. M1: кубический корень из каждой части: $=\\left(\\dfrac{2}{3}\\right)^{2}$. A1: $=\\dfrac{4}{9}=0{,}444$ (с точностью до 3 знаков после запятой).',
    },
    answer: '0.444',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-1-10-02',
    subject: 'math',
    topicIds: ['1-10-rational-exponents'],
    paper: 'P1',
    marks: 4,
    command: 'Show that',
    prompt: {
      en: '(a) Show that $\\dfrac{x^{\\frac{1}{2}}+x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}=1+\\dfrac{1}{x}$ for $x>0$. [2]\n\n(b) Hence find the value of this expression when $x=4$. [2]',
      ru: '(a) Покажите, что $\\dfrac{x^{\\frac{1}{2}}+x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}=1+\\dfrac{1}{x}$ при $x>0$. [2]\n\n(b) Используя результат (a), найдите значение этого выражения при $x=4$. [2]',
    },
    markscheme: {
      en: '(a) M1: divide each term of the numerator by $x^{\\frac{1}{2}}$: $1+\\dfrac{x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}$. A1 (AG): $\\dfrac{x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}=x^{-1}=\\dfrac{1}{x}$, so the expression equals $1+\\dfrac{1}{x}$.\n(b) M1: substitute $x=4$ into $1+\\dfrac{1}{x}$: $1+\\dfrac{1}{4}$. A1: $1.25$.',
      ru: '(a) M1: разделите каждое слагаемое числителя на $x^{\\frac{1}{2}}$: $1+\\dfrac{x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}$. A1 (AG): $\\dfrac{x^{-\\frac{1}{2}}}{x^{\\frac{1}{2}}}=x^{-1}=\\dfrac{1}{x}$, поэтому выражение равно $1+\\dfrac{1}{x}$.\n(b) M1: подставьте $x=4$ в $1+\\dfrac{1}{x}$: $1+\\dfrac{1}{4}$. A1: $1{,}25$.',
    },
    answer: '1.25',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-10-03',
    subject: 'math',
    topicIds: ['1-10-rational-exponents'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'Use an idealised Kepler model for bodies orbiting the Sun, neglecting their masses relative to the Sun. The orbital period $T$ of a planet, in Earth years, and the semi-major axis $r$ of its orbit, in astronomical units (AU), satisfy $T=r^{\\frac{3}{2}}$. Use the normalisation $r=1$, $T=1$ for Earth; all periods and distances below are model inputs.\n\n(a) Show that $r=T^{\\frac{2}{3}}$. [3]\n\n(b) Jupiter has an orbital semi-major axis of 5.2 AU. Find its orbital period in Earth years, correct to 2 decimal places. [2]\n\n(c) A comet has an orbital period of 76 years. Find its orbital semi-major axis, in AU, correct to 3 significant figures. [3]\n\n(d) A hypothetical planet X has an orbital semi-major axis of 4 AU. Find its orbital period in Earth years. [3]\n\n(e) Planet P has an orbital period 8 times that of planet Q. Find the value of $k$ such that the orbital semi-major axis of P is $k$ times the orbital semi-major axis of Q. [3]',
      ru: 'Используйте идеализированную модель Кеплера для тел, обращающихся вокруг Солнца; их массами по сравнению с массой Солнца пренебрегаем. Орбитальный период $T$ планеты в земных годах и большая полуось $r$ её орбиты в астрономических единицах (а. е.) связаны соотношением $T=r^{\\frac{3}{2}}$. Для Земли примите нормировку $r=1$, $T=1$; периоды и расстояния ниже — исходные значения модели.\n\n(a) Покажите, что $r=T^{\\frac{2}{3}}$. [3]\n\n(b) Большая полуось орбиты Юпитера равна 5,2 а. е. Найдите его орбитальный период в земных годах с точностью до 2 знаков после запятой. [2]\n\n(c) Период обращения кометы составляет 76 лет. Найдите её большую полуось орбиты в а. е. с точностью до 3 значащих цифр. [3]\n\n(d) Гипотетическая планета X обращается по орбите с большой полуосью 4 а. е. Найдите её орбитальный период в земных годах. [3]\n\n(e) Период планеты P в 8 раз больше периода планеты Q. Найдите значение $k$, при котором большая полуось орбиты P в $k$ раз больше большой полуоси орбиты Q. [3]',
    },
    markscheme: {
      en: '(a) M1: raise both sides to the power $\\frac{2}{3}$: $T^{\\frac{2}{3}}=\\left(r^{\\frac{3}{2}}\\right)^{\\frac{2}{3}}$. M1: power law: $\\left(r^{\\frac{3}{2}}\\right)^{\\frac{2}{3}}=r^{1}=r$. A1 (AG): $r=T^{\\frac{2}{3}}$.\n(b) M1: $T=5.2^{\\frac{3}{2}}$. A1: $T=11.86$ years (2 decimal places).\n(c) M1: $r=76^{\\frac{2}{3}}$, using (a). M1: evaluate the power with the GDC. A1: $r=17.9$ AU (3 significant figures).\n(d) M1: $T=4^{\\frac{3}{2}}$. M1: $=\\left(4^{\\frac{1}{2}}\\right)^{3}=2^{3}$. A1: $T=8$ years.\n(e) M1: $\\dfrac{r_{P}}{r_{Q}}=\\left(\\dfrac{T_{P}}{T_{Q}}\\right)^{\\frac{2}{3}}$, using (a). M1: $=8^{\\frac{2}{3}}$. A1: $k=4$.',
      ru: '(a) M1: возведите обе части в степень $\\frac{2}{3}$: $T^{\\frac{2}{3}}=\\left(r^{\\frac{3}{2}}\\right)^{\\frac{2}{3}}$. M1: правило степени: $\\left(r^{\\frac{3}{2}}\\right)^{\\frac{2}{3}}=r^{1}=r$. A1 (AG): $r=T^{\\frac{2}{3}}$.\n(b) M1: $T=5{,}2^{\\frac{3}{2}}$. A1: $T=11{,}86$ года (2 знака после запятой).\n(c) M1: $r=76^{\\frac{2}{3}}$, по (a). M1: вычислите степень с помощью калькулятора. A1: $r=17{,}9$ а. е. (3 значащие цифры).\n(d) M1: $T=4^{\\frac{3}{2}}$. M1: $=\\left(4^{\\frac{1}{2}}\\right)^{3}=2^{3}$. A1: $T=8$ лет.\n(e) M1: $\\dfrac{r_{P}}{r_{Q}}=\\left(\\dfrac{T_{P}}{T_{Q}}\\right)^{\\frac{2}{3}}$, по (a). M1: $=8^{\\frac{2}{3}}$. A1: $k=4$.',
    },
    answer: '11.86; 17.9; 8; 4',
    origin: 'original',
    minutes: 14,
  },
];
