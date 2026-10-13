import { useId, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { hasFilters, type FilterOptions, type PracticeFilters } from '../../lib/practice';
import { FilterSelect } from './fields';
import '../content/ui.css';
import './fields.css';
import './practice.css';

interface Props {
  filters: PracticeFilters;
  options: FilterOptions;
  /** Topic title in the UI language, or the id when the pack does not list the topic. */
  topicTitle: (id: string) => string;
  shown: number;
  total: number;
  onChange: (name: keyof PracticeFilters, value: string) => void;
  onClear: () => void;
}

// Paper, topic and command term. The choice lives in the address (?paper=, ?topic=, ?command=), so a filtered list
// can be bookmarked and the Back button works. The count line is a live region: it is read out when the list changes.
export function FilterBar({ filters, options, topicTitle, shown, total, onChange, onClear }: Props) {
  const { t } = useTranslation(['practice', 'subject']);
  const headingId = useId();
  const firstSelect = useRef<HTMLSelectElement>(null);
  // The "Clear filters" button disappears when the filters are cleared. The focus goes to the first select, not to the top of the page.
  const clear = (): void => {
    onClear();
    firstSelect.current?.focus();
  };
  return (
    <section aria-labelledby={headingId} className="study-panel">
      <h2 id={headingId} className="study-h2">{t('filters.heading')}</h2>
      <div className="study-fields">
        <FilterSelect label={t('filters.paper')} value={filters.paper} onChange={value => onChange('paper', value)} selectRef={firstSelect}>
          <option value="">{t('filters.all')}</option>
          {options.papers.map(item => (
            <option key={item.value} value={item.value}>
              {t('filters.option', { label: t(`paperNames.${item.value}`, { ns: 'subject' }), n: item.count })}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect label={t('filters.topic')} value={filters.topic} onChange={value => onChange('topic', value)}>
          <option value="">{t('filters.all')}</option>
          {options.topics.map(item => (
            <option key={item.value} value={item.value}>{t('filters.option', { label: topicTitle(item.value), n: item.count })}</option>
          ))}
        </FilterSelect>
        <FilterSelect label={t('filters.command')} value={filters.command} onChange={value => onChange('command', value)}>
          <option value="">{t('filters.all')}</option>
          {options.commands.map(item => (
            <option key={item.value} value={item.value}>{t('filters.option', { label: item.label, n: item.count })}</option>
          ))}
        </FilterSelect>
      </div>
      <p role="status" className="study-status">{t('filters.shown', { shown, total })}</p>
      {hasFilters(filters) ? (
        <button type="button" className="foma-btn" onClick={clear}>{t('filters.clear')}</button>
      ) : null}
    </section>
  );
}
