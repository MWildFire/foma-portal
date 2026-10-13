import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-communication-1',
    subject: 'eng',
    topicIds: ['concept-communication'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Read the exchange. Identify the subtext in Jonah\'s replies, and state one thing that the exchange withholds from the reader.',
      ru: 'Прочитайте обмен репликами. Определите подтекст в ответах Джонаха и укажите одно, что обмен утаивает от читателя.',
    },
    stimulus: {
      en: 'Mira: The train is late again.\nJonah: Is it? I hadn\'t noticed.\nMira: You have checked the timetable three times since we sat down.\nJonah: I like to know where things stand.\nMira: Then you know the letter came this morning.',
      ru: 'Mira: The train is late again.\nJonah: Is it? I hadn\'t noticed.\nMira: You have checked the timetable three times since we sat down.\nJonah: I like to know where things stand.\nMira: Then you know the letter came this morning.',
    },
    markscheme: {
      en: '1 mark: the subtext is that Jonah is anxious about news and avoids talking about it. 1 mark: a quotation supports the subtext, for example that he has checked the timetable three times, or "I like to know where things stand". 1 mark: a thing that is withheld is named: the content of the letter, whether the news is good or bad, or what Jonah feels about it.',
      ru: '1 балл: назван подтекст: Джонах тревожится из-за новостей и избегает разговора о них. 1 балл: приведено доказательство из текста, например то, что он трижды проверил расписание, или «I like to know where things stand». 1 балл: названо то, что утаивается: содержание письма (хорошие или плохие новости) или чувства Джонаха по этому поводу.',
    },
    model: {
      en: 'The subtext is that Jonah is anxious about news and avoids talking about it. The evidence is that he has checked the timetable three times, and that his answer "I like to know where things stand" hides his anxiety about the letter. What is withheld is the content of the letter: the reader does not learn whether the news is good or bad, and Jonah never says how he feels.',
      ru: 'Подтекст в том, что Джонах тревожится из-за новостей и избегает разговора о них. Доказательство: он трижды проверил расписание, а ответ «I like to know where things stand» скрывает его тревогу из-за письма. Утаивается содержание письма: читатель не узнаёт, хорошие это новости или плохие, и Джонах не говорит, что чувствует.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-concept-communication-2',
    subject: 'eng',
    topicIds: ['concept-communication'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the letter communicates with its audience. Refer to the way it addresses the reader, and to one thing that the letter withholds.',
      ru: 'Объясните, как письмо общается со своей аудиторией. Укажите, как оно обращается к читателю, и назовите одно, что письмо утаивает.',
    },
    stimulus: {
      en: 'To whoever finds this letter: I have left the lamp on in the hall, as you asked. The bread is in the tin, but do not eat the last slice, because I was saving it for the morning you come back. I shall not write again, so keep the key safe.',
      ru: 'To whoever finds this letter: I have left the lamp on in the hall, as you asked. The bread is in the tin, but do not eat the last slice, because I was saving it for the morning you come back. I shall not write again, so keep the key safe.',
    },
    markscheme: {
      en: '1 mark: the letter addresses an unknown finder ("To whoever finds this letter"), so its audience seems wider than one person. 1 mark: "you" then points to one person who will come back, so the reader cannot be sure who the letter is for. 1 mark: a thing that is withheld is named, such as why the writer will not write again, or what happened between the writer and "you". 1 mark: the effect on the reader is explained (unease, curiosity or sympathy), linked to the audience.',
      ru: '1 балл: письмо обращается к неизвестному тому, кто его найдёт («To whoever finds this letter»), поэтому аудитория кажется шире одного человека. 1 балл: «you» затем указывает на одного человека, который вернётся, и читатель не уверен, кому адресовано письмо. 1 балл: названо то, что утаивается: почему автор больше не будет писать или что случилось между автором и «you». 1 балл: объяснён эффект на читателя (тревога, любопытство или сочувствие) и его связь с аудиторией.',
    },
    model: {
      en: 'The letter opens with a direct address to an unknown finder, so its audience seems to be anyone who reads it. The word "you" then narrows the audience to one person who will come back, and the reader cannot tell whether the letter is meant for a stranger or for someone close. The letter withholds why the writer will not write again. The reader feels unease and curiosity, and has to decide what has happened between the writer and "you".',
      ru: 'Письмо начинается с прямого обращения к неизвестному, кто его найдёт, поэтому аудитория кажется любым читателем. Слово «you» затем сужает аудиторию до одного человека, который вернётся, и читатель не может понять, адресовано ли письмо незнакомцу или близкому. Письмо утаивает, почему автор больше не будет писать. Читатель испытывает тревогу и любопытство и должен решить, что произошло между автором и «you».',
    },
    origin: 'original',
    minutes: 5,
  },
];
