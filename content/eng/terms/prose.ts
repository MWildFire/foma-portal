import type { Term } from '../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'narrator',
    term: { en: 'narrator', ru: 'рассказчик (narrator)' },
    def: {
      en: 'The voice that tells a story. The narrator may be a character in the story or an outside voice, and is not the same as the author.',
      ru: 'Голос, через который рассказывается история. Рассказчик может быть персонажем истории или внешним голосом и не совпадает с автором.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The narrator remembers the winter when the river froze, though she was only seven at the time.',
      ru: 'Рассказчица вспоминает зиму, когда замёрзла река, хотя тогда ей было всего семь лет.',
    },
    pitfall: {
      en: 'Do not treat the narrator as the author. The narrator is a voice the writer creates, and it may be very different from the writer.',
      ru: 'Не путайте рассказчика с автором. Рассказчик — это голос, который создаёт писатель, и он может сильно отличаться от самого автора.',
    },
  },
  {
    id: 'first-person-narration',
    term: { en: 'first-person narration', ru: 'повествование от первого лица (first-person narration)' },
    def: {
      en: 'Narration by a narrator who uses "I" and takes part in the events or observes them. The reader knows only what this narrator sees, knows or infers.',
      ru: 'Повествование от лица рассказчика, который говорит «я» и участвует в событиях или наблюдает за ними. Читатель знает только то, что видит, знает или может понять этот рассказчик.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'I did not know then that the letter in the drawer would change the whole summer.',
      ru: 'Тогда мне ещё не было ясно, что письмо в ящике стола изменит всё лето.',
    },
  },
  {
    id: 'third-person-narration',
    term: { en: 'third-person narration', ru: 'повествование от третьего лица (third-person narration)' },
    def: {
      en: 'Narration by a narrator who stands outside the events and refers to the characters as he, she or they. The narrator may stay with one character or move between several.',
      ru: 'Повествование от лица рассказчика, который стоит вне событий и называет персонажей «он», «она» или «они». Рассказчик может держаться взгляда одного персонажа или переходить от одного к другому.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'She locked the door and walked slowly back to the kitchen, where the kettle had already gone cold.',
      ru: 'Она заперла дверь и медленно вернулась на кухню, где чайник уже остыл.',
    },
  },
  {
    id: 'omniscient-narrator',
    term: { en: 'omniscient narrator', ru: 'всезнающий рассказчик (omniscient narrator)' },
    def: {
      en: 'A third-person narrator who knows everything in the story. The narrator can enter the minds of several characters, explain their motives and comment directly on events.',
      ru: 'Рассказчик от третьего лица, который знает всё в истории. Он может заглядывать в мысли нескольких персонажей, объяснять их мотивы и прямо комментировать события.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Mara had already decided to leave, though she would not say so, and her mother, in the next room, was privately afraid of exactly that.',
      ru: 'Мара уже решила уехать, хотя и не сказала бы об этом, а её мать в соседней комнате втайне боялась именно этого.',
    },
    pitfall: {
      en: 'Third person does not always mean omniscient. A third-person narrator can stay inside the mind of only one character.',
      ru: 'Третье лицо не всегда означает всезнание: рассказчик может оставаться в сознании только одного персонажа.',
    },
  },
  {
    id: 'unreliable-narrator',
    term: { en: 'unreliable narrator', ru: 'ненадёжный рассказчик (unreliable narrator)' },
    def: {
      en: 'A narrator whose version of events the reader cannot fully trust. The narrator may be biased, mistaken, deceptive or limited in knowledge, so the reader must read between the lines.',
      ru: 'Рассказчик, чьей версии событий читатель не может полностью доверять. Он может быть предвзятым, ошибаться, обманывать или быть ограниченным в знании, поэтому читателю приходится читать между строк.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Everyone loved the party, the narrator insisted, although Julia left early and nobody mentioned the broken window.',
      ru: 'Всем понравилась вечеринка, настаивал рассказчик, хотя Юлия ушла рано, а о разбитом окне никто не упомянул.',
    },
    pitfall: {
      en: 'Unreliable does not always mean lying. A narrator may be sincere but mistaken, and the reader must check the evidence in the text.',
      ru: 'Ненадёжный не всегда значит лживый. Рассказчик может искренне ошибаться, и читатель должен проверять доказательства по тексту.',
    },
  },
  {
    id: 'focalisation',
    term: { en: 'focalisation', ru: 'фокализация (focalisation)' },
    def: {
      en: 'The perspective through which the reader sees events: whose eyes or mind filter what is shown. Focalisation can differ from the narrator who tells the story, and can be internal or external.',
      ru: 'Точка зрения, через которую читатель видит события: чьи глаза или сознание определяют, что показано. Фокализация может не совпадать с рассказчиком и бывает внутренней или внешней.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Through the eyes of Tom, the new teacher looked tired and oddly small.',
      ru: 'Глазами Тома новая учительница выглядела усталой и странно маленькой.',
    },
  },
  {
    id: 'free-indirect-discourse',
    term: { en: 'free indirect discourse', ru: 'несобственно-прямая речь (free indirect discourse)' },
    def: {
      en: 'A way of reporting the thoughts or speech of a character in the third person, in the voice of that character and without quotation marks or tags such as he thought. The voices of narrator and character seem to merge.',
      ru: 'Способ передачи мыслей или речи персонажа от третьего лица, но с его собственной интонацией, без кавычек и без слов вроде «он подумал». Голоса рассказчика и персонажа как будто сливаются.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Late again, of course, and why did Ruth always make everyone wait for her?',
      ru: 'Опять опоздала, разумеется, и почему Рут всегда заставляет всех ждать её?',
    },
    pitfall: {
      en: 'Free indirect discourse has no quotation marks and no tag such as he thought. Do not confuse it with direct speech or with first-person interior monologue.',
      ru: 'У несобственно-прямой речи нет кавычек и слов вроде «он подумал». Не путайте её с прямой речью и с внутренним монологом от первого лица.',
    },
  },
  {
    id: 'stream-of-consciousness',
    term: { en: 'stream of consciousness', ru: 'поток сознания (stream of consciousness)' },
    def: {
      en: 'A technique that presents the thoughts of a character as a continuous flow of sensations, memories and images, often with loose syntax and little logical order.',
      ru: 'Приём, при котором мысли персонажа передаются как непрерывный поток ощущений, воспоминаний и образов, часто с нестрогим синтаксисом и без явной логической последовательности.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Cold tea and rain on the glass, the voice on the stairs, the bread, the bill, the voice again, and the list I never finished.',
      ru: 'Холодный чай и дождь по стеклу, голос на лестнице, хлеб, счёт, тот же голос снова и недописанный список.',
    },
  },
  {
    id: 'interior-monologue',
    term: { en: 'interior monologue', ru: 'внутренний монолог (interior monologue)' },
    def: {
      en: 'A technique that shows the private thoughts of a character in a fairly ordered form, as if the character were speaking silently to himself or herself.',
      ru: 'Приём, при котором личные мысли персонажа передаются в относительно упорядоченной форме, как будто персонаж молча говорит сам с собой.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'I must call the bank tomorrow, because the card is nearly empty and nobody else in this house will do it.',
      ru: 'Завтра нужно позвонить в банк, потому что карта почти пуста, а больше в этом доме этим никто не займётся.',
    },
    pitfall: {
      en: 'Interior monologue is not the same as stream of consciousness. The first is usually more ordered, while the second is looser and more associative.',
      ru: 'Внутренний монолог — не то же самое, что поток сознания: первый обычно более упорядочен, а второй свободнее и ассоциативнее.',
    },
  },
  {
    id: 'direct-characterisation',
    term: { en: 'direct characterisation', ru: 'прямая характеристика (direct characterisation)' },
    def: {
      en: 'The narrator or another character states the qualities of a character openly, for example by calling the character brave, greedy or kind.',
      ru: 'Рассказчик или другой персонаж открыто называет черты персонажа, например говорит, что он смелый, жадный или добрый.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Harold was a generous man who never forgot a kindness done to him.',
      ru: 'Гарольд был щедрым человеком, который никогда не забывал оказанной ему доброты.',
    },
  },
  {
    id: 'indirect-characterisation',
    term: { en: 'indirect characterisation', ru: 'косвенная характеристика (indirect characterisation)' },
    def: {
      en: 'The writer reveals a character through speech, thoughts, actions, appearance and the reactions of others, so the reader has to infer the qualities.',
      ru: 'Автор раскрывает персонажа через его речь, мысли, поступки, внешность и реакции окружающих, поэтому читатель сам делает выводы о его чертах.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Harold gave his last loaf to a stranger at the gate, then counted the coins in his pocket twice.',
      ru: 'Гарольд отдал последний хлеб незнакомцу у ворот, а потом дважды пересчитал монеты в кармане.',
    },
  },
  {
    id: 'protagonist',
    term: { en: 'protagonist', ru: 'протагонист (protagonist)' },
    def: {
      en: 'The central character of a work, around whom the main action and conflict develop. The protagonist is not necessarily admirable or heroic.',
      ru: 'Главный персонаж произведения, вокруг которого развиваются основное действие и конфликт. Протагонист не обязательно вызывает восхищение или является героем.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The protagonist, a quiet clerk, keeps a secret that slowly ruins his marriage.',
      ru: 'Протагонист, тихий служащий, хранит тайну, которая медленно губит его брак.',
    },
    pitfall: {
      en: 'The protagonist is not always the hero. A protagonist can be flawed, weak or morally unclear.',
      ru: 'Протагонист не всегда герой: это может быть персонаж с недостатками, слабый или морально неоднозначный.',
    },
  },
  {
    id: 'antagonist',
    term: { en: 'antagonist', ru: 'антагонист (antagonist)' },
    def: {
      en: 'A character or force that opposes the protagonist and creates the central conflict. It can be a person, a group, society, nature or an inner force.',
      ru: 'Персонаж или сила, которые противостоят протагонисту и создают основной конфликт. Это может быть человек, группа людей, общество, природа или внутренняя сила.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The antagonist is the town itself, which refuses to forget the past of the family.',
      ru: 'Антагонист — сам город, который отказывается забыть прошлое этой семьи.',
    },
  },
  {
    id: 'foil',
    term: { en: 'foil', ru: 'персонаж-контраст (foil)' },
    def: {
      en: 'A character whose contrasting qualities highlight the traits of another character, usually the protagonist. A foil does not have to be an enemy.',
      ru: 'Персонаж, чьи противоположные черты подчёркивают качества другого персонажа, обычно протагониста. Персонаж-контраст не обязательно является противником.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Ellen is loud and careless, which makes her quiet sister seem even more careful and controlled.',
      ru: 'Эллен шумная и беспечная, и поэтому её тихая сестра кажется ещё более осторожной и собранной.',
    },
  },
  {
    id: 'setting',
    term: { en: 'setting', ru: 'обстановка (setting)' },
    def: {
      en: 'The time and place in which the story happens, including the social and physical background that shapes the characters and their actions.',
      ru: 'Время и место действия истории, включая социальный и материальный фон, который формирует персонажей и их поступки.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The story is set in a mining town in 1920, where coal dust settles on every kitchen table.',
      ru: 'История разворачивается в шахтёрском городке в 1920 году, где угольная пыль оседает на каждом кухонном столе.',
    },
  },
  {
    id: 'plot',
    term: { en: 'plot', ru: 'сюжет (plot)' },
    def: {
      en: 'The arrangement of events in a story, linked by cause and effect and presented in a particular order. The plot can differ from the chronological order of the events.',
      ru: 'Расположение событий в истории, связанных причинно-следственными связями и представленных в определённом порядке. Сюжет может не совпадать с хронологией событий.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The story opens with a funeral, then goes back ten years to show why the two brothers stopped speaking.',
      ru: 'История начинается с похорон, а потом возвращается на десять лет назад, чтобы показать, почему два брата перестали разговаривать.',
    },
  },
  {
    id: 'exposition',
    term: { en: 'exposition', ru: 'экспозиция (exposition)' },
    def: {
      en: 'The opening part of a story, which gives background on the characters, setting and situation and introduces the conflict.',
      ru: 'Начальная часть истории, в которой даётся предыстория, представляются персонажи, место действия и обстоятельства и намечается конфликт.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Two sisters live in a house by the harbour, and everyone in the town already knows about the debts of their father.',
      ru: 'Две сестры живут в доме у гавани, и все в городе уже знают о долгах их отца.',
    },
  },
  {
    id: 'climax',
    term: { en: 'climax', ru: 'кульминация (climax)' },
    def: {
      en: 'The point of highest tension in the plot, where the central conflict reaches its turning point and the outcome begins to be decided.',
      ru: 'Момент наивысшего напряжения в сюжете, поворотная точка, после которой начинает определяться исход конфликта.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'On the bridge, the two brothers finally shout the truth, and nothing in the family can stay the same.',
      ru: 'На мосту братья наконец кричат правду, и ничто в семье уже не может остаться прежним.',
    },
    pitfall: {
      en: 'The climax is the turning point, not the ending. The denouement comes after it.',
      ru: 'Кульминация — это поворотный момент, а не финал. Развязка идёт после неё.',
    },
  },
  {
    id: 'denouement',
    term: { en: 'denouement', ru: 'развязка (denouement)' },
    def: {
      en: 'The final part of the plot, in which the conflict is resolved, loose ends are tied up and the story comes to a close.',
      ru: 'Заключительная часть сюжета, в которой конфликт разрешается, сюжетные нити связываются и история подходит к концу.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'After the trial, the brothers meet on the bridge again, sell the old house and agree to live apart, but peacefully.',
      ru: 'После суда братья снова встречаются на мосту, продают старый дом и решают жить порознь, но мирно.',
    },
  },
  {
    id: 'flashback',
    term: { en: 'flashback', ru: 'ретроспекция (flashback)' },
    def: {
      en: 'A scene that interrupts the present action to show events from an earlier time, so that the reader understands the past behind the present.',
      ru: 'Сцена, которая прерывает настоящее действие, чтобы показать события прошлого и помочь читателю понять, что стоит за настоящим.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The present-day story pauses while she remembers the night of the storm, when her father left the house for good.',
      ru: 'Рассказ о настоящем на время останавливается: она вспоминает ночь бури, когда её отец навсегда ушёл из дома.',
    },
  },
  {
    id: 'frame-narrative',
    term: { en: 'frame narrative', ru: 'рамочное повествование (frame narrative)' },
    def: {
      en: 'A story that contains one or more inner stories and surrounds them. An outer narrator or situation usually introduces and links the inner stories.',
      ru: 'История, которая содержит одну или несколько внутренних историй и обрамляет их. Внешний рассказчик или общая ситуация обычно вводит внутренние истории и связывает их между собой.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'A group of travellers waits out a storm at an inn, and each of them tells a story that the others will judge.',
      ru: 'Группа путешественников пережидает бурю в трактире, и каждый рассказывает историю, которую потом оценят остальные.',
    },
  },
  {
    id: 'epiphany',
    term: { en: 'epiphany', ru: 'эпифания (epiphany)' },
    def: {
      en: 'A sudden moment of insight, often caused by something ordinary, after which a character understands their situation in a new way.',
      ru: 'Внезапный момент прозрения, часто вызванный чем-то обычным, после которого персонаж по-новому понимает своё положение.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Standing in the empty kitchen, she suddenly understood that her mother had never been happy in that house.',
      ru: 'Стоя на пустой кухне, она вдруг поняла, что её мать никогда не была счастлива в этом доме.',
    },
  },
  {
    id: 'pathetic-fallacy',
    term: { en: 'pathetic fallacy', ru: 'патетическая фаллация (pathetic fallacy)' },
    def: {
      en: 'The attribution of human feelings to nature, especially to the weather, so that the landscape seems to reflect the mood of a character.',
      ru: 'Приписывание природе человеческих чувств, особенно погоде, так что пейзаж как будто отражает настроение персонажа.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The sky above the funeral wept all morning, as though it, too, had lost someone.',
      ru: 'Небо над похоронами плакало всё утро, будто и оно тоже кого-то потеряло.',
    },
    pitfall: {
      en: 'Not every description of weather is pathetic fallacy. The term needs nature that clearly reflects the feeling of a character.',
      ru: 'Не всякое описание погоды — это пафетическая фаллация: нужна природа, которая явно отражает чувство персонажа.',
    },
  },
  {
    id: 'vernacular',
    term: { en: 'vernacular', ru: 'разговорный язык (vernacular)' },
    def: {
      en: 'The everyday language of a particular region, group or social class, often informal or non-standard. Writers use it to make a character or narrator sound natural and local.',
      ru: 'Повседневный язык определённого региона, группы или социального слоя, часто неформальный или нестандартный. Писатели используют его, чтобы речь персонажа или рассказчика звучала естественно и по-местному.',
    },
    syllabus: 'F.PRO',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Nobody gonna fix that roof before winter, so we just make do with what we got.',
      ru: 'Никто эту крышу до зимы чинить не будет, так что как-нибудь перебьёмся тем, что есть.',
    },
  },
];
