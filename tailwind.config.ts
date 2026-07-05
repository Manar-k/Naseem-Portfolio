import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0B',
        surface: '#15140F',
        'surface-2': '#080807',
        ink: '#EDE6D6',
        muted: '#EDE6D6',
        border: '#EDE6D6',
        accent: {
          DEFAULT: '#2563EB',
          dim: '#1D4ED8',
          bright: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
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
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.6)', opacity: '.5' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        frameShift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-8px, 8px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        heroFloat: 'heroFloat 6s ease-in-out infinite',
        frameShift: 'frameShift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
