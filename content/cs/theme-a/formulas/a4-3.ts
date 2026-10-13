import type { Formula } from '../../../../src/contract/types';

// Formulas follow the textbook (ch. A4.3). The recall denominator is TP + FN, as in the textbook worked example.
export const formulas: Formula[] = [
  {
    id: 'cs-linear-regression',
    tex: 'Y = \\beta_0 + \\beta_1 X + \\varepsilon',
    name: {
      en: 'Simple linear regression equation',
      ru: 'уравнение простой линейной регрессии (simple linear regression equation)',
    },
    meaning: {
      en: 'Y is the dependent (response) variable, X the independent (predictor) variable, β0 the intercept (the predicted Y when X is 0), β1 the slope (the change in Y for each one-unit rise in X) and ε the error term (the part of Y that X does not explain).',
      ru: 'Y — зависимая (отклик) переменная, X — независимая (предикторная) переменная, β0 — свободный член (прогнозируемое Y при X = 0), β1 — наклон (изменение Y при росте X на единицу), ε — ошибка (часть Y, которую X не объясняет).',
    },
    when: {
      en: 'Use it when the outcome is continuous and a straight line describes how it depends on one input.',
      ru: 'Используйте, когда результат непрерывный, а зависимость от одного входа можно описать прямой линией.',
    },
    syllabus: 'A4.3',
    example: {
      en: 'With β0 = 20 and β1 = 5, three hours of revision give a predicted score of 20 + 5 × 3 = 35.',
      ru: 'При β0 = 20 и β1 = 5 три часа подготовки дают прогнозируемый балл 20 + 5 × 3 = 35.',
    },
  },
  {
    id: 'cs-precision',
    tex: '\\text{Precision} = \\frac{TP}{TP + FP}',
    name: { en: 'Precision', ru: 'точность (precision)' },
    meaning: {
      en: 'TP is the number of true positives (correctly predicted positives) and FP the number of false positives (predicted positive but actually negative).',
      ru: 'TP — число истинно положительных результатов (верно предсказанных положительных), FP — число ложно положительных (предсказанных положительными, но таковыми не являющихся).',
    },
    when: {
      en: 'Use it when a false alarm is costly, for example when a genuine email is labelled as spam.',
      ru: 'Используйте, когда ложная тревога обходится дорого, например когда нужное письмо помечено как спам.',
    },
    syllabus: 'A4.3',
    example: {
      en: 'With TP = 40 and FP = 10, precision = 40 / 50 = 80%.',
      ru: 'При TP = 40 и FP = 10 точность равна 40 / 50 = 80 %.',
    },
  },
  {
    id: 'cs-recall',
    tex: '\\text{Recall} = \\frac{TP}{TP + FN}',
    name: { en: 'Recall (sensitivity)', ru: 'полнота (recall, чувствительность)' },
    meaning: {
      en: 'TP is the number of true positives and FN the number of false negatives (actual positives that the model missed).',
      ru: 'TP — число истинно положительных результатов, FN — число ложно отрицательных (реальных положительных случаев, которые модель пропустила).',
    },
    when: {
      en: 'Use it when missing a positive case is costly, for example when a sick patient is not identified.',
      ru: 'Используйте, когда пропуск положительного случая дорого стоит, например когда больной не выявлен.',
    },
    syllabus: 'A4.3',
    example: {
      en: 'With TP = 40 and FN = 20, recall = 40 / 60, about 67%.',
      ru: 'При TP = 40 и FN = 20 полнота равна 40 / 60, около 67 %.',
    },
  },
  {
    id: 'cs-f1-score',
    tex: '\\text{F1 score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
    name: { en: 'F1 score', ru: 'F1-мера (F1 score)' },
    meaning: {
      en: 'The harmonic mean of precision and recall. It is pulled down by whichever of the two is lower, so it is high only when both are high.',
      ru: 'Гармоническое среднее точности и полноты. Оно снижается из-за меньшей из двух величин, поэтому высоко только тогда, когда высоки обе.',
    },
    when: {
      en: 'Use it when one score is needed that weighs precision and recall together, particularly when the classes are unevenly distributed.',
      ru: 'Используйте, когда нужен баланс между точностью и полнотой, особенно если классы распределены неравномерно.',
    },
    syllabus: 'A4.3',
    example: {
      en: 'Precision 0.75 and recall 0.83 give F1 = 2 × (0.75 × 0.83) / (0.75 + 0.83) = 0.79.',
      ru: 'Точность 0.75 и полнота 0.83 дают F1 = 2 × (0.75 × 0.83) / (0.75 + 0.83) = 0.79.',
    },
  },
];
