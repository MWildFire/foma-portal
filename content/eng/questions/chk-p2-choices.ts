import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-choices-1',
    subject: 'eng',
    topicIds: ['p2-choices'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Read this original paragraph: "The letter arrived on a Tuesday. She read it twice at the kitchen table, then folded it into the sugar bowl and made the tea as if nothing had happened." Name one authorial choice in the paragraph, explain its effect on the reader, and link it to this prompt: "How does the writer show a character hiding her feelings?"',
      ru: 'Прочитайте оригинальный абзац: «The letter arrived on a Tuesday. She read it twice at the kitchen table, then folded it into the sugar bowl and made the tea as if nothing had happened.» Назовите один авторский выбор в абзаце, объясните его эффект на читателя и свяжите его с заданием: «How does the writer show a character hiding her feelings?» (Как автор показывает, что персонаж прячет свои чувства?)',
    },
    markscheme: {
      en: '1 mark: names one choice clearly, for example the everyday detail of the sugar bowl, or the short first sentence. 1 mark: explains the effect on the reader: the reader sees the hiding in an action and notices the gap between the two readings and the calm "as if nothing had happened". 1 mark: links the effect to the prompt: the feelings are shown through what she does, not through what she says.',
      ru: '1 балл: ясно назван один выбор, например бытовая деталь с сахарницей или короткое первое предложение. 1 балл: объяснён эффект на читателя: читатель видит, как спрятано письмо, и замечает разрыв между двумя прочтениями и спокойствием «as if nothing had happened». 1 балл: эффект связан с заданием: чувства показаны через то, что она делает, а не через то, что она говорит.',
    },
    model: {
      en: 'The writer chooses an everyday object, the sugar bowl, as the place where the letter is hidden. The reader sees the hiding happen in an action, and notices the gap between the two readings and the calm "as if nothing had happened". So the feeling is shown through what she does, not through what she says, which answers the prompt.',
      ru: 'Автор выбирает обыденный предмет, сахарницу, как место, где прячется письмо. Читатель видит, как она прячет письмо, и замечает разрыв между двумя прочтениями и спокойствием «as if nothing had happened». Поэтому чувство показано через то, что она делает, а не через то, что она говорит, и это отвечает на задание.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-choices-2',
    stimulus: {
      en: 'The letter arrived on a Tuesday. She read it twice at the kitchen table, then folded it into the sugar bowl and made the tea as if nothing had happened.',
      ru: 'The letter arrived on a Tuesday. She read it twice at the kitchen table, then folded it into the sugar bowl and made the tea as if nothing had happened.',
    },
    subject: 'eng',
    topicIds: ['p2-choices'],
    paper: 'P2',
    marks: 4,
    command: 'Evaluate',
    prompt: {
      en: 'Using the original paragraph supplied with this question, name two authorial choices: one about the sentences, and one about the setting or the objects. Evaluate which of the two does more to show the hiding, and give a reason for your judgement.',
      ru: 'По авторскому учебному абзацу, приведённому в этом задании на английском, назовите два авторских решения: одно связано с построением предложений, другое — с обстановкой или предметами. Оцените, какое из них в большей степени показывает сокрытие, и обоснуйте своё суждение.',
    },
    markscheme: {
      en: '1 mark: names a choice about the sentences, for example the short first sentence, or the actions joined by "then" and "and". 1 mark: names a choice about the setting or the objects, for example the kitchen table or the sugar bowl. 1 mark: makes a judgement about which one does more, with a clear criterion (what the reader can see). Either choice can be defended with close evidence; do not require the sugar bowl to win. 1 mark: gives a reason that follows from the paragraph, for example: the sugar bowl turns the hiding into a visible act, while the sentence rhythm only sounds calm.',
      ru: '1 балл: назван выбор, связанный с предложениями, например короткое первое предложение или действия, соединённые словами «then» и «and». 1 балл: назван выбор, связанный с обстановкой или предметами, например кухонный стол или сахарница. 1 балл: дано суждение о том, какой выбор делает больше, с ясным критерием (что может увидеть читатель). Можно обосновать преимущество любого решения; сахарница не обязана «победить». 1 балл: обоснование следует из абзаца, например: сахарница превращает сокрытие в видимое действие, а ритм предложений лишь звучит спокойно.',
    },
    model: {
      en: 'The sugar bowl does more. Folding the letter into a container for something ordinary turns the hiding into an action the reader can see. The sentence rhythm, with its "then" and "and", supports the calm, but it only sounds controlled, while the sugar bowl shows the control. So for this prompt the object is the stronger choice.',
      ru: 'Сахарница делает больше. Когда письмо прячут в сахарницу, сокрытие становится действием, которое читатель видит. Ритм предложений с «then» и «and» поддерживает спокойствие, но он лишь звучит сдержанно, тогда как сахарница показывает саму сдержанность. Поэтому для этого задания предмет — более сильный выбор.',
    },
    origin: 'original',
    minutes: 6,
  },
];
