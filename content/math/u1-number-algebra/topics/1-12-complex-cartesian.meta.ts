import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-12-complex-cartesian',
  subject: 'math',
  code: '1.12',
  title: { en: 'Complex numbers: Cartesian form', ru: 'Комплексные числа: декартова форма (Complex numbers: Cartesian form)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 12,
  minutes: 45,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can write a complex number as a + bi, find its real and imaginary parts, and add, multiply and divide such numbers',
      ru: 'Могу записать комплексное число в виде a + bi, найти его действительную и мнимую части и сложить, умножить и разделить такие числа',
    },
    {
      en: 'I can find the modulus and argument of z, plot z on an Argand diagram and use its conjugate',
      ru: 'Могу найти модуль и аргумент z, отметить z на диаграмме Аргана и использовать сопряжённое число',
    },
    {
      en: 'I can solve a quadratic with negative discriminant and find powers of complex numbers with technology',
      ru: 'Могу решить квадратное уравнение с отрицательным дискриминантом и найти степени комплексных чисел с помощью технологии',
    },
  ],
  termIds: ['complex-cartesian-form', 'argand-diagram', 'complex-conjugate', 'complex-modulus'],
  formulaIds: ['complex-division', 'complex-modulus-formula', 'complex-quadratic-roots'],
  sims: ['math.complex-plane-lab'],
  questionIds: ['q-1-12-01', 'q-1-12-02', 'q-1-12-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.12',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
