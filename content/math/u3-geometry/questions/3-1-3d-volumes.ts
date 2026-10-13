import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-1-01',
    subject: 'math',
    topicIds: ['3-1-3d-volumes'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Points A(-1, 3, 2) and B(5, -1, 8) are given in metres in a three-dimensional coordinate system.\n\n(a) Find the distance AB, giving your answer to 3 significant figures. [2]\n\n(b) Find the coordinates of the midpoint M of AB. [2]',
      ru: 'Точки A(-1, 3, 2) и B(5, -1, 8) заданы в метрах в трёхмерной системе координат.\n\n(a) Найдите расстояние AB, ответ дайте с точностью до 3 значащих цифр. [2]\n\n(b) Найдите координаты середины M отрезка AB. [2]',
    },
    markscheme: {
      en: '(a) M1: AB squared = (5 - (-1))^2 + (-1 - 3)^2 + (8 - 2)^2 = 36 + 16 + 36 = 88. A1: AB = 9.38 m (3 significant figures).\n(b) M1: each coordinate of M is the average of the corresponding coordinates of A and B. A1: M(2, 1, 5).',
      ru: '(a) M1: AB² = (5 - (-1))² + (-1 - 3)² + (8 - 2)² = 36 + 16 + 36 = 88. A1: AB = 9,38 м (с точностью до 3 значащих цифр).\n(b) M1: каждая координата M — среднее арифметическое соответствующих координат A и B. A1: M(2, 1, 5).',
    },
    answer: '9.38; 2; 1; 5',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-1-02',
    subject: 'math',
    topicIds: ['3-1-3d-volumes'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A right square pyramid VABCD has a square base ABCD with side 10 cm. The vertex V is vertically above the centre O of the base, and VO = 12 cm. Find the angle between the edge VA and the base ABCD, giving your answer to 1 decimal place.',
      ru: 'Прямая квадратная пирамида VABCD имеет квадратное основание ABCD со стороной 10 см. Вершина V находится строго над центром O основания, VO = 12 см. Найдите угол между ребром VA и основанием ABCD, ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: 'M1: OA is half the diagonal of the base, so OA = 10/√2 = 5√2 = 7.07 cm. M1: tan(angle VAO) = VO / OA = 12 / 7.07. A1: angle VAO = 59.5°. R1: OA is the projection of VA onto the base, so angle VAO is the angle between the edge and the base.',
      ru: 'M1: OA — половина диагонали основания, OA = 10/√2 = 5√2 = 7,07 см. M1: tan(угол VAO) = VO / OA = 12 / 7,07. A1: угол VAO = 59,5°. R1: OA — проекция VA на основание, поэтому угол VAO — угол между ребром и основанием.',
    },
    answer: '59.5',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-1-03',
    subject: 'math',
    topicIds: ['3-1-3d-volumes'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A decorative solid is made by joining a solid hemisphere of radius 6 cm to the flat base of a solid right circular cone. The cone has base radius 6 cm and vertical height 8 cm. The base disc of the cone coincides with the flat face of the hemisphere, so the two solids are joined along the whole disc.\n\n(a) Find the slant height of the cone. [2]\n\n(b) Show that the volume of the solid is 240π cm³. [3]\n\n(c) Find the total external surface area of the solid, giving your answer to 3 significant figures. [4]\n\n(d) Find the angle between a slant edge of the cone and the base of the cone, giving your answer to 1 decimal place. [3]\n\n(e) Hence find the volume of the solid, in cm³, to 3 significant figures. [2]',
      ru: 'Декоративное тело получено соединением сплошной полусферы радиуса 6 см с плоским основанием сплошного прямого кругового конуса. Радиус основания конуса равен 6 см, вертикальная высота равна 8 см. Круг основания конуса совпадает с плоской гранью полусферы, поэтому тела соединены по всему кругу.\n\n(a) Найдите образующую конуса. [2]\n\n(b) Покажите, что объём тела равен 240π см³. [3]\n\n(c) Найдите полную внешнюю площадь поверхности тела, ответ дайте с точностью до 3 значащих цифр. [4]\n\n(d) Найдите угол между образующей конуса и основанием конуса, ответ дайте с одним знаком после запятой. [3]\n\n(e) Используя результат части (b), найдите объём тела в см³ с точностью до 3 значащих цифр. [2]',
    },
    markscheme: {
      en: '(a) M1: l^2 = 6^2 + 8^2. A1: l = 10 cm.\n(b) M1: volume of hemisphere = (2/3)π × 6^3 = 144π. M1: volume of cone = (1/3)π × 6^2 × 8 = 96π. A1: total volume = 240π cm³ (AG).\n(c) M1: curved surface area of hemisphere = 2π × 6^2 = 72π. M1: curved surface area of cone = π × 6 × 10 = 60π. R1: the joined disc is not part of the outside surface. A1: total external surface area = 132π = 414.69 cm², so 415 cm² (3 significant figures).\n(d) M1: right-angled triangle with sides 6 (radius), 8 (vertical height) and 10 (slant edge), right angle at the centre of the base. M1: cos θ = 6/10. A1: θ = 53.1°.\n(e) M1: V = 240π. A1: V = 754 cm³ (3 significant figures).',
      ru: '(a) M1: l² = 6² + 8². A1: l = 10 см.\n(b) M1: объём полусферы = (2/3)π × 6³ = 144π. M1: объём конуса = (1/3)π × 6² × 8 = 96π. A1: полный объём = 240π см³ (AG).\n(c) M1: боковая поверхность полусферы = 2π × 6² = 72π. M1: боковая поверхность конуса = π × 6 × 10 = 60π. R1: соединённый круг не входит во внешнюю поверхность. A1: полная внешняя площадь = 132π = 414,69 см², то есть 415 см² (с точностью до 3 значащих цифр).\n(d) M1: прямоугольный треугольник со сторонами 6 (радиус), 8 (высота) и 10 (образующая), прямой угол в центре основания. M1: cos θ = 6/10. A1: θ = 53,1°.\n(e) M1: V = 240π. A1: V = 754 см³ (с точностью до 3 значащих цифр).',
    },
    answer: '10; 415; 53.1; 754',
    origin: 'original',
    minutes: 14,
  },
];
