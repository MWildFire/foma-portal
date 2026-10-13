import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-8-01',
    subject: 'math',
    topicIds: ['4-8-binomial'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A quiz has 8 multiple-choice questions, each with 4 options. A student chooses every answer at random, so the probability of a correct answer is $\\frac{1}{4}$ for each question, and the answers are independent. Let $X$ be the number of correct answers. Find $P(X = 3)$. Give your answer correct to 3 decimal places.',
      ru: 'В викторине 8 вопросов с выбором ответа, в каждом по 4 варианта. Ученик выбирает каждый ответ наугад, поэтому вероятность правильного ответа на каждый вопрос равна $\\frac{1}{4}$, а ответы независимы. Пусть $X$ — число правильных ответов. Найдите $P(X = 3)$. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: X ~ B(8, 0.25), so n = 8 and p = 0.25. M1: P(X = 3) = C(8, 3) × 0.25^3 × 0.75^5 (or the binomial probability function on the GDC). A1: 0.208 (3 decimal places).',
      ru: 'M1: X ~ B(8; 0,25), то есть n = 8 и p = 0,25. M1: P(X = 3) = C(8, 3) × 0,25^3 × 0,75^5 (или функция биномиальной вероятности на калькуляторе). A1: 0,208 (с точностью до 3 знаков).',
    },
    answer: '0.208',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-8-02',
    subject: 'math',
    topicIds: ['4-8-binomial'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A supplier says that 5% of the screens in its boxes are cracked, and that cracks occur independently of each other. A shop receives a box of 12 screens. Let $Y$ be the number of cracked screens in the box, so $Y \\sim \\text{B}(12, 0.05)$. Calculate $P(Y \\ge 2)$. Give your answer correct to 3 decimal places.',
      ru: 'Поставщик утверждает, что 5% экранов в его коробках имеют трещины и что трещины появляются независимо друг от друга. Магазин получает коробку из 12 экранов. Пусть $Y$ — число треснувших экранов в коробке, то есть $Y \\sim \\text{B}(12, 0{,}05)$. Вычислите $P(Y \\ge 2)$. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: P(Y ≥ 2) = 1 − P(Y ≤ 1). M1: the cumulative probability for n = 12 and p = 0.05 (the binomial cumulative function on the GDC, or 1 − P(Y = 0) − P(Y = 1)). A1: 0.118 (3 decimal places).',
      ru: 'M1: P(Y ≥ 2) = 1 − P(Y ≤ 1). M1: накопленная вероятность для n = 12 и p = 0,05 (функция биномиальной накопленной вероятности на калькуляторе или 1 − P(Y = 0) − P(Y = 1)). A1: 0,118 (с точностью до 3 знаков).',
    },
    answer: '0.118',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-8-03',
    subject: 'math',
    topicIds: ['4-8-binomial'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bottling plant in Dubai fills 1.5 litre bottles. Each bottle is faulty independently of the others, with probability 0.04. Bottles are packed in crates of 20. Let $X$ be the number of faulty bottles in one crate. Give all probabilities correct to 3 decimal places.\n\n(a) Show that $X$ can be modelled by $\\text{B}(20, 0.04)$, giving two conditions that justify the model. [3]\n\n(b) Find $E(X)$ and $\\text{Var}(X)$. [2]\n\n(c) Find the probability that a crate contains exactly 2 faulty bottles, and the probability that it contains at least one faulty bottle. [4]\n\n(d) A sample of $n$ bottles is chosen at random from the plant. Find the least value of $n$ such that the probability that the sample contains at least one faulty bottle is greater than 0.95. [3]\n\n(e) One crate is found to contain 3 faulty bottles. Find $P(X \\ge 3)$ and comment on whether this is evidence that the fault rate is higher than 0.04. [2]',
      ru: 'Завод в Дубае разливает напитки в бутылки по 1,5 литра. Каждая бутылка независимо от других оказывается бракованной с вероятностью 0,04. Бутылки упаковывают в ящики по 20 штук. Пусть $X$ — число бракованных бутылок в одном ящике. Все вероятности давайте с точностью до 3 знаков после запятой.\n\n(a) Покажите, что $X$ можно описать распределением $\\text{B}(20, 0{,}04)$, указав два условия, которые обосновывают модель. [3]\n\n(b) Найдите $E(X)$ и $\\text{Var}(X)$. [2]\n\n(c) Найдите вероятность того, что в ящике ровно 2 бракованные бутылки, и вероятность того, что в нём есть хотя бы одна бракованная бутылка. [4]\n\n(d) Из продукции завода наугад выбирают выборку из $n$ бутылок. Найдите наименьшее значение $n$, при котором вероятность того, что в выборке есть хотя бы одна бракованная бутылка, больше 0,95. [3]\n\n(e) В одном ящике нашли 3 бракованные бутылки. Найдите $P(X \\ge 3)$ и прокомментируйте, является ли это доказательством того, что доля брака выше 0,04. [2]',
    },
    markscheme: {
      en: '(a) R1: each bottle is either faulty or not faulty, which gives two outcomes. R1: the bottles are independent and each has the same probability 0.04 of being faulty. A1: n = 20 and p = 0.04, so X ~ B(20, 0.04). AG.\n(b) M1: E(X) = np and Var(X) = np(1 − p) with n = 20 and p = 0.04. A1: E(X) = 0.8 and Var(X) = 0.768.\n(c) M1: P(X = 2) = C(20, 2) × 0.04^2 × 0.96^18 (or the binomial probability function). A1: 0.146 (3 decimal places). M1: P(X ≥ 1) = 1 − P(X = 0) = 1 − 0.96^20 (or 1 − the binomial cumulative function). A1: 0.558 (3 decimal places).\n(d) M1: P(at least one faulty bottle) = 1 − 0.96^n, which must be greater than 0.95. M1: a GDC table of this probability for increasing n, or trial values in the binomial formula. A1: n = 74, because n = 73 gives a probability just below 0.95 and n = 74 gives a probability just above it.\n(e) A1: P(X ≥ 3) = 1 − P(X ≤ 2) = 0.044 (3 decimal places). R1: at a fault rate of 0.04, a crate with 3 or more faulty bottles is not unusual, so one crate is not strong evidence; a larger sample of crates is needed.',
      ru: '(a) R1: каждая бутылка либо бракованная, либо нет, то есть два исхода. R1: бутылки независимы, и у каждой одинаковая вероятность 0,04 быть бракованной. A1: n = 20 и p = 0,04, поэтому X ~ B(20; 0,04). AG.\n(b) M1: E(X) = np и Var(X) = np(1 − p) при n = 20 и p = 0,04. A1: E(X) = 0,8 и Var(X) = 0,768.\n(c) M1: P(X = 2) = C(20, 2) × 0,04^2 × 0,96^18 (или функция биномиальной вероятности). A1: 0,146 (с точностью до 3 знаков). M1: P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,96^20 (или 1 − функция биномиальной накопленной вероятности). A1: 0,558 (с точностью до 3 знаков).\n(d) M1: P(хотя бы одна бракованная бутылка) = 1 − 0,96^n, это должно быть больше 0,95. M1: таблица калькулятора для этой вероятности при возрастающем n или подбор значений по формуле. A1: n = 74, потому что при n = 73 вероятность чуть меньше 0,95, а при n = 74 чуть больше.\n(e) A1: P(X ≥ 3) = 1 − P(X ≤ 2) = 0,044 (с точностью до 3 знаков). R1: при доле брака 0,04 ящик с тремя и более бракованными бутылками не редкость, поэтому один ящик — не сильное доказательство; нужна большая выборка ящиков.',
    },
    answer: '0.8; 0.768; 0.146; 0.558; 74; 0.044',
    origin: 'original',
    minutes: 14,
  },
];
