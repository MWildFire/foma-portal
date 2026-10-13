import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'a1-4-translation',
  subject: 'cs',
  code: 'A1.4',
  title: { en: 'Translation', ru: 'Трансляция программ' },
  papers: ['P1'],
  hl: true,
  order: 4,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can describe the steps from source code to machine instructions, including the role of the parser.',
      ru: 'Умею описать этапы перехода от исходного кода к машинным инструкциям, включая роль парсера.',
    },
    {
      en: 'I can explain how a compiler, an interpreter and a bytecode interpreter translate programs and when each one reports errors.',
      ru: 'Умею объяснить, как компилятор, интерпретатор и интерпретатор байт-кода переводят программы и когда каждый из них сообщает об ошибках.',
    },
    {
      en: 'I can explain how a JIT compiler combines running bytecode with compiling it to machine code.',
      ru: 'Умею объяснить, как JIT-компилятор сочетает выполнение байт-кода с компиляцией в машинный код.',
    },
    {
      en: 'I can compare translation approaches by translation time, error detection, portability and applicability.',
      ru: 'Умею сравнивать способы трансляции по времени трансляции, обнаружению ошибок, переносимости и применимости.',
    },
    {
      en: 'I can evaluate which translation approach suits a given scenario and justify my choice.',
      ru: 'Умею оценить, какой способ трансляции подходит к заданному сценарию, и обосновать свой выбор.',
    },
  ],
  termIds: [
    'a1-4-translation',
    'a1-4-machine-code',
    'a1-4-compiler',
    'a1-4-interpreter',
    'a1-4-bytecode',
    'a1-4-jit',
    'a1-4-parser',
    'a1-4-portability',
  ],
  questionIds: [
    'a1-4-q01',
    'a1-4-q02',
    'a1-4-q03',
    'a1-4-q04',
    'a1-4-q05',
    'a1-4-q06',
    'a1-4-q07',
    'a1-4-q08',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.4, pp. 90–97' },
    { kind: 'own', title: 'FomaCS lesson A1.4 (Russian notes, 2026)' },
  ],
};

export default meta;
