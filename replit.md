# Pulizia Pro

A premium, multilingual (Italian default, English, German) marketing website for "Pulizia Pro", a professional cleaning services company operating throughout Italy. Frontend-only React + Vite SPA.

## Run & Operate

- App runs via the `artifacts/cleaning: web` workflow (Vite dev server, binds to `PORT`)
- `pnpm --filter @workspace/cleaning run typecheck` — typecheck the cleaning artifact
- No backend / no database — all content is static and forms are client-only (no submission endpoint)

## Stack

- React 19 + Vite 7, TypeScript
- Routing: wouter (locale-prefixed, nested routing)
- i18n: custom React context (`src/lib/i18n.tsx`), locales it/en/de
- Forms: react-hook-form + zod (`@hookform/resolvers`)
- Animation: framer-motion
- Icons: lucide-react (brand/social icons also from lucide; `react-icons/si` for WhatsApp)
- Styling: Tailwind v4 (tokens via `hsl(var(--token))`), shadcn-style ui components

## Where things live

- `artifacts/cleaning/src/App.tsx` — router: `/` redirects to `/it`; `/it`, `/en`, `/de` are nested routes wrapping `<Layout>` + page `<Switch>`
- `artifacts/cleaning/src/lib/i18n.tsx` — i18n provider; `useI18n()` → `{ locale, t, tr, setLocale }`. `t()` = string dot-path, `tr<T>()` = object/array lookup
- `artifacts/cleaning/src/lib/site.ts` — `SITE`, `SERVICE_AREAS`, `localePath(locale, path?)`, `whatsappLink()`
- `artifacts/cleaning/src/content/` — `services.ts` (8), `plans.ts` (3), `reviews.ts` (6), `faqs.ts` (22), `blog.ts` (10 posts, `CATEGORIES` (5), `getPost`, `categoryLabel`)
- `artifacts/cleaning/src/components/` — `Layout`, `Navbar`, `Footer`, `Seo`, `QuoteForm`, `FloatingButtons`, `CookieConsent`, `ExitIntentPopup`, `Reveal`, `common.tsx`
- `artifacts/cleaning/src/pages/` — Home, Services, ServiceDetail, Plans, About, Reviews, Blog, BlogPost, Contact, FAQ
- Images: `@assets/generated_images/*.png`

## Architecture decisions

- Locale routing uses wouter's `nest` prop: top-level `<Route path="/it" nest>` strips the locale prefix so inner routes are relative. Do NOT use a wildcard (`/it/*?`) with `nest` — it folds the wildcard into the base and every sub-path resolves to `/`.
- The `I18nProvider` is mounted per-locale inside each nested router so the locale is fixed by the URL, not stored state.
- Forms have no backend: on submit they show a polished success state only.
- Per-page SEO is handled by the `Seo` component (title/meta/OG + JSON-LD injected into `<head>`).

## Product

Marketing site: home, 8 SEO-optimized service pages, subscription plans (Basic/Standard/Premium, placeholder prices), about, reviews, blog (5 categories, 10 full articles with FAQs), contact + quote forms, 20+ FAQs, WhatsApp + call floating buttons, newsletter signup, exit-intent popup, GDPR cookie consent. Brand: white / dark-blue / green, lucide icons (no emojis), framer-motion animations, mobile-first.

## User preferences

- No emojis anywhere in the UI — use lucide-react icons.

## Gotchas

- wouter `nest` routes must use a plain prefix path (`/it`), never a wildcard.
- `react-icons/si` does not export `SiLinkedin` — use lucide `Linkedin` for social icons.
- Verify with `pnpm --filter @workspace/cleaning run typecheck`, not `build` (build needs workflow-provided env).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
