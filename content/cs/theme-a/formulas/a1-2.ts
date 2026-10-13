import type { Formula } from '../../../../src/contract/types';

// A1.2 formulas. Both were checked with python3 (ranges for n = 4 and 8; 1920 × 1080 × 24 = 49 766 400 bits).
export const formulas: Formula[] = [
  {
    id: 'cs-twos-complement-range',
    tex: '-2^{n-1} \\le x \\le 2^{n-1} - 1',
    name: { en: 'Range of an n-bit two’s complement integer', ru: 'диапазон целого числа в n-битном дополнительном коде (two’s complement)' },
    meaning: {
      en: 'For an n-bit two’s complement integer $x$, the smallest value is $-2^{n-1}$ and the largest is $2^{n-1} - 1$.',
      ru: 'Для целого числа $x$ в n-битном дополнительном коде наименьшее значение равно $-2^{n-1}$, а наибольшее — $2^{n-1} - 1$.',
    },
    when: {
      en: 'Use it to check whether a signed value fits in n bits, or to state the range of a register.',
      ru: 'Используйте формулу, чтобы проверить, помещается ли число со знаком в n бит, или чтобы назвать диапазон регистра.',
    },
    syllabus: 'A1.2',
    example: {
      en: 'For $n = 4$ the range is $-8$ to $7$; for $n = 8$ it is $-128$ to $127$.',
      ru: 'При $n = 4$ диапазон от $-8$ до $7$; при $n = 8$ — от $-128$ до $127$.',
    },
  },
  {
    id: 'cs-image-file-size',
    tex: '\\text{File size (bits)} = \\text{width} \\times \\text{height} \\times \\text{colour depth}',
    name: { en: 'Uncompressed bitmap file size', ru: 'размер несжатого растрового изображения' },
    meaning: {
      en: 'Multiply the number of pixels across, the number of pixels down and the colour depth in bits per pixel; divide the result by 8 to get bytes.',
      ru: 'Перемножьте число пикселей по ширине, число пикселей по высоте и глубину цвета в битах на пиксель; чтобы получить байты, разделите результат на 8.',
    },
    when: {
      en: 'Use it for an uncompressed image with no file header. Compressed formats such as JPEG are smaller, and this formula does not apply to them.',
      ru: 'Применяйте к несжатому изображению без заголовка файла. Сжатые форматы, например JPEG, получаются меньше, и эта формула к ним не подходит.',
    },
    syllabus: 'A1.2',
    example: {
      en: 'A 1920 × 1080 image at 24 bits per pixel: $1920 \\times 1080 \\times 24 = 49\\,766\\,400$ bits, which is 6 220 800 bytes.',
      ru: 'Изображение 1920 × 1080 при 24 битах на пиксель: $1920 \\times 1080 \\times 24 = 49\\,766\\,400$ бит, то есть 6 220 800 байт.',
    },
  },
];
