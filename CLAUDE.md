# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server (Next.js 16, Turbopack default)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next/core-web-vitals)
```

There is no test suite and no test tooling installed. Verify changes by running the dev server and exercising the UI.

## Stack

Next.js 16.2 App Router, React 19.2, Tailwind CSS v4, Framer Motion v12, Lenis (smooth scroll). Plain JavaScript — no TypeScript. `jsconfig.json` maps `@/*` → `./src/*`.

The React Compiler is enabled (`reactCompiler: true` in [next.config.mjs](next.config.mjs), `babel-plugin-react-compiler` installed). Do not hand-add `useMemo`/`useCallback`/`memo` for performance; the compiler handles memoization.

## Architecture

**Almost everything is a Client Component.** Only [src/app/layout.js](src/app/layout.js) and [src/app/page.js](src/app/page.js) are server components — every file under [src/components/](src/components/) carries `"use client"`. Adding a new section component means adding `"use client"` too, since they all use Framer Motion or the theme context.

**Project data lives in [public/projects.json](public/projects.json), not in source.** All three consumers — [src/components/Projects.jsx](src/components/Projects.jsx), [src/app/projects/page.jsx](src/app/projects/page.jsx), and [src/app/projects/[id]/page.jsx](src/app/projects/[id]/page.jsx) — `fetch('/projects.json')` client-side and filter in memory. There is no data-fetching layer, no API route, and no `generateStaticParams`; the `[id]` route resolves by scanning the fetched array. To add or edit a project, edit that JSON file.

[src/data/projects.js](src/data/projects.js) is a stale duplicate that nothing imports. Treat `public/projects.json` as the single source of truth.

Project objects use: `id`, `title`, `category`, `image`, `description`, `fullDescription`, `tech[]`, `contributions[]`, `challenges[]`, `improvements[]`, `live`, `github` (some also `githubServer`). The `category` value must match an id in [src/components/FilterTabs.jsx](src/components/FilterTabs.jsx) — currently `nextjs`, `react`, `vanilla` — or the project becomes unreachable via filtering.

**Layout provider chain** (order matters): `ThemeProvider` → `DynamicBackground` (fixed `z-[-1]` animated backdrop) → `SmoothScroll` (Lenis RAF loop) wrapping `ScrollProgress`, `Navbar`, page children, `Footer`.

**Theming is class-based, not `next-themes`.** A blocking inline script in the `<head>` of [src/app/layout.js](src/app/layout.js) reads `localStorage.theme` and toggles `.dark` on `<html>` before paint to avoid flash; [src/context/ThemeContext.js](src/context/ThemeContext.js) then mirrors that state for React. If you change the default theme or storage key, change it in **both** places. Both `<html>` and `<body>` use `suppressHydrationWarning` because of this.

## Styling

Tailwind v4 with **no `tailwind.config.js`** — all design tokens are declared in the `@theme` block of [src/app/globals.css](src/app/globals.css). Dark mode is a custom variant: `@custom-variant dark (&:where(.dark, .dark *))`.

The token set is Material-3 style (`bg-surface-container`, `text-on-surface-variant`, `bg-primary-container`, …) and its values are **dark-mode colors**, while `:root` / `.dark` separately define raw RGB triples for `--background` / `--foreground` / `--card` used by `body`. Existing components therefore mix both systems: semantic tokens plus explicit `text-zinc-900 dark:text-white` pairs. Follow the pattern in the file you're editing rather than unifying.

Custom utilities available: `.glass-card`, `.text-gradient-primary`, `.arc-mask`, `.no-scrollbar`, and the keyframe-backed `animate-orbit-slow` / `animate-orbit-reverse` / `animate-float`.

## Animation

Shared Framer Motion variants live in [src/lib/animations.js](src/lib/animations.js) — `fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `staggerItem`, and `viewPortConfig` (`{ once: true, amount: 0.2 }`). Reuse these instead of writing inline variants so scroll-reveal timing stays consistent across sections.

Two icon fonts are loaded via CDN in the layout `<head>`: Material Symbols Outlined (`<span className="material-symbols-outlined">arrow_forward</span>`) and Font Awesome 6 (`<i className="fa-brands fa-github">`). There is no icon React package.

Images use raw `<img>`, not `next/image` — sources are remote GitHub user-attachment URLs and no remote patterns are configured in `next.config.mjs`.
