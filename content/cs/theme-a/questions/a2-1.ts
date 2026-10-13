import type { Question } from '../../../../src/contract/types';

// New questions for topic A2.1 Network fundamentals. The ported set (port-a2-1-*) has no TCP/IP layer
// question and no subnet calculation, so these two fill those gaps. Scenarios are original.
export const questions: Question[] = [
  {
    id: 'a2-1-q01',
    subject: 'cs',
    topicIds: ['a2-1-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Describe',
    prompt: {
      en: 'A student types a web address into a browser on a school laptop, and the school web server returns the page. Describe the role of the transport layer and of the internet layer of the TCP/IP model in delivering the request and the reply.',
      ru: 'Ученик вводит веб-адрес в браузере школьного ноутбука, и веб-сервер школы возвращает страницу. Опишите роль транспортного уровня и уровня Интернета модели TCP/IP в доставке запроса и ответа.',
    },
    markscheme: {
      en: '[1] Transport layer: divides the HTTP request into segments and adds TCP headers with source and destination port numbers (for example 80 or 443). [1] Transport layer: TCP adds sequence numbers, checksums and acknowledgements, so the data arrives complete and in order, with retransmission when needed. [1] Internet layer: wraps each segment in an IP packet that carries the source and destination IP addresses. [1] Internet layer: routers use the destination IP address to choose the next hop, so the packet reaches the server.',
      ru: '[1] Транспортный уровень: делит HTTP-запрос на сегменты и добавляет заголовки TCP с номерами портов отправителя и получателя (например, 80 или 443). [1] Транспортный уровень: TCP добавляет порядковые номера, контрольные суммы и подтверждения, поэтому данные приходят полностью и по порядку; при необходимости выполняется повторная передача. [1] Уровень Интернета: упаковывает каждый сегмент в IP-пакет с IP-адресами отправителя и получателя. [1] Уровень Интернета: маршрутизаторы используют IP-адрес назначения, чтобы выбрать следующий переход, и пакет доходит до сервера.',
    },
    origin: 'original',
  },
  {
    id: 'a2-1-q02',
    subject: 'cs',
    topicIds: ['a2-1-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A computer in a school lab has the IP address 192.168.10.77 and the subnet mask 255.255.255.0. Calculate (a) the network address, (b) the host number and (c) the broadcast address of this computer’s network.',
      ru: 'У компьютера в школьной лаборатории IP-адрес 192.168.10.77 и маска подсети 255.255.255.0. Вычислите (а) адрес сети, (б) номер узла (хоста) и (в) широковещательный адрес сети этого компьютера.',
    },
    markscheme: {
      en: '[1] Network address 192.168.10.0 (all host bits set to 0). [1] Host number 77 (the last octet, because the mask marks the first three octets as network bits). [1] Broadcast address 192.168.10.255 (all host bits set to 1).',
      ru: '[1] Адрес сети 192.168.10.0 (все биты узла равны 0). [1] Номер узла 77 (последний октет, потому что маска отмечает первые три октета как биты сети). [1] Широковещательный адрес 192.168.10.255 (все биты узла равны 1).',
    },
    answer: '(a) 192.168.10.0; (b) 77; (c) 192.168.10.255',
    origin: 'original',
  },
];
