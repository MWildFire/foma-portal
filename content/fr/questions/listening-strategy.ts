import type { FrQuestion } from '../types';

// Quick checks for the topic listening-strategy (Paper 2, section P2L). Each one has three options and one answer.
export const questions: FrQuestion[] = [
  {
    id: 'listening-strategy-q1',
    subject: 'fr',
    topicIds: ['listening-strategy'],
    paper: 'P2',
    section: 'P2L',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the best first step before the first listening. A) Wait until the recording ends, then read the questions. B) Read all the questions and underline the key words. C) Write every answer in Russian.',
      ru: 'Выберите лучший первый шаг перед первым прослушиванием. A) Дождаться конца записи и только потом читать вопросы. B) Прочитать все вопросы и подчеркнуть ключевые слова. C) Написать все ответы по-русски.',
      fr: "Choisissez la meilleure première action avant la première écoute. A) Attendre la fin de l'enregistrement, puis lire les questions. B) Lire toutes les questions et souligner les mots-clés. C) Écrire toutes les réponses en russe.",
    },
    markscheme: {
      en: 'Answer: B. The questions tell you what to listen for, so read them all and underline the key words before the first listening. A wastes the first listening. C is wrong: answers are written in the form the question asks for.',
      ru: 'Ответ: B. Вопросы показывают, что нужно услышать, поэтому прочитайте их все и подчеркните ключевые слова до первого прослушивания. A тратит первое прослушивание впустую. C неверно: ответы пишутся в той форме, которую просит вопрос.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'listening-strategy-q2',
    subject: 'fr',
    topicIds: ['listening-strategy'],
    paper: 'P2',
    section: 'P2L',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'The recording says: « Le train de vingt heures a dix minutes de retard. » The statement is: « Le train de vingt heures part à l\'heure. » Which answer is correct? A) vrai, with the quotation « Le train part à l\'heure. » B) non mentionné, because the train is not in the recording. C) faux, with the quotation « a dix minutes de retard ».',
      ru: 'В записи звучит: « Le train de vingt heures a dix minutes de retard. » Утверждение: « Le train de vingt heures part à l\'heure. » Какой ответ правильный? A) vrai, с цитатой « Le train part à l\'heure. » B) non mentionné, потому что поезда нет в записи. C) faux, с цитатой « a dix minutes de retard ».',
      fr: 'Dans l\'enregistrement, on entend : « Le train de vingt heures a dix minutes de retard. » Affirmation : « Le train de vingt heures part à l\'heure. » Quelle est la bonne réponse ? A) vrai, avec la citation « Le train part à l\'heure. » B) non mentionné, car le train n\'est pas dans l\'enregistrement. C) faux, avec la citation « a dix minutes de retard ».',
    },
    markscheme: {
      en: 'Answer: C. The recording says the train is ten minutes late, so the statement is false (faux). The quotation is « a dix minutes de retard ». B is wrong: the train is mentioned, so the answer is not non mentionné. A is wrong: the recording does not say the train leaves on time.',
      ru: 'Ответ: C. В записи поезд опаздывает на десять минут, значит, утверждение ложно (faux). Цитата: « a dix minutes de retard ». B неверно: о поезде говорится, поэтому ответ не non mentionné. A неверно: в записи не сказано, что поезд отправляется вовремя.',
    },
    answer: 'C',
    origin: 'original',
  },
];
