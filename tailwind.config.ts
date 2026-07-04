import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // The <alpha-value> placeholder lets Tailwind inject opacity
        // modifiers (e.g. bg-accent/30) into these custom oklch colors.
        bg: 'oklch(0.16 0.012 250 / <alpha-value>)',
        surface: 'oklch(0.205 0.014 250 / <alpha-value>)',
        'surface-2': 'oklch(0.25 0.016 250 / <alpha-value>)',
        ink: 'oklch(0.96 0.006 250 / <alpha-value>)',
        muted: 'oklch(0.68 0.02 250 / <alpha-value>)',
        border: 'oklch(0.32 0.016 250 / <alpha-value>)',
        accent: {
          DEFAULT: 'oklch(0.74 0.13 75 / <alpha-value>)',
          dim: 'oklch(0.55 0.10 75 / <alpha-value>)',
          bright: 'oklch(0.82 0.13 88 / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      zIndex: {
        header: '40',
        overlay: '50',
      },
    },
  },
  plugins: [],
} satisfies Config
