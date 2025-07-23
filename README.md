This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Code Quality: ESLint & Prettier

This project is set up for modern linting and formatting with Next.js 15 and React 19:

- **ESLint**: Uses [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next) (`plugin:@next/next/recommended`) for Next.js best practices, plus TypeScript and Prettier integration.
- **TypeScript**: TypeScript files are linted with [@typescript-eslint](https://typescript-eslint.io/), using recommended rules.
- **Prettier**: Formatting is enforced via [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).
- **Ignore Patterns**: Linting and formatting ignore build, output, and dependency folders (see `.prettierignore` and `eslint.config.mjs`).

### Lint & Format Scripts

See `package.json`:

```json
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write ."
}
```

- `npm run lint` — Lints all JS/TS files using the flat config (see `eslint.config.mjs`).
- `npm run format` — Formats all files using Prettier.

### ESLint Config Philosophy

- Extends `plugin:@next/next/recommended` last for Next.js 15/React 19 best practices.
- TypeScript support via `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`.
- Prettier rules are enforced as errors.
- Ignores are handled in `eslint.config.mjs` (not `.eslintignore`).
- No need to import React for JSX in React 17+.

For more, see:

- [Next.js ESLint Docs](https://nextjs.org/docs/app/api-reference/config/eslint)
- [TypeScript ESLint Docs](https://typescript-eslint.io/)
- [Prettier Docs](https://prettier.io/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# pokedex
