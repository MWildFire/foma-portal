import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-culture-1',
    subject: 'eng',
    topicIds: ['concept-culture'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    stimulus: {
      en: 'In an invented village, a newborn child is welcomed with a red cord stretched across the gate. Each guest unties one knot before entering, and the guests count the knots aloud. The child is not named until the last knot is untied.',
      ru: 'В придуманной деревне новорождённого встречают красной нитью, натянутой поперёк ворот. Каждый гость перед входом развязывает один узел, а гости вслух считают узлы. Ребёнка не называют по имени, пока не развязан последний узел.',
    },
    prompt: {
      en: 'Explain how the ritual in this description shows a value of its culture. Use one technique to support your explanation.',
      ru: 'Объясните, как обряд в этом описании показывает ценность его культуры. Используйте один приём, чтобы подкрепить объяснение.',
    },
    markscheme: {
      en: '1 mark: names a value the ritual carries, for example that a new member belongs to the whole group, which must act together before the child is named. 1 mark: explains how a detail shows the value, for example each guest unties one knot, so the welcome is a shared task. 1 mark: names one technique, such as the symbolic cord or the patterned sequence of actions; one description of counting does not by itself establish a recurring textual motif, and explains its effect on the reader.',
      ru: '1 балл: названа ценность обряда, например: новый член принадлежит всей группе, которая действует вместе, прежде чем ребёнка назовут по имени. 1 балл: объяснено, как деталь показывает ценность, например: каждый гость развязывает один узел, поэтому приём ребёнка становится общей задачей. 1 балл: назван один приём, например символическую нить или упорядоченную последовательность действий; одно описание счёта само по себе не устанавливает повторяющегося мотива текста, и объяснён его эффект для читателя.',
    },
    model: {
      en: 'The ritual shows that a newborn belongs to the whole community, not only to the family. Each guest unties one knot before the child is named, so the welcome is a task shared by all. The red cord works as a symbol: the shared untying connects the public act of naming with collective participation. The passage does not describe a circle or say that the child must earn membership.',
      ru: 'Обряд показывает, что новорождённый принадлежит всей общине, а не только семье. Каждый гость развязывает один узел до того, как ребёнка назовут по имени, поэтому приём становится общей задачей. Красная нить работает как символ: совместное развязывание связывает публичное наречение имени с участием общины. В тексте нет круга и не сказано, что ребёнок должен заслужить принадлежность.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-concept-culture-2',
    subject: 'eng',
    topicIds: ['concept-culture'],
    paper: 'P2',
    marks: 3,
    command: 'Outline',
    stimulus: {
      en: 'In one invented household, guests take off their shoes at the door and speak only when they are addressed. In the next invented household, guests keep their shoes on and talk loudly through the meal, because quiet is taken to mean that they have something to hide.',
      ru: 'В одном придуманном доме гости снимают обувь у порога и говорят только тогда, когда к ним обращаются. В соседнем придуманном доме гости не снимают обуви и громко разговаривают за едой, потому что тишину там считают признаком того, что человеку есть что скрывать.',
    },
    prompt: {
      en: 'Outline how placing these two sets of rules side by side shows a clash of cultures. Name the technique that makes the contrast visible, and state one way in which each set of rules looks right to its own members.',
      ru: 'Опишите, как постановка этих двух наборов правил рядом показывает столкновение культур. Назовите приём, который делает контраст видимым, и укажите, как каждый набор правил выглядит верным для своих членов.',
    },
    markscheme: {
      en: '1 mark: the two sets of rules are placed side by side, so the reader sees two opposed values, for example respect for silence against the openness of loud talk. 1 mark: names juxtaposition as the technique that makes the contrast visible. 1 mark: states one way in which each set looks right to its members, for example silence shows respect in the first household, and openness shows honesty in the second.',
      ru: '1 балл: два набора правил поставлены рядом, поэтому читатель видит две противоположные ценности, например уважение к тишине и открытость громкой речи. 1 балл: названо сопоставление (juxtaposition) как приём, который делает контраст видимым. 1 балл: указано, как каждый набор выглядит верным своим членам, например: в первом доме тишина выражает уважение, а во втором открытость выражает честность.',
    },
    model: {
      en: 'Placing the two households side by side shows that the rules encode opposed values: one values respect for the host through silence, the other values honesty through open talk. The technique is juxtaposition. To the first household the silent guest seems polite; to the second, the same silence looks like concealment, and each set of rules looks right to its own members.',
      ru: 'Постановка двух домов рядом показывает, что правила несут противоположные ценности: один дом ценит уважение к хозяевам через тишину, другой — честность через открытую речь. Приём здесь — сопоставление (juxtaposition). Для первого дома молчаливый гость кажется вежливым, для второго та же тишина выглядит как сокрытие, и каждый набор правил кажется верным своим членам.',
    },
    origin: 'original',
    minutes: 5,
  },
];
