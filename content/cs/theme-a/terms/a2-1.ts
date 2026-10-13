import type { Term } from '../../../../src/contract/types';

// Topic A2.1 Network fundamentals (P1). Definitions are in our own words, based on the key terms
// and the definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 101-123.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'a2-1-lan',
    term: { en: 'Local area network (LAN)', ru: 'локальная сеть (local area network, LAN)' },
    def: {
      en: 'A network that links devices across a small area, such as one school, office or hospital, usually covering about one kilometre at most. It is fast, has low latency and is mainly used to share files, printers and applications locally.',
      ru: 'Сеть, которая соединяет устройства на небольшой территории, например в одной школе, офисе или больнице, обычно не длиннее примерно одного километра. Она быстрая, имеет низкую задержку и в основном служит для локального обмена файлами, принтерами и приложениями.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 101' },
    example: {
      en: 'The computer lab of a school, connected by one switch and a wireless access point.',
      ru: 'Компьютерный класс школы, соединённый одним коммутатором и беспроводной точкой доступа.',
    },
    pitfall: {
      en: 'A LAN is defined by a small shared site, not by one fixed distance, and it can be wired, wireless or a mix of both.',
      ru: 'LAN определяется небольшой общей территорией, а не одним фиксированным расстоянием; она может быть проводной, беспроводной или смешанной.',
    },
  },
  {
    id: 'a2-1-wan',
    term: { en: 'Wide area network (WAN)', ru: 'глобальная сеть (wide area network, WAN)' },
    def: {
      en: 'A network that spans large geographic areas, such as cities, countries or continents, by joining smaller networks together. It has lower data transfer rates and higher latency than a LAN, but it keeps data flowing over very long distances.',
      ru: 'Сеть, которая охватывает большие территории, такие как города, страны или континенты, объединяя более мелкие сети. Скорость передачи данных у неё ниже, а задержка выше, чем у LAN, зато она работает на очень больших расстояниях.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 102' },
    example: {
      en: 'A multinational company that links its offices in several countries through leased lines or VPN tunnels.',
      ru: 'Международная компания, которая связывает офисы в нескольких странах через арендованные линии или VPN-туннели.',
    },
    pitfall: {
      en: 'A WAN is not simply a bigger LAN: it joins several smaller networks and is usually slower, with higher latency.',
      ru: 'WAN — это не просто «большая LAN»: она объединяет несколько более мелких сетей и обычно работает медленнее, с большей задержкой.',
    },
  },
  {
    id: 'a2-1-vpn',
    term: { en: 'Virtual private network (VPN)', ru: 'виртуальная частная сеть (virtual private network, VPN)' },
    def: {
      en: 'A method of stretching a private network over a public one, such as the internet, through an encrypted tunnel. It lets remote devices use the private network’s resources securely.',
      ru: 'Способ расширить частную сеть через публичную, например интернет, с помощью зашифрованного туннеля. Он позволяет удалённым устройствам безопасно пользоваться ресурсами частной сети.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 103' },
    example: {
      en: 'A remote worker opens files on the office server from home through an encrypted tunnel.',
      ru: 'Удалённый сотрудник открывает файлы на офисном сервере из дома через зашифрованный туннель.',
    },
    pitfall: {
      en: 'A VPN protects data while it travels through the tunnel; it does not make the public network itself safe.',
      ru: 'VPN защищает данные, пока они идут по туннелю; сама публичная сеть от этого безопаснее не становится.',
    },
  },
  {
    id: 'a2-1-cloud-computing',
    term: { en: 'Cloud computing', ru: 'облачные вычисления (cloud computing)' },
    def: {
      en: 'Storing, managing and processing data on remote servers that are reached over the internet, usually on demand and billed by use. Software can also be provided as a service that users open in a web browser.',
      ru: 'Хранение, управление и обработка данных на удалённых серверах, доступных через интернет; такие ресурсы обычно выделяются по требованию и оплачиваются по факту использования. Программы можно получать как услугу и открывать в веб-браузере.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 104' },
    example: {
      en: 'A school pays a subscription for cloud storage and an online office suite instead of buying and maintaining its own servers.',
      ru: 'Школа платит подписку за облачное хранилище и онлайн-офис, а не покупает и не обслуживает собственные серверы.',
    },
    pitfall: {
      en: 'Cloud services still depend on a reliable internet connection, and the user remains responsible for securing sensitive data.',
      ru: 'Облачные сервисы по-прежнему зависят от надёжного интернет-соединения, а за защиту чувствительных данных отвечает пользователь.',
    },
  },
  {
    id: 'a2-1-router',
    term: { en: 'Router', ru: 'маршрутизатор (router)' },
    def: {
      en: 'A network device that connects different networks and forwards packets between them. It reads the destination IP address of each packet and uses a routing table to choose the next hop.',
      ru: 'Сетевое устройство, которое соединяет разные сети и пересылает пакеты между ними. Оно читает IP-адрес назначения каждого пакета и по таблице маршрутизации выбирает следующий переход (next hop).',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 110' },
    example: {
      en: 'A home router that joins the household Wi-Fi network to the network of the internet service provider.',
      ru: 'Домашний маршрутизатор, который соединяет домашнюю сеть Wi-Fi с сетью интернет-провайдера.',
    },
    pitfall: {
      en: 'Routers forward between networks by IP address, while switches forward inside one LAN by MAC address. Do not swap them.',
      ru: 'Маршрутизаторы пересылают данные между сетями по IP-адресу, а коммутаторы — внутри одной LAN по MAC-адресу. Не путай их.',
    },
  },
  {
    id: 'a2-1-switch',
    term: { en: 'Switch', ru: 'коммутатор (switch)' },
    def: {
      en: 'A device that connects the devices of one LAN and forwards each frame only to the port where its destination MAC address is connected. It learns MAC addresses and keeps them in a MAC address table.',
      ru: 'Устройство, которое соединяет устройства одной LAN и пересылает каждый кадр только на тот порт, к которому подключён MAC-адрес назначения. Для этого оно запоминает MAC-адреса в специальной таблице.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 112' },
    example: {
      en: 'An office switch sends a print job from a laptop only to the printer’s port.',
      ru: 'Офисный коммутатор отправляет задание печати с ноутбука только на порт принтера.',
    },
    pitfall: {
      en: 'Inside a LAN a switch works with MAC addresses, not IP addresses. Broadcast frames are still sent to every port.',
      ru: 'Внутри LAN коммутатор работает с MAC-адресами, а не с IP-адресами. Широковещательные кадры по-прежнему рассылаются на все порты.',
    },
  },
  {
    id: 'a2-1-protocol',
    term: { en: 'Network protocol', ru: 'сетевой протокол (network protocol)' },
    def: {
      en: 'An agreed set of rules that control how data is packaged, sent, received and checked as it moves between devices. A stateful protocol keeps track of a session across requests, while a stateless protocol handles each request on its own.',
      ru: 'Согласованный набор правил, которые определяют, как данные оформляются, передаются, принимаются и проверяются при перемещении между устройствами. Протокол с сохранением состояния (stateful) помнит сеанс между запросами, а протокол без сохранения состояния (stateless) обрабатывает каждый запрос отдельно.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 115' },
    example: {
      en: 'HTTP is the protocol for web pages; TCP is a transport protocol that delivers data reliably and in order.',
      ru: 'HTTP — протокол для веб-страниц; TCP — транспортный протокол, который доставляет данные надёжно и по порядку.',
    },
    pitfall: {
      en: 'A protocol is a set of rules, not a device or a program; the same protocol can be implemented in many different programs.',
      ru: 'Протокол — это набор правил, а не устройство и не программа: один и тот же протокол реализуют в разных программах.',
    },
  },
  {
    id: 'a2-1-dhcp',
    term: { en: 'Dynamic host configuration protocol (DHCP)', ru: 'протокол динамической настройки узла (dynamic host configuration protocol, DHCP)' },
    def: {
      en: 'A protocol that gives a device an IP address and other network settings, such as the subnet mask, default gateway and DNS server addresses, when it joins a network. The address can be leased for a limited time or reserved for one MAC address.',
      ru: 'Протокол, который при подключении к сети автоматически выдаёт устройству IP-адрес и другие сетевые настройки: маску подсети, основной шлюз и адреса DNS-серверов. Адрес может выдаваться на ограниченный срок (аренда) или закрепляться за одним MAC-адресом.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 117' },
    example: {
      en: 'A student laptop receives its IP address automatically when it connects to the school Wi-Fi.',
      ru: 'Ноутбук ученика автоматически получает IP-адрес при подключении к школьному Wi-Fi.',
    },
    pitfall: {
      en: 'Not every device uses DHCP: printers and servers often get a fixed address instead.',
      ru: 'DHCP используют не все устройства: принтерам и серверам часто назначают постоянный адрес.',
    },
  },
  {
    id: 'a2-1-tcp-ip-model',
    term: { en: 'TCP/IP model', ru: 'модель TCP/IP (TCP/IP model)' },
    def: {
      en: 'A conceptual model of four layers (application, transport, internet and network interface) that describes how network communication is organised. Data moves down through the layers when it is sent and up through them when it is received.',
      ru: 'Концептуальная модель из четырёх уровней (прикладной, транспортный, уровень Интернета и уровень сетевого интерфейса), которая описывает, как организована сетевая передача данных. При отправке данные проходят уровни сверху вниз, а при приёме — снизу вверх.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 118' },
    example: {
      en: 'A web request passes down four layers on the browser’s computer and up the same four layers on the web server.',
      ru: 'Веб-запрос проходит четыре уровня сверху вниз на компьютере с браузером, а затем те же четыре уровня снизу вверх на веб-сервере.',
    },
    pitfall: {
      en: 'Do not confuse the internet layer with the network interface layer: the internet layer handles IP addressing and routing, while the network interface layer handles cables, signals, frames and MAC addresses.',
      ru: 'Не путай уровень Интернета и уровень сетевого интерфейса: первый отвечает за IP-адресацию и маршрутизацию, а второй — за кабели, сигналы, кадры и MAC-адреса.',
    },
  },
  {
    id: 'a2-1-ip-address',
    term: { en: 'IP address', ru: 'IP-адрес (IP address)' },
    def: {
      en: 'A 32-bit number that identifies a device on an IP network. It is usually written as four 8-bit octets in dotted decimal form, for example 192.168.1.1.',
      ru: '32-битное число, которое обозначает устройство в IP-сети. Обычно записывается в виде четырёх 8-битных октетов, разделённых точками, например 192.168.1.1.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 103' },
    example: {
      en: 'The address 192.168.0.14 is a private address that a laptop may receive on a home network.',
      ru: 'Адрес 192.168.0.14 — частный адрес, который ноутбук может получить в домашней сети.',
    },
    pitfall: {
      en: 'An IP address can change when a device joins another network; the MAC address stays tied to the network card.',
      ru: 'IP-адрес может меняться при подключении к другой сети; MAC-адрес привязан к сетевой карте.',
    },
  },
  {
    id: 'a2-1-mac-address',
    term: { en: 'Media access control (MAC) address', ru: 'MAC-адрес (media access control address, MAC)' },
    def: {
      en: 'A 48-bit hexadecimal address built into a network interface card (NIC) and used to deliver frames to the correct device on the same local network. It is written as six pairs of hexadecimal digits.',
      ru: '48-битный шестнадцатеричный адрес, встроенный в сетевую карту (NIC) и используемый для доставки кадров нужному устройству в той же локальной сети. Записывается шестью парами шестнадцатеричных цифр.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 110' },
    example: {
      en: 'A4:5E:60:12:AB:09 is a MAC address written as six pairs of hexadecimal digits.',
      ru: 'A4:5E:60:12:AB:09 — пример MAC-адреса, записанного шестью парами шестнадцатеричных цифр.',
    },
    pitfall: {
      en: 'The MAC addresses in a frame change at every hop of a journey across routers, while the source and destination IP addresses stay the same.',
      ru: 'MAC-адреса в кадре меняются на каждом переходе по пути через маршрутизаторы, а IP-адреса отправителя и получателя остаются прежними.',
    },
  },
  {
    id: 'a2-1-subnet-mask',
    term: { en: 'Subnet mask', ru: 'маска подсети (subnet mask)' },
    def: {
      en: 'A 32-bit number that divides an IP address into a network part and a host part. Binary 1s mark the network bits and 0s mark the host bits, so 255.255.255.0 means that the first three octets identify the network.',
      ru: '32-битное число, которое делит IP-адрес на часть сети и часть узла (хоста). Единицы в двоичной записи маски обозначают биты сети, а нули — биты узла; например, у маски 255.255.255.0 сеть определяют первые три октета.',
    },
    syllabus: 'A2.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A2.1, p. 118' },
    example: {
      en: 'For 192.168.1.37 with the mask 255.255.255.0, the network is 192.168.1.0 and the host number is 37.',
      ru: 'Для адреса 192.168.1.37 с маской 255.255.255.0 сеть — 192.168.1.0, а номер узла — 37.',
    },
    pitfall: {
      en: 'The mask does not identify a device; it tells the device which bits to compare when it decides whether another address is on the same network.',
      ru: 'Маска не определяет устройство; она показывает, какие биты сравнивать, чтобы понять, находится ли другой адрес в той же сети.',
    },
  },
];
