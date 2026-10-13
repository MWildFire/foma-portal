import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-5-01',
    subject: 'math',
    topicIds: ['3-5-perpendicular-bisectors'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'The points P(1, 9) and Q(7, 1) are the ends of a segment PQ. The line L is the perpendicular bisector of PQ.\n\n(a) Find the midpoint of PQ. [1]\n\n(b) Find the equation of L in the form y = mx + c. [2]\n\n(c) The line L meets the x-axis at the point (k, 0). Find the value of k, correct to 2 decimal places. [2]',
      ru: 'Точки P(1; 9) и Q(7; 1) — концы отрезка PQ. Прямая L — серединный перпендикуляр отрезка PQ.\n\n(a) Найдите середину отрезка PQ. [1]\n\n(b) Найдите уравнение прямой L в виде y = mx + c. [2]\n\n(c) Прямая L пересекает ось x в точке (k; 0). Найдите k с точностью до 2 знаков после запятой. [2]',
    },
    markscheme: {
      en: '(a) A1: midpoint (4, 5).\n(b) M1: gradient of PQ is (1 − 9)/(7 − 1) = −4/3, so the gradient of L is 3/4. A1: y = 0.75x + 2, from y − 5 = 0.75(x − 4).\n(c) M1: put y = 0 in y = 0.75x + 2. A1: k = −2.67 (2 decimal places).',
      ru: '(a) A1: середина (4; 5).\n(b) M1: угловой коэффициент PQ равен (1 − 9)/(7 − 1) = −4/3, поэтому у L он равен 3/4. A1: y = 0,75x + 2, из y − 5 = 0,75(x − 4).\n(c) M1: положим y = 0 в уравнении y = 0,75x + 2. A1: k = −2,67 (с точностью до 2 знаков после запятой).',
    },
    answer: '4; 5; 0.75; 2; -2.67',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-5-02',
    subject: 'math',
    topicIds: ['3-5-perpendicular-bisectors'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Triangle ABC has vertices A(0, 0), B(6, 0) and C(2, 4). The point O is the circumcentre of the triangle, where the perpendicular bisectors of AB and AC meet. Find the coordinates of O, and the distance OA, correct to 2 decimal places.',
      ru: 'Треугольник ABC имеет вершины A(0; 0), B(6; 0) и C(2; 4). Точка O — центр описанной окружности треугольника, то есть точка пересечения серединных перпендикуляров к AB и AC. Найдите координаты O и расстояние OA с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the midpoint of AB is (3, 0) and AB is horizontal, so the bisector of AB is x = 3.\nM1: the midpoint of AC is (1, 2) and AC has gradient 2, so the bisector of AC has gradient −1/2 and equation y = −x/2 + 5/2.\nA1: substituting x = 3 gives O = (3, 1).\nA1: OA = √(3² + 1²) = √10 = 3.16 (2 decimal places).',
      ru: 'M1: середина AB равна (3; 0), а AB горизонтален, поэтому серединный перпендикуляр к AB — прямая x = 3.\nM1: середина AC равна (1; 2), а угловой коэффициент AC равен 2, поэтому у серединного перпендикуляра к AC он равен −1/2, а уравнение y = −x/2 + 5/2.\nA1: подставив x = 3, получим O = (3; 1).\nA1: OA = √(3² + 1²) = √10 = 3,16 (с точностью до 2 знаков после запятой).',
    },
    answer: '3; 1; 3.16',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-5-03',
    subject: 'math',
    topicIds: ['3-5-perpendicular-bisectors'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'Three radio masts A, B and C stand at A(0, 0), B(12, 0) and C(4, 9), with coordinates in km. A repair depot D must be equidistant from the three masts.\n\n(a) Find the equation of the perpendicular bisector of AB. [2]\n\n(b) Find the equation of the perpendicular bisector of AC in the form y = mx + c, giving m and c correct to 3 significant figures. [4]\n\n(c) Hence find the coordinates of the depot D, correct to 2 decimal places. [3]\n\n(d) Find the distance AD, in km, correct to 2 decimal places. [2]\n\n(e) The service area of the depot is the circle with centre D through A and B. Find the length of the minor arc AB of this circle, in km, correct to 3 significant figures. [3]',
      ru: 'Три радиомачты стоят в точках A(0; 0), B(12; 0) и C(4; 9), координаты даны в км. Ремонтный пункт D должен быть равноудалён от всех трёх мачт.\n\n(a) Найдите уравнение серединного перпендикуляра к AB. [2]\n\n(b) Найдите уравнение серединного перпендикуляра к AC в виде y = mx + c; дайте m и c с точностью до 3 значащих цифр. [4]\n\n(c) Используя ответ (b), найдите координаты пункта D с точностью до 2 знаков после запятой. [3]\n\n(d) Найдите расстояние AD в км с точностью до 2 знаков после запятой. [2]\n\n(e) Зона обслуживания пункта D — окружность с центром D, проходящая через A и B. Найдите длину меньшей дуги AB этой окружности в км с точностью до 3 значащих цифр. [3]',
    },
    markscheme: {
      en: '(a) M1: the midpoint of AB is (6, 0) and AB is horizontal, so the bisector is vertical. A1: x = 6.\n(b) M1: the midpoint of AC is (2, 4.5) and AC has gradient 9/4, so the bisector has gradient −4/9. A1: m = −0.444 (3 s.f.). A1: c = 5.39 (3 s.f.), from 4.5 = −(4/9)(2) + c.\n(c) M1: substitute x = 6 into the bisector of AC. A1: x = 6.00. A1: y = 2.72, so D = (6.00, 2.72).\n(d) M1: AD = √(6² + 2.72²). A1: AD = 6.59 km (2 decimal places).\n(e) M1: cos(ADB) = 1 − 72/AD², so the angle ADB is 131.2 degrees. M1: minor arc = (131.2/360) × 2π × 6.59. A1: 15.1 km (3 s.f.).',
      ru: '(a) M1: середина AB равна (6; 0), а AB горизонтален, поэтому серединный перпендикуляр вертикален. A1: x = 6.\n(b) M1: середина AC равна (2; 4,5), угловой коэффициент AC равен 9/4, поэтому у серединного перпендикуляра он равен −4/9. A1: m = −0,444 (3 значащие цифры). A1: c = 5,39 (3 значащие цифры), из 4,5 = −(4/9)(2) + c.\n(c) M1: подставим x = 6 в серединный перпендикуляр к AC. A1: x = 6,00. A1: y = 2,72, значит D = (6,00; 2,72).\n(d) M1: AD = √(6² + 2,72²). A1: AD = 6,59 км (с точностью до 2 знаков после запятой).\n(e) M1: cos(ADB) = 1 − 72/AD², значит угол ADB равен 131,2 градуса. M1: меньшая дуга = (131,2/360) × 2π × 6,59. A1: 15,1 км (3 значащие цифры).',
    },
    answer: '6; -0.444; 5.39; 6.00; 2.72; 6.59; 15.1',
    origin: 'original',
    minutes: 14,
  },
];
