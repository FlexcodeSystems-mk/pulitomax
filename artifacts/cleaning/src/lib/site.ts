import type { Locale } from "@/lib/i18n";
import heroImg from "@assets/generated_images/hero.png";

export const SITE = {
  name: "Pulizia Pro",
  defaultOgImage: heroImg,
  phoneDisplay: "+39 02 9475 1234",
  phoneHref: "+390294751234",
  whatsappNumber: "393339998877",
  whatsappDisplay: "+39 333 999 8877",
  email: "info@puliziapro.it",
  addressStreet: "Via Dante 12",
  addressCity: "20121 Milano (MI)",
  addressCountry: "Italia",
  vat: "P.IVA 12345678901",
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
