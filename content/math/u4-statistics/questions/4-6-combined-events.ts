import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-6-01',
    subject: 'math',
    topicIds: ['4-6-combined-events'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'In a group of 40 students, 26 study Chinese, 15 study Spanish, and 9 students study both languages. A student is chosen at random, and each student is equally likely to be chosen. Find the probability that the student studies Chinese or Spanish, or both. Give your answer correct to three decimal places.',
      ru: 'В группе из 40 учеников 26 изучают китайский язык, 15 изучают испанский, а 9 учеников изучают оба языка. Одного ученика выбирают наугад, и каждый ученик равновероятен. Найдите вероятность того, что ученик изучает китайский или испанский язык, либо оба. Ответ дайте с точностью до трёх знаков после запятой.',
    },
    markscheme: {
      en: 'M1: n(C ∪ S) = n(C) + n(S) − n(C ∩ S) = 26 + 15 − 9 = 32. M1: P = 32/40. A1: 0.800 (3 decimal places).',
      ru: 'M1: n(C ∪ S) = n(C) + n(S) − n(C ∩ S) = 26 + 15 − 9 = 32. M1: P = 32/40. A1: 0,800 (с точностью до 3 знаков).',
    },
    answer: '0.800',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-6-02',
    subject: 'math',
    topicIds: ['4-6-combined-events'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A bag contains 5 red counters and 3 blue counters. A counter is chosen at random and its colour is noted. It is then returned to the bag, and a second counter is chosen at random in the same way. Assume that the two choices are independent. Find the probability that both counters are red. Give your answer correct to three decimal places.',
      ru: 'В мешке 5 красных фишек и 3 синих. Фишку выбирают наугад, отмечают её цвет и возвращают в мешок. Затем так же выбирают вторую фишку. Считайте, что два выбора независимы. Найдите вероятность того, что обе фишки красные. Ответ дайте с точностью до трёх знаков после запятой.',
    },
    markscheme: {
      en: 'M1: P(red) = 5/8 for each choice, because the counter is returned. M1: P(both red) = 5/8 × 5/8, using independence. A1: 0.391 (3 decimal places).',
      ru: 'M1: P(красная) = 5/8 при каждом выборе, так как фишка возвращается. M1: P(обе красные) = 5/8 × 5/8, по независимости. A1: 0,391 (с точностью до 3 знаков).',
    },
    answer: '0.391',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-6-03',
    subject: 'math',
    topicIds: ['4-6-combined-events'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bag contains 5 red counters and 3 blue counters. Two counters are chosen at random, one after the other, without replacement. Each counter in the bag is equally likely to be chosen at each choice. Let $R_1$ be the event that the first counter is red, and $R_2$ the event that the second counter is red.\n\n(a) Find $P(R_1 \\cap R_2)$. [3]\n\n(b) Find the probability that at least one of the two counters is red. [3]\n\n(c) Given that the second counter is red, find the probability that the first counter is blue. [3]\n\n(d) Find $P(R_2 \\mid R_1)$. [2]\n\n(e) Find the probability that exactly one of the two counters is red. [3]',
      ru: 'В мешке 5 красных фишек и 3 синих. Две фишки выбирают наугад одну за другой, без возвращения. При каждом выборе любая фишка в мешке равновероятна. Пусть $R_1$ — событие «первая фишка красная», а $R_2$ — событие «вторая фишка красная».\n\n(a) Найдите $P(R_1 \\cap R_2)$. [3]\n\n(b) Найдите вероятность того, что хотя бы одна из двух фишек красная. [3]\n\n(c) Известно, что вторая фишка красная. Найдите вероятность того, что первая фишка синяя. [3]\n\n(d) Найдите $P(R_2 \\mid R_1)$. [2]\n\n(e) Найдите вероятность того, что ровно одна из двух фишек красная. [3]',
    },
    markscheme: {
      en: '(a) M1: first branch 5/8, then 4/7 for a second red counter. M1: P(R1 ∩ R2) = 5/8 × 4/7 = 20/56. A1: 0.357 (3 decimal places).\n(b) M1: P(at least one red) = 1 − P(both blue) = 1 − 3/8 × 2/7. M1: = 1 − 6/56 = 50/56. A1: 0.893 (3 decimal places).\n(c) M1: P(blue first and red second) = 3/8 × 5/7 = 15/56, and P(R2) = 20/56 + 15/56 = 35/56. M1: P(first blue | second red) = (15/56)/(35/56). A1: 0.429 (3 decimal places).\n(d) M1: after one red counter is removed, 4 red and 3 blue remain. A1: P(R2 | R1) = 4/7 = 0.571 (3 decimal places).\n(e) M1: P(exactly one red) = 5/8 × 3/7 + 3/8 × 5/7. M1: = 15/56 + 15/56 = 30/56. A1: 0.536 (3 decimal places).',
      ru: '(a) M1: первая ветвь 5/8, затем 4/7 для второй красной фишки. M1: P(R1 ∩ R2) = 5/8 × 4/7 = 20/56. A1: 0,357 (с точностью до 3 знаков).\n(b) M1: P(хотя бы одна красная) = 1 − P(обе синие) = 1 − 3/8 × 2/7. M1: = 1 − 6/56 = 50/56. A1: 0,893 (с точностью до 3 знаков).\n(c) M1: P(первая синяя и вторая красная) = 3/8 × 5/7 = 15/56, и P(R2) = 20/56 + 15/56 = 35/56. M1: P(первая синяя | вторая красная) = (15/56)/(35/56). A1: 0,429 (с точностью до 3 знаков).\n(d) M1: после извлечения одной красной фишки остаются 4 красные и 3 синие. A1: P(R2 | R1) = 4/7 = 0,571 (с точностью до 3 знаков).\n(e) M1: P(ровно одна красная) = 5/8 × 3/7 + 3/8 × 5/7. M1: = 15/56 + 15/56 = 30/56. A1: 0,536 (с точностью до 3 знаков).',
    },
    answer: '0.357; 0.893; 0.429; 0.571; 0.536',
    origin: 'original',
    minutes: 14,
  },
];
