import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'p2-pair-yd-iw-1',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-into-the-wild'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify one moment in a Yun Dong-ju poem and one moment in Into the Wild where a self is judged or named. For each moment give its location (stanza and line for the poem; chapter for the book) and say what it reveals about the self.',
      ru: 'Укажите один момент в стихотворении Юн Дон Джу и один момент в «Into the Wild», где «я» оценивается или получает имя. Для каждого момента укажите место (строфа и строка для стихотворения; глава для книги) и скажите, что он показывает о «я».',
    },
    markscheme: {
      en: '1 mark: a poem moment with its location, for example Self-Portrait st. 2 l. 2 (the speaker comes to hate the man in the well) or Confession st. 1 l. 3–4 (the face in the mirror is called shameful). 1 mark: a book moment with its chapter, for example the telescope gift and the discovery of the earlier family (chapter 12), or McCandless introducing himself as Alex and then as Alexander Supertramp (chapter 3). 1 mark: says what each moment reveals about the self: in the poem the speaker judges a self he watches; in the book the self names itself and is judged through the family secret that the author reports.',
      ru: '1 балл: момент в стихотворении с местом, например «Автопортрет», строфа 2, строка 2 (говорящий начинает ненавидеть человека у колодца) или «Исповедь», строфа 1, строки 3–4 (лицо в зеркале названо постыдным). 1 балл: момент в книге с главой, например подарок-телескоп и открытие более ранней семьи отца (глава 12) или то, как Маккандлесс представляется Алексом, а затем Александром Супертрэмпом (глава 3). 1 балл: объяснено, что каждый момент показывает о «я»: в стихотворении говорящий судит увиденное в себе «я»; в книге «я» называет себя само и оценивается через семейную тайну, о которой сообщает автор.',
    },
    model: {
      en: 'In Self-Portrait (st. 2, l. 2) the speaker says that somehow he comes to hate the man he sees in the well, and he turns back. The self is judged from outside, as a figure the speaker watches, so the judgement stays inside one voice. In Into the Wild, chapter 12 gives the telescope gift and the discovery that McCandless\'s father had kept an earlier family. The reader learns this through the author\'s account, so the judgement of the father reaches us through McCandless\'s anger. Both moments show a self seen from outside, but the poem judges privately, while the book judges through a family secret that the author reports.',
      ru: 'В «Автопортрете» (строфа 2, строка 2) говорящий признаётся, что почему-то начинает ненавидеть человека, которого видит у колодца, и поворачивает назад. «Я» судит увиденную в себе фигуру снаружи, поэтому суждение остаётся внутри одного голоса. В «Into the Wild» глава 12 рассказывает о подарке-телескопе и об открытии, что у отца Маккандлесса была более ранняя семья. Читатель узнаёт это из рассказа автора, поэтому суждение об отце доходит до нас через гнев Маккандлесса. Оба момента показывают «я», которое видят снаружи, но стихотворение судит приватно, а книга судит через семейную тайну, о которой сообщает автор.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'p2-pair-yd-iw-2',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-into-the-wild'],
    paper: 'P2',
    marks: 5,
    command: 'Analyse',
    prompt: {
      en: 'Analyse how the lyric form and the non-fiction form each present a person through what others say and what the speaker or author chooses to show. Refer to one poem and to Into the Wild.',
      ru: 'Проанализируйте, как лирическая форма и форма нон-фикшна каждая представляет человека через то, что говорят другие, и через то, что говорящий или автор решает показать. Сошлитесь на одно стихотворение и на «Into the Wild».',
    },
    markscheme: {
      en: '1 mark: the lyric form presents a person through the speaker\'s images and address, with a location (for example Counting the Stars at Night st. 4 and st. 6, where the mother is addressed as far away in Buk-Gando). 1 mark: the non-fiction form presents a person through others\' words, with a location (Wayne Westerberg, chapter 3; Ron Franz, chapters 6 and 7). 1 mark: analyses one technique of the poem and its effect on what the reader knows: the apostrophe shows the distance from the mother without describing it. 1 mark: analyses one technique of the book and its effect: the author\'s own climb in chapters 14 and 15, placed beside McCandless\'s journey, lets the reader judge one life against another. 1 mark: states the link: the poem shows a person through one voice that controls what is seen; the book shows a person through several voices that the author selects and frames.',
      ru: '1 балл: лирическая форма представляет человека через образы и обращения говорящего, с местом (например, «Считаю звёзды ночью», строфа 4 и строфа 6: мать обращена как далёкая, в Бук-Гандо). 1 балл: форма нон-фикшна представляет человека через слова других, с местом (Уэйн Вестерберг, глава 3; Рон Франц, главы 6 и 7). 1 балл: разобран один приём стихотворения и его эффект на знание читателя: обращение показывает дистанцию до матери, не описывая её. 1 балл: разобран один приём книги и его эффект: собственное восхождение автора в главах 14 и 15, поставленное рядом с путешествием Маккандлесса, позволяет судить об одной жизни на фоне другой. 1 балл: названа связь: стихотворение показывает человека одним голосом, который управляет видимым; книга показывает его несколькими голосами, которые отбирает и обрамляет автор.',
    },
    model: {
      en: 'The lyric form presents a person through what the speaker chooses to show. In Counting the Stars at Night the speaker addresses his far-away mother in Buk-Gando (st. 6), and the apostrophe shows the distance without describing it. The non-fiction form presents a person through others\' words. In Into the Wild the author interviews Wayne Westerberg (chapter 3) and Ron Franz (chapters 6 and 7), and McCandless\'s own letters let the reader hear him, so the subject comes through several voices. The author also orders the material: his climb in chapters 14 and 15 runs beside the journey. In both forms the reader\'s knowledge is selected, but the poem selects through one voice and the book through many.',
      ru: 'Лирическая форма показывает человека через то, что говорящий решает показать. В «Считаю звёзды ночью» говорящий обращается к матери, которая далеко, в Бук-Гандо (строфа 6), и обращение показывает расстояние, не описывая его. Читатель знает мать только через обращение говорящего. Форма нон-фикшна показывает человека через слова других. В «Into the Wild» автор беседует с Уэйном Вестербергом (глава 3) и Роном Францем (главы 6 и 7), а письма самого Маккандлесса дают услышать его голос, поэтому субъект встречается через несколько голосов. Автор также выбирает порядок: собственное восхождение в главах 14 и 15 идёт рядом с путешествием. В обеих формах знание читателя отбирается, но стихотворение отбирает через один голос, а книга через много.',
    },
    origin: 'original',
    minutes: 12,
  },
  {
    id: 'p2-pair-yd-iw-3',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-into-the-wild'],
    paper: 'P2',
    marks: 5,
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether a chosen road or a given road shapes identity more strongly. Use at least two locations from each work.',
      ru: 'Обсудите, какая дорога сильнее формирует идентичность: выбранная или данная. Используйте не менее двух мест из каждого произведения.',
    },
    markscheme: {
      en: '1 mark: a qualified judgement, for example that the given road shapes the self first, while the chosen road shows what the self does with it. 1 mark: two poem locations, with stanza and line: Prologue st. 2 l. 3–4 (the road that has been given, and the walk on it) and Confession st. 5 (the figure walking alone). 1 mark: two book locations for the chosen road: the letter to Franz (chapters 6 and 7) and the journey without a map (chapter 18). 1 mark: two book locations for the given road: the family\'s hopes with the telescope gift and the earlier family (chapter 12), and the author\'s father\'s wish for a medical career that he did not follow (chapter 15). 1 mark: a conclusion that weighs the two roads against each other and says which shapes identity more, and why.',
      ru: '1 балл: квалифицированное суждение, например: данная дорога сначала формирует «я», а выбранная показывает, что «я» делает с ней. 1 балл: два места из стихотворений со строфой и строкой: «Пролог», строфа 2, строки 3–4 (дорога, которая дана, и путь по ней) и «Исповедь», строфа 5 (фигура, идущая одна). 1 балл: два места в книге для выбранной дороги: письмо Францу (главы 6 и 7) и путешествие без карты (глава 18). 1 балл: два места в книге для данной дороги: ожидания семьи, подарок-телескоп и более ранняя семья отца (глава 12) и желание отца автора, чтобы тот стал врачом, которое он не выполнил (глава 15). 1 балл: вывод, который взвешивает две дороги и говорит, какая формирует идентичность сильнее и почему.',
    },
    model: {
      en: 'Largely, the given road shapes identity more strongly, because in both works the self is formed by what it receives first. In Prologue (st. 2, l. 3–4) the speaker accepts the road that has been given and says he will walk it. In Into the Wild the family\'s hopes and the telescope gift (chapter 12) set the terms McCandless leaves, and the author\'s father wanted him to pursue medicine, a road he did not follow (chapter 15). The chosen road matters too: the letter to Franz (chapters 6 and 7) and the journey without a map (chapter 18) show a self answering for its choice. Yet a chosen road is always a reaction to a given road.',
      ru: 'В значительной мере данная дорога сильнее формирует идентичность, потому что в обоих произведениях «я» складывается из того, что оно получает, прежде чем что-то выбрать. В «Прологе» (строфа 2, строки 3–4) говорящий принимает дорогу, которая дана ему, и обещает идти по ней. В «Into the Wild» надежды семьи и подарок-телескоп (глава 12) задают условия, которые оставляет Маккандлесс, а отец самого автора хотел, чтобы тот стал врачом, — дорогой, по которой он не пошёл (глава 15). Выбранная дорога тоже важна: письмо Францу (главы 6 и 7) и путешествие без карты (глава 18) показывают «я», которое отвечает за свой выбор. Однако выбранная дорога всегда реакция на дорогу, которая была дана.',
    },
    origin: 'original',
    minutes: 12,
  },
];
