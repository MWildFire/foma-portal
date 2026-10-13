import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'calc-kinematics-derivatives',
    tex: 'v=\\dfrac{ds}{dt},\\quad a=\\dfrac{dv}{dt}=\\dfrac{d^{2}s}{dt^{2}}',
    name: { en: 'Velocity and acceleration by differentiation', ru: 'Скорость и ускорение дифференцированием' },
    meaning: {
      en: 'Velocity is the derivative of displacement with respect to time; acceleration is the derivative of velocity.',
      ru: 'Скорость — производная перемещения по времени; ускорение — производная скорости.',
    },
    when: {
      en: 'Going down the chain from displacement to velocity to acceleration.',
      ru: 'Переход по цепочке от перемещения к скорости и ускорению.',
    },
    syllabus: '5.13',
    inBooklet: false,
    example: {
      en: 'If s = t^3 - 6t^2 then v = 3t^2 - 12t and a = 6t - 12.',
      ru: 'Если s = t^3 - 6t^2, то v = 3t^2 - 12t и a = 6t - 12.',
    },
  },
  {
    id: 'calc-kinematics-integrals',
    tex: 's=\\int v\\,dt,\\qquad v=\\int a\\,dt',
    name: { en: 'Displacement and velocity by integration', ru: 'Перемещение и скорость интегрированием' },
    meaning: {
      en: 'Integrating velocity gives displacement, and integrating acceleration gives velocity, each up to an added constant.',
      ru: 'Интеграл скорости даёт перемещение, интеграл ускорения даёт скорость, каждый с точностью до постоянной.',
    },
    when: {
      en: 'Going up the chain; the constant is fixed by a boundary condition such as s(0) = 2 or v(0) = 0.',
      ru: 'Переход вверх по цепочке; постоянная находится по начальному условию, например s(0) = 2 или v(0) = 0.',
    },
    syllabus: '5.13',
    inBooklet: false,
  },
  {
    id: 'calc-kinematics-power-integral',
    tex: '\\int t^{n}\\,dt=\\dfrac{t^{n+1}}{n+1}+C,\\qquad n\\neq -1',
    name: { en: 'Integral of a power', ru: 'Интеграл степенной функции' },
    meaning: {
      en: 'Raise the power by one, divide by the new power, and add the constant of integration.',
      ru: 'Увеличить показатель на единицу, разделить на новый показатель и прибавить постоянную интегрирования.',
    },
    when: {
      en: 'Integrating polynomial velocity or acceleration with respect to time.',
      ru: 'Интегрирование многочленов по времени для скорости или ускорения.',
    },
    syllabus: '5.13',
    inBooklet: true,
    example: {
      en: 'The integral of 3t^2 - 12t + 9 is t^3 - 6t^2 + 9t + C.',
      ru: 'Интеграл от 3t^2 - 12t + 9 равен t^3 - 6t^2 + 9t + C.',
    },
  },
  {
    id: 'calc-kinematics-total-distance',
    tex: 'd=\\int_{t_{1}}^{t_{2}}|v|\\,dt',
    name: { en: 'Distance travelled', ru: 'Пройденный путь' },
    meaning: {
      en: 'Total path length between t1 and t2: the integral of the speed, which is the modulus of the velocity.',
      ru: 'Полная длина пути между t1 и t2: интеграл от модуля скорости, то есть от |v|.',
    },
    when: {
      en: 'When the velocity changes sign on the interval: split the interval at the times at rest.',
      ru: 'Когда скорость меняет знак на промежутке: разбейте промежуток в моменты покоя.',
    },
    syllabus: '5.13',
    inBooklet: false,
  },
];
