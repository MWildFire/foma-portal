import type { Question } from '../../../../src/contract/types';

// Original questions for topic A2.4 Network security. Scenarios are invented for this portal.
export const questions: Question[] = [
  {
    id: 'a2-4-q01',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Discuss',
    prompt: {
      en: 'A school protects its network with a hardware firewall at the point where the network connects to the internet. Discuss how effective this firewall is at protecting the network. Refer to both strengths and limitations.',
      ru: 'Школа защищает свою сеть аппаратным межсетевым экраном в точке подключения к интернету. Обсудите, насколько эффективно этот экран защищает сеть. Укажите и сильные стороны, и ограничения.',
    },
    markscheme: {
      en: '[1] Strength: filters packets by IP address, port or protocol, so unapproved traffic is blocked at the network boundary. [1] Strength: logs traffic and can raise alerts on suspicious activity, which supports a fast response. [1] Limitation: does little against threats from inside the network, such as a user with legitimate access who misuses it. [1] Limitation: needs skilled configuration; mistakes can leave gaps, block needed services or let encrypted attacks through.',
      ru: '[1] Сильная сторона: фильтрует пакеты по IP-адресу, порту или протоколу, поэтому неразрешённый трафик блокируется на границе сети. [1] Сильная сторона: ведёт журнал трафика и может сигнализировать о подозрительной активности, что помогает быстро реагировать. [1] Ограничение: почти бессилен против угроз изнутри сети, например когда пользователь с законным доступом злоупотребляет им. [1] Ограничение: требует грамотной настройки; ошибки оставляют бреши, блокируют нужные сервисы или пропускают зашифрованные атаки.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q02',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A school network has 200 devices. All of them reach the internet through one router that has a single public IP address. Describe how network address translation (NAT) helps to protect the internal devices from attacks that start on the internet.',
      ru: 'В школьной сети 200 устройств. Все они выходят в интернет через один маршрутизатор с одним публичным IP-адресом. Опишите, как трансляция сетевых адресов (NAT) помогает защитить внутренние устройства от атак, которые начинаются в интернете.',
    },
    markscheme: {
      en: '[1] NAT replaces the private source address of outgoing packets with the router’s public IP address. [1] Internal device addresses are hidden from outside networks, so an attacker cannot target a particular device directly. [1] Only internal addresses that NAT translates can communicate with the outside, which works as a basic form of access control.',
      ru: '[1] NAT заменяет частный адрес отправителя в исходящих пакетах публичным IP-адресом маршрутизатора. [1] Внутренние адреса скрыты от внешней сети, поэтому атакующий не может напрямую обратиться к конкретному устройству. [1] Наружу выходят только те внутренние адреса, которые NAT преобразует и разрешает, — это простой контроль доступа.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q03',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'An online shop for concert tickets goes offline on the morning when a popular tour goes on sale. Logs show requests arriving at the same time from thousands of infected home computers. Describe how this distributed denial-of-service (DDoS) attack makes the shop unavailable.',
      ru: 'Интернет-магазин билетов на концерты перестаёт работать утром, когда в продажу поступают билеты на популярный тур. В журналах видно, что тысячи заражённых домашних компьютеров одновременно шлют запросы. Опишите, как эта распределённая атака типа «отказ в обслуживании» (DDoS) делает магазин недоступным.',
    },
    markscheme: {
      en: '[1] Many compromised devices (a botnet) send requests to the same target at the same time. [1] The server’s bandwidth and processing capacity are used up by this traffic, so it cannot answer genuine customers. [1] Because the traffic comes from many sources, blocking a single IP address does not stop the attack.',
      ru: '[1] Множество заражённых устройств (ботнет) одновременно отправляют запросы на одну и ту же цель. [1] Полоса пропускания и вычислительные ресурсы сервера расходуются на этот поток, поэтому он не может ответить настоящим покупателям. [1] Поскольку трафик идёт из множества источников, блокировка одного IP-адреса атаку не останавливает.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q04',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A student logs in to a school email account over the open Wi-Fi of a café. Explain how a man-in-the-middle attack could capture the student’s password, and explain how HTTPS reduces this risk.',
      ru: 'Ученик входит в школьную электронную почту через открытый Wi-Fi кафе. Объясните, как атака «человек посередине» могла бы перехватить пароль ученика, и объясните, как HTTPS снижает этот риск.',
    },
    markscheme: {
      en: '[1] The attacker controls or intercepts the traffic on the Wi-Fi network and sits between the student and the mail server. [1] If the login is not encrypted, the password travels as readable text, so the attacker can capture it (and could alter messages). [1] HTTPS encrypts the traffic with TLS, so intercepted data is unreadable, and the server’s certificate confirms its identity.',
      ru: '[1] Злоумышленник контролирует или перехватывает трафик Wi-Fi-сети и оказывается между учеником и почтовым сервером. [1] Если вход не зашифрован, пароль передаётся читаемым текстом, и злоумышленник может его перехватить (а также изменить сообщения). [1] HTTPS шифрует трафик с помощью TLS, поэтому перехваченные данные нечитаемы, а сертификат сервера подтверждает его личность.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q05',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'An email that looks like it comes from the school’s IT department asks students to re-enter their password on a web page. Identify the type of attack and give one countermeasure that would reduce its impact.',
      ru: 'Письмо, которое выглядит как письмо от ИТ-отдела школы, просит учеников заново ввести пароль на веб-странице. Назовите тип атаки и укажите одну меру защиты, которая снизит её последствия.',
    },
    markscheme: {
      en: '[1] Phishing (a social-engineering attack). [1] Any one valid countermeasure, for example email filtering, training students to check senders and links, or multi-factor authentication so that a stolen password is not enough.',
      ru: '[1] Фишинг (атака с использованием социальной инженерии). [1] Любая одна верная мера, например фильтрация почты, обучение учеников проверять отправителя и ссылки или многофакторная аутентификация, чтобы одного украденного пароля было недостаточно.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q06',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'An online bank asks customers for a password and then for a one-time code sent to their phone. Describe how this multi-factor authentication (MFA) reduces the risk of unauthorised access to an account.',
      ru: 'Интернет-банк просит клиентов ввести пароль, а затем одноразовый код, отправленный на телефон. Опишите, как эта многофакторная аутентификация (MFA) снижает риск несанкционированного доступа к счёту.',
    },
    markscheme: {
      en: '[1] Access needs two different kinds of proof: something the customer knows (the password) and something the customer has (the phone). [1] An attacker who holds only a stolen or guessed password cannot log in without the second factor. [1] The one-time code is valid for a short time, so a captured code is of little use later.',
      ru: '[1] Для доступа нужны два разных подтверждения: то, что клиент знает (пароль), и то, что у него есть (телефон). [1] Злоумышленник, у которого есть только украденный или подобранный пароль, не может войти без второго фактора. [1] Одноразовый код действует недолго, поэтому перехваченный код вскоре теряет ценность.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q07',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Describe',
    prompt: {
      en: 'A student wants to send a private message to the school’s counselling server over an insecure network. Describe how asymmetric (public-key) encryption protects the message. Start from the point where the student obtains the server’s key.',
      ru: 'Ученик хочет отправить личное сообщение на школьный сервер психологической службы по небезопасной сети. Опишите, как асимметричное (с открытым ключом) шифрование защищает сообщение. Начните с момента, когда ученик получает ключ сервера.',
    },
    markscheme: {
      en: '[1] The student obtains the server’s public key, for example from a digital certificate or a public directory. [1] The student encrypts the message with the server’s public key. [1] Only the server holds the matching private key, so only the server can decrypt the message. [1] The private key never has to be sent over the network, so no secret key is exposed in transit.',
      ru: '[1] Ученик получает открытый ключ сервера, например из цифрового сертификата или публичного каталога. [1] Ученик шифрует сообщение открытым ключом сервера. [1] Только у сервера есть парный закрытый ключ, поэтому расшифровать сообщение может только он. [1] Закрытый ключ не нужно передавать по сети, поэтому секретный ключ не раскрывается при передаче.',
    },
    origin: 'original',
  },
  {
    id: 'a2-4-q08',
    subject: 'cs',
    topicIds: ['a2-4-security'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between symmetric and asymmetric cryptography in terms of the keys used, the problem of key distribution and the speed of encryption.',
      ru: 'Различите симметричную и асимметричную криптографию по используемым ключам, проблеме распределения ключей и скорости шифрования.',
    },
    markscheme: {
      en: '[1] Symmetric uses one shared secret key for encryption and decryption; asymmetric uses a linked public and private key pair. [1] Symmetric needs the shared key to be exchanged securely, which is hard with many users; with asymmetric, the public key can be shared openly. [1] Symmetric encryption is faster and suits large volumes of data; asymmetric is slower because its algorithms are more complex. [1] Asymmetric cryptography also supports digital signatures and secure key exchange, which symmetric encryption on its own does not provide.',
      ru: '[1] Симметричная криптография использует один общий секретный ключ для шифрования и расшифровки; асимметричная — связанную пару открытого и закрытого ключей. [1] Симметричной схеме нужен безопасный обмен общим ключом, что трудно при большом числе пользователей; при асимметричной схеме открытый ключ можно свободно распространять. [1] Симметричное шифрование быстрее и подходит для больших объёмов данных; асимметричное медленнее, потому что его алгоритмы сложнее. [1] Асимметричная криптография также поддерживает цифровые подписи и безопасный обмен ключами, чего одно только симметричное шифрование не даёт.',
    },
    origin: 'original',
  },
];
