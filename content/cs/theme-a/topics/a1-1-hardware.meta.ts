import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'a1-1-hardware',
  subject: 'cs',
  code: 'A1.1',
  title: { en: 'Computer hardware and operation', ru: 'Аппаратное обеспечение и работа компьютера' },
  papers: ['P1'],
  order: 1,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can describe the ALU, the control unit, the main registers and the three buses, and how they work together.',
      ru: 'Умею описывать ALU (арифметико-логическое устройство), устройство управления, основные регистры и три шины и то, как они работают вместе.',
    },
    {
      en: 'I can describe the role of a GPU and contrast the design of a CPU and a GPU (HL).',
      ru: 'Умею описывать роль GPU и сравнивать устройство CPU и GPU (HL).',
    },
    {
      en: 'I can explain the purposes of registers, cache, RAM and ROM, and the difference between volatile and non-volatile memory.',
      ru: 'Умею объяснять назначение регистров, кэша, RAM и ROM и различие между энергозависимой и энергонезависимой памятью.',
    },
    {
      en: 'I can describe the fetch, decode and execute phases of an instruction, and the buses used in each phase.',
      ru: 'Умею описывать фазы fetch, decode и execute для инструкции и шины, которые используются в каждой фазе.',
    },
    {
      en: 'I can describe pipelining and multi-core processing, and calculate the time a pipeline saves (HL).',
      ru: 'Умею описывать конвейеризацию и многоядерную обработку и рассчитывать время, которое экономит конвейер (HL).',
    },
    {
      en: 'I can distinguish internal and external secondary storage (HDD, SSD, eMMC, optical, flash, NAS) and choose one for a scenario.',
      ru: 'Умею различать внутреннюю и внешнюю вторичную память (HDD, SSD, eMMC, оптические диски, флеш-накопители, NAS) и выбирать подходящую для ситуации.',
    },
    {
      en: 'I can explain lossless and lossy compression and apply run-length encoding to a string.',
      ru: 'Умею объяснять сжатие без потерь и с потерями и применять кодирование длин серий (RLE) к строке.',
    },
    {
      en: 'I can describe SaaS, PaaS and IaaS and explain how control and cost differ between them.',
      ru: 'Умею описывать SaaS, PaaS и IaaS и объяснять, чем они различаются по контролю и стоимости.',
    },
  ],
  termIds: [
    'a1-1-alu',
    'a1-1-cu',
    'a1-1-gpu',
    'a1-1-volatile-memory',
    'a1-1-rom',
    'a1-1-fde-cycle',
    'a1-1-pipelining',
    'a1-1-multi-core',
    'a1-1-secondary-storage',
    'a1-1-ssd',
    'a1-1-rle',
    'a1-1-cloud-computing',
  ],
  questionIds: [
    'a1-1-q01',
    'a1-1-q02',
    'a1-1-q03',
    'a1-1-q04',
    'a1-1-q05',
    'a1-1-q06',
    'a1-1-q07',
    'a1-1-q08',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.1, pp. 3–37' },
    { kind: 'own', title: 'FomaCS lesson a1-1-hardware (2026)' },
  ],
};

export default meta;
