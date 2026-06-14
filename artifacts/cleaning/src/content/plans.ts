import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export interface PlanContent {
  name: string;
  description: string;
  cadence: string;
  features: string[];
}

export interface Plan {
  id: string;
  price: string;
  popular: boolean;
  content: L<PlanContent>;
}

export const PLANS: Plan[] = [
  {
    id: "basic",
    price: "€89",
    popular: false,
    content: {
      it: {
        name: "Basic",
        description: "Ideale per chi desidera una casa pulita ogni mese.",
        cadence: "1 pulizia al mese",
        features: [
          "Pulizia mensile programmata",
          "Appuntamento fisso",
          "Operatore assicurato",
          "Prodotti professionali inclusi",
          "Supporto online",
        ],
      },
      en: {
        name: "Basic",
        description: "Ideal for those who want a clean home every month.",
        cadence: "1 cleaning per month",
        features: [
          "Scheduled monthly cleaning",
          "Fixed appointment",
          "Insured operator",
          "Professional supplies included",
          "Online support",
        ],
      },
      de: {
        name: "Basic",
        description: "Ideal für ein sauberes Zuhause jeden Monat.",
        cadence: "1 Reinigung pro Monat",
        features: [
          "Geplante monatliche Reinigung",
          "Fester Termin",
          "Versicherter Mitarbeiter",
          "Professionelle Materialien inklusive",
          "Online-Support",
        ],
      },
    },
  },
  {
    id: "standard",
    price: "€159",
    popular: true,
    content: {
      it: {
        name: "Standard",
        description: "Il piano più scelto per un comfort costante.",
        cadence: "2 pulizie al mese",
        features: [
          "Pulizia bisettimanale",
          "Programmazione prioritaria",
          "Operatore assicurato",
          "Prodotti professionali inclusi",
          "Supporto dedicato",
          "Riprogrammazione flessibile",
        ],
      },
      en: {
        name: "Standard",
        description: "The most popular plan for constant comfort.",
        cadence: "2 cleanings per month",
        features: [
          "Bi-weekly cleaning",
          "Priority scheduling",
          "Insured operator",
          "Professional supplies included",
          "Dedicated support",
          "Flexible rescheduling",
        ],
      },
      de: {
        name: "Standard",
        description: "Der beliebteste Plan für gleichbleibenden Komfort.",
        cadence: "2 Reinigungen pro Monat",
        features: [
          "Zweiwöchentliche Reinigung",
          "Bevorzugte Terminplanung",
          "Versicherter Mitarbeiter",
          "Professionelle Materialien inklusive",
          "Persönlicher Support",
          "Flexible Umplanung",
        ],
      },
    },
  },
  {
    id: "premium",
    price: "€289",
    popular: false,
    content: {
      it: {
        name: "Premium",
        description: "Massimo livello di servizio e priorità assoluta.",
        cadence: "4 pulizie al mese",
        features: [
          "Pulizia settimanale",
          "Servizio prioritario",
          "Richieste di emergenza",
          "Operatore assicurato dedicato",
          "Prodotti professionali inclusi",
          "Referente personale",
          "Riprogrammazione illimitata",
        ],
      },
      en: {
        name: "Premium",
        description: "The highest level of service with absolute priority.",
        cadence: "4 cleanings per month",
        features: [
          "Weekly cleaning",
          "Priority service",
          "Emergency requests",
          "Dedicated insured operator",
          "Professional supplies included",
          "Personal account manager",
          "Unlimited rescheduling",
        ],
      },
      de: {
        name: "Premium",
        description: "Höchstes Serviceniveau mit absoluter Priorität.",
        cadence: "4 Reinigungen pro Monat",
        features: [
          "Wöchentliche Reinigung",
          "Prioritätsservice",
          "Notfallanfragen",
          "Dedizierter versicherter Mitarbeiter",
          "Professionelle Materialien inklusive",
          "Persönlicher Ansprechpartner",
          "Unbegrenzte Umplanung",
        ],
      },
    },
  },
];
