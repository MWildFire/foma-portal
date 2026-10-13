import type { Term } from '../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'metre',
    term: { en: 'metre', ru: 'метр (metre)' },
    def: {
      en: 'The regular pattern of stressed and unstressed syllables in a line of verse. It is measured in feet, such as iambs or trochees.',
      ru: 'Закономерное чередование ударных и безударных слогов в стихотворной строке. Измеряется стопами, например ямбами или хореями.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'the DAY be-GINS, the NIGHT de-SCENDS (capitals mark the stressed syllables)',
      ru: 'день начинается, ночь спускается (в английском примере ударные слоги написаны заглавными буквами)',
    },
    pitfall: {
      en: 'Metre is not the same as rhythm. Metre is the regular pattern; rhythm is the whole movement of the verse.',
      ru: 'Метр — не то же самое, что ритм. Метр — это закономерная схема, а ритм — всё движение стиха.',
    },
  },
  {
    id: 'iamb',
    term: { en: 'iamb', ru: 'ямб (iamb)' },
    def: {
      en: 'A metrical foot of one unstressed syllable followed by one stressed syllable, as in "about" or "believe".',
      ru: 'Стопа из безударного слога и следующего за ним ударного.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'a BIRD a-WAKES and SINGS a-LOUD',
      ru: 'птица просыпается и поёт во весь голос',
    },
    pitfall: {
      en: 'Students often mix up iambs and trochees. The first syllable decides it: an iamb starts unstressed, a trochee starts stressed.',
      ru: 'Ямб и хорей часто путают. Решает первый слог: ямб начинается с безударного слога, хорей — с ударного.',
    },
  },
  {
    id: 'trochee',
    term: { en: 'trochee', ru: 'хорей (trochee)' },
    def: {
      en: 'A metrical foot of one stressed syllable followed by one unstressed syllable, as in "garden" or "happy".',
      ru: 'Стопа из ударного слога и следующего за ним безударного.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'DARK the PATH and BARE the TREE',
      ru: 'тёмная тропа и голое дерево',
    },
  },
  {
    id: 'anapaest',
    term: { en: 'anapaest', ru: 'анапест (anapaest)' },
    def: {
      en: 'A metrical foot of two unstressed syllables followed by one stressed syllable, as in "interrupt".',
      ru: 'Стопа из двух безударных слогов и следующего за ними ударного.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'as a SHIP glides a-WAY from the SHORE',
      ru: 'как корабль скользит прочь от берега',
    },
  },
  {
    id: 'dactyl',
    term: { en: 'dactyl', ru: 'дактиль (dactyl)' },
    def: {
      en: 'A metrical foot of one stressed syllable followed by two unstressed syllables, as in "merrily".',
      ru: 'Стопа из одного ударного слога и двух следующих за ним безударных.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'PER-fect-ly STILL is the SEA',
      ru: 'совершенно неподвижно море',
    },
  },
  {
    id: 'iambic-pentameter',
    term: { en: 'iambic pentameter', ru: 'ямбический пентаметр (iambic pentameter)' },
    def: {
      en: 'A line of five iambs, giving ten syllables with the stress on every second syllable. It is the usual line of English blank verse and of the sonnet.',
      ru: 'Строка из пяти ямбов, то есть из десяти слогов, в которой ударение падает на каждый второй слог. Это обычный размер английского белого стиха и сонета.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'the SOFT wind SIGHS a-CROSS the QUI-et BAY',
      ru: 'нежный ветер вздыхает над тихим заливом',
    },
  },
  {
    id: 'blank-verse',
    term: { en: 'blank verse', ru: 'белый стих (blank verse)' },
    def: {
      en: 'Verse written in unrhymed iambic pentameter. It is the usual form of English drama and of many long poems.',
      ru: 'Стих, написанный нерифмованным ямбическим пентаметром. Это обычная форма английской драмы и многих длинных поэм.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'the STARS came OUT, and NONE of THEM would SPEAK',
      ru: 'звёзды вышли, и ни одна из них не захотела говорить',
    },
  },
  {
    id: 'free-verse',
    term: { en: 'free verse', ru: 'свободный стих (free verse)' },
    def: {
      en: 'Poetry with no regular metre and no fixed rhyme scheme. The poet chooses the rhythm and line length of each poem.',
      ru: 'Стих без правильного метра и без постоянной схемы рифмовки. Ритм и длину строк поэт выбирает в каждом стихотворении сам.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The rain came in without knocking / and sat down at our table, wet and tired.',
      ru: 'Дождь вошёл, не постучав, / и сел за наш стол, мокрый и усталый.',
    },
  },
  {
    id: 'rhythm',
    term: { en: 'rhythm', ru: 'ритм (rhythm)' },
    def: {
      en: 'The overall movement of a poem, made by stress, pauses, line length and sound. Metre is the regular part of rhythm; rhythm is wider than metre.',
      ru: 'Общее движение стихотворения, которое создают ударения, паузы, длина строк и звучание. Метр — закономерная часть ритма, а ритм шире метра.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Slow, slow, the long tide breathes in and out.',
      ru: 'Медленно, медленно, длинный прилив вдыхает и выдыхает.',
    },
  },
  {
    id: 'stanza',
    term: { en: 'stanza', ru: 'строфа (stanza)' },
    def: {
      en: 'A group of lines that forms a unit within a poem. Stanzas often share the same line length, metre or rhyme scheme.',
      ru: 'Группа строк, которая образует единое целое внутри стихотворения. Строфы часто имеют одинаковую длину строк, размер или схему рифмовки.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The lamp is lit. / The night is cold. / The door stays shut. / The dog waits by the fire.',
      ru: 'Лампа зажжена. / Ночь холодна. / Дверь заперта. / Собака ждёт у огня.',
    },
    pitfall: {
      en: 'A stanza is a group of lines, not a single line. Do not call every line of a poem a stanza.',
      ru: 'Строфа — это группа строк, а не одна строка. Нельзя называть строфой каждую строку стихотворения.',
    },
  },
  {
    id: 'couplet',
    term: { en: 'couplet', ru: 'двустишие (couplet)' },
    def: {
      en: 'Two consecutive lines that rhyme and usually share the same metre. A Shakespearean sonnet often ends with a couplet.',
      ru: 'Две соседние строки, которые рифмуются и обычно имеют один и тот же размер. Шекспировский сонет часто заканчивается двустишием.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The sea is wide, the night is long, / and every bird has stopped its song.',
      ru: 'Море широко, ночь длинна, / и каждая птица перестала петь.',
    },
  },
  {
    id: 'quatrain',
    term: { en: 'quatrain', ru: 'четверостишие (quatrain)' },
    def: {
      en: 'A stanza of four lines. Common rhyme schemes include ABAB, ABBA and ABCB.',
      ru: 'Строфа из четырёх строк. Частые схемы рифмовки: АБАБ, АББА и АБВБ.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The road runs down beyond the hill, / and I have walked the whole night / to find the door that stands so still / and wait for the first light.',
      ru: 'Дорога уходит вниз за холм, / и я шёл всю ночь, / чтобы найти дверь, которая стоит так неподвижно, / и ждать первого света.',
    },
  },
  {
    id: 'sestet',
    term: { en: 'sestet', ru: 'секстет (sestet)' },
    def: {
      en: 'A stanza of six lines. In a Petrarchan sonnet, the sestet is the last six lines, after the octave (the first eight lines), and it often introduces new rhymes.',
      ru: 'Строфа из шести строк. В петрарковском сонете секстет — это последние шесть строк после октавы (первых восьми строк), и в нём часто появляются новые рифмы.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The octave describes the storm; the sestet asks what the storm has taken.',
      ru: 'Октава описывает бурю; секстет спрашивает, что буря отняла.',
    },
  },
  {
    id: 'sonnet',
    term: { en: 'sonnet', ru: 'сонет (sonnet)' },
    def: {
      en: 'A poem of fourteen lines, usually in iambic pentameter with a fixed rhyme scheme. The Petrarchan sonnet has an octave and a sestet; the Shakespearean sonnet has three quatrains and a couplet.',
      ru: 'Стихотворение из четырнадцати строк, обычно написанное ямбическим пентаметром с постоянной схемой рифмовки. Петрарковский сонет делится на октаву и секстет; шекспировский состоит из трёх четверостиший и двустишия.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Fourteen lines of iambic pentameter, rhymed ABAB CDCD EFEF GG, form a Shakespearean sonnet.',
      ru: 'Четырнадцать строк ямбического пентаметра с рифмовкой АБАБ ВГВГ ДЕДЕ ЖЖ образуют шекспировский сонет.',
    },
    pitfall: {
      en: 'Not every fourteen-line poem is a sonnet. A sonnet also needs a fixed rhyme scheme and, usually, iambic pentameter.',
      ru: 'Не каждое стихотворение из четырнадцати строк является сонетом. Сонету нужны постоянная схема рифмовки и, обычно, ямбический пентаметр.',
    },
  },
  {
    id: 'ode',
    term: { en: 'ode', ru: 'ода (ode)' },
    def: {
      en: 'A formal lyric poem that addresses a person, object or idea and praises it. Odes often have an elevated tone and a complex stanza form.',
      ru: 'Торжественное лирическое стихотворение, восхваляющее предмет, человека или идею, к которым обращается поэт. Оды часто имеют возвышенный тон и сложную строфику.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'O harbour light, that guards the dark, I honour you.',
      ru: 'О, портовый огонь, что стережёт тьму, я чту тебя.',
    },
  },
  {
    id: 'elegy',
    term: { en: 'elegy', ru: 'элегия (elegy)' },
    def: {
      en: 'A poem of mourning for someone who has died, or a serious reflection on loss. Elegies have a sad, formal tone.',
      ru: 'Стихотворение-плач по умершему человеку или серьёзное размышление о потере. Элегия имеет печальный и сдержанный тон.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The house is quiet where the singing used to be.',
      ru: 'В доме тихо там, где раньше звучала песня.',
    },
  },
  {
    id: 'ballad',
    term: { en: 'ballad', ru: 'баллада (ballad)' },
    def: {
      en: 'A narrative poem that tells a story in simple language, often in quatrains. Ballads often use a refrain and a strong, regular rhythm.',
      ru: 'Повествовательное стихотворение, которое рассказывает историю простым языком, часто четверостишиями. В балладах часто используются рефрен и сильный, ровный ритм.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The miller rode before the dawn / across the frost to market town; / he never reached the market square, / and nobody saw him ride back down.',
      ru: 'Мельник выехал до рассвета / по морозу на рынок в город; / он не дошёл до рыночной площади, / и никто не видел, как он вернулся.',
    },
  },
  {
    id: 'rhyme',
    term: { en: 'rhyme', ru: 'рифма (rhyme)' },
    def: {
      en: 'The repetition of the same sound from the last stressed vowel to the end of a word, as in "night" and "light".',
      ru: 'Совпадение звуков от последнего ударного гласного до конца слова в двух или более словах, например «ночь» и «дочь».',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I wait for morning and its light / and count the hours of the night.',
      ru: 'Я жду утра и его света / и считаю часы ночи.',
    },
  },
  {
    id: 'rhyme-scheme',
    term: { en: 'rhyme scheme', ru: 'схема рифмовки (rhyme scheme)' },
    def: {
      en: 'The pattern of rhymes in a stanza or poem. Each new rhyme sound gets a new letter, so ABAB means lines 1 and 3 rhyme, and lines 2 and 4 rhyme.',
      ru: 'Порядок рифм в строфе или стихотворении. Каждому новому рифмующемуся звуку присваивается новая буква: при схеме АБАБ рифмуются первая и третья строки, а вторая и четвёртая.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Lines 1 and 3 rhyme, and lines 2 and 4 rhyme: the rhyme scheme is ABAB.',
      ru: 'Строки 1 и 3 рифмуются, и строки 2 и 4 рифмуются: схема рифмовки АБАБ.',
    },
    pitfall: {
      en: 'Lines that rhyme with each other get the same letter, even when they are far apart. Do not give every line a new letter.',
      ru: 'Строки, которые рифмуются между собой, получают одну и ту же букву, даже если стоят далеко друг от друга. Нельзя давать каждой строке новую букву.',
    },
  },
  {
    id: 'slant-rhyme',
    term: { en: 'slant rhyme', ru: 'неполная рифма (slant rhyme)' },
    def: {
      en: 'A near rhyme in which the sounds are similar but not identical, such as "love" and "move".',
      ru: 'Неполная рифма: звуки похожи, но не совпадают полностью.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I could not leave, I could not move, / and kept the ache of my old love.',
      ru: 'Я не мог уйти, не мог сдвинуться с места, / и хранил боль старой любви.',
    },
  },
  {
    id: 'internal-rhyme',
    term: { en: 'internal rhyme', ru: 'внутренняя рифма (internal rhyme)' },
    def: {
      en: 'A rhyme inside a line of verse, not at the end of the line.',
      ru: 'Рифма внутри строки, а не в её конце.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I sing to bring the spring again.',
      ru: 'Я пою, чтобы весна вернулась.',
    },
  },
  {
    id: 'assonance',
    term: { en: 'assonance', ru: 'ассонанс (assonance)' },
    def: {
      en: 'The repetition of the same stressed vowel sound in words close together, with different consonants, as in "late" and "fade".',
      ru: 'Повтор одного и того же ударного гласного звука в близко стоящих словах при разных согласных.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Late in the lake, the grey light fades.',
      ru: 'Поздно на озере гаснет серый свет.',
    },
    pitfall: {
      en: 'Assonance is not a full rhyme. The stressed vowel must match, but the following consonants must differ.',
      ru: 'Ассонанс — не полная рифма: гласный должен совпадать, а следующие за ним согласные — различаться.',
    },
  },
  {
    id: 'alliteration',
    term: { en: 'alliteration', ru: 'аллитерация (alliteration)' },
    def: {
      en: 'The repetition of the same consonant sound at the start of nearby stressed words, as in "wild wind".',
      ru: 'Повтор одного и того же согласного звука в начале близко стоящих ударных слов.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Silver spray sweeps the sand.',
      ru: 'Серебристые брызги скользят по песку.',
    },
  },
  {
    id: 'onomatopoeia',
    term: { en: 'onomatopoeia', ru: 'звукоподражание (onomatopoeia)' },
    def: {
      en: 'A word whose sound imitates the sound it describes, such as "buzz", "hiss" or "crack".',
      ru: 'Слово, звучание которого подражает обозначаемому звуку, например «жужжать», «шипеть» или «трещать».',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The bees buzz, the waves hiss, and the old gate creaks.',
      ru: 'Пчёлы жужжат, волны шипят, и старая калитка скрипит.',
    },
  },
  {
    id: 'enjambment',
    term: { en: 'enjambment', ru: 'анжамбеман (enjambment)' },
    def: {
      en: 'The running of a sentence or phrase over the end of a line or stanza, with no punctuation at the break.',
      ru: 'Перенос: предложение или синтаксическая группа продолжаются за концом строки или строфы, а на границе нет знака препинания.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The gulls waited on the pier / for boats that never came back home.',
      ru: 'Чайки ждали на причале / лодок, которые так и не вернулись домой.',
    },
    pitfall: {
      en: 'Enjambment is a sentence running past a line break. A caesura is a pause inside a line. Do not mix them up.',
      ru: 'Анжамбеман — это перенос предложения через конец строки. Цезура — это пауза внутри строки. Их нельзя путать.',
    },
  },
  {
    id: 'caesura',
    term: { en: 'caesura', ru: 'цезура (caesura)' },
    def: {
      en: 'A pause inside a line of verse, often marked by punctuation such as a dash, comma or semicolon.',
      ru: 'Пауза внутри строки стиха, которую часто отмечают знаки препинания: тире, запятая или точка с запятой.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I held my breath — the sea went still.',
      ru: 'Дыхание затаилось — море замерло.',
    },
  },
  {
    id: 'volta',
    term: { en: 'volta', ru: 'вольта (volta)' },
    def: {
      en: 'A turn in thought or mood in a sonnet. In the Petrarchan sonnet it usually comes at the start of the sestet, at line 9.',
      ru: 'Поворот мысли или настроения в сонете. В петрарковском сонете он обычно приходится на начало секстета, то есть на девятую строку.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Eight lines of grief, then the turn: "But still the tide comes back to shore."',
      ru: 'Восемь строк скорби, а затем поворот: «Но всё же прилив возвращается к берегу».',
    },
    pitfall: {
      en: 'The volta is a turn in thought or mood, not just a change of rhyme or a new line.',
      ru: 'Вольта — это поворот мысли или настроения, а не просто смена рифмы или новая строка.',
    },
  },
  {
    id: 'refrain',
    term: { en: 'refrain', ru: 'рефрен (refrain)' },
    def: {
      en: 'A line or group of lines that repeats at the end of each stanza or at regular points in a poem.',
      ru: 'Строка или группа строк, которые повторяются в конце каждой строфы или через равные промежутки в стихотворении.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Each stanza ends with the same line: "Come home, the lamps are lit."',
      ru: 'Каждая строфа заканчивается одной и той же строкой: «Возвращайся домой, лампы зажжены».',
    },
  },
  {
    id: 'apostrophe',
    term: { en: 'apostrophe', ru: 'апострофа (apostrophe)' },
    def: {
      en: 'A figure of speech in which the speaker directly addresses an absent person, a dead person, an object or an idea.',
      ru: 'Фигура речи, в которой говорящий прямо обращается к отсутствующему или умершему человеку, предмету или идее.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'O sea, you took my father; now I speak to you.',
      ru: 'О море, ты забрало моего отца; теперь я обращаюсь к тебе.',
    },
    pitfall: {
      en: 'Apostrophe and personification often appear together, but they are different: apostrophe speaks to something absent, while personification gives it human qualities.',
      ru: 'Апострофа и олицетворение часто встречаются вместе, но это разные приёмы: апострофа обращается к отсутствующему предмету, а олицетворение наделяет предмет человеческими чертами.',
    },
  },
  {
    id: 'lyric-persona',
    term: { en: 'lyric persona', ru: 'лирический герой (lyric persona)' },
    def: {
      en: 'The voice that speaks in a lyric poem. The persona is a created speaker and is not always the poet.',
      ru: 'Голос, от лица которого говорит лирическое стихотворение. Лирический герой — созданный образ говорящего, и он не всегда совпадает с самим поэтом.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I have kept your coat on the hook for eleven winters.',
      ru: 'Одиннадцать зим я храню твоё пальто на крючке.',
    },
    pitfall: {
      en: 'Do not read the lyric persona as the poet by default. The poet builds the speaker, and the speaker may hold views the poet does not share.',
      ru: 'Не считайте лирического героя самим поэтом по умолчанию. Поэт создаёт говорящего, и тот может иметь взгляды, которых поэт не разделяет.',
    },
  },
  {
    id: 'dramatic-monologue',
    term: { en: 'dramatic monologue', ru: 'драматический монолог (dramatic monologue)' },
    def: {
      en: 'A poem in which one speaker talks to a silent listener at a dramatic moment. The speaker reveals his or her character, often without meaning to.',
      ru: 'Стихотворение, в котором один говорящий обращается к молчащему слушателю в драматический момент. Говорящий раскрывает свой характер, часто сам того не желая.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Sit down, Harold, and listen while I count the years I wasted.',
      ru: 'Садись, Гарольд, и слушай, как я считаю годы, растраченные впустую.',
    },
  },
  {
    id: 'conceit',
    term: { en: 'conceit', ru: 'концетто (conceit)' },
    def: {
      en: 'An extended and surprising metaphor that links two very different things, often in metaphysical poetry.',
      ru: 'Развёрнутая и неожиданная метафора, которая связывает очень далёкие друг от друга вещи; характерна для метафизической поэзии.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'My heart is a clock that you wound once and then left in the rain to rust.',
      ru: 'Моё сердце — часы, которые однажды завели и оставили ржаветь под дождём.',
    },
    pitfall: {
      en: 'A conceit is an extended, surprising comparison. A short, simple metaphor is not a conceit.',
      ru: 'Концетто — это развёрнутое и неожиданное сравнение. Короткая простая метафора не является концетто.',
    },
  },
  {
    id: 'lyric',
    term: { en: 'lyric', ru: 'лирика (lyric)' },
    def: {
      en: 'A short poem that expresses the personal thoughts and feelings of a single speaker. Lyric poems are often musical in sound.',
      ru: 'Короткое стихотворение, в котором выражены личные мысли и чувства одного говорящего. Лирические стихотворения часто музыкальны по звучанию.',
    },
    syllabus: 'F.POE',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'I sit alone, and every feeling turns into a song.',
      ru: 'Я сижу один, и каждое чувство превращается в песню.',
    },
  },
];
