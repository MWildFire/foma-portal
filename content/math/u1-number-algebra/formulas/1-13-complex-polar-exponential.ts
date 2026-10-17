import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'complex-polar-form',
    tex: 'z=r(\\cos\\theta+i\\sin\\theta)=r\\,\\text{cis}\\,\\theta',
    name: { en: 'Modulus–argument form', ru: 'Модульно-аргументная форма (Modulus–argument form)' },
    meaning: {
      en: 'For nonzero z, writes it with modulus r > 0 and argument θ. Zero has modulus 0 but no defined argument. Here cis θ means cos θ + i sin θ.',
      ru: 'Для ненулевого z запись через модуль r > 0 и аргумент θ. У нуля модуль равен 0, но аргумент не определён. Здесь cis θ означает cos θ + i sin θ.',
    },
    when: {
      en: 'Multiplying, dividing or raising complex numbers to powers, and reading the geometry from the Argand diagram.',
      ru: 'Умножение, деление и возведение комплексных чисел в степень, а также чтение геометрии с диаграммы Аргана.',
    },
    syllabus: '1.13',
    inBooklet: true,
    example: {
      en: 'For z = 2 cis 25 degrees: |z| = 2 and arg z = 25 degrees.',
      ru: 'Для z = 2 cis 25°: |z| = 2 и arg z = 25°.',
    },
  },
  {
    id: 'complex-exponential-form',
    tex: 'z=r\\,e^{i\\theta}',
    name: { en: 'Exponential form', ru: 'Показательная форма (Exponential form)' },
    meaning: {
      en: 'For nonzero z, uses modulus r > 0 and argument θ in radians, as r times e to the power iθ.',
      ru: 'Записывает ненулевой z с модулем r > 0 и аргументом θ в радианах как r умножить на e в степени iθ.',
    },
    when: {
      en: 'Products, quotients and powers become simple powers of e.',
      ru: 'Произведения, частные и степени становятся простыми степенями e.',
    },
    syllabus: '1.13',
    inBooklet: true,
    example: {
      en: 'For z = -2 + 2i: z = 2 sqrt(2) e^(3 pi i / 4), with the angle in radians.',
      ru: 'Для z = -2 + 2i: z = 2 sqrt(2) e^(3 pi i / 4), угол в радианах.',
    },
  },
  {
    id: 'complex-de-moivre',
    tex: '(r\\,\\text{cis}\\,\\theta)^{n}=r^{n}\\,\\text{cis}\\,(n\\theta)',
    name: { en: 'de Moivre’s theorem', ru: 'Теорема Муавра (de Moivre’s theorem)' },
    meaning: {
      en: 'For an integer n, the power raises the modulus to the power n and multiplies the argument by n.',
      ru: 'Для целого n степень возводит модуль в степень n, а аргумент умножает на n.',
    },
    when: {
      en: 'Use a nonzero base; zero has no defined argument, and its nonpositive powers are not defined here. Integer powers of a complex number given in polar form.',
      ru: 'Используйте ненулевое основание: у нуля нет определённого аргумента, его неположительные степени здесь не определены. Целые степени комплексного числа, заданного в полярной форме.',
    },
    syllabus: '1.13',
    inBooklet: false,
    example: {
      en: 'For z = -2 + 2i: z^4 = (2 sqrt(2))^4 cis(3 pi) = 64 cis(3 pi) = -64.',
      ru: 'Для z = -2 + 2i: z^4 = (2 sqrt(2))^4 cis(3 pi) = 64 cis(3 pi) = -64.',
    },
  },
  {
    id: 'sinusoid-sum-equal-frequency',
    tex: 'a\\cos\\omega t+b\\sin\\omega t=R\\cos(\\omega t-\\varphi),\\quad R=\\sqrt{a^{2}+b^{2}}',
    name: { en: 'Sum of sinusoids of the same frequency', ru: 'Сумма синусоид одинаковой частоты (Sum of sinusoids of the same frequency)' },
    meaning: {
      en: 'The sum is one sinusoid with amplitude R and phase φ, where R cos φ = a and R sin φ = b.',
      ru: 'Сумма — одна синусоида с амплитудой R и фазой φ, где R cos φ = a и R sin φ = b.',
    },
    when: {
      en: 'Combining same-frequency signals. If a=b=0 then R=0 and phase is undetermined; otherwise determine its quadrant from both coefficients.',
      ru: 'Сложение сигналов одинаковой частоты. При a=b=0 амплитуда R=0, фаза не определена; иначе выбирайте её четверть по обоим коэффициентам.',
    },
    syllabus: '1.13',
    inBooklet: false,
    example: {
      en: 'For 6 cos(ωt) + 8 sin(ωt): R = 10.0 and φ = 0.927 radians (3 decimal places).',
      ru: 'Для 6 cos(ωt) + 8 sin(ωt): R = 10,0 и φ = 0,927 радиана (с точностью до 3 знаков).',
    },
  },
];
