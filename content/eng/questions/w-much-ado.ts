import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'w-much-ado-1',
    subject: 'eng',
    topicIds: ['w-much-ado'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: `Identify two moments in Much Ado About Nothing where a character overhears talk about his or her own feelings. For each moment, give the act, scene and line where the listener first speaks after the plotters have gone, and state what the listener now believes.`,
      ru: `Укажите два момента в пьесе «Much Ado About Nothing», когда персонаж подслушивает разговор о собственных чувствах. Для каждого момента дайте акт, сцену и строку, где слушающий впервые заговаривает после ухода заговорщиков, и скажите, во что он теперь верит.`,
    },
    markscheme: {
      en: `1 mark: names Benedick overhearing the plotters in Act 2 Scene 3, with the line "This can be no trick" (2.3.223) or "Love me? Why, it must be requited" (2.3.226–227). 1 mark: names Beatrice overhearing Hero and Ursula in Act 3 Scene 1, with the line "What fire is in mine ears?" (3.1.113) or "Contempt, farewell, and maiden pride, adieu!" (3.1.115). 1 mark: states that Benedick now believes Beatrice loves him, and that Beatrice now believes Benedick loves her.`,
      ru: `1 балл: назван Бенедик, который подслушивает заговорщиков во 2 акте, 3 сцене, со строкой «This can be no trick» (2.3.223) или «Love me? Why, it must be requited» (2.3.226–227). 1 балл: названа Беатриче, которая слушает Геро и Урсулу в 3 акте, 1 сцене, со строкой «What fire is in mine ears?» (3.1.113) или «Contempt, farewell, and maiden pride, adieu!» (3.1.115). 1 балл: сказано, что Бенедик теперь верит, что Беатриче его любит, а Беатриче верит, что Бенедик любит её.`,
    },
    model: {
      en: `Benedick, alone at the start of Act 2 Scene 3, hears Don Pedro, Claudio and Leonato say that Beatrice loves him. After they leave he says, "This can be no trick" (2.3.223), and then believes it: "Love me? Why, it must be requited!" (2.3.226–227). In Act 3 Scene 1 Beatrice listens while Hero and Ursula talk, and answers, "What fire is in mine ears? Can this be true?" (3.1.113). She now believes that Benedick loves her.`,
      ru: `Бенедик, один в начале 2 акта, 3 сцены, слышит, как дон Педро, Клаудио и Леонато говорят, что Беатриче его любит. Когда они уходят, он говорит: «This can be no trick» (2.3.223) — «это не может быть уловкой», а затем верит: «Love me? Why, it must be requited!» (2.3.226–227). В 3 акте, 1 сцене, Беатриче слушает разговор Геро и Урсулы и отвечает: «What fire is in mine ears? Can this be true?» (3.1.113) — «Что за огонь у меня в ушах? Неужели это правда?». Теперь она верит, что Бенедик её любит.`,
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'w-much-ado-2',
    subject: 'eng',
    topicIds: ['w-much-ado'],
    paper: 'P2',
    marks: 5,
    command: 'Analyse',
    prompt: {
      en: `Analyse how Shakespeare uses language in the church scene (Act 4 Scene 1) to show that a woman's reputation can outweigh the truth. Refer to Claudio's words "Give not this rotten orange to your friend" (4.1.32) and to Hero's question "Is it not Hero? Who can blot that name" (4.1.84).`,
      ru: `Проанализируйте, как Шекспир использует язык в сцене в церкви (4 акт, 1 сцена), чтобы показать, что репутация женщины может перевесить правду. Обратитесь к словам Клаудио «Give not this rotten orange to your friend» (4.1.32) и к вопросу Геро «Is it not Hero? Who can blot that name» (4.1.84).`,
    },
    markscheme: {
      en: `1 mark: identifies that Claudio rejects Hero publicly at the altar, in front of the wedding guests (4.1.25–32). 1 mark: analyses the metaphor "rotten orange" as a contrast between outward show and inner corruption, supported by "She's but the sign and semblance of her honor" (4.1.33). 1 mark: explains how the rhetorical question "Is it not Hero?" (4.1.84) asserts her name against the accusation. 1 mark: explains the paradox in "Hero itself can blot out Hero's virtue" (4.1.87), where the name becomes the accusation. 1 mark: evaluates the effect on an audience that knows the accusation is false, and links it to the power of the community: the father, the Prince and the witnesses.`,
      ru: `1 балл: показано, что Клаудио публично отвергает Геро у алтаря, на глазах у гостей (4.1.25–32). 1 балл: анализируется метафора «rotten orange» как контраст между внешним видом и внутренней порчей, с опорой на «She's but the sign and semblance of her honor» (4.1.33). 1 балл: объяснено, как риторический вопрос «Is it not Hero?» (4.1.84) утверждает её имя против обвинения. 1 балл: объяснён парадокс «Hero itself can blot out Hero's virtue» (4.1.87): имя становится обвинением. 1 балл: оценён эффект на зрителя, который знает, что обвинение ложно, и связь с властью общины: отца, принца и свидетелей.`,
    },
    model: {
      en: `Claudio's metaphor "rotten orange" (4.1.32) and his claim that "She's but the sign and semblance of her honor" (4.1.33) set outward show against inner corruption. Hero's question, "Is it not Hero?" (4.1.84), asserts her name, but Claudio answers that "Hero itself can blot out Hero's virtue" (4.1.87). The paradox is that the name becomes the accusation: the community's expectation of a maid convicts her, while the audience, who knows the truth, sees the injustice.`,
      ru: `Метафора Клаудио «rotten orange» (4.1.32) и его слова «She's but the sign and semblance of her honor» (4.1.33) противопоставляют внешний вид и внутреннюю порчу. Вопрос Геро «Is it not Hero?» (4.1.84) утверждает её имя, но Клаудио отвечает, что «Hero itself can blot out Hero's virtue» (4.1.87). Парадокс в том, что имя становится обвинением: ожидание от девушки, которая должна быть чистой, осуждает её, а зритель, знающий правду, видит несправедливость.`,
    },
    origin: 'original',
    minutes: 12,
  },
  {
    id: 'w-much-ado-3',
    subject: 'eng',
    topicIds: ['w-much-ado'],
    paper: 'P2',
    marks: 5,
    command: 'Evaluate',
    prompt: {
      en: `Evaluate the extent to which the Watch scenes (Act 3 Scene 3 and Act 4 Scene 2) show that the truth in Messina depends on the least powerful characters. Refer to Dogberry's words "You, constable, are to present the Prince's own person" (3.3.73–74) and to the First Watchman's report "This man said, sir, that Don John, the Prince's brother, was a villain" (4.2.41–42).`,
      ru: `Оцените, в какой степени сцены с дозором (Watch) (3 акт, 3 сцена и 4 акт, 2 сцена) показывают, что правда в Мессине зависит от самых слабых персонажей. Обратитесь к словам Догберри «You, constable, are to present the Prince's own person» (3.3.73–74) и к донесению первого стражника «This man said, sir, that Don John, the Prince's brother, was a villain» (4.2.41–42).`,
    },
    markscheme: {
      en: `1 mark: a judgement of degree, such as "largely, but not entirely", rather than a simple yes or no. 1 mark: uses 3.3.73–74 to show the constable's comic authority over the Prince's person. 1 mark: uses 4.2.41–42 to show that the Watch's report exposes Don John. 1 mark: evaluates a limit: the Watch's confusion delays the truth, which comes out fully only in Borachio's confession (5.1.245–248). 1 mark: evaluates the effect on the audience, who see the high-ranking characters misjudge while the lowest characters speak the truth.`,
      ru: `1 балл: суждение о степени, например «в основном, но не полностью», а не простое «да» или «нет». 1 балл: использует 3.3.73–74, чтобы показать комичную власть констебля над персоной принца. 1 балл: использует 4.2.41–42, чтобы показать, что донесение дозора разоблачает Дон Джона. 1 балл: оценивает ограничение: путаница дозора задерживает правду, которая полностью выходит наружу только в признании Борачо (5.1.245–248). 1 балл: оценивает эффект на зрителя, который видит, как высокопоставленные персонажи ошибаются, а низшие говорят правду.`,
    },
    model: {
      en: `To a large extent the Watch scenes show that truth in Messina comes from the lowest members of the community. Dogberry's authority is comic: "You, constable, are to present the Prince's own person" (3.3.73–74). Yet the First Watchman reports what Borachio said about Don John (4.2.41–42), and Borachio's own confession follows later (5.1.245–248). The limit is that the truth is delayed and nearly lost in comic confusion, so the play suggests that justice depends on chance and on people nobody takes seriously.`,
      ru: `В основном сцены с дозором показывают, что правда в Мессине приходит от низших членов общины. Власть Догберри комична: «You, constable, are to present the Prince's own person» (3.3.73–74). Однако первый стражник передаёт слова Борачо о Дон Джоне (4.2.41–42), а само признание Борачо звучит позже (5.1.245–248). Ограничение в том, что правда задерживается и почти теряется в комичной путанице, поэтому пьеса предполагает: справедливость зависит от случая и от людей, которых никто всерьёз не принимает.`,
    },
    origin: 'original',
    minutes: 12,
  },
];
