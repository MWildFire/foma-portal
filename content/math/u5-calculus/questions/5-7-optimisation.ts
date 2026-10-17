import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-7-01',
    subject: 'math',
    topicIds: ['5-7-optimisation'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'A farmer has 60 metres of fencing to make a rectangular pen. The pen is built against a straight wall, so no fencing is needed along the wall. Let $x$ metres be the length of each of the two sides at right angles to the wall. Find the value of $x$ that gives the largest possible area, and the largest possible area.',
      ru: 'Фермеру нужно 60 метров ограждения, чтобы устроить прямоугольный загон. Загон строится у прямой стены, поэтому вдоль стены ограждение не нужно. Пусть $x$ метров — длина каждой из двух сторон, перпендикулярных стене. Найдите значение $x$, при котором площадь будет наибольшей, и эту наибольшую площадь.',
    },
    markscheme: {
      en: 'M1: the side parallel to the wall is $60-2x$, so the area is $A=x(60-2x)=60x-2x^{2}$. M1: $\\dfrac{dA}{dx}=60-4x$. M1: $60-4x=0$ gives $x=15$. R1: $\\dfrac{dA}{dx}>0$ for $x<15$ and $\\dfrac{dA}{dx}<0$ for $x>15$, so the gradient changes from positive to negative and this is a maximum. A1: $x=15$, and the largest area is $A=450$ square metres.',
      ru: 'M1: сторона, параллельная стене, равна $60-2x$, поэтому площадь $A=x(60-2x)=60x-2x^{2}$. M1: $\\dfrac{dA}{dx}=60-4x$. M1: из $60-4x=0$ получаем $x=15$. R1: $\\dfrac{dA}{dx}>0$ при $x<15$ и $\\dfrac{dA}{dx}<0$ при $x>15$, значит градиент меняется с плюса на минус, и это максимум. A1: $x=15$, наибольшая площадь равна $A=450$ квадратных метров.',
    },
    answer: '15; 450',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-5-7-02',
    subject: 'math',
    topicIds: ['5-7-optimisation'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'A workshop has a total daily cost of AED $C(x)=0.5x^{2}-12x+150$ when it makes $x$ units, for $x\\ge 1$. Treat production as divisible: $x$ is a real variable in this continuous model. The average cost per unit is $A(x)=\\dfrac{C(x)}{x}$. Find the number of units that gives the lowest average cost per unit, and that lowest average cost. Give each answer correct to 3 significant figures.',
      ru: 'Суммарные издержки мастерской за день при выпуске $x$ единиц продукции равны $C(x)=0{,}5x^{2}-12x+150$ AED при $x\\ge 1$. Считайте продукцию делимой: $x$ — вещественная переменная в этой непрерывной модели. Средняя стоимость одной единицы равна $A(x)=\\dfrac{C(x)}{x}$. Найдите число единиц, при котором средняя стоимость одной единицы наименьшая, и эту наименьшую среднюю стоимость. Каждый ответ запишите с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: $A(x)=\\dfrac{C(x)}{x}=0.5x-12+\\dfrac{150}{x}$. M1: $A\'(x)=0.5-\\dfrac{150}{x^{2}}$, and $A\'(x)=0$ gives $x^{2}=300$. R1: $A\'(x)<0$ for $x<\\sqrt{300}$ and $A\'(x)>0$ for $x>\\sqrt{300}$, so the gradient changes from negative to positive and this is a minimum. A1: $x=\\sqrt{300}=17.3$ units. A1: $A(\\sqrt{300})=\\sqrt{300}-12=5.32$ AED per unit.',
      ru: 'M1: $A(x)=\\dfrac{C(x)}{x}=0{,}5x-12+\\dfrac{150}{x}$. M1: $A\'(x)=0{,}5-\\dfrac{150}{x^{2}}$; из $A\'(x)=0$ получаем $x^{2}=300$. R1: $A\'(x)<0$ при $x<\\sqrt{300}$ и $A\'(x)>0$ при $x>\\sqrt{300}$, значит градиент меняется с минуса на плюс, и это минимум. A1: $x=\\sqrt{300}\\approx 17{,}3$ единицы. A1: $A(\\sqrt{300})=\\sqrt{300}-12\\approx 5{,}32$ AED за единицу.',
    },
    answer: '17.3; 5.32',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-5-7-03',
    subject: 'math',
    topicIds: ['5-7-optimisation'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, State',
    prompt: {
      en: 'A rectangular sheet of card measures 20 cm by 30 cm. Equal squares of side $x$ cm are cut from the four corners. The sides are then folded up to make an open box with no lid.\n\n(a) Show that the volume of the box is $V(x)=4x^{3}-100x^{2}+600x$, and state the domain of $x$ for which the box exists. [3]\n\n(b) Find $V\'(x)$. [2]\n\n(c) Solve $V\'(x)=0$, giving each solution to 3 significant figures. [3]\n\n(d) Justify that the valid solution gives a maximum volume. [3]\n\n(e) Find the maximum volume of the box, to the nearest cubic centimetre. [3]',
      ru: 'Прямоугольный лист картона размером 20 см на 30 см. Из четырёх углов вырезаны равные квадраты со стороной $x$ см. Затем стороны поднимают и получают открытую коробку без крышки.\n\n(a) Покажите, что объём коробки равен $V(x)=4x^{3}-100x^{2}+600x$, и укажите область значений $x$, при которой коробка существует. [3]\n\n(b) Найдите $V\'(x)$. [2]\n\n(c) Решите $V\'(x)=0$ и запишите каждое решение с точностью до 3 значащих цифр. [3]\n\n(d) Обоснуйте, что допустимое решение даёт наибольший объём. [3]\n\n(e) Найдите наибольший объём коробки с точностью до кубического сантиметра. [3]',
    },
    markscheme: {
      en: '(a) M1: the base is $(20-2x)$ by $(30-2x)$ and the height is $x$, so $V=x(20-2x)(30-2x)$. A1: expanding gives $V=4x^{3}-100x^{2}+600x$, AG. R1: the domain is $0<x<10$, because both base sides must be positive.\n(b) M1: differentiates each term. A1: $V\'(x)=12x^{2}-200x+600$.\n(c) M1: $3x^{2}-50x+150=0$, so $x=\\dfrac{50\\pm\\sqrt{700}}{6}$. A1: $x=3.92$. A1: $x=12.7$, to 3 significant figures.\n(d) R1: $V\'(x)>0$ for $0<x<x_0$ and $V\'(x)<0$ for $x_0<x<10$, where $x_0=\\dfrac{25-5\\sqrt{7}}{3}=3.92$ is the valid root, so the gradient changes from positive to negative at $x_0$: a maximum. R1: $x=12.7$ lies outside $0<x<10$, so it is rejected. R1: $V(0)=0$ and $V(10)=0$, so the turning point inside the domain gives the greatest volume.\n(e) M1: substitutes $x=3.92$ into $V(x)$. A1: $V=1056$ cubic centimetres, to the nearest cubic centimetre. A1: the largest box has a volume of about 1056 cubic centimetres.',
      ru: '(a) M1: основание коробки равно $(20-2x)$ на $(30-2x)$, высота равна $x$, поэтому $V=x(20-2x)(30-2x)$. A1: раскрыв скобки, получаем $V=4x^{3}-100x^{2}+600x$, AG. R1: область определения $0<x<10$, потому что обе стороны основания должны быть положительными.\n(b) M1: дифференцирует каждое слагаемое. A1: $V\'(x)=12x^{2}-200x+600$.\n(c) M1: $3x^{2}-50x+150=0$, откуда $x=\\dfrac{50\\pm\\sqrt{700}}{6}$. A1: $x=3{,}92$. A1: $x=12{,}7$, с точностью до 3 значащих цифр.\n(d) R1: $V\'(x)>0$ при $0<x<x_0$ и $V\'(x)<0$ при $x_0<x<10$, где $x_0=\\dfrac{25-5\\sqrt{7}}{3}\\approx 3{,}92$ — допустимый корень, значит градиент меняется с плюса на минус при $x_0$: максимум. R1: $x=12{,}7$ лежит вне промежутка $0<x<10$, поэтому его отбрасываем. R1: $V(0)=0$ и $V(10)=0$, значит точка поворота внутри области определения даёт наибольший объём.\n(e) M1: подставляет $x=3{,}92$ в $V(x)$. A1: $V=1056$ кубических сантиметров, с точностью до кубического сантиметра. A1: наибольшая коробка имеет объём примерно 1056 кубических сантиметров.',
    },
    answer: '3.92; 12.7; 1056',
    origin: 'original',
    minutes: 14,
  },
];
