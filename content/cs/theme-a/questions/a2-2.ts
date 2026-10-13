import type { Question } from '../../../../src/contract/types';

// New questions for topic A2.2 Network architecture. The ported set (port-a2-2-*) covers switches, routers,
// modems, fibre and wired versus wireless media, so these three fill the gaps: a DNS lookup, VLAN segmentation
// and client-server against peer-to-peer. Scenarios are original.
export const questions: Question[] = [
  {
    id: 'a2-2-q01',
    subject: 'cs',
    topicIds: ['a2-2-architecture'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Describe',
    prompt: {
      en: 'A student types www.school-portal.org into a browser on a school laptop. The school\'s local DNS server has no cached record for this name. Describe how the local DNS server obtains the IP address, naming each type of server it contacts. Explain why the answer is kept for a period of time.',
      ru: 'Ученик вводит www.school-portal.org в браузере школьного ноутбука. В локальном DNS-сервере школы нет кэшированной записи об этом имени. Опишите, как локальный DNS-сервер получает IP-адрес, и назовите каждый тип серверов, к которым он обращается. Объясните, почему ответ сохраняется в течение некоторого времени.',
    },
    markscheme: {
      en: '[1] The local DNS server queries a root DNS server, which does not hold the address and refers the query to the top-level domain (TLD) server for .org. [1] The TLD server refers the query to the authoritative DNS server for school-portal.org. [1] The authoritative server returns the IP address, and the local DNS server passes it to the laptop. [1] The answer is cached for its time to live (TTL), so repeat requests are answered quickly and the load on DNS servers falls.',
      ru: '[1] Локальный DNS-сервер запрашивает корневой DNS-сервер, который не знает адреса и направляет запрос к серверу домена верхнего уровня (TLD) для .org. [1] TLD-сервер направляет запрос к авторитетному DNS-серверу домена school-portal.org. [1] Авторитетный сервер возвращает IP-адрес, а локальный DNS передаёт его ноутбуку. [1] Ответ кэшируется на время жизни записи (TTL), поэтому повторные запросы выполняются быстро, а нагрузка на DNS-серверы снижается.',
    },
    origin: 'original',
  },
  {
    id: 'a2-2-q02',
    subject: 'cs',
    topicIds: ['a2-2-architecture'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A dental clinic uses one 16-port switch for all of its computers. The reception computers, a server holding patient records and a public Wi-Fi access point for patients are all on one flat network. The manager wants to place the patient Wi-Fi and the records server in separate VLANs on the same switch, without buying more hardware. Explain how this segmentation improves security and how it improves performance.',
      ru: 'Стоматологическая клиника использует один 16-портовый коммутатор для всех своих компьютеров. Компьютеры регистратуры, сервер с картами пациентов и публичная Wi-Fi-точка для пациентов сейчас находятся в одной плоской сети. Менеджер хочет разместить Wi-Fi для пациентов и сервер с картами в разных VLAN на том же коммутаторе, не покупая новое оборудование. Объясните, как такая сегментация повышает безопасность и как она повышает производительность.',
    },
    markscheme: {
      en: '[1] Security: the patient Wi-Fi VLAN cannot reach the records VLAN unless an inter-VLAN routing rule allows it, so a device on the public network cannot reach patient data. [1] Security: the separation is logical, so it holds on one shared switch, and an inter-VLAN rule can still let the reception computers reach the records server. [1] Performance: broadcast traffic stays inside each VLAN, so heavy streaming on the patient network does not slow the reception computers.',
      ru: '[1] Безопасность: Wi-Fi VLAN для пациентов не может обратиться к VLAN с картами без правила маршрутизации между VLAN (inter-VLAN routing), поэтому устройство в публичной сети не получает доступ к данным пациентов. [1] Безопасность: разделение логическое, поэтому оно работает на одном общем коммутаторе, а правило может разрешить компьютерам регистратуры доступ к серверу. [1] Производительность: широковещательный трафик остаётся внутри своего VLAN, поэтому интенсивное потоковое видео в сети пациентов не замедляет компьютеры регистратуры.',
    },
    origin: 'original',
  },
  {
    id: 'a2-2-q03',
    subject: 'cs',
    topicIds: ['a2-2-architecture'],
    paper: 'P1',
    section: 'A',
    marks: 5,
    command: 'Discuss',
    prompt: {
      en: 'A school club wants to share revision files among its 40 members. Option A is a central file server managed by the club\'s teacher. Option B is a peer-to-peer system in which members share files directly from their own laptops. Discuss which option is more suitable, considering control, reliability and security.',
      ru: 'Школьный клуб хочет делиться конспектами для подготовки к экзаменам между своими 40 участниками. Вариант A — центральный файловый сервер, которым управляет руководитель клуба. Вариант B — одноранговая (P2P) система, в которой участники обмениваются файлами напрямую со своих ноутбуков. Обсудите, какой вариант подходит лучше, с учётом контроля, надёжности и безопасности.',
    },
    markscheme: {
      en: '[1] Client-server (A): central management gives one place to control access and keep one up-to-date copy of each file. [1] Client-server (A): the server is a single point of failure and needs maintenance, so the club depends on one machine. [1] P2P (B): with no central server there is no hosting cost, and the network keeps working when some laptops are switched off, although file availability varies. [1] P2P (B): with no central authority, access rules and monitoring are hard to apply, and unwanted or harmful files are harder to trace. [1] A supported conclusion, for example option A, because control, backups and accountability matter more than the lower cost of P2P for a school club; any reasoned conclusion that weighs both sides earns this mark.',
      ru: '[1] Клиент-сервер (A): централизованное управление даёт одно место для контроля доступа и одну актуальную копию каждого файла. [1] Клиент-сервер (A): сервер — единая точка отказа и требует обслуживания, поэтому клуб зависит от одной машины. [1] P2P (B): без центрального сервера нет затрат на хостинг, и сеть продолжает работать, если часть ноутбуков выключена, хотя доступность файлов меняется. [1] P2P (B): без центрального органа трудно применять правила доступа и мониторинг, а нежелательные или вредоносные файлы труднее отследить. [1] Обоснованный вывод, например вариант A: контроль, резервное копирование и подотчётность важнее низкой стоимости P2P для школьного клуба; любой обоснованный вывод, который взвешивает обе стороны, получает этот балл.',
    },
    origin: 'original',
  },
];
