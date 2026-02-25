# AGENTS.md

## Cursor Cloud specific instructions

**Product**: VibeCircle — a React SPA "Coming Soon" landing page with countdown timer and email waitlist signup. No backend; Supabase (optional, cloud-hosted) is used for persisting waitlist emails.

**Tech stack**: Vite 5 + React 18 + TypeScript + Tailwind CSS + shadcn/ui. See `package.json` for scripts.

### Running the app

- `npm run dev` — starts the Vite dev server on port **8080**.
- The app works without Supabase credentials; waitlist data falls back to `localStorage`.

### Lint / Build / Test

- `npm run lint` — ESLint. There is 1 pre-existing error in `tailwind.config.ts` (`@typescript-eslint/no-require-imports`).
- `npm run build` — production build to `dist/`.
- `npm run test` — Vitest. Test framework is configured but no test files exist yet.

### Environment variables (optional)

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous API key |

These are optional; the app gracefully degrades without them.
