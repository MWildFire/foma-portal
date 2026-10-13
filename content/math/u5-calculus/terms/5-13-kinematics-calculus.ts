import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 5.13',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'calc-kinematics-displacement',
    term: { en: 'displacement', ru: 'перемещение (displacement)' },
    def: {
      en: 'The position of a particle relative to a fixed origin $O$ on a straight line, written $s(t)$. It is signed: positive on one side of $O$ and negative on the other.',
      ru: 'Положение частицы относительно фиксированной точки отсчёта $O$ на прямой, записывается как $s(t)$. Величина со знаком: положительна по одну сторону от $O$ и отрицательна по другую.',
    },
    syllabus: '5.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'calc-kinematics-velocity',
    term: { en: 'velocity', ru: 'скорость (velocity)' },
    def: {
      en: 'The rate of change of displacement with respect to time, $v = \\dfrac{ds}{dt}$. Its sign gives the direction of motion.',
      ru: 'Скорость изменения перемещения по времени, $v = \\dfrac{ds}{dt}$. Её знак показывает направление движения.',
    },
    syllabus: '5.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Speed is the modulus $|v|$ and is never negative. Zero velocity means the particle is at rest for an instant, not that it is at the origin.',
      ru: 'Модуль скорости $|v|$ не бывает отрицательным. Нулевая скорость означает покой в данный момент, а не нахождение в точке отсчёта.',
    },
  },
  {
    id: 'calc-kinematics-acceleration',
    term: { en: 'acceleration', ru: 'ускорение (acceleration)' },
    def: {
      en: 'The rate of change of velocity with respect to time, $a = \\dfrac{dv}{dt} = \\dfrac{d^{2}s}{dt^{2}}$.',
      ru: 'Скорость изменения скорости по времени, $a = \\dfrac{dv}{dt} = \\dfrac{d^{2}s}{dt^{2}}$.',
    },
    syllabus: '5.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A zero acceleration does not mean the particle is at rest. It means the velocity has a stationary value at that instant.',
      ru: 'Нулевое ускорение не означает покой. Оно означает, что скорость имеет стационарное значение в этот момент.',
    },
  },
  {
    id: 'calc-kinematics-distance',
    term: { en: 'distance travelled', ru: 'пройденный путь (distance travelled)' },
    def: {
      en: 'The total length of the path covered, found by integrating the speed $|v|$ over the time interval. It can be larger than the magnitude of the displacement when $v$ changes sign.',
      ru: 'Полная длина пройденного пути, находится интегрированием модуля скорости $|v|$ по промежутку времени. Может быть больше модуля перемещения, если $v$ меняет знак.',
    },
    syllabus: '5.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
