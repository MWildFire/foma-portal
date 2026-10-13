import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-form-drama-1',
    subject: 'eng',
    topicIds: ['form-drama'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Identify the aside in this original exchange and explain what it reveals about Anna that she does not say aloud. Explain also what the audience learns that Peter does not.',
      ru: 'Укажите реплику в сторону (aside) в этом оригинальном диалоге и объясните, что она раскрывает об Анне, чего та не говорит вслух. Объясните также, что зритель узнаёт и чего не знает Питер.',
    },
    stimulus: {
      en: 'ANNA: Sit down, Peter. Dinner is almost ready.\nPETER: I have already eaten, thank you.\nANNA (aside): He is lying. The bread on the table is still warm, and I baked it for him alone.\nPETER: Then I will wait for you.',
      ru: 'ANNA: Sit down, Peter. Dinner is almost ready.\nPETER: I have already eaten, thank you.\nANNA (aside): He is lying. The bread on the table is still warm, and I baked it for him alone.\nPETER: Then I will wait for you.',
    },
    markscheme: {
      en: '1 mark: identifies Anna\'s line marked (aside): "He is lying. The bread on the table is still warm, and I baked it for him alone." 1 mark: explains what it reveals: Anna doubts Peter\'s word and is hurt that he refuses the bread she made for him, although her spoken words stay polite. 1 mark: explains the effect: the audience hears her private view, which Peter cannot hear, so the audience knows more than he does and the scene gains tension.',
      ru: '1 балл: называет реплику Анны с пометкой (aside): «He is lying. The bread on the table is still warm, and I baked it for him alone.» 1 балл: объясняет, что она раскрывает: Анна не верит словам Питера и обижена, что он отказывается от хлеба, который она испекла для него, хотя вслух говорит вежливо. 1 балл: объясняет эффект: зритель слышит её скрытое мнение, которого не слышит Питер, поэтому знает больше него, и сцена становится напряжённой.',
    },
    model: {
      en: 'The aside is Anna\'s line, marked "(aside)": "He is lying. The bread on the table is still warm, and I baked it for him alone." It reveals that Anna doubts Peter\'s word and is hurt that he refuses the bread she made for him, while her spoken words stay polite. The audience hears her private view, which Peter cannot hear, so the audience knows more than he does and the scene becomes tense.',
      ru: 'Реплика в сторону — это строка Анны с пометкой (aside): «He is lying. The bread on the table is still warm, and I baked it for him alone.» Она раскрывает, что Анна не верит Питеру и обижена тем, что он отказывается от хлеба, который она испекла для него, хотя вслух говорит вежливо. Зритель слышит её скрытое мнение, которого Питер не слышит, поэтому знает больше него, и сцена становится напряжённой.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-form-drama-2',
    subject: 'eng',
    topicIds: ['form-drama'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the dramatic irony in this original scene. Refer to what the audience knows, what Elsa believes, and the device that gives the audience this knowledge.',
      ru: 'Объясните драматическую иронию в этой оригинальной сцене. Укажите, что знает зритель, во что верит Эльза и какой приём даёт зрителю это знание.',
    },
    stimulus: {
      en: '[The kitchen. A pot of soup simmers on the stove. Behind the door, the gas tap is open.]\nELSA: Don\'t worry about the stove, Karl. I turned everything off before I came in.\nKARL: Then sit down. We have a lot to talk about.',
      ru: '[The kitchen. A pot of soup simmers on the stove. Behind the door, the gas tap is open.]\nELSA: Don\'t worry about the stove, Karl. I turned everything off before I came in.\nKARL: Then sit down. We have a lot to talk about.',
    },
    markscheme: {
      en: '1 mark: identifies the irony: Elsa is sure the stove is off, but the audience knows the gas tap is open. 1 mark: names the device that gives this knowledge: the stage direction, the only place where the open tap is stated. 1 mark: explains the effect: the audience waits tensely for Elsa to find out, so her reassurance sounds like a warning. 1 mark: uses precise terms (dramatic irony, stage direction) and links the irony to Karl\'s reply, which moves the scene on while the danger remains.',
      ru: '1 балл: называет иронию: Эльза уверена, что плита выключена, а зритель знает, что газовый кран открыт. 1 балл: называет приём, который даёт это знание: ремарку, единственное место, где сказано об открытом кране. 1 балл: объясняет эффект: зритель напряжённо ждёт, когда Эльза узнает, поэтому её заверение звучит как предупреждение. 1 балл: использует точные термины (драматическая ирония (dramatic irony), ремарка (stage direction)) и связывает иронию с ответом Карла, который продвигает сцену, пока опасность остаётся.',
    },
    model: {
      en: 'Elsa tells Karl, "I turned everything off before I came in", but the stage direction tells the audience that the gas tap is open. The audience knows the danger and Elsa does not, which is dramatic irony. The stage direction is the device that gives this knowledge, since nothing in the dialogue reveals the tap. Because the audience waits for her to find out, her reassurance sounds like a warning, and tension builds. Karl\'s reply, "Then sit down", moves the scene on while the danger remains.',
      ru: 'Эльза говорит Карлу: «I turned everything off before I came in» («Я всё выключила, прежде чем войти»), но ремарка сообщает зрителю, что газовый кран открыт. Зритель знает об опасности, а Эльза — нет: это драматическая ирония. Знание даёт ремарка, потому что в репликах о кране ничего не сказано. Зритель напряжённо ждёт, когда Эльза узнает, поэтому её заверение звучит как предупреждение. Ответ Карла, «Then sit down» («Тогда садись»), продвигает сцену, пока опасность остаётся.',
    },
    origin: 'original',
    minutes: 5,
  },
];
