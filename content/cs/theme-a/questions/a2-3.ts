import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'a2-3-q01',
    subject: 'cs',
    topicIds: ['a2-3-transmissions'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A student uploads a 2 MB video from a laptop to a school portal. Explain how packet switching moves the video across the network, including the role of the packet headers and of the routers.',
      ru: 'Ученик загружает видео объёмом 2 МБ с ноутбука на школьный портал. Объясните, как коммутация пакетов переносит видео по сети, включая роль заголовков пакетов и маршрутизаторов.',
    },
    markscheme: {
      en: '[1] The video is split into many packets, and each packet is wrapped with a header holding the destination address and a sequence number. [1] The packets are sent independently and may take different routes; routers choose the next hop from their routing tables using the destination IP address. [1] Each router forwards the packet onward, so the network can use spare capacity and avoid failed links. [1] The portal uses the sequence numbers to reassemble the packets in order and asks for any missing packet to be sent again.',
      ru: '[1] Видео делится на множество пакетов, и каждый оборачивается заголовком с адресом назначения и порядковым номером. [1] Пакеты отправляются независимо и могут идти разными путями; маршрутизаторы выбирают следующий узел по таблицам маршрутизации и IP-адресу назначения. [1] Каждый маршрутизатор передаёт пакет дальше, поэтому сеть использует свободную пропускную способность и обходит неработающие линии. [1] Портал по порядковым номерам собирает пакеты в правильном порядке и запрашивает повторную отправку потерянного пакета.',
    },
    origin: 'original',
  },
  {
    id: 'a2-3-q02',
    subject: 'cs',
    topicIds: ['a2-3-transmissions'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A home network has six devices, and all of them reach the internet through one router with a single public IP address. Describe what happens to the source address of an outgoing request sent by one of the devices, and how the reply is returned to that device.',
      ru: 'В домашней сети шесть устройств, и все они выходят в интернет через один роутер с одним публичным IP-адресом. Опишите, что происходит с исходным адресом исходящего запроса одного из устройств и как ответ возвращается на это устройство.',
    },
    markscheme: {
      en: '[1] The router replaces the device\'s private source IP address with its own public address before the packet leaves the network. [1] It also changes the source port number and records the mapping (private address and port to public address and port) in its NAT table. [1] When the reply arrives, the router uses the NAT table to send it back to the correct private device.',
      ru: '[1] Роутер заменяет частный исходный IP-адрес устройства своим публичным адресом до того, как пакет покинет сеть. [1] Он также меняет номер исходного порта и записывает соответствие (частный адрес и порт — публичный адрес и порт) в таблицу NAT. [1] Когда приходит ответ, роутер по таблице NAT отправляет его нужному частному устройству.',
    },
    origin: 'original',
  },
];
