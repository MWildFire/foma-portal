import type { Term } from '../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'tone',
    term: { en: 'tone', ru: 'тон (tone)' },
    def: {
      en: 'The attitude a writer or speaker takes towards the subject, the audience or the characters, shown through word choice, syntax and imagery.',
      ru: 'Отношение автора или говорящего к предмету, аудитории или персонажам, которое передают выбор слов, синтаксис и образность.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Her letter kept a cold, formal tone, even as it begged for forgiveness.',
      ru: 'Её письмо сохраняло холодный, официальный тон, даже когда умоляло о прощении.',
    },
    pitfall: {
      en: 'Tone is the attitude of the writer, not the feeling the reader gets. That feeling is the mood.',
      ru: 'Тон — это отношение автора, а не чувство читателя. Такое чувство называется настроением (mood).',
    },
  },
  {
    id: 'mood',
    term: { en: 'mood', ru: 'настроение (mood)' },
    def: {
      en: 'The atmosphere or emotional climate that a text creates for the reader, often built through setting, imagery and pace.',
      ru: 'Атмосфера, или эмоциональный фон, который текст создаёт для читателя; её часто строят обстановка, образность и темп.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Rain on the tin roof and a dead streetlamp made the whole night feel heavy and lonely.',
      ru: 'Дождь по жестяной крыше и неработающий фонарь делали всю ночь тяжёлой и одинокой.',
    },
  },
  {
    id: 'imagery',
    term: { en: 'imagery', ru: 'образность (imagery)' },
    def: {
      en: 'Language that appeals to the senses (sight, sound, smell, taste and touch) to create vivid mental pictures. It also means all the figurative images in a text taken together.',
      ru: 'Язык, который обращается к органам чувств (зрению, слуху, обонянию, вкусу и осязанию), чтобы создать яркие мысленные образы. Образностью также называют совокупность всех образных средств текста.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The kitchen smelled of burnt toast and wet wool, and the radio crackled in the corner.',
      ru: 'Кухня пахла подгоревшим тостом и мокрой шерстью, а в углу потрескивало радио.',
    },
  },
  {
    id: 'motif',
    term: { en: 'motif', ru: 'мотив (motif)' },
    def: {
      en: 'A recurring element, such as an image, object, word or idea, that appears several times in a text and helps to develop its theme.',
      ru: 'Повторяющийся элемент (образ, предмет, слово или идея), который встречается в тексте несколько раз и помогает развивать его тему.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The dripping tap appears in every chapter, marking the slow decay of the family.',
      ru: 'Капающий кран появляется в каждой главе, отмечая медленный упадок семьи.',
    },
  },
  {
    id: 'symbol',
    term: { en: 'symbol', ru: 'символ (symbol)' },
    def: {
      en: 'A concrete object, person, colour or image that represents a wider idea or abstract concept beyond its literal meaning.',
      ru: 'Конкретный предмет, человек, цвет или образ, который представляет более широкую идею или абстрактное понятие, выходящее за пределы его буквального значения.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The single white dove above the grave stood for a peace the village had not found.',
      ru: 'Одинокий белый голубь над могилой символизировал мир, которого деревня так и не обрела.',
    },
    pitfall: {
      en: 'Not every object is a symbol: it needs a wider meaning that the text supports. Symbolism is the pattern of such symbols across the whole text.',
      ru: 'Не всякий предмет — символ: у него должен быть более широкий смысл, который подтверждает текст. Символизм (symbolism) — это система таких символов во всём тексте.',
    },
  },
  {
    id: 'symbolism',
    term: { en: 'symbolism', ru: 'символизм (symbolism)' },
    def: {
      en: 'The systematic use of symbols across a text, so that concrete images repeatedly point to wider ideas and build a network of meaning.',
      ru: 'Систематическое использование символов в тексте: конкретные образы раз за разом указывают на более широкие идеи и создают сеть смыслов.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The closed windows, the locked gate and the unlit hall together suggest a family that has shut out the world.',
      ru: 'Закрытые окна, запертые ворота и неосвещённый зал вместе говорят о семье, которая отгородилась от мира.',
    },
  },
  {
    id: 'metaphor',
    term: { en: 'metaphor', ru: 'метафора (metaphor)' },
    def: {
      en: 'A figure of speech that treats one thing as another, asserting the comparison directly, without "like" or "as".',
      ru: 'Фигура речи, которая называет один предмет другим и прямо утверждает сходство, без слов «как» или «словно».',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The classroom was a beehive of whispers before the bell rang.',
      ru: 'Класс был ульем шёпота, пока не прозвенел звонок.',
    },
    pitfall: {
      en: 'Not every comparison is a metaphor. If the sentence uses "like" or "as", it is a simile.',
      ru: 'Не всякое сравнение — метафора. Если в предложении есть «как» или «словно», это сравнение (simile).',
    },
  },
  {
    id: 'simile',
    term: { en: 'simile', ru: 'сравнение (simile)' },
    def: {
      en: 'A comparison of two unlike things that makes the link explicit, usually with "like" or "as".',
      ru: 'Сравнение двух разных вещей, в котором связь выражена явно, обычно словами «как» или «словно».',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The river lay as still as a sheet of glass beneath the bridge.',
      ru: 'Река под мостом лежала неподвижно, как лист стекла.',
    },
  },
  {
    id: 'personification',
    term: { en: 'personification', ru: 'олицетворение (personification)' },
    def: {
      en: 'Giving human qualities, feelings or actions to something that is not human, such as an animal, an object, an idea or the weather.',
      ru: 'Наделение человеческими качествами, чувствами или действиями того, что не является человеком: животного, предмета, идеи или погоды.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The wind pushed impatiently at the door, eager to be let in.',
      ru: 'Ветер нетерпеливо толкался в дверь, рвясь войти.',
    },
  },
  {
    id: 'juxtaposition',
    term: { en: 'juxtaposition', ru: 'сопоставление (juxtaposition)' },
    def: {
      en: 'Placing two contrasting or related elements side by side so that the reader compares them and draws meaning from the link between them.',
      ru: 'Размещение двух контрастных или связанных элементов рядом, чтобы читатель сопоставил их и извлёк смысл из связи между ними.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The ballroom glittered with laughter, while the cellar below held only silence and damp.',
      ru: 'Бальный зал сверкал смехом, а подвал внизу хранил лишь тишину и сырость.',
    },
  },
  {
    id: 'irony',
    term: { en: 'irony', ru: 'ирония (irony)' },
    def: {
      en: 'A gap between what seems to be the case and what is actually the case, or between what is said and what is meant. The two main forms are verbal irony and situational irony.',
      ru: 'Разрыв между тем, что кажется истинным, и тем, что истинно на самом деле, или между сказанным и подразумеваемым. Две основные формы иронии: словесная ирония (verbal irony) и ситуативная ирония (situational irony).',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The host praised the burnt dinner as a triumph while his guests quietly reached for their coats.',
      ru: 'Хозяин хвалил подгоревший ужин как триумф, пока гости тихо тянулись к своим пальто.',
    },
  },
  {
    id: 'verbal-irony',
    term: { en: 'verbal irony', ru: 'словесная ирония (verbal irony)' },
    def: {
      en: 'Irony in which a speaker says one thing but means the opposite or something different. The gap is shown through context, word choice or the reaction of others.',
      ru: 'Ирония, при которой говорящий произносит одно, а имеет в виду противоположное или что-то иное. Разрыв виден из контекста, выбора слов или реакции других.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: '"Lovely weather for a picnic," she said, as the rain soaked through the blanket.',
      ru: '«Какая чудесная погода для пикника», — сказала она, пока дождь промочил плед насквозь.',
    },
    pitfall: {
      en: 'Verbal irony comes from what someone says. When events turn out the opposite of what was expected, the term is situational irony.',
      ru: 'Словесная ирония исходит от сказанного. Если события складываются вопреки ожиданиям, это ситуативная ирония (situational irony).',
    },
  },
  {
    id: 'situational-irony',
    term: { en: 'situational irony', ru: 'ситуативная ирония (situational irony)' },
    def: {
      en: 'Irony in which events turn out to be the opposite of what the characters, or the reader, expect. It comes from the plot, not from what someone says.',
      ru: 'Ирония, при которой события оборачиваются противоположностью тому, чего ждут персонажи или читатель. Она возникает из сюжета, а не из сказанного кем-либо.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The locksmith spent the whole evening locked out of his own house.',
      ru: 'Слесарь весь вечер не мог попасть в собственный дом.',
    },
    pitfall: {
      en: 'Bad luck or a coincidence is not irony by itself. Situational irony needs a clear reversal of what was expected.',
      ru: 'Невезение или простое совпадение само по себе ещё не ирония. Ситуативная ирония требует явного переворота ожиданий.',
    },
  },
  {
    id: 'hyperbole',
    term: { en: 'hyperbole', ru: 'гипербола (hyperbole)' },
    def: {
      en: 'A deliberate and obvious exaggeration, used for effect and not meant to be taken literally.',
      ru: 'Намеренное и очевидное преувеличение, которое используется для эффекта и не предназначено для буквального понимания.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The queue for the new phone reached the moon and came back.',
      ru: 'Очередь за новым телефоном дошла до Луны и вернулась обратно.',
    },
  },
  {
    id: 'understatement',
    term: { en: 'understatement', ru: 'преуменьшение (understatement)' },
    def: {
      en: 'Deliberately presenting something as smaller, weaker or less serious than it really is, often for restraint, humour or a stronger effect.',
      ru: 'Намеренное представление чего-либо меньшим, более слабым или менее серьёзным, чем оно есть на самом деле; часто ради сдержанности, юмора или более сильного эффекта.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'After the flood took the bridge and half the village, the mayor called it a bit of a nuisance.',
      ru: 'После того как наводнение смыло мост и половину деревни, мэр назвал случившееся небольшим неудобством.',
    },
    pitfall: {
      en: 'Litotes is a special kind of understatement that denies the opposite, such as "not bad" for "excellent". Not every understatement uses "not".',
      ru: 'Литота (litotes) — особая форма преуменьшения, которая отрицает противоположное, например «неплохо» вместо «отлично». Не всякое преуменьшение содержит отрицание.',
    },
  },
  {
    id: 'euphemism',
    term: { en: 'euphemism', ru: 'эвфемизм (euphemism)' },
    def: {
      en: 'A milder or indirect word or phrase used in place of a blunt, harsh or unpleasant one, often to soften a painful subject.',
      ru: 'Более мягкое или косвенное слово или выражение, которое используется вместо прямого, резкого или неприятного, часто чтобы смягчить болезненную тему.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The firm described the mass dismissals as a workforce realignment.',
      ru: 'Фирма назвала массовые увольнения «перестройкой кадрового состава».',
    },
  },
  {
    id: 'foreshadowing',
    term: { en: 'foreshadowing', ru: 'предзнаменование (foreshadowing)' },
    def: {
      en: 'Hints or signs early in a text that point to events still to come and prepare the reader for them.',
      ru: 'Намёки или знаки в начале текста, которые предвещают события, ещё не наступившие, и готовят к ним читателя.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The clock in the hall had stopped, and nobody thought to wind it.',
      ru: 'Часы в холле остановились, и никто не подумал их завести.',
    },
  },
  {
    id: 'allusion',
    term: { en: 'allusion', ru: 'аллюзия (allusion)' },
    def: {
      en: 'An indirect reference to a person, event, myth or another text, which the reader is expected to recognise and which adds meaning.',
      ru: 'Косвенная отсылка к человеку, событию, мифу или другому тексту, которую читатель должен узнать и которая обогащает смысл текста.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'He was a Narcissus of the boardroom, admiring his reflection in every glass wall.',
      ru: 'Он был Нарциссом из зала заседаний, любуясь своим отражением в каждой стеклянной стене.',
    },
  },
  {
    id: 'diction',
    term: { en: 'diction', ru: 'выбор слов (diction)' },
    def: {
      en: 'The choice of words in a text, including how precise, formal, colloquial, concrete or abstract they are.',
      ru: 'Выбор слов в тексте, включая то, насколько они точны, формальны, разговорны, конкретны или абстрактны.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The narrator chose the blunt word "slaughter" where a gentler writer would have said "loss".',
      ru: 'Рассказчик выбрал резкое слово «резня» там, где более мягкий автор написал бы «потеря».',
    },
  },
  {
    id: 'syntax',
    term: { en: 'syntax', ru: 'синтаксис (syntax)' },
    def: {
      en: 'The way words, phrases and clauses are arranged into sentences, including sentence length, order and structure, and how this shapes rhythm and meaning.',
      ru: 'Способ построения предложений из слов, словосочетаний и частей предложения, включая их длину, порядок и строение, и то, как это влияет на ритм и смысл.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'He ran past the gate, past the church, past the shuttered shop, and he did not stop.',
      ru: 'Он бежал мимо ворот, мимо церкви, мимо магазина с закрытыми ставнями и не остановился.',
    },
  },
  {
    id: 'register',
    term: { en: 'register', ru: 'регистр (register)' },
    def: {
      en: 'The level of formality and the type of language used in a text, such as formal, informal, technical, colloquial or archaic.',
      ru: 'Уровень формальности и тип языка в тексте, например официальный, неофициальный, технический, разговорный или архаичный.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The letter opened with "Dear Sir or Madam" and closed with a stiff "Yours faithfully".',
      ru: 'Письмо открывалось словами «Уважаемый господин или госпожа» и заканчивалось сухим «С уважением».',
    },
  },
  {
    id: 'connotation',
    term: { en: 'connotation', ru: 'коннотация (connotation)' },
    def: {
      en: 'The emotional, cultural or social associations that a word carries, beyond its literal dictionary meaning.',
      ru: 'Эмоциональные, культурные или социальные ассоциации, которые несёт слово помимо его прямого словарного значения.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Calling the old house quaint, rather than shabby, gives it an affectionate glow.',
      ru: 'Назвав старый дом «живописным», а не «обшарпанным», автор придал ему нежный отблеск.',
    },
    pitfall: {
      en: 'Connotation is what a word suggests. Its literal meaning is the denotation, so the two terms are not synonyms.',
      ru: 'Коннотация — это то, что слово подсказывает. Его буквальный смысл — денотация (denotation), поэтому эти понятия не синонимы.',
    },
  },
  {
    id: 'denotation',
    term: { en: 'denotation', ru: 'денотация (denotation)' },
    def: {
      en: 'The literal, dictionary meaning of a word, without its emotional or cultural associations.',
      ru: 'Прямое, словарное значение слова без его эмоциональных и культурных ассоциаций.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The word "snake" denotes a legless reptile, though readers often hear danger in it.',
      ru: 'Слово «змея» обозначает безногое пресмыкающееся, хотя читатели часто слышат в нём опасность.',
    },
  },
  {
    id: 'paradox',
    term: { en: 'paradox', ru: 'парадокс (paradox)' },
    def: {
      en: 'A statement that seems self-contradictory or impossible at first but reveals a truth when considered more carefully.',
      ru: 'Утверждение, которое сначала кажется противоречивым или невозможным, но при внимательном рассмотрении раскрывает истину.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The only way to escape the room was to stop trying to leave it.',
      ru: 'Единственный способ выйти из комнаты — перестать пытаться из неё выйти.',
    },
    pitfall: {
      en: 'Not every contradiction is a paradox. A paradox must reveal a truth; a plain error or contradiction does not.',
      ru: 'Не всякое противоречие — парадокс. Парадокс должен раскрывать истину; простая ошибка или противоречие этого не делает.',
    },
  },
  {
    id: 'oxymoron',
    term: { en: 'oxymoron', ru: 'оксюморон (oxymoron)' },
    def: {
      en: 'A short phrase that joins two words with opposite meanings, creating a deliberate contradiction.',
      ru: 'Короткое словосочетание, которое соединяет два слова с противоположными значениями и создаёт намеренное противоречие.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The soldiers marched on in a deafening silence.',
      ru: 'Солдаты шли дальше в оглушительной тишине.',
    },
  },
  {
    id: 'allegory',
    term: { en: 'allegory', ru: 'аллегория (allegory)' },
    def: {
      en: 'A story or description in which characters, objects or events stand for ideas or moral truths, so that a second level of meaning runs alongside the literal one.',
      ru: 'Рассказ или описание, в котором персонажи, предметы или события обозначают идеи или нравственные истины, так что второй уровень смысла идёт параллельно буквальному.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'In the story, a village whose wells all run dry stands for a country that has forgotten how to share.',
      ru: 'В рассказе деревня, в которой пересыхают все колодцы, обозначает страну, которая разучилась делиться.',
    },
    pitfall: {
      en: 'An allegory is a whole story with a second meaning throughout. One object standing for one idea is a symbol, not an allegory.',
      ru: 'Аллегория — это целая история, которая на всём протяжении несёт второй смысл. Один предмет, обозначающий одну идею, — это символ, а не аллегория.',
    },
  },
  {
    id: 'theme',
    term: { en: 'theme', ru: 'тема (theme)' },
    def: {
      en: 'A central idea or message that a text explores, expressed as a general statement about life or human experience.',
      ru: 'Центральная идея или мысль, которую исследует текст, выраженная как общее утверждение о жизни или человеческом опыте.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The subject of the novel is war, but its theme is that victory can cost a nation its conscience.',
      ru: 'Предметом романа является война, но его тема — в том, что победа может стоить стране её совести.',
    },
    pitfall: {
      en: 'A theme is a statement, not a topic. "Love" is a topic; the claim that love can turn into control is a theme.',
      ru: 'Тема — это утверждение, а не предмет. «Любовь» — предмет, а утверждение, что любовь может превратиться в контроль, — это тема.',
    },
  },
  {
    id: 'defamiliarisation',
    term: { en: 'defamiliarisation', ru: 'остранение (defamiliarisation)' },
    def: {
      en: 'Presenting familiar things in an unfamiliar way, so that the reader sees them afresh instead of taking them for granted.',
      ru: 'Изображение знакомых вещей в непривычном виде, чтобы читатель увидел их заново, а не принимал как должное.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The narrator describes a handshake as a strange ritual in which two strangers weigh each other up.',
      ru: 'Рассказчик описывает рукопожатие как странный ритуал, в котором два незнакомца оценивают друг друга.',
    },
  },
  {
    id: 'anticlimax',
    term: { en: 'anticlimax', ru: 'антиклимакс (anticlimax)' },
    def: {
      en: 'A sudden drop from a serious or important moment to something trivial or disappointing, often for comic or ironic effect.',
      ru: 'Внезапный переход от серьёзного или важного момента к чему-то пустячному или разочаровывающему, часто ради комического или иронического эффекта.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The duel that had built up all night ended with a sneeze and a polite apology.',
      ru: 'Дуэль, к которой всю ночь нагнетали напряжение, закончилась чихом и вежливым извинением.',
    },
  },
  {
    id: 'suspense',
    term: { en: 'suspense', ru: 'напряжение (suspense)' },
    def: {
      en: 'A feeling of uncertainty and anticipation that a writer creates by delaying information and keeping the reader waiting for what will happen.',
      ru: 'Чувство неопределённости и ожидания, которое автор создаёт, откладывая информацию и заставляя читателя ждать того, что произойдёт.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Footsteps stopped outside the door, and the handle began to turn very slowly.',
      ru: 'Шаги остановились за дверью, и ручка начала очень медленно поворачиваться.',
    },
  },
  {
    id: 'literary-device',
    term: { en: 'literary device', ru: 'литературный приём (literary device)' },
    def: {
      en: 'Any technique a writer uses to create an effect, such as imagery, structure, symbolism or repetition. Naming a device starts the analysis; it does not finish it.',
      ru: 'Любой приём, который автор использует, чтобы создать эффект, например образность, структуру, символику или повтор. Назвать приём — значит начать анализ, а не закончить его.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The writer repeats the word "never" three times, which slows the reader down.',
      ru: 'Автор трижды повторяет слово «никогда», и это замедляет чтение.',
    },
    pitfall: {
      en: 'Naming a device earns little credit on its own. Say what the device does to the reader and why it matters in this text.',
      ru: 'Само название приёма почти не даёт баллов. Нужно объяснить, что приём делает с читателем и почему это важно в данном тексте.',
    },
  },
  {
    id: 'pace',
    term: { en: 'pace', ru: 'темп (pace)' },
    def: {
      en: 'The speed at which a text moves, as the reader feels it. Sentence length, detail, dialogue and scene changes all shape the pace.',
      ru: 'Скорость, с которой движется текст, как её ощущает читатель. Длина предложений, детали, диалоги и смена сцен — всё это формирует темп.',
    },
    syllabus: 'F.GEN',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The chase is told in short, clipped sentences, while the wedding unfolds in long, lazy ones.',
      ru: 'Погоня рассказана короткими, рваными предложениями, а свадьба разворачивается длинными, неспешными фразами.',
    },
  },
];
