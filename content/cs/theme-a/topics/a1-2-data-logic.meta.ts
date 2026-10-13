import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'a1-2-data-logic',
  subject: 'cs',
  code: 'A1.2',
  title: { en: 'Data representation and computer logic', ru: 'Представление данных и логика компьютера' },
  papers: ['P1'],
  order: 2,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can convert whole numbers between binary, denary and hexadecimal, in both directions.',
      ru: 'Умею переводить целые числа между двоичной, десятичной и шестнадцатеричной системами в обе стороны.',
    },
    {
      en: 'I can write signed and unsigned integers in n bits and state the range each one covers.',
      ru: 'Умею записывать целые числа со знаком и без знака в n битах и называть диапазон каждого вида.',
    },
    {
      en: 'I can explain how characters, images and sound are stored as binary, and work out the uncompressed size of an image or a sound clip.',
      ru: 'Умею объяснить, как символы, изображения и звук хранятся в двоичном виде, и вычислить размер несжатого изображения или звукового фрагмента.',
    },
    {
      en: 'I can state what each standard logic gate does and draw its symbol.',
      ru: 'Умею назвать, что делает каждый стандартный логический элемент, и нарисовать его обозначение.',
    },
    {
      en: 'I can build a truth table from a description, a Boolean expression or a logic diagram.',
      ru: 'Умею построить таблицу истинности по описанию, булеву выражению или логической диаграмме.',
    },
    {
      en: 'I can draw a logic diagram for a described system and simplify simple Boolean expressions with the basic laws.',
      ru: 'Умею нарисовать логическую диаграмму для описанной системы и упростить простые булевы выражения основными законами.',
    },
  ],
  termIds: [
    'a1-2-binary',
    'a1-2-bit',
    'a1-2-byte',
    'a1-2-hexadecimal',
    'a1-2-twos-complement',
    'a1-2-ascii',
    'a1-2-pixel',
    'a1-2-sampling-rate',
    'a1-2-bit-depth',
    'a1-2-logic-gate',
    'a1-2-truth-table',
    'a1-2-logic-diagram',
  ],
  formulaIds: ['cs-twos-complement-range', 'cs-image-file-size'],
  questionIds: [
    'a1-2-q01',
    'a1-2-q02',
    'a1-2-q03',
    'a1-2-q04',
    'a1-2-q05',
    'a1-2-q06',
    'a1-2-q07',
    'a1-2-q08',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, pp. 38–65' },
  ],
};

export default meta;
