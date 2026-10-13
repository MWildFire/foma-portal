import type { Question } from '../../../../src/contract/types';

// New questions for A4.3 (the six ported questions are in ported.ts). Numeric answers were checked with python3.
export const questions: Question[] = [
  {
    id: 'a4-3-q01',
    subject: 'cs',
    topicIds: ['a4-3-approaches'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'A bank uses a model to flag card transactions as fraud. Fraud is the positive class. On a test set, the model flags 200 transactions as fraud, and 150 of them really are fraud. The model also misses 30 transactions that are fraud. (a) Calculate the precision of the model. (b) Calculate the recall of the model. (c) Calculate the F1 score of the model. Give each value to 2 decimal places. (d) State which measure the bank should prioritise if missing a fraud costs far more than a false alarm.',
      ru: 'Банк использует модель, которая помечает операции по картам как мошеннические; мошенничество — положительный класс. На тестовой выборке модель пометила 200 операций как мошеннические, из них 150 действительно являются мошенническими. Кроме того, модель пропустила 30 мошеннических операций. (a) Вычислите точность модели. (b) Вычислите полноту модели. (c) Вычислите F1-меру модели. Каждое значение укажите с двумя знаками после запятой. (d) Укажите, какую меру банку важнее повышать, если пропущенное мошенничество обходится гораздо дороже ложной тревоги.',
    },
    markscheme: {
      en: '[1] (a) precision = TP / (TP + FP) = 150 / 200 = 0.75 (accept 75%). [1] (b) recall = TP / (TP + FN) = 150 / (150 + 30) = 150 / 180 = 0.83 (accept 0.8333 or 83%). [1] (c) F1 = 2 × (0.75 × 0.83) / (0.75 + 0.83) = 0.79 (accept 0.79 calculated from the candidate\'s own correct precision and recall). [1] (d) recall, because a missed fraud is a false negative and the bank must find as many frauds as possible.',
      ru: '[1] (a) точность = TP / (TP + FP) = 150 / 200 = 0,75 (принять 75 %). [1] (b) полнота = TP / (TP + FN) = 150 / (150 + 30) = 150 / 180 = 0,83 (принять 0,8333 или 83 %). [1] (c) F1 = 2 × (0,75 × 0,83) / (0,75 + 0,83) = 0,79 (принять 0,79, рассчитанное по собственным верным значениям точности и полноты). [1] (d) полнота: пропущенное мошенничество — это ложно отрицательный результат, а банку нужно находить как можно больше мошеннических операций.',
    },
    answer: '(a) precision = 0.75; (b) recall = 0.83; (c) F1 score = 0.79; (d) recall',
    origin: 'original',
  },
  {
    id: 'a4-3-q02',
    subject: 'cs',
    topicIds: ['a4-3-approaches'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'A shop records ten customer baskets. Bread is in 6 baskets, milk is in 6 baskets, and bread and milk are together in 4 baskets. The shop examines the association rule bread → milk. (a) Calculate the support of the itemset {bread, milk}. (b) Calculate the confidence of the rule bread → milk. (c) Calculate the lift of the rule. Give each value to 2 decimal places. (d) State what a lift above 1 tells the shop.',
      ru: 'Магазин фиксирует десять покупательских корзин. Хлеб есть в 6 корзинах, молоко — в 6, а хлеб и молоко вместе — в 4. Магазин рассматривает ассоциативное правило «хлеб → молоко». (a) Вычислите поддержку набора {хлеб, молоко}. (b) Вычислите достоверность правила «хлеб → молоко». (c) Вычислите лифт правила. Каждое значение укажите с двумя знаками после запятой. (d) Укажите, что лифт больше 1 говорит магазину.',
    },
    markscheme: {
      en: '[1] (a) support = 4 / 10 = 0.40 (accept 40%). [1] (b) confidence = support(bread and milk) / support(bread) = 0.40 / 0.60 = 0.67 (accept 67%). [1] (c) lift = 0.40 / (0.60 × 0.60) = 1.11. [1] (d) bread and milk are bought together more often than they would be if the two items were independent, so the rule shows a positive association that the shop can use for product placement.',
      ru: '[1] (a) поддержка = 4 / 10 = 0,40 (принять 40 %). [1] (b) достоверность = поддержка(хлеб и молоко) / поддержка(хлеб) = 0,40 / 0,60 = 0,67 (принять 67 %). [1] (c) лифт = 0,40 / (0,60 × 0,60) = 1,11. [1] (d) хлеб и молоко покупают вместе чаще, чем при независимой покупке этих товаров, значит, правило показывает положительную связь, которую магазин может использовать при размещении товаров.',
    },
    answer: '(a) support = 0.40; (b) confidence = 0.67; (c) lift = 1.11; (d) positive association: bread and milk are bought together more often than if they were independent',
    origin: 'original',
  },
];
