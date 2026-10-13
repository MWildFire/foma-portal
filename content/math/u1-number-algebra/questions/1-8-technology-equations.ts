import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-8-01',
    subject: 'math',
    topicIds: ['1-8-technology-equations'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'On Monday a cafe sold 2 coffees, 1 fresh juice and 3 croissants for 53.60 AED. On Tuesday it sold 1 coffee, 2 fresh juices and 1 croissant for 36.45 AED. On Wednesday it sold 3 coffees, 1 fresh juice and 2 croissants for 61.45 AED. Assume that the prices did not change. Find the price of one coffee, one fresh juice and one croissant, giving each answer correct to 2 decimal places.',
      ru: 'В понедельник кафе продало 2 кофе, 1 свежевыжатый сок и 3 круассана на сумму 53,60 AED. Во вторник — 1 кофе, 2 свежевыжатых сока и 1 круассан на 36,45 AED. В среду — 3 кофе, 1 свежевыжатый сок и 2 круассана на 61,45 AED. Считайте, что цены не менялись. Найдите цену одного кофе, одного свежевыжатого сока и одного круассана; каждый ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: writes three linear equations, for example $2c+j+3k=53.6$, $c+2j+k=36.45$ and $3c+j+2k=61.45$, where $c$, $j$ and $k$ are the prices in AED. (M1): solves the system with technology. A1: $c=13.75$, $j=8.40$, $k=5.90$ (each to 2 decimal places).',
      ru: 'M1: записывает три линейных уравнения, например $2c+j+3k=53{,}6$, $c+2j+k=36{,}45$ и $3c+j+2k=61{,}45$, где $c$, $j$ и $k$ — цены в AED. (M1): решает систему с помощью технологии. A1: $c=13{,}75$, $j=8{,}40$, $k=5{,}90$ (с точностью до 2 знаков после запятой).',
    },
    answer: '13.75; 8.40; 5.90',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-8-02',
    subject: 'math',
    topicIds: ['1-8-technology-equations'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Consider the equation $x^{3}-4x+1=0$. Find all the real roots of this equation, giving each answer correct to 3 decimal places.',
      ru: 'Рассмотрим уравнение $x^{3}-4x+1=0$. Найдите все действительные корни этого уравнения; каждый ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: uses technology to find the real roots, which are the x-intercepts of $y=x^{3}-4x+1$. A1: two of the three roots correct. A1: all three roots correct: $x=-2.115$, $x=0.254$ and $x=1.861$.',
      ru: 'M1: находит действительные корни с помощью технологии; это точки пересечения графика $y=x^{3}-4x+1$ с осью $x$. A1: два из трёх корней верны. A1: все три корня верны: $x=-2{,}115$, $x=0{,}254$ и $x=1{,}861$.',
    },
    answer: '-2.115; 0.254; 1.861',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-8-03',
    subject: 'math',
    topicIds: ['1-8-technology-equations'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A company in Dubai records its monthly profit $P$, in thousands of AED, when it sells $x$ thousand units of its first product. Three records are $x=1$, $P=2.3$; $x=2$, $P=3.9$; and $x=4$, $P=3.1$. The company models the profit by $P(x)=ax^{2}+bx+c$.\n\n(a) Write down three linear equations in $a$, $b$ and $c$ that the model must satisfy. [2]\n\n(b) Use technology to solve the system. Give the values of $a$, $b$ and $c$ correct to 2 decimal places. [3]\n\n(c) Find the two values of $x$ for which $P(x)=0$. These are the break-even points. Give each answer correct to 3 significant figures. [3]\n\nThe second product has profit $Q(x)=3x-C(x)$, in thousands of AED, where $C(x)=0.1x^{3}-0.9x^{2}+2.4x+0.5$ is its cost.\n\n(d) Find the values of $x>0$ for which $Q(x)=0$. Give each answer correct to 2 decimal places. [4]\n\n(e) The equation $Q(x)=0$ has a third root, which is negative. Explain why this root is not used in the context of the company. [2]',
      ru: 'Компания в Дубае ежемесячно фиксирует свою прибыль $P$ (в тысячах AED) при продаже $x$ тысяч единиц первого продукта. Три наблюдения: $x=1$, $P=2{,}3$; $x=2$, $P=3{,}9$; $x=4$, $P=3{,}1$. Компания описывает прибыль моделью $P(x)=ax^{2}+bx+c$.\n\n(a) Запишите три линейных уравнения относительно $a$, $b$ и $c$, которым должна удовлетворять модель. [2]\n\n(b) Решите систему с помощью технологии. Найдите значения $a$, $b$ и $c$ с точностью до 2 знаков после запятой. [3]\n\n(c) Найдите два значения $x$, при которых $P(x)=0$. Это точки безубыточности. Каждый ответ дайте с точностью до 3 значащих цифр. [3]\n\nПрибыль второго продукта равна $Q(x)=3x-C(x)$ (в тысячах AED), где $C(x)=0{,}1x^{3}-0{,}9x^{2}+2{,}4x+0{,}5$ — его себестоимость.\n\n(d) Найдите значения $x>0$, при которых $Q(x)=0$. Каждый ответ дайте с точностью до 2 знаков после запятой. [4]\n\n(e) Уравнение $Q(x)=0$ имеет третий корень, и он отрицательный. Объясните, почему этот корень не используется в контексте компании. [2]',
    },
    markscheme: {
      en: '(a) A1: $a+b+c=2.3$ and $4a+2b+c=3.9$. A1: $16a+4b+c=3.1$.\n(b) M1: enters the three equations into the system solver. (M1): solves the system with technology. A1: $a=-0.67$, $b=3.60$, $c=-0.63$ (2 decimal places).\n(c) M1: sets $P(x)=0$. (M1): solves this quadratic with technology, or with the quadratic formula. A1: $x=0.182$ and $x=5.22$ (3 significant figures).\n(d) M1: writes $Q(x)=-0.1x^{3}+0.9x^{2}+0.6x-0.5$ from $3x-C(x)$. M1: sets $Q(x)=0$ and solves it with technology, keeping only the roots with $x>0$. A1: $x=0.49$ (2 decimal places). A1: $x=9.57$ (2 decimal places).\n(e) R1: $x$ is a number of thousands of units, so it cannot be negative. R1: the negative root lies outside the domain of the model, so it is rejected.',
      ru: '(a) A1: $a+b+c=2{,}3$ и $4a+2b+c=3{,}9$. A1: $16a+4b+c=3{,}1$.\n(b) M1: вводит три уравнения в решатель систем. (M1): решает систему с помощью технологии. A1: $a=-0{,}67$, $b=3{,}60$, $c=-0{,}63$ (с точностью до 2 знаков после запятой).\n(c) M1: составляет уравнение $P(x)=0$. (M1): решает это квадратное уравнение с помощью технологии или по формуле корней квадратного уравнения. A1: $x=0{,}182$ и $x=5{,}22$ (3 значащие цифры).\n(d) M1: записывает $Q(x)=-0{,}1x^{3}+0{,}9x^{2}+0{,}6x-0{,}5$ из $3x-C(x)$. M1: составляет уравнение $Q(x)=0$ и решает его с помощью технологии, оставляя только корни с $x>0$. A1: $x=0{,}49$ (с точностью до 2 знаков после запятой). A1: $x=9{,}57$ (с точностью до 2 знаков после запятой).\n(e) R1: $x$ — число тысяч единиц товара, поэтому оно не может быть отрицательным. R1: отрицательный корень лежит вне области применимости модели, поэтому его отбрасывают.',
    },
    answer: '-0.67; 3.60; -0.63; 0.182; 5.22; 0.49; 9.57',
    origin: 'original',
    minutes: 14,
  },
];
