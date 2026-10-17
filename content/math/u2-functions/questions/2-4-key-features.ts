import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-4-01',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The function f(x) = (4x - 7)/(3x + 2) is defined for x not equal to -2/3. Find (a) the x-value of the vertical asymptote; (b) the y-value of the horizontal asymptote; (c) the y-intercept of the graph. Give each value to 3 decimal places.',
      ru: 'Функция f(x) = (4x - 7)/(3x + 2) определена при x, не равном -2/3. Найдите (a) значение x вертикальной асимптоты; (b) значение y горизонтальной асимптоты; (c) точку пересечения графика с осью y, то есть ординату. Каждое значение дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: '(a) M1: the denominator is zero when 3x + 2 = 0. A1: x = -0.667.\n(b) A1: the ratio of the x-coefficients gives y = 4/3 = 1.333.\n(c) A1: f(0) = -7/2 = -3.500.',
      ru: '(a) M1: знаменатель равен нулю при 3x + 2 = 0. A1: x = -0,667.\n(b) A1: отношение коэффициентов при x даёт y = 4/3 = 1,333.\n(c) A1: f(0) = -7/2 = -3,500.',
    },
    answer: '-0.667; 1.333; -3.500',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-4-02',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The function $g(x) = x^{3} - 4x^{2} + 2x + 1$ has a local maximum point. Find its coordinates. Give both coordinates to 2 decimal places.',
      ru: 'Функция $g(x) = x^{3} - 4x^{2} + 2x + 1$ имеет точку локального максимума. Найдите её координаты. Обе координаты дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: a graph window that shows both turning points, with the maximum function used with a left bound and a right bound around the first turning point.\nA1: x = 0.28.\nA1: y = 1.27, so the local maximum point is (0.28, 1.27).',
      ru: 'M1: окно графика с обеими точками поворота и функция максимума с левой и правой границами вокруг первой точки поворота.\nA1: x = 0,28.\nA1: y = 1,27, то есть точка локального максимума (0,28; 1,27).',
    },
    answer: '0.28; 1.27',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-4-03',
    subject: 'math',
    topicIds: ['2-4-key-features'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'In a hypothetical safari business model, use a continuous variable x on 0 ≤ x ≤ 300 for calculations; actual ticket counts are integers. Its revenue is $R(x) = 350x - 0.5x^{2}$ AED and its cost is C(x) = 4000 + 120x AED. The profit is P(x) = R(x) - C(x).\n\n(a) Show that $P(x) = -0.5x^{2} + 230x - 4000$. [2]\n\n(b) Find the continuous break-even value P(x)=0 in 0 ≤ x ≤ 300, to 2 decimal places. State the least whole ticket count giving positive profit. [3]\n\n(c) Find the number of tickets that gives the maximum profit, and the maximum profit to the nearest AED. [3]\n\n(d) The average cost per ticket is A(x) = C(x)/x. For the algebraic extension to x>0, state the horizontal asymptote and explain its meaning and the limit of this interpretation when x≤300. [3]\n\n(e) Find the continuous x-value giving average cost AED 150, to 2 decimal places. Is this equality attainable for a whole number of tickets? [3]',
      ru: 'В условной модели сафари используйте непрерывную переменную x на 0 ≤ x ≤ 300 для расчётов; фактическое число билетов целое. Её выручка $R(x) = 350x - 0{,}5x^{2}$ AED, а затраты C(x) = 4000 + 120x AED. Прибыль P(x) = R(x) - C(x).\n\n(a) Покажите, что $P(x) = -0{,}5x^{2} + 230x - 4000$. [2]\n\n(b) Найдите непрерывный порог безубыточности P(x)=0 на 0 ≤ x ≤ 300 с 2 знаками после запятой. Укажите наименьшее целое количество билетов с положительной прибылью. [3]\n\n(c) Найдите число билетов, при котором прибыль максимальна, и максимальную прибыль с точностью до целых AED. [3]\n\n(d) Средняя стоимость одного билета равна A(x) = C(x)/x. Для алгебраического продолжения на x>0 укажите горизонтальную асимптоту и объясните её смысл и ограничение этой трактовки при x≤300. [3]\n\n(e) Найдите непрерывное значение x со средней стоимостью 150 AED с 2 знаками после запятой. Достигается ли точное равенство при целом числе билетов? [3]',
    },
    markscheme: {
      en: '(a) M1: P(x) = 350x - 0.5x^2 - (4000 + 120x). A1: P(x) = -0.5x^2 + 230x - 4000 (AG).\n(b) M1: solve P(x) = 0 with the zero function, or with the quadratic formula. A1: the continuous roots are approximately 18.10 and 441.90; only the first lies in 0≤x≤300. A1: the least whole count giving positive profit is 19, since P(18)<0<P(19). The continuous root is not an attainable fractional ticket count.\n(c) M1: the maximum of P, for example at the axis of symmetry x = 230 or with the maximum function. A1: x = 230 tickets. A1: maximum profit P = AED 22450.\n(d) M1: A(x) = 4000/x + 120. A1: horizontal asymptote y = 120. R1: for the extension x→∞, average cost approaches the variable-cost term AED 120 from above. The allowed x≤300 does not reach this limit: its least average cost is A(300)=4000/300+120≈133.33.\n(e) M1: A(x) = 150 gives 4000/x = 30. A1: x=400/3≈133.33 in the continuous model. R1: 400/3 is not an integer, so no whole count gives exactly AED 150; 134 tickets give a cost below 150.',
      ru: '(a) M1: P(x) = 350x - 0,5x^2 - (4000 + 120x). A1: P(x) = -0,5x^2 + 230x - 4000 (AG).\n(b) M1: решить P(x) = 0 функцией нуля или формулой корней квадратного уравнения. A1: непрерывные корни приближённо 18,10 и 441,90; только первый входит в 0≤x≤300. A1: наименьшее целое количество с положительной прибылью — 19, поскольку P(18)<0<P(19). Непрерывный порог не является достижимым дробным числом билетов.\n(c) M1: максимум P, например в оси симметрии x = 230, или функцией максимума. A1: x = 230 билетов. A1: максимальная прибыль P = 22450 AED.\n(d) M1: A(x) = 4000/x + 120. A1: горизонтальная асимптота y = 120. R1: при продолжении x→∞ средняя стоимость стремится сверху к переменным затратам 120 AED. При допустимом x≤300 предел не достигается: наименьшая средняя стоимость A(300)=4000/300+120≈133,33.\n(e) M1: A(x) = 150 даёт 4000/x = 30. A1: x=400/3≈133,33 в непрерывной модели. R1: 400/3 не целое, поэтому ровно 150 AED при целом количестве не достигается; 134 билета дают стоимость меньше 150.',
    },
    answer: '18.10; 19; 230; 22450; 120; 133.33; no integer equality',
    origin: 'original',
    minutes: 14,
  },
];
