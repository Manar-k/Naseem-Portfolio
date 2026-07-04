# Naseem Filfilan — Portfolio

A bilingual (Arabic/English) single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and i18next.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # serve the production build locally
```

## Content

All copy lives in [src/data/profile.ts](src/data/profile.ts) (long-form bilingual content) and [src/locales/{ar,en}/translation.json](src/locales) (short UI strings: nav, buttons, labels). Edit those — no component changes needed for copy updates.

- `public/images/naseem-filfilan.png` — profile photo
- `public/resume.pdf` — **placeholder file.** Replace with the real résumé PDF (same filename, or update the `href` in [src/components/Header.tsx](src/components/Header.tsx) and [src/sections/Hero.tsx](src/sections/Hero.tsx)/[src/sections/Contact.tsx](src/sections/Contact.tsx)).

## Deployment

Static build output in `dist/` after `npm run build`. Deploys as-is to Vercel, Netlify, GitHub Pages, or any static host — no server/runtime required.

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
