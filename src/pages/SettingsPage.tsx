import { AlertCircle, CircleCheck, ClipboardCopy, RotateCcw, Upload } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { formatMinutes } from '../components/planner/labels';
import { usePageTitle, useScrollToTop } from '../components/planner/usePageTitle';
import { usePlan } from '../components/planner/usePlan';
import { Btn, CARD, MUTED } from '../components/planner/ui';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import type { Lang } from '../contract/types';
import { UPDATE_EVENT, WEEKDAYS, type GlobalState, type Weekday } from '../lib/storage';
import { applyProgress, collectProgress, encodeProgress } from '../lib/transfer';
import { setAccessArrangement, setDailyLoad } from '../planner/actions';
import { capitalize, formatInstant, weekdayName } from '../planner/format';
import { DEFAULT_DAILY_LOAD, parseLoadInput } from '../planner/loads';
import { checkImport, progressKeys } from '../planner/progress-code';

type Update = (updater: (state: GlobalState) => GlobalState) => void;

const INPUT = 'rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)]';

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className={`${CARD} p-4`}>
      <h2 id={id} className="text-lg font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Problem({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} className="m-0 flex items-start gap-1 text-sm font-medium">
      <AlertCircle size={16} aria-hidden className="mt-0.5 shrink-0" /> <span>{children}</span>
    </p>
  );
}

function Success({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 flex items-start gap-1 text-sm font-medium">
      <CircleCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-[var(--color-accent)]" /> <span>{children}</span>
    </p>
  );
}

// ---------------------------------------------------------------------------------------------
// Access arrangements
// ---------------------------------------------------------------------------------------------

