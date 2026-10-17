// Shared app behaviour: language toggle, theme, nav highlighting, theme-color access

(function () {
  const root = document.documentElement;

  // ---- Theme colors (read from CSS variables so canvas/SVG match light/dark) ----
  const Theme = {
    // Choose opaque label ink after compositing translucent fills against their real panel.
    rgb(color) {
      if (color.startsWith('#')) { const h=color.slice(1); const v=h.length===3?h.split('').map(c=>c+c).join(''):h; return [0,2,4].map(i=>parseInt(v.slice(i,i+2),16)); }
      return (color.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
    },
    luminance(rgb) { const c=rgb.map(v=>{v/=255;return v<=0.04045?v/12.92:Math.pow((v+0.055)/1.055,2.4);});return c[0]*0.2126+c[1]*0.7152+c[2]*0.0722; },
    ink(fill, opacity=1, background=this.surface) {
      const f=this.rgb(fill), b=this.rgb(background);
      if(f.length!==3||b.length!==3)return this.text;
      const l=this.luminance(f.map((v,i)=>v*opacity+b[i]*(1-opacity)));
      return (l+0.05)/0.05 >= 1.05/(l+0.05) ? '#000000' : '#ffffff';
    },
    readable(color, background=this.surface) {
      const a=this.luminance(this.rgb(color)), b=this.luminance(this.rgb(background));
      return (Math.max(a,b)+0.05)/(Math.min(a,b)+0.05)>=4.5 ? color : this.text;
    },
    refresh() {
      const cs = getComputedStyle(root);
      const get = (name, fallback) => (cs.getPropertyValue(name).trim() || fallback);
      this.text = get('--text', '#0f172a');
      this.textMuted = get('--text-muted', '#475569');
      this.textFaint = get('--text-faint', '#94a3b8');
      this.border = get('--border', '#e2e8f0');
      this.borderStrong = get('--border-strong', '#cbd5e1');
      this.surface = get('--surface', '#ffffff');
      this.surface2 = get('--surface-2', '#f1f3f8');
      this.bg = get('--bg', '#f7f8fb');
      this.primary = get('--primary', '#1a3a5e');
      this.accent = get('--accent', '#0ea5e9');
      this.green = get('--green', '#10b981');
      this.red = get('--red', '#ef4444');
      this.amber = get('--amber', '#f59e0b');
      this.violet = get('--violet', '#8b5cf6');
    }
  };
  Theme.refresh();
  window.Theme = Theme;

  // ---- Language ----
  // ?lang=en|ru (set by the portal's links) overrides the stored choice.
  // Without a stored choice a page opens in its own <html lang>.
  const STORAGE_LANG = 'fomacs-lang';
  const urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang === 'en' || urlLang === 'ru') localStorage.setItem(STORAGE_LANG, urlLang);
  const getLang = () => localStorage.getItem(STORAGE_LANG) || root.lang || 'en';
  // persist = false when only syncing the UI to the default, so a page does not store its own default
  const setLang = (l, persist = true) => {
    if (persist) localStorage.setItem(STORAGE_LANG, l);
    root.setAttribute('data-lang', l);
    document.querySelectorAll('[data-lang-toggle]').forEach((el) => {
      el.textContent = l === 'en' ? 'RU' : 'EN';
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  };
  root.setAttribute('data-lang', getLang());

  // ---- Theme ----
  const STORAGE_THEME = 'fomacs-theme';
  const getTheme = () => localStorage.getItem(STORAGE_THEME) || 'light';
  const setTheme = (t) => {
    localStorage.setItem(STORAGE_THEME, t);
    root.setAttribute('data-theme', t);
    document.querySelectorAll('[data-theme-toggle]').forEach((el) => {
      el.textContent = t === 'light' ? '☽' : '☀';
    });
    Theme.refresh();
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t } }));
  };
  root.setAttribute('data-theme', getTheme());

  // ---- DOM ready ----
  document.addEventListener('DOMContentLoaded', () => {
    // Sync toggle labels now that DOM is loaded
    setLang(getLang(), false);
    setTheme(getTheme());

    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(getLang() === 'en' ? 'ru' : 'en');
      });
    });
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setTheme(getTheme() === 'light' ? 'dark' : 'light');
      });
    });

    // Highlight active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((a) => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    // Sidebar smooth-scroll active state
    const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');
    if (sidebarLinks.length) {
      const sectionMap = new Map();
      sidebarLinks.forEach((a) => {
        const id = a.getAttribute('href').slice(1);
        const sec = document.getElementById(id);
        if (sec) sectionMap.set(sec, a);
      });
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              sidebarLinks.forEach((l) => l.classList.remove('active'));
              const link = sectionMap.get(e.target);
              if (link) link.classList.add('active');
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      sectionMap.forEach((_, sec) => obs.observe(sec));
    }
  });

  // Expose for other scripts
  window.App = {
    getLang,
    setLang,
    getTheme,
    setTheme,
  };
})();

// Give wide interactive diagrams a keyboard scroll target and an honest visible hint.
(function () {
  function labelFrames() {
    const ru = document.documentElement.dataset.lang === 'ru';
    document.querySelectorAll('.sim-canvas-wrap').forEach(frame => {
      frame.tabIndex = 0;
      frame.setAttribute('role', 'region');
      frame.setAttribute('aria-label', ru ? 'Интерактивная схема' : 'Interactive diagram');
      const wide = frame.scrollWidth > frame.clientWidth + 1;
      if (wide) frame.dataset.scrollHint = ru ? 'Прокрутите схему вправо ↔' : 'Scroll the diagram sideways ↔';
      else delete frame.dataset.scrollHint;
    });
  }
  window.addEventListener('load', labelFrames);
  window.addEventListener('resize', labelFrames);
  document.addEventListener('langchange', labelFrames);
})();
