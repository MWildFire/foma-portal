import type { Term } from '../../../../src/contract/types';

// Topic B2.4 Programming algorithms (P2). Definitions are our own words, based on the key terms and the in-text
// definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 376-404. Space complexity is in the
// syllabus (B2.4.3) but is not defined in the textbook, so that definition is written for this portal.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';
const OWN_SCOPE = 'Syllabus statement B2.4.3 (time and space complexity)';

export const terms: Term[] = [
  {
    id: 'b2-4-big-o',
    term: { en: 'Big O efficiency', ru: 'оценка сложности по O-нотации (Big O efficiency)' },
    def: {
      en: 'A measure of how the number of operations an algorithm needs grows as its input gets bigger. It is based on the worst case and gives an upper bound, written in forms such as $O(n)$ or $O(n^2)$.',
      ru: 'Мера того, как растёт число операций, которое нужно алгоритму, при увеличении входных данных. Она основана на худшем случае и задаёт верхнюю границу; записывается в виде, например, $O(n)$ или $O(n^2)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 376' },
    example: {
      en: 'A single calculation is $O(1)$. A loop over n items is $O(n)$, because the number of operations grows in step with n.',
      ru: 'Одно вычисление имеет сложность $O(1)$. Цикл по n элементам имеет сложность $O(n)$, потому что число операций растёт вместе с n.',
    },
    pitfall: {
      en: 'Big O ignores constants, so $5n + 3$ operations is still $O(n)$. It describes growth, not a time in seconds.',
      ru: 'Big O не учитывает константы, поэтому $5n + 3$ операции по-прежнему имеют сложность $O(n)$. Оно описывает рост, а не время в секундах.',
    },
  },
  {
    id: 'b2-4-linear-search',
    term: { en: 'Linear search', ru: 'линейный поиск (linear search)' },
    def: {
      en: 'A search that checks the items of a data set one at a time, starting from the first, until it finds the target or reaches the end. It does not need sorted data, and its worst case is $O(n)$.',
      ru: 'Поиск, который проверяет элементы набора данных по одному, начиная с первого, пока не найдёт искомое значение или не дойдёт до конца. Ему не нужны отсортированные данные, а его худший случай имеет сложность $O(n)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 380' },
    example: {
      en: 'Searching a playlist of six songs for a song that is last, or not in the list, needs all six checks.',
      ru: 'Поиск песни в плейлисте из шести треков, если песня стоит последней или её нет в списке, требует всех шести проверок.',
    },
    pitfall: {
      en: 'Linear search is simple and works on unsorted data, but it becomes slow when the data set is large.',
      ru: 'Линейный поиск прост и работает с несортированными данными, но на больших наборах данных становится медленным.',
    },
  },
  {
    id: 'b2-4-binary-search',
    term: { en: 'Binary search', ru: 'двоичный поиск (binary search)' },
    def: {
      en: 'A search of a sorted data set that compares the target with the middle item and discards the half that cannot contain it, then repeats on what is left. Its worst case is $O(\\log n)$.',
      ru: 'Поиск в отсортированном наборе данных: искомое значение сравнивается со средним элементом, после чего отбрасывается половина, в которой его точно нет, и поиск повторяется для оставшейся части. Его худший случай имеет сложность $O(\\log n)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 382' },
    example: {
      en: 'In the sorted list 2, 5, 8, 12, 16, 23, 38, 56, 72, finding 23 takes three comparisons: with 16, then 38, then 23.',
      ru: 'В отсортированном списке 2, 5, 8, 12, 16, 23, 38, 56, 72 поиск числа 23 занимает три сравнения: с 16, затем с 38 и потом с 23.',
    },
    pitfall: {
      en: 'On unsorted data, binary search can discard the half that holds the target, so it gives a wrong result without any error.',
      ru: 'На несортированных данных двоичный поиск может отбросить половину, в которой находится искомое значение, и выдаст неверный результат без какой-либо ошибки.',
    },
  },
  {
    id: 'b2-4-sort',
    term: { en: 'Sort', ru: 'сортировка (sort)' },
    def: {
      en: 'A process that places the items of a data structure into a set order, such as lowest to highest.',
      ru: 'Процесс, который располагает элементы структуры данных в заданном порядке, например от меньшего к большему.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 385' },
    example: {
      en: 'A leaderboard is sorted so that the highest score is at the top.',
      ru: 'Таблица лидеров сортируется так, что самый высокий результат стоит наверху.',
    },
    pitfall: {
      en: 'Sorting is not searching: a sort puts all the items in order, and a search looks for one item.',
      ru: 'Сортировка — не поиск: сортировка ставит все элементы по порядку, а поиск ищет один элемент.',
    },
  },
  {
    id: 'b2-4-bubble-sort',
    term: { en: 'Bubble sort', ru: 'пузырьковая сортировка (bubble sort)' },
    def: {
      en: 'A sort that repeatedly compares neighbouring items and swaps any pair that is in the wrong order. Each pass carries the largest unsorted value to the end; the sort is simple but slow on large data sets, with $O(n^2)$ efficiency.',
      ru: 'Сортировка, которая многократно сравнивает соседние элементы и меняет местами каждую пару, стоящую в неправильном порядке. Каждый проход переносит наибольшее несортированное значение в конец; сортировка проста, но медленна на больших наборах данных, её эффективность равна $O(n^2)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 385' },
    example: {
      en: 'In the list 8, 3, 5, the first pass swaps 8 with 3, then 8 with 5, so 8 reaches the end.',
      ru: 'В списке 8, 3, 5 первый проход меняет местами 8 и 3, затем 8 и 5, поэтому 8 оказывается в конце.',
    },
    pitfall: {
      en: 'Each pass can stop one place earlier, because the sorted values at the end are already in their final places.',
      ru: 'Каждый следующий проход может заканчиваться на одно место раньше, потому что отсортированные значения в конце уже стоят на своих местах.',
    },
  },
  {
    id: 'b2-4-selection-sort',
    term: { en: 'Selection sort', ru: 'сортировка выбором (selection sort)' },
    def: {
      en: 'A sort that uses indexes to track the smallest unsorted value and, on each pass, swaps it into the next place of the sorted part. It makes at most one swap per pass, but its efficiency is $O(n^2)$.',
      ru: 'Сортировка, которая с помощью индексов отслеживает наименьшее несортированное значение и на каждом проходе ставит его на следующее место отсортированной части. Она делает не больше одного обмена за проход, но её эффективность равна $O(n^2)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 385' },
    example: {
      en: 'In the list 6, 2, 8, 4, the first pass finds 2 as the smallest value and swaps it with 6, giving 2, 6, 8, 4.',
      ru: 'В списке 6, 2, 8, 4 первый проход находит наименьшее значение 2 и меняет его местами с 6, получая 2, 6, 8, 4.',
    },
    pitfall: {
      en: 'Selection sort makes all its comparisons even when the data is already sorted, because each pass searches the rest of the list.',
      ru: 'Сортировка выбором выполняет все свои сравнения, даже если данные уже отсортированы, потому что каждый проход просматривает оставшуюся часть списка.',
    },
  },
  {
    id: 'b2-4-space-complexity',
    term: { en: 'Space complexity', ru: 'сложность по памяти (space complexity)' },
    def: {
      en: 'A measure of how much extra memory an algorithm needs as its input grows, not counting the input itself. A sort that works in place needs only a few extra variables, so its space complexity is $O(1)$.',
      ru: 'Мера того, сколько дополнительной памяти нужно алгоритму при росте входных данных, без учёта самих данных. Сортировке, которая работает на месте, нужны лишь несколько дополнительных переменных, поэтому её сложность по памяти равна $O(1)$.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'own', title: OWN_SCOPE },
    example: {
      en: 'Bubble sort and selection sort swap items inside the same list, so their extra space stays the same however long the list is: $O(1)$.',
      ru: 'Пузырьковая сортировка и сортировка выбором меняют элементы внутри того же списка, поэтому дополнительная память не растёт с длиной списка: $O(1)$.',
    },
    pitfall: {
      en: 'Space and time are separate measures. A recursive function may need $O(n)$ space for its call stack, even when its time is easy to describe.',
      ru: 'Память и время — разные показатели. Рекурсивной функции может понадобиться $O(n)$ памяти под стек вызовов, даже если её время легко описать.',
    },
  },
  {
    id: 'b2-4-recursion',
    term: { en: 'Recursion', ru: 'рекурсия (recursion)' },
    def: {
      en: 'A method in which an algorithm calls itself on a changed, smaller or simpler input, and stops when it reaches a base case that it can answer directly.',
      ru: 'Способ, при котором алгоритм вызывает сам себя с изменённым, меньшим или более простым входным значением и останавливается, когда достигает базового случая, на который может ответить сразу.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 396' },
    example: {
      en: 'To add the digits of 705, the function returns 5 plus the digit total of 70, and it stops when a single digit is left.',
      ru: 'Чтобы сложить цифры числа 705, функция возвращает 5 плюс сумму цифр числа 70 и останавливается, когда остаётся одна цифра.',
    },
    pitfall: {
      en: 'A recursive function must reach its base case. If the input never gets there, the calls never end.',
      ru: 'Рекурсивная функция обязана достигать базового случая. Если входные данные до него не доходят, вызовы никогда не заканчиваются.',
    },
  },
  {
    id: 'b2-4-base-case',
    term: { en: 'Base case', ru: 'базовый случай (base case)' },
    def: {
      en: 'The simplest case of a recursive algorithm. It gives an answer directly, without another recursive call, and reaching it stops the chain of calls.',
      ru: 'Самый простой случай рекурсивного алгоритма. Он даёт ответ сразу, без нового рекурсивного вызова, и его достижение останавливает цепочку вызовов.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 396' },
    example: {
      en: 'In the digit total function, any number below 10 is a base case: the function returns the number itself and makes no further call.',
      ru: 'В функции суммы цифр базовым случаем является любое число меньше 10: функция возвращает само число и больше не вызывает себя.',
    },
    pitfall: {
      en: 'A recursive case alone is not enough. Each call must change its input so that the base case is eventually reached.',
      ru: 'Одного рекурсивного случая недостаточно. Каждый вызов должен менять входные данные так, чтобы в итоге был достигнут базовый случай.',
    },
  },
  {
    id: 'b2-4-call-stack',
    term: { en: 'Call stack', ru: 'стек вызовов (call stack)' },
    def: {
      en: 'The record a program keeps of function calls that have started but not yet returned. A new call is pushed on top when it starts and popped off when it returns a value, so recursive calls wait on the stack.',
      ru: 'Запись, которую программа ведёт о вызовах функций, начавшихся, но ещё не вернувших значение. Новый вызов кладётся сверху при старте и снимается при возврате значения, поэтому рекурсивные вызовы ждут в стеке.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 397' },
    example: {
      en: 'When the digit total of 4096 reaches its base case, the stack holds four calls: for 4096, 409, 40 and 4.',
      ru: 'Когда функция суммы цифр для числа 4096 доходит до базового случая, в стеке четыре вызова: для 4096, 409, 40 и 4.',
    },
    pitfall: {
      en: 'Deep recursion uses more memory than a loop with the same number of steps, because every waiting call takes space on the stack.',
      ru: 'Глубокая рекурсия расходует больше памяти, чем цикл с тем же числом шагов, потому что каждый ожидающий вызов занимает место в стеке.',
    },
  },
  {
    id: 'b2-4-stack-overflow',
    term: { en: 'Stack overflow', ru: 'переполнение стека (stack overflow)' },
    def: {
      en: 'The error that occurs when recursive calls fill the memory reserved for the call stack, usually because there is no base case or it is never reached. The program crashes.',
      ru: 'Ошибка, которая возникает, когда рекурсивные вызовы заполняют память, отведённую под стек вызовов; обычно это происходит, если базового случая нет или он никогда не достигается. Программа аварийно завершается.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 397' },
    example: {
      en: 'A function that calls itself with n - 1 and has no base case never returns, so the stack overflows.',
      ru: 'Функция, которая вызывает себя с аргументом n - 1 и не имеет базового случая, никогда не возвращает результат, поэтому стек переполняется.',
    },
    pitfall: {
      en: 'A stack overflow stops the program with an error, unlike a logic error that quietly gives a wrong answer.',
      ru: 'Переполнение стека останавливает программу с ошибкой, в отличие от логической ошибки, которая молча даёт неверный ответ.',
    },
  },
  {
    id: 'b2-4-trace-table',
    term: { en: 'Trace table', ru: 'таблица трассировки (trace table)' },
    def: {
      en: 'A table that records the value of each variable, and each decision, at every step of an algorithm. For a recursive algorithm it also records each call and the value that call returns.',
      ru: 'Таблица, в которой на каждом шаге алгоритма записываются значения каждой переменной и каждое принятое решение. Для рекурсивного алгоритма в ней также записывается каждый вызов и значение, которое он возвращает.',
    },
    syllabus: 'B2.4',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.4, p. 404' },
    example: {
      en: 'For `factorial(4)`, the trace table has a row for each call from n = 4 down to the base case n = 1, and then a row for each returned value.',
      ru: 'Для `factorial(4)` таблица трассировки содержит строку на каждый вызов от n = 4 до базового случая n = 1, а затем строку на каждое возвращённое значение.',
    },
    pitfall: {
      en: 'A table that shows only the final output shows no working. Record the values at every stage.',
      ru: 'Таблица, в которой есть только итоговый вывод, не показывает ход решения. Записывайте значения на каждом этапе.',
    },
  },
];
