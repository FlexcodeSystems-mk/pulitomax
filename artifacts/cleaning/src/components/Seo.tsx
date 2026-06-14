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

    const old = document.getElementById(JSONLD_ID);
    if (old) old.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = JSONLD_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, locale, image, type, jsonLd]);

  return null;
}
