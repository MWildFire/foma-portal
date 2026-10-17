import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'kinematics-constant-velocity',
    tex: '\\mathbf{r}(t)=\\mathbf{r}_0+t\\,\\mathbf{v}',
    name: { en: 'Position with constant velocity', ru: 'Положение при постоянной скорости (Position with constant velocity)' },
    meaning: {
      en: 'r0 is the position at t = 0 and v is constant. If v is zero, the trajectory is the point r0. For nonzero v it is a segment on a finite closed time interval, a ray for t >= 0, or a line when t ranges over all real numbers.',
      ru: 'r0 — положение в момент t = 0, v — постоянный вектор скорости. При нулевом v траектория — точка r0. При ненулевом v это отрезок на конечном замкнутом промежутке времени, луч при t >= 0 или прямая при всех вещественных t.',
    },
    when: {
      en: 'Constant velocity in two or three dimensions, including rest. The booklet gives the vector line $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}$ (page 8); a line requires nonzero $\\mathbf{b}$, and a motion model also specifies the allowed times.',
      ru: 'Постоянная скорость на плоскости или в пространстве, включая покой. В книжке векторная прямая записана как $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}$ (стр. 8); для прямой нужно ненулевое $\\mathbf{b}$, а модель движения также задаёт допустимое время.',
    },
    syllabus: '3.12',
    inBooklet: false,
    example: {
      en: 'With r0 = (4, 6, 20) and v = (2, -3, 1): r(t) = (4 + 2t, 6 - 3t, 20 + t).',
      ru: 'При r0 = (4, 6, 20) и v = (2, -3, 1): r(t) = (4 + 2t, 6 - 3t, 20 + t).',
    },
  },
  {
    id: 'kinematics-velocity-derivative',
    tex: '\\mathbf{v}(t)=\\dfrac{d\\mathbf{r}}{dt}=\\left(\\dfrac{dx}{dt},\\,\\dfrac{dy}{dt}\\right)',
    name: { en: 'Velocity from the position vector', ru: 'Скорость по вектору положения (Velocity from the position vector)' },
    meaning: {
      en: 'The velocity vector is the derivative of the position vector, found by differentiating each component with respect to t.',
      ru: 'Вектор скорости — производная вектора положения, найденная дифференцированием каждой компоненты по t.',
    },
    when: {
      en: 'Motion with variable velocity in two dimensions, where r(t) = (x(t), y(t)) is given.',
      ru: 'Движение с переменной скоростью на плоскости, когда задано r(t) = (x(t), y(t)).',
    },
    syllabus: '3.12',
    inBooklet: false,
  },
  {
    id: 'kinematics-speed-magnitude',
    tex: '|\\mathbf{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}',
    name: { en: 'Speed as the magnitude of velocity', ru: 'Скорость как модуль вектора скорости (Speed as the magnitude of velocity)' },
    meaning: {
      en: 'The speed is the length of the velocity vector. In two dimensions drop the v3 term.',
      ru: 'Скорость равна длине вектора скорости. На плоскости слагаемое v3 не учитывается.',
    },
    when: {
      en: 'Finding how fast an object moves from its velocity components.',
      ru: 'Нахождение быстроты движения по компонентам вектора скорости.',
    },
    syllabus: '3.12',
    inBooklet: true,
  },
];
