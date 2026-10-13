import type { Question } from '../../../src/contract/types';

const guidingQuestion = 'How does the writer use the setting to present Lena\'s isolation?';
const sentences = 'A. Lena boards the early train, finds a seat by the window and watches the platform.\nB. Five of the six seats in her carriage are empty, so her solitude is visible before she speaks.\nC. Lena\'s solitude is set against the crowded city that waits beyond the platform, which suggests that her isolation is chosen as much as imposed.';

export const questions: Question[] = [
  {
    id: 'chk-p1-focus-1',
    subject: 'eng',
    topicIds: ['p1-focus'],
    paper: 'P1',
    marks: 2,
    command: 'Suggest',
    prompt: {
      en: `Rewrite the sentence below so that it answers the guiding question: "${guidingQuestion}" Sentence: "The carriage has six seats, and Lena sits in the one by the window."`,
      ru: `Перепишите предложение так, чтобы оно отвечало направляющему вопросу: «${guidingQuestion}» Предложение: «The carriage has six seats, and Lena sits in the one by the window.»`,
    },
    markscheme: {
      en: '1 mark: the rewrite makes a claim about the setting (what the seats or the window show), not a description of what Lena does. 1 mark: it answers the guiding question directly and names an effect on the reader, here isolation.',
      ru: '1 балл: в переписанном предложении есть утверждение об обстановке (что показывают места или окно), а не описание действий Лены. 1 балл: оно прямо отвечает на направляющий вопрос и называет эффект для читателя — одиночество.',
    },
    model: {
      en: 'With six seats to choose from, Lena takes the one by the window, and the setting turns that choice into a picture of her isolation: she is apart from the room before anyone speaks to her.',
      ru: 'Из шести мест Лена выбирает место у окна, и обстановка превращает этот выбор в картину её одиночества: она отделена от комнаты, прежде чем кто-либо к ней обратится.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-p1-focus-2',
    subject: 'eng',
    topicIds: ['p1-focus'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: `The three sentences in the stimulus come from one student's essay on the guiding question: "${guidingQuestion}" Identify the sentence that retells the extract instead of answering the question, and explain how you can tell.`,
      ru: `Три предложения в стимуле взяты из одного эссе ученика, который отвечает на направляющий вопрос: «${guidingQuestion}» Определите предложение, которое пересказывает отрывок вместо ответа на вопрос, и объясните, как это видно.`,
    },
    stimulus: { en: sentences, ru: sentences },
    markscheme: {
      en: '1 mark: names sentence A. 1 mark: explains that A only lists what Lena does (boards, finds, watches) and makes no claim about the setting or its effect, while B and C each make a claim about the setting and link it to the question.',
      ru: '1 балл: названо предложение A. 1 балл: объяснено, что A только перечисляет действия Лены (садится, находит место, смотрит) и не утверждает ничего об обстановке и её эффекте, тогда как B и C делают утверждение об обстановке и связывают его с вопросом.',
    },
    model: {
      en: 'Sentence A. It lists what Lena does (boards the train, finds a seat, watches the platform) and makes no claim about the setting. Sentences B and C each make a claim about the setting and its effect, such as the empty seats showing her solitude, so they answer the question.',
      ru: 'Предложение A. Оно перечисляет, что делает Лена (садится в поезд, находит место, смотрит на платформу), и не делает никаких утверждений об обстановке. Предложения B и C каждое утверждает что-то об обстановке и её эффекте, например что пустые места показывают её одиночество, поэтому они отвечают на вопрос.',
    },
    origin: 'original',
    minutes: 4,
  },
];
