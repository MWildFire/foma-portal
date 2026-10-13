import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-12-01',
    subject: 'math',
    topicIds: ['3-12-vector-kinematics'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A drone flies in a straight line with constant velocity. Its position vector at time t seconds is r = (4, 6, 20) + t(2, -3, 1), with distances in metres. Find the speed of the drone in metres per second, correct to 3 significant figures.',
      ru: 'Дрон летит по прямой с постоянной скоростью. Его вектор положения в момент t секунд равен r = (4, 6, 20) + t(2, −3, 1); расстояния даны в метрах. Найдите скорость дрона в метрах в секунду с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: velocity v = (2, -3, 1). M1: speed = sqrt(2^2 + (-3)^2 + 1^2) = sqrt(14). A1: 3.74 m/s (3 s.f.).',
      ru: 'M1: скорость v = (2, -3, 1). M1: скорость = sqrt(2^2 + (-3)^2 + 1^2) = sqrt(14). A1: 3,74 м/с (3 значащие цифры).',
    },
    answer: '3.74',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-12-02',
    subject: 'math',
    topicIds: ['3-12-vector-kinematics'],
    paper: 'P1',
    marks: 4,
    command: 'Show that, Find',
    prompt: {
      en: 'Particle A has position vector r_A = t(3, 1) metres at time t seconds. Particle B has position vector r_B = (12, 6) + t(-1, -1) metres at the same time t. Show that the particles collide, and find the time and the position of the collision.',
      ru: 'В момент t секунд вектор положения частицы A равен r_A = t(3, 1) метров, а вектор положения частицы B равен r_B = (12, 6) + t(-1, -1) метров. Покажите, что частицы сталкиваются, и найдите момент и место столкновения.',
    },
    markscheme: {
      en: 'M1: equate the components: 3t = 12 - t and t = 6 - t. M1: solve the first equation: t = 3. R1: the second equation also gives t = 3, so both components agree at the same time and the particles collide. A1: time 3 s at the position (9, 3).',
      ru: 'M1: приравняйте компоненты: 3t = 12 - t и t = 6 - t. M1: из первого уравнения t = 3. R1: второе уравнение тоже даёт t = 3, значит, обе компоненты совпадают в один момент, и частицы сталкиваются. A1: момент 3 с, место (9; 3).',
    },
    answer: '3; 9; 3',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-12-03',
    subject: 'math',
    topicIds: ['3-12-vector-kinematics'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A robot moves on a flat floor. Its position vector at time t seconds, for t ≥ 0, is r(t) = (t³ - 6t² + 9t, 2t² - 8t), with distances in metres from a fixed origin.\n\n(a) Find the velocity vector of the robot at t = 0, and its speed at that time correct to 2 decimal places. [3]\n\n(b) Find the position of the robot at each time when the x-component of its velocity is zero. Give the positions in order of increasing t. [3]\n\n(c) Show that the robot is never at rest for t ≥ 0. [3]\n\n(d) Find the minimum speed of the robot for 0 ≤ t ≤ 4, and the values of t at which this minimum occurs. Give all answers correct to 2 decimal places. [3]\n\n(e) Find the distance of the robot from the origin when t = 4. [2]',
      ru: 'Робот движется по ровному полу. Его вектор положения в момент t секунд при t ≥ 0 равен r(t) = (t³ − 6t² + 9t, 2t² − 8t); расстояния даны в метрах от неподвижного начала координат.\n\n(a) Найдите вектор скорости робота при t = 0 и его скорость (модуль вектора скорости) в этот момент с точностью до 2 знаков после запятой. [3]\n\n(b) Найдите положение робота в каждый момент, когда x-компонента его скорости равна нулю. Укажите положения в порядке возрастания t. [3]\n\n(c) Покажите, что при t ≥ 0 робот никогда не находится в покое. [3]\n\n(d) Найдите минимальную скорость робота при 0 ≤ t ≤ 4 и значения t, при которых этот минимум достигается. Все ответы дайте с точностью до 2 знаков после запятой. [3]\n\n(e) Найдите расстояние робота от начала координат при t = 4. [2]',
    },
    markscheme: {
      en: '(a) M1: v = dr/dt = (3t² - 12t + 9, 4t - 8). A1: v(0) = (9, -8). A1: speed = sqrt(81 + 64) = 12.04 m/s.\n(b) M1: dx/dt = 3t² - 12t + 9 = 3(t - 1)(t - 3) = 0, so t = 1 or t = 3. A1: r(1) = (4, -6). A1: r(3) = (0, -6).\n(c) M1: dy/dt = 4t - 8 = 0 needs t = 2, but then dx/dt = 12 - 24 + 9 = -3, not zero. M1: dx/dt = 0 needs t = 1 or t = 3, where dy/dt = -4 or 4, not zero. R1: the two components are never zero at the same time, so the robot is never at rest.\n(d) M1: speed² = (3t² - 12t + 9)² + (4t - 8)². M1: with s = (t - 2)², speed² = 9(s - 1)² + 16s, which is least when s = 1/9, so t = 2 ± 1/3, that is t = 5/3 or t = 7/3. A1: minimum speed 4√5/3 = 2.98 m/s, at t = 1.67 and t = 2.33.\n(e) M1: r(4) = (64 - 96 + 36, 32 - 32) = (4, 0). A1: distance 4 m.',
      ru: '(a) M1: v = dr/dt = (3t² - 12t + 9, 4t - 8). A1: v(0) = (9; -8). A1: скорость = √(81 + 64) = 12,04 м/с.\n(b) M1: dx/dt = 3t² - 12t + 9 = 3(t - 1)(t - 3) = 0, откуда t = 1 или t = 3. A1: r(1) = (4; -6). A1: r(3) = (0; -6).\n(c) M1: dy/dt = 4t - 8 = 0 требует t = 2, но тогда dx/dt = 12 - 24 + 9 = -3 ≠ 0. M1: dx/dt = 0 требует t = 1 или t = 3, где dy/dt = -4 или 4 ≠ 0. R1: компоненты никогда не равны нулю одновременно, значит, робот никогда не покоится.\n(d) M1: скорость² = (3t² - 12t + 9)² + (4t - 8)². M1: при s = (t - 2)² скорость² = 9(s - 1)² + 16s, наименьшее при s = 1/9, то есть t = 2 ± 1/3, т.е. t = 5/3 или t = 7/3. A1: минимальная скорость 4√5/3 = 2,98 м/с при t = 1,67 и t = 2,33.\n(e) M1: r(4) = (64 - 96 + 36; 32 - 32) = (4; 0). A1: расстояние 4 м.',
    },
    answer: '9; -8; 12.04; 4; -6; 0; -6; 2.98; 1.67; 2.33; 4',
    origin: 'original',
    minutes: 14,
  },
];
