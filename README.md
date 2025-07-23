# Pokédex

A modern [Next.js](https://nextjs.org) 15 + [React 19](https://react.dev/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Table of Contents

- [Project Structure](#project-structure)
- [UI & Styling](#ui--styling)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Code Quality: ESLint & Prettier](#code-quality-eslint--prettier)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

---

## Project Structure

```
pokedex/
  ├─ public/           # Static assets (SVGs, icons, etc)
  ├─ src/
  │   ├─ app/          # Next.js app directory (routing, pages, layouts)
  │   ├─ lib/          # Utilities, helpers
  │   └─ ...           # Other feature folders
  ├─ .prettierrc       # Prettier config
  ├─ .prettierignore   # Prettier ignore
  ├─ eslint.config.mjs # ESLint flat config
  ├─ package.json      # Scripts & dependencies
  └─ README.md         # This file
```

---

## UI & Styling

- **Component Library:** [shadcn/ui](https://ui.shadcn.com/) for accessible, customizable React components.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **Fonts:** Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font).

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

See `package.json` for all scripts. Most common:

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write ."
}
```

- `dev` — Start the dev server (with Turbopack)
- `build` — Build for production
- `start` — Start the production server
- `lint` — Lint all JS/TS files
- `format` — Format all files with Prettier

---

## Code Quality: ESLint & Prettier

- **ESLint:** Uses [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next) (`plugin:@next/next/recommended`) for Next.js best practices, plus TypeScript and Prettier integration.
- **TypeScript:** Linted with [@typescript-eslint](https://typescript-eslint.io/), using recommended rules.
- **Prettier:** Formatting enforced via [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).
- **Ignore Patterns:** Linting and formatting ignore build, output, and dependency folders (see `.prettierignore` and `eslint.config.mjs`).
- **Config Philosophy:**
  - Extends `plugin:@next/next/recommended` last for Next.js 15/React 19 best practices.
  - TypeScript support via `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`.
  - Prettier rules are enforced as errors.
  - Ignores are handled in `eslint.config.mjs` (not `.eslintignore`).
  - No need to import React for JSX in React 17+.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Next.js features and API
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript ESLint Docs](https://typescript-eslint.io/)
- [Prettier Docs](https://prettier.io/)

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
