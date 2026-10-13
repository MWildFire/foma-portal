import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-11-01',
    subject: 'math',
    topicIds: ['3-11-vector-line'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A line L passes through the points A(1, 2, -1) and B(4, -1, 3). Find the coordinates of the point where L meets the plane z = 0.',
      ru: 'Прямая L проходит через точки A(1, 2, −1) и B(4, −1, 3). Найдите координаты точки, в которой L пересекает плоскость z = 0.',
    },
    markscheme: {
      en: 'M1: direction vector AB = (3, -3, 4). M1: vector equation r = (1, 2, -1) + λ(3, -3, 4). M1: the z-component gives -1 + 4λ = 0, so λ = 0.25. A1: (1.75, 1.25, 0).',
      ru: 'M1: направляющий вектор AB = (3, -3, 4). M1: векторное уравнение r = (1, 2, -1) + λ(3, -3, 4). M1: третья компонента даёт -1 + 4λ = 0, откуда λ = 0,25. A1: (1,75; 1,25; 0).',
    },
    answer: '1.75; 1.25; 0',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-11-02',
    subject: 'math',
    topicIds: ['3-11-vector-line'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A line L has vector equation r = (3, -2) + λ(4, 1). Find the gradient of L and the y-intercept of L.',
      ru: 'Прямая L задана векторным уравнением r = (3, −2) + λ(4, 1). Найдите угловой коэффициент прямой L и её точку пересечения с осью y.',
    },
    markscheme: {
      en: 'M1: the direction vector (4, 1) gives the gradient 1/4 = 0.25. M1: x = 0 requires 3 + 4λ = 0, so λ = -0.75 and y = -2 - 0.75. A1: gradient 0.25 and y-intercept -2.75.',
      ru: 'M1: направляющий вектор (4, 1) даёт угловой коэффициент 1/4 = 0,25. M1: при x = 0 получаем 3 + 4λ = 0, откуда λ = -0,75 и y = -2 - 0,75. A1: угловой коэффициент 0,25 и пересечение с осью y в точке -2,75.',
    },
    answer: '0.25; -2.75',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-11-03',
    subject: 'math',
    topicIds: ['3-11-vector-line'],
    paper: 'P2',
    marks: 14,
    command: 'Find, Hence, Write down',
    prompt: {
      en: 'A zip line runs from the top of a tower to the ground. Take the ground as the plane z = 0 and measure in metres. The top of the tower is A(0, 0, 40) and the landing point is B(120, 60, 0). The zip line is the straight line L1 through A and B.\n\n(a) Find a direction vector for L1 with integer components whose highest common factor is 1. Hence write down the vector equation of L1 in the form r = a + λb. [2]\n\n(b) The point C lies on L1 at a height of 25 m. Find the coordinates of C. [3]\n\n(c) A second zip line L2 has vector equation r = (35, 11, 20) + μ(-5, 4, 10). Show that L1 and L2 meet, and find the coordinates of their point of intersection. [4]\n\n(d) A third zip line L3 is parallel to L1 and passes through the point Q(20, 0, 31). Find the coordinates of the point on L3 whose x-coordinate is 50. [3]\n\n(e) Find the coordinates of the point where L2 meets the ground. [2]',
      ru: 'Тросовая переправа (zip line) идёт с вершины башни до земли. Считайте землю плоскостью z = 0, расстояния измеряйте в метрах. Вершина башни — точка A(0, 0, 40), точка приземления — B(120, 60, 0). Переправа — прямая L1, проходящая через A и B.\n\n(a) Найдите направляющий вектор L1 с целыми координатами, наибольший общий делитель которых равен 1. Затем запишите векторное уравнение L1 в виде r = a + λb. [2]\n\n(b) Точка C лежит на L1 на высоте 25 м. Найдите координаты C. [3]\n\n(c) Вторая переправа L2 задана векторным уравнением r = (35, 11, 20) + μ(-5, 4, 10). Покажите, что L1 и L2 пересекаются, и найдите координаты точки пересечения. [4]\n\n(d) Третья переправа L3 параллельна L1 и проходит через точку Q(20, 0, 31). Найдите координаты точки на L3, у которой x-координата равна 50. [3]\n\n(e) Найдите координаты точки, в которой L2 выходит на землю. [2]',
    },
    markscheme: {
      en: '(a) M1: AB = (120, 60, -40) = 20(6, 3, -2). A1: direction (6, 3, -2), so r = (0, 0, 40) + λ(6, 3, -2).\n(b) M1: z = 40 - 2t = 25 for r = (6t, 3t, 40 - 2t), so t = 7.5. M1: x = 6(7.5) = 45 and y = 3(7.5) = 22.5. A1: C(45, 22.5, 25).\n(c) M1: equate the components: 6t = 35 - 5μ, 3t = 11 + 4μ, 40 - 2t = 20 + 10μ. M1: solve the first two: t = 5 and μ = 1. R1: the third component also holds, since 40 - 10 = 30 = 20 + 10. A1: intersection point (30, 15, 30).\n(d) M1: 20 + 6ν = 50, so ν = 5. M1: y = 3(5) = 15 and z = 31 - 2(5) = 21. A1: (50, 15, 21).\n(e) M1: z = 20 + 10μ = 0, so μ = -2. A1: x = 35 + 10 = 45 and y = 11 - 8 = 3, so (45, 3, 0).',
      ru: '(a) M1: AB = (120, 60, -40) = 20(6, 3, -2). A1: направляющий вектор (6, 3, -2), значит r = (0, 0, 40) + λ(6, 3, -2).\n(b) M1: z = 40 - 2t = 25 для r = (6t, 3t, 40 - 2t), откуда t = 7,5. M1: x = 6(7,5) = 45 и y = 3(7,5) = 22,5. A1: C(45; 22,5; 25).\n(c) M1: приравняйте координаты: 6t = 35 - 5μ, 3t = 11 + 4μ, 40 - 2t = 20 + 10μ. M1: из первых двух уравнений t = 5 и μ = 1. R1: третья координата тоже выполняется, так как 40 - 10 = 30 = 20 + 10. A1: точка пересечения (30; 15; 30).\n(d) M1: 20 + 6ν = 50, откуда ν = 5. M1: y = 3(5) = 15 и z = 31 - 2(5) = 21. A1: (50; 15; 21).\n(e) M1: z = 20 + 10μ = 0, откуда μ = -2. A1: x = 35 + 10 = 45 и y = 11 - 8 = 3, то есть (45; 3; 0).',
    },
    answer: '6; 3; -2; 45; 22.5; 25; 30; 15; 30; 50; 15; 21; 45; 3; 0',
    origin: 'original',
    minutes: 14,
  },
];
