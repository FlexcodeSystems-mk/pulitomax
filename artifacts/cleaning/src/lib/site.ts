import type { Locale } from "@/lib/i18n";
import heroImg from "@assets/generated_images/hero.png";

export const SITE = {
  name: "PulitoMax",
  legalName: "BM SERVIZI DI AHMED EHAB",
  // Production URL — update this to your live domain (used for sitemap & SEO).
  url: "https://pulitomax.it",
  defaultOgImage: heroImg,
  phoneDisplay: "+39 345 051 8988",
  phoneHref: "+393450518988",
  whatsappNumber: "393450518988",
  whatsappDisplay: "+39 345 051 8988",
  email: "ehabahmed@libero.it",
  pec: "ahmedehab@pec.it",
  addressStreet: "Viale Valganna 212",
  addressCity: "21100 Varese (VA)",
  addressCountry: "Italia",
  vat: "P.IVA 04021430121",
  rea: "VA-396046",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const SERVICE_AREAS = [
  "Milano",
  "Varese",
  "Luino",
  "Lugano (CH)",
];

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
