import type { Term } from '../../../../src/contract/types';

// Key terms for topic A2.2 Network architecture. Definitions are written in our own words, based on the
// key elements of the textbook definitions (Oxford IB DP Computer Science, ch. A2.2). Russian text is an adaptation.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'a2-2-topology',
    term: { en: 'Network topology', ru: 'топология сети (network topology)' },
    def: {
      en: 'The layout of the nodes (devices) and links (connections) in a network. Physical topology is the real arrangement of cables and hardware; logical topology is the route that data follows.',
      ru: 'Расположение узлов (устройств) и связей (соединений) в сети. Физическая топология — это реальная раскладка кабелей и оборудования; логическая топология — путь, по которому движутся данные.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 124' },
    example: {
      en: 'Physical: cables run from every computer to one switch in the server room. Logical: the switch forwards each frame only to the port of its destination.',
      ru: 'Физически: кабели идут от каждого компьютера к одному коммутатору в серверной. Логически: коммутатор передаёт каждый кадр только на порт нужного адресата.',
    },
    pitfall: {
      en: 'A cabling diagram does not show how data actually moves, so physical and logical topology can differ.',
      ru: 'Схема кабелей не показывает, как на самом деле движутся данные, поэтому физическая и логическая топологии могут различаться.',
    },
  },
  {
    id: 'a2-2-star',
    term: { en: 'Star topology', ru: 'топология «звезда» (star topology)' },
    def: {
      en: 'A layout in which every device has its own direct connection to one central device, usually a switch. A fault on one cable affects only one device, but a fault in the centre stops the whole network.',
      ru: 'Схема, в которой каждое устройство имеет собственное прямое соединение с одним центральным устройством, обычно коммутатором. Обрыв одного кабеля затрагивает только одно устройство, а отказ центра останавливает всю сеть.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 124' },
    example: {
      en: 'A home network with one router at the centre; phones, laptops and a television connect to it directly.',
      ru: 'Домашняя сеть с одним маршрутизатором в центре; телефоны, ноутбуки и телевизор подключены к нему напрямую.',
    },
    pitfall: {
      en: 'A star survives the loss of one cable, but the central switch is a single point of failure: if it fails, the whole network fails.',
      ru: 'Звезда переживает обрыв одного кабеля, но центральный коммутатор — единая точка отказа: если он выйдет из строя, остановится вся сеть.',
    },
  },
  {
    id: 'a2-2-mesh',
    term: { en: 'Mesh topology', ru: 'сетчатая топология (mesh topology)' },
    def: {
      en: 'A layout in which nodes connect directly to many other nodes, so data can be rerouted when a link fails. In a full mesh every node links to every other node; in a partial mesh only some pairs are linked.',
      ru: 'Схема, в которой узлы напрямую соединяются со многими другими узлами, поэтому при обрыве связи данные можно переправить по другому пути. В полной сетке каждый узел связан с каждым, в частичной — только с некоторыми.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 125' },
    example: {
      en: 'Home Wi-Fi mesh systems, where several access units link to each other and can carry traffic around a unit that has failed.',
      ru: 'Домашние системы Wi-Fi mesh, где несколько точек связаны между собой и могут передавать трафик в обход вышедшей из строя точки.',
    },
    pitfall: {
      en: 'A full mesh of n nodes needs n × (n − 1) ÷ 2 links, so the cost rises quickly as nodes are added.',
      ru: 'Полная сетка из n узлов требует n × (n − 1) ÷ 2 связей, поэтому стоимость быстро растёт с числом узлов.',
    },
  },
  {
    id: 'a2-2-hybrid',
    term: { en: 'Hybrid network', ru: 'гибридная сеть (hybrid network)' },
    def: {
      en: 'A network that combines parts of different topologies, for example a star core with mesh links at the edge, to keep the strengths of each design and reduce the weaknesses of any single one.',
      ru: 'Сеть, которая объединяет части разных топологий, например звездообразное ядро и сетчатые связи на периферии, чтобы сохранить сильные стороны каждой схемы и уменьшить слабости любой отдельной.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 126' },
    example: {
      en: 'A school with a star core in the main building and wireless mesh nodes that cover the sports hall and the grounds.',
      ru: 'Школа со звездообразным ядром в главном здании и беспроводными mesh-узлами, которые покрывают спортзал и территорию.',
    },
    pitfall: {
      en: 'A hybrid is designed for a stated need, not a random mix; its management and maintenance usually cost more than a single topology.',
      ru: 'Гибрид проектируют под конкретную задачу, а не как случайную смесь; управление и обслуживание обычно обходятся дороже одной топологии.',
    },
  },
  {
    id: 'a2-2-server',
    term: { en: 'Server', ru: 'сервер (server)' },
    def: {
      en: 'Hardware or software that supplies information, shared assets or services to client machines across a network. Servers are built for dependability and fault tolerance rather than personal use.',
      ru: 'Аппаратное или программное обеспечение, которое предоставляет информацию, общие ресурсы или услуги клиентским устройствам по сети. Серверы строят ради высокой надёжности и отказоустойчивости, а не для личного использования.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 127' },
    example: {
      en: 'A file server in a school stores shared documents, so teachers can open them from any classroom.',
      ru: 'Файловый сервер в школе хранит общие документы, и учителя могут открыть их из любого кабинета.',
    },
    pitfall: {
      en: 'A server is defined by the role it plays on the network, not by its hardware: any computer can become a server.',
      ru: 'Сервер определяется ролью в сети, а не конкретным железом: любой компьютер может стать сервером.',
    },
  },
  {
    id: 'a2-2-dns',
    term: { en: 'DNS server', ru: 'DNS-сервер (DNS server)' },
    def: {
      en: 'A server that converts a human-readable domain name, such as a web address, into the numerical IP address needed to send packets. If it does not hold the answer, it queries higher-level servers and caches the result for the time to live (TTL) stated in the record.',
      ru: 'Сервер, который переводит понятное человеку доменное имя, например адрес сайта, в числовой IP-адрес, нужный для отправки пакетов. Если ответа у него нет, он запрашивает серверы более высокого уровня и кэширует результат на время жизни записи (TTL), указанное в ней.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 127' },
    example: {
      en: 'The address www.school-portal.org is looked up once; a repeat visit within the TTL is answered from the cache.',
      ru: 'Адрес www.school-portal.org сначала ищется через DNS; повторный визит в пределах TTL обслуживается из кэша.',
    },
    pitfall: {
      en: 'A DNS server does not give devices their addresses. That job belongs to DHCP.',
      ru: 'DNS-сервер не выдаёт устройствам их адреса. Это задача DHCP.',
    },
  },
  {
    id: 'a2-2-dhcp',
    term: { en: 'DHCP server', ru: 'DHCP-сервер (DHCP server)' },
    def: {
      en: 'A server that automatically gives each device on a network an IP address and other settings, such as the subnet mask, the default gateway and the address of a DNS server. Addresses come from a pool on a limited lease, or can be fixed to a device by its MAC address.',
      ru: 'Сервер, который автоматически выдаёт устройствам сети IP-адрес и другие настройки: маску подсети, шлюз по умолчанию и адрес DNS-сервера. Адреса выдаются из пула на ограниченный срок аренды или закрепляются за устройством по его MAC-адресу.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 128' },
    example: {
      en: 'A new phone joins school Wi-Fi and receives an address through the four DORA steps: discover, offer, request, acknowledge.',
      ru: 'Новый телефон подключается к школьному Wi-Fi и получает адрес за четыре шага DORA: discover, offer, request, acknowledge.',
    },
    pitfall: {
      en: 'DHCP gives a device its address but does not translate names; name-to-address translation is the job of DNS.',
      ru: 'DHCP выдаёт устройству адрес, но не переводит имена; перевод имени в адрес делает DNS.',
    },
  },
  {
    id: 'a2-2-proxy',
    term: { en: 'Proxy server', ru: 'прокси-сервер (proxy server)' },
    def: {
      en: 'A server through which a user\'s requests pass on their way to the internet. It checks each request against filtering rules, may cache content and keeps logs, then forwards the request or refuses it.',
      ru: 'Сервер, через который проходят запросы пользователя к интернету. Он проверяет каждый запрос по правилам фильтрации, может хранить копии содержимого и вести журнал, а затем передаёт запрос дальше или отклоняет его.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 131' },
    example: {
      en: 'A school proxy blocks a social-media site for all pupils and records which sites each device opened.',
      ru: 'Школьный прокси блокирует социальную сеть для всех учеников и записывает, какие сайты открывало каждое устройство.',
    },
    pitfall: {
      en: 'The proxy stands between the client and the internet; the web server is the destination that hosts the page. The two roles must not be confused.',
      ru: 'Прокси стоит между клиентом и интернетом; веб-сервер — это адресат, который хранит страницу. Эти роли нельзя путать.',
    },
  },
  {
    id: 'a2-2-client-server',
    term: { en: 'Client-server model', ru: 'модель «клиент-сервер» (client-server model)' },
    def: {
      en: 'A centralised networking model in which dedicated servers hold and manage most resources and services, while clients send requests that the servers answer. The exchange follows a request and response pattern.',
      ru: 'Централизованная модель сети, в которой выделенные серверы хранят и управляют большинством ресурсов и услуг, а клиенты отправляют запросы, на которые отвечают серверы. Обмен построен по схеме «запрос — ответ».',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 134' },
    example: {
      en: 'A browser (client) asks a web server for a page, and the server returns the page data.',
      ru: 'Браузер (клиент) запрашивает у веб-сервера страницу, а сервер возвращает её данные.',
    },
    pitfall: {
      en: 'The server is a single point of failure in this model: when it goes down, every client loses the service.',
      ru: 'В этой модели сервер — единая точка отказа: когда он останавливается, все клиенты теряют сервис.',
    },
  },
  {
    id: 'a2-2-p2p',
    term: { en: 'Peer-to-peer (P2P) model', ru: 'одноранговая модель, P2P (peer-to-peer model)' },
    def: {
      en: 'A decentralised model in which every participant, called a peer, has equal capabilities and responsibilities. No dedicated server is needed, because each peer can act as both client and server and share resources directly with other peers.',
      ru: 'Децентрализованная модель, в которой каждый участник, называемый пиром (peer), имеет равные возможности и обязанности. Выделенный сервер не нужен: каждый пир может быть и клиентом, и сервером и напрямую обмениваться ресурсами с другими пирами.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 135' },
    example: {
      en: 'BitTorrent: users download pieces of one file from many other users at the same time, with no central file server.',
      ru: 'BitTorrent: пользователи одновременно скачивают части одного файла у многих других пользователей, без центрального файлового сервера.',
    },
    pitfall: {
      en: 'Decentralised does not mean secure. Without a central authority, rules are harder to enforce and threats are harder to trace.',
      ru: 'Децентрализованная сеть не значит безопасная. Без центрального органа правила труднее соблюдать, а угрозы — труднее отследить.',
    },
  },
  {
    id: 'a2-2-segmentation',
    term: { en: 'Network segmentation', ru: 'сегментация сети (network segmentation)' },
    def: {
      en: 'Splitting one network into smaller, isolated parts, called segments or subnetworks, so that traffic, performance and security rules can be managed for each part separately.',
      ru: 'Деление одной сети на более мелкие изолированные части — сегменты или подсети, — чтобы трафиком, производительностью и правилами безопасности можно было управлять отдельно для каждой части.',
    },
    syllabus: 'A2.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.2, p. 136' },
    example: {
      en: 'A bank keeps its guest Wi-Fi in a separate segment from the network that holds customer accounts.',
      ru: 'Банк держит гостевой Wi-Fi в отдельном сегменте, отделённом от сети со счетами клиентов.',
    },
    pitfall: {
      en: 'Segmentation does not isolate everything automatically: traffic can still cross between segments when routing rules allow it, so those rules must be set on purpose.',
      ru: 'Сегментация не изолирует всё автоматически: трафик может пройти между сегментами, если это разрешают правила маршрутизации, поэтому эти правила нужно задавать намеренно.',
    },
  },
];
