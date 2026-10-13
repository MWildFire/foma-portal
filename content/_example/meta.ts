import type { SubjectMeta } from '../../src/contract/pack';
import { EXAMPLE_SUBJECT } from './ids';

const meta: SubjectMeta = {
  id: EXAMPLE_SUBJECT,
  title: { en: 'Example subject (authors only)', ru: 'Пример предмета (только для авторов)' },
  level: 'example',
  color: 'slate',
};

export default meta;
