import type { Term } from '../../../../src/contract/types';

// Terms of the 2027 case study (section B). The case booklet is the school's file: the definitions are our own
// words, with the booklet page and line numbers. Textbook terms cite the Oxford 2025 companion.
const CASE = 'Case study 2027 booklet: Generative AI for image creation — a diffuse vision';
const TEXTBOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'p1-case-image-generation',
    term: { en: 'Image generation', ru: 'генерация изображений (image generation)' },
    def: {
      en: 'Creating a new picture with a generative AI model, which learns patterns from its training data and then outputs an image that did not exist before.',
      ru: 'Создание нового изображения генеративной моделью ИИ: модель выучивает закономерности из обучающих данных и выдаёт картинку, которой раньше не было.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 3, lines 15–18' },
    example: {
      en: 'A studio asks a model for a new background for a poster, and the model creates one from its learned patterns.',
      ru: 'Студия просит модель создать новый фон для постера, и модель создаёт его на основе выученных закономерностей.',
    },
  },
  {
    id: 'p1-case-text-to-image',
    term: { en: 'Text-to-image generation', ru: 'генерация по тексту (text-to-image generation)' },
    def: {
      en: 'Generating an image from a textual prompt, so a detailed description becomes a visual output.',
      ru: 'Создание изображения по текстовому запросу (промпту): подробное описание превращается в визуальный результат.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 3, lines 20–22' },
    example: {
      en: 'A designer types "a red bicycle in a snowy street, in watercolour style" and receives several images that match the prompt.',
      ru: 'Дизайнер вводит «красный велосипед на заснеженной улице, в стиле акварели» и получает несколько изображений, соответствующих запросу.',
    },
  },
  {
    id: 'p1-case-conditional-generation',
    term: { en: 'Conditional image generation', ru: 'условная генерация изображений (conditional image generation)' },
    def: {
      en: 'Generation controlled by a given input, such as a class label, a sketch or a segmentation map, so the output follows a predefined goal or style.',
      ru: 'Генерация, которой управляет заданный вход — метка класса, эскиз или карта сегментации, — поэтому результат следует заранее заданной цели или стилю.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 3, lines 22–25' },
    example: {
      en: 'A class-conditional model given the label "landscape" produces landscapes only, not portraits.',
      ru: 'Модель, которой задана метка класса «пейзаж», создаёт только пейзажи, а не портреты.',
    },
  },
  {
    id: 'p1-case-segmentation-map',
    term: { en: 'Segmentation map', ru: 'карта сегментации (segmentation map)' },
    def: {
      en: 'An image in which every pixel or region is labelled with the class it belongs to, such as sky, road or car. It shows a conditional model where each object should go.',
      ru: 'Изображение, в котором каждый пиксель или участок отмечен классом, которому он принадлежит, например небом, дорогой или автомобилем. Такая карта показывает условной модели, где должен быть каждый объект.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 3, lines 24–25' },
    example: {
      en: 'A map that marks a sky region above a road region tells the model to paint the sky above the road.',
      ru: 'Карта, где область неба находится над областью дороги, подсказывает модели, что небо нужно нарисовать над дорогой.',
    },
  },
  {
    id: 'p1-case-unconditional-generation',
    term: { en: 'Unconditional image generation', ru: 'безусловная генерация изображений (unconditional image generation)' },
    def: {
      en: 'Generation with no predefined input: the model produces images from patterns it learned from its training data.',
      ru: 'Генерация без заданного входа: модель создаёт изображения по закономерностям, которые выучила на обучающих данных.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 4, lines 30–34' },
    example: {
      en: 'A model trained on many landscape photographs creates new landscapes for an abstract art project, without any prompt.',
      ru: 'Модель, обученная на множестве фотографий пейзажей, создаёт новые пейзажи для проекта абстрактного искусства без какого-либо запроса.',
    },
  },
  {
    id: 'p1-case-image-to-image',
    term: { en: 'Image-to-image translation', ru: 'перевод изображения в изображение (image-to-image translation)' },
    def: {
      en: 'A conditional task that transforms one type of image into another, such as a sketch into a realistic rendering.',
      ru: 'Условная задача, которая превращает изображение одного типа в изображение другого типа, например эскиз в реалистичный рендер.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 3, lines 26–27' },
    example: {
      en: 'A black-and-white photograph is turned into a colour version of the same scene.',
      ru: 'Чёрно-белая фотография превращается в цветную версию той же сцены.',
    },
  },
  {
    id: 'p1-case-noise-injection',
    term: { en: 'Noise injection', ru: 'внедрение шума (noise injection)' },
    def: {
      en: 'Adding random noise at the start of image generation; the model then refines that noise over several steps into a coherent image.',
      ru: 'Добавление случайного шума как отправной точки генерации: затем модель за несколько шагов уточняет этот шум в связное изображение.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 4, lines 36–38' },
    example: {
      en: 'A diffusion model starts from an image made only of random coloured pixels and refines it over several steps.',
      ru: 'Диффузионная модель начинает с изображения из одних случайных цветных пикселей и уточняет его за несколько шагов.',
    },
  },
  {
    id: 'p1-case-denoising',
    term: { en: 'Denoising', ru: 'шумоподавление (denoising)' },
    def: {
      en: 'Removing part of the noise from an image at each step, so the image becomes clearer. A diffusion model repeats this step many times.',
      ru: 'Удаление части шума с изображения на каждом шаге, поэтому изображение становится чётче. Диффузионная модель повторяет этот шаг много раз.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 4, lines 35–46 and Figure 1' },
    example: {
      en: 'In Figure 1 of the case booklet, each of eight denoising steps makes the picture a little clearer.',
      ru: 'На рисунке 1 в кейсе каждый из восьми шагов шумоподавления делает картинку немного чётче.',
    },
    pitfall: {
      en: 'Denoising does not copy a training image back. It removes noise according to patterns learned during training, so each result is new.',
      ru: 'Шумоподавление не возвращает обучающее изображение. Оно убирает шум по закономерностям, выученным при обучении, поэтому каждый результат новый.',
    },
  },
  {
    id: 'p1-case-diffusion-model',
    term: { en: 'Diffusion model', ru: 'диффузионная модель (diffusion model)' },
    def: {
      en: 'A generative model that creates an image by starting from noise and removing it step by step with a neural denoiser, guided by patterns learned from its training dataset.',
      ru: 'Генеративная модель, которая создаёт изображение, начиная с шума и убирая его шаг за шагом с помощью нейросети-денойзера; она опирается на закономерности из обучающего набора данных.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 4, lines 35–46' },
    example: {
      en: 'A studio generates a new street scene from noise, and its style depends on the photographs the model was trained on.',
      ru: 'Студия создаёт новую уличную сцену из шума, и её стиль зависит от фотографий, на которых училась модель.',
    },
    pitfall: {
      en: 'Diffusion models create new images, but their iterative process needs significant computational resources. This cost is a key practical limit.',
      ru: 'Диффузионные модели создают новые изображения, но их итеративный процесс требует значительных вычислительных ресурсов. Эта стоимость — важное практическое ограничение.',
    },
  },
  {
    id: 'p1-case-ddpm',
    term: {
      en: 'Denoising diffusion probabilistic model (DDPM)',
      ru: 'вероятностная диффузионная модель с шумоподавлением (denoising diffusion probabilistic model, DDPM)',
    },
    def: {
      en: 'The formal model behind modern diffusion models. It describes gradually adding noise during training and gradually removing it during generation.',
      ru: 'Формальная модель, на которой основаны современные диффузионные модели: она описывает постепенное добавление шума при обучении и постепенное удаление шума при генерации.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 4, after Figure 1' },
    example: {
      en: 'A model trained with DDPM learns to undo small amounts of noise added to training images, and then uses that skill to build new images.',
      ru: 'Модель, обученная по DDPM, учится убирать небольшие порции шума, добавленные к обучающим изображениям, и затем использует этот навык для создания новых изображений.',
    },
  },
  {
    id: 'p1-case-cnn',
    term: { en: 'Convolutional neural network (CNN)', ru: 'свёрточная нейронная сеть (convolutional neural network, CNN)' },
    def: {
      en: 'A type of deep learning algorithm optimised for finding patterns in images and in other data with a grid-like structure, such as satellite imagery or audio spectrograms.',
      ru: 'Вид алгоритма глубокого обучения, который оптимизирован для поиска закономерностей в изображениях и других данных с сеточной структурой, например в спутниковых снимках или аудиоспектрограммах.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'textbook', title: TEXTBOOK, locator: 'ch. A4.3, p. 300' },
    example: {
      en: 'The denoiser inside a diffusion model is typically a CNN, which looks for local patterns such as edges and textures in each image.',
      ru: 'Денойзер внутри диффузионной модели обычно представляет собой CNN, которая ищет в каждом изображении локальные закономерности, например контуры и текстуры.',
    },
  },
  {
    id: 'p1-case-dataset-curation',
    term: { en: 'Dataset curation', ru: 'кураторство набора данных (dataset curation)' },
    def: {
      en: 'Selecting, checking and documenting training data so that it excludes material the organisation has no right to use and fits the purpose of the model.',
      ru: 'Отбор, проверка и документирование обучающих данных: в наборе не должно быть материалов, которые нельзя использовать, и он должен соответствовать назначению модели.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 98–100' },
    example: {
      en: 'A studio removes images with unclear licences from its training set and records the source of every image it keeps.',
      ru: 'Студия удаляет из обучающего набора изображения с неясной лицензией и записывает источник каждого оставленного изображения.',
    },
  },
  {
    id: 'p1-case-bias-mitigation',
    term: { en: 'Bias mitigation', ru: 'снижение предвзятости (bias mitigation)' },
    def: {
      en: 'Steps that reduce unfair bias in a model, usually by checking the dataset for gaps and by testing outputs for groups that are under-represented.',
      ru: 'Меры, которые снижают несправедливую предвзятость модели: обычно это проверка набора данных на пробелы и тестирование результатов для недопредставленных групп.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 7, lines 111–112' },
    example: {
      en: 'Before training, a team adds more photographs of older people to a dataset that is mostly young adults, then checks the outputs for age balance.',
      ru: 'Перед обучением команда добавляет больше фотографий пожилых людей в набор, где в основном молодые взрослые, и затем проверяет результаты на баланс по возрасту.',
    },
  },
  {
    id: 'p1-case-character-consistency',
    term: { en: 'Character consistency', ru: 'согласованность персонажа (character consistency)' },
    def: {
      en: 'The ability of a model to draw the same recurring character or motif with a uniform appearance across several images.',
      ru: 'Способность модели рисовать одного и того же повторяющегося персонажа или мотив с единым внешним видом на нескольких изображениях.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 89–91' },
    example: {
      en: 'A campaign mascot keeps the same face, clothes and colours in all twelve posters.',
      ru: 'Талисман кампании сохраняет одинаковые лицо, одежду и цвета на всех двенадцати плакатах.',
    },
  },
  {
    id: 'p1-case-embedding-approach',
    term: { en: 'Embedding-based approach', ru: 'подход на основе эмбеддингов (embedding-based approach)' },
    def: {
      en: 'A method that represents items, such as images or characters, as vectors (embeddings), so that similar items lie close together and can be compared.',
      ru: 'Метод, который представляет объекты, например изображения или персонажей, в виде векторов (эмбеддингов), так что похожие объекты находятся рядом и их можно сравнивать.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 92–93' },
    example: {
      en: 'Each generated portrait of one character is turned into an embedding; outputs whose embeddings sit far from the rest are flagged for review.',
      ru: 'Каждый сгенерированный портрет одного персонажа превращается в эмбеддинг; результаты, эмбеддинги которых далеко от остальных, отмечаются для проверки.',
    },
  },
  {
    id: 'p1-case-training-stability',
    term: { en: 'Training stability', ru: 'стабильность обучения (training stability)' },
    def: {
      en: 'How reliably a model learns during training. Unstable training can produce repetitive or poor outputs or fail to improve. More reliable training often takes longer and needs more computing.',
      ru: 'Насколько надёжно модель обучается. Нестабильное обучение может давать повторяющиеся или плохие изображения или вовсе не улучшаться. Более надёжное обучение часто занимает больше времени и требует больше вычислений.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 83–86' },
    example: {
      en: 'A model whose training loss swings up and down for thousands of steps without better images shows poor training stability.',
      ru: 'Модель, у которой функция потерь колеблется тысячи шагов без улучшения изображений, показывает слабую стабильность обучения.',
    },
  },
  {
    id: 'p1-case-gan',
    term: {
      en: 'Generative adversarial network (GAN)',
      ru: 'генеративно-состязательная сеть (generative adversarial network, GAN)',
    },
    def: {
      en: 'A generative model made of two neural networks, a generator and a discriminator, trained against each other so that generated images become realistic. Higher level only.',
      ru: 'Генеративная модель из двух нейросетей — генератора и дискриминатора, которые обучаются в состязании, чтобы создаваемые изображения становились реалистичными. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 48–59' },
    example: {
      en: 'A generator turns a noise vector into a picture of a car, and a discriminator decides whether the picture looks like a real car from the dataset.',
      ru: 'Генератор превращает вектор шума в изображение автомобиля, а дискриминатор решает, похоже ли оно на настоящий автомобиль из набора.',
    },
  },
  {
    id: 'p1-case-generator',
    term: { en: 'Generator', ru: 'генератор (generator)' },
    def: {
      en: 'The network in a GAN that transforms a noise vector into a synthetic image and learns to fool the discriminator. Higher level only.',
      ru: 'Сеть в GAN, которая превращает вектор шума в синтетическое изображение и учится обманывать дискриминатор. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 49–52' },
    example: {
      en: 'Each new round, the generator improves its fake faces, because a better fake is one the discriminator accepts as real.',
      ru: 'С каждым раундом генератор улучшает поддельные лица, потому что лучшая подделка — та, которую дискриминатор принимает за настоящую.',
    },
  },
  {
    id: 'p1-case-discriminator',
    term: { en: 'Discriminator', ru: 'дискриминатор (discriminator)' },
    def: {
      en: 'The network in a GAN that compares generated images with genuine examples from its training set and tries to tell them apart. Higher level only.',
      ru: 'Сеть в GAN, которая сравнивает созданные изображения с реальными изображениями из обучающего набора и пытается их различить. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 50–53' },
    example: {
      en: 'The discriminator labels a fake image as fake, and this feedback pushes the generator to improve.',
      ru: 'Дискриминатор помечает поддельное изображение как поддельное, и эта обратная связь заставляет генератор улучшаться.',
    },
  },
  {
    id: 'p1-case-noise-vector',
    term: { en: 'D-dimensional noise vector', ru: 'D-мерный вектор шума (D-dimensional noise vector)' },
    def: {
      en: 'A list of D random numbers that a generator takes as its input. A different vector gives a different image. Higher level only.',
      ru: 'Список из D случайных чисел, который генератор получает на входе; другой вектор даёт другое изображение. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 49–51' },
    example: {
      en: 'A vector of 100 random numbers is passed to the generator; a different vector of 100 numbers gives a different image.',
      ru: 'Вектор из 100 случайных чисел передаётся генератору; другой вектор из 100 чисел даёт другое изображение.',
    },
  },
  {
    id: 'p1-case-adversarial-dynamic',
    term: { en: 'Adversarial dynamic', ru: 'состязательная динамика (adversarial dynamic)' },
    def: {
      en: 'The competition between generator and discriminator, in which each improves against the other. This pushes the generator towards sharp, high-quality images. Higher level only.',
      ru: 'Состязание генератора и дискриминатора, в котором каждый улучшается в ответ на другого. Это подталкивает генератор к чётким качественным изображениям. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 55–56' },
    example: {
      en: 'Each time the discriminator spots a fake, the generator changes its output so that it passes the check in the next round.',
      ru: 'Каждый раз, когда дискриминатор замечает подделку, генератор меняет результат, чтобы пройти проверку в следующем раунде.',
    },
  },
  {
    id: 'p1-case-mode-collapse',
    term: { en: 'Mode collapse', ru: 'коллапс мод (mode collapse)' },
    def: {
      en: 'A GAN training failure in which the generator produces only a limited set of variations instead of covering all the kinds of images in the training data. Higher level only.',
      ru: 'Сбой обучения GAN, при котором генератор создаёт лишь ограниченный набор вариантов вместо всего разнообразия набора данных. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 56–58' },
    example: {
      en: 'A GAN trained on photos of many kinds of cars keeps producing almost the same red saloon, so the output shows little variety.',
      ru: 'GAN, обученный на фотографиях разных автомобилей, почти каждый раз выдаёт один и тот же красный седан, то есть вариантов почти нет.',
    },
    pitfall: {
      en: 'Mode collapse is not the same as a blurry image. The outputs can look sharp and still be repetitive.',
      ru: 'Коллапс мод — не то же самое, что размытое изображение. Результаты могут быть чёткими и при этом повторяться.',
    },
  },
  {
    id: 'p1-case-hybrid-model',
    term: { en: 'Hybrid model', ru: 'гибридная модель (hybrid model)' },
    def: {
      en: 'A system that combines different types of generative models, such as diffusion models, GANs, VAEs and flow-based models, to overcome the limits of any single approach. Higher level only.',
      ru: 'Система, которая сочетает разные типы генеративных моделей, например VAE, потоковые модели, GAN и диффузионные модели, чтобы преодолеть ограничения каждого подхода. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 60–62' },
    example: {
      en: 'A studio uses a VAE to explore design variations, then a diffusion step to add photorealistic detail to the variant it chooses.',
      ru: 'Студия использует VAE, чтобы исследовать варианты дизайна, а затем диффузионный шаг, чтобы добавить фотореалистичные детали выбранному варианту.',
    },
  },
  {
    id: 'p1-case-vae',
    term: { en: 'Variational autoencoder (VAE)', ru: 'вариационный автокодировщик (variational autoencoder, VAE)' },
    def: {
      en: 'A generative model that encodes images as points in a latent space: a compact map of the data in which similar images sit near each other. Higher level only.',
      ru: 'Генеративная модель, которая учится представлять изображения в латентном пространстве — сжатом и упорядоченном представлении данных, где похожие изображения лежат близко друг к другу. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 64–66' },
    example: {
      en: 'Moving slightly within the latent space of a VAE gives a new variant of the same design.',
      ru: 'Небольшое смещение в латентном пространстве VAE даёт новый вариант того же дизайна.',
    },
  },
  {
    id: 'p1-case-latent-space',
    term: { en: 'Latent space', ru: 'латентное пространство (latent space)' },
    def: {
      en: 'A compressed, organised representation of data in which each point stands for a possible item, and similar items are placed closer together. Higher level only.',
      ru: 'Сжатое упорядоченное представление данных, где каждая точка соответствует возможному объекту, а похожие объекты расположены ближе друг к другу. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 64–66' },
    example: {
      en: 'Two similar portraits lie near each other in the latent space, so a path between them gives a smooth change from one to the other.',
      ru: 'Два похожих портрета лежат рядом в латентном пространстве, поэтому путь между ними даёт плавный переход от одного к другому.',
    },
  },
  {
    id: 'p1-case-flow-based-model',
    term: { en: 'Flow-based model', ru: 'потоковая модель (flow-based model)' },
    def: {
      en: 'A generative model that learns an invertible transformation between noise and images, so each generated image can be traced back to the noise it came from. Higher level only.',
      ru: 'Генеративная модель, которая выучивает точное обратимое соответствие между случайным шумом и реалистичными изображениями, поэтому каждое изображение можно проследить до его шума. Только для высокого уровня.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 5, lines 69–71' },
    example: {
      en: 'A studio that must show how a delivered image was formed can run the mapping backwards, from the image to its noise input.',
      ru: 'Студия, которой нужно показать, как создано переданное изображение, может пройти соответствие в обратную сторону: от изображения к шуму на входе.',
    },
  },
  {
    id: 'p1-case-scalability',
    term: { en: 'Scalability', ru: 'масштабируемость (scalability)' },
    def: {
      en: 'The ability of a system to handle more users, requests or data by adding resources, without a redesign and without a large drop in speed.',
      ru: 'Способность системы обрабатывать больше пользователей, запросов или данных за счёт добавления ресурсов, без переделки и без заметного падения скорости.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 86–88' },
    example: {
      en: 'A ticket website adds two more servers before a popular concert goes on sale, so it can serve the extra visitors.',
      ru: 'Сайт продажи билетов добавляет два сервера перед продажей билетов на популярный концерт, чтобы обслужить больше посетителей.',
    },
  },
  {
    id: 'p1-case-algorithmic-bias',
    term: { en: 'Algorithmic bias', ru: 'алгоритмическая предвзятость (algorithmic bias)' },
    def: {
      en: 'Systematic unfairness in the results of an algorithm that favours or disadvantages a person or group, often because the training data or the design reflects past prejudice.',
      ru: 'Систематическая несправедливость в результатах алгоритма, которая выгодна или вредит человеку или группе; часто она возникает, когда обучающие данные или решения разработчиков отражают прошлые предубеждения.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'textbook', title: TEXTBOOK, locator: 'ch. A4.4, p. 308' },
    example: {
      en: 'A hiring tool trained on past hiring decisions ranks candidates from one group lower, even when their skills are the same.',
      ru: 'Инструмент отбора, обученный на прошлых решениях о найме, ставит кандидатов одной группы ниже, даже когда их навыки одинаковы.',
    },
  },
  {
    id: 'p1-case-stakeholder',
    term: { en: 'Stakeholder', ru: 'заинтересованная сторона (stakeholder)' },
    def: {
      en: 'A person or group affected by a system or decision, or with an interest in its outcome, such as users, staff, owners or regulators.',
      ru: 'Человек или группа, которых затрагивает система или решение, или которые заинтересованы в его результате, например пользователи, сотрудники, владельцы или регуляторы.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 6, lines 104–105' },
    example: {
      en: 'For a city bus app, the stakeholders include passengers, drivers, the transport authority and the company that builds the app.',
      ru: 'Для приложения городского автобуса заинтересованными сторонами являются пассажиры, водители, транспортное ведомство и компания, которая разрабатывает приложение.',
    },
  },
  {
    id: 'p1-case-trade-off',
    term: { en: 'Trade-off', ru: 'компромисс (trade-off)' },
    def: {
      en: 'A situation where improving one quality of a system, such as speed, reduces another, such as security or cost, so a balance must be chosen.',
      ru: 'Ситуация, когда улучшение одного качества системы, например скорости, ухудшает другое, например безопасность или стоимость, поэтому нужно выбрать баланс.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'school', title: CASE, locator: 'PDF p. 7, lines 116–117' },
    example: {
      en: 'A video app can lower the picture quality to save data on a slow connection: playback starts sooner, but the picture is worse.',
      ru: 'Видеоприложение может снизить качество картинки, чтобы экономить трафик на медленном соединении: воспроизведение начинается быстрее, но картинка хуже.',
    },
  },
];
