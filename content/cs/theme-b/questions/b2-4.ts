import type { Question } from '../../../../src/contract/types';

// Original questions for topic B2.4 Programming algorithms (P2). The Python programs were run with python3 to confirm
// every printed answer. Code in stimulus is identical in EN and RU. The algorithm code writes search, sort and maximum
// with loops and does not use built-in functions for them.
export const questions: Question[] = [
  {
    id: 'b2-4-q01',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 2,
    command: 'State',
    prompt: {
      en: 'The program in the stimulus prints one line. (a) State the line printed. (b) State the Big O efficiency of first_repeat in the worst case, when no value appears twice.',
      ru: 'Программа из условия выводит одну строку. (а) Укажите строку, которую выведет программа. (б) Укажите эффективность функции first_repeat по Big O в худшем случае, когда ни одно значение не встречается дважды.',
    },
    stimulus: {
      en: `Study the function and the call below.

\`\`\`python
def first_repeat(values):
    for first in range(len(values)):
        for second in range(first + 1, len(values)):
            if values[first] == values[second]:
                return values[first]
    return None

print(first_repeat([4, 9, 2, 7, 9, 4]))
\`\`\``,
      ru: `Изучите функцию и вызов ниже.

\`\`\`python
def first_repeat(values):
    for first in range(len(values)):
        for second in range(first + 1, len(values)):
            if values[first] == values[second]:
                return values[first]
    return None

print(first_repeat([4, 9, 2, 7, 9, 4]))
\`\`\``,
    },
    markscheme: {
      en: '[1] (a) 4. [1] (b) O(n^2): with no repeated value, every pair of items is compared, which is n(n-1)/2 comparisons.',
      ru: '[1] (а) 4. [1] (б) O(n^2): если значения не повторяются, сравнивается каждая пара элементов, то есть n(n-1)/2 сравнений.',
    },
    answer: '4',
    origin: 'original',
  },
  {
    id: 'b2-4-q02',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A sorted list holds 1,000,000 student ID numbers. Explain why a binary search needs far fewer comparisons than a linear search to find an ID in the worst case. Name one condition that the list must meet for the binary search to work.',
      ru: 'Отсортированный список содержит 1 000 000 идентификационных номеров учеников. Объясните, почему двоичному поиску в худшем случае нужно гораздо меньше сравнений, чем линейному, чтобы найти номер. Назовите одно условие, которому должен отвечать список, чтобы двоичный поиск работал.',
    },
    markscheme: {
      en: '[1] Each comparison of a binary search discards half of the remaining items, so the worst case is about 20 comparisons. [1] A linear search may have to check all 1,000,000 items, so its worst case grows with n. [1] The list must be sorted; otherwise the discarded half may contain the ID.',
      ru: '[1] Каждое сравнение двоичного поиска отбрасывает половину оставшихся элементов, поэтому в худшем случае нужно около 20 сравнений. [1] Линейный поиск может проверить все 1 000 000 элементов, поэтому его худший случай растёт вместе с n. [1] Список должен быть отсортирован; иначе отброшенная половина может содержать искомый номер.',
    },
    origin: 'original',
  },
  {
    id: 'b2-4-q03',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: 'Trace the program below. State every line that it prints, in the order it prints them.',
      ru: 'Проследите программу ниже. Укажите каждую строку, которую она выводит, в порядке вывода.',
    },
    stimulus: {
      en: `Trace the linear search below.

\`\`\`python
def linear_search(values, target):
    for index in range(len(values)):
        print("checking", index)
        if values[index] == target:
            return index
    return -1

scores = [42, 17, 63, 8, 29, 17]
print(linear_search(scores, 17))
print(linear_search(scores, 50))
\`\`\``,
      ru: `Проследите линейный поиск ниже.

\`\`\`python
def linear_search(values, target):
    for index in range(len(values)):
        print("checking", index)
        if values[index] == target:
            return index
    return -1

scores = [42, 17, 63, 8, 29, 17]
print(linear_search(scores, 17))
print(linear_search(scores, 50))
\`\`\``,
    },
    markscheme: {
      en: '[1] checking 0, checking 1, then 1 (the search for 17 stops at index 1). [1] checking 0 to checking 5, one line for each check (the search for 50 is not in the list). [1] -1 as the last line.',
      ru: '[1] checking 0, checking 1, затем 1 (поиск 17 останавливается на индексе 1). [1] От checking 0 до checking 5, по одной строке на каждую проверку (поиск 50 не находит значения). [1] Последняя строка: -1.',
    },
    answer: 'checking 0\nchecking 1\n1\nchecking 0\nchecking 1\nchecking 2\nchecking 3\nchecking 4\nchecking 5\n-1',
    origin: 'original',
  },
  {
    id: 'b2-4-q04',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Trace the binary search below. State every line that it prints, in the order it prints them.',
      ru: 'Проследите двоичный поиск ниже. Укажите каждую строку, которую он выводит, в порядке вывода.',
    },
    stimulus: {
      en: `Trace the binary search below.

\`\`\`python
def binary_search(values, target):
    low = 0
    high = len(values) - 1
    while low <= high:
        middle = (low + high) // 2
        print("middle", middle, "value", values[middle])
        if values[middle] == target:
            return middle
        elif values[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1

data = [2, 5, 8, 12, 16, 23, 38, 56, 72]
print("result", binary_search(data, 23))
print("result", binary_search(data, 40))
\`\`\``,
      ru: `Проследите двоичный поиск ниже.

\`\`\`python
def binary_search(values, target):
    low = 0
    high = len(values) - 1
    while low <= high:
        middle = (low + high) // 2
        print("middle", middle, "value", values[middle])
        if values[middle] == target:
            return middle
        elif values[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1

data = [2, 5, 8, 12, 16, 23, 38, 56, 72]
print("result", binary_search(data, 23))
print("result", binary_search(data, 40))
\`\`\``,
    },
    markscheme: {
      en: '[1] First search: middle 4 value 16, middle 6 value 38, middle 5 value 23. [1] result 5 for the first search. [1] Second search: middle 4 value 16, middle 6 value 38, middle 7 value 56. [1] result -1 for the second search.',
      ru: '[1] Первый поиск: middle 4 value 16, middle 6 value 38, middle 5 value 23. [1] Результат первого поиска: result 5. [1] Второй поиск: middle 4 value 16, middle 6 value 38, middle 7 value 56. [1] Результат второго поиска: result -1.',
    },
    answer: 'middle 4 value 16\nmiddle 6 value 38\nmiddle 5 value 23\nresult 5\nmiddle 4 value 16\nmiddle 6 value 38\nmiddle 7 value 56\nresult -1',
    origin: 'original',
  },
  {
    id: 'b2-4-q05',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: 'The program below runs one pass of a bubble sort on the list and counts the swaps. Trace the pass and state the two lines that the program prints.',
      ru: 'Программа ниже выполняет один проход пузырьковой сортировки над списком и считает обмены. Проследите проход и укажите две строки, которые выводит программа.',
    },
    stimulus: {
      en: `Trace the bubble sort pass below.

\`\`\`python
def bubble_pass(values):
    swaps = 0
    for index in range(len(values) - 1):
        if values[index] > values[index + 1]:
            temporary = values[index]
            values[index] = values[index + 1]
            values[index + 1] = temporary
            swaps = swaps + 1
    return swaps

numbers = [7, 3, 9, 1, 5]
swaps = bubble_pass(numbers)
print(numbers)
print("swaps", swaps)
\`\`\``,
      ru: `Проследите проход пузырьковой сортировки ниже.

\`\`\`python
def bubble_pass(values):
    swaps = 0
    for index in range(len(values) - 1):
        if values[index] > values[index + 1]:
            temporary = values[index]
            values[index] = values[index + 1]
            values[index + 1] = temporary
            swaps = swaps + 1
    return swaps

numbers = [7, 3, 9, 1, 5]
swaps = bubble_pass(numbers)
print(numbers)
print("swaps", swaps)
\`\`\``,
    },
    markscheme: {
      en: '[1] Swaps 7 with 3, then 9 with 1, then 9 with 5, in that order. [1] The printed list is [3, 7, 1, 5, 9]. [1] The count line is swaps 3.',
      ru: '[1] Обмены: 7 с 3, затем 9 с 1, затем 9 с 5, в этом порядке. [1] Выведенный список: [3, 7, 1, 5, 9]. [1] Строка подсчёта: swaps 3.',
    },
    answer: '[3, 7, 1, 5, 9]\nswaps 3',
    origin: 'original',
  },
  {
    id: 'b2-4-q06',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Trace the selection sort below. State the four lines that the program prints, in the order it prints them.',
      ru: 'Проследите сортировку выбором ниже. Укажите четыре строки, которые выводит программа, в порядке вывода.',
    },
    stimulus: {
      en: `Trace the selection sort below.

\`\`\`python
def selection_sort(values):
    for position in range(len(values) - 1):
        smallest = position
        for index in range(position + 1, len(values)):
            if values[index] < values[smallest]:
                smallest = index
        temporary = values[position]
        values[position] = values[smallest]
        values[smallest] = temporary
        print("after pass", position + 1, values)
    return values

print(selection_sort([6, 2, 8, 4]))
\`\`\``,
      ru: `Проследите сортировку выбором ниже.

\`\`\`python
def selection_sort(values):
    for position in range(len(values) - 1):
        smallest = position
        for index in range(position + 1, len(values)):
            if values[index] < values[smallest]:
                smallest = index
        temporary = values[position]
        values[position] = values[smallest]
        values[smallest] = temporary
        print("after pass", position + 1, values)
    return values

print(selection_sort([6, 2, 8, 4]))
\`\`\``,
    },
    markscheme: {
      en: '[1] after pass 1 [2, 6, 8, 4]: 2 is the smallest value and swaps with 6. [1] after pass 2 [2, 4, 8, 6]: 4 is the smallest of the rest and swaps with 6. [1] after pass 3 [2, 4, 6, 8]: 6 swaps with 8. [1] The last line [2, 4, 6, 8] is the returned list, printed by the outer call.',
      ru: '[1] after pass 1 [2, 6, 8, 4]: 2 — наименьшее значение, оно меняется местами с 6. [1] after pass 2 [2, 4, 8, 6]: 4 — наименьшее из оставшихся, оно меняется с 6. [1] after pass 3 [2, 4, 6, 8]: 6 меняется с 8. [1] Последняя строка [2, 4, 6, 8] — возвращённый список, который выводит внешний вызов print.',
    },
    answer: 'after pass 1 [2, 6, 8, 4]\nafter pass 2 [2, 4, 8, 6]\nafter pass 3 [2, 4, 6, 8]\n[2, 4, 6, 8]',
    origin: 'original',
  },
  {
    id: 'b2-4-q07',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The program below sorts six numbers with a bubble sort and counts the comparisons it makes. Calculate the number of comparisons in each pass and in total, then state the two lines that the program prints.',
      ru: 'Программа ниже сортирует шесть чисел пузырьковой сортировкой и считает сделанные сравнения. Вычислите число сравнений в каждом проходе и в сумме, затем укажите две строки, которые выводит программа.',
    },
    stimulus: {
      en: `The program below sorts six numbers and counts the comparisons.

\`\`\`python
numbers = [5, 1, 4, 2, 8, 3]
comparisons = 0
for outer in range(len(numbers) - 1):
    for inner in range(len(numbers) - outer - 1):
        comparisons = comparisons + 1
        if numbers[inner] > numbers[inner + 1]:
            temporary = numbers[inner]
            numbers[inner] = numbers[inner + 1]
            numbers[inner + 1] = temporary
print(numbers)
print("comparisons", comparisons)
\`\`\``,
      ru: `Программа ниже сортирует шесть чисел и считает сравнения.

\`\`\`python
numbers = [5, 1, 4, 2, 8, 3]
comparisons = 0
for outer in range(len(numbers) - 1):
    for inner in range(len(numbers) - outer - 1):
        comparisons = comparisons + 1
        if numbers[inner] > numbers[inner + 1]:
            temporary = numbers[inner]
            numbers[inner] = numbers[inner + 1]
            numbers[inner + 1] = temporary
print(numbers)
print("comparisons", comparisons)
\`\`\``,
    },
    markscheme: {
      en: '[1] Comparisons per pass: 5, 4, 3, 2 and 1. [1] Total 5 + 4 + 3 + 2 + 1 = 15, printed as comparisons 15. [1] The sorted list [1, 2, 3, 4, 5, 8] is printed on the first line.',
      ru: '[1] Сравнения по проходам: 5, 4, 3, 2 и 1. [1] Всего 5 + 4 + 3 + 2 + 1 = 15, вывод: comparisons 15. [1] Первая строка — отсортированный список [1, 2, 3, 4, 5, 8].',
    },
    answer: '[1, 2, 3, 4, 5, 8]\ncomparisons 15',
    origin: 'original',
  },
  {
    id: 'b2-4-q08',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: 'Trace the recursive function below and state the two lines that the program prints. Then explain in one sentence how the recursion stops.',
      ru: 'Проследите рекурсивную функцию ниже и укажите две строки, которые выводит программа. Затем в одном предложении объясните, как рекурсия останавливается.',
    },
    stimulus: {
      en: `Trace the recursive function below.

\`\`\`python
def digit_total(number):
    if number < 10:
        return number
    return number % 10 + digit_total(number // 10)

print(digit_total(4096))
print(digit_total(705))
\`\`\``,
      ru: `Проследите рекурсивную функцию ниже.

\`\`\`python
def digit_total(number):
    if number < 10:
        return number
    return number % 10 + digit_total(number // 10)

print(digit_total(4096))
print(digit_total(705))
\`\`\``,
    },
    markscheme: {
      en: '[1] 19 (6 + 9 + 0 + 4). [1] 12 (5 + 0 + 7). [1] The recursion stops when the number is below 10, because the function then returns that single digit without another call.',
      ru: '[1] 19 (6 + 9 + 0 + 4). [1] 12 (5 + 0 + 7). [1] Рекурсия останавливается, когда число меньше 10: функция возвращает эту цифру и больше не вызывает себя.',
    },
    answer: '19\n12',
    origin: 'original',
  },
  {
    id: 'b2-4-q09',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'The function below has no base case and is started with count_down(3). Explain what happens to the call stack, and why the program cannot finish normally.',
      ru: 'В функции ниже нет базового случая, её запускают вызовом count_down(3). Объясните, что происходит со стеком вызовов, и почему программа не может завершиться нормально.',
    },
    stimulus: {
      en: `The function below is not a finished program. Do not run it.

\`\`\`
def count_down(n):
    print(n)
    return count_down(n - 1)

count_down(3)
\`\`\``,
      ru: `Функция ниже не является готовой программой. Не запускайте её.

\`\`\`
def count_down(n):
    print(n)
    return count_down(n - 1)

count_down(3)
\`\`\``,
    },
    markscheme: {
      en: '[1] There is no base case, so every call makes another call and no call ever returns a value. [1] Each call is added to the call stack, which keeps growing because no call has finished. [1] The stack runs out of memory (a stack overflow), so the program crashes instead of finishing.',
      ru: '[1] Базового случая нет, поэтому каждый вызов делает новый вызов, и ни один вызов никогда не возвращает значение. [1] Каждый вызов добавляется в стек вызовов, и стек растёт, потому что ни один вызов не завершился. [1] Память стека заканчивается (переполнение стека), и программа аварийно завершается, а не завершается нормально.',
    },
    origin: 'original',
  },
  {
    id: 'b2-4-q10',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Construct',
    prompt: {
      en: 'Construct a Python function largest(values) that returns the largest number in a non-empty list. Use a loop and an if statement. Do not use max(), sorted() or any other built-in function that finds the answer for you. For example, largest([4, 19, 7]) must return 19.',
      ru: 'Постройте функцию Python largest(values), которая возвращает наибольшее число в непустом списке. Используйте цикл и оператор if. Не используйте max(), sorted() и другие встроенные функции, которые находят ответ за вас. Например, largest([4, 19, 7]) должна вернуть 19.',
    },
    markscheme: {
      en: '[1] A function with the list as its parameter, which starts with the first value as the largest so far. [1] A loop over the values that compares each value with the largest so far, using an if statement. [1] The largest value is updated when a bigger value is found, and the function returns it after the loop.',
      ru: '[1] Функция принимает список как параметр и начинает с первого значения как наибольшего на данный момент. [1] Цикл по значениям сравнивает каждое значение с наибольшим на данный момент, используя if. [1] Наибольшее значение обновляется, когда найдено большее, и функция возвращает его после цикла.',
    },
    origin: 'original',
  },
  {
    id: 'b2-4-q11',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 3,
    command: 'Evaluate',
    prompt: {
      en: 'A quiz game keeps a leaderboard of 50,000 scores and sorts it after every game. Evaluate the use of bubble sort and selection sort for this task. Refer to their time complexity and their space complexity, and reach a conclusion.',
      ru: 'Игра с викториной хранит таблицу лидеров из 50 000 результатов и сортирует её после каждой игры. Оцените использование пузырьковой сортировки и сортировки выбором для этой задачи. Учтите их временную и пространственную сложность и сделайте вывод.',
    },
    markscheme: {
      en: '[1] Strength: both are simple to write, and both sort in place, so the extra space is constant, O(1). [1] Limitation: both are O(n^2), so 50,000 scores need about 1.25 billion comparisons; bubble sort also makes many swaps, while selection sort makes at most n - 1 swaps. [1] Conclusion: neither is suitable for this task; an algorithm with O(n log n) efficiency, such as merge sort, is better.',
      ru: '[1] Достоинство: обе сортировки просты в написании и работают на месте, поэтому дополнительная память постоянна: O(1). [1] Недостаток: обе имеют сложность O(n^2), для 50 000 результатов нужно около 1,25 миллиарда сравнений; пузырьковая сортировка к тому же делает много обменов, а сортировка выбором делает не больше n - 1 обменов. [1] Вывод: ни одна из них не подходит для этой задачи; лучше алгоритм со сложностью O(n log n), например сортировка слиянием.',
    },
    origin: 'original',
  },
  {
    id: 'b2-4-q12',
    subject: 'cs',
    topicIds: ['b2-4-algorithms'],
    paper: 'P2',
    marks: 4,
    command: 'Sketch',
    prompt: {
      en: 'The program below prints one value. (a) State the value printed. (b) Sketch the call stack at the moment the base case is reached, labelling each frame with the value of number.',
      ru: 'Программа ниже выводит одно значение. (а) Укажите выведенное значение. (б) Нарисуйте стек вызовов в момент достижения базового случая и подпишите каждый кадр значением number.',
    },
    stimulus: {
      en: `Study the program below.

\`\`\`python
def double_until_ten(number):
    if number >= 10:
        return number
    return double_until_ten(number * 2)

print(double_until_ten(3))
\`\`\``,
      ru: `Изучите программу ниже.

\`\`\`python
def double_until_ten(number):
    if number >= 10:
        return number
    return double_until_ten(number * 2)

print(double_until_ten(3))
\`\`\``,
    },
    markscheme: {
      en: '[1] (a) 12. [1] (b) Three frames stacked one above another, with the first call (number = 3) at the bottom. [1] The middle frame is number = 6, and it waits for the value returned by the call above it. [1] The top frame is number = 12, which meets the base case and returns 12.',
      ru: '[1] (а) 12. [1] (б) Три кадра друг над другом, первый вызов (number = 3) внизу. [1] Средний кадр — number = 6, он ждёт значение, которое вернёт вызов над ним. [1] Верхний кадр — number = 12: он достигает базового случая и возвращает 12.',
    },
    answer: '12',
    origin: 'original',
  },
];
