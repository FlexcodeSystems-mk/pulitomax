---
name: SPA hreflang / SEO alternate tags
description: Where to emit hreflang and per-page SEO link tags in this client-rendered multilingual SPA.
---

# SPA hreflang / SEO alternates

In the `cleaning` artifact (and similar Vite SPAs), per-page SEO tags — canonical, og:url, and `hreflang` alternates — are injected at runtime by the `Seo` component into `<head>`, keyed off the current route/locale.

**Rule:** do NOT also hardcode `<link rel="alternate" hreflang=...>` in `index.html`.

**Why:** `index.html` is static and ships on every route. Hardcoded alternates only ever describe the homepage URLs, so on non-home pages the static set coexists with the dynamic page-specific set → duplicate/conflicting hreflang, which weakens or breaks the signal for crawlers.

**How to apply:** keep hreflang generation in one place (the `Seo` component). The dynamic version removes its own prior tags (via a `data-seo-alt` marker) before re-adding, so SPA navigation never leaks stale alternates. `index.html` should hold only static, route-independent head content (charset, viewport, fonts, GSC verification meta).
