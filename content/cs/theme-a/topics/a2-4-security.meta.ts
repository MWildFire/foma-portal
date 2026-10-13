import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a2-4-security',
  subject: 'cs',
  code: 'A2.4',
  title: { en: 'Network security', ru: 'Безопасность сетей' },
  papers: ['P1'],
  order: 8,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can discuss what firewalls, whitelists and NAT do to protect a network, and where they fall short', ru: 'Умею обсуждать, что делают межсетевой экран, белые списки и NAT для защиты сети, и где они не справляются' },
    { en: 'I can describe common network vulnerabilities such as DDoS, man-in-the-middle attacks and phishing', ru: 'Умею описывать типичные уязвимости сетей: DDoS, атаки «человек посередине» и фишинг' },
    { en: 'I can match a countermeasure, such as MFA, HTTPS or intrusion detection, to the vulnerability it reduces', ru: 'Умею подобрать меру защиты, например MFA, HTTPS или обнаружение вторжений, к уязвимости, которую она снижает' },
    { en: 'I can describe how encryption works with symmetric and asymmetric keys', ru: 'Умею описывать работу шифрования с симметричными и асимметричными ключами' },
    { en: 'I can explain how digital certificates and digital signatures establish trust and prove that data is unchanged', ru: 'Умею объяснять, как цифровые сертификаты и цифровые подписи создают доверие и подтверждают, что данные не изменены' },
  ],
  termIds: [
    'a2-4-firewall',
    'a2-4-whitelist',
    'a2-4-nat',
    'a2-4-ddos',
    'a2-4-mitm',
    'a2-4-phishing',
    'a2-4-mfa',
    'a2-4-encryption',
    'a2-4-symmetric',
    'a2-4-asymmetric',
    'a2-4-digital-certificate',
    'a2-4-digital-signature',
  ],
  questionIds: ['a2-4-q01', 'a2-4-q02', 'a2-4-q03', 'a2-4-q04', 'a2-4-q05', 'a2-4-q06', 'a2-4-q07', 'a2-4-q08'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A2.4, pp. 154–164' },
    { kind: 'own', title: 'FomaCS lesson: A2.4 Network security (Russian notes)' },
  ],
};

export default topic;
