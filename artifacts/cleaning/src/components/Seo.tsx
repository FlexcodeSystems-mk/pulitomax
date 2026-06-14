import { useEffect } from "react";
import { SITE } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  locale: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const JSONLD_ID = "page-jsonld";
const HREFLANG_ATTR = "data-seo-alt";
const LOCALES = ["it", "en", "de"] as const;
const DEFAULT_LOCALE = "it";

const ABSOLUTE_URL_KEYS = new Set(["image", "logo", "url"]);

function absolutizeUrls(value: unknown, origin: string): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => absolutizeUrls(item, origin));
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      if (
        ABSOLUTE_URL_KEYS.has(key) &&
        typeof val === "string" &&
        val.startsWith("/")
      ) {
        out[key] = `${origin}${val}`;
      } else {
        out[key] = absolutizeUrls(val, origin);
      }
    }
    return out;
  }
  return value;
}

function setHreflangAlternates(origin: string, path: string) {
  document.head
    .querySelectorAll(`link[${HREFLANG_ATTR}]`)
    .forEach((el) => el.remove());

  const match = path.match(/^\/(it|en|de)(\/.*)?$/);
  const rest = match ? match[2] ?? "" : path;

  const add = (hreflang: string, locale: string) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", `${origin}/${locale}${rest}`);
    link.setAttribute(HREFLANG_ATTR, "true");
    document.head.appendChild(link);
  };

  LOCALES.forEach((loc) => add(loc, loc));
  add("x-default", DEFAULT_LOCALE);
}

export function Seo({
  title,
  description,
  path,
  locale,
  image,
  type = "website",
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE.name}`;
    document.title = fullTitle;

    const origin =
      typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}${path}`;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:locale", locale);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    const heroImage = image ?? SITE.defaultOgImage;
    const absImage = heroImage.startsWith("http")
      ? heroImage
      : `${origin}${heroImage}`;
    upsertMeta("property", "og:image", absImage);
    upsertMeta("name", "twitter:image", absImage);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setHreflangAlternates(origin, path);

    const old = document.getElementById(JSONLD_ID);
    if (old) old.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = JSONLD_ID;
      script.textContent = JSON.stringify(absolutizeUrls(jsonLd, origin));
      document.head.appendChild(script);
    }
  }, [title, description, path, locale, image, type, jsonLd]);

  return null;
}
