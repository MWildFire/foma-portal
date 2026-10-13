import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-4-01',
    subject: 'math',
    topicIds: ['5-4-tangents-normals'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The curve C has equation y = 2x^2 - 3x + 5. The point P lies on C where x = 2. Find the y-intercept of the normal to C at P. Give your answer correct to 2 decimal places.',
      ru: 'Кривая C задана уравнением y = 2x^2 - 3x + 5. Точка P лежит на C при x = 2. Найдите y-координату точки, в которой нормаль к C в точке P пересекает ось y. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: dy/dx = 4x - 3, so the gradient at x = 2 is 5. M1: P is (2, 7), and the normal gradient is -1/5. A1: the normal is y = -0.2x + 7.4, so the y-intercept is 7.40.',
      ru: 'M1: dy/dx = 4x - 3, значит угловой коэффициент при x = 2 равен 5. M1: P имеет координаты (2, 7), угловой коэффициент нормали равен -1/5. A1: нормаль y = -0,2x + 7,4, значит y-координата точки пересечения с осью y равна 7,40.',
    },
    answer: '7.40',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-4-02',
    subject: 'math',
    topicIds: ['5-4-tangents-normals'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The curve y = 9 - x^2 is drawn for x > 0. The point P lies on the curve where x = 1.5. The tangent to the curve at P meets the x-axis at A and the y-axis at B. Find the area of triangle OAB, where O is the origin. Give your answer correct to 2 decimal places.',
      ru: 'Кривая y = 9 - x^2 рассматривается при x > 0. Точка P лежит на кривой при x = 1,5. Касательная к кривой в точке P пересекает ось x в точке A, а ось y — в точке B. Найдите площадь треугольника OAB, где O — начало координат. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: at x = 1.5, y = 6.75 and dy/dx = -2x = -3. M1: tangent y = -3x + 11.25. A1: A is (3.75, 0) and B is (0, 11.25). A1: area = 0.5 × 3.75 × 11.25 = 21.09 (2 decimal places).',
      ru: 'M1: при x = 1,5 имеем y = 6,75 и dy/dx = -2x = -3. M1: касательная y = -3x + 11,25. A1: A имеет координаты (3,75; 0), а B — (0; 11,25). A1: площадь = 0,5 × 3,75 × 11,25 = 21,09 (с точностью до 2 знаков).',
    },
    answer: '21.09',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-4-03',
    subject: 'math',
    topicIds: ['5-4-tangents-normals'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A ski jump is modelled as a hill with cross-section C: y = 6x - x^2 for 0 ≤ x ≤ 6, where x and y are in metres and the ground is y = 0. A skier leaves the hill at the point P(5, 5) and moves in a straight line along the tangent to C at P.\n\n(a) Show that P lies on C, and find the gradient of the tangent at P. [3]\n\n(b) Find the x-coordinate of the point A where the tangent meets the ground. [2]\n\n(c) Find the straight-line distance PA, correct to 3 significant figures. [3]\n\n(d) The normal to C at P meets C again at the point Q. Find the x-coordinate of Q. [4]\n\n(e) Comment on whether a straight line is a good model for the path of the skier. State one reason. [2]',
      ru: 'Прыжковый трамплин моделируется холмом с поперечным сечением C: y = 6x - x^2 при 0 ≤ x ≤ 6, где x и y измеряются в метрах, а земля задана уравнением y = 0. Лыжник покидает холм в точке P(5, 5) и движется по прямой, касательной к C в точке P.\n\n(a) Покажите, что P лежит на C, и найдите угловой коэффициент касательной в точке P. [3]\n\n(b) Найдите x-координату точки A, в которой касательная пересекает землю. [2]\n\n(c) Найдите расстояние по прямой PA с точностью до 3 значащих цифр. [3]\n\n(d) Нормаль к C в точке P снова пересекает C в точке Q. Найдите x-координату Q. [4]\n\n(e) Прокомментируйте, годится ли прямая в качестве модели пути лыжника. Назовите одну причину. [2]',
    },
    markscheme: {
      en: '(a) M1: dy/dx = 6 - 2x. A1 (AG): when x = 5, y = 30 - 25 = 5, so P lies on C. A1: the gradient at P is 6 - 10 = -4.\n(b) M1: the tangent is y - 5 = -4(x - 5), so y = -4x + 25. A1: at the ground, y = 0 gives x = 6.25.\n(c) M1: horizontal distance 6.25 - 5 = 1.25 and vertical distance 5. M1: PA = sqrt(1.25^2 + 5^2). A1: PA = 5.15 m (3 s.f.).\n(d) M1: the normal gradient is 1/4, so the normal is y = x/4 + 3.75. M1: 6x - x^2 = x/4 + 3.75, so 4x^2 - 23x + 15 = 0. M1: (x - 5)(4x - 3) = 0. A1: x = 0.75 for Q (x = 5 gives P).\n(e) R1: a real skier follows a curved path, because gravity acts continuously, so the straight tangent is only an approximation near take-off. R1: a valid reason linked to the skier, such as air resistance or the change in direction on the slope.',
      ru: '(a) M1: dy/dx = 6 - 2x. A1 (AG): при x = 5 имеем y = 30 - 25 = 5, значит P лежит на C. A1: угловой коэффициент в точке P равен 6 - 10 = -4.\n(b) M1: касательная y - 5 = -4(x - 5), значит y = -4x + 25. A1: при y = 0 получаем x = 6,25.\n(c) M1: горизонтальное расстояние 6,25 - 5 = 1,25 и вертикальное расстояние 5. M1: PA = sqrt(1,25^2 + 5^2). A1: PA = 5,15 м (3 значащие цифры).\n(d) M1: угловой коэффициент нормали равен 1/4, значит нормаль y = x/4 + 3,75. M1: 6x - x^2 = x/4 + 3,75, значит 4x^2 - 23x + 15 = 0. M1: (x - 5)(4x - 3) = 0. A1: x = 0,75 для Q (при x = 5 получается P).\n(e) R1: настоящий лыжник движется по криволинейному пути, так как сила тяжести действует непрерывно, поэтому прямая касательная лишь приближает путь вблизи точки отрыва. R1: верная причина, связанная с лыжником, например сопротивление воздуха или изменение направления на склоне.',
    },
    answer: '-4; 6.25; 5.15; 0.75',
    origin: 'original',
    minutes: 14,
  },
];
