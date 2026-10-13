import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-form-nonfiction-1',
    subject: 'eng',
    topicIds: ['form-nonfiction'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Read this original sentence from a speech: "Our town needs roads that are safe, schools that are fair and clinics that are open to everyone." Identify the rhetorical device in the sentence and name the three things the speaker lists.',
      ru: 'Прочитайте оригинальное предложение из речи: «Our town needs roads that are safe, schools that are fair and clinics that are open to everyone.» Назовите риторический приём в этом предложении и три вещи, которые перечисляет оратор.',
    },
    markscheme: {
      en: '1 mark: the device is a tricolon (a list of three parallel items). 1 mark: the three items are named: roads that are safe, schools that are fair and clinics that are open to everyone. The parallel structure, shown by the repeated "that are", earns credit when it is pointed out.',
      ru: '1 балл: приём — трикола (tricolon), то есть перечисление из трёх параллельных элементов. 1 балл: названы три элемента: безопасные дороги, справедливые школы и клиники, открытые для всех. Параллельная конструкция, видная по повторяющемуся «that are», засчитывается, если на неё указано.',
    },
    model: {
      en: 'The device is a tricolon. The speaker lists three things the town needs: roads that are safe, schools that are fair and clinics that are open to everyone. The repeated "that are" gives the list a steady rhythm, so the three demands feel equal and complete.',
      ru: 'Приём — трикола (tricolon). Оратор перечисляет три вещи, которые нужны городу: дороги, которые безопасны, школы, которые справедливы, и клиники, которые открыты для всех. Повторяющаяся конструкция «that are» задаёт ровный ритм, поэтому три требования кажутся равными и полными.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-form-nonfiction-2',
    subject: 'eng',
    topicIds: ['form-nonfiction'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Read this original line from a speech about a closed clinic: "Think about who pays for this decision. It will not be the people who signed the plan; it will be the mothers who wait in the rain every morning for a bus to a clinic that is no longer there." Name the appeal the speaker mainly uses in this line and explain its effect on the audience.',
      ru: 'Прочитайте оригинальную фразу из речи о закрытой клинике: "Think about who pays for this decision. It will not be the people who signed the plan; it will be the mothers who wait in the rain every morning for a bus to a clinic that is no longer there." Назовите апелляцию, которую оратор использует здесь в первую очередь, и объясните её действие на аудиторию.',
    },
    markscheme: {
      en: '1 mark: names pathos (an appeal to emotion). 1 mark: points to the image that carries the emotion, the mothers who wait in the rain for a bus to a clinic that no longer exists. 1 mark: explains the effect: the audience feels pity for the mothers and anger at the decision-makers, who do not suffer, and is pushed to side with the speaker before any argument is made.',
      ru: '1 балл: назван пафос (pathos), апелляция к эмоциям. 1 балл: указан образ, который несёт эмоцию: матери, которые ждут автобус под дождём к клинике, которой уже нет. 1 балл: объяснён эффект: аудитория жалеет матерей и гневается на тех, кто принимает решения и сам не страдает, и склоняется на сторону оратора ещё до аргумента.',
    },
    model: {
      en: 'The speaker mainly uses pathos. The image of mothers who wait in the rain every morning for a bus to a clinic that is no longer there makes the listener feel their hardship. The contrast with the people who signed the plan, who do not suffer, produces anger. The effect is that the audience sides with the speaker emotionally before any argument is made.',
      ru: 'Оратор в первую очередь использует пафос (pathos). Образ матерей, которые каждое утро ждут автобус под дождём к клинике, которой уже нет, заставляет слушателя почувствовать их тяготы. Контраст с теми, кто подписал план и не страдает, вызывает гнев. Эффект в том, что аудитория эмоционально встаёт на сторону оратора ещё до того, как прозвучит аргумент.',
    },
    origin: 'original',
    minutes: 5,
  },
];
