import type { Term } from '../../../../src/contract/types';

// A1.2 Data representation and computer logic. Definitions are written from the textbook's key terms and syllabus text.
export const terms: Term[] = [
  {
    id: 'a1-2-binary',
    term: { en: 'Binary', ru: 'двоичная система счисления (binary)' },
    def: {
      en: 'A number system with base 2 that uses only the digits 0 and 1; each individual digit is called a bit.',
      ru: 'Система счисления с основанием 2, которая использует только цифры 0 и 1; каждая отдельная цифра называется битом.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 39' },
    example: {
      en: '1011 in binary is 11 in denary: 8 + 0 + 2 + 1.',
      ru: '1011 в двоичной системе — это 11 в десятичной: 8 + 0 + 2 + 1.',
    },
    pitfall: {
      en: 'The base is shown as a subscript: $11$ (denary), $11_2$ (binary) and $11_{16}$ (hexadecimal) are three different numbers.',
      ru: 'Основание пишут индексом: $11$ (десятичное), $11_2$ (двоичное) и $11_{16}$ (шестнадцатеричное) — это три разных числа.',
    },
  },
  {
    id: 'a1-2-bit',
    term: { en: 'Bit', ru: 'бит (bit)' },
    def: {
      en: 'The smallest unit of data, holding one binary digit that is either 0 or 1.',
      ru: 'Наименьшая единица данных, которая хранит одну двоичную цифру — 0 или 1.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 39' },
    example: {
      en: 'The pattern 1 0 1 1 has four bits; eight bits together form one byte.',
      ru: 'Шаблон 1 0 1 1 содержит четыре бита; восемь бит образуют один байт.',
    },
    pitfall: {
      en: 'A bit is not a byte: one byte always contains eight bits.',
      ru: 'Бит — это не байт: в байте всегда восемь бит.',
    },
  },
  {
    id: 'a1-2-byte',
    term: { en: 'Byte', ru: 'байт (byte)' },
    def: {
      en: 'A group of eight bits, the usual unit of storage, often used to hold one character.',
      ru: 'Группа из восьми бит, основная единица хранения данных; часто в одном байте хранится один символ.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 39' },
    example: {
      en: 'The capital letter A is stored in one byte as 01000001 in ASCII.',
      ru: 'Заглавная буква A хранится в одном байте как 01000001 в кодировке ASCII.',
    },
    pitfall: {
      en: 'One kilobyte is 1,024 bytes, which is 8,192 bits, not 1,000 bytes.',
      ru: 'Один килобайт — это 1 024 байта, то есть 8 192 бита, а не 1 000 байт.',
    },
  },
  {
    id: 'a1-2-hexadecimal',
    term: { en: 'Hexadecimal', ru: 'шестнадцатеричная система счисления (hexadecimal)' },
    def: {
      en: 'A base-16 number system that uses the digits 0 to 9 and the letters A to F (A = 10, F = 15); each hexadecimal digit stands for four bits.',
      ru: 'Система счисления с основанием 16, которая использует цифры 0–9 и буквы A–F (A = 10, F = 15); каждая шестнадцатеричная цифра соответствует четырём битам.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 39' },
    example: {
      en: '11010110 in binary is D6 in hexadecimal, because 1101 is D and 0110 is 6.',
      ru: '11010110 в двоичной системе — это D6 в шестнадцатеричной: 1101 даёт D, а 0110 даёт 6.',
    },
    pitfall: {
      en: 'Write the base as a subscript, $D6_{16}$, so that the value is not read as a denary number.',
      ru: 'Основание пишут индексом, $D6_{16}$, чтобы значение не прочитали как десятичное число.',
    },
  },
  {
    id: 'a1-2-twos-complement',
    term: { en: 'Two’s complement', ru: 'дополнительный код (two’s complement)' },
    def: {
      en: 'A way of storing signed integers in n bits: the leftmost bit is the sign bit, and a negative value is made by inverting the bits of its positive version and adding one.',
      ru: 'Способ хранить целые числа со знаком в n битах: самый левый бит — знаковый, а отрицательное число получают инвертированием битов его положительной записи и прибавлением единицы.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 47' },
    example: {
      en: 'In 4 bits, 1000 is −8 and 0111 is 7, so the range runs from −8 to 7.',
      ru: 'В 4 битах 1000 — это −8, а 0111 — это 7, поэтому диапазон от −8 до 7.',
    },
    pitfall: {
      en: 'Skipping the final “add one” gives the wrong value: −5 is 11111011, while 11111010 is −6.',
      ru: 'Если пропустить последнее «прибавить единицу», значение будет неверным: −5 — это 11111011, а 11111010 — это −6.',
    },
  },
  {
    id: 'a1-2-ascii',
    term: { en: 'ASCII (American Standard Code for Information Interchange)', ru: 'ASCII (американский стандартный код обмена информацией)' },
    def: {
      en: 'A 7-bit character code that gives each of 128 characters a binary value, covering English letters, digits and punctuation.',
      ru: 'Кодировка символов, в которой каждому из 128 символов присвоено 7-битное двоичное значение; она охватывает английские буквы, цифры и знаки препинания.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 47' },
    example: {
      en: 'The capital letter A has code 65, which is 01000001 in binary.',
      ru: 'Заглавная буква A имеет код 65, то есть 01000001 в двоичном виде.',
    },
    pitfall: {
      en: 'ASCII cannot store Cyrillic or Japanese characters; Unicode with UTF-8 is needed for those.',
      ru: 'ASCII не может хранить, например, японские символы; для них нужны Unicode и UTF-8.',
    },
  },
  {
    id: 'a1-2-pixel',
    term: { en: 'Pixel', ru: 'пиксель (pixel)' },
    def: {
      en: 'The smallest element of a digital image, a tiny dot that carries colour information.',
      ru: 'Наименьший элемент цифрового изображения — крошечная точка, которая хранит информацию о цвете.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 48' },
    example: {
      en: 'A 1920 × 1080 image contains 2,073,600 pixels.',
      ru: 'Изображение 1920 × 1080 содержит 2 073 600 пикселей.',
    },
    pitfall: {
      en: 'More pixels mean higher resolution, but the pixel count says nothing about how many bits each pixel uses.',
      ru: 'Больше пикселей означает большее разрешение, но число пикселей ничего не говорит о том, сколько бит занимает каждый пиксель.',
    },
  },
  {
    id: 'a1-2-sampling-rate',
    term: { en: 'Sampling rate', ru: 'частота дискретизации (sampling rate)' },
    def: {
      en: 'How many amplitude measurements (samples) of a sound wave are taken each second, measured in hertz (Hz).',
      ru: 'Сколько замеров амплитуды (отсчётов) звуковой волны делается за одну секунду; измеряется в герцах (Гц).',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 48' },
    example: {
      en: 'Audio on a CD uses a sampling rate of 44.1 kHz, which is 44,100 samples per second.',
      ru: 'Звук на CD записан с частотой дискретизации 44,1 кГц, то есть 44 100 отсчётов в секунду.',
    },
    pitfall: {
      en: 'A higher sampling rate captures more detail and produces a larger file; it does not change the number of bits per sample.',
      ru: 'Более высокая частота дискретизации передаёт больше деталей и даёт больший файл; число бит на отсчёт она не меняет.',
    },
  },
  {
    id: 'a1-2-bit-depth',
    term: { en: 'Bit depth', ru: 'битовая глубина (bit depth)' },
    def: {
      en: 'The number of bits used to store each sample, which sets how many amplitude levels are possible: 2 raised to the bit depth.',
      ru: 'Число бит, которым записывается каждый отсчёт; оно задаёт количество возможных уровней амплитуды: 2 в степени битовой глубины.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 48' },
    example: {
      en: '16-bit audio has 65,536 levels, and 24-bit audio has 16,777,216 levels.',
      ru: 'В 16-битном звуке 65 536 уровней, а в 24-битном — 16 777 216 уровней.',
    },
    pitfall: {
      en: 'For images the same idea is called colour depth: 8 bits per channel gives 256 levels each for red, green and blue.',
      ru: 'Для изображений то же понятие называют глубиной цвета: 8 бит на канал дают по 256 уровней для красного, зелёного и синего.',
    },
  },
  {
    id: 'a1-2-logic-gate',
    term: { en: 'Logic gate', ru: 'логический элемент (logic gate)' },
    def: {
      en: 'A physical circuit that accepts one or more binary inputs and produces a single binary output according to one logical rule, such as AND or NOT.',
      ru: 'Физическая схема, которая принимает один или несколько двоичных входов и выдаёт один двоичный выход по одному логическому правилу, например AND или NOT.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 51' },
    example: {
      en: 'An AND gate outputs 1 only when both inputs are 1, for example when both a keycode and a badge are accepted.',
      ru: 'Элемент AND выдаёт 1 только тогда, когда оба входа равны 1, например когда приняты и код, и пропуск.',
    },
    pitfall: {
      en: 'NOT takes one input and inverts it, while the standard AND, OR, NAND, NOR, XOR and XNOR gates are drawn with two inputs.',
      ru: 'NOT принимает один вход и инвертирует его, а стандартные элементы AND, OR, NAND, NOR, XOR и XNOR рисуют с двумя входами.',
    },
  },
  {
    id: 'a1-2-truth-table',
    term: { en: 'Truth table', ru: 'таблица истинности (truth table)' },
    def: {
      en: 'A table that lists the output of a circuit or expression for every possible combination of its inputs.',
      ru: 'Таблица, которая показывает выход схемы или выражения для каждой возможной комбинации входов.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 54' },
    example: {
      en: 'Two inputs give $2^2 = 4$ rows, and three inputs give $2^3 = 8$ rows.',
      ru: 'Два входа дают $2^2 = 4$ строки, а три входа — $2^3 = 8$ строк.',
    },
    pitfall: {
      en: 'Count the input rows from 000 upwards, so a table for three inputs has exactly eight rows, from 000 to 111.',
      ru: 'Строки входов нумеруют с 000, поэтому таблица для трёх входов содержит ровно восемь строк, от 000 до 111.',
    },
  },
  {
    id: 'a1-2-logic-diagram',
    term: { en: 'Logic diagram', ru: 'логическая диаграмма (logic diagram)' },
    def: {
      en: 'A drawing of logic gates joined by lines, showing how input signals pass through the gates to produce an output.',
      ru: 'Чертёж логических элементов, соединённых линиями, который показывает, как входные сигналы проходят через элементы к выходу.',
    },
    syllabus: 'A1.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.2, p. 61' },
    example: {
      en: 'An alarm with inputs A and B and output Q = A AND B is drawn as a single AND gate.',
      ru: 'Сигнализация с входами A и B и выходом Q = A AND B изображается одним элементом AND.',
    },
    pitfall: {
      en: 'Logic diagrams are read from left to right: inputs are on the left and the output is on the right.',
      ru: 'Логические диаграммы читают слева направо: входы слева, выход справа.',
    },
  },
];
