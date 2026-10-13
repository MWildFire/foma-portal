import type { Question } from '../../../../src/contract/types';

// B2.3 questions: original Paper 2 questions. Every printed output was checked by running the Python code with python3.
export const questions: Question[] = [
  {
    id: 'b2-3-q01',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain why the order of instructions in a program affects its output. Give one example of a wrong order and one example of a loop that never ends.',
      ru: 'Объясните, почему порядок инструкций в программе влияет на результат. Приведите один пример неверного порядка и один пример цикла, который никогда не заканчивается.',
    },
    markscheme: {
      en: '[1] instructions run one after another in the order they are written, so each one uses only the values that exist at that point. [1] example of a wrong order: a total is printed before the loop that calculates it, so the output is the starting value 0. [1] example of a loop that never ends: a counter is never incremented, so the end condition is never met (an infinite loop).',
      ru: '[1] инструкции выполняются одна за другой в порядке записи, поэтому каждая использует только значения, которые существуют в этот момент. [1] пример неверного порядка: итог выводится до цикла, который его считает, и на экран попадает начальное значение 0. [1] пример бесконечного цикла: счётчик не увеличивается, поэтому условие окончания никогда не выполняется.',
    },
    origin: 'original',
  },
  {
    id: 'b2-3-q02',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 2,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a parameter and an argument of a function.',
      ru: 'Проведите различие между параметром (parameter) и аргументом (argument) функции.',
    },
    markscheme: {
      en: '[1] a parameter is the variable named in the function definition, which receives a value when the function is called. [1] an argument is the actual value (or a variable holding it) that is passed to the function in the call.',
      ru: '[1] параметр — переменная, указанная в определении функции, которая получает значение при вызове. [1] аргумент — фактическое значение (или переменная, которая его хранит), переданное функции при вызове.',
    },
    origin: 'original',
  },
  {
    id: 'b2-3-q03',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 3,
    command: 'Justify',
    prompt: {
      en: 'A program asks the user for a password. The user may try up to five times, and the loop must also stop as soon as the correct password is entered. Justify the choice of a while loop instead of a for loop for this task.',
      ru: 'Программа просит пользователя ввести пароль. Можно сделать до пяти попыток, и цикл должен также остановиться, как только введён правильный пароль. Обоснуйте выбор цикла while, а не for, для этой задачи.',
    },
    markscheme: {
      en: '[1] a while loop is chosen. [1] the number of repeats is not known in advance, because the correct password may be entered on the first try or all five attempts may be needed. [1] the condition can combine both stop rules, for example attempts are fewer than five and the password is wrong, so the loop ends early when the password is correct.',
      ru: '[1] выбран цикл while. [1] число повторов заранее неизвестно: пароль может быть введён с первой попытки или понадобятся все пять. [1] условие цикла объединяет оба правила остановки, например «попыток меньше пяти и пароль неверный», поэтому при верном пароле цикл заканчивается раньше.',
    },
    origin: 'original',
  },
  {
    id: 'b2-3-q04',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 3,
    command: 'Outline',
    prompt: {
      en: 'Outline three benefits of splitting a long program into functions or modules.',
      ru: 'Кратко опишите три преимущества разделения длинной программы на функции или модули.',
    },
    markscheme: {
      en: '[1] any one of: the code is easier to read, because each function has one clear task. [1] a second, different benefit, for example each function can be tested separately or reused in other programs. [1] a third, different benefit, for example a change needs to be made in one place only.',
      ru: '[1] любое одно из преимуществ: код легче читать, потому что у каждой функции одна понятная задача. [1] второе, другое преимущество, например: функцию можно проверить отдельно или повторно использовать в других программах. [1] третье, другое преимущество, например: изменение вносится только в одном месте.',
    },
    origin: 'original',
  },
  {
    id: 'b2-3-q05',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Complete the trace table for the program below, where x = 14 at the start. For each pass through the loop, record the value of x at the start of the pass, whether x % 3 == 0 is True or False, the value of count at the end of the pass, and the value of x at the end of the pass. Then state the two values that the program prints.',
      ru: 'Заполните таблицу трассировки для программы ниже, где в начале x = 14. Для каждого прохода цикла запишите значение x в начале прохода, результат проверки x % 3 == 0 (True или False), значение count в конце прохода и значение x в конце прохода. Затем укажите два значения, которые напечатает программа.',
    },
    stimulus: {
      en: 'The program below uses a while loop with a selection inside it.\n\n```python\nx = 14\ncount = 0\nwhile x > 0:\n    if x % 3 == 0:\n        count = count + 1\n    x = x - 4\nprint(count)\nprint(x)\n```',
      ru: 'В программе ниже есть цикл while, внутри которого стоит ветвление.\n\n```python\nx = 14\ncount = 0\nwhile x > 0:\n    if x % 3 == 0:\n        count = count + 1\n    x = x - 4\nprint(count)\nprint(x)\n```',
    },
    markscheme: {
      en: '[1] pass 1: x = 14, test False, count = 0, x becomes 10; pass 2: x = 10, test False, count = 0, x becomes 6. [1] pass 3: x = 6, test True, count = 1, x becomes 2. [1] pass 4: x = 2, test False, count = 1, x becomes -2; the loop then stops because x is not greater than 0. [1] the program prints 1 and then -2.',
      ru: '[1] проход 1: x = 14, проверка False, count = 0, x становится 10; проход 2: x = 10, проверка False, count = 0, x становится 6. [1] проход 3: x = 6, проверка True, count = 1, x становится 2. [1] проход 4: x = 2, проверка False, count = 1, x становится -2; затем цикл останавливается, потому что x не больше 0. [1] программа печатает 1, а затем -2.',
    },
    answer: '1\n-2',
    origin: 'original',
  },
  {
    id: 'b2-3-q06',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 3,
    command: 'State',
    prompt: {
      en: 'State the three lines printed by the program.',
      ru: 'Укажите три строки, которые напечатает программа.',
    },
    stimulus: {
      en: 'The function returns a letter grade for a score.\n\n```python\ndef grade(score):\n    if score >= 70:\n        return "A"\n    elif score >= 50:\n        return "B"\n    else:\n        return "C"\n\nprint(grade(70))\nprint(grade(69))\nprint(grade(12))\n```',
      ru: 'Функция возвращает буквенную оценку для балла.\n\n```python\ndef grade(score):\n    if score >= 70:\n        return "A"\n    elif score >= 50:\n        return "B"\n    else:\n        return "C"\n\nprint(grade(70))\nprint(grade(69))\nprint(grade(12))\n```',
    },
    markscheme: {
      en: '[1] A: 70 passes the first test (score >= 70). [1] B: 69 fails the first test but passes the second (score >= 50). [1] C: 12 fails both tests, so the else block runs.',
      ru: '[1] A: 70 проходит первую проверку (score >= 70). [1] B: 69 не проходит первую проверку, но проходит вторую (score >= 50). [1] C: 12 не проходит ни одну проверку, поэтому выполняется блок else.',
    },
    answer: 'A\nB\nC',
    origin: 'original',
  },
  {
    id: 'b2-3-q07',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Calculate the two values printed by the program. Show the value that the function returns in each call.',
      ru: 'Вычислите два значения, которые напечатает программа. Покажите значение, которое функция возвращает при каждом вызове.',
    },
    stimulus: {
      en: 'The function calculates the volume of a rectangular box.\n\n```python\ndef rectangle_volume(w, h, d):\n    volume = w * h * d\n    return volume\n\nwidth = 3\nheight = 4\ndepth = 2\nprint(rectangle_volume(width, height, depth))\nprint(rectangle_volume(2, 2, 5) + 1)\n```',
      ru: 'Функция вычисляет объём прямоугольной коробки.\n\n```python\ndef rectangle_volume(w, h, d):\n    volume = w * h * d\n    return volume\n\nwidth = 3\nheight = 4\ndepth = 2\nprint(rectangle_volume(width, height, depth))\nprint(rectangle_volume(2, 2, 5) + 1)\n```',
    },
    markscheme: {
      en: '[1] the first call passes 3, 4 and 2, so the volume is 3 × 4 × 2 = 24, which is printed. [1] the second call passes 2, 2 and 5, so the function returns 20. [1] the + 1 is added after the return, so the second line printed is 21.',
      ru: '[1] первый вызов получает 3, 4 и 2, поэтому объём равен 3 × 4 × 2 = 24, и это значение печатается. [1] второй вызов получает 2, 2 и 5, поэтому функция возвращает 20. [1] прибавка + 1 выполняется после возврата, поэтому вторая напечатанная строка — 21.',
    },
    answer: '24\n21',
    origin: 'original',
  },
  {
    id: 'b2-3-q08',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 4,
    command: 'State',
    prompt: {
      en: 'State the four lines printed by the program.',
      ru: 'Укажите четыре строки, которые напечатает программа.',
    },
    stimulus: {
      en: 'The list holds the guesses in order. The loop stops when the guess is 100 or after three wrong guesses.\n\n```python\nguesses = [40, 75, 90, 100, 12]\nattempt = 0\nguess = guesses[attempt]\nwhile guess != 100 and attempt < 3:\n    print("wrong", guess)\n    attempt = attempt + 1\n    guess = guesses[attempt]\nprint("final", guess, attempt)\n```',
      ru: 'Список содержит догадки по порядку. Цикл останавливается, когда догадка равна 100, или после трёх неверных догадок.\n\n```python\nguesses = [40, 75, 90, 100, 12]\nattempt = 0\nguess = guesses[attempt]\nwhile guess != 100 and attempt < 3:\n    print("wrong", guess)\n    attempt = attempt + 1\n    guess = guesses[attempt]\nprint("final", guess, attempt)\n```',
    },
    markscheme: {
      en: '[1] wrong 40. [1] wrong 75. [1] wrong 90. [1] final 100 3: the loop stops because the guess is 100 and attempt has reached 3.',
      ru: '[1] wrong 40. [1] wrong 75. [1] wrong 90. [1] final 100 3: цикл останавливается, потому что догадка равна 100, а attempt уже равен 3.',
    },
    answer: 'wrong 40\nwrong 75\nwrong 90\nfinal 100 3',
    origin: 'original',
  },
  {
    id: 'b2-3-q09',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'Calculate the value printed by the program. Show the values taken by n and the running total.',
      ru: 'Вычислите значение, которое напечатает программа. Покажите значения n и промежуточную сумму total.',
    },
    stimulus: {
      en: 'The loop counts from 1 to 10 in steps of 3.\n\n```python\ntotal = 0\nfor n in range(1, 11, 3):\n    if n % 2 == 0:\n        total = total + n\n    else:\n        total = total - 1\nprint(total)\n```',
      ru: 'Цикл проходит значения от 1 до 10 с шагом 3.\n\n```python\ntotal = 0\nfor n in range(1, 11, 3):\n    if n % 2 == 0:\n        total = total + n\n    else:\n        total = total - 1\nprint(total)\n```',
    },
    markscheme: {
      en: '[1] range(1, 11, 3) gives the values 1, 4, 7 and 10. [1] n = 1 is odd, so total becomes -1; n = 4 is even, so total becomes 3. [1] n = 7 is odd, so total becomes 2. [1] n = 10 is even, so total becomes 12, and the program prints 12.',
      ru: '[1] range(1, 11, 3) даёт значения 1, 4, 7 и 10. [1] при n = 1 (нечётное) total становится -1; при n = 4 (чётное) — 3. [1] при n = 7 (нечётное) total становится 2. [1] при n = 10 (чётное) total становится 12, и программа печатает 12.',
    },
    answer: '12',
    origin: 'original',
  },
  {
    id: 'b2-3-q10',
    subject: 'cs',
    topicIds: ['b2-3-programming-constructs'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'The function count_positive below is a stub: it always returns 0. Construct the body of the function so that it returns the number of positive values in the list values. The call on the last line should then print 3. Write the code.',
      ru: 'Функция count_positive ниже — заготовка: она всегда возвращает 0. Напишите тело функции так, чтобы она возвращала количество положительных значений в списке values. Тогда вызов в последней строке напечатает 3. Напишите код.',
    },
    stimulus: {
      en: 'The stub is part of an unfinished program.\n\n```python\ndef count_positive(values):\n    # stub: always returns 0 until the method is written\n    return 0\n\nprint(count_positive([3, -1, 4, 0, 5]))\n```',
      ru: 'Заготовка является частью незаконченной программы.\n\n```python\ndef count_positive(values):\n    # заготовка: всегда возвращает 0, пока метод не написан\n    return 0\n\nprint(count_positive([3, -1, 4, 0, 5]))\n```',
    },
    markscheme: {
      en: '[1] a counter is set to 0 before the loop. [1] a loop goes through every value in values. [1] the counter goes up by 1 when a value is greater than 0. [1] the counter is returned with return after the loop, so the call prints 3.',
      ru: '[1] счётчик устанавливается в 0 до цикла. [1] цикл перебирает все значения списка values. [1] счётчик увеличивается на 1, если значение больше 0. [1] счётчик возвращается оператором return после цикла, поэтому вызов печатает 3.',
    },
    origin: 'original',
  },
];
