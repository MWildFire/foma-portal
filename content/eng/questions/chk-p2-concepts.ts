import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-concepts-1',
    subject: 'eng',
    topicIds: ['p2-concepts'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify the main concept and the second concept of this invented prompt, and explain in one sentence why the main concept should lead the thesis: "Discuss how two works represent a mother and son who have stopped speaking. To what extent does their communication change the reader\'s view of the family?"',
      ru: 'Определите главный и второй концепт этого условного задания и одним предложением объясните, почему главный концепт должен вести тезис: «Discuss how two works represent a mother and son who have stopped speaking. To what extent does their communication change the reader\'s view of the family?»',
    },
    markscheme: {
      en: '1 mark: the main concept is representation, because the prompt asks how two works represent the pair. 1 mark: the second concept is communication, because the "to what extent" clause tests how their speech or silence changes the reader\'s view. 1 mark: a sentence that explains the lead, for example: the thesis must first show the portrayal, and communication only qualifies it. Accept another second concept (for example perspective) if the student justifies it from the words of the clause.',
      ru: '1 балл: главный концепт — репрезентация, потому что задание спрашивает, как два произведения изображают эту пару. 1 балл: второй концепт — коммуникация, потому что часть «to what extent» проверяет, как их речь или молчание меняют взгляд читателя. 1 балл: предложение, которое объясняет, почему концепт ведёт: например, тезис сначала должен показать изображение, а коммуникация лишь уточняет его. Принимайте другой второй концепт (например, перспективу), если ученик обосновывает его словами из задания.',
    },
    model: {
      en: 'Main concept: representation, because the prompt asks how the works represent the mother and son. Second concept: communication, because the degree clause tests how their speech and silence change the reader\'s view. Representation leads, since the thesis has to show the relationship first; communication qualifies it.',
      ru: 'Главный концепт: репрезентация, потому что задание спрашивает, как произведения изображают мать и сына. Второй концепт: коммуникация, потому что часть о степени проверяет, как их речь и молчание меняют взгляд читателя. Репрезентация ведёт, потому что тезис сначала должен показать отношения; коммуникация лишь уточняет.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-concepts-2',
    subject: 'eng',
    topicIds: ['p2-concepts'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A student reads the invented prompt "Compare how two works represent a village\'s response to a stranger. To what extent does culture decide that response?" as a question about culture, and writes at length about the village\'s customs. Explain what the examiner would miss in this answer. Then write a thesis sentence that makes representation the lead and culture the support.',
      ru: 'Ученик читает условное задание «Compare how two works represent a village\'s response to a stranger. To what extent does culture decide that response?» как вопрос о культуре и подробно пишет об обычаях деревни. Объясните, что упустит экзаменатор в этом ответе. Затем напишите тезис, в котором репрезентация ведёт, а культура поддерживает.',
    },
    markscheme: {
      en: '1 mark: representation is the main concept (the prompt asks how the works show the response) and culture is the second (the degree clause tests whether culture decides it). 1 mark: an answer about customs describes culture, so the examiner finds no choice by either writer and no technique to assess. 1 mark: the thesis names both works and the representation of the response. 1 mark: the thesis names culture as the force being tested and states a degree, for example "largely, but not entirely".',
      ru: '1 балл: главный концепт — репрезентация (задание спрашивает, как произведения показывают ответ), второй — культура (часть о степени проверяет, определяет ли культура ответ). 1 балл: ответ об обычаях описывает культуру, поэтому экзаменатор не находит выбора ни одного автора и приёма для оценки. 1 балл: тезис называет оба произведения и репрезентацию ответа. 1 балл: тезис называет культуру как силу, которую проверяют, и задаёт степень, например «в основном, но не полностью».',
    },
    model: {
      en: 'The examiner would miss the writers\' choices: what each work shows of the response, what it leaves out, and any judgement about the degree. Thesis: "In both works the village meets the stranger through its rituals and its silences; culture decides that response largely, but not entirely, because the writers show the rules bending when a stranger is watched closely."',
      ru: 'Экзаменатор не найдёт выборов авторов: что каждое произведение показывает из ответа, что оставляет за кадром и какое суждение о степени делает. Тезис: «В обоих произведениях деревня встречает чужака через свои ритуалы и свои молчания; культура определяет этот ответ в основном, но не полностью, потому что авторы показывают, как правила гнутся, когда за чужаком внимательно наблюдают.»',
    },
    origin: 'original',
    minutes: 6,
  },
];
