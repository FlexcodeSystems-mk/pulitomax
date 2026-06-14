// Generates public/sitemap.xml and public/robots.txt for the PulitoMax site.
// Run with: node scripts/generate-sitemap.mjs
// NOTE: when you add new pages/services/blog posts, update the lists below.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = resolve(__dirname, "..", "public");

// Keep in sync with src/lib/site.ts SITE.url
const BASE = "https://pulitomax.it";
const LOCALES = ["it", "en", "de"];
const DEFAULT_LOCALE = "it";

const staticPaths = [
  "",
  "services",
  "plans",
  "about",
  "reviews",
  "blog",
  "contact",
  "faq",
  "privacy",
  "terms",
  "cookies",
];

const serviceSlugs = [
  "apartment-cleaning",
  "staircase-cleaning",
  "office-cleaning",
  "store-cleaning",
  "window-cleaning",
  "deep-cleaning",
  "airbnb-cleaning",
  "industrial-cleaning",
];

const blogSlugs = [
  "how-often-professional-apartment-cleaning",
  "benefits-staircase-cleaning-residential-buildings",
  "professional-office-cleaning-productivity-benefits",
  "airbnb-cleaning-checklist-property-owners",
  "deep-cleaning-vs-regular-cleaning",
  "best-cleaning-practices-retail-stores",
  "how-professional-cleaning-improves-property-value",
  "seasonal-cleaning-guide-homes-italy",
  "eco-friendly-cleaning-solutions",
  "why-businesses-need-professional-cleaning",
];

const paths = [
  ...staticPaths,
  ...serviceSlugs.map((s) => `services/${s}`),
  ...blogSlugs.map((s) => `blog/${s}`),
];

const today = new Date().toISOString().split("T")[0];

const url = (locale, path) =>
  `${BASE}/${locale}${path ? `/${path}` : ""}`;

const entries = paths
  .map((path) => {
    const alternates = [
      ...LOCALES.map(
        (loc) =>
          `    <xhtml:link rel="alternate" hreflang="${loc}" href="${url(loc, path)}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(DEFAULT_LOCALE, path)}" />`,
    ].join("\n");

    return LOCALES.map(
      (loc) => `  <url>
    <loc>${url(loc, path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
${alternates}
  </url>`,
    ).join("\n");
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

writeFileSync(resolve(PUBLIC, "sitemap.xml"), sitemap);
writeFileSync(resolve(PUBLIC, "robots.txt"), robots);

console.log(
  `Generated sitemap.xml (${paths.length * LOCALES.length} URLs) and robots.txt for ${BASE}`,
);
