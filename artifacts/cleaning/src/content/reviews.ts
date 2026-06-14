import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export interface Review {
  name: string;
  rating: number;
  city: string;
  content: L<{ role: string; text: string }>;
}

export const REVIEWS: Review[] = [
  {
    name: "Giulia Ferrari",
    rating: 5,
    city: "Milano",
    content: {
      it: {
        role: "Cliente privato",
        text: "Servizio impeccabile e personale gentilissimo. La mia casa non è mai stata così pulita. Consigliatissimi!",
      },
      en: {
        role: "Private client",
        text: "Impeccable service and very kind staff. My home has never been this clean. Highly recommended!",
      },
      de: {
        role: "Privatkunde",
        text: "Makelloser Service und sehr freundliches Personal. Mein Zuhause war noch nie so sauber. Sehr empfehlenswert!",
      },
    },
  },
  {
    name: "Marco Bianchi",
    rating: 5,
    city: "Roma",
    content: {
      it: {
        role: "Amministratore di condominio",
        text: "Gestiamo con loro la pulizia di sei condomìni. Puntuali, affidabili e sempre disponibili. Un partner serio.",
      },
      en: {
        role: "Property manager",
        text: "We manage cleaning for six buildings with them. Punctual, reliable and always available. A serious partner.",
      },
      de: {
        role: "Hausverwalter",
        text: "Wir lassen sechs Wohnanlagen von ihnen reinigen. Pünktlich, zuverlässig und immer erreichbar. Ein seriöser Partner.",
      },
    },
  },
  {
    name: "Studio Legale Conti",
    rating: 5,
    city: "Torino",
    content: {
      it: {
        role: "Ufficio",
        text: "Puliscono il nostro studio ogni sera dopo la chiusura. Ambiente sempre perfetto per accogliere i clienti.",
      },
      en: {
        role: "Office",
        text: "They clean our office every evening after closing. The space is always perfect to welcome clients.",
      },
      de: {
        role: "Büro",
        text: "Sie reinigen unsere Kanzlei jeden Abend nach Geschäftsschluss. Die Räume sind immer perfekt für Mandanten.",
      },
    },
  },
  {
    name: "Sofia Romano",
    rating: 5,
    city: "Firenze",
    content: {
      it: {
        role: "Host Airbnb",
        text: "Il turnover tra un ospite e l'altro è sempre rapido e perfetto. Le mie recensioni sulla pulizia sono salite a cinque stelle.",
      },
      en: {
        role: "Airbnb host",
        text: "The turnover between guests is always fast and flawless. My cleanliness reviews went up to five stars.",
      },
      de: {
        role: "Airbnb-Gastgeber",
        text: "Der Wechsel zwischen Gästen ist immer schnell und makellos. Meine Sauberkeitsbewertungen sind auf fünf Sterne gestiegen.",
      },
    },
  },
  {
    name: "Andrea Greco",
    rating: 5,
    city: "Bologna",
    content: {
      it: {
        role: "Negozio retail",
        text: "Le vetrine e il pavimento sono sempre splendenti prima dell'apertura. Hanno migliorato l'immagine del nostro store.",
      },
      en: {
        role: "Retail store",
        text: "The windows and floor are always spotless before opening. They've improved our store's image.",
      },
      de: {
        role: "Einzelhandel",
        text: "Schaufenster und Boden sind vor der Öffnung immer makellos. Sie haben das Image unseres Geschäfts verbessert.",
      },
    },
  },
  {
    name: "Elena Marchetti",
    rating: 5,
    city: "Verona",
    content: {
      it: {
        role: "Cliente abbonamento",
        text: "Con l'abbonamento bisettimanale non penso più alle pulizie. Tutto automatico e sempre di qualità.",
      },
      en: {
        role: "Subscription client",
        text: "With the bi-weekly subscription I never think about cleaning anymore. All automatic and always high quality.",
      },
      de: {
        role: "Abo-Kunde",
        text: "Mit dem zweiwöchentlichen Abo denke ich nie mehr ans Putzen. Alles automatisch und immer hochwertig.",
      },
    },
  },
];
