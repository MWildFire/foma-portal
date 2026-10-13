import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-13-complex-polar-exponential',
  subject: 'math',
  code: '1.13',
  title: { en: 'Complex numbers: polar and exponential form', ru: 'Комплексные числа: полярная и показательная формы (Complex numbers: polar and exponential form)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 13,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can convert a complex number between Cartesian, modulus–argument and exponential form',
      ru: 'Могу переводить комплексное число между декартовой, модульно-аргументной и показательной формами',
    },
    {
      en: 'I can multiply, divide and raise complex numbers to integer powers in polar form, and read these operations as rotations and stretches',
      ru: 'Могу умножать, делить и возводить комплексные числа в целую степень в полярной форме и понимать эти действия как повороты и растяжения',
    },
    {
      en: 'I can write a cos(ωt) + b sin(ωt) as R cos(ωt − φ) and use it to find the amplitude and phase of a sum of sinusoids',
      ru: 'Могу записать a cos(ωt) + b sin(ωt) в виде R cos(ωt − φ) и найти амплитуду и фазу суммы синусоид',
    },
  ],
  termIds: ['modulus-argument-form', 'complex-argument', 'exponential-form', 'de-moivre-theorem'],
  formulaIds: ['complex-polar-form', 'complex-exponential-form', 'complex-de-moivre', 'sinusoid-sum-equal-frequency'],
  sims: ['math.complex-plane-lab'],
  questionIds: ['q-1-13-01', 'q-1-13-02', 'q-1-13-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.13',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
