import type { Term } from '../../../../src/contract/types';

// Definitions are written in own words from the key-term and table definitions of the textbook (ch. A4.3).
export const terms: Term[] = [
  {
    id: 'a4-3-linear-regression',
    term: { en: 'Linear regression', ru: 'линейная регрессия (linear regression)' },
    def: {
      en: 'A statistical method that fits a straight line through data, so that a continuous dependent (response) value can be predicted from one or more independent (predictor) variables.',
      ru: 'Статистический метод, который проводит прямую линию через данные, чтобы предсказать непрерывную зависимую (отклик) величину по одной или нескольким независимым (предикторным) переменным.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 264' },
    example: {
      en: 'Predicting an exam score, which is a continuous number, from the hours of revision studied.',
      ru: 'Прогноз балла на экзамене, который является непрерывным числом, по количеству часов подготовки.',
    },
    pitfall: {
      en: 'Linear regression predicts a number. If the answer is a category, such as pass or fail, the task is classification, not regression.',
      ru: 'Линейная регрессия предсказывает число. Если ответ — категория, например «сдал» или «не сдал», это задача классификации, а не регрессии.',
    },
  },
  {
    id: 'a4-3-classification-techniques',
    term: { en: 'Classification techniques', ru: 'методы классификации (classification techniques)' },
    def: {
      en: 'Supervised learning algorithms that assign a new item to one of a set of categories (class labels), using its input features and the labelled examples the algorithm learned from.',
      ru: 'Алгоритмы обучения с учителем, которые относят новый объект к одной из заданных категорий (меток класса), опираясь на его признаки и размеченные примеры, на которых алгоритм учился.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 268' },
    example: {
      en: 'A bank model that places a loan application in the category low risk or high risk.',
      ru: 'Модель банка, которая относит заявку на кредит к категории «низкий риск» или «высокий риск».',
    },
    pitfall: {
      en: 'The output is a category, not a number. A classifier that answers high risk does not predict a continuous value.',
      ru: 'Результат — категория, а не число. Классификатор, который отвечает «высокий риск», не предсказывает непрерывную величину.',
    },
  },
  {
    id: 'a4-3-hyperparameter',
    term: { en: 'Hyperparameter', ru: 'гиперпараметр (hyperparameter)' },
    def: {
      en: 'A setting of a learning algorithm that is chosen before training and is not learned from the data, for example the number of neighbours K in K-NN or the maximum depth of a decision tree.',
      ru: 'Настройка алгоритма обучения, которую выбирают до начала обучения и которая не выводится из данных, например число соседей K в K-NN или максимальная глубина дерева решений.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 277' },
    example: {
      en: 'Setting K = 3 in K-NN means that each prediction uses the three nearest training points.',
      ru: 'Выбор K = 3 в K-NN означает, что каждое предсказание опирается на три ближайшие точки обучающих данных.',
    },
    pitfall: {
      en: 'Weights in a neural network are parameters, which training adjusts. Hyperparameters are chosen by the developer, usually by comparing results for several values.',
      ru: 'Веса нейронной сети — это параметры, которые меняет обучение. Гиперпараметры выбирает разработчик, обычно сравнивая результаты для нескольких значений.',
    },
  },
  {
    id: 'a4-3-overfitting',
    term: { en: 'Overfitting', ru: 'переобучение (overfitting)' },
    def: {
      en: 'A model that is fitted so closely to its training data that it learns noise and random details; it scores very well on the training data but poorly on new, unseen data.',
      ru: 'Модель, которая так точно подогнана под обучающие данные, что запоминает шум и случайные детали: на обучающих данных она работает очень хорошо, а на новых, ранее не виденных данных — плохо.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 277' },
    example: {
      en: 'A spam filter that has learned one rare sender name as spam scores perfectly on old emails but misses new spam.',
      ru: 'Фильтр спама, который выучил, что одно редкое имя отправителя означает спам, идеально работает на старых письмах, но пропускает новый спам.',
    },
    pitfall: {
      en: 'A perfect score on training data is a warning sign, not proof of quality. Judge a model on data it has not seen.',
      ru: 'Идеальный результат на обучающих данных — тревожный признак, а не доказательство качества. Оценивайте модель на данных, которых она не видела.',
    },
  },
  {
    id: 'a4-3-precision',
    term: { en: 'Precision', ru: 'точность (precision)' },
    def: {
      en: 'The share of the items predicted as positive that really are positive: true positives divided by all predicted positives (true positives plus false positives).',
      ru: 'Доля объектов, предсказанных как положительные, которые действительно положительны: истинно положительные результаты, делённые на все предсказанные положительные (истинно положительные плюс ложно положительные).',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 276' },
    example: {
      en: 'A spam filter flags 50 emails and 40 of them really are spam, so its precision is 40 / 50 = 80%.',
      ru: 'Фильтр спама пометил 50 писем, и 40 из них действительно являются спамом, значит, его точность равна 40 / 50 = 80 %.',
    },
    pitfall: {
      en: 'Precision divides by predicted positives, not by actual positives. Do not swap it with recall.',
      ru: 'Точность делится на предсказанные положительные результаты, а не на реальные. Не путайте её с полнотой.',
    },
  },
  {
    id: 'a4-3-recall',
    term: { en: 'Recall (sensitivity)', ru: 'полнота (recall, чувствительность)' },
    def: {
      en: 'The share of the real positive cases that the model finds: true positives divided by all actual positives (true positives plus false negatives).',
      ru: 'Доля реальных положительных случаев, которые нашла модель: истинно положительные результаты, делённые на все реальные положительные случаи (истинно положительные плюс ложно отрицательные).',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 276' },
    example: {
      en: 'A screening test finds 40 of the 60 sick patients, so its recall is 40 / 60, about 67%.',
      ru: 'Тест выявил 40 из 60 больных, значит, его полнота равна 40 / 60, около 67 %.',
    },
    pitfall: {
      en: 'A missed case (a false negative) lowers recall but leaves precision unchanged, because precision only counts the items the model flagged.',
      ru: 'Пропущенный случай (ложно отрицательный результат) снижает полноту, но не меняет точность, потому что точность учитывает только объекты, которые модель пометила.',
    },
  },
  {
    id: 'a4-3-clustering',
    term: { en: 'Clustering', ru: 'кластеризация (clustering)' },
    def: {
      en: 'Unsupervised learning that groups unlabelled data points into clusters, so that points in one cluster resemble each other more than they resemble points in other clusters.',
      ru: 'Обучение без учителя: немаркированные точки данных группируются в кластеры так, что точки одного кластера похожи друг на друга сильнее, чем на точки других кластеров.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 279' },
    example: {
      en: 'A shop groups customers by spending and visit frequency, without being given the groups in advance.',
      ru: 'Магазин группирует покупателей по сумме покупок и частоте визитов, не получая групп заранее.',
    },
    pitfall: {
      en: 'The algorithm finds the clusters but does not name them. A person must interpret what each cluster means.',
      ru: 'Алгоритм находит кластеры, но не даёт им названий. Человек должен понять, что означает каждый кластер.',
    },
  },
  {
    id: 'a4-3-association-rule-learning',
    term: { en: 'Association rule learning', ru: 'обучение ассоциативным правилам (association rule learning)' },
    def: {
      en: 'An unsupervised technique that finds rules of the form "if items A occur, items B tend to occur too" in large sets of transactions, judged by support, confidence and lift.',
      ru: 'Метод обучения без учителя, который находит в больших наборах транзакций правила вида «если встречаются товары A, то товары B тоже часто встречаются» и оценивает их поддержкой, достоверностью и лифтом.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 282' },
    example: {
      en: 'A supermarket finds that customers who buy bread often buy butter too, and places the two products close together.',
      ru: 'Супермаркет выясняет, что покупатели, которые берут хлеб, часто берут и масло, и ставит эти товары рядом.',
    },
    pitfall: {
      en: 'A rule shows that items occur together, not that one causes the other. Bread and butter in the same basket does not prove that bread makes people buy butter.',
      ru: 'Правило показывает совместную встречаемость, а не причину. Хлеб и масло в одной корзине не доказывают, что хлеб заставляет покупать масло.',
    },
  },
  {
    id: 'a4-3-reinforcement-learning',
    term: { en: 'Reinforcement learning (RL)', ru: 'обучение с подкреплением (reinforcement learning, RL)' },
    def: {
      en: 'A type of machine learning in which an agent learns a policy by acting in an environment, receiving rewards or penalties after its actions, and aiming to maximise its total (cumulative) reward.',
      ru: 'Вид машинного обучения, в котором агент вырабатывает стратегию, действуя в среде, получая награды или штрафы за свои действия и стремясь к максимальной суммарной (накопленной) награде.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 285' },
    example: {
      en: 'A game-playing program plays many games, gets a reward for winning and a penalty for losing, and gradually improves its moves.',
      ru: 'Программа для игры проводит множество партий, получает награду за победу и штраф за поражение и постепенно улучшает свои ходы.',
    },
    pitfall: {
      en: 'There is no answer key. The agent learns from rewards that follow its actions, not from labelled correct answers.',
      ru: 'Готовых правильных ответов нет. Агент учится на наградах, которые следуют за его действиями, а не на размеченных верных ответах.',
    },
  },
  {
    id: 'a4-3-genetic-algorithm',
    term: { en: 'Genetic algorithm (GA)', ru: 'генетический алгоритм (genetic algorithm, GA)' },
    def: {
      en: 'An optimisation technique that improves a population of candidate solutions over generations, using a fitness function, selection, crossover and mutation, inspired by natural selection.',
      ru: 'Метод оптимизации, который улучшает популяцию возможных решений от поколения к поколению с помощью функции приспособленности, отбора, скрещивания и мутации; метод вдохновлён естественным отбором.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 288' },
    example: {
      en: 'A company plans delivery routes with a GA: routes with a shorter total distance have a higher fitness and are more likely to pass into the next generation.',
      ru: 'Компания планирует маршруты доставки с помощью генетического алгоритма: маршруты с меньшей общей длиной имеют более высокую приспособленность и чаще переходят в следующее поколение.',
    },
    pitfall: {
      en: 'The fitness function defines what counts as a good solution. If it measures the wrong thing, the algorithm improves the wrong thing.',
      ru: 'Функция приспособленности определяет, что считается хорошим решением. Если она измеряет не то, алгоритм улучшает не то.',
    },
  },
  {
    id: 'a4-3-ann',
    term: { en: 'Artificial neural network (ANN)', ru: 'искусственная нейронная сеть (artificial neural network, ANN)' },
    def: {
      en: 'A computational model made of layers of connected nodes (perceptrons). Each node multiplies its inputs by weights, adds a bias and passes the result through an activation function; training adjusts the weights.',
      ru: 'Вычислительная модель из слоёв соединённых узлов (перцептронов). Каждый узел умножает входы на веса, добавляет смещение и пропускает результат через функцию активации; обучение меняет веса.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 292' },
    example: {
      en: 'A network that rates a film from an action score and a humour score, with hidden nodes between the inputs and the final output.',
      ru: 'Сеть, которая оценивает фильм по баллам за экшен и юмор; скрытые узлы стоят между входами и итоговым выходом.',
    },
    pitfall: {
      en: 'A link is the pathway between two nodes, and a weight is the value attached to that link. They are different things.',
      ru: 'Связь — это путь между двумя узлами, а вес — значение, которое относится к этой связи. Это разные понятия.',
    },
  },
  {
    id: 'a4-3-cnn',
    term: { en: 'Convolutional neural network (CNN)', ru: 'свёрточная нейронная сеть (convolutional neural network, CNN)' },
    def: {
      en: 'A deep learning model for grid-like data such as images. Convolutional layers slide learnable filters (kernels) over the input to produce feature maps, pooling layers shrink them, and fully connected layers make the final decision.',
      ru: 'Модель глубокого обучения для данных с сеточной структурой, например изображений. Свёрточные слои проводят обучаемые фильтры (ядра) по входу и создают карты признаков, слои пулинга уменьшают их, а полносвязные слои принимают итоговое решение.',
    },
    syllabus: 'A4.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.3, p. 300' },
    example: {
      en: 'In a cat-or-dog classifier, early filters detect edges and later layers combine them into patterns for ears and fur.',
      ru: 'В классификаторе «кошка или собака» ранние фильтры находят контуры, а поздние слои объединяют их в узоры уха и шерсти.',
    },
    pitfall: {
      en: 'Pooling learns nothing. It only shrinks the feature maps, for example by keeping the largest value in each small window.',
      ru: 'Пулинг ничему не учится. Он только уменьшает карты признаков, например сохраняя наибольшее значение в каждом небольшом окне.',
    },
  },
];
