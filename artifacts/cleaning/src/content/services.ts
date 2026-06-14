import type { Locale } from "@/lib/i18n";
import apartmentImg from "@assets/generated_images/svc-apartment.png";
import staircaseImg from "@assets/generated_images/svc-staircase.png";
import officeImg from "@assets/generated_images/svc-office.png";
import retailImg from "@assets/generated_images/svc-retail.png";
import windowImg from "@assets/generated_images/svc-window.png";
import deepImg from "@assets/generated_images/svc-deep.png";
import airbnbImg from "@assets/generated_images/svc-airbnb.png";
import industrialImg from "@assets/generated_images/svc-industrial.png";

type L<T> = Record<Locale, T>;

export interface ServiceContent {
  name: string;
  tagline: string;
  intro: string;
  included: string[];
  benefits: string[];
}

export interface Service {
  slug: string;
  icon: string;
  image: string;
  content: L<ServiceContent>;
}

export const SERVICES: Service[] = [
  {
    slug: "apartment-cleaning",
    icon: "Home",
    image: apartmentImg,
    content: {
      it: {
        name: "Pulizia Appartamenti",
        tagline: "Pulizia ordinaria e approfondita per la tua casa",
        intro:
          "Servizi di pulizia per appartamenti su misura, dalla manutenzione ordinaria alle pulizie di fondo. Operatori formati, prodotti professionali e massima cura del dettaglio per una casa sempre impeccabile.",
        included: [
          "Pulizia ordinaria periodica",
          "Pulizia approfondita (deep cleaning)",
          "Pulizia pre-trasloco (move-in)",
          "Pulizia post-trasloco (move-out)",
          "Pulizia per affitti Airbnb",
        ],
        benefits: [
          "Operatori sempre puntuali e affidabili",
          "Prodotti eco-friendly inclusi",
          "Interventi una tantum o programmati",
          "Soddisfazione garantita",
        ],
      },
      en: {
        name: "Apartment Cleaning",
        tagline: "Regular and deep cleaning for your home",
        intro:
          "Tailored apartment cleaning services, from routine upkeep to deep cleans. Trained operators, professional products and meticulous attention to detail for a spotless home.",
        included: [
          "Regular periodic cleaning",
          "Deep cleaning",
          "Move-in cleaning",
          "Move-out cleaning",
          "Airbnb rental cleaning",
        ],
        benefits: [
          "Always punctual, reliable operators",
          "Eco-friendly products included",
          "One-off or scheduled visits",
          "Satisfaction guaranteed",
        ],
      },
      de: {
        name: "Wohnungsreinigung",
        tagline: "Regelmäßige und gründliche Reinigung für Ihr Zuhause",
        intro:
          "Maßgeschneiderte Wohnungsreinigung, von der laufenden Pflege bis zur Grundreinigung. Geschulte Mitarbeiter, professionelle Produkte und höchste Sorgfalt für ein makelloses Zuhause.",
        included: [
          "Regelmäßige periodische Reinigung",
          "Grundreinigung",
          "Einzugsreinigung",
          "Auszugsreinigung",
          "Airbnb-Reinigung",
        ],
        benefits: [
          "Stets pünktliche, zuverlässige Mitarbeiter",
          "Umweltfreundliche Produkte inklusive",
          "Einmalig oder geplant",
          "Zufriedenheitsgarantie",
        ],
      },
    },
  },
  {
    slug: "staircase-cleaning",
    icon: "Building2",
    image: staircaseImg,
    content: {
      it: {
        name: "Pulizia Scale e Condomini",
        tagline: "Spazi comuni sempre puliti e accoglienti",
        intro:
          "Pulizia professionale di scale, androni e parti comuni condominiali. Programmi settimanali o mensili su misura per amministratori e condomini, con la massima affidabilità.",
        included: [
          "Pulizia settimanale",
          "Pulizia mensile",
          "Manutenzione delle parti comuni",
          "Servizi per condomini",
        ],
        benefits: [
          "Programmi personalizzati per ogni condominio",
          "Referente dedicato per l'amministratore",
          "Reportistica degli interventi",
          "Prezzi trasparenti per unità",
        ],
      },
      en: {
        name: "Staircase & Condominium Cleaning",
        tagline: "Common areas always clean and welcoming",
        intro:
          "Professional cleaning of staircases, entrances and condominium common areas. Weekly or monthly programs tailored for property managers and buildings, with full reliability.",
        included: [
          "Weekly cleaning",
          "Monthly cleaning",
          "Common area maintenance",
          "Condominium services",
        ],
        benefits: [
          "Custom programs for every building",
          "Dedicated contact for the manager",
          "Service reporting",
          "Transparent per-unit pricing",
        ],
      },
      de: {
        name: "Treppenhaus- & Wohnanlagenreinigung",
        tagline: "Gemeinschaftsbereiche immer sauber und einladend",
        intro:
          "Professionelle Reinigung von Treppenhäusern, Eingängen und Gemeinschaftsbereichen. Wöchentliche oder monatliche Programme für Hausverwaltungen und Wohnanlagen, absolut zuverlässig.",
        included: [
          "Wöchentliche Reinigung",
          "Monatliche Reinigung",
          "Pflege der Gemeinschaftsbereiche",
          "Service für Wohnanlagen",
        ],
        benefits: [
          "Individuelle Programme für jede Anlage",
          "Fester Ansprechpartner für die Verwaltung",
          "Leistungsberichte",
          "Transparente Preise pro Einheit",
        ],
      },
    },
  },
  {
    slug: "office-cleaning",
    icon: "Briefcase",
    image: officeImg,
    content: {
      it: {
        name: "Pulizia Uffici",
        tagline: "Ambienti di lavoro sani e produttivi",
        intro:
          "Pulizia professionale di uffici e spazi di lavoro, con interventi giornalieri o programmati, anche fuori dall'orario di lavoro per non interrompere l'attività.",
        included: [
          "Pulizia giornaliera degli uffici",
          "Interventi programmati",
          "Postazioni di lavoro dei dipendenti",
          "Sale riunioni e aree comuni",
        ],
        benefits: [
          "Interventi fuori orario disponibili",
          "Sanificazione delle superfici",
          "Ambiente più salubre e produttivo",
          "Fatturazione semplice per le aziende",
        ],
      },
      en: {
        name: "Office Cleaning",
        tagline: "Healthy, productive workspaces",
        intro:
          "Professional cleaning of offices and workspaces, with daily or scheduled visits, including outside working hours so your business never stops.",
        included: [
          "Daily office cleaning",
          "Scheduled cleaning",
          "Employee workspaces",
          "Meeting rooms and common areas",
        ],
        benefits: [
          "After-hours service available",
          "Surface sanitization",
          "A healthier, more productive workplace",
          "Simple invoicing for businesses",
        ],
      },
      de: {
        name: "Büroreinigung",
        tagline: "Gesunde, produktive Arbeitsräume",
        intro:
          "Professionelle Reinigung von Büros und Arbeitsräumen, täglich oder geplant, auch außerhalb der Geschäftszeiten, damit Ihr Betrieb nie stillsteht.",
        included: [
          "Tägliche Büroreinigung",
          "Geplante Reinigung",
          "Arbeitsplätze der Mitarbeiter",
          "Besprechungsräume und Gemeinschaftsbereiche",
        ],
        benefits: [
          "Service außerhalb der Geschäftszeiten",
          "Flächendesinfektion",
          "Gesünderer, produktiverer Arbeitsplatz",
          "Einfache Abrechnung für Unternehmen",
        ],
      },
    },
  },
  {
    slug: "store-cleaning",
    icon: "Store",
    image: retailImg,
    content: {
      it: {
        name: "Pulizia Negozi",
        tagline: "Spazi commerciali che fanno una grande impressione",
        intro:
          "Pulizia di negozi, showroom e spazi commerciali. Un ambiente impeccabile valorizza i tuoi prodotti e accoglie al meglio i clienti.",
        included: [
          "Pulizia di negozi",
          "Pulizia di showroom",
          "Manutenzione retail periodica",
          "Vetrine e superfici espositive",
        ],
        benefits: [
          "Interventi prima o dopo l'apertura",
          "Vetrine sempre splendenti",
          "Immagine professionale del punto vendita",
          "Programmi flessibili",
        ],
      },
      en: {
        name: "Retail Store Cleaning",
        tagline: "Commercial spaces that make a great impression",
        intro:
          "Cleaning of shops, showrooms and retail spaces. A spotless environment showcases your products and welcomes customers at their best.",
        included: [
          "Shop cleaning",
          "Showroom cleaning",
          "Periodic retail maintenance",
          "Window displays and surfaces",
        ],
        benefits: [
          "Service before or after opening hours",
          "Always spotless displays",
          "Professional store image",
          "Flexible programs",
        ],
      },
      de: {
        name: "Ladenreinigung",
        tagline: "Geschäftsräume, die einen großartigen Eindruck machen",
        intro:
          "Reinigung von Geschäften, Showrooms und Verkaufsflächen. Eine makellose Umgebung präsentiert Ihre Produkte und empfängt Kunden bestmöglich.",
        included: [
          "Ladenreinigung",
          "Showroom-Reinigung",
          "Regelmäßige Pflege im Einzelhandel",
          "Schaufenster und Oberflächen",
        ],
        benefits: [
          "Service vor oder nach Öffnungszeiten",
          "Stets glänzende Schaufenster",
          "Professionelles Erscheinungsbild",
          "Flexible Programme",
        ],
      },
    },
  },
  {
    slug: "window-cleaning",
    icon: "PanelsTopLeft",
    image: windowImg,
    content: {
      it: {
        name: "Pulizia Vetri",
        tagline: "Vetri e superfici trasparenti come nuovi",
        intro:
          "Pulizia professionale di vetri e finestre, residenziali e commerciali, comprese le superfici in altezza con attrezzature dedicate e in totale sicurezza.",
        included: [
          "Vetri residenziali",
          "Vetri commerciali",
          "Pulizia in altezza",
          "Vetrate e facciate continue",
        ],
        benefits: [
          "Risultato senza aloni",
          "Attrezzature professionali",
          "Massima sicurezza in quota",
          "Interventi rapidi e programmabili",
        ],
      },
      en: {
        name: "Window Cleaning",
        tagline: "Glass and clear surfaces like new",
        intro:
          "Professional cleaning of glass and windows, residential and commercial, including high-reach surfaces with dedicated equipment and full safety.",
        included: [
          "Residential windows",
          "Commercial windows",
          "High-reach cleaning",
          "Glass facades and curtain walls",
        ],
        benefits: [
          "Streak-free results",
          "Professional equipment",
          "Maximum safety at height",
          "Fast, schedulable service",
        ],
      },
      de: {
        name: "Fensterreinigung",
        tagline: "Glas und klare Flächen wie neu",
        intro:
          "Professionelle Reinigung von Glas und Fenstern, privat und gewerblich, einschließlich hoch gelegener Flächen mit spezieller Ausrüstung und voller Sicherheit.",
        included: [
          "Privatfenster",
          "Gewerbefenster",
          "Reinigung in der Höhe",
          "Glasfassaden",
        ],
        benefits: [
          "Streifenfreies Ergebnis",
          "Professionelle Ausrüstung",
          "Maximale Sicherheit in der Höhe",
          "Schneller, planbarer Service",
        ],
      },
    },
  },
  {
    slug: "deep-cleaning",
    icon: "Sparkles",
    image: deepImg,
    content: {
      it: {
        name: "Pulizie Approfondite",
        tagline: "Quando serve molto più di una pulizia ordinaria",
        intro:
          "Pulizie di fondo e sanificazione per ogni ambiente: post-ristrutturazione, pulizie di primavera e igienizzazione completa di superfici e ambienti.",
        included: [
          "Pulizia post-ristrutturazione",
          "Pulizie di primavera",
          "Sanificazione e igienizzazione",
          "Trattamenti specifici delle superfici",
        ],
        benefits: [
          "Eliminazione di polveri e residui",
          "Ambienti igienizzati a fondo",
          "Prodotti professionali certificati",
          "Risultato visibile e duraturo",
        ],
      },
      en: {
        name: "Deep Cleaning Services",
        tagline: "When you need much more than a regular clean",
        intro:
          "Deep cleaning and sanitization for any space: post-renovation, spring cleaning and complete sanitization of surfaces and environments.",
        included: [
          "Post-renovation cleaning",
          "Spring cleaning",
          "Sanitization and disinfection",
          "Specific surface treatments",
        ],
        benefits: [
          "Removal of dust and residue",
          "Thoroughly sanitized spaces",
          "Certified professional products",
          "Visible, long-lasting results",
        ],
      },
      de: {
        name: "Grundreinigung",
        tagline: "Wenn es viel mehr als eine normale Reinigung braucht",
        intro:
          "Grundreinigung und Desinfektion für jeden Raum: nach Renovierungen, Frühjahrsputz und vollständige Desinfektion von Flächen und Räumen.",
        included: [
          "Reinigung nach Renovierung",
          "Frühjahrsputz",
          "Desinfektion und Hygienisierung",
          "Spezielle Oberflächenbehandlungen",
        ],
        benefits: [
          "Entfernung von Staub und Rückständen",
          "Gründlich desinfizierte Räume",
          "Zertifizierte Profiprodukte",
          "Sichtbares, langanhaltendes Ergebnis",
        ],
      },
    },
  },
  {
    slug: "airbnb-cleaning",
    icon: "BedDouble",
    image: airbnbImg,
    content: {
      it: {
        name: "Pulizia Airbnb e Case Vacanza",
        tagline: "Turnover veloce e impeccabile tra un ospite e l'altro",
        intro:
          "Servizio di pulizia per affitti brevi e case vacanza: cambio biancheria, turnover rapido e standard sempre da cinque stelle per recensioni eccellenti.",
        included: [
          "Pulizia tra un ospite e l'altro",
          "Cambio e fornitura biancheria",
          "Turnover rapido",
          "Riassortimento kit di cortesia",
        ],
        benefits: [
          "Disponibilità anche last-minute",
          "Standard da cinque stelle",
          "Coordinamento con il check-out",
          "Più recensioni positive",
        ],
      },
      en: {
        name: "Airbnb & Holiday Rental Cleaning",
        tagline: "Fast, flawless turnover between guests",
        intro:
          "Cleaning service for short-term rentals and holiday homes: linen change, fast turnover and consistently five-star standards for excellent reviews.",
        included: [
          "Guest turnover cleaning",
          "Linen change and supply",
          "Fast turnaround",
          "Welcome kit restocking",
        ],
        benefits: [
          "Last-minute availability",
          "Five-star standards",
          "Coordinated with check-out",
          "More positive reviews",
        ],
      },
      de: {
        name: "Airbnb- & Ferienwohnungsreinigung",
        tagline: "Schneller, makelloser Wechsel zwischen Gästen",
        intro:
          "Reinigungsservice für Kurzzeitvermietungen und Ferienwohnungen: Wäschewechsel, schneller Turnover und durchgängig Fünf-Sterne-Standards für hervorragende Bewertungen.",
        included: [
          "Reinigung zwischen Gästen",
          "Wäschewechsel und -bereitstellung",
          "Schneller Ablauf",
          "Auffüllen der Willkommensartikel",
        ],
        benefits: [
          "Auch kurzfristig verfügbar",
          "Fünf-Sterne-Standards",
          "Abgestimmt auf den Check-out",
          "Mehr positive Bewertungen",
        ],
      },
    },
  },
  {
    slug: "industrial-cleaning",
    icon: "Factory",
    image: industrialImg,
    content: {
      it: {
        name: "Pulizie Industriali",
        tagline: "Soluzioni per magazzini, capannoni e stabilimenti",
        intro:
          "Pulizie industriali per magazzini, fabbriche e strutture produttive. Macchinari professionali, personale specializzato e attenzione alle norme di sicurezza.",
        included: [
          "Magazzini e depositi",
          "Fabbriche e stabilimenti",
          "Strutture industriali",
          "Pavimentazioni e aree produttive",
        ],
        benefits: [
          "Macchinari professionali dedicati",
          "Personale formato sulla sicurezza",
          "Interventi su grandi superfici",
          "Programmi su misura per la produzione",
        ],
      },
      en: {
        name: "Industrial Cleaning",
        tagline: "Solutions for warehouses, plants and facilities",
        intro:
          "Industrial cleaning for warehouses, factories and production facilities. Professional machinery, specialized staff and strict attention to safety standards.",
        included: [
          "Warehouses and depots",
          "Factories and plants",
          "Industrial facilities",
          "Flooring and production areas",
        ],
        benefits: [
          "Dedicated professional machinery",
          "Safety-trained staff",
          "Large-surface operations",
          "Programs tailored to production",
        ],
      },
      de: {
        name: "Industriereinigung",
        tagline: "Lösungen für Lager, Hallen und Werke",
        intro:
          "Industriereinigung für Lager, Fabriken und Produktionsstätten. Professionelle Maschinen, spezialisiertes Personal und strikte Einhaltung der Sicherheitsstandards.",
        included: [
          "Lager und Depots",
          "Fabriken und Werke",
          "Industrieanlagen",
          "Böden und Produktionsbereiche",
        ],
        benefits: [
          "Dedizierte Profimaschinen",
          "Sicherheitsgeschultes Personal",
          "Einsätze auf großen Flächen",
          "Auf die Produktion abgestimmte Programme",
        ],
      },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
