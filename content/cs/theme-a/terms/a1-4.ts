import type { Term } from '../../../../src/contract/types';

// A1.4 Translation (HL). Definitions are written from the textbook's key vocabulary and the translation sections.
export const terms: Term[] = [
  {
    id: 'a1-4-translation',
    term: { en: 'Translation', ru: 'трансляция программы (translation)' },
    def: {
      en: 'The process of converting a program written in a high-level language into machine instructions that the processor can execute.',
      ru: 'Процесс преобразования программы, написанной на языке программирования, в машинные инструкции, которые может выполнить процессор.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 90' },
    example: {
      en: 'The line score = 42 becomes several machine instructions, such as a load and a store, before the processor runs it.',
      ru: 'Строка score = 42 превращается в несколько машинных инструкций, например загрузку и сохранение, прежде чем процессор её выполнит.',
    },
    pitfall: {
      en: 'Translation is not the same as running: a compiler finishes before the program starts, while an interpreter translates and runs line by line.',
      ru: 'Трансляция и выполнение — не одно и то же: компилятор заканчивает перевод до запуска, а интерпретатор переводит и выполняет построчно.',
    },
  },
  {
    id: 'a1-4-machine-code',
    term: { en: 'Machine code (machine instructions, machine language)', ru: 'машинный код (machine code)' },
    def: {
      en: 'The most basic commands a processor carries out directly; each command is a binary pattern whose meaning depends on the processor architecture.',
      ru: 'Самые базовые команды, которые процессор выполняет напрямую; каждая команда — это двоичный шаблон, смысл которого зависит от архитектуры процессора.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 90' },
    example: {
      en: 'A load instruction is a pattern of 0s and 1s on an ARM processor, and a different processor uses a different pattern for the same task.',
      ru: 'Команда загрузки на процессоре ARM — это шаблон из нулей и единиц, а для той же задачи другой процессор использует другой шаблон.',
    },
    pitfall: {
      en: 'Machine code is tied to the processor: the same operation has a different binary form on x86 and on ARM.',
      ru: 'Машинный код зависит от процессора: одна и та же операция имеет разный двоичный вид на x86 и на ARM.',
    },
  },
  {
    id: 'a1-4-compiler',
    term: { en: 'Compiler', ru: 'компилятор (compiler)' },
    def: {
      en: 'A translator that converts the whole program into machine code, producing a binary executable, before the program is run.',
      ru: 'Транслятор, который переводит всю программу в машинный код и создаёт двоичный исполняемый файл до её запуска.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 90' },
    example: {
      en: 'C, C++, Rust and Go are compiled languages; a compiler such as GCC or Clang produces an executable file that the processor runs directly.',
      ru: 'C, C++, Rust и Go — компилируемые языки; компилятор, например GCC или Clang, создаёт исполняемый файл, который процессор выполняет напрямую.',
    },
    pitfall: {
      en: 'A compiled executable is specific to one operating system and processor, so the program must be compiled again for each platform.',
      ru: 'Исполняемый файл привязан к одной операционной системе и одному процессору, поэтому программу нужно компилировать заново для каждой платформы.',
    },
  },
  {
    id: 'a1-4-interpreter',
    term: { en: 'Interpreter', ru: 'интерпретатор (interpreter)' },
    def: {
      en: 'A translator that reads a program line by line, translating and executing each instruction while the program runs, without producing a separate executable file.',
      ru: 'Транслятор, который читает программу построчно, переводит и выполняет каждую инструкцию во время работы программы и не создаёт отдельного исполняемого файла.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 90' },
    example: {
      en: 'An interpreter stops at the first error it reaches and reports it, so the program runs only up to that line.',
      ru: 'Интерпретатор останавливается на первой ошибке, до которой доходит, и сообщает о ней, поэтому программа выполняется только до этой строки.',
    },
    pitfall: {
      en: 'An interpreter speeds up development, not execution: each line is translated while the program runs, so interpreted programs are usually slower than compiled ones.',
      ru: 'Интерпретатор ускоряет разработку, но не скорость работы: каждая строка переводится во время выполнения, поэтому программа обычно работает медленнее скомпилированной.',
    },
  },
  {
    id: 'a1-4-bytecode',
    term: { en: 'Bytecode', ru: 'байт-код (bytecode)' },
    def: {
      en: 'An intermediate, platform-independent form of a program, produced by compiling source code and run by a bytecode interpreter (virtual machine).',
      ru: 'Промежуточное, не зависящее от платформы представление программы: его получают компиляцией исходного кода, а выполняет интерпретатор байт-кода (виртуальная машина).',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 95' },
    example: {
      en: 'Java compiles source code into bytecode, and a Java Virtual Machine runs that bytecode on Windows, macOS or Linux.',
      ru: 'Java компилирует исходный код в байт-код, а виртуальная машина Java выполняет его на Windows, macOS или Linux.',
    },
    pitfall: {
      en: 'Bytecode is not machine code: the processor cannot run it directly, so a bytecode interpreter or a JIT compiler is always needed.',
      ru: 'Байт-код — это не машинный код: процессор не может выполнить его напрямую, поэтому нужен интерпретатор байт-кода или JIT-компилятор.',
    },
  },
  {
    id: 'a1-4-jit',
    term: { en: 'Just-in-time (JIT) compilation', ru: 'JIT-компиляция (just-in-time compilation)' },
    def: {
      en: 'A hybrid approach in which frequently executed bytecode is compiled into machine code while the program runs, and the result is cached for later calls.',
      ru: 'Гибридный подход: часто выполняемый байт-код компилируется в машинный код во время работы программы, а результат сохраняется в кэше для последующих вызовов.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 94' },
    example: {
      en: 'Java and C# use JIT compilation, so frequently executed methods become fast machine code after an initial overhead.',
      ru: 'Java и C# используют JIT-компиляцию, поэтому часто вызываемые методы становятся быстрым машинным кодом после начальных накладных расходов.',
    },
    pitfall: {
      en: 'JIT is not plain interpretation: once a frequently run section is compiled, the cached machine code runs without being translated again.',
      ru: 'JIT — это не простая интерпретация: после компиляции часто выполняемого участка кэшированный машинный код работает без повторного перевода.',
    },
  },
  {
    id: 'a1-4-parser',
    term: { en: 'Parser', ru: 'парсер (parser)' },
    def: {
      en: 'A software component that checks input, usually text, against a language’s grammar rules and builds a tree-shaped structure, such as a parse tree, that shows how the parts relate.',
      ru: 'Программный компонент, который проверяет входные данные (обычно текст) по правилам грамматики языка и строит древовидную структуру (например, дерево разбора), показывающую связи между частями.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 90' },
    example: {
      en: 'In the steps for print("Hello World!"), the syntax parser checks that the tokens form a valid function call.',
      ru: 'В шагах для print("Hello World!") синтаксический парсер проверяет, что токены образуют корректный вызов функции.',
    },
    pitfall: {
      en: 'A parser checks structure, not meaning: type mismatches and undeclared variables are found later, in semantic analysis.',
      ru: 'Парсер проверяет структуру, а не смысл: несовпадения типов и необъявленные переменные обнаруживаются позже, на семантическом анализе.',
    },
  },
  {
    id: 'a1-4-portability',
    term: { en: 'Portability', ru: 'переносимость (portability)' },
    def: {
      en: 'How easily a program can be moved to a different operating system or hardware platform and still work.',
      ru: 'Насколько легко программу можно перенести на другую операционную систему или аппаратную платформу, сохранив её работоспособность.',
    },
    syllabus: 'A1.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, p. 94' },
    example: {
      en: 'Compiled code must be rebuilt for each platform, while bytecode runs on any system that has a compatible interpreter or JIT compiler.',
      ru: 'Скомпилированный код нужно пересобирать для каждой платформы, а байт-код работает на любой системе, где есть подходящий интерпретатор или JIT-компилятор.',
    },
    pitfall: {
      en: 'Portability is separate from speed: a language can be portable and slow, or fast and tied to one platform.',
      ru: 'Переносимость отделена от скорости: язык может быть переносимым и медленным либо быстрым, но привязанным к одной платформе.',
    },
  },
];
