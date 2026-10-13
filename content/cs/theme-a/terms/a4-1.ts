import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'a4-1-machine-learning',
    term: { en: 'Machine learning (ML)', ru: 'машинное обучение (machine learning, ML)' },
    def: {
      en: 'A subfield of artificial intelligence in which algorithms and statistical models learn patterns from data, so a computer improves at a task without following explicit step-by-step rules.',
      ru: 'Раздел искусственного интеллекта, в котором алгоритмы и статистические модели выявляют закономерности в данных, поэтому компьютер улучшает выполнение задачи, не следуя явно заданным пошаговым правилам.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 237' },
    example: {
      en: 'A spam filter learns from emails that users have marked as spam, instead of relying on a fixed list of banned words.',
      ru: 'Фильтр спама учится на письмах, которые пользователи отметили как спам, вместо того чтобы опираться на фиксированный список запрещённых слов.',
    },
    pitfall: {
      en: 'Machine learning is not a list of IF and THEN rules written by a programmer. The behaviour comes from patterns the model has learned from data.',
      ru: 'Машинное обучение — не список правил «если — то», написанных программистом. Поведение возникает из закономерностей, которые модель выучила на данных.',
    },
  },
  {
    id: 'a4-1-deep-learning',
    term: { en: 'Deep learning (DL)', ru: 'глубокое обучение (deep learning, DL)' },
    def: {
      en: 'A subset of machine learning that uses artificial neural networks with many layers, inspired by the brain, to learn complex features from large amounts of data. The depth is the number of layers.',
      ru: 'Подмножество машинного обучения, которое использует искусственные нейронные сети со многими слоями, вдохновлёнными мозгом, чтобы выделять сложные признаки из больших объёмов данных. Глубина — это число слоёв.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'In an image model, the early layers detect edges, and later layers combine them into shapes and objects.',
      ru: 'В модели для изображений ранние слои распознают края, а более поздние объединяют их в формы и объекты.',
    },
    pitfall: {
      en: 'Deep learning is a subset of machine learning, not a separate field. Every deep model is a machine learning model, but not every machine learning model is deep.',
      ru: 'Глубокое обучение — подмножество машинного обучения, а не отдельная область. Каждая глубокая модель является моделью машинного обучения, но не каждая модель машинного обучения глубокая.',
    },
  },
  {
    id: 'a4-1-supervised',
    term: { en: 'Supervised learning', ru: 'обучение с учителем (supervised learning)' },
    def: {
      en: 'A type of machine learning that learns from a training data set in which every input has a known label, and uses what it learns to predict labels for new, unseen inputs.',
      ru: 'Тип машинного обучения, который учится на обучающем наборе данных, где для каждого входа известна метка, и использует выученное для предсказания меток новых, ранее не виденных входов.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A bank trains a model on past loan applications labelled as repaid or defaulted, then uses it to score new applicants.',
      ru: 'Банк обучает модель на прошлых заявках на кредит с метками «погашен» или «не погашен», а затем оценивает новых заявителей.',
    },
    pitfall: {
      en: 'Supervised learning needs labels. Without labels the task is unsupervised, even when the model itself is complex.',
      ru: 'Обучение с учителем требует меток. Без меток задача относится к обучению без учителя, даже если сама модель сложная.',
    },
  },
  {
    id: 'a4-1-unsupervised',
    term: { en: 'Unsupervised learning', ru: 'обучение без учителя (unsupervised learning)' },
    def: {
      en: 'A type of machine learning that finds structure in input data without labels, most often by grouping similar items (cluster analysis) or by discovering associations between items.',
      ru: 'Тип машинного обучения, который находит структуру во входных данных без меток, чаще всего группируя похожие объекты (кластерный анализ) или выявляя связи между объектами.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A shop groups its customers by buying habits. Nobody labelled the customers in advance, so the algorithm discovers the groups.',
      ru: 'Магазин группирует покупателей по привычкам покупок. Никто заранее не размечал покупателей, поэтому группы выявляет алгоритм.',
    },
    pitfall: {
      en: 'Unsupervised does not mean meaningless output. The groups or rules are discovered, but they still need to be checked and interpreted.',
      ru: 'Обучение без учителя не означает бессмысленный результат: группы или правила выявляются, но их всё равно нужно проверить и интерпретировать.',
    },
  },
  {
    id: 'a4-1-reinforcement',
    term: { en: 'Reinforcement learning (RL)', ru: 'обучение с подкреплением (reinforcement learning, RL)' },
    def: {
      en: 'A type of machine learning in which an agent acts in an environment and receives rewards and penalties. The full definition, with the policy and the cumulative reward, is in A4.3.',
      ru: 'Тип машинного обучения, при котором агент действует в среде и получает награды и штрафы. Полное определение, с политикой и накопленной наградой, дано в разделе A4.3.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A robot vacuum tries different routes around furniture, earns a reward for a clean floor and a penalty for bumping, and gradually prefers the better routes.',
      ru: 'Робот-пылесос пробует разные маршруты вокруг мебели, получает награду за чистый пол и штраф за столкновения и постепенно выбирает лучшие маршруты.',
    },
    pitfall: {
      en: 'A reward is not a label. The agent is never told the correct action and must learn good actions from the results of its own trials.',
      ru: 'Награда — это не метка: агенту никогда не говорят верное действие, он должен выучить хорошие действия по результатам собственных проб.',
    },
  },
  {
    id: 'a4-1-transfer',
    term: { en: 'Transfer learning', ru: 'перенос обучения (transfer learning)' },
    def: {
      en: 'A method in which a model trained on one task is taken as the base for a second, related task and then adapted, usually on a smaller data set.',
      ru: 'Метод, в котором модель, обученная на одной задаче, используется как отправная точка для второй, близкой задачи, и затем адаптируется, обычно на меньшем наборе данных.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A model pre-trained on millions of general photos is retrained on a few hundred photos of a rare plant disease.',
      ru: 'Модель, предобученная на миллионах общих фотографий, дообучается на нескольких сотнях фотографий редкой болезни растений.',
    },
    pitfall: {
      en: 'Transfer learning does not reuse the old training data. It reuses the features the model has already learned as a starting point.',
      ru: 'Перенос обучения не использует старые обучающие данные повторно: он повторно использует признаки, которые модель уже выучила, как отправную точку.',
    },
  },
  {
    id: 'a4-1-classification',
    term: { en: 'Classification', ru: 'классификация (classification)' },
    def: {
      en: 'A supervised learning task in which the model assigns each input to one of a set of predefined categories or classes.',
      ru: 'Задача обучения с учителем, в которой модель относит каждый вход к одной из заранее заданных категорий или классов.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A hospital model labels each scan as normal or abnormal, based on labelled examples of both.',
      ru: 'Модель больницы помечает каждое сканирование как норму или отклонение, опираясь на размеченные примеры того и другого.',
    },
    pitfall: {
      en: 'Classification predicts a category, not a number. If the output is a continuous value, the task is regression.',
      ru: 'Классификация предсказывает категорию, а не число. Если результат — непрерывное значение, это регрессия.',
    },
  },
  {
    id: 'a4-1-regression',
    term: { en: 'Regression', ru: 'регрессия (regression)' },
    def: {
      en: 'A supervised learning task in which the model predicts a continuous numerical value, such as a price, a temperature or a sales figure.',
      ru: 'Задача обучения с учителем, в которой модель предсказывает непрерывное числовое значение, например цену, температуру или объём продаж.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 238' },
    example: {
      en: 'A model predicts next month’s electricity use in kilowatt-hours from past bills and the weather.',
      ru: 'Модель предсказывает потребление электроэнергии в следующем месяце в киловатт-часах по прошлым счетам и погоде.',
    },
    pitfall: {
      en: 'A regression output can take any value in a range, such as 17.4, so it is not a category even when the numbers look like labels.',
      ru: 'Результат регрессии может принимать любое значение в диапазоне, например 17,4, поэтому это не категория, даже если числа похожи на метки.',
    },
  },
  {
    id: 'a4-1-gpu',
    term: { en: 'Graphics processing unit (GPU)', ru: 'графический процессор (graphics processing unit, GPU)' },
    def: {
      en: 'The GPU described in A1.1, used here for its parallel processing, which makes it very effective for training deep learning models.',
      ru: 'Графический процессор из раздела A1.1: параллельная обработка делает его очень эффективным для обучения моделей глубокого обучения.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 249' },
    example: {
      en: 'A dedicated GPU server trains a neural network on a large image set much faster than a standard laptop processor can.',
      ru: 'Выделенный GPU-сервер обучает нейронную сеть на большом наборе изображений заметно быстрее, чем стандартный процессор ноутбука.',
    },
    pitfall: {
      en: 'A GPU is not needed for every project. A small model or a learning exercise runs well on a standard laptop.',
      ru: 'GPU нужен не в каждом проекте: небольшая модель или учебное задание хорошо работает на обычном ноутбуке.',
    },
  },
  {
    id: 'a4-1-edge-computing',
    term: { en: 'Edge computing', ru: 'периферийные вычисления (edge computing)' },
    def: {
      en: 'Running computation close to where the data is produced (for example inside a phone or vehicle), not in a remote data centre, so that tasks needing an immediate response are finished quickly.',
      ru: 'Выполнение вычислений рядом с тем местом, где возникают данные, например в телефоне или автомобиле, а не в удалённом дата-центре, чтобы задачи, требующие немедленного ответа, выполнялись быстро.',
    },
    syllabus: 'A4.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, p. 247' },
    example: {
      en: 'Face unlock on a phone runs its recognition model on the phone itself, so the answer does not wait for a network round trip.',
      ru: 'Разблокировка лица на телефоне запускает модель распознавания на самом телефоне, поэтому ответ не ждёт обмена данными по сети.',
    },
    pitfall: {
      en: 'Edge devices are limited by their own memory, power and processor, so the heaviest training usually happens on more powerful hardware.',
      ru: 'Периферийные устройства ограничены собственной памятью, энергией и процессором, поэтому самое тяжёлое обучение обычно проходит на более мощном оборудовании.',
    },
  },
];
