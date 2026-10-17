import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-form-prose-1',
    subject: 'eng',
    topicIds: ['form-prose'],
    paper: 'P1',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify the type of narration in this original paragraph. Then state what the reader is limited to knowing.',
      ru: 'Определите тип повествования в этом оригинальном абзаце. Затем укажите, что читатель может знать, а чего не знает.',
    },
    stimulus: {
      en: 'Anna pressed her palm against the cold window. Outside, the bus pulled away without her. She could not tell whether the driver had seen her at all, and the rain had already soaked through her coat.',
      ru: 'Anna pressed her palm against the cold window. Outside, the bus pulled away without her. She could not tell whether the driver had seen her at all, and the rain had already soaked through her coat.',
    },
    markscheme: {
      en: '1 mark: third-person narration, focalised through Anna ("she", and her point of view). 1 mark: the reader knows only what Anna sees, feels and cannot tell (the cold glass, the departing bus, her uncertainty). 1 mark: the reader does not learn whether the driver saw her, because this paragraph does not disclose it; her uncertainty does not prove it could never be known.',
      ru: '1 балл: повествование от третьего лица с фокализацией через Анну («she» и её точка зрения). 1 балл: читатель знает только то, что видит, чувствует и чего не может понять Анна (холодное стекло, уехавший автобус, её неуверенность). 1 балл: читатель не узнаёт, видел ли её водитель, потому что в этом абзаце это не раскрыто; её неуверенность не означает, что узнать это невозможно.',
    },
    model: {
      en: 'The narration is third person, focalised through Anna: the narrator uses "she" and reports only what she sees, feels and cannot tell. The reader knows about the cold window, the rain and the bus that has gone. The reader is limited to Anna\'s uncertainty: whether the driver saw her stays unknown, because this paragraph does not disclose it; her uncertainty does not prove it could never be known.',
      ru: 'Повествование ведётся от третьего лица с фокализацией через Анну: рассказчик говорит «she» и сообщает только то, что она видит, чувствует и не может понять. Читатель знает про холодное стекло, дождь и уехавший автобус. Он ограничен неуверенностью Анны: видел ли её водитель, остаётся неизвестным, потому что она этого тоже не знает.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-form-prose-2',
    subject: 'eng',
    topicIds: ['form-prose'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Identify the sentence that contains free indirect discourse in this original paragraph. Give one reason why the final sentence can be read as echoing Nadia’s thought; acknowledge any ambiguity.',
      ru: 'Укажите предложение с несобственно-прямой речью (free indirect discourse) в этом оригинальном абзаце. Назовите признак, позволяющий прочитать последнюю фразу как отзвук мысли Нади; учтите возможную неоднозначность.',
    },
    stimulus: {
      en: 'The train was late again. Nadia checked her watch and sighed. Of course it was late; nothing in this city arrived on time.',
      ru: 'The train was late again. Nadia checked her watch and sighed. Of course it was late; nothing in this city arrived on time.',
    },
    markscheme: {
      en: '1 mark: identifies "Of course it was late; nothing in this city arrived on time." 1 mark: gives a reason, for example: it is in the third-person past, like the narration, with no "she thought" tag, and "Of course" and "nothing in this city" show Nadia\'s irritation, so it plausibly echoes her evaluation. The narrator could also share that judgement; accept a well-supported qualification.',
      ru: '1 балл: называет предложение «Of course it was late; nothing in this city arrived on time.». 1 балл: приводит причину, например: оно дано в прошедшем времени третьего лица, как и повествование, без «она подумала», а «Of course» и «nothing in this city» выражают раздражение Нади, поэтому вероятно звучит её оценка. Рассказчик тоже мог разделять это суждение; засчитывайте обоснованную оговорку.',
    },
    model: {
      en: 'The sentence "Of course it was late; nothing in this city arrived on time." is free indirect discourse. It is in the third-person past, like the narration, but it has no reporting clause such as "she thought". "Of course" and the generalisation "nothing in this city" show Nadia\'s irritation, so a strong reading is that the narration echoes her irritation. This is not proved by the absent thought tag alone; a narrator could share the evaluation.',
      ru: 'Предложение «Of course it was late; nothing in this city arrived on time.» — несобственно-прямая речь. Оно дано в прошедшем времени третьего лица, как и повествование, но без глагола сообщения вроде «она подумала». «Of course» и обобщение «nothing in this city» выражают раздражение Нади, поэтому убедительна трактовка, что повествование подхватывает её раздражение. Одно отсутствие глагола мысли этого не доказывает: рассказчик может разделять оценку.',
    },
    origin: 'original',
    minutes: 3,
  },
];
