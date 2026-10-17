import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-perspective-1',
    subject: 'eng',
    topicIds: ['concept-perspective'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Read the passage. Identify the perspective the passage uses: the type of narrator, and whose thoughts the reader follows.',
      ru: 'Прочитайте отрывок. Определите перспективу, которую использует отрывок: тип рассказчика и то, чьими мыслями следует читатель.',
    },
    stimulus: {
      en: 'The letter lay on the hall table where Ruth had left it, face down, the way one leaves a dog that might bite. She did not pick it up. From the kitchen came the sound of the kettle, and she told herself that the tea would be ready in a minute and the letter could wait until then. It could not, of course. Everything in the house had begun to wait.',
      ru: 'The letter lay on the hall table where Ruth had left it, face down, the way one leaves a dog that might bite. She did not pick it up. From the kitchen came the sound of the kettle, and she told herself that the tea would be ready in a minute and the letter could wait until then. It could not, of course. Everything in the house had begun to wait.',
    },
    markscheme: {
      en: '1 mark: third-person narration: the narrator says "Ruth" and "she" and stands outside her. 1 mark: close focalisation through Ruth: the reader follows her thoughts, for example "she told herself", with possible narratorial commentary at the end.',
      ru: '1 балл: повествование от третьего лица (third-person narration): рассказчик говорит «Ruth» и «she» и стоит вне неё. 1 балл: близкая фокализация (focalisation) через Рут: читатель следует за её мыслями, например «she told herself», при этом в конце возможен комментарий рассказчика.',
    },
    model: {
      en: 'The passage uses a third-person narrator with close focalisation through Ruth. The narrator stays outside her, but the reader follows her thoughts, as in "she told herself that the tea would be ready in a minute". The final judgement may be her unacknowledged thought or narratorial irony; the sentence alone does not settle the attribution.',
      ru: 'В отрывке использовано повествование от третьего лица с близкой фокализацией через Рут. Рассказчик стоит вне неё, но читатель следует за её мыслями, как во фразе «she told herself that the tea would be ready in a minute». Финальное суждение можно прочитать как её невысказанную мысль или как иронический комментарий рассказчика; одно предложение не устанавливает это однозначно.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-concept-perspective-2',
    subject: 'eng',
    topicIds: ['concept-perspective'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain what this perspective hides from the reader. Refer to the letter in your answer.',
      ru: 'Объясните, что эта перспектива скрывает от читателя. Упомяните в ответе письмо.',
    },
    stimulus: {
      en: 'The letter lay on the hall table where Ruth had left it, face down, the way one leaves a dog that might bite. She did not pick it up. From the kitchen came the sound of the kettle, and she told herself that the tea would be ready in a minute and the letter could wait until then. It could not, of course. Everything in the house had begun to wait.',
      ru: 'The letter lay on the hall table where Ruth had left it, face down, the way one leaves a dog that might bite. She did not pick it up. From the kitchen came the sound of the kettle, and she told herself that the tea would be ready in a minute and the letter could wait until then. It could not, of course. Everything in the house had begun to wait.',
    },
    markscheme: {
      en: '1 mark: the content of the letter and the identity of its sender are hidden. 1 mark: the reason for the fear is not given; the reader sees only what Ruth notices and assumes. 1 mark: the account withholds independent evidence about the letter, so a judgement on her fear remains uncertain; credit a grounded reading of the last sentences as narratorial commentary.',
      ru: '1 балл: скрыты содержание письма и личность отправителя. 1 балл: причина страха не названа: читатель видит только то, что замечает и предполагает Рут. 1 балл: в рассказе нет независимых сведений о письме, поэтому обоснованность её страха остаётся неопределённой; засчитывайте доказательное прочтение последних предложений как комментария рассказчика.',
    },
    model: {
      en: 'The perspective hides what the letter says and who sent it. Because the narration stays close to Ruth, the reader knows only what she notices and fears: the position of the letter, the sound of the kettle, her reluctance to pick it up. The reader cannot know why she avoids the letter, or whether her fear is justified, because the passage withholds that information; this need not mean that every sentence is unambiguously her thought.',
      ru: 'Перспектива скрывает содержание письма и то, кто его отправил. Поскольку повествование остаётся близко к Рут, читатель знает только то, что замечает и боится она: положение письма, звук чайника, её нежелание взять его в руки. Читатель не может узнать, почему она избегает письма и оправдан ли её страх, поскольку отрывок не сообщает этих сведений; это не означает, что каждое предложение однозначно передаёт её мысль.',
    },
    origin: 'original',
    minutes: 5,
  },
];
