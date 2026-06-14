import type { Locale } from "@/lib/i18n";
import heroImg from "@assets/generated_images/hero.png";

export const SITE = {
  name: "Pulizia Pro",
  // Production URL — update this to your live domain (used for sitemap & SEO).
  url: "https://www.puliziapro.it",
  defaultOgImage: heroImg,
  phoneDisplay: "+39 345 051 8988",
  phoneHref: "+393450518988",
  whatsappNumber: "393450518988",
  whatsappDisplay: "+39 345 051 8988",
  email: "ehabahmed@libero.it",
  addressStreet: "Via Dante 12",
  addressCity: "20121 Milano (MI)",
  addressCountry: "Italia",
  vat: "P.IVA 04021430121",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const SERVICE_AREAS = [
  "Milano",
  "Roma",
  "Torino",
  "Bologna",
  "Firenze",
  "Napoli",
  "Venezia",
  "Verona",
  "Genova",
  "Bergamo",
  "Brescia",
  "Padova",
];

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
