import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'kinematics-constant-velocity',
    tex: '\\mathbf{r}(t)=\\mathbf{r}_0+t\\,\\mathbf{v}',
    name: { en: 'Position with constant velocity', ru: 'Положение при постоянной скорости' },
    meaning: {
      en: 'r0 is the position at t = 0 and v is the constant velocity vector. The path is a straight line through r0.',
      ru: 'r0 — положение в момент t = 0, v — постоянный вектор скорости. Путь — прямая линия через точку r0.',
    },
    when: {
      en: 'Linear motion with constant velocity in two or three dimensions.',
      ru: 'Прямолинейное движение с постоянной скоростью на плоскости или в пространстве.',
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
    name: { en: 'Velocity from the position vector', ru: 'Скорость по вектору положения' },
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
    name: { en: 'Speed as the magnitude of velocity', ru: 'Скорость как модуль вектора скорости' },
    meaning: {
      en: 'The speed is the length of the velocity vector. In two dimensions drop the v3 term.',
      ru: 'Скорость равна длине вектора скорости. На плоскости слагаемое v3 не учитывается.',
    },
    when: {
      en: 'Finding how fast an object moves from its velocity components.',
      ru: 'Нахождение быстроты движения по компонентам вектора скорости.',
    },
    syllabus: '3.12',
    inBooklet: false,
  },
];
