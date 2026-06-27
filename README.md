# my-portfolio

A premium-aesthetic personal portfolio website for Aniket Shankhwar — full-stack developer, built with React 19 and Vite.

## Overview

This is a single-page-anchored, multi-route portfolio site with a dark-first visual language: near-black canvas with warm off-white monochrome base, a single copper accent, and a condensed-display + grotesque type pairing. Smooth scroll, parallax effects, and viewport-driven fade-ins give it a polished, modern feel.

[**Live Demo**](#) *(deploy and update this link)*

![Portfolio Preview](#) *(add a screenshot: e.g. `./public/screenshot.png`)*

## Features

- **Copper-accent dark/light theme** — toggle between a TRUE near-black dark mode and a warm off-white light mode; theme persists via `localStorage`
- **Smooth scrolling** — Lenis-powered RAF scroll with in-page anchor navigation
- **Parallax & viewport animations** — Framer Motion fade-ins, parallax blobs, cursor-tilt mockups; all gated behind `prefers-reduced-motion`
- **Lazy-loaded routes** — `React.lazy()` page chunks with skeleton fallback; animated route transitions via `AnimatePresence`
- **Featured projects grid** — spotlight section + full projects page with gradient-bordered cards
- **Animated skill bars** — GPU-composited `scaleX` fills with glow-tip animation
- **Infinite marquee** — full-bleed horizontal loop using AsteriskMark separators
- **Contact via `mailto:`** — form validates then opens the visitor's default mail client with a pre-filled draft
- **Global ErrorBoundary** — on-brand fallback for unhandled render errors
- **SEO `<head>` management** — title and OG/Twitter metas set per-route without Helmet
- **Accessible** — `aria-labelledby` on all sections, `focus-visible` rings on every interactive element

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 8 (`@vitejs/plugin-react` / Oxc) |
| UI | React 19 |
| Routing | React Router 8 / React Router DOM 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`), `tw-animate-css` |
| Primitives | Radix UI 1.6 (shadcn-flavored local components) |
| Animation | Framer Motion 12 |
| Smooth Scroll | Lenis 1 (dynamically imported) |
| Icons | Lucide React, React Icons |
| Fonts | Yanice (display headlines), Jefith (numeric display), Inter Variable (body/UI) |
| Linting | ESLint 10 |

## Folder Structure

```
my-portfolio/
├── index.html                  # Inline theme bootstrap (avoids FOUC)
├── vite.config.js              # Vite + React + Tailwind plugins, @ alias
├── package.json
├── components.json              # shadcn/ui config
├── eslint.config.js
├── jsconfig.json
├── public/
│   ├── favicon.svg
│   ├── logo_.png
│   ├── resume.pdf
│   ├── robots.txt
│   └── fonts/                  # Self-hosted Yanice + Jefith woff2
└── src/
    ├── main.jsx                 # StrictMode → ErrorBoundary → App
    ├── App.jsx                  # BrowserRouter + lazy routes + Layout outlet
    ├── index.css                # Design tokens, theme variables, utilities
    ├── data/
    │   └── portfolio.js         # Centralised content & site config
    ├── lib/
    │   └── utils.js             # cn() helper (clsx + tailwind-merge)
    ├── hooks/
    │   └── useLenis.js          # Smooth-scroll init & parallax helpers
    ├── pages/
    │   ├── Home.jsx             # Hero / About / Skills / Projects / Contact
    │   ├── ProjectsPage.jsx     # Full projects page
    │   └── NotFound.jsx         # 404
    └── components/
        ├── layout/              # Layout, Navbar, Footer, SEO, ErrorBoundary
        ├── sections/            # Hero, About, Skills, Projects, Contact
        └── ui/                  # Reusable primitives (button, card, input…)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (LTS recommended)
- npm v9+

### Installation

```bash
git clone https://github.com/AniketShankhwar/my-portfolio.git
cd my-portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

Outputs optimised bundle to `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

The production build outputs a static `dist/` folder — deploy it to any static host:

- **Vercel** — import the repo; Vercel auto-detects Vite.
- **Netlify** — build command: `npm run build`, publish directory: `dist`.
- **GitHub Pages** — set base in `vite.config.js` and use `gh-pages` or GitHub Actions.

## Contact

| | |
|---|---|
| **Name** | Aniket Shankhwar |
| **Email** | [aniketshankhwar1531@gmail.com](mailto:aniketshankhwar1531@gmail.com) |
| **LinkedIn** | [linkedin.com/in/aniket-shankhwar](https://linkedin.com/in/aniket-shankhwar) |
| **GitHub** | [github.com/AniketShankhwar](https://github.com/AniketShankhwar) |
| **Portfolio** | *(add your deployed URL here)* |

## License

[MIT](LICENSE)
