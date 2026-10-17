import type { Term } from '../../../src/contract/types';

// Author wording; examples are illustrative unless a primary passage is named.
export const terms: Term[] = [
  {
    id: "metre",
    term: {
      en: "metre",
      ru: "метр (metre)"
    },
    def: {
      en: "In English accentual-syllabic verse, the underlying pattern of stresses and syllables, often described in feet such as iambs or trochees. Actual lines can vary from that pattern; other verse systems organise metre differently.",
      ru: "В рассматриваемом английском силлабо-тоническом стихе — основная схема ударений и слогов, которую часто описывают стопами, например ямбами или хореями. Реальные строки допускают вариации; в других системах стихосложения метр устроен иначе."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "the DAY be-GINS, the NIGHT de-SCENDS (capitals mark the stressed syllables)",
      ru: "день начинается, ночь спускается (в английском примере ударные слоги написаны заглавными буквами)"
    },
    pitfall: {
      en: "Metre is not the same as rhythm. Metre is the regular pattern; rhythm is the whole movement of the verse.",
      ru: "Метр — не то же самое, что ритм. Метр — это закономерная схема, а ритм — всё движение стиха."
    }
  },
  {
    id: "iamb",
    term: {
      en: "iamb",
      ru: "ямб (iamb)"
    },
    def: {
      en: "A metrical foot of one unstressed syllable followed by one stressed syllable, as in \"about\" or \"believe\".",
      ru: "Стопа из безударного слога и следующего за ним ударного."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "a BIRD a-WAKES and SINGS a-LOUD",
      ru: "мо-РОЗ, ве-СНА: безударный слог, затем ударный."
    },
    pitfall: {
      en: "Students often mix up iambs and trochees. The first syllable decides it: an iamb starts unstressed, a trochee starts stressed.",
      ru: "Ямб и хорей часто путают. Решает первый слог: ямб начинается с безударного слога, хорей — с ударного."
    }
  },
  {
    id: "trochee",
    term: {
      en: "trochee",
      ru: "хорей (trochee)"
    },
    def: {
      en: "A metrical foot of one stressed syllable followed by one unstressed syllable, as in \"garden\" or \"happy\".",
      ru: "Стопа из ударного слога и следующего за ним безударного."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "DARK the PATH and BARE the TREE",
      ru: "У-тро, ВЕ-тер: ударный слог, затем безударный."
    }
  },
  {
    id: "anapaest",
    term: {
      en: "anapaest",
      ru: "анапест (anapaest)"
    },
    def: {
      en: "A metrical foot of two unstressed syllables followed by one stressed syllable, as in \"interrupt\".",
      ru: "Стопа из двух безударных слогов и следующего за ними ударного."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "as a SHIP glides a-WAY from the SHORE",
      ru: "ти-ши-НА: два безударных слога, затем ударный."
    }
  },
  {
    id: "dactyl",
    term: {
      en: "dactyl",
      ru: "дактиль (dactyl)"
    },
    def: {
      en: "A metrical foot of one stressed syllable followed by two unstressed syllables, as in \"merrily\".",
      ru: "Стопа из одного ударного слога и двух следующих за ним безударных."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "PER-fect-ly STILL is the SEA",
      ru: "РА-дост-но: ударный слог, затем два безударных."
    }
  },
  {
    id: "iambic-pentameter",
    term: {
      en: "iambic pentameter",
      ru: "ямбический пентаметр (iambic pentameter)"
    },
    def: {
      en: "A metrical line with five underlying iambic feet, conventionally ten syllables. Substitutions and an additional unstressed ending are possible. It is common in English blank verse and sonnets.",
      ru: "Строка с основной схемой пяти ямбических стоп, обычно из десяти слогов. Возможны замены и добавочное безударное окончание. Часто встречается в английском blank verse и сонетах."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "the SOFT wind SIGHS a-CROSS the QUI-et BAY",
      ru: "В но-ЧИ / го-РИТ / о-ГОНЬ / у-НАС / в ок-НЕ — собственный пример пятистопного ямба."
    }
  },
  {
    id: "blank-verse",
    term: {
      en: "blank verse",
      ru: "белый стих (blank verse)"
    },
    def: {
      en: "In standard English usage, unrhymed iambic pentameter, prominent in verse drama and long poems; English drama as a whole also includes prose and other forms.",
      ru: "Английский blank verse — нерифмованный пятистопный ямб, распространённый в стихотворной драме и поэмах. Русский «белый стих» шире: нерифмованный метрический стих, не обязательно пятистопный ямб. Драма вообще может быть написана и прозой."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "the STARS came OUT, and NONE of THEM would SPEAK",
      ru: "В ночи горит огонь у нас в окне, / И тьма хранит покой моих друзей. (Собственные строки: пятистопный ямб без точной концевой рифмы.)"
    }
  },
  {
    id: "free-verse",
    term: {
      en: "free verse",
      ru: "свободный стих (free verse)"
    },
    def: {
      en: "Poetry with no regular metre and no fixed rhyme scheme. The poet chooses the rhythm and line length of each poem.",
      ru: "Стих без правильного метра и без постоянной схемы рифмовки. Ритм и длину строк поэт выбирает в каждом стихотворении сам."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The rain came in without knocking / and sat down at our table, wet and tired.",
      ru: "Дождь вошёл, не постучав, / и сел за наш стол, мокрый и усталый."
    }
  },
  {
    id: "rhythm",
    term: {
      en: "rhythm",
      ru: "ритм (rhythm)"
    },
    def: {
      en: "The overall movement of a poem, made by stress, pauses, line length and sound. Metre is the regular part of rhythm; rhythm is wider than metre.",
      ru: "Общее движение стихотворения, которое создают ударения, паузы, длина строк и звучание. Метр — закономерная часть ритма, а ритм шире метра."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Slow, slow, the long tide breathes in and out.",
      ru: "Медленно, медленно, длинный прилив вдыхает и выдыхает."
    }
  },
  {
    id: "stanza",
    term: {
      en: "stanza",
      ru: "строфа (stanza)"
    },
    def: {
      en: "A group of lines that forms a unit within a poem. Stanzas often share the same line length, metre or rhyme scheme.",
      ru: "Группа строк, которая образует единое целое внутри стихотворения. Строфы часто имеют одинаковую длину строк, размер или схему рифмовки."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The lamp is lit. / The night is cold. / The door stays shut. / The dog waits by the fire.",
      ru: "Лампа зажжена. / Ночь холодна. / Дверь заперта. / Собака ждёт у огня."
    },
    pitfall: {
      en: "A line break and a stanza break are different structural boundaries. Check the poem’s grouping rather than calling every line a stanza.",
      ru: "Граница строки и граница строфы — разные структурные границы. Проверяйте группировку текста, а не называйте строфой любую строку."
    }
  },
  {
    id: "couplet",
    term: {
      en: "couplet",
      ru: "двустишие (couplet)"
    },
    def: {
      en: "A pair of successive verse lines, often rhyming and sharing a metre. A Shakespearean sonnet often ends with a couplet.",
      ru: "Пара соседних стихотворных строк, часто с общей рифмой и метром. Шекспировский сонет часто заканчивается двустишием."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The sea is wide, the night is long, / and every bird has stopped its song.",
      ru: "Море широко, ночь длинна, / и каждая птица перестала петь."
    }
  },
  {
    id: "quatrain",
    term: {
      en: "quatrain",
      ru: "четверостишие (quatrain)"
    },
    def: {
      en: "A stanza of four lines. Common rhyme schemes include ABAB, ABBA and ABCB.",
      ru: "Строфа из четырёх строк. Частые схемы рифмовки: АБАБ, АББА и АБВБ."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The road runs down beyond the hill, / and I have walked the whole night / to find the door that stands so still / and wait for the first light.",
      ru: "Дорога уходит вниз за холм, / и я шёл всю ночь, / чтобы найти дверь, которая стоит так неподвижно, / и ждать первого света."
    }
  },
  {
    id: "sestet",
    term: {
      en: "sestet",
      ru: "секстет (sestet)"
    },
    def: {
      en: "A stanza of six lines. In a Petrarchan sonnet, the sestet is the last six lines, after the octave (the first eight lines), and it often introduces new rhymes.",
      ru: "Строфа из шести строк. В петрарковском сонете секстет — это последние шесть строк после октавы (первых восьми строк), и в нём часто появляются новые рифмы."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The octave describes the storm; the sestet asks what the storm has taken.",
      ru: "Октава описывает бурю; секстет спрашивает, что буря отняла."
    }
  },
  {
    id: "sonnet",
    term: {
      en: "sonnet",
      ru: "сонет (sonnet)"
    },
    def: {
      en: "A poem of fourteen lines, usually in iambic pentameter with a fixed rhyme scheme. The Petrarchan sonnet has an octave and a sestet; the Shakespearean sonnet has three quatrains and a couplet.",
      ru: "В традиционной форме — стихотворение из четырнадцати строк; английские сонеты часто написаны пятистопным ямбом со сложившейся рифмовкой. Петрарковский сонет делится на октаву и секстет; шекспировский состоит из трёх четверостиший и двустишия."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Fourteen lines of iambic pentameter, rhymed ABAB CDCD EFEF GG, form a Shakespearean sonnet.",
      ru: "Четырнадцать строк ямбического пентаметра с рифмовкой АБАБ ВГВГ ДЕДЕ ЖЖ образуют шекспировский сонет."
    },
    pitfall: {
      en: "Not every fourteen-line poem is a sonnet. Consider its relation to sonnet conventions, rhyme, argument and turns; later variations need not follow every traditional feature.",
      ru: "Не каждое стихотворение из четырнадцати строк является сонетом. Учитывайте связь с сонетными традициями, рифмовку, движение мысли и повороты; позднейшие варианты могут менять традиционные признаки."
    }
  },
  {
    id: "ode",
    term: {
      en: "ode",
      ru: "ода (ode)"
    },
    def: {
      en: "A lyric form often sustained, elevated or meditative, addressing a person, object or idea. Praise is common but does not exhaust its possibilities. Odes often have an elevated tone and a complex stanza form.",
      ru: "Лирическая форма, часто развёрнутая, возвышенная или размышляющая, обращённая к предмету, человеку или идее. Восхваление распространено, но не исчерпывает её возможностей. Оды часто имеют возвышенный тон и сложную строфику."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "O harbour light, that guards the dark, I honour you.",
      ru: "О, портовый огонь, что стережёт тьму, я чту тебя."
    }
  },
  {
    id: "elegy",
    term: {
      en: "elegy",
      ru: "элегия (elegy)"
    },
    def: {
      en: "A poem of mourning for someone who has died, or a serious reflection on loss. This is a common modern literary use; the classical term also names a verse form, and individual tones vary.",
      ru: "Стихотворение-плач по умершему человеку или серьёзное размышление о потере. Это распространённое современное литературное употребление; античный термин обозначает также стиховую форму, а тон отдельных текстов различается."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The house is quiet where the singing used to be.",
      ru: "В доме тихо там, где раньше звучала песня."
    }
  },
  {
    id: "ballad",
    term: {
      en: "ballad",
      ru: "баллада (ballad)"
    },
    def: {
      en: "A narrative poem that tells a story in simple language, often in quatrains. Ballads often use a refrain and a strong, regular rhythm.",
      ru: "Повествовательное стихотворение, которое рассказывает историю простым языком, часто четверостишиями. В балладах часто используются рефрен и сильный, ровный ритм."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The miller rode before the dawn / across the frost to market town; / he never reached the market square, / and nobody saw him ride back down.",
      ru: "Мельник выехал до рассвета / по морозу на рынок в город; / он не дошёл до рыночной площади, / и никто не видел, как он вернулся."
    }
  },
  {
    id: "rhyme",
    term: {
      en: "rhyme",
      ru: "рифма (rhyme)"
    },
    def: {
      en: "The repetition of the same sound from the last stressed vowel to the end of a word, as in \"night\" and \"light\".",
      ru: "Совпадение звуков от последнего ударного гласного до конца слова в двух или более словах, например «ночь» и «дочь»."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I wait for morning and its light / and count the hours of the night.",
      ru: "И свет вдали горит всю ночь, / Гоня тревогу молча прочь. (Собственный пример: ночь — прочь.)"
    }
  },
  {
    id: "rhyme-scheme",
    term: {
      en: "rhyme scheme",
      ru: "схема рифмовки (rhyme scheme)"
    },
    def: {
      en: "The pattern of rhymes in a stanza or poem. Each new rhyme sound gets a new letter, so ABAB means lines 1 and 3 rhyme, and lines 2 and 4 rhyme.",
      ru: "Порядок рифм в строфе или стихотворении. Каждому новому рифмующемуся звуку присваивается новая буква: при схеме АБАБ рифмуются первая и третья строки, а вторая и четвёртая."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Lines 1 and 3 rhyme, and lines 2 and 4 rhyme: the rhyme scheme is ABAB.",
      ru: "Строки 1 и 3 рифмуются, и строки 2 и 4 рифмуются: схема рифмовки АБАБ."
    },
    pitfall: {
      en: "Lines that rhyme with each other get the same letter, even when they are far apart. Do not give every line a new letter.",
      ru: "Строки, которые рифмуются между собой, получают одну и ту же букву, даже если стоят далеко друг от друга. Нельзя давать каждой строке новую букву."
    }
  },
  {
    id: "slant-rhyme",
    term: {
      en: "slant rhyme",
      ru: "неполная рифма (slant rhyme)"
    },
    def: {
      en: "A near rhyme in which the sounds are similar but not identical, such as \"love\" and \"move\".",
      ru: "Неполная рифма: звуки похожи, но не совпадают полностью."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I could not leave, I could not move, / and kept the ache of my old love.",
      ru: "Дом — дым: собственный пример неточного созвучия, совпадают согласные, но различаются ударные гласные."
    }
  },
  {
    id: "internal-rhyme",
    term: {
      en: "internal rhyme",
      ru: "внутренняя рифма (internal rhyme)"
    },
    def: {
      en: "Rhyme involving a word within a verse line: it may rhyme with another internal word or with a word at a line ending.",
      ru: "Рифма с участием слова внутри стихотворной строки: оно может рифмоваться с другим внутренним словом или с концом строки."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I sing to bring the spring again.",
      ru: "У ворот хоровод всё идёт и идёт. (Собственный пример внутренней рифмы: ворот — хоровод.)"
    }
  },
  {
    id: "assonance",
    term: {
      en: "assonance",
      ru: "ассонанс (assonance)"
    },
    def: {
      en: "The repetition of the same stressed vowel sound in words close together, with different consonants, as in \"late\" and \"fade\".",
      ru: "Повтор гласных, особенно ударных, в близких словах. Здесь разбирается внутренняя звукопись; русским «ассонансом» называют также разновидность неточной рифмы."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Late in the lake, the grey light fades.",
      ru: "В поле молкнет ровный голос. (Собственный пример повторения ударного о.)"
    },
    pitfall: {
      en: "Assonance is not a full rhyme. The stressed vowel must match, but the following consonants must differ.",
      ru: "Ассонанс — не полная рифма: гласный должен совпадать, а следующие за ним согласные — различаться."
    }
  },
  {
    id: "alliteration",
    term: {
      en: "alliteration",
      ru: "аллитерация (alliteration)"
    },
    def: {
      en: "The repetition of the same consonant sound at the start of nearby stressed words, as in \"wild wind\".",
      ru: "Повтор согласных звуков. В английском анализе особенно выделяют начальные звуки близких ударных слов; русское употребление шире и не ограничено началом слова."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Silver spray sweeps the sand.",
      ru: "Сонный сад скрывает свет. (Собственный пример начального с.)"
    }
  },
  {
    id: "onomatopoeia",
    term: {
      en: "onomatopoeia",
      ru: "звукоподражание (onomatopoeia)"
    },
    def: {
      en: "A word whose sound imitates the sound it describes, such as \"buzz\", \"hiss\" or \"crack\".",
      ru: "Слово, звучание которого подражает обозначаемому звуку, например «жужжать», «шипеть» или «трещать»."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The bees buzz, the waves hiss, and the old gate creaks.",
      ru: "Пчёлы жужжат, волны шипят, и старая калитка скрипит."
    }
  },
  {
    id: "enjambment",
    term: {
      en: "enjambment",
      ru: "анжамбеман (enjambment)"
    },
    def: {
      en: "The running of a sentence or phrase over the end of a line or stanza, without terminal closure at the break; consider the syntax, not punctuation alone.",
      ru: "Перенос: предложение или синтаксическая группа продолжаются за концом строки или строфы, без завершающей синтаксической границы; учитывайте конструкцию, а не одни знаки препинания."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "The gulls waited on the pier / for boats that never came back home.",
      ru: "Чайки ждали на причале / лодок, которые так и не вернулись домой."
    },
    pitfall: {
      en: "Enjambment is a sentence running past a line break. A caesura is a pause inside a line. Do not mix them up.",
      ru: "Анжамбеман — это перенос предложения через конец строки. Цезура — это пауза внутри строки. Их нельзя путать."
    }
  },
  {
    id: "caesura",
    term: {
      en: "caesura",
      ru: "цезура (caesura)"
    },
    def: {
      en: "In English close reading, a pause within a verse line, often marked by punctuation. In stricter metrical terminology, caesura can designate a word division at a characteristic position.",
      ru: "В рассматриваемом английском анализе — пауза внутри строки, часто отмеченная пунктуацией. В русской метрике цезура прежде всего обозначает словораздел в определённом месте стиховой схемы; не всякая запятая автоматически является такой цезурой."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I held my breath — the sea went still.",
      ru: "Дыхание затаилось — море замерло."
    }
  },
  {
    id: "volta",
    term: {
      en: "volta",
      ru: "вольта (volta)"
    },
    def: {
      en: "A turn in thought or mood in a sonnet. In the Petrarchan sonnet it usually comes at the start of the sestet, at line 9.",
      ru: "Поворот мысли или настроения в сонете. В петрарковском сонете он обычно приходится на начало секстета, то есть на девятую строку."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Eight lines of grief, then the turn: \"But still the tide comes back to shore.\"",
      ru: "Восемь строк скорби, а затем поворот: «Но всё же прилив возвращается к берегу»."
    },
    pitfall: {
      en: "The volta is a turn in thought or mood, not just a change of rhyme or a new line.",
      ru: "Вольта — это поворот мысли или настроения, а не просто смена рифмы или новая строка."
    }
  },
  {
    id: "refrain",
    term: {
      en: "refrain",
      ru: "рефрен (refrain)"
    },
    def: {
      en: "A phrase, line or group of lines recurring in a poem or song, often at regular points but sometimes with variations.",
      ru: "Фраза, строка или группа строк, повторяющаяся в стихотворении или песне, часто в определённых местах, иногда с вариациями."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Each stanza ends with the same line: \"Come home, the lamps are lit.\"",
      ru: "Каждая строфа заканчивается одной и той же строкой: «Возвращайся домой, лампы зажжены»."
    }
  },
  {
    id: "apostrophe",
    term: {
      en: "apostrophe",
      ru: "апострофа (apostrophe)"
    },
    def: {
      en: "A figure of speech in which the speaker directly addresses an absent person, a dead person, an object or an idea.",
      ru: "Фигура речи, в которой говорящий прямо обращается к отсутствующему или умершему человеку, предмету или идее."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "O sea, you took my father; now I speak to you.",
      ru: "О море, ты забрало моего отца; теперь я обращаюсь к тебе."
    },
    pitfall: {
      en: "Apostrophe and personification often appear together, but they are different: apostrophe addresses a person, object or abstraction, while personification attributes human qualities; the two need not coincide.",
      ru: "Апострофа и олицетворение часто встречаются вместе, но это разные приёмы: апострофа обращается к человеку, предмету или отвлечённой идее, а олицетворение приписывает человеческие черты; одно не обязательно включает другое."
    }
  },
  {
    id: "lyric-persona",
    term: {
      en: "lyric persona",
      ru: "лирический голос (lyric persona)"
    },
    def: {
      en: "The speaking voice or persona presented in a lyric poem. Distinguish it analytically from the biographical author without assuming it must be wholly invented.",
      ru: "Говорящий голос или образ в лирическом стихотворении. Для анализа его отличают от биографического автора, не предполагая обязательной полной вымышленности. Русский «лирический герой» — связанное, но теоретически более специальное понятие, не механический перевод любого speaker."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I have kept your coat on the hook for eleven winters.",
      ru: "Одиннадцать зим я храню твоё пальто на крючке."
    },
    pitfall: {
      en: "Neither identify speaker and poet automatically nor assume they must hold opposite views. Establish any autobiographical link from evidence.",
      ru: "Не отождествляйте говорящего и поэта автоматически, но и не приписывайте им непременно противоположные взгляды. Автобиографическую связь устанавливают по доказательствам."
    }
  },
  {
    id: "dramatic-monologue",
    term: {
      en: "dramatic monologue",
      ru: "драматический монолог (dramatic monologue)"
    },
    def: {
      en: "A poem in which one speaker talks to a silent listener at a dramatic moment. The speaker reveals his or her character, often without meaning to.",
      ru: "Стихотворение, в котором один говорящий обращается к молчащему слушателю в драматический момент. Говорящий раскрывает свой характер, часто сам того не желая."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "Sit down, Harold, and listen while I count the years I wasted.",
      ru: "Садись, Гарольд, и слушай, как я считаю годы, растраченные впустую."
    }
  },
  {
    id: "conceit",
    term: {
      en: "conceit",
      ru: "кончетто (conceit)"
    },
    def: {
      en: "An ingenious, often surprising or logically elaborate comparison, especially associated with metaphysical poetry. It may be developed at length; length alone does not define it.",
      ru: "Изобретательное, часто неожиданное или логически сложное образное сопоставление, особенно характерное для метафизической поэзии. Оно может разворачиваться подробно, но длина сама по себе его не определяет."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "My heart is a clock that you wound once and then left in the rain to rust.",
      ru: "Моё сердце — часы, которые однажды завели и оставили ржаветь под дождём."
    },
    pitfall: {
      en: "Explain the ingenuity of the relationship and how it develops. Not every extended metaphor is a conceit, and a compact comparison is not excluded simply by its length.",
      ru: "Объясните изобретательность связи и её развитие. Не всякая развёрнутая метафора является кончетто; краткость тоже не исключает этого приёма."
    }
  },
  {
    id: "lyric",
    term: {
      en: "lyric",
      ru: "лирика (lyric)"
    },
    def: {
      en: "A poetic mode centred on a speaker’s feelings, perceptions or reflections, commonly represented by short poems and sometimes songlike in sound. This working definition does not make every first-person poem autobiographical.",
      ru: "Родовое и жанровое понятие, связанное с выражением чувств, восприятия и размышлений. Для рассматриваемых английских lyric poems характерны короткие формы и нередко песенное звучание, но первое лицо не делает текст автоматически автобиографическим."
    },
    syllabus: "F.POE",
    papers: [
      "P1",
      "P2"
    ],
    src: {
      kind: "own",
      title: "Own wording"
    },
    example: {
      en: "I sit alone, and every feeling turns into a song.",
      ru: "Я сижу один, и каждое чувство превращается в песню."
    }
  }
];
