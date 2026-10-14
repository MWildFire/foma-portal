import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'p2-pair-1',
    subject: 'eng',
    topicIds: ['p2-pair-much-ado-into-the-wild'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify one moment in each work where a character or the reader learns something that the speaker did not intend or expect. For each moment, give its location (act, scene and line for Much Ado About Nothing; chapter for Into the Wild) and say who learns what.',
      ru: 'Укажите по одному моменту в каждом произведении, где персонаж или читатель узнаёт то, чего говорящий не намеревался или не ожидал. Для каждого момента укажите место (акт, сцена и строка для «Много шума из ничего»; глава для «Into the Wild») и скажите, кто что узнаёт.',
    },
    markscheme: {
      en: '1 mark: a Much Ado moment with its location, for example Benedick overhearing the plotters (2.3.223–227) or Beatrice overhearing Hero and Ursula (3.1.113–115). 1 mark: an Into the Wild moment with its chapter, for example the discovery of the father\'s earlier family in chapter 12, or the revised hypothesis in chapter 18. 1 mark: says who learns what, for example that Benedick now believes Beatrice loves him, or that the reader learns the father\'s secret.',
      ru: '1 балл: момент «Много шума из ничего» с местом, например Бенедик подслушивает заговорщиков (2.3.223–227) или Беатриче слышит Геро и Урсулу (3.1.113–115). 1 балл: момент «Into the Wild» с главой, например открытие более ранней семьи отца в главе 12 или пересмотренная гипотеза в главе 18. 1 балл: сказано, кто что узнаёт, например что Бенедик теперь верит, что Беатриче его любит, или что читатель узнаёт тайну отца.',
    },
    model: {
      en: 'In Much Ado, Benedick overhears the plotters (2.3.223–227) and comes to believe that Beatrice loves him, although the talk was arranged to deceive him. In Into the Wild, chapter 12 gives the discovery that McCandless makes during his travels: his father had an earlier family. The reader learns this through the author\'s account, not through McCandless\'s own words.',
      ru: 'В «Много шума из ничего» Бенедик подслушивает заговорщиков (2.3.223–227) и начинает верить, что Беатриче его любит, хотя разговор был подстроен, чтобы его обмануть. В «Into the Wild» глава 12 рассказывает об открытии, которое Маккандлесс делает во время путешествия: у отца была более ранняя семья. Читатель узнаёт это из рассказа автора, а не из собственных слов героя.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'p2-pair-2',
    subject: 'eng',
    topicIds: ['p2-pair-much-ado-into-the-wild'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the difference in form between a play and a non-fiction book changes the way the same tension between identity and expectation is shown. Refer to one technique from each form.',
      ru: 'Объясните, как различие форм, пьесы и документальной книги, меняет то, как показывается одно и то же напряжение между идентичностью и ожиданиями. Сошлитесь на один приём из каждой формы.',
    },
    markscheme: {
      en: '1 mark: names a difference of form: the play has no narrator, while the book has an author who narrates. 1 mark: names a technique of the play, such as stage directions or overhearing (2.3.223), and its effect (the audience knows more than the character). 1 mark: names a technique of the book, such as first-person narration, interviews or documents, and its effect on the reader\'s judgement. 1 mark: links both to identity against expectation, for example Benedick\'s self-image or McCandless\'s name against his family\'s expectations.',
      ru: '1 балл: названо различие форм: у пьесы нет рассказчика, а у книги есть автор, который рассказывает. 1 балл: назван приём пьесы, например ремарки или подслушивание (2.3.223), и его эффект (зритель знает больше персонажа). 1 балл: назван приём книги, например повествование от первого лица, интервью или документы, и его эффект на суждение читателя. 1 балл: оба приёма связаны с напряжением идентичности и ожиданий, например образ себя Бенедика или имя Маккандлесса против ожиданий семьи.',
    },
    model: {
      en: 'A play has no narrator, so the audience learns through stage directions and overheard talk. In Act 2 Scene 3 Benedick says "This can be no trick" (2.3.223) and then believes it, so the audience sees the gap between his self-image and the truth before he does. In Into the Wild the author narrates in the first person and interviews witnesses, and in chapter 15 he recalls his father\'s expectation of a medical career. The same tension is shown from inside a narrator\'s memory, so the reader judges the expectation rather than watching it act.',
      ru: 'У пьесы нет рассказчика, поэтому зритель узнаёт всё через ремарки и подслушанный разговор. Во 2 акте, 3 сцене Бенедик говорит «This can be no trick» (2.3.223) и затем верит услышанному, поэтому зритель видит разрыв между его самообразом и правдой раньше него самого. В «Into the Wild» автор рассказывает от первого лица, беседует со свидетелями, а в главе 15 вспоминает ожидание отца, что он станет врачом. То же напряжение показано изнутри памяти рассказчика, поэтому читатель судит об ожидании, а не наблюдает, как оно действует.',
    },
    origin: 'original',
    minutes: 8,
  },
  {
    id: 'p2-pair-3',
    subject: 'eng',
    topicIds: ['p2-pair-much-ado-into-the-wild'],
    paper: 'P2',
    marks: 5,
    command: 'Evaluate',
    prompt: {
      en: 'To what extent do both works suggest that truth depends on who is allowed to speak? Refer to one moment from each work.',
      ru: 'В какой степени оба произведения показывают, что правда зависит от того, кому позволено говорить? Сошлитесь на по одному моменту из каждого произведения.',
    },
    markscheme: {
      en: '1 mark: a judgement of degree, such as "largely, but not entirely", rather than a simple yes or no. 1 mark: a Much Ado moment in which lower-ranking speakers carry the truth, such as the First Watchman\'s report (4.2.41–42). 1 mark: an Into the Wild moment in which witnesses or the author carry the truth, such as Wayne Westerberg (chapter 3) or the revised hypothesis (chapter 18). 1 mark: a limit: speaking is not enough, because Benedick believes what he overhears (2.3.226–227) and the author revises his own confident claim. 1 mark: an overall judgement linked to the effect on the reader or audience.',
      ru: '1 балл: суждение о степени, например «в основном, но не полностью», а не простое «да» или «нет». 1 балл: момент «Много шума из ничего», где правду несут говорящие низкого положения, например донесение первого стражника (4.2.41–42). 1 балл: момент «Into the Wild», где правду несут свидетели или автор, например Уэйн Вестерберг (глава 3) или пересмотренная гипотеза (глава 18). 1 балл: ограничение: одного говорения мало, потому что Бенедик верит подслушанному (2.3.226–227), а автор пересматривает собственное уверенное утверждение. 1 балл: общее суждение, связанное с эффектом на читателя или зрителя.',
    },
    model: {
      en: 'To a large extent both works suggest that truth depends on who is allowed to speak, because truth reaches the characters through people they do not expect to matter: the First Watchman in Much Ado (4.2.41–42), and the witnesses in Into the Wild (chapter 3). The limit is that speaking is not enough. Benedick believes what he overhears (2.3.226–227), and the author revises a theory he had stated with confidence (chapter 18). So truth depends both on who speaks and on whether the listener is willing to doubt what he hears.',
      ru: 'В значительной мере оба произведения показывают, что правда зависит от того, кому позволено говорить, потому что до персонажей она доходит через людей, которых они не считают важными: первого стражника в «Много шума из ничего» (4.2.41–42) и свидетелей в «Into the Wild» (глава 3). Однако одного говорения мало. Бенедик верит подслушанному (2.3.226–227), а автор пересматривает версию, которую утверждал уверенно (глава 18). Поэтому правда зависит и от того, кто говорит, и от того, готов ли слушатель сомневаться в услышанном.',
    },
    origin: 'original',
    minutes: 10,
  },
];
