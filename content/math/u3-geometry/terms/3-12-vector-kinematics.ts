import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.12',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'kinematics-position-vector',
    term: { en: 'position vector r(t)', ru: 'вектор положения r(t) (position vector)' },
    def: {
      en: 'The vector from a fixed origin to a moving object at time t, written r(t). For constant velocity r(t) = r0 + tv, where r0 is the position at t = 0.',
      ru: 'Вектор от неподвижного начала координат до движущегося объекта в момент t, записывается r(t). При постоянной скорости r(t) = r0 + tv, где r0 — положение в момент t = 0.',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'kinematics-velocity-vector',
    term: { en: 'velocity vector', ru: 'вектор скорости (velocity vector)' },
    def: {
      en: 'The rate of change of the position vector with time, v = dr/dt. For constant velocity it is the displacement divided by the time taken.',
      ru: 'Скорость изменения вектора положения во времени, v = dr/dt. При постоянной скорости это перемещение, делённое на затраченное время.',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.vector-lab',
  },
  {
    id: 'kinematics-speed',
    term: { en: 'speed', ru: 'скорость (speed)' },
    def: {
      en: 'The magnitude of the velocity vector, |v|. It is a scalar and a length, so it is never negative.',
      ru: 'Модуль вектора скорости |v|. Это скалярная величина и длина вектора, поэтому она не бывает отрицательной.',
    },
    syllabus: '3.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Speed is the square root of the sum of the squares of the components, not the sum of the components.',
      ru: 'Скорость равна корню из суммы квадратов компонент, а не сумме самих компонент.',
    },
  },
];
