---
name: wouter nested locale routing
description: How to do locale-prefixed nested routes with wouter without every sub-path collapsing to "/"
---

# wouter nested locale routing

For locale-prefixed routing (`/it`, `/en`, `/de`) wrap each locale in a nested route using a PLAIN prefix path with the `nest` prop:

```tsx
<Route path="/it" nest><LocalizedRouter locale="it" /></Route>
```

**Do NOT** add a wildcard to the path (e.g. `/it/*?`). With `nest`, wouter folds the matched portion into the nested base; if you include the wildcard, the wildcard becomes part of the base and the inner router always sees location `"/"`, so every sub-path silently renders the index/home route instead of the intended page.

**Why:** `nest` already makes the route a prefix match and strips the matched prefix for children. A wildcard is redundant and corrupts the base calculation.

**How to apply:** Any wouter nested router — use the bare prefix path + `nest`. Inner `<Route>` paths are written relative to that prefix (`/`, `/blog`, `/services/:slug`).
