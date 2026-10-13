import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-transformation-1',
    subject: 'eng',
    topicIds: ['concept-transformation'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Read the short text. Explain the turning point: identify the line where the change happens, then say what changes between the characters and what the change does for the reader.',
      ru: 'Прочитайте короткий текст. Объясните поворотный момент: назовите строку, где происходит перемена, затем скажите, что меняется между персонажами и что перемена делает с читателем.',
    },
    stimulus: {
      en: 'Every Sunday the three of them walked to the lake and said very little.\nOn the last Sunday of August, Leila stopped at the jetty and took off her shoes.\n"The water is still cold," her father said. "It always is," she answered, and for the first time in years she did not look away when he looked at her.',
      ru: 'Every Sunday the three of them walked to the lake and said very little.\nOn the last Sunday of August, Leila stopped at the jetty and took off her shoes.\n"The water is still cold," her father said. "It always is," she answered, and for the first time in years she did not look away when he looked at her.',
    },
    markscheme: {
      en: '1 mark: identifies the turning point, the final clause "for the first time in years she did not look away". 1 mark: states what changes: the daughter stops avoiding her father and meets his gaze, so the relationship moves from distance to contact. 1 mark: names a technique that shows the change, for example the contrast between "said very little" and the direct dialogue, or the long final sentence after short lines. 1 mark: explains the effect on the reader, for example that the restraint of the first lines makes the change feel like a release.',
      ru: '1 балл: называет поворотный момент, финальную часть «for the first time in years she did not look away» («впервые за много лет она не отвела взгляд»). 1 балл: называет, что меняется: дочь перестаёт избегать отца и встречает его взгляд, поэтому отношения переходят от дистанции к контакту. 1 балл: называет приём, который показывает перемену, например контраст между «said very little» («говорили очень мало») и прямым диалогом или длинное финальное предложение после коротких фраз. 1 балл: объясняет эффект для читателя, например то, что сдержанность первых строк делает перемену похожей на освобождение.',
    },
    model: {
      en: 'The turning point is the final clause: "for the first time in years she did not look away when he looked at her". Before it, the family "said very little", and the words "for the first time in years" show that Leila has looked away for a long time, so the relationship seems fixed in distance. After it, what changes is the one thing that was missing: direct contact. The reader feels this as release, because the text has been restrained, with short lines and little direct contact, so one unbroken gaze carries the weight of a changed relationship.',
      ru: 'Поворотный момент — финальная часть фразы: «for the first time in years she did not look away when he looked at her» («впервые за много лет она не отвела взгляд, когда он посмотрел на неё»). До него семья «said very little» («говорила очень мало»), а слова «for the first time in years» показывают, что Лейла долго отводила глаза, поэтому отношения казались застывшими в дистанции. После этой фразы меняется то, чего не хватало: прямой контакт. Читатель воспринимает это как освобождение, потому что текст сдержан, с короткими репликами и почти без прямого контакта, и один непрерывный взгляд несёт вес изменившихся отношений.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'chk-concept-transformation-2',
    subject: 'eng',
    topicIds: ['concept-transformation'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify the technique that shows the change in tone between the two sentences. Quote the words that show it, and state how the tone changes.',
      ru: 'Определите приём, который показывает смену тона между двумя предложениями. Приведите слова, которые это показывают, и укажите, как меняется тон.',
    },
    stimulus: {
      en: 'The letter came on Tuesday, and I read it at the table with my coat still on, as if I might need to leave.\nBy Friday I had stopped being careful, and I wrote back in capitals and laughed out loud and did not bother to read it twice.',
      ru: 'The letter came on Tuesday, and I read it at the table with my coat still on, as if I might need to leave.\nBy Friday I had stopped being careful, and I wrote back in capitals and laughed out loud and did not bother to read it twice.',
    },
    markscheme: {
      en: '1 mark: identifies the technique as polysyndeton, the repeated "and" that joins the actions in the second sentence. 1 mark: quotes evidence from the second sentence, for example "and I wrote back in capitals and laughed out loud". 1 mark: states the change in tone: from cautious and controlled, shown by the hedge "as if I might need to leave", to free and joyful, shown by the capitals, the laughter and the lack of care.',
      ru: '1 балл: называет приём: полисиндетон (polysyndeton), то есть повторяющееся «and», которое соединяет действия во втором предложении. 1 балл: приводит доказательство из второго предложения, например «and I wrote back in capitals and laughed out loud». 1 балл: называет смену тона: от осторожного и сдержанного, что показывает оговорка «as if I might need to leave» («как будто мне, возможно, придётся уйти»), к свободному и радостному, что показывают заглавные буквы, смех и небрежность.',
    },
    model: {
      en: 'The technique is polysyndeton. In the second sentence "and" joins the actions three times, in "wrote back in capitals and laughed out loud and did not bother", so the actions pile up without a pause. The tone moves from cautious and controlled, shown by the hedge "as if I might need to leave", to free and joyful, shown by the capitals, the laughter and the carelessness about rereading.',
      ru: 'Приём — полисиндетон (polysyndeton). Во втором предложении «and» три раза соединяет действия: «wrote back in capitals and laughed out loud and did not bother», поэтому действия нанизываются без паузы. Тон меняется от осторожного и сдержанного, что показывает оговорка «as if I might need to leave» («как будто мне, возможно, придётся уйти»), к свободному и радостному, что показывают заглавные буквы, смех и небрежность к перечитыванию.',
    },
    origin: 'original',
    minutes: 5,
  },
];
