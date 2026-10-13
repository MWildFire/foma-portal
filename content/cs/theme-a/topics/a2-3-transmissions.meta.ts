import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'a2-3-transmissions',
  subject: 'cs',
  code: 'A2.3',
  title: { en: 'Data transmission', ru: 'Передача данных' },
  papers: ['P1'],
  order: 7,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe IPv4 and IPv6 addresses and explain why IPv6 exists.', ru: 'Умею описать адреса IPv4 и IPv6 и объяснить, зачем нужен IPv6.' },
    { en: 'I can distinguish public from private IP addresses, and static from dynamic addresses.', ru: 'Умею различать публичные и частные IP-адреса, а также статические и динамические адреса.' },
    { en: 'I can explain how NAT lets many private devices share one public address.', ru: 'Умею объяснить, как NAT позволяет многим частным устройствам использовать один публичный адрес.' },
    { en: 'I can compare fibre-optic, twisted pair and wireless media by bandwidth, range, cost, interference and security.', ru: 'Умею сравнивать оптоволокно, витую пару и беспроводную связь по пропускной способности, дальности, стоимости, помехам и безопасности.' },
    { en: 'I can explain packet switching, including encapsulation, routing and reassembly.', ru: 'Умею объяснить коммутацию пакетов: инкапсуляцию, маршрутизацию и сборку данных.' },
    { en: 'I can compare static and dynamic routing by maintenance, convergence and scalability.', ru: 'Умею сравнивать статическую и динамическую маршрутизацию по обслуживанию, сходимости и масштабируемости.' },
  ],
  termIds: [
    'a2-3-ip-address',
    'a2-3-public-ip',
    'a2-3-private-ip',
    'a2-3-nat',
    'a2-3-static-ip',
    'a2-3-dynamic-ip',
    'a2-3-attenuation',
    'a2-3-packet-switching',
    'a2-3-static-routing',
    'a2-3-dynamic-routing',
  ],
  questionIds: [
    'port-a2-3-q1',
    'port-a2-3-q1b',
    'port-a2-3-q2',
    'port-a2-3-q3',
    'port-a2-3-q3b',
    'port-a2-3-q4',
    'port-a2-3-q5',
    'port-a2-3-q5b',
    'port-a2-3-q6',
    'a2-3-q01',
    'a2-3-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A2.3, pp. 144–153' },
  ],
};

export default meta;
