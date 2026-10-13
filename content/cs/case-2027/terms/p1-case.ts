import type { Term } from '../../../../src/contract/types';

const OWN_SOURCE = 'Case-study concepts in IB section B';
const TEXTBOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'p1-case-latency',
    term: { en: 'Latency', ru: 'задержка (latency)' },
    def: {
      en: 'The delay between issuing a request and receiving the data or response. Low latency means the response arrives quickly.',
      ru: 'Задержка (latency) — время от отправки запроса до получения данных или ответа. Низкая задержка означает, что ответ приходит быстро.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'textbook', title: TEXTBOOK, locator: 'ch. A1.1, p. 10' },
    example: {
      en: 'A traffic light receives a new timing plan 0.4 seconds after the sensor reading was sent, so the latency of that round trip is 0.4 seconds.',
      ru: 'Светофор получает новый план через 0,4 секунды после отправки показаний датчика, значит задержка этого обмена равна 0,4 секунды.',
    },
    pitfall: {
      en: 'Latency is not bandwidth. Latency is the delay for one request; bandwidth is how much data can move each second.',
      ru: 'Задержка — не пропускная способность. Задержка — время ожидания одного запроса, а пропускная способность — объём данных, который передаётся за секунду.',
    },
  },
  {
    id: 'p1-case-scalability',
    term: { en: 'Scalability', ru: 'масштабируемость (scalability)' },
    def: {
      en: 'The ability of a system to handle more users, requests or data by adding resources, without a redesign and without a large drop in speed.',
      ru: 'Масштабируемость (scalability) — способность системы обрабатывать больше пользователей, запросов или данных за счёт добавления ресурсов, без переделки и без заметного падения скорости.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'own', title: OWN_SOURCE },
    example: {
      en: 'A ticket website adds two more servers before a popular concert goes on sale, so it can serve the extra visitors.',
      ru: 'Сайт продажи билетов добавляет два сервера перед продажей билетов на популярный концерт, чтобы обслужить больше посетителей.',
    },
  },
  {
    id: 'p1-case-encryption-in-transit',
    term: { en: 'Encryption in transit', ru: 'шифрование при передаче (encryption in transit)' },
    def: {
      en: 'Encryption applied to data while it moves between devices or servers, so that anyone who intercepts it sees only scrambled, unreadable ciphertext.',
      ru: 'Шифрование при передаче (encryption in transit) — шифрование данных, пока они перемещаются между устройствами или серверами, поэтому тот, кто их перехватит, увидит только нечитаемый шифротекст.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'textbook', title: TEXTBOOK, locator: 'ch. A2.4, p. 159' },
    example: {
      en: 'A banking app sends a payment over HTTPS, so the card details are encrypted between the phone and the bank.',
      ru: 'Банковское приложение отправляет платёж по протоколу HTTPS, поэтому данные карты зашифрованы между телефоном и банком.',
    },
    pitfall: {
      en: 'Encryption in transit does not protect data stored on a server. Stored data needs encryption at rest.',
      ru: 'Шифрование при передаче не защищает данные, которые хранятся на сервере. Для хранимых данных нужно шифрование при хранении.',
    },
  },
  {
    id: 'p1-case-data-sovereignty',
    term: { en: 'Data sovereignty', ru: 'суверенитет данных (data sovereignty)' },
    def: {
      en: 'The principle that data is governed by the laws of the country where it is collected or stored, which may restrict where it can be kept or moved.',
      ru: 'Суверенитет данных (data sovereignty) — принцип, по которому на данные распространяются законы страны, где их собрали или где они хранятся; это может ограничивать, где данные можно держать или перемещать.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'own', title: OWN_SOURCE },
    example: {
      en: 'A country requires that the health records of its citizens are stored on servers inside its borders.',
      ru: 'Страна требует, чтобы медицинские записи её граждан хранились на серверах внутри границ страны.',
    },
  },
  {
    id: 'p1-case-data-protection',
    term: { en: 'Data protection', ru: 'защита данных (data protection)' },
    def: {
      en: 'The rules and measures that control how personal data is collected, stored, used and shared, so that people keep control of their information.',
      ru: 'Защита данных (data protection) — правила и меры, которые регулируют сбор, хранение, использование и передачу персональных данных, чтобы люди сохраняли контроль над своей информацией.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'own', title: OWN_SOURCE },
    example: {
      en: 'A shop asks for the consent of a customer before it stores the customer email address for marketing messages.',
      ru: 'Магазин запрашивает согласие клиента, прежде чем сохранить его адрес электронной почты для рекламных рассылок.',
    },
  },
  {
    id: 'p1-case-algorithmic-bias',
    term: { en: 'Algorithmic bias', ru: 'алгоритмическая предвзятость (algorithmic bias)' },
    def: {
      en: 'Systematic unfairness in the results of an algorithm that favours or disadvantages a person or group, often because the training data or the design reflects past prejudice.',
      ru: 'Алгоритмическая предвзятость (algorithmic bias) — систематическая несправедливость в результатах алгоритма, которая выгодна или вредит человеку или группе; часто она возникает, когда обучающие данные или решения разработчиков отражают прошлые предубеждения.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'textbook', title: TEXTBOOK, locator: 'ch. A4.4, p. 308' },
    example: {
      en: 'A hiring tool trained on past hiring decisions ranks candidates from one group lower, even when their skills are the same.',
      ru: 'Инструмент отбора, обученный на прошлых решениях о найме, ставит кандидатов одной группы ниже, даже когда их навыки одинаковы.',
    },
  },
  {
    id: 'p1-case-stakeholder',
    term: { en: 'Stakeholder', ru: 'заинтересованная сторона (stakeholder)' },
    def: {
      en: 'A person or group affected by a system or decision, or with an interest in its outcome, such as users, staff, owners or regulators.',
      ru: 'Заинтересованная сторона (stakeholder) — человек или группа, которых затрагивает система или решение, или которые заинтересованы в его результате, например пользователи, сотрудники, владельцы или регуляторы.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'own', title: OWN_SOURCE },
    example: {
      en: 'For a city bus app, the stakeholders include passengers, drivers, the transport authority and the company that builds the app.',
      ru: 'Для приложения городского автобуса заинтересованными сторонами являются пассажиры, водители, транспортное ведомство и компания, которая разрабатывает приложение.',
    },
  },
  {
    id: 'p1-case-trade-off',
    term: { en: 'Trade-off', ru: 'компромисс (trade-off)' },
    def: {
      en: 'A situation where improving one quality of a system, such as speed, reduces another, such as security or cost, so a balance must be chosen.',
      ru: 'Компромисс (trade-off) — ситуация, когда улучшение одного качества системы, например скорости, ухудшает другое, например безопасность или стоимость, поэтому нужно выбрать баланс.',
    },
    syllabus: 'p1-case',
    papers: ['P1'],
    src: { kind: 'own', title: OWN_SOURCE },
    example: {
      en: 'A video app can lower the picture quality to save data on a slow connection: playback starts sooner, but the picture is worse.',
      ru: 'Видеоприложение может снизить качество картинки, чтобы экономить трафик на медленном соединении: воспроизведение начинается быстрее, но картинка хуже.',
    },
  },
];
