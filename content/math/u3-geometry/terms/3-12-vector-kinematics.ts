import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'kinematics-position-vector',
    term: { en: 'position vector r(t)', ru: 'вектор положения r(t) (position vector r(t))' },
    def: {
      en: 'The vector from a fixed origin to a moving object at time t, written r(t).',
      ru: 'Вектор от неподвижного начала координат до движущегося объекта в момент t, записывается r(t).',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.2, p. 541' },
  },
  {
    id: 'kinematics-velocity-vector',
    term: { en: 'velocity vector', ru: 'вектор скорости (velocity vector)' },
    def: {
      en: 'The rate of change of the position vector with time, v = dr/dt.',
      ru: 'Скорость изменения вектора положения во времени, v = dr/dt.',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.2, p. 540' },
    sim: 'math.vector-lab',
  },
  {
    id: 'kinematics-speed',
    term: { en: 'speed', ru: 'скорость (speed)' },
    def: {
      en: 'The length of the velocity vector, written |v|. It is a scalar, so it is never negative.',
      ru: 'Модуль вектора скорости |v|. Это скалярная величина и длина вектора, поэтому она не бывает отрицательной.',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.2, p. 541' },
    pitfall: {
      en: 'Speed is the square root of the sum of the squares of the components, not the sum of the components.',
      ru: 'Скорость равна корню из суммы квадратов компонент, а не сумме самих компонент.',
    },
  },
];
