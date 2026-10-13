import type { Term } from '../../../../src/contract/types';

// Topic B2.1 Programming fundamentals (P2). Definitions are in our own words, based on the key terms and the in-text
// definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 337-346. Global and local variables
// are in the syllabus (B2.1.1) but not defined in the textbook, so those two definitions are written for this portal.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';
const OWN_SCOPE = 'Syllabus statement B2.1.1 (global and local variables); not defined in the textbook, written for this portal';

export const terms: Term[] = [
  {
    id: 'b2-1-variable',
    term: { en: 'Variable', ru: 'переменная (variable)' },
    def: {
      en: 'A named space in memory that holds a data value. Its name is the unique identifier, and the program uses that name to read or change the value.',
      ru: 'Именованная область памяти, которая хранит значение данных. Её имя — уникальный идентификатор; программа использует это имя, чтобы читать или менять значение.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 337' },
    example: {
      en: 'In Python, total = 10 creates a variable named total that holds the value 10. No type declaration is needed.',
      ru: 'В Python запись total = 10 создаёт переменную total, которая хранит значение 10. Объявлять тип не нужно.',
    },
    pitfall: {
      en: 'The = sign assigns a value; it does not compare two values. Use == to compare.',
      ru: 'Знак = присваивает значение и не сравнивает два значения. Для сравнения используйте ==.',
    },
  },
  {
    id: 'b2-1-data-type',
    term: { en: 'Data type', ru: 'тип данных (data type)' },
    def: {
      en: 'The kind of value a variable can hold. It determines what the variable is allowed to store and which operations can be performed on the data.',
      ru: 'Вид значения, которое может хранить переменная. Тип определяет, что переменной разрешено хранить и какие операции можно выполнять с данными.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 337' },
    example: {
      en: 'In Python, 29 is an int, 7.99 is a float, “hello” is a str and True is a bool.',
      ru: 'В Python 29 — это int, 7.99 — float, «hello» — str, а True — bool.',
    },
    pitfall: {
      en: 'Python does not ask you to declare a type, but every value still has one. The expression "5" + 2 raises a TypeError, because a string cannot be added to a number.',
      ru: 'Python не требует объявлять тип, но у каждого значения он всё равно есть. Выражение "5" + 2 вызывает TypeError, потому что строку нельзя сложить с числом.',
    },
  },
  {
    id: 'b2-1-string',
    term: { en: 'String', ru: 'строка (string)' },
    def: {
      en: 'A data type that holds an alphanumeric collection of characters, such as letters, digits, spaces and symbols, as one value. Strings have methods that find, extract and change the text.',
      ru: 'Тип данных, который хранит как одно значение набор буквенно-цифровых символов: буквы, цифры, пробелы и знаки. У строк есть методы, которые находят, извлекают и изменяют текст.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 338' },
    example: {
      en: 'The name “Nadia” and the code “A7-3” are both strings, even though the second one contains digits.',
      ru: 'Имя «Надя» и код «A7-3» — это строки, хотя во втором есть цифры.',
    },
    pitfall: {
      en: 'Python has no separate character type: a single character is a string of length 1. The string "7" is not the same as the number 7.',
      ru: 'В Python нет отдельного типа для символа: один символ — это строка длиной 1. Строка "7" — это не то же самое, что число 7.',
    },
  },
  {
    id: 'b2-1-global-variable',
    term: { en: 'Global variable', ru: 'глобальная переменная (global variable)' },
    def: {
      en: 'A variable created outside any function. It can be read anywhere in the program, including inside functions, but a function can change it only if the function declares it with the global keyword.',
      ru: 'Переменная, созданная вне любой функции. Её можно прочитать в любом месте программы, в том числе внутри функций, но функция может её изменить, только если объявит её с ключевым словом global.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'own', title: OWN_SCOPE },
    example: {
      en: 'The line score = 0 at the top of a program creates a global variable. A function can read score without any special keyword.',
      ru: 'Строка score = 0 в начале программы создаёт глобальную переменную. Функция может прочитать score без каких-либо специальных слов.',
    },
    pitfall: {
      en: 'If a function assigns a value to a name without the global keyword, Python creates a new local variable with that name, and the global value stays unchanged.',
      ru: 'Если функция присваивает значение имени без ключевого слова global, Python создаёт новую локальную переменную с таким именем, а глобальное значение не меняется.',
    },
  },
  {
    id: 'b2-1-local-variable',
    term: { en: 'Local variable', ru: 'локальная переменная (local variable)' },
    def: {
      en: 'A variable created inside a function. It exists only while that function runs and cannot be used outside the function.',
      ru: 'Переменная, созданная внутри функции. Она существует только во время работы этой функции и не может использоваться за её пределами.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'own', title: OWN_SCOPE },
    example: {
      en: 'In the function def add_bonus(points) with the line total = points + 5, the name total is local. It disappears when the function returns its result.',
      ru: 'В функции def add_bonus(points) со строкой total = points + 5 имя total локальное. Оно исчезает, когда функция возвращает результат.',
    },
    pitfall: {
      en: 'A local variable can have the same name as a global variable. Inside the function, the local name hides the global one.',
      ru: 'Локальная переменная может иметь то же имя, что и глобальная. Внутри функции локальное имя скрывает глобальное.',
    },
  },
  {
    id: 'b2-1-concatenate',
    term: { en: 'Concatenate', ru: 'конкатенация (concatenate)' },
    def: {
      en: 'To join two or more strings end to end, to make one longer string.',
      ru: 'Соединять две или больше строк одну за другой, чтобы получить одну более длинную строку.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 339' },
    example: {
      en: 'In Python, "Old Town" + " is a bit dirty" gives "Old Town is a bit dirty".',
      ru: 'В Python выражение "Old Town" + " is a bit dirty" даёт "Old Town is a bit dirty".',
    },
    pitfall: {
      en: 'Python raises an error when a string is joined with a number. Convert the number first, for example with str(7).',
      ru: 'Python выдаёт ошибку, если строку соединить с числом. Сначала преобразуйте число, например с помощью str(7).',
    },
  },
  {
    id: 'b2-1-exception-handling',
    term: { en: 'Exception handling', ru: 'обработка исключений (exception handling)' },
    def: {
      en: 'Writing code that deals with unexpected events, such as invalid input or a missing file, so that the program does not crash. In Python this uses try, except and finally blocks.',
      ru: 'Написание кода, который справляется с неожиданными событиями, например с неверным вводом или отсутствующим файлом, чтобы программа не аварийно завершалась. В Python для этого используют блоки try, except и finally.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 342' },
    example: {
      en: 'Putting int(entry) inside a try block, with an except ValueError block, prints a message instead of stopping when the entry contains letters.',
      ru: 'Если поместить int(entry) в блок try с блоком except ValueError, программа выведет сообщение вместо остановки, когда в записи есть буквы.',
    },
    pitfall: {
      en: 'Exception handling does not fix logic errors. A program can run without any exception and still give a wrong answer.',
      ru: 'Обработка исключений не исправляет логические ошибки. Программа может работать без исключений и всё равно давать неверный ответ.',
    },
  },
  {
    id: 'b2-1-debugging',
    term: { en: 'Debugging', ru: 'отладка (debugging)' },
    def: {
      en: 'Using tools and techniques, such as trace tables, print statements, breakpoints and step-by-step execution, to find and fix errors in code.',
      ru: 'Использование инструментов и приёмов, например таблиц трассировки, операторов print, точек останова и пошагового выполнения, чтобы находить и исправлять ошибки в коде.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 344' },
    example: {
      en: 'A developer adds a print statement inside a loop to see the counter on each pass, and finds that the counter starts one step too late.',
      ru: 'Разработчик добавляет print внутрь цикла, чтобы видеть счётчик на каждом проходе, и понимает, что счётчик начинается на шаг позже, чем нужно.',
    },
    pitfall: {
      en: 'Testing shows that a problem exists; debugging finds where its cause is and fixes it. Both steps are needed.',
      ru: 'Тестирование показывает, что проблема есть; отладка находит её причину и исправляет её. Нужны оба этапа.',
    },
  },
  {
    id: 'b2-1-trace-table',
    term: { en: 'Trace table', ru: 'таблица трассировки (trace table)' },
    def: {
      en: 'A table with a column for each variable and a row for each step or pass through a loop. It records the values of the variables so that their changes can be checked.',
      ru: 'Таблица, в которой есть столбец для каждой переменной и строка для каждого шага или прохода цикла. В неё записывают значения переменных, чтобы проверить их изменения.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 344' },
    example: {
      en: 'For a loop that counts how many scores are 50 or more, the table has one row per score, showing the score, the counter and the output.',
      ru: 'Для цикла, который считает, сколько баллов равны 50 или больше, таблица содержит строку на каждый балл: сам балл, счётчик и вывод.',
    },
    pitfall: {
      en: 'When a variable does not change, copy its previous value into the next row. A blank cell makes the table hard to check.',
      ru: 'Если переменная не меняется, перенесите её прежнее значение в следующую строку. Пустая клетка затрудняет проверку таблицы.',
    },
  },
  {
    id: 'b2-1-breakpoint',
    term: { en: 'Breakpoint', ru: 'точка останова (breakpoint)' },
    def: {
      en: 'A marked point in the code where the program stops before the marked line runs, so that the developer can inspect what each variable holds at that spot.',
      ru: 'Отмеченное место в коде, где программа останавливается до выполнения отмеченной строки, чтобы разработчик мог проверить значения переменных в этой точке.',
    },
    syllabus: 'B2.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.1, p. 346' },
    example: {
      en: 'Setting a breakpoint on the line before a nested loop lets the developer check the outer counter before the inner loop starts.',
      ru: 'Точка останова на строке перед вложенным циклом позволяет проверить значение внешнего счётчика до того, как начнётся внутренний цикл.',
    },
    pitfall: {
      en: 'A breakpoint stops the program before its line runs, so the effect of that line is visible only after the program moves on.',
      ru: 'Точка останова останавливает программу до выполнения её строки, поэтому эффект этой строки виден только после того, как программа пойдёт дальше.',
    },
  },
];
