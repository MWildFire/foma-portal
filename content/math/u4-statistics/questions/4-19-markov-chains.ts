import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-19-01',
    subject: 'math',
    topicIds: ['4-19-markov-chains'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A Markov chain has a transition matrix whose first column is (0.8, 0.2) and whose second column is (0.3, 0.7). The first state is provider A and the second is provider B. Columns give the current state and rows give the next state. At the start, all customers use provider A. Find the proportion of customers using provider A and the proportion using provider B after two months.',
      ru: 'Матрица переходов цепи Маркова имеет первый столбец (0,8; 0,2) и второй столбец (0,3; 0,7). Первое состояние — провайдер A, второе — провайдер B. Столбцы задают текущее состояние, строки — следующее. В начале все клиенты пользуются провайдером A. Найдите долю клиентов, пользующихся провайдером A, и долю пользующихся провайдером B через два месяца.',
    },
    markscheme: {
      en: 'M1: state after one month: S1 = (0.8, 0.2), the first column of T. M1: S2 = T S1. A1: 0.70 use provider A and 0.30 use provider B.',
      ru: 'M1: состояние через один месяц: S1 = (0,8; 0,2), первый столбец T. M1: S2 = T S1. A1: провайдером A пользуются 0,70, провайдером B — 0,30.',
    },
    answer: '0.70; 0.30',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-19-02',
    subject: 'math',
    topicIds: ['4-19-markov-chains'],
    paper: 'P1',
    marks: 4,
    command: 'Show that',
    prompt: {
      en: 'Each year a gym member is either in state S (keeps the membership) or state C (cancels). The transition matrix has first column (0.9, 0.1) and second column (0.4, 0.6). Columns give the current state and rows give the next state.\n\n(a) Show that the Markov chain is regular. [1]\n\n(b) Find the long-run proportion of members in state S and in state C. [3]',
      ru: 'Членство в спортклубе ежегодно находится в одном из состояний: S (членство сохраняется) или C (членство отменено). Матрица переходов имеет первый столбец (0,9; 0,1) и второй столбец (0,4; 0,6). Столбцы задают текущее состояние, строки — следующее.\n\n(a) Покажите, что цепь Маркова регулярна. [1]\n\n(b) Найдите долю членов клуба в состоянии S и в состоянии C в долгосрочной перспективе. [3]',
    },
    markscheme: {
      en: '(a) R1: every entry of T is positive, so the chain is regular (with k = 1).\n(b) M1: TS = S gives 0.9a + 0.4b = a, where S = (a, b) and a + b = 1. M1: 0.4b = 0.1a, so a = 4b and b = 0.20. A1: S = 0.80 and C = 0.20.',
      ru: '(a) R1: все элементы T положительны, поэтому цепь регулярна (k = 1).\n(b) M1: TS = S даёт 0,9a + 0,4b = a, где S = (a, b) и a + b = 1. M1: 0,4b = 0,1a, откуда a = 4b и b = 0,20. A1: S = 0,80 и C = 0,20.',
    },
    answer: '0.80; 0.20',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-19-03',
    subject: 'math',
    topicIds: ['4-19-markov-chains'],
    paper: 'P2',
    marks: 14,
    command: 'Write down, Show that',
    prompt: {
      en: 'The weather on a school day in Dubai is classed as sunny (S), cloudy (C) or dusty (D), in that order for the rows and columns of the transition matrix. The columns give the current day and the rows give the next day. From a sunny day: 0.6 sunny, 0.3 cloudy, 0.1 dusty. From a cloudy day: 0.4 sunny, 0.2 cloudy, 0.4 dusty. From a dusty day: 0.5 sunny, 0.5 cloudy and 0 dusty, so a dusty day is never followed by another dusty day. Assume that the weather follows a Markov chain with these probabilities.\n\n(a) Write down the transition matrix T, and show that the Markov chain is regular. [4]\n\n(b) Given that day 1 is sunny, find the probability that day 3 is dusty. Give your answer to 3 decimal places. [4]\n\n(c) Find the steady state distribution of the weather. Give your answers to 3 decimal places. [4]\n\n(d) Explain why the long-run proportions in part (c) do not depend on the weather on day 1. [2]',
      ru: 'Погода в учебный день в Дубае классифицируется как солнечная (S), облачная (C) или пыльная (D); такой же порядок используется для строк и столбцов матрицы переходов. Столбцы задают текущий день, строки — следующий. После солнечного дня: 0,6 солнечный, 0,3 облачный, 0,1 пыльный. После облачного дня: 0,4 солнечный, 0,2 облачный, 0,4 пыльный. После пыльного дня: 0,5 солнечный, 0,5 облачный и 0 пыльный, то есть пыльный день никогда не следует за пыльным. Считайте, что погода следует цепи Маркова с этими вероятностями.\n\n(a) Запишите матрицу переходов T и покажите, что цепь Маркова регулярна. [4]\n\n(b) Известно, что первый день солнечный. Найдите вероятность того, что третий день окажется пыльным. Ответ дайте с точностью до 3 знаков после запятой. [4]\n\n(c) Найдите установившееся распределение погоды. Ответы дайте с точностью до 3 знаков после запятой. [4]\n\n(d) Объясните, почему долгосрочные доли в пункте (c) не зависят от погоды в первый день. [2]',
    },
    markscheme: {
      en: '(a) A1: T = [0.6 0.4 0.5; 0.3 0.2 0.5; 0.1 0.4 0] with the states in the order S, C, D. M1: T has a zero entry, so compute T^2. A1: T^2 has all entries positive; for example its dusty-to-dusty entry is 0.25. R1: so the chain is regular.\n(b) M1: day 2 is T(1, 0, 0) = (0.6, 0.3, 0.1). A1: day 2 is correct. M1: day 3 is T(0.6, 0.3, 0.1) = (0.53, 0.29, 0.18). A1: P(day 3 is dusty) = 0.180.\n(c) M1: TS = S with the probabilities summing to 1. M1: solve the linear system, by technology or by substitution. A1: sunny 0.522 and cloudy 0.304 (exactly 12/23 and 7/23). A1: dusty 0.174 (exactly 4/23).\n(d) R1: the chain is regular, so it has a unique steady state. R1: a regular chain forgets its starting state, so the long-run proportions are the same whatever the weather on day 1.',
      ru: '(a) A1: T = [0,6 0,4 0,5; 0,3 0,2 0,5; 0,1 0,4 0] при порядке состояний S, C, D. M1: в T есть нулевой элемент, поэтому вычисляем T^2. A1: все элементы T^2 положительны; например, элемент «пыльный после пыльного» равен 0,25. R1: значит, цепь регулярна.\n(b) M1: второй день: T(1, 0, 0) = (0,6; 0,3; 0,1). A1: второй день верно. M1: третий день: T(0,6; 0,3; 0,1) = (0,53; 0,29; 0,18). A1: P(третий день пыльный) = 0,180.\n(c) M1: TS = S, сумма вероятностей равна 1. M1: решение линейной системы технологией или подстановкой. A1: солнечный 0,522 и облачный 0,304 (точно 12/23 и 7/23). A1: пыльный 0,174 (точно 4/23).\n(d) R1: цепь регулярна, поэтому у неё одно установившееся распределение. R1: регулярная цепь забывает начальное состояние, поэтому долгосрочные доли одинаковы, какой бы ни была погода в первый день.',
    },
    answer: '0.180; 0.522; 0.304; 0.174',
    origin: 'original',
    minutes: 14,
  },
];
