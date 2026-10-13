import type { Term } from '../../../../src/contract/types';

// A4.2 Data preprocessing (HL). Definitions are in our own words, based on the textbook's key ideas (ch. A4.2, pp. 251–262).
export const terms: Term[] = [
  {
    id: 'a4-2-data-cleaning',
    term: { en: 'Data cleaning', ru: 'очистка данных (data cleaning)' },
    def: {
      en: 'Making raw data consistent, accurate and free of errors, so that it also meets the legal and regulatory rules that apply to it. This is done before the data is used to train a model.',
      ru: 'Приведение сырых данных к согласованному, точному и безошибочному виду, чтобы они также соответствовали применимым правовым и нормативным требованиям. Это делают до того, как данные используют для обучения модели.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 251' },
    example: {
      en: 'A customer file has an age of -25 and dates written in three formats. Correcting the age after checking the source, and converting every date to YYYY-MM-DD, are both data cleaning.',
      ru: 'В файле клиентов возраст записан как -25, а даты — в трёх форматах. Исправление возраста после проверки источника и приведение всех дат к виду ГГГГ-ММ-ДД — это очистка данных.',
    },
    pitfall: {
      en: 'Cleaning is more than deleting rows. Fixing values, formats and labels is cleaning too.',
      ru: 'Очистка — это не только удаление строк. Исправление значений, форматов и подписей тоже относится к очистке.',
    },
  },
  {
    id: 'a4-2-missing-data',
    term: { en: 'Missing data', ru: 'пропущенные данные (missing data)' },
    def: {
      en: 'Values that are absent from a data set even though they are expected to be there. They can be handled by imputation, by deletion or by predictive modelling.',
      ru: 'Значения, которых нет в наборе данных, хотя по смыслу они там должны быть. Их обрабатывают заполнением (imputation), удалением или предиктивным моделированием (predictive modelling).',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 255' },
    example: {
      en: 'The age field is blank for 3 of 50 customers. Each record should have an age, but the value is not there.',
      ru: 'Поле «возраст» пусто у 3 из 50 клиентов. По смыслу возраст должен быть, но значения нет.',
    },
    pitfall: {
      en: 'Filling every gap with 0 is not handling missing data. Zero is a real value, so it changes the statistics.',
      ru: 'Заполнение всех пропусков нулём — это не обработка пропусков. Ноль — реальное значение, и он меняет статистику.',
    },
  },
  {
    id: 'a4-2-normalization',
    term: { en: 'Normalization (min–max scaling)', ru: 'нормализация (normalization, min–max scaling)' },
    def: {
      en: 'Rescaling a feature to a fixed range, typically 0 to 1 or -1 to 1, by using its minimum and maximum values. Also called min–max scaling.',
      ru: 'Пересчёт признака в фиксированный диапазон, обычно от 0 до 1 или от -1 до 1, по его минимальному и максимальному значениям. Также называется min–max scaling.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 255' },
    example: {
      en: 'Incomes from 20 to 100 (thousands) are rescaled so that 20 becomes 0, 100 becomes 1 and 40 becomes 0.25.',
      ru: 'Доходы от 20 до 100 (тысяч) пересчитывают так, что 20 становится 0, 100 — 1, а 40 — 0,25.',
    },
    pitfall: {
      en: 'One extreme value stretches the range, so all the other values are squeezed into a small interval.',
      ru: 'Одно крайнее значение растягивает диапазон, и все остальные значения сжимаются в маленький интервал.',
    },
  },
  {
    id: 'a4-2-standardization',
    term: { en: 'Standardization (Z-score normalization)', ru: 'стандартизация (standardization, Z-score normalization)' },
    def: {
      en: 'Rescaling a feature so that its mean is 0 and its standard deviation is 1, without forcing the values into a fixed range. Also called Z-score normalization.',
      ru: 'Пересчёт признака так, чтобы его среднее равнялось 0, а стандартное отклонение — 1, без жёсткого ограничения значений заданным диапазоном. Также называется Z-оценкой (Z-score normalization).',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 256' },
    example: {
      en: 'A value equal to the mean becomes 0, and a value one standard deviation above the mean becomes +1.',
      ru: 'Значение, равное среднему, становится 0, а значение на одно стандартное отклонение выше среднего — +1.',
    },
    pitfall: {
      en: 'Standardized values are not bounded. A z-score of 2.5 or -3 is possible and is not an error.',
      ru: 'Стандартизованные значения не ограничены: z-оценка 2,5 или -3 возможна и ошибкой не является.',
    },
  },
  {
    id: 'a4-2-feature-selection',
    term: { en: 'Feature selection', ru: 'отбор признаков (feature selection)' },
    def: {
      en: 'Choosing the most useful attributes of a data set to keep, and removing the ones that are redundant or irrelevant. The aim is to keep the features that give the best performance.',
      ru: 'Выбор наиболее полезных признаков набора данных для сохранения и удаления избыточных или нерелевантных признаков. Цель — оставить признаки, которые дают наилучший результат модели.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 256' },
    example: {
      en: 'In a model that predicts exam scores, the favourite colour of each student is removed because it does not help the prediction.',
      ru: 'В модели, которая предсказывает баллы на экзамене, любимый цвет каждого ученика удаляют, потому что он не помогает прогнозу.',
    },
    pitfall: {
      en: 'Feature selection removes columns and does not change the values in the columns it keeps. Dimensionality reduction usually creates new features.',
      ru: 'Отбор признаков убирает столбцы и не меняет значения в оставшихся. Снижение размерности обычно создаёт новые признаки.',
    },
  },
  {
    id: 'a4-2-filter-method',
    term: { en: 'Filter method', ru: 'фильтрующий метод (filter method)' },
    def: {
      en: 'A feature selection approach that scores each feature with a statistic, such as correlation or mutual information, without training a model. It is fast and is often used first.',
      ru: 'Подход к отбору признаков, при котором каждый признак оценивают статистикой, например корреляцией или взаимной информацией, без обучения модели. Метод быстрый и часто применяется первым.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 257' },
    example: {
      en: 'Hours of revision have a strong correlation with exam scores, so the feature is kept. Shoe size, with a correlation close to zero, is a candidate for removal.',
      ru: 'Часы подготовки сильно коррелируют с баллами, поэтому признак оставляют. Размер обуви с корреляцией, близкой к нулю, — кандидат на удаление.',
    },
    pitfall: {
      en: 'A filter method does not check how a model performs with the features. That is the job of a wrapper method.',
      ru: 'Фильтрующий метод не проверяет, как модель работает с признаками. Это задача обёрточного метода.',
    },
  },
  {
    id: 'a4-2-wrapper-method',
    term: { en: 'Wrapper method', ru: 'обёрточный метод (wrapper method)' },
    def: {
      en: 'A feature selection approach that trains a model on different subsets of features and keeps the subset that performs best. It is accurate for that model but computationally expensive.',
      ru: 'Подход к отбору признаков, при котором модель обучают на разных подмножествах признаков и оставляют тот набор, с которым она работает лучше всего. Точен для данной модели, но требует много вычислений.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 257' },
    example: {
      en: 'Recursive feature elimination starts with all the features, trains the model, removes the least important feature and repeats until the best set remains.',
      ru: 'Рекурсивное исключение признаков (RFE) начинает со всех признаков, обучает модель, убирает наименее важный признак и повторяет шаги, пока не останется лучший набор.',
    },
    pitfall: {
      en: 'A subset that works well for one algorithm may not be the best choice for another, because the result depends on the model.',
      ru: 'Набор признаков, хорошо работающий для одного алгоритма, может не быть лучшим для другого, потому что результат зависит от модели.',
    },
  },
  {
    id: 'a4-2-embedded-method',
    term: { en: 'Embedded method', ru: 'встроенный метод (embedded method)' },
    def: {
      en: 'A feature selection approach built into the training of certain algorithms, where a penalty can shrink the weights of unhelpful features to zero. Lasso regression is an example.',
      ru: 'Подход к отбору признаков, встроенный в обучение некоторых алгоритмов: штраф может сжать веса неполезных признаков до нуля. Примером служит лассо-регрессия (Lasso regression).',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 258' },
    example: {
      en: 'Lasso regression for exam scores gives hours of revision a non-zero weight and gives the favourite colour a weight of zero, so that feature is dropped.',
      ru: 'Лассо-регрессия для баллов даёт часам подготовки ненулевой вес, а любимому цвету — нулевой, поэтому этот признак отбрасывается.',
    },
    pitfall: {
      en: 'Embedded methods depend on the algorithm. Not every model has a built-in selection step.',
      ru: 'Встроенные методы зависят от алгоритма: не у каждой модели есть встроенный шаг отбора признаков.',
    },
  },
  {
    id: 'a4-2-dimensionality-reduction',
    term: { en: 'Dimensionality reduction', ru: 'снижение размерности (dimensionality reduction)' },
    def: {
      en: 'A family of techniques that shrink the feature count of a data set, often by building new features from the original ones, while keeping as much of the useful information as possible.',
      ru: 'Семейство методов, которые уменьшают число признаков набора данных, часто строя новые признаки из исходных, и при этом сохраняют как можно больше полезной информации.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 262' },
    example: {
      en: 'Reducing 100 survey answers to 10 derived features that still capture most of the differences between respondents.',
      ru: 'Сокращение 100 ответов опроса до 10 производных признаков, которые всё ещё отражают большую часть различий между респондентами.',
    },
    pitfall: {
      en: 'Dimensionality reduction is more than deleting columns. Methods such as PCA build new features, which can be harder to interpret.',
      ru: 'Снижение размерности — это не просто удаление столбцов. Методы вроде PCA строят новые признаки, которые труднее интерпретировать.',
    },
  },
  {
    id: 'a4-2-curse-of-dimensionality',
    term: { en: 'Curse of dimensionality', ru: 'проклятие размерности (curse of dimensionality)' },
    def: {
      en: 'A group of problems that appear when a data set has very many dimensions, for example overfitting, sparse data, slow computation and distances that stop being informative.',
      ru: 'Группа проблем, которые возникают, когда у набора данных очень много измерений: переобучение, разреженность данных, медленные вычисления и потеря смысла расстояний.',
    },
    syllabus: 'A4.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, p. 259' },
    example: {
      en: 'A film recommender with five strong features can find similar films. After 500 minor features are added, each film sits far away from the others.',
      ru: 'Рекомендатель фильмов с пятью сильными признаками находит похожие фильмы. После добавления 500 мелких признаков каждый фильм оказывается далеко от остальных.',
    },
    pitfall: {
      en: 'The curse is not only about speed. Sparse data needs far more examples to reach the same reliability.',
      ru: 'Проклятие касается не только скорости. Разреженные данные требуют гораздо больше примеров для той же надёжности.',
    },
  },
];
