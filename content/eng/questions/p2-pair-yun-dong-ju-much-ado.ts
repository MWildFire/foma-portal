import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'p2-pair-yd-ma-1',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-much-ado'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: `Identify one moment in a poem and one moment in the play in which a speaker or character sees himself or herself judged, by others or by the self. For each moment give its location (stanza and line for the poem; act, scene and line for the play) and say what the moment reveals about identity.`,
      ru: `Укажите по одному моменту в стихотворении и в пьесе, в котором говорящий или персонаж видит, что его или её оценивают или осуждают: другие или он сам. Для каждого момента укажите место (строфа и строка для стихотворения; акт, сцена и строка для пьесы) и скажите, что момент показывает об идентичности (identity).`,
    },
    markscheme: {
      en: `1 mark: a poem moment with its location, for example Confession, stanza 1, lines 3–4, where the speaker looks into a mirror and asks why his face is so shameful. 1 mark: a play moment with its location, for example Claudio's public charge against Hero, "Hero itself can blot out Hero's virtue" (4.1.86–87), or the public rejection at the altar (4.1.25–32). 1 mark: says what each moment reveals, for example that in the poem the judge is the speaker himself, while in the play the judgement comes from the community and is spoken aloud.`,
      ru: `1 балл: момент из стихотворения с местом, например «Confession», строфа 1, строки 3–4, где говорящий смотрит в зеркало и спрашивает, почему его лицо так постыдно. 1 балл: момент из пьесы с местом, например публичное обвинение Клаудио против Геро «Hero itself can blot out Hero's virtue» (4.1.86–87) или публичный отказ у алтаря (4.1.25–32). 1 балл: сказано, что показывает каждый момент, например что в стихотворении судья — сам говорящий, а в пьесе суждение исходит от общины и звучит вслух.`,
    },
    model: {
      en: `In Confession the speaker looks into a bronze mirror and sees a face he finds shameful: "As if it were a relic of some dynasty, why is it so shameful?" (stanza 1, lines 3–4; our literal translation). Nobody else speaks; he judges himself. In Much Ado About Nothing the judgement comes from others. Claudio's charge, "Hero itself can blot out Hero's virtue" (4.1.86–87), is made in front of the wedding guests, after the public rejection at the altar (4.1.25–32). The two moments show where identity is decided. In the poem the judge is inside the speaker; in the play the judgement is public and spoken, and Hero's identity depends on what others say about her name.`,
      ru: `В «Confession» говорящий смотрит в бронзовое зеркало и видит лицо, которое считает постыдным; он спрашивает, почему оно так постыдно (строфа 1, строки 3–4; наш дословный перевод). Никто другой не говорит: он судит себя сам. В *Much Ado About Nothing* суд идёт от других. Обвинение Клаудио «Hero itself can blot out Hero's virtue» (4.1.86–87) звучит перед гостями на свадьбе, после публичного отказа у алтаря (4.1.25–32). Два момента показывают, где решается идентичность. В стихотворении судья находится внутри говорящего; в пьесе суждение публичное и произносится вслух, и идентичность Геро зависит от того, что другие говорят о её имени.`,
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'p2-pair-yd-ma-2',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-much-ado'],
    paper: 'P2',
    marks: 5,
    command: 'Analyse',
    prompt: {
      en: `Analyse how the lyric form (one voice that says "I", with no stage directions) and the play's form (stage directions and overheard talk) each show the gap between what the speaker or character knows and what the reader or audience knows. Refer to one moment from each work, with its location.`,
      ru: `Проанализируйте, как форма лирики (один голос, который говорит «я», без ремарок) и форма пьесы (ремарки и подслушанный разговор) каждая показывает разрыв между тем, что знает говорящий или персонаж, и тем, что знают читатель или зритель. Сошлитесь на по одному моменту из каждого произведения с указанием места.`,
    },
    markscheme: {
      en: `1 mark: identifies the lyric form as one first-person voice with no stage directions, so the reader knows only what the speaker reports. 1 mark: a poem moment with its location, for example Self-Portrait, stanza 2, lines 1–2, where the speaker finds "a man" in the well and never explains who he is. 1 mark: identifies the play's form as stage directions and overheard talk, so the audience knows more than the characters. 1 mark: a play moment with its location, for example Benedick overhearing the plot: "This can be no trick" (2.3.223), then "Love me? Why, it must be requited!" (2.3.226–227). 1 mark: analyses the effect of each form on the gap, for example the reader must judge the speaker's shifting feelings, while the audience watches Benedick believe a trick.`,
      ru: `1 балл: названа лирическая форма: один голос от первого лица, без ремарок, поэтому читатель знает только то, что сообщает говорящий. 1 балл: момент из стихотворения с местом, например «Self-Portrait», строфа 2, строки 1–2, где говорящий находит «мужчину» в колодце и не объясняет, кто он. 1 балл: названа форма пьесы: ремарки и подслушанный разговор, поэтому зритель знает больше персонажей. 1 балл: момент из пьесы с местом, например Бенедик подслушивает интригу: «This can be no trick» (2.3.223), затем «Love me? Why, it must be requited!» (2.3.226–227). 1 балл: анализируется эффект каждой формы на разрыв, например читатель должен судить о меняющихся чувствах говорящего, а зритель видит, как Бенедик верит уловке.`,
    },
    model: {
      en: `In the lyric the form is a single voice, "I", with no stage directions, so the reader knows only what the speaker reports. In Self-Portrait the speaker looks into a well and finds "a man" whom he first hates and then pities. The poem never explains who the man is, so the reader's knowledge stays within the speaker's changing feelings (stanza 2, lines 1–2). In Much Ado the stage directions and overheard talk make the gap visible to the audience. Benedick says "This can be no trick" (2.3.223), then believes it: "Love me? Why, it must be requited!" (2.3.226–227). The lyric keeps the gap inside one mind; the play puts it between the characters and the audience.`,
      ru: `В лирике форма — один голос, «я», без ремарок, поэтому читатель знает только то, что сообщает говорящий. В «Self-Portrait» говорящий смотрит в колодец и находит «мужчину», которого сначала ненавидит, а потом жалеет. Стихотворение никогда не объясняет, кто этот мужчина, поэтому знание читателя остаётся в переменчивых чувствах говорящего (строфа 2, строки 1–2). В *Much Ado About Nothing* ремарки и подслушанный разговор делают разрыв видимым для зрителя. Бенедик говорит «This can be no trick» (2.3.223), а затем верит интриге: «Love me? Why, it must be requited!» (2.3.226–227). Зритель знает уловку и смотрит, как он в неё верит. Лирика держит разрыв внутри одного сознания; пьеса помещает его между персонажами и зрителем.`,
    },
    origin: 'original',
    minutes: 12,
  },
  {
    id: 'p2-pair-yd-ma-3',
    subject: 'eng',
    topicIds: ['p2-pair-yun-dong-ju-much-ado'],
    paper: 'P2',
    marks: 5,
    command: 'Discuss',
    prompt: {
      en: `Discuss whether a name or a reputation decides identity more strongly in the poems or in the play. Use at least two locations from each work.`,
      ru: `Обсудите, что сильнее решает идентичность (identity) в стихотворениях или в пьесе: имя или репутация. Используйте не менее двух мест из каждого произведения.`,
    },
    markscheme: {
      en: `1 mark: a judgement of degree, such as "more strongly in the play, but the poems show the cost of a name from inside", rather than a flat yes or no. 1 mark: two play locations that show reputation deciding identity, for example "Hero itself can blot out Hero's virtue" (4.1.86–87) and "She died, my lord, but whiles her slander lived" (5.4.68). 1 mark: two poem locations that show the name, for example Counting the Stars at Night, stanza 8, lines 1–2 (the "shameful name") and stanza 7, lines 3–4 (the name buried under earth). 1 mark: a point that complicates the comparison, for example that in the poem the speaker both names and buries himself, while in the play others decide Hero's name. 1 mark: an overall judgement linked to the effect on the reader or audience.`,
      ru: `1 балл: суждение о степени, например «сильнее в пьесе, но стихотворения показывают цену имени изнутри», а не простое «да» или «нет». 1 балл: два места из пьесы, которые показывают, что репутация решает идентичность, например «Hero itself can blot out Hero's virtue» (4.1.86–87) и «She died, my lord, but whiles her slander lived» (5.4.68). 1 балл: два места из стихотворений, которые показывают имя, например «Counting the Stars at Night», строфа 8, строки 1–2 («постыдное имя») и строфа 7, строки 3–4 (имя, засыпанное землёй). 1 балл: пункт, который усложняет сравнение, например что в стихотворении говорящий сам называет себя и засыпает своё имя, а в пьесе имя Геро решают другие. 1 балл: общее суждение, связанное с эффектом на читателя или зрителя.`,
    },
    model: {
      en: `To a large extent reputation decides identity more strongly in the play. Hero's name is defended and then attacked, and her reputation outlives her apparent death: "Hero itself can blot out Hero's virtue" (4.1.86–87); "She died, my lord, but whiles her slander lived" (5.4.68). In the poems the name belongs to the speaker. In Counting the Stars at Night he calls his name shameful (stanza 8, lines 1–2) and writes it on a hill before covering it with earth (stanza 7, lines 3–4). Yet Confession also shows reputation working inside the self (stanza 1, lines 3–4). So the play gives reputation more power, because others decide the name, while the poems let the speaker decide how to bury it.`,
      ru: `В значительной мере репутация решает идентичность сильнее в пьесе. Имя Геро сначала защищают, а потом атакуют, и её репутация переживает мнимую смерть: «Hero itself can blot out Hero's virtue» (4.1.86–87); «She died, my lord, but whiles her slander lived» (5.4.68). В стихотворениях имя принадлежит говорящему. В «Counting the Stars at Night» он называет своё имя постыдным (строфа 8, строки 1–2) и пишет его на холме, прежде чем засыпать землёй (строфа 7, строки 3–4). Однако «Confession» показывает и репутацию, которая работает внутри «я» (строфа 1, строки 3–4). Поэтому пьеса даёт репутации больше власти, потому что имя решают другие, а стихотворения позволяют говорящему самому решать, как его похоронить.`,
    },
    origin: 'original',
    minutes: 12,
  },
];
