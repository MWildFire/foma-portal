import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'phase-plane-2d',
    term: { en: 'phase plane', ru: 'фазовая плоскость (phase plane)' },
    def: {
      en: 'The plane with x on one axis and y on the other, for a system $\\frac{dx}{dt} = f(x, y)$, $\\frac{dy}{dt} = g(x, y)$. Each point is a state of the system, and a trajectory is the curve traced by the state as $t$ increases.',
      ru: 'Плоскость с осью x и осью y для системы $\\frac{dx}{dt} = f(x, y)$, $\\frac{dy}{dt} = g(x, y)$. Каждая точка задаёт состояние системы, а траектория — кривую, которую это состояние описывает при росте $t$.',
    },
    syllabus: '5.17',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.3, p. 550' },
    sim: 'math.phase-portrait-lab',
  },
  {
    id: 'equilibrium-point-2d',
    term: { en: 'equilibrium point of a system', ru: 'точка равновесия системы (equilibrium point of a system)' },
    def: {
      en: 'A point where $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} = 0$ at the same time, so a state that starts there stays there. For a linear system with $D \\neq 0$, where $D$ is the determinant of its coefficient matrix, the origin is the only equilibrium point.',
      ru: 'Точка, в которой одновременно $\\frac{dx}{dt} = 0$ и $\\frac{dy}{dt} = 0$, поэтому состояние, начавшееся в ней, в ней и остаётся. Для линейной системы при $D \\neq 0$, где $D$ — определитель матрицы коэффициентов, начало координат — единственная точка равновесия.',
    },
    syllabus: '5.17',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.3, p. 551' },
    pitfall: {
      en: 'The origin is always an equilibrium point of this kind of system. Other equilibrium points appear only when $D = 0$.',
      ru: 'Начало координат всегда является точкой равновесия такой системы. Другие точки равновесия появляются только при $D = 0$.',
    },
  },
  {
    id: 'saddle-point-2d',
    term: { en: 'saddle point', ru: 'седловая точка (saddle point)' },
    def: {
      en: 'An equilibrium point where the eigenvalues are real with opposite signs, so the determinant is negative. Trajectories approach along one eigen-direction and leave along the other.',
      ru: 'Точка равновесия, в которой собственные значения вещественные и разного знака, поэтому определитель отрицательный. Траектории приближаются к точке вдоль одного собственного направления и уходят вдоль другого.',
    },
    syllabus: '5.17',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.3, p. 551' },
    pitfall: {
      en: 'A saddle is always unstable, even though some trajectories approach the origin.',
      ru: 'Седло всегда неустойчиво, хотя некоторые траектории и приближаются к началу координат.',
    },
  },
  {
    id: 'centre-equilibrium-2d',
    term: { en: 'centre of a linear system', ru: 'центр линейной системы (centre of a linear system)' },
    def: {
      en: 'An equilibrium point surrounded by closed orbits. It occurs when the trace is zero and the determinant is positive, so the eigenvalues are purely imaginary.',
      ru: 'Точка равновесия, окружённая замкнутыми траекториями. Она возникает, когда след равен нулю, а определитель положителен, поэтому собственные значения чисто мнимые.',
    },
    syllabus: '5.17',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.3, p. 554' },
    pitfall: {
      en: 'A zero trace alone does not give a centre: if the determinant is negative, the origin is a saddle.',
      ru: 'Одного нулевого следа недостаточно для центра: при отрицательном определителе начало координат — седло.',
    },
  },
];
