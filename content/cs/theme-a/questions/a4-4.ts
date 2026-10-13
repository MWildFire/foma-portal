import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'a4-4-q01',
    subject: 'cs',
    topicIds: ['a4-4-ethics'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'A user shares an old flood photo as if it were from this week. She genuinely believes the photo is new and wants to warn her friends. A separate group of accounts posts the same photo with invented claims, to persuade people that the local council is hiding a flood. Distinguish between the two posts, and justify which of them is disinformation.',
      ru: 'Пользовательница публикует старое фото наводнения так, будто оно сделано на этой неделе. Она искренне считает фото новым и хочет предупредить друзей. Отдельная группа аккаунтов публикует то же фото с выдуманными утверждениями, чтобы убедить людей, что местные власти скрывают наводнение. Различите две публикации и обоснуйте, какая из них является дезинформацией.',
    },
    markscheme: {
      en: '[1] The first post is misinformation: the content is false, but it is shared without any intent to deceive. [1] The second post is disinformation: the false content is created and spread on purpose to mislead people and damage trust in the council. [1] The justification rests on intent: the same false photo could be either, and the coordinated aim of the group makes the second post disinformation.',
      ru: '[1] Первая публикация — ошибочная информация (misinformation): содержание ложно, но его распространяют без намерения обмануть. [1] Вторая публикация — дезинформация (disinformation): ложное содержание создано и распространено намеренно, чтобы ввести людей в заблуждение и подорвать доверие к властям. [1] Обоснование опирается на намерение: одно и то же ложное фото может быть и тем и другим, а скоординированная цель группы делает вторую публикацию дезинформацией.',
    },
    origin: 'original',
  },
  {
    id: 'a4-4-q02',
    subject: 'cs',
    topicIds: ['a4-4-ethics'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Discuss',
    prompt: {
      en: 'A home-appliance company adds an AI assistant to its smart speaker. The assistant listens for its wake word and keeps recordings of household conversations for a year to improve its advice. Recording is switched on by default, and the terms of use are long. Discuss the ethical implications of this pervasive AI for the people in the household and for the company.',
      ru: 'Компания бытовой техники добавляет ИИ-ассистента в свою умную колонку. Ассистент слушает ключевое слово и хранит записи домашних разговоров в течение года, чтобы улучшать свои советы. Запись включена по умолчанию, а условия использования длинные. Обсудите этические последствия такого повсеместного ИИ для членов семьи и для компании.',
    },
    markscheme: {
      en: '[1] Consent and privacy: household members and guests have not given informed consent to having their conversations stored. [1] Surveillance and misuse: a year of stored private conversations creates a risk of leaks or of use for other purposes. [1] Transparency and accountability: default settings and long terms make it hard to know what is kept, and it is unclear who answers for a breach. [1] Balanced judgement: the better advice is a real benefit, but it does not outweigh the harm unless recording is opt-in, the terms are clear and users can delete their data (mitigating risk).',
      ru: '[1] Согласие и приватность: члены семьи и гости не давали информированного согласия на хранение своих разговоров. [1] Слежка и злоупотребление: год хранения личных разговоров создаёт риск утечки или использования в других целях. [1] Прозрачность и подотчётность: настройки по умолчанию и длинные условия мешают понять, что хранится, и неясно, кто отвечает за утечку. [1] Взвешенное суждение: лучшие советы — реальная польза, но она не перевешивает вред, пока запись не включается по явному согласию, условия не ясны и пользователи не могут удалить данные (снижение риска).',
    },
    origin: 'original',
  },
];
