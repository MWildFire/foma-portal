import type { Term } from '../../../../src/contract/types';

// B2.3 Programming constructs. Definitions are written in our own words from the textbook's key terms and syllabus text.
export const terms: Term[] = [
  {
    id: 'b2-3-selection',
    term: { en: 'Selection', ru: 'ветвление (selection)' },
    def: {
      en: 'Choosing which block of code runs by testing a condition, usually written as an if statement with elif and else for the other cases.',
      ru: 'Выбор блока кода для выполнения по результату проверки условия; обычно записывается оператором if, а для остальных случаев — elif и else.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 363' },
    example: {
      en: '`if score >= 50: print("pass")`\n`else: print("fail")`: exactly one of the two lines runs.',
      ru: '`if score >= 50: print("pass")`\n`else: print("fail")`: выполняется ровно одна из двух строк.',
    },
    pitfall: {
      en: 'Separate if statements are each tested on their own, so more than one block can run for the same value. Use elif when only one branch should run.',
      ru: 'Отдельные if проверяются независимо друг от друга, поэтому для одного значения может выполниться больше одного блока. Используйте elif, если нужна только одна ветка.',
    },
  },
  {
    id: 'b2-3-repetition',
    term: { en: 'Repetition', ru: 'повторение (repetition)' },
    def: {
      en: 'Repeating a section of code several times, usually with a for loop or a while loop.',
      ru: 'Многократное выполнение одного и того же участка кода, обычно с помощью цикла for или цикла while.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 366' },
    example: {
      en: 'Asking for a password again and again until it is entered correctly is an example of repetition.',
      ru: 'Многократный запрос пароля, пока он не введён верно, — это пример повторения.',
    },
    pitfall: {
      en: 'Repetition needs an end condition. Without one, the code keeps running forever.',
      ru: 'Повторению нужно условие окончания. Без него код будет выполняться бесконечно.',
    },
  },
  {
    id: 'b2-3-while-loop',
    term: { en: 'While loop', ru: 'цикл while (while loop)' },
    def: {
      en: 'A loop that repeats its block while its condition is True. It is used when the number of repeats is not known in advance.',
      ru: 'Цикл, который повторяет свой блок, пока его условие истинно. Используется, когда заранее неизвестно число повторов.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 366' },
    example: {
      en: 'The loop `while guess != 100:` keeps running until the guess is 100.',
      ru: 'Цикл `while guess != 100:` работает, пока догадка не равна 100.',
    },
    pitfall: {
      en: 'The condition is tested before each repeat, so the block may run zero times.',
      ru: 'Условие проверяется перед каждым повтором, поэтому блок может не выполниться ни разу.',
    },
  },
  {
    id: 'b2-3-for-loop',
    term: { en: 'For loop', ru: 'цикл for (for loop)' },
    def: {
      en: 'A loop that repeats its block a set number of times, such as once for each value in a range or once for each item in a list.',
      ru: 'Цикл, который повторяет свой блок заданное число раз, например по одному разу для каждого значения диапазона или для каждого элемента списка.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 369' },
    example: {
      en: 'The loop `for i in range(0, 11):` repeats 11 times, and i takes the values 0 to 10.',
      ru: 'Цикл `for i in range(0, 11):` повторяется 11 раз, и i принимает значения от 0 до 10.',
    },
    pitfall: {
      en: 'range(0, 11) stops before 11, because the end value is never included.',
      ru: 'range(0, 11) останавливается перед 11, потому что конечное значение никогда не включается.',
    },
  },
  {
    id: 'b2-3-infinite-loop',
    term: { en: 'Infinite loop', ru: 'бесконечный цикл (infinite loop)' },
    def: {
      en: 'A loop whose end condition is never met, so the code keeps repeating and the program never finishes. A common cause is a counter that is never updated.',
      ru: 'Цикл, условие окончания которого никогда не выполняется, поэтому код повторяется без конца и программа не завершается. Частая причина — счётчик, который не меняется.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 362' },
    example: {
      en: 'A loop with the condition `while n != 5:` runs forever if n is never changed inside the loop.',
      ru: 'Цикл с условием `while n != 5:` работает бесконечно, если n нигде внутри цикла не меняется.',
    },
    pitfall: {
      en: 'Checking the condition once before the loop does not end it. The value in the condition must change inside the loop.',
      ru: 'Проверка условия один раз до цикла его не завершает. Значение в условии должно меняться внутри цикла.',
    },
  },
  {
    id: 'b2-3-function',
    term: { en: 'Function', ru: 'функция (function)' },
    def: {
      en: 'A named block of code that performs one task. It can receive values through parameters and can send a result back with a return statement.',
      ru: 'Именованный блок кода, который выполняет одну задачу. Он может получать значения через параметры и возвращать результат оператором return.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 372' },
    example: {
      en: '`def rectangle_volume(w, h, d): return w * h * d` defines a function that returns a volume.',
      ru: 'Определение `def rectangle_volume(w, h, d): return w * h * d` задаёт функцию, которая возвращает объём.',
    },
    pitfall: {
      en: 'A Python function with no return statement gives None, so printing its result shows None.',
      ru: 'Функция в Python без оператора return возвращает None, поэтому печать её результата покажет None.',
    },
  },
  {
    id: 'b2-3-parameter',
    term: { en: 'Parameter', ru: 'параметр (parameter)' },
    def: {
      en: 'A variable named in the function header that receives a value when the function is called.',
      ru: 'Переменная, указанная в заголовке функции, которая получает значение при вызове функции.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 372' },
    example: {
      en: 'In `def rectangle_volume(w, h, d):`, the names w, h and d are parameters.',
      ru: 'В определении `def rectangle_volume(w, h, d):` имена w, h и d — параметры.',
    },
    pitfall: {
      en: 'A parameter is not a value by itself. Its value comes from the argument passed in each call.',
      ru: 'Параметр сам по себе не является значением. Его значение приходит из аргумента, переданного при каждом вызове.',
    },
  },
  {
    id: 'b2-3-argument',
    term: { en: 'Argument (actual parameter)', ru: 'аргумент (argument, фактический параметр)' },
    def: {
      en: 'The actual value, or a variable holding it, that is passed to a function in a call and matched to a parameter.',
      ru: 'Фактическое значение (или переменная, которая его хранит), переданное функции при вызове и сопоставленное с параметром.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 372' },
    example: {
      en: 'In the call `rectangle_volume(10, 20, 10)`, the three values 10, 20 and 10 are arguments.',
      ru: 'В вызове `rectangle_volume(10, 20, 10)` значения 10, 20 и 10 являются аргументами.',
    },
    pitfall: {
      en: 'Passing fewer or more arguments than there are parameters causes an error in Python.',
      ru: 'Передача меньшего или большего числа аргументов, чем параметров, вызывает ошибку в Python.',
    },
  },
  {
    id: 'b2-3-return-value',
    term: { en: 'Return value', ru: 'возвращаемое значение (return value)' },
    def: {
      en: 'The result that a function calculates and sends back to the code that called it, using a return statement.',
      ru: 'Результат, который функция вычисляет и возвращает вызвавшему её коду оператором return.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 372' },
    example: {
      en: '`volume = rectangle_volume(3, 4, 2)` stores 24 in volume, because the function returns 24.',
      ru: 'Запись `volume = rectangle_volume(3, 4, 2)` помещает 24 в volume, потому что функция возвращает 24.',
    },
    pitfall: {
      en: 'Printing a value inside a function does not return it. The calling code can use only the value that is returned.',
      ru: 'Печать значения внутри функции не означает возврат. Вызывающий код может использовать только возвращённое значение.',
    },
  },
  {
    id: 'b2-3-modularization',
    term: { en: 'Modularization', ru: 'модульность (modularization)' },
    def: {
      en: 'Separating the lines of code that perform one task into their own functions or modules, so that the same module can be reused in many programs.',
      ru: 'Выделение строк кода, которые выполняют одну задачу, в отдельные функции или модули, чтобы один и тот же модуль можно было использовать во многих программах.',
    },
    syllabus: 'B2.3',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, p. 371' },
    example: {
      en: 'The code that calculates a bonus can move into a function called calculate_bonus, which is then called wherever a bonus is needed.',
      ru: 'Код, который считает премию, можно вынести в функцию calculate_bonus и вызывать её там, где нужна премия.',
    },
    pitfall: {
      en: 'Copying the same lines into several places is not modularization. Write the code once and call it.',
      ru: 'Копирование одинаковых строк в несколько мест — это не модульность. Напишите код один раз и вызывайте его.',
    },
  },
];
