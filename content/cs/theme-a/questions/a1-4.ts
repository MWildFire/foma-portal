import type { Question } from '../../../../src/contract/types';

// A1.4 questions (HL): original scenario questions in Paper 1, section A. Marks add up to the markscheme points.
export const questions: Question[] = [
  {
    id: 'a1-4-q01',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 2,
    command: 'Define',
    prompt: {
      en: 'Define the term bytecode.',
      ru: 'Дайте определение термина «байт-код» (bytecode).',
    },
    markscheme: {
      en: '[1] an intermediate, platform-independent representation of a program, at a lower level than the source code. [1] it is run by a bytecode interpreter (virtual machine), and it is produced by compiling source code.',
      ru: '[1] промежуточное, не зависящее от платформы представление программы, которое ниже по уровню исходного кода. [1] его выполняет интерпретатор байт-кода (виртуальная машина), а получают его компиляцией исходного кода.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q02',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline what a parser contributes when a program is translated.',
      ru: 'Кратко опишите роль парсера при трансляции программы.',
    },
    markscheme: {
      en: '[1] the parser analyses the stream of tokens against the grammar rules of the language, which checks the syntax. [1] it builds a hierarchical structure, such as a parse tree, that shows how the elements relate and that later stages use.',
      ru: '[1] парсер анализирует поток токенов по грамматическим правилам языка и проверяет синтаксис. [1] он строит иерархическую структуру, например дерево разбора, которая показывает связи элементов и используется следующими этапами.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q03',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A student runs the same program through a compiler and then through an interpreter. Describe how the two translators differ in when they report errors.',
      ru: 'Студент прогоняет одну и ту же программу сначала через компилятор, а потом через интерпретатор. Опишите, чем эти трансляторы различаются по моменту сообщения об ошибках.',
    },
    markscheme: {
      en: '[1] the compiler checks the whole program (syntax, type and some semantic errors) before it creates the executable. [1] no executable is produced until the errors are fixed. [1] the interpreter translates line by line, so an error is reported only when execution reaches that line, and the run stops there.',
      ru: '[1] компилятор проверяет всю программу (синтаксические, типовые и некоторые семантические ошибки) до создания исполняемого файла. [1] исполняемый файл не создаётся, пока ошибки не исправлены. [1] интерпретатор переводит построчно, поэтому ошибка выводится, когда выполнение доходит до этой строки, и работа на ней останавливается.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q04',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A program that uses JIT compilation runs the same loop many times. The first pass through the loop is slower than the later passes. Explain why.',
      ru: 'Программа с JIT-компиляцией выполняет один и тот же цикл много раз. Первый проход по циклу медленнее последующих. Объясните почему.',
    },
    markscheme: {
      en: '[1] the JIT compiler translates bytecode into machine code while the program runs, so the first pass includes translation work (the code may first be run in interpreted form). [1] frequently executed code is compiled once and the machine code is stored in a cache. [1] later passes use the cached machine code, which runs at close to compiled speed, so they are faster.',
      ru: '[1] JIT-компилятор переводит байт-код в машинный код во время работы, поэтому в первом проходе есть затраты на перевод (код может сначала выполняться в интерпретируемом виде). [1] часто выполняемый код компилируется один раз, а машинный код сохраняется в кэше. [1] следующие проходы используют кэшированный машинный код, который работает почти со скоростью скомпилированной программы, поэтому они быстрее.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q05',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Compare',
    prompt: {
      en: 'Compare compiled and interpreted translation in terms of translation time and portability.',
      ru: 'Сравните компилируемый и интерпретируемый способы трансляции по времени трансляции и переносимости.',
    },
    markscheme: {
      en: '[1] compiled code is translated entirely before execution, while interpreted code is translated during execution, so interpreted code has little or no upfront translation time. [1] for compiled code the translation time is paid in advance, and every change needs recompilation. [1] a compiled executable is tied to one operating system and processor, so its portability is low. [1] interpreted code runs on any system with a suitable interpreter, so its portability is high.',
      ru: '[1] компилируемый код переводится целиком до выполнения, а интерпретируемый — во время выполнения, поэтому у интерпретируемого кода почти нет предварительного времени перевода. [1] у компиляции время перевода тратится заранее, и при каждом изменении нужна повторная компиляция. [1] исполняемый файл компилятора привязан к одной операционной системе и процессору, поэтому переносимость низкая. [1] интерпретируемая программа работает на любой системе с подходящим интерпретатором, поэтому переносимость высокая.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q06',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Justify',
    prompt: {
      en: 'A game studio needs a title that runs at high frame rates on consoles, so it chooses a compiled language. Justify this choice in terms of applicability.',
      ru: 'Студии нужна игра, которая работает с высокой частотой кадров на консолях, поэтому она выбирает компилируемый язык. Обоснуйте этот выбор с точки зрения применимости.',
    },
    markscheme: {
      en: '[1] the software is performance-critical, and execution speed is the priority for a game. [1] compiled code is native machine code that the processor runs directly, so it executes faster than interpreted code. [1] the upfront cost of compilation is repaid by fast execution, which suits demanding software that runs for long periods.',
      ru: '[1] программа критична к производительности, а для игры приоритет — скорость выполнения. [1] скомпилированный код — это машинный код, который процессор выполняет напрямую, поэтому он работает быстрее интерпретируемого. [1] затраты на компиляцию окупаются быстрым выполнением, что подходит для ресурсоёмкого программного обеспечения, которое долго работает.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q07',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 5,
    command: 'Evaluate',
    prompt: {
      en: 'A start-up is writing a bookkeeping program for small shops. It must run on Windows, macOS and Linux. The team must choose between a compiled language and a language that uses bytecode with JIT compilation. Evaluate both approaches for this program and state which one you would choose.',
      ru: 'Стартап пишет программу учёта для небольших магазинов. Она должна работать на Windows, macOS и Linux. Команда выбирает между компилируемым языком и языком, который использует байт-код с JIT-компиляцией. Оцените оба подхода для этой программы и укажите, какой вы бы выбрали.',
    },
    markscheme: {
      en: '[1] compiled: a strength is that native machine code executes quickly. [1] compiled: a limitation is that the executable is platform-specific, so a separate build is needed for each operating system, and portability is low. [1] bytecode with JIT: a strength is that the same bytecode runs on any system with a compatible virtual machine, and the JIT gives near-native speed for code that runs often. [1] bytecode with JIT: a limitation is the warm-up overhead and the extra memory and processing that the JIT compiler uses. [1] a justified conclusion, for example choosing bytecode with JIT because portability across three platforms outweighs the small warm-up cost.',
      ru: '[1] компилируемый вариант: сильная сторона — машинный код выполняется быстро. [1] компилируемый вариант: слабость — исполняемый файл привязан к платформе, поэтому для каждой операционной системы нужна отдельная сборка, а переносимость низкая. [1] байт-код с JIT: сильная сторона — один и тот же байт-код работает на любой системе с подходящей виртуальной машиной, а JIT даёт почти нативную скорость для часто выполняемого кода. [1] байт-код с JIT: слабость — задержка на прогрев и дополнительные память и вычисления, которые тратит JIT-компилятор. [1] обоснованный вывод, например: выбрать байт-код с JIT, потому что переносимость на три платформы важнее небольшой задержки на прогрев.',
    },
    origin: 'original',
  },
  {
    id: 'a1-4-q08',
    subject: 'cs',
    topicIds: ['a1-4-translation'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'List',
    prompt: {
      en: 'List, in order, the first three stages a compiler performs on source code before it generates any machine code.',
      ru: 'Перечислите в порядке выполнения первые три этапа, которые компилятор проходит с исходным кодом до генерации машинного кода.',
    },
    markscheme: {
      en: '[1] lexical analysis: the source code is broken into tokens. [1] syntax analysis: the tokens are checked against the grammar, and a syntax tree is built. [1] semantic analysis: type mismatches and undeclared variables are checked.',
      ru: '[1] лексический анализ: исходный код разбивается на токены. [1] синтаксический анализ: токены проверяются по грамматике, и строится синтаксическое дерево. [1] семантический анализ: проверяются несовпадения типов и необъявленные переменные.',
    },
    origin: 'original',
  },
];
