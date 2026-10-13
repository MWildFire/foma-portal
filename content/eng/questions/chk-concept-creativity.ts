import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-creativity-1',
    subject: 'eng',
    topicIds: ['concept-creativity'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Read the passage. Identify the convention of the fairy tale that the passage breaks, and give one phrase from the passage as evidence.',
      ru: 'Прочитайте отрывок. Определите конвенцию волшебной сказки, которую нарушает отрывок, и приведите одну фразу из текста как доказательство.',
    },
    stimulus: {
      en: 'Once upon a time, the princess waited in the tower for a rescue that never came. She had read the same stories as everyone else, and she knew the ending. So she climbed down the ivy herself, lost one shoe on the way, and went to find the prince, who was asleep under a tree and had no idea he was late.',
      ru: 'Once upon a time, the princess waited in the tower for a rescue that never came. She had read the same stories as everyone else, and she knew the ending. So she climbed down the ivy herself, lost one shoe on the way, and went to find the prince, who was asleep under a tree and had no idea he was late.',
    },
    markscheme: {
      en: '1 mark: the convention is named: a heroine waits passively in a tower for a rescuer, and the rescue should come from someone else. 1 mark: a phrase is quoted as evidence, for example "waited in the tower for a rescue that never came" (the convention) or "climbed down the ivy herself" (the break).',
      ru: '1 балл: конвенция названа верно: героиня пассивно ждёт в башне спасения, которое должно прийти от кого-то другого. 1 балл: приведена фраза как доказательство, например «waited in the tower for a rescue that never came» (конвенция) или «climbed down the ivy herself» (нарушение).',
    },
    model: {
      en: 'The passage breaks the convention that the heroine waits passively to be rescued. The evidence is "waited in the tower for a rescue that never came", which sets up the convention, and "climbed down the ivy herself", which overturns it.',
      ru: 'Отрывок нарушает конвенцию, по которой героиня пассивно ждёт спасения. Доказательство: фраза «waited in the tower for a rescue that never came» задаёт конвенцию, а «climbed down the ivy herself» («спустилась по плющу сама») её опровергает.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-concept-creativity-2',
    subject: 'eng',
    topicIds: ['concept-creativity'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the effect of the broken convention on the reader. Refer to the lost shoe in your answer, and say what the reader has to do to make sense of the passage.',
      ru: 'Объясните, какой эффект нарушенная конвенция производит на читателя. Упомяните в ответе потерянную туфлю и скажите, что читатель должен сделать, чтобы понять отрывок.',
    },
    stimulus: {
      en: 'Once upon a time, the princess waited in the tower for a rescue that never came. She had read the same stories as everyone else, and she knew the ending. So she climbed down the ivy herself, lost one shoe on the way, and went to find the prince, who was asleep under a tree and had no idea he was late.',
      ru: 'Once upon a time, the princess waited in the tower for a rescue that never came. She had read the same stories as everyone else, and she knew the ending. So she climbed down the ivy herself, lost one shoe on the way, and went to find the prince, who was asleep under a tree and had no idea he was late.',
    },
    markscheme: {
      en: '1 mark: the reader expects the rescue plot of a fairy tale, and the passage reverses it because the princess acts for herself. 1 mark: the reversal surprises or amuses the reader and makes them question why the heroine was expected to wait. 1 mark: the lost shoe alludes to a familiar story in which a lost shoe leads a prince to the heroine, so the reader recognises the source and compares the two versions. 1 mark: the reader must revise the expected plot before the passage makes sense, and the prince, asleep and unaware that he is late, adds humour to the reversal.',
      ru: '1 балл: читатель ждёт сюжета волшебной сказки о спасении, а отрывок его переворачивает, потому что принцесса действует сама. 1 балл: переворот удивляет или забавляет читателя и заставляет его задуматься, почему от героини вообще ждали пассивности. 1 балл: потерянная туфля — аллюзия (allusion) на известную историю, где потерянная туфля приводит принца к героине; читатель узнаёт источник и сравнивает две версии. 1 балл: читатель должен пересмотреть ожидаемый сюжет, прежде чем отрывок станет понятен; принц, который спит и не знает, что опоздал, добавляет юмора.',
    },
    model: {
      en: 'The passage sets up the expectation of a fairy tale and then breaks it. The princess stops waiting for a rescue that never came and climbs down the ivy herself, so the reader has to revise the story they thought they knew. The lost shoe is an allusion to a famous story in which a lost shoe leads a prince to the heroine, so the reader recognises the source and sees how the new version reverses it. The effect is partly humour: the prince is asleep and has no idea he is late, so the reader enjoys the reversal and also questions why the heroine was ever expected to wait. Before the passage makes sense, the reader must give up the expected plot and accept a new one.',
      ru: 'Отрывок задаёт ожидание волшебной сказки и тут же его ломает. Принцесса перестаёт ждать спасения, которое так и не пришло, и спускается по плющу сама, поэтому читатель должен пересмотреть историю, которую считал знакомой. Потерянная туфля — аллюзия на известную историю, где потерянная туфля приводит принца к героине: читатель узнаёт источник и видит, как новая версия его переворачивает. Эффект отчасти комический: принц спит и не знает, что опоздал, поэтому читатель радуется перевороту и одновременно задаётся вопросом, почему от героини вообще ждали пассивности. Прежде чем отрывок станет понятен, читатель должен отказаться от ожидаемого сюжета и принять новый.',
    },
    origin: 'original',
    minutes: 5,
  },
];
