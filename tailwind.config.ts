import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './content/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        reading: ['Literata', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      // Colours point at the CSS variables in src/index.css, so light and dark mode both follow them.
      colors: {
        bg: { primary: 'var(--color-bg)', secondary: 'var(--color-card)', tertiary: 'var(--color-bg)' },
        text: { primary: 'var(--color-fg)', secondary: 'var(--color-muted)', muted: 'var(--color-muted)' },
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 1px 3px rgb(0 0 0 / 0.06)',
        soft: '0 1px 2px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
