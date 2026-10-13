import type { Term } from '../../../../src/contract/types';

// Topic A2.4 Network security (P1). Definitions are in our own words, based on the key terms and the
// definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 154-164.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'a2-4-firewall',
    term: { en: 'Firewall', ru: 'межсетевой экран (firewall)' },
    def: {
      en: 'A network security device or program that checks each packet entering or leaving a network against a set of rules, based on addresses, ports and protocols, and then allows or blocks it.',
      ru: 'Сетевое устройство или программа безопасности, которые проверяют каждый пакет, входящий в сеть или выходящий из неё, по набору правил (адреса, порты, протоколы), и затем разрешают или блокируют его.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 154' },
    example: {
      en: 'A hardware firewall at the school’s internet connection blocks packets to ports that no lesson needs.',
      ru: 'Аппаратный межсетевой экран на выходе школы в интернет блокирует пакеты на порты, которые не нужны ни одному уроку.',
    },
    pitfall: {
      en: 'A firewall checks packets against rules; by itself it does not stop a user who is already inside the network or an attack that uses allowed traffic.',
      ru: 'Межсетевой экран проверяет пакеты по правилам; сам по себе он не остановит пользователя, который уже находится внутри сети, или атаку, идущую по разрешённым каналам.',
    },
  },
  {
    id: 'a2-4-whitelist',
    term: { en: 'Whitelist', ru: 'белый список (whitelist)' },
    def: {
      en: 'A list of approved sources, such as IP addresses, domains or applications, that are always allowed through. Anything not on the list is treated as untrusted.',
      ru: 'Список одобренных источников (IP-адресов, доменов или приложений), трафик которых всегда разрешён. Всё, чего нет в списке, считается недоверенным.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 154' },
    example: {
      en: 'A school adds the IP address of its online learning platform to a whitelist so that lessons are never blocked.',
      ru: 'Школа вносит IP-адрес своей платформы для онлайн-уроков в белый список, чтобы уроки никогда не блокировались.',
    },
    pitfall: {
      en: 'A whitelist lets through only what is approved, while a blacklist blocks only what is listed as harmful. They are not the same.',
      ru: 'Белый список пропускает только одобренное, а чёрный — блокирует только то, что внесено как вредное. Это не одно и то же.',
    },
  },
  {
    id: 'a2-4-nat',
    term: { en: 'Network address translation (NAT)', ru: 'трансляция сетевых адресов (network address translation, NAT)' },
    def: {
      en: 'A process in which a router rewrites the address information in packet headers as traffic passes through, so that many private devices can share one public IP address. Internal addresses stay hidden from outside networks.',
      ru: 'Процесс, при котором маршрутизатор переписывает адресную информацию в заголовках пакетов при прохождении трафика, поэтому много частных устройств могут использовать один публичный IP-адрес. Внутренние адреса остаются скрытыми от внешней сети.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 155' },
    example: {
      en: 'All 200 devices of a school network appear to the internet as one public address.',
      ru: 'Все 200 устройств школьной сети выглядят для интернета как один публичный адрес.',
    },
    pitfall: {
      en: 'NAT gives a side benefit of hiding addresses; it is not a full firewall and does not inspect the content of packets.',
      ru: 'NAT даёт побочный эффект — скрывает адреса; это не полноценный межсетевой экран, и он не проверяет содержимое пакетов.',
    },
  },
  {
    id: 'a2-4-ddos',
    term: { en: 'Distributed denial of service (DDoS) attack', ru: 'распределённая атака типа «отказ в обслуживании» (distributed denial of service, DDoS)' },
    def: {
      en: 'An attack in which many compromised machines flood a service with requests at the same time, until genuine users cannot reach it.',
      ru: 'Атака, при которой множество заражённых устройств одновременно засыпают сервис запросами, и настоящие пользователи не могут до него добраться.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 156' },
    example: {
      en: 'An online ticket shop goes offline on the day when tickets for a popular concert go on sale.',
      ru: 'Интернет-магазин билетов становится недоступен в день продажи билетов на популярный концерт.',
    },
    pitfall: {
      en: 'A DDoS attack does not steal data; its goal is to make the service unavailable to its users.',
      ru: 'DDoS-атака не крадёт данные; её цель — сделать сервис недоступным для пользователей.',
    },
  },
  {
    id: 'a2-4-mitm',
    term: { en: 'Man-in-the-middle (MitM) attack', ru: 'атака «человек посередине» (man-in-the-middle, MitM)' },
    def: {
      en: 'An attack in which the attacker secretly sits between two parties, intercepting and possibly altering their messages while each party believes it is talking directly to the other.',
      ru: 'Атака, при которой злоумышленник тайно находится между двумя сторонами, перехватывает и может изменять их сообщения, а каждая сторона думает, что общается напрямую с другой.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 156' },
    example: {
      en: 'An attacker on the open Wi-Fi of a café reads the password that a student types into an unencrypted login page.',
      ru: 'Злоумышленник в открытой Wi-Fi-сети кафе читает пароль, который ученик вводит на незашифрованной странице входа.',
    },
    pitfall: {
      en: 'HTTPS with a valid certificate is the main defence against a MitM attack; an open, unencrypted connection gives no such protection.',
      ru: 'Основная защита от MitM — HTTPS с действительным сертификатом; в открытом незашифрованном соединении такой защиты нет.',
    },
  },
  {
    id: 'a2-4-phishing',
    term: { en: 'Phishing', ru: 'фишинг (phishing)' },
    def: {
      en: 'A fraudulent message that pretends to come from a trusted organisation, designed to trick people into revealing passwords, card details or other sensitive information.',
      ru: 'Мошенническое сообщение, которое выдаёт себя за надёжную организацию и обманом заставляет людей раскрыть пароли, данные карт или другую конфиденциальную информацию.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 156' },
    example: {
      en: 'An email that looks like it comes from a bank asks the recipient to confirm account details on a fake website.',
      ru: 'Письмо, которое выглядит как письмо от банка, просит подтвердить данные счёта на поддельном сайте.',
    },
    pitfall: {
      en: 'Phishing relies on people rather than software faults, so training and checking the sender matter as much as filters.',
      ru: 'Фишинг опирается на людей, а не на ошибки в программах, поэтому обучение и проверка отправителя важны не меньше фильтров.',
    },
  },
  {
    id: 'a2-4-mfa',
    term: { en: 'Multi-factor authentication (MFA)', ru: 'многофакторная аутентификация (multi-factor authentication, MFA)' },
    def: {
      en: 'Requiring two or more different kinds of proof, such as a password and a one-time code from an app, before access is granted. A stolen password on its own is then not enough.',
      ru: 'Требование предъявить два или более разных подтверждения, например пароль и одноразовый код из приложения, прежде чем доступ будет предоставлен. Один украденный пароль в этом случае не даёт доступа.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 158' },
    example: {
      en: 'An online bank asks for a password and then for a code sent to the customer’s phone.',
      ru: 'Интернет-банк сначала просит пароль, а затем код, отправленный на телефон клиента.',
    },
    pitfall: {
      en: 'MFA reduces the risk of unauthorised access but does not replace encryption or software updates.',
      ru: 'MFA снижает риск несанкционированного доступа, но не заменяет шифрование и обновления программ.',
    },
  },
  {
    id: 'a2-4-encryption',
    term: { en: 'Encryption', ru: 'шифрование (encryption)' },
    def: {
      en: 'The process of converting readable data (plaintext) into a coded form (ciphertext) with an algorithm and a key, so that only someone holding the right key can recover the original data.',
      ru: 'Процесс преобразования читаемых данных (открытого текста) в закодированный вид (шифротекст) с помощью алгоритма и ключа; исходные данные может восстановить только тот, у кого есть нужный ключ.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 159' },
    example: {
      en: 'A message sent over HTTPS cannot be read by anyone who intercepts it on the network.',
      ru: 'Сообщение, отправленное по HTTPS, нельзя прочитать, даже если его перехватили в сети.',
    },
    pitfall: {
      en: 'Encryption protects data in transit, but it does not help once an attacker already has the key.',
      ru: 'Шифрование защищает данные при передаче, но не помогает, если злоумышленник уже получил ключ.',
    },
  },
  {
    id: 'a2-4-symmetric',
    term: { en: 'Symmetric cryptography', ru: 'симметричная криптография (symmetric cryptography)' },
    def: {
      en: 'An encryption method in which the same secret key both encrypts and decrypts the data. The key must be shared securely between the parties before they start.',
      ru: 'Метод шифрования, в котором один и тот же секретный ключ и шифрует, и расшифровывает данные. Стороны должны заранее безопасно обменяться этим ключом.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 160' },
    example: {
      en: 'A Wi-Fi network in which all of its devices use one shared key.',
      ru: 'Сеть Wi-Fi, в которой все устройства используют один общий ключ.',
    },
    pitfall: {
      en: 'Symmetric encryption is fast, but the real difficulty is sharing the key securely, especially when there are many users.',
      ru: 'Симметричное шифрование быстрое, но главная трудность — безопасно передать ключ, особенно когда пользователей много.',
    },
  },
  {
    id: 'a2-4-asymmetric',
    term: { en: 'Asymmetric cryptography', ru: 'асимметричная криптография (asymmetric cryptography)' },
    def: {
      en: 'An encryption method that uses a linked pair of keys: a public key that anyone can use to encrypt data for the owner, and a private key that only the owner holds to decrypt it.',
      ru: 'Метод шифрования, который использует пару связанных ключей: открытый ключ, которым любой может зашифровать данные для владельца, и закрытый ключ, который есть только у владельца и нужен для расшифровки.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 160' },
    example: {
      en: 'A student encrypts a message with the school server’s public key, and only the server can read it.',
      ru: 'Ученик шифрует сообщение открытым ключом школьного сервера, и прочитать его может только сервер.',
    },
    pitfall: {
      en: 'The keys have different roles: the public key encrypts and the private key decrypts. Students often mix them up.',
      ru: 'У ключей разные роли: открытый ключ шифрует, а закрытый расшифровывает. Их часто путают.',
    },
  },
  {
    id: 'a2-4-digital-certificate',
    term: { en: 'Digital certificate', ru: 'цифровой сертификат (digital certificate)' },
    def: {
      en: 'A certificate that links a public key to a verified identity, such as a website or an organisation. A trusted certificate authority (CA) checks the owner and signs the certificate, so a browser can trust it.',
      ru: 'Электронный документ, который связывает открытый ключ с проверенной личностью, например сайтом или организацией. Доверенный центр сертификации (certificate authority, CA) проверяет владельца и подписывает сертификат, поэтому браузер может ему доверять.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 161' },
    example: {
      en: 'The padlock in a browser’s address bar shows that the bank’s website presents a valid certificate.',
      ru: 'Значок замка в адресной строке браузера показывает, что сайт банка предъявляет действительный сертификат.',
    },
    pitfall: {
      en: 'A certificate proves who owns the server; it does not protect the server itself against attacks.',
      ru: 'Сертификат подтверждает, кто владеет сервером; он не защищает сам сервер от атак.',
    },
  },
  {
    id: 'a2-4-digital-signature',
    term: { en: 'Digital signature', ru: 'цифровая подпись (digital signature)' },
    def: {
      en: 'A value made by encrypting a hash of a document with the signer’s private key. Anyone with the matching public key can check that the document is unchanged and came from the key holder.',
      ru: 'Значение, которое получают, зашифровав хеш документа закрытым ключом подписавшего. Любой, у кого есть парный открытый ключ, может проверить, что документ не изменён и пришёл от владельца ключа.',
    },
    syllabus: 'A2.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.4, p. 160' },
    example: {
      en: 'A signed PDF report shows that nobody has changed it since it was signed.',
      ru: 'Подписанный PDF-отчёт показывает, что с момента подписания его никто не менял.',
    },
    pitfall: {
      en: 'A digital signature proves integrity and origin; it does not encrypt the document, so the content can still be read.',
      ru: 'Цифровая подпись подтверждает целостность и авторство, но не шифрует документ: его содержимое всё ещё можно прочитать.',
    },
  },
];
