import type { Question } from '../../../src/contract/types';

const paragraph = 'The signal dropped at midnight. Ana stood on the bridge. Nothing came. Behind her the river kept moving, loud and indifferent, carrying the city\'s lights and noise away toward the sea while she waited with her arm still raised.';

export const questions: Question[] = [
  {
    id: 'chk-p1-analysis-1',
    subject: 'eng',
    topicIds: ['p1-analysis'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Identify the technique in this sentence and explain its effect on the reader: "The classroom was a cage of clocks, and every tick was a bar."',
      ru: 'Определите приём в этом предложении и объясните его эффект на читателя: «The classroom was a cage of clocks, and every tick was a bar.»',
    },
    markscheme: {
      en: '1 mark: names the technique correctly as a metaphor, a direct comparison without "like" or "as". 1 mark: explains an effect on the reader, for example the lesson feels like imprisonment, and the passing of time closes in like the bars of a cell.',
      ru: '1 балл: верно назван приём — метафора (metaphor), прямое сравнение без «like» и «as». 1 балл: объяснён эффект на читателя, например: урок ощущается как заточение, а течение времени смыкается, как прутья камеры.',
    },
    model: {
      en: 'The technique is a metaphor: the classroom is called a cage outright, with no "like" or "as". The effect on the reader is that the lesson feels like imprisonment, and the passing of time becomes the bars that close in.',
      ru: 'Приём — метафора: класс прямо назван клеткой, без «like» и «as». Эффект на читателя: урок ощущается как заточение, а течение времени превращается в прутья, которые смыкаются.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'chk-p1-analysis-2',
    subject: 'eng',
    topicIds: ['p1-analysis'],
    paper: 'P1',
    marks: 4,
    command: 'Evaluate',
    prompt: {
      en: 'Read the original paragraph. Evaluate how well the short sentences create tension in this passage. Support your judgement with one quotation.',
      ru: 'Прочитайте оригинальный абзац. Оцените, насколько хорошо короткие предложения создают напряжение в этом отрывке. Подтвердите суждение одной цитатой.',
    },
    stimulus: { en: paragraph, ru: paragraph },
    markscheme: {
      en: '1 mark: names the technique, short sentences, which is a matter of syntax and pace. 1 mark: explains the effect: the clipped rhythm mirrors the failed signal and builds tension. 1 mark: quotes accurately, for example "Nothing came." or "while she waited with her arm still raised", and links the quotation to the effect. 1 mark: evaluates how well it works, with a reason: the two-word sentence "Nothing came." abruptly ends each expectation. Accept a supported account of the contrast with the final long sentence: it may widen the scene while the continuing wait prolongs the tension, or offer a calmer view. No negative verdict is required.',
      ru: '1 балл: назван приём — короткие предложения (синтаксис и темп). 1 балл: объяснён эффект: отрывистый ритм повторяет пропавший сигнал и нарастает напряжение. 1 балл: точная цитата, например «Nothing came.» или «while she waited with her arm still raised», связанная с эффектом. 1 балл: дана оценка того, насколько хорошо приём работает, с обоснованием: двухсловное предложение «Nothing came.» резко обрывает ожидание. Принимайте обоснованное объяснение контраста с последним длинным предложением: оно может расширять картину и продлевать напряжение продолжающегося ожидания либо создавать более спокойный взгляд. Отрицательная оценка не обязательна.',
    },
    model: {
      en: 'The short sentences are the main device here, working through syntax and pace. "The signal dropped at midnight." and "Ana stood on the bridge." are brisk, and "Nothing came." is the shortest line of all, so the rhythm stops with the failed signal and builds the tension of waiting. The device works well because the single word "Nothing" lands like a shut door. The longer final sentence widens the view from Ana to the moving river, but "while she waited with her arm still raised" keeps her suspended in the same unfinished action. On this reading the contrast prolongs the tension instead of simply releasing it. A different reading needs its own textual support.',
      ru: 'Короткие предложения здесь — главный приём, и работает он через синтаксис и темп. «The signal dropped at midnight.» и «Ana stood on the bridge.» отрывисты, а «Nothing came.» — самая короткая строка, поэтому ритм останавливается вместе с пропавшим сигналом и выстраивает напряжение ожидания. Приём работает хорошо, потому что одно слово «Nothing» ложится, как захлопнувшаяся дверь. Последнее длинное предложение расширяет взгляд от Аны к движущейся реке, но слова «while she waited with her arm still raised» удерживают её в том же незавершённом действии. При таком прочтении контраст продлевает напряжение, а не просто снимает его. Иное прочтение нужно подтвердить текстом.',
    },
    origin: 'original',
    minutes: 6,
  },
];
