import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a2-2-architecture',
  subject: 'cs',
  code: 'A2.2',
  title: { en: 'Network architecture', ru: 'Архитектура сетей' },
  papers: ['P1'],
  order: 6,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe star, mesh and hybrid topologies and compare them by reliability, speed, scalability and cost', ru: 'Умею описывать звёздную, сетчатую и гибридную топологии и сравнивать их по надёжности, скорости, масштабируемости и стоимости' },
    { en: 'I can describe the functions of DNS, DHCP, proxy, file, mail and web servers', ru: 'Умею описывать функции DNS-, DHCP-, прокси-, файлового, почтового и веб-серверов' },
    { en: 'I can explain step by step how a DNS lookup and a DHCP lease (DORA) work', ru: 'Умею пошагово объяснять, как работают поиск через DNS и аренда адреса по DHCP (DORA)' },
    { en: 'I can compare the client-server and peer-to-peer models for a given scenario and reach a justified choice', ru: 'Умею сравнивать модели «клиент-сервер» и P2P для заданного сценария и делать обоснованный выбор' },
    { en: 'I can explain network segmentation with subnetting and VLANs and say what each one achieves', ru: 'Умею объяснять сегментацию сети с помощью подсетей и VLAN и говорить, что даёт каждый из способов' },
    { en: 'I can read a CIDR prefix such as /26 and work out the subnet mask, the network address, the broadcast address and the number of hosts', ru: 'Умею читать префикс CIDR, например /26, и находить маску подсети, адрес сети, широковещательный адрес и число узлов' },
  ],
  termIds: [
    'a2-2-topology',
    'a2-2-star',
    'a2-2-mesh',
    'a2-2-hybrid',
    'a2-2-server',
    'a2-2-dns',
    'a2-2-dhcp',
    'a2-2-proxy',
    'a2-2-client-server',
    'a2-2-p2p',
    'a2-2-segmentation',
  ],
  questionIds: [
    'port-a2-2-q1',
    'port-a2-2-q2',
    'port-a2-2-q3',
    'port-a2-2-q4',
    'port-a2-2-q5',
    'a2-2-q01',
    'a2-2-q02',
    'a2-2-q03',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A2.2, pp. 124–143' },
  ],
};

export default topic;
