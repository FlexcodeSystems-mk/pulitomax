---
name: wouter locale-prefixed routing
description: How to do locale-prefixed routes (/it, /en, /de) with wouter without doubled prefixes or sub-paths collapsing to "/"
---

# wouter locale-prefixed routing

**Do NOT use wouter's `nest` prop for locale prefixes if your links use absolute, locale-included hrefs.**

The `cleaning` artifact generates all links with `localePath(locale, path)` → absolute paths that already include the locale (`/it/services`). `nest` makes each locale router's base `/it`, and wouter then prepends that base AGAIN to every absolute `<Link>`/`navigate` → `/it/it/services` (and language switch → `/it/en/...`). Direct URL loads work, so it looks fine until you click a link or switch language → 404.

**Correct architecture (no `nest`):** single `<Router base={BASE_URL}>`. A top `Router()` reads the first path segment to pick the locale, then `LocalizedRouter` declares FULL locale-prefixed routes via `localePath(locale, ...)` (e.g. `localePath(locale, "services/:slug")`). Absolute links resolve against `BASE_URL` only — no doubling. Key `<I18nProvider>` by locale to force a clean remount on language change.

Language switcher: read wouter's base-stripped `useLocation()` location and swap only the leading locale segment: `location.replace(/^\/[a-z]{2}(?=\/|$)/, "")`, then `navigate(\`/\${next}\${rest}\`)`.

**Why:** `nest` scopes base/hooks to children; it only fits RELATIVE inner links. Mixing it with absolute locale-included hrefs double-prefixes. (Also: with `nest`, never add a wildcard like `/it/*?` — the wildcard folds into the base and every sub-path renders "/".)

**How to apply:** locale-prefixed wouter apps where links/SEO use absolute `localePath` → flat router + full-prefixed route paths, not `nest`.
