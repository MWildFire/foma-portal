import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-6-01',
    subject: 'math',
    topicIds: ['3-6-voronoi'],
    paper: 'P1',
    marks: 3,
    command: 'Find, Justify',
    prompt: {
      en: 'Three towns are at A(1, 1), B(7, 2) and C(4, 8), with coordinates in km. A house is at P(5, 4). Find the distance from P to its nearest town, correct to 2 decimal places, and justify your choice of town by comparing distances.',
      ru: 'Три города находятся в точках A(1; 1), B(7; 2) и C(4; 8), координаты даны в км. Дом находится в точке P(5; 4). Найдите расстояние от P до ближайшего города с точностью до 2 знаков после запятой и обоснуйте выбор города, сравнив расстояния.',
    },
    markscheme: {
      en: 'M1: distances PA = √(4² + 3²) = 5, PB = √(2² + 2²) = 2.83, PC = √(1² + 4²) = 4.12. A1: 2.83 km (2 decimal places). R1: B is the nearest town, since 2.83 < 4.12 < 5, so P lies in the cell of B.',
      ru: 'M1: расстояния PA = √(4² + 3²) = 5, PB = √(2² + 2²) = 2,83, PC = √(1² + 4²) = 4,12. A1: 2,83 км (с точностью до 2 знаков после запятой). R1: B — ближайший город, так как 2,83 < 4,12 < 5, значит P лежит в ячейке B.',
    },
    answer: '2.83',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-6-02',
    subject: 'math',
    topicIds: ['3-6-voronoi'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'Weather stations at A(0, 0), B(6, 0) and C(2, 6) recorded temperatures of 21.5 °C, 18.0 °C and 24.2 °C. Use nearest-neighbour interpolation to estimate the temperature at the point P(4, 1). Give the distance from P to the station you used, correct to 2 decimal places.',
      ru: 'Метеостанции в точках A(0; 0), B(6; 0) и C(2; 6) показали температуру 21,5 °C, 18,0 °C и 24,2 °C. Используя интерполяцию по ближайшему соседу, оцените температуру в точке P(4; 1). Укажите расстояние от P до использованной станции с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: PA = √(4² + 1²) = 4.12, PB = √(2² + 1²) = 2.24, PC = √(2² + 5²) = 5.39. A1: the nearest station is B, so the estimated temperature is 18.0 °C. A1: distance PB = 2.24 km (2 decimal places).',
      ru: 'M1: PA = √(4² + 1²) = 4,12, PB = √(2² + 1²) = 2,24, PC = √(2² + 5²) = 5,39. A1: ближайшая станция — B, значит оценка температуры равна 18,0 °C. A1: расстояние PB = 2,24 км (с точностью до 2 знаков после запятой).',
    },
    answer: '18.0; 2.24',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-6-03',
    subject: 'math',
    topicIds: ['3-6-voronoi'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, Find',
    prompt: {
      en: 'A regional authority has four monitoring stations at A(0, 0), B(8, 0), C(2, 6) and D(9, 6), with coordinates in km. The stations are the sites of a Voronoi diagram. First consider only A, B and C: their diagram has a vertex V, the point equidistant from all three.\n\n(a) Show that V(4, 2) is equidistant from A, B and C, and find this distance, correct to 2 decimal places. [3]\n\n(b) Station D is added to the diagram. The new vertex W is the circumcentre of triangle BCD. Find the coordinates of W, correct to 2 decimal places. [4]\n\n(c) Find the distance from W to its nearest station, correct to 2 decimal places. [2]\n\n(d) A toxic waste dump must be placed at whichever of the vertices V or W is further from its nearest station. Determine the coordinates of the dump site. [3]\n\n(e) Monitoring readings are 14 ppm at A, 9 ppm at B, 21 ppm at C and 11 ppm at D. Use nearest-neighbour interpolation to estimate the reading at the point P(7, 4). [2]',
      ru: 'Региональная служба имеет четыре станции мониторинга в точках A(0; 0), B(8; 0), C(2; 6) и D(9; 6), координаты даны в км. Станции — это пункты диаграммы Вороного. Сначала рассмотрим только A, B и C: их диаграмма имеет вершину V, равноудалённую от всех трёх.\n\n(a) Покажите, что V(4; 2) равноудалена от A, B и C, и найдите это расстояние с точностью до 2 знаков после запятой. [3]\n\n(b) Станция D добавлена в диаграмму. Новая вершина W — центр описанной окружности треугольника BCD. Найдите координаты W с точностью до 2 знаков после запятой. [4]\n\n(c) Найдите расстояние от W до ближайшей станции с точностью до 2 знаков после запятой. [2]\n\n(d) Место свалки токсичных отходов должно быть в той из вершин V или W, которая дальше от своей ближайшей станции. Определите координаты места свалки. [3]\n\n(e) Показания станций: 14 ppm в A, 9 ppm в B, 21 ppm в C и 11 ppm в D. Используя интерполяцию по ближайшему соседу, оцените показание в точке P(7; 4). [2]',
    },
    markscheme: {
      en: '(a) M1: VA = √(4² + 2²), VB = √((8 − 4)² + 2²), VC = √((2 − 4)² + 4²). A1: all three distances equal √20. A1: distance = 4.47 (2 decimal places).\n(b) M1: the midpoint of CD is (5.5, 6) and CD is horizontal, so the bisector of CD is x = 5.5. M1: the midpoint of BC is (5, 3) and BC has gradient −1, so the bisector of BC is y = x − 2. A1: substituting x = 5.5 gives y = 3.5. A1: W = (5.50, 3.50) (2 decimal places).\n(c) M1: WB = √((8 − 5.5)² + (0 − 3.5)²) = √18.5. A1: 4.30 (2 decimal places).\n(d) M1: the nearest-station distance is √20 = 4.47 for V and √18.5 = 4.30 for W. R1: V is further from its nearest station. A1: the dump site is V, at (4, 2).\n(e) M1: distances from P(7, 4): to D, √8 = 2.83; to B, √17 = 4.12; to C, √29 = 5.39; to A, √65 = 8.06. A1: the nearest station is D, so the reading is 11 ppm.',
      ru: '(a) M1: VA = √(4² + 2²), VB = √((8 − 4)² + 2²), VC = √((2 − 4)² + 4²). A1: все три расстояния равны √20. A1: расстояние = 4,47 (с точностью до 2 знаков после запятой).\n(b) M1: середина CD равна (5,5; 6), а CD горизонтален, значит серединный перпендикуляр CD — прямая x = 5,5. M1: середина BC равна (5; 3), у BC угловой коэффициент −1, значит серединный перпендикуляр BC — прямая y = x − 2. A1: подставив x = 5,5, получим y = 3,5. A1: W = (5,50; 3,50) (с точностью до 2 знаков после запятой).\n(c) M1: WB = √((8 − 5,5)² + (0 − 3,5)²) = √18,5. A1: 4,30 (с точностью до 2 знаков после запятой).\n(d) M1: расстояние до ближайшей станции равно √20 = 4,47 для V и √18,5 = 4,30 для W. R1: V дальше от своей ближайшей станции. A1: место свалки — V, в точке (4; 2).\n(e) M1: расстояния от P(7; 4): до D — √8 = 2,83; до B — √17 = 4,12; до C — √29 = 5,39; до A — √65 = 8,06. A1: ближайшая станция — D, значит показание равно 11 ppm.',
    },
    answer: '4.47; 5.50; 3.50; 4.30; 4; 2; 11',
    origin: 'original',
    minutes: 14,
  },
];