function AccessSection({ state, update }: { state: GlobalState; update: Update }) {
  const { t } = useTranslation('settings');
  const { extraTime, separateRoom } = state.settings.accessArrangements;
  const rows: { key: 'extraTime' | 'separateRoom'; checked: boolean }[] = [
    { key: 'extraTime', checked: extraTime },
    { key: 'separateRoom', checked: separateRoom },
  ];
  return (
    <Section id="settings-access" title={t('access.title')}>
      <p className={`mt-1 text-sm ${MUTED}`}>{t('access.intro')}</p>
      <div className="mt-2 space-y-1">
        {rows.map(row => (
          <label key={row.key} className="flex min-h-[44px] cursor-pointer items-start gap-3 py-2">
            <input
              type="checkbox"
              checked={row.checked}
              onChange={event => {
                const value = event.target.checked;
                update(current => setAccessArrangement(current, row.key, value));
              }}
              className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
            />
            <span className="min-w-0">
              <span className="block font-medium">{row.key === 'extraTime' ? t('access.extraTime.label') : t('access.separateRoom.label')}</span>
              <span className={`block text-sm ${MUTED}`}>
                {row.key === 'extraTime' ? t('access.extraTime.hint') : t('access.separateRoom.hint')}
              </span>
            </span>
          </label>
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------------------------
// Daily load per weekday
// ---------------------------------------------------------------------------------------------

function LoadRow({ day, lang, override, onSave, onReset }: {
  day: Weekday;
  lang: Lang;
  override: number | undefined;   // the student's own minutes for this weekday; undefined = as in the schedule
  onSave: (minutes: number) => void;
  onReset: () => void;
}) {
  const { t } = useTranslation('settings');
  const { t: tp } = useTranslation('planner');
  const [draft, setDraft] = useState<string | null>(null);
  // A number box reports '' for text it cannot read ("-", "e", letters in some browsers); that is not "emptied".
  const [unreadable, setUnreadable] = useState(false);
  const id = `load-${day}`;
  const name = capitalize(weekdayName(day, lang));
  const usual = tp('minutes', { n: DEFAULT_DAILY_LOAD[day] });
  const overridden = override !== undefined;
  const invalid = unreadable || (draft !== null && draft.trim() !== '' && parseLoadInput(draft) === null);
  const described = [`${id}-hint`, invalid ? `${id}-error` : ''].filter(Boolean).join(' ');

  return (
    <li className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[var(--color-border)] py-3 first:border-t-0">
      <div className="min-w-[8rem] flex-1">
        <label htmlFor={id} className="font-medium">
          {name}
        </label>
        <p id={`${id}-hint`} className={`m-0 text-sm ${MUTED}`}>
          {overridden ? t('load.custom', { time: usual }) : t('load.default', { time: usual })}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {/* An empty box means "as in the schedule". The usual load is only a placeholder, because some days of the
            schedule differ from it, so the box never shows a number the plan is not using. */}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          max={600}
          step={5}
          value={draft ?? (overridden ? String(override) : '')}
          placeholder={String(DEFAULT_DAILY_LOAD[day])}
          aria-invalid={invalid}
          aria-describedby={described}
          onChange={event => {
            const box = event.target;
            const bad = box.validity?.badInput ?? false;
            setUnreadable(bad);
            setDraft(box.value);
            const minutes = bad ? null : parseLoadInput(box.value);
            if (minutes !== null) onSave(minutes);
          }}
          onBlur={() => {
            if (draft === null || unreadable) return;
            // Emptied: back to the schedule. Valid: already saved. Wrong: it stays, with its message, until it is fixed.
            if (draft.trim() === '') {
              if (overridden) onReset();
              setDraft(null);
            } else if (parseLoadInput(draft) !== null) {
              setDraft(null);
            }
          }}
          className={`${INPUT} min-h-[44px] w-24 px-2 text-base tabular-nums`}
        />
        <span className="text-sm">{t('load.unit')}</span>
        <Btn
          variant="quiet"
          disabled={!overridden && draft === null && !unreadable}
          onClick={() => {
            setDraft(null);
            setUnreadable(false);
            onReset();
          }}
        >
          <RotateCcw size={16} aria-hidden /> {t('load.reset')}
          <span className="sr-only">: {name}</span>
        </Btn>
      </div>
      {invalid && (
        <div role="alert" className="w-full">
          <Problem id={`${id}-error`}>{t('load.invalid')}</Problem>
        </div>
      )}
    </li>
  );
}

function LoadSection({ state, update, lang, planned }: { state: GlobalState; update: Update; lang: Lang; planned: number }) {
  const { t } = useTranslation('settings');
  const { t: tp } = useTranslation('planner');
  const overrides = state.settings.dailyLoadMinutes;
  return (
    <Section id="settings-load" title={t('load.title')}>
      <p className={`mt-1 text-sm ${MUTED}`}>{t('load.intro')}</p>
      <ul className="m-0 mt-2 list-none p-0">
        {WEEKDAYS.map(day => (
          <LoadRow
            key={day}
            day={day}
            lang={lang}
            override={overrides[day]}
            onSave={minutes => update(current => setDailyLoad(current, day, minutes))}
            onReset={() => update(current => setDailyLoad(current, day, null))}
          />
        ))}
      </ul>
      <p className="mt-2 text-sm" role="status">
        {t('load.planned', { time: formatMinutes(tp, planned) })}
      </p>
    </Section>
  );
}

// ---------------------------------------------------------------------------------------------
// Moving progress between devices and addresses (src/lib/transfer.ts)
// ---------------------------------------------------------------------------------------------

type CopyState = 'copied' | 'manual' | null;
type ImportResult = { ok: true; items: number } | { ok: false } | null;

async function copyText(text: string, area: HTMLTextAreaElement | null): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the old way.
  }
  if (!area) return false;
  area.focus();
  area.select();
  try {
    return document.execCommand('copy');
  } catch {
    return false;
  }
}

function TransferSection({ state, lang }: { state: GlobalState; lang: Lang }) {
  const { t, i18n } = useTranslation('settings');
  const exportRef = useRef<HTMLTextAreaElement>(null);
  const [copy, setCopy] = useState<CopyState>(null);
  const [input, setInput] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [result, setResult] = useState<ImportResult>(null);
  const importAreaRef = useRef<HTMLTextAreaElement>(null);
  const importButtonRef = useRef<HTMLButtonElement>(null);
  const yesRef = useRef<HTMLButtonElement>(null);
  // Where keyboard focus goes once the buttons have changed: the button that replaced the one just pressed.
  const focusNext = useRef<'yes' | 'import' | 'field' | null>(null);

  // A fresh code whenever the progress (or the language) changes: both are read back from storage, which may be
  // blocked, so this can fail. `state` and the language are listed only to trigger the refresh.
  const code = useMemo(() => {
    try {
      const data = collectProgress(window.localStorage);
      const at = new Date().toISOString();
      return { text: encodeProgress(data, at), hasProgress: progressKeys(data).length > 0 };
    } catch {
      return null;
    }
  }, [state, i18n.language]);

  // "Copied" belongs to one code; a new code (after any change) has not been copied yet.
  useEffect(() => setCopy(null), [code?.text]);

  useEffect(() => {
    const target = focusNext.current;
    focusNext.current = null;
    if (target === 'yes') yesRef.current?.focus();
    else if (target === 'import') importButtonRef.current?.focus();
    else if (target === 'field') importAreaRef.current?.focus();
  }, [confirming, result]);

  const check = useMemo(() => (input.trim() === '' ? null : checkImport(input)), [input]);

  const onCopy = async () => {
    if (!code) return;
    setCopy((await copyText(code.text, exportRef.current)) ? 'copied' : 'manual');
  };

  const onImport = () => {
    if (!check || !check.ok) return;
    try {
      applyProgress(window.localStorage, check.pack);
      // Every page that shows progress reloads it (useLocalProgress listens to this event).
      window.dispatchEvent(new Event(UPDATE_EVENT));
      const language = check.pack.data['foma-lang'];
      if (language === 'en' || language === 'ru') void i18n.changeLanguage(language);
      // Count as the check above did (without the language key), so the number does not change after the import.
      setResult({ ok: true, items: check.items });
      setInput('');
      focusNext.current = 'field';
    } catch {
      setResult({ ok: false });
      focusNext.current = 'import';
    }
    setConfirming(false);
  };

  const problemText = (problem: string): string => {
    if (problem === 'invalid') return t('transfer.problem.invalid');
    if (problem === 'no-progress') return t('transfer.problem.noProgress');
    if (problem === 'damaged') return t('transfer.problem.damaged');
    return t('transfer.problem.empty');
  };

  return (
    <Section id="settings-transfer" title={t('transfer.title')}>
      <p className={`mt-1 text-sm ${MUTED}`}>{t('transfer.intro')}</p>

      <h3 className="mt-4 text-base font-semibold">{t('transfer.export.title')}</h3>
      {code ? (
        <>
          <label htmlFor="progress-code" className="mt-1 block text-sm">
            {code.hasProgress ? t('transfer.export.label') : t('transfer.export.nothing')}
          </label>
          <textarea
            id="progress-code"
            ref={exportRef}
            readOnly
            rows={4}
            value={code.text}
            onFocus={event => event.currentTarget.select()}
            className={`${INPUT} mt-1 block w-full break-all p-2 font-mono text-xs`}
          />
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Btn variant="primary" onClick={() => void onCopy()}>
              <ClipboardCopy size={16} aria-hidden /> {t('transfer.export.copy')}
            </Btn>
            <div role="status" aria-live="polite" className="min-w-0 flex-1">
              {copy === 'copied' && <Success>{t('transfer.export.copied')}</Success>}
              {copy === 'manual' && <Problem>{t('transfer.export.manual')}</Problem>}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-1">
          <Problem>{t('transfer.export.blocked')}</Problem>
        </div>
      )}

      <h3 className="mt-6 text-base font-semibold">{t('transfer.import.title')}</h3>
      <label htmlFor="progress-import" className="mt-1 block text-sm">
        {t('transfer.import.label')}
      </label>
      <textarea
        id="progress-import"
        ref={importAreaRef}
        rows={4}
        value={input}
        spellCheck={false}
        autoComplete="off"
        aria-invalid={check !== null && !check.ok}
        aria-describedby="progress-import-check"
        onChange={event => {
          setInput(event.target.value);
          setConfirming(false);
          setResult(null);
        }}
        className={`${INPUT} mt-1 block w-full break-all p-2 font-mono text-xs`}
      />
      <div id="progress-import-check" role="status" aria-live="polite" className="mt-2 space-y-1">
        {check && !check.ok && <Problem>{problemText(check.problem)}</Problem>}
        {check && check.ok && (
          <>
            <Success>{t('transfer.import.ready', { date: formatInstant(check.madeAt, lang), items: check.items })}</Success>
            <p className={`m-0 text-sm ${MUTED}`}>{t('transfer.import.warning')}</p>
          </>
        )}
        {result?.ok && <Success>{t('transfer.import.done', { items: result.items })}</Success>}
        {result && !result.ok && <Problem>{t('transfer.import.failed')}</Problem>}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {!confirming ? (
          <Btn
            ref={importButtonRef}
            disabled={!check || !check.ok}
            onClick={() => {
              focusNext.current = 'yes';
              setConfirming(true);
            }}
          >
            <Upload size={16} aria-hidden /> {t('transfer.import.button')}
          </Btn>
        ) : (
          <>
            {/* The question is read out with the focused "Yes" button, so it cannot be missed. */}
            <p id="progress-import-confirm" className="m-0 w-full text-sm font-medium">
              {t('transfer.import.confirm')}
            </p>
            <Btn ref={yesRef} variant="primary" aria-describedby="progress-import-confirm" onClick={onImport}>
              {t('transfer.import.yes')}
            </Btn>
            <Btn
              onClick={() => {
                focusNext.current = 'import';
                setConfirming(false);
              }}
            >
              {t('transfer.import.cancel')}
            </Btn>
          </>
        )}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------------------------

export function SettingsPage() {
  const { t } = useTranslation('settings');
  const { t: tc } = useTranslation();
  const { plan, state, update, lang } = usePlan();
  usePageTitle(tc('nav.settings'), tc('brand'));
  useScrollToTop();
  const planned = plan.days.reduce((sum, day) => sum + day.minutes, 0);

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-semibold">{tc('nav.settings')}</h1>
        <p className={MUTED}>{t('intro')}</p>
      </header>

      <Section id="settings-language" title={t('language.title')}>
        <p className={`mt-1 text-sm ${MUTED}`}>{t('language.intro')}</p>
        <div className="mt-2">
          <LanguageToggle />
        </div>
      </Section>

      <AccessSection state={state} update={update} />
      <LoadSection state={state} update={update} lang={lang} planned={planned} />
      <TransferSection state={state} lang={lang} />
    </section>
  );
}
