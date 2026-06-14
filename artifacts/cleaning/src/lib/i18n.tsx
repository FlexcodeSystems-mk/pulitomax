import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "it" | "en" | "de";
export const LOCALES: Locale[] = ["it", "en", "de"];
export const defaultLocale: Locale = "it";

export const LOCALE_LABELS: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
};

type Dict = Record<string, unknown>;

const it: Dict = {
  nav: {
    home: "Home",
    services: "Servizi",
    plans: "Abbonamenti",
    about: "Chi Siamo",
    reviews: "Recensioni",
    blog: "Blog",
    contact: "Contatti",
    quote: "Preventivo Gratuito",
    callNow: "Chiama Ora",
  },
  hero: {
    badge: "Impresa di pulizie professionale in tutta Italia",
    title: "Servizi di Pulizia Professionali in Tutta Italia",
    subtitle:
      "Soluzioni di pulizia affidabili, professionali ed economiche per case, appartamenti, uffici e immobili commerciali.",
    ctaQuote: "Richiedi Preventivo Gratuito",
    ctaCall: "Chiama Ora",
    trust1: "Personale assicurato",
    trust2: "Valutazione 4.9/5",
    trust3: "Attivi dal 2009",
  },
  stats: {
    clients: "Clienti soddisfatti",
    years: "Anni di esperienza",
    satisfaction: "Soddisfazione clienti",
    cities: "Città servite",
  },
  services: {
    title: "I Nostri Servizi",
    subtitle:
      "Soluzioni di pulizia su misura per ogni tipo di immobile, residenziale e commerciale.",
    explore: "Scopri il servizio",
    allServices: "Tutti i servizi",
    indexTitle: "Servizi di Pulizia Professionali",
    indexSubtitle:
      "Dalla pulizia di appartamenti agli ambienti industriali: un partner unico per ogni esigenza in tutta Italia.",
    included: "Cosa include",
    benefitsTitle: "Perché sceglierci per questo servizio",
    relatedTitle: "Altri servizi",
  },
  why: {
    title: "Perché Scegliere Pulizia Pro",
    subtitle:
      "Professionalità, affidabilità e attenzione ai dettagli in ogni intervento.",
    items: [
      {
        title: "Personale formato e assicurato",
        desc: "Operatori qualificati, selezionati e coperti da assicurazione di responsabilità civile.",
      },
      {
        title: "Prodotti eco-friendly",
        desc: "Utilizziamo detergenti certificati, sicuri per persone, animali e ambiente.",
      },
      {
        title: "Preventivi trasparenti",
        desc: "Prezzi chiari senza costi nascosti e sopralluogo gratuito su richiesta.",
      },
      {
        title: "Massima flessibilità",
        desc: "Interventi una tantum o programmati, anche fuori dall'orario di lavoro.",
      },
      {
        title: "Qualità garantita",
        desc: "Controlli qualità su ogni intervento e garanzia di rifacimento gratuito.",
      },
      {
        title: "Assistenza dedicata",
        desc: "Un referente sempre a tua disposizione via telefono, email e WhatsApp.",
      },
    ],
  },
  reviews: {
    title: "Cosa Dicono i Nostri Clienti",
    subtitle: "La fiducia di migliaia di clienti in tutta Italia.",
    rating: "su 5 basato su oltre 1.200 recensioni",
    pageTitle: "Recensioni dei Clienti",
    pageSubtitle:
      "Storie reali di clienti residenziali e aziendali che si affidano a noi ogni giorno.",
  },
  plans: {
    title: "Abbonamenti di Pulizia",
    subtitle:
      "Pulizia ricorrente senza pensieri. Scegli il piano più adatto a te e modifica quando vuoi.",
    teaserTitle: "Piani in Abbonamento",
    teaserSubtitle: "Risparmia con la pulizia programmata e ricorrente.",
    perMonth: "/mese",
    mostPopular: "Più scelto",
    annualNote: "Sconto del 15% con pagamento annuale",
    billing: "Fatturazione mensile · Disdici quando vuoi",
    choose: "Attiva il piano",
    featuresTitle: "Tutti i piani includono",
    features: [
      "Operatori assicurati e formati",
      "Prodotti professionali inclusi",
      "Gestione online dell'abbonamento",
      "Assistenza clienti dedicata",
    ],
  },
  areas: {
    title: "Aree di Servizio",
    subtitle:
      "Operiamo nelle principali città italiane. Non trovi la tua città? Contattaci.",
    cta: "Verifica la tua zona",
  },
  faq: {
    title: "Domande Frequenti",
    subtitle: "Le risposte alle domande più comuni dei nostri clienti.",
    pageTitle: "Domande Frequenti",
    pageSubtitle:
      "Tutto quello che devi sapere sui nostri servizi, abbonamenti e modalità di prenotazione.",
    more: "Hai altre domande?",
    moreCta: "Contattaci",
  },
  contact: {
    title: "Contattaci",
    subtitle:
      "Richiedi un preventivo gratuito o scrivici: ti rispondiamo entro 24 ore.",
    pageTitle: "Contatti e Preventivi",
    pageSubtitle:
      "Compila il modulo per ricevere un preventivo gratuito e personalizzato.",
    infoTitle: "Informazioni di contatto",
    phone: "Telefono",
    email: "Email",
    whatsapp: "WhatsApp",
    address: "Sede",
    hours: "Orari",
    hoursValue: "Lun–Sab: 8:00 – 20:00",
    mapTitle: "Dove operiamo",
  },
  form: {
    quoteTitle: "Richiedi un Preventivo Gratuito",
    name: "Nome e cognome",
    email: "Email",
    phone: "Telefono",
    city: "Città",
    service: "Servizio richiesto",
    servicePlaceholder: "Seleziona un servizio",
    propertyType: "Tipo di immobile",
    message: "Messaggio",
    messagePlaceholder: "Raccontaci di cosa hai bisogno…",
    submit: "Invia richiesta",
    submitting: "Invio in corso…",
    successTitle: "Richiesta inviata!",
    successMsg:
      "Grazie. Il nostro team ti contatterà entro 24 ore con un preventivo personalizzato.",
    another: "Invia un'altra richiesta",
    errName: "Inserisci il tuo nome",
    errEmail: "Inserisci un'email valida",
    errPhone: "Inserisci un numero di telefono valido",
    errService: "Seleziona un servizio",
    errMessage: "Scrivi un breve messaggio",
    privacy:
      "Inviando il modulo accetti il trattamento dei dati secondo la nostra Privacy Policy (GDPR).",
  },
  newsletter: {
    title: "Iscriviti alla Newsletter",
    desc: "Consigli di pulizia, offerte esclusive e novità. Niente spam.",
    placeholder: "La tua email",
    subscribe: "Iscriviti",
    success: "Iscrizione completata. Grazie!",
  },
  cookie: {
    text: "Utilizziamo i cookie per migliorare la tua esperienza, analizzare il traffico e personalizzare i contenuti.",
    accept: "Accetta",
    decline: "Rifiuta",
    learn: "Scopri di più",
  },
  exit: {
    title: "Aspetta! Preventivo gratuito",
    desc: "Ricevi una stima gratuita e senza impegno per la tua pulizia. Risposta entro 24 ore.",
    placeholder: "La tua email",
    cta: "Ricevi il preventivo",
    dismiss: "No grazie",
    success: "Perfetto! Ti contatteremo a breve.",
  },
  footer: {
    tagline:
      "Servizi di pulizia professionali per case, condomini, uffici e attività in tutta Italia.",
    servicesTitle: "Servizi",
    companyTitle: "Azienda",
    contactTitle: "Contatti",
    rights: "Tutti i diritti riservati.",
    privacy: "Privacy Policy",
    terms: "Termini e Condizioni",
    cookies: "Cookie Policy",
  },
  cta: {
    bannerTitle: "Pronto per una casa o un ufficio splendente?",
    bannerSubtitle:
      "Richiedi oggi il tuo preventivo gratuito. Nessun impegno, risposta entro 24 ore.",
    bannerBtn: "Richiedi Preventivo Gratuito",
  },
  blog: {
    title: "Blog",
    subtitle:
      "Consigli, guide e approfondimenti dal mondo della pulizia professionale.",
    readMore: "Leggi l'articolo",
    readTime: "min di lettura",
    categories: "Categorie",
    all: "Tutti",
    related: "Articoli correlati",
    faqTitle: "Domande frequenti",
    backToBlog: "Torna al blog",
    by: "di",
  },
  about: {
    title: "Chi Siamo",
    subtitle:
      "Da oltre 15 anni rendiamo splendenti case e aziende in tutta Italia.",
    storyTitle: "La nostra storia",
    story:
      "Pulizia Pro nasce nel 2009 a Milano con un'idea semplice: offrire un servizio di pulizia professionale, affidabile e trasparente. Da una piccola squadra siamo cresciuti fino a diventare un partner di fiducia per migliaia di famiglie, amministratori di condominio e aziende in tutta Italia, mantenendo sempre la stessa cura artigianale per ogni dettaglio.",
    missionTitle: "La nostra missione",
    mission:
      "Garantire ambienti più sani, sicuri e accoglienti, semplificando la vita dei nostri clienti con un servizio impeccabile e sostenibile.",
    teamTitle: "Il nostro team",
    team:
      "Operatori formati, selezionati e assicurati, guidati da responsabili di zona che assicurano qualità costante in ogni intervento.",
    valuesTitle: "I nostri valori",
    values: [
      { title: "Affidabilità", desc: "Puntualità e costanza in ogni intervento." },
      { title: "Qualità", desc: "Standard elevati e controlli su ogni servizio." },
      { title: "Sostenibilità", desc: "Prodotti eco-certificati e processi responsabili." },
      { title: "Trasparenza", desc: "Prezzi chiari, nessun costo nascosto." },
    ],
    certsTitle: "Certificazioni e garanzie",
    certs: [
      "Assicurazione di responsabilità civile",
      "Personale formato e certificato",
      "Conformità GDPR",
      "Prodotti eco-certificati Ecolabel",
    ],
  },
  notFound: {
    title: "Pagina non trovata",
    desc: "La pagina che cerchi non esiste o è stata spostata.",
    home: "Torna alla home",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    plans: "Plans",
    about: "About Us",
    reviews: "Reviews",
    blog: "Blog",
    contact: "Contact",
    quote: "Free Quote",
    callNow: "Call Now",
  },
  hero: {
    badge: "Professional cleaning company across Italy",
    title: "Professional Cleaning Services Throughout Italy",
    subtitle:
      "Reliable, professional and affordable cleaning solutions for homes, apartments, offices and commercial properties.",
    ctaQuote: "Request Free Quote",
    ctaCall: "Call Now",
    trust1: "Insured staff",
    trust2: "Rated 4.9/5",
    trust3: "Trusted since 2009",
  },
  stats: {
    clients: "Happy clients",
    years: "Years of experience",
    satisfaction: "Customer satisfaction",
    cities: "Cities served",
  },
  services: {
    title: "Our Services",
    subtitle:
      "Tailored cleaning solutions for every type of property, residential and commercial.",
    explore: "Explore service",
    allServices: "All services",
    indexTitle: "Professional Cleaning Services",
    indexSubtitle:
      "From apartment cleaning to industrial facilities — one partner for every need across Italy.",
    included: "What's included",
    benefitsTitle: "Why choose us for this service",
    relatedTitle: "Other services",
  },
  why: {
    title: "Why Choose Pulizia Pro",
    subtitle:
      "Professionalism, reliability and attention to detail in every job.",
    items: [
      {
        title: "Trained & insured staff",
        desc: "Qualified, vetted operators covered by full liability insurance.",
      },
      {
        title: "Eco-friendly products",
        desc: "We use certified detergents that are safe for people, pets and the planet.",
      },
      {
        title: "Transparent quotes",
        desc: "Clear pricing with no hidden costs and a free on-site assessment on request.",
      },
      {
        title: "Maximum flexibility",
        desc: "One-off or scheduled cleaning, including outside working hours.",
      },
      {
        title: "Guaranteed quality",
        desc: "Quality checks on every job and a free re-clean guarantee.",
      },
      {
        title: "Dedicated support",
        desc: "A point of contact always available by phone, email and WhatsApp.",
      },
    ],
  },
  reviews: {
    title: "What Our Clients Say",
    subtitle: "Trusted by thousands of clients across Italy.",
    rating: "out of 5 based on 1,200+ reviews",
    pageTitle: "Customer Reviews",
    pageSubtitle:
      "Real stories from residential and business clients who rely on us every day.",
  },
  plans: {
    title: "Cleaning Subscriptions",
    subtitle:
      "Recurring cleaning without the hassle. Choose the plan that fits you and change it anytime.",
    teaserTitle: "Subscription Plans",
    teaserSubtitle: "Save with scheduled, recurring cleaning.",
    perMonth: "/month",
    mostPopular: "Most popular",
    annualNote: "Save 15% with annual billing",
    billing: "Monthly billing · Cancel anytime",
    choose: "Get this plan",
    featuresTitle: "All plans include",
    features: [
      "Insured and trained operators",
      "Professional supplies included",
      "Online subscription management",
      "Dedicated customer support",
    ],
  },
  areas: {
    title: "Service Areas",
    subtitle:
      "We operate in major Italian cities. Don't see your city? Get in touch.",
    cta: "Check your area",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to the questions our clients ask most.",
    pageTitle: "Frequently Asked Questions",
    pageSubtitle:
      "Everything you need to know about our services, subscriptions and booking process.",
    more: "Still have questions?",
    moreCta: "Contact us",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Request a free quote or send us a message — we reply within 24 hours.",
    pageTitle: "Contact & Quotes",
    pageSubtitle:
      "Fill in the form to receive a free, personalized quote.",
    infoTitle: "Contact information",
    phone: "Phone",
    email: "Email",
    whatsapp: "WhatsApp",
    address: "Office",
    hours: "Hours",
    hoursValue: "Mon–Sat: 8:00 – 20:00",
    mapTitle: "Where we operate",
  },
  form: {
    quoteTitle: "Request a Free Quote",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    city: "City",
    service: "Requested service",
    servicePlaceholder: "Select a service",
    propertyType: "Property type",
    message: "Message",
    messagePlaceholder: "Tell us what you need…",
    submit: "Send request",
    submitting: "Sending…",
    successTitle: "Request sent!",
    successMsg:
      "Thank you. Our team will contact you within 24 hours with a personalized quote.",
    another: "Send another request",
    errName: "Please enter your name",
    errEmail: "Please enter a valid email",
    errPhone: "Please enter a valid phone number",
    errService: "Please select a service",
    errMessage: "Please write a short message",
    privacy:
      "By submitting this form you accept the processing of your data under our Privacy Policy (GDPR).",
  },
  newsletter: {
    title: "Subscribe to our Newsletter",
    desc: "Cleaning tips, exclusive offers and news. No spam.",
    placeholder: "Your email",
    subscribe: "Subscribe",
    success: "Subscribed. Thank you!",
  },
  cookie: {
    text: "We use cookies to improve your experience, analyze traffic and personalize content.",
    accept: "Accept",
    decline: "Decline",
    learn: "Learn more",
  },
  exit: {
    title: "Wait! Free quote",
    desc: "Get a free, no-obligation estimate for your cleaning. Reply within 24 hours.",
    placeholder: "Your email",
    cta: "Get my quote",
    dismiss: "No thanks",
    success: "Great! We'll be in touch shortly.",
  },
  footer: {
    tagline:
      "Professional cleaning services for homes, condominiums, offices and businesses across Italy.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookies: "Cookie Policy",
  },
  cta: {
    bannerTitle: "Ready for a spotless home or office?",
    bannerSubtitle:
      "Request your free quote today. No commitment, reply within 24 hours.",
    bannerBtn: "Request Free Quote",
  },
  blog: {
    title: "Blog",
    subtitle:
      "Tips, guides and insights from the world of professional cleaning.",
    readMore: "Read article",
    readTime: "min read",
    categories: "Categories",
    all: "All",
    related: "Related articles",
    faqTitle: "Frequently asked questions",
    backToBlog: "Back to blog",
    by: "by",
  },
  about: {
    title: "About Us",
    subtitle:
      "For over 15 years we've kept homes and businesses spotless across Italy.",
    storyTitle: "Our story",
    story:
      "Pulizia Pro was founded in 2009 in Milan with a simple idea: deliver professional, reliable and transparent cleaning. From a small crew we've grown into a trusted partner for thousands of families, property managers and businesses across Italy — always keeping the same craftsman's care for every detail.",
    missionTitle: "Our mission",
    mission:
      "To create healthier, safer and more welcoming spaces, making our clients' lives easier with impeccable, sustainable service.",
    teamTitle: "Our team",
    team:
      "Trained, vetted and insured operators, led by area managers who ensure consistent quality on every job.",
    valuesTitle: "Our values",
    values: [
      { title: "Reliability", desc: "Punctual and consistent on every job." },
      { title: "Quality", desc: "High standards and checks on every service." },
      { title: "Sustainability", desc: "Eco-certified products and responsible processes." },
      { title: "Transparency", desc: "Clear pricing, no hidden costs." },
    ],
    certsTitle: "Certifications & guarantees",
    certs: [
      "Full liability insurance",
      "Trained and certified staff",
      "GDPR compliance",
      "Ecolabel eco-certified products",
    ],
  },
  notFound: {
    title: "Page not found",
    desc: "The page you're looking for doesn't exist or has been moved.",
    home: "Back to home",
  },
};

const de: Dict = {
  nav: {
    home: "Startseite",
    services: "Leistungen",
    plans: "Abos",
    about: "Über uns",
    reviews: "Bewertungen",
    blog: "Blog",
    contact: "Kontakt",
    quote: "Kostenloses Angebot",
    callNow: "Jetzt anrufen",
  },
  hero: {
    badge: "Professionelles Reinigungsunternehmen in ganz Italien",
    title: "Professionelle Reinigungsdienste in ganz Italien",
    subtitle:
      "Zuverlässige, professionelle und erschwingliche Reinigungslösungen für Häuser, Wohnungen, Büros und Gewerbeimmobilien.",
    ctaQuote: "Kostenloses Angebot anfordern",
    ctaCall: "Jetzt anrufen",
    trust1: "Versichertes Personal",
    trust2: "Bewertung 4,9/5",
    trust3: "Vertrauen seit 2009",
  },
  stats: {
    clients: "Zufriedene Kunden",
    years: "Jahre Erfahrung",
    satisfaction: "Kundenzufriedenheit",
    cities: "Städte betreut",
  },
  services: {
    title: "Unsere Leistungen",
    subtitle:
      "Maßgeschneiderte Reinigungslösungen für jede Art von Immobilie, privat und gewerblich.",
    explore: "Leistung ansehen",
    allServices: "Alle Leistungen",
    indexTitle: "Professionelle Reinigungsdienste",
    indexSubtitle:
      "Von der Wohnungsreinigung bis zu Industrieanlagen – ein Partner für jeden Bedarf in ganz Italien.",
    included: "Im Leistungsumfang",
    benefitsTitle: "Warum Sie uns wählen sollten",
    relatedTitle: "Weitere Leistungen",
  },
  why: {
    title: "Warum Pulizia Pro",
    subtitle:
      "Professionalität, Zuverlässigkeit und Liebe zum Detail bei jedem Einsatz.",
    items: [
      {
        title: "Geschultes & versichertes Personal",
        desc: "Qualifizierte, geprüfte Mitarbeiter mit voller Haftpflichtversicherung.",
      },
      {
        title: "Umweltfreundliche Produkte",
        desc: "Wir verwenden zertifizierte Reinigungsmittel – sicher für Mensch, Tier und Umwelt.",
      },
      {
        title: "Transparente Angebote",
        desc: "Klare Preise ohne versteckte Kosten und kostenlose Besichtigung auf Anfrage.",
      },
      {
        title: "Maximale Flexibilität",
        desc: "Einmalige oder geplante Reinigung, auch außerhalb der Geschäftszeiten.",
      },
      {
        title: "Garantierte Qualität",
        desc: "Qualitätskontrollen bei jedem Einsatz und kostenlose Nachreinigung.",
      },
      {
        title: "Persönliche Betreuung",
        desc: "Ein Ansprechpartner immer per Telefon, E-Mail und WhatsApp erreichbar.",
      },
    ],
  },
  reviews: {
    title: "Was unsere Kunden sagen",
    subtitle: "Tausende Kunden in ganz Italien vertrauen uns.",
    rating: "von 5 basierend auf über 1.200 Bewertungen",
    pageTitle: "Kundenbewertungen",
    pageSubtitle:
      "Echte Geschichten von Privat- und Geschäftskunden, die sich täglich auf uns verlassen.",
  },
  plans: {
    title: "Reinigungs-Abos",
    subtitle:
      "Wiederkehrende Reinigung ohne Aufwand. Wählen Sie Ihren Plan und ändern Sie ihn jederzeit.",
    teaserTitle: "Abo-Pläne",
    teaserSubtitle: "Sparen Sie mit geplanter, wiederkehrender Reinigung.",
    perMonth: "/Monat",
    mostPopular: "Beliebteste",
    annualNote: "15% Rabatt bei jährlicher Zahlung",
    billing: "Monatliche Abrechnung · Jederzeit kündbar",
    choose: "Plan wählen",
    featuresTitle: "Alle Pläne beinhalten",
    features: [
      "Versicherte und geschulte Mitarbeiter",
      "Professionelle Materialien inklusive",
      "Online-Verwaltung des Abos",
      "Persönlicher Kundenservice",
    ],
  },
  areas: {
    title: "Einsatzgebiete",
    subtitle:
      "Wir sind in den wichtigsten italienischen Städten tätig. Ihre Stadt fehlt? Kontaktieren Sie uns.",
    cta: "Gebiet prüfen",
  },
  faq: {
    title: "Häufige Fragen",
    subtitle: "Antworten auf die häufigsten Fragen unserer Kunden.",
    pageTitle: "Häufige Fragen",
    pageSubtitle:
      "Alles Wissenswerte über unsere Leistungen, Abos und die Buchung.",
    more: "Noch Fragen?",
    moreCta: "Kontaktieren Sie uns",
  },
  contact: {
    title: "Kontakt",
    subtitle:
      "Fordern Sie ein kostenloses Angebot an oder schreiben Sie uns – Antwort innerhalb von 24 Stunden.",
    pageTitle: "Kontakt & Angebote",
    pageSubtitle:
      "Füllen Sie das Formular aus, um ein kostenloses, persönliches Angebot zu erhalten.",
    infoTitle: "Kontaktinformationen",
    phone: "Telefon",
    email: "E-Mail",
    whatsapp: "WhatsApp",
    address: "Standort",
    hours: "Öffnungszeiten",
    hoursValue: "Mo–Sa: 8:00 – 20:00",
    mapTitle: "Wo wir tätig sind",
  },
  form: {
    quoteTitle: "Kostenloses Angebot anfordern",
    name: "Vor- und Nachname",
    email: "E-Mail",
    phone: "Telefon",
    city: "Stadt",
    service: "Gewünschte Leistung",
    servicePlaceholder: "Leistung auswählen",
    propertyType: "Immobilientyp",
    message: "Nachricht",
    messagePlaceholder: "Sagen Sie uns, was Sie brauchen…",
    submit: "Anfrage senden",
    submitting: "Wird gesendet…",
    successTitle: "Anfrage gesendet!",
    successMsg:
      "Vielen Dank. Unser Team meldet sich innerhalb von 24 Stunden mit einem persönlichen Angebot.",
    another: "Weitere Anfrage senden",
    errName: "Bitte geben Sie Ihren Namen ein",
    errEmail: "Bitte geben Sie eine gültige E-Mail ein",
    errPhone: "Bitte geben Sie eine gültige Telefonnummer ein",
    errService: "Bitte wählen Sie eine Leistung",
    errMessage: "Bitte schreiben Sie eine kurze Nachricht",
    privacy:
      "Mit dem Absenden akzeptieren Sie die Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung (DSGVO).",
  },
  newsletter: {
    title: "Newsletter abonnieren",
    desc: "Reinigungstipps, exklusive Angebote und Neuigkeiten. Kein Spam.",
    placeholder: "Ihre E-Mail",
    subscribe: "Abonnieren",
    success: "Abonniert. Vielen Dank!",
  },
  cookie: {
    text: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern, den Verkehr zu analysieren und Inhalte zu personalisieren.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    learn: "Mehr erfahren",
  },
  exit: {
    title: "Warten Sie! Kostenloses Angebot",
    desc: "Erhalten Sie eine kostenlose, unverbindliche Schätzung für Ihre Reinigung. Antwort innerhalb von 24 Stunden.",
    placeholder: "Ihre E-Mail",
    cta: "Angebot erhalten",
    dismiss: "Nein danke",
    success: "Super! Wir melden uns in Kürze.",
  },
  footer: {
    tagline:
      "Professionelle Reinigungsdienste für Häuser, Eigentümergemeinschaften, Büros und Unternehmen in ganz Italien.",
    servicesTitle: "Leistungen",
    companyTitle: "Unternehmen",
    contactTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    terms: "AGB",
    cookies: "Cookie-Richtlinie",
  },
  cta: {
    bannerTitle: "Bereit für ein makelloses Zuhause oder Büro?",
    bannerSubtitle:
      "Fordern Sie noch heute Ihr kostenloses Angebot an. Unverbindlich, Antwort innerhalb von 24 Stunden.",
    bannerBtn: "Kostenloses Angebot anfordern",
  },
  blog: {
    title: "Blog",
    subtitle:
      "Tipps, Anleitungen und Einblicke aus der Welt der professionellen Reinigung.",
    readMore: "Artikel lesen",
    readTime: "Min. Lesezeit",
    categories: "Kategorien",
    all: "Alle",
    related: "Ähnliche Artikel",
    faqTitle: "Häufige Fragen",
    backToBlog: "Zurück zum Blog",
    by: "von",
  },
  about: {
    title: "Über uns",
    subtitle:
      "Seit über 15 Jahren halten wir Häuser und Unternehmen in ganz Italien makellos sauber.",
    storyTitle: "Unsere Geschichte",
    story:
      "Pulizia Pro wurde 2009 in Mailand mit einer einfachen Idee gegründet: professionelle, zuverlässige und transparente Reinigung. Aus einem kleinen Team sind wir zu einem vertrauenswürdigen Partner für tausende Familien, Hausverwaltungen und Unternehmen in ganz Italien geworden – stets mit derselben handwerklichen Sorgfalt für jedes Detail.",
    missionTitle: "Unsere Mission",
    mission:
      "Gesündere, sicherere und einladendere Räume schaffen und unseren Kunden mit makellosem, nachhaltigem Service das Leben erleichtern.",
    teamTitle: "Unser Team",
    team:
      "Geschulte, geprüfte und versicherte Mitarbeiter unter der Leitung von Gebietsleitern, die gleichbleibende Qualität sicherstellen.",
    valuesTitle: "Unsere Werte",
    values: [
      { title: "Zuverlässigkeit", desc: "Pünktlich und konsequent bei jedem Einsatz." },
      { title: "Qualität", desc: "Hohe Standards und Kontrollen bei jedem Service." },
      { title: "Nachhaltigkeit", desc: "Öko-zertifizierte Produkte und verantwortungsvolle Prozesse." },
      { title: "Transparenz", desc: "Klare Preise, keine versteckten Kosten." },
    ],
    certsTitle: "Zertifizierungen & Garantien",
    certs: [
      "Volle Haftpflichtversicherung",
      "Geschultes und zertifiziertes Personal",
      "DSGVO-Konformität",
      "Ecolabel öko-zertifizierte Produkte",
    ],
  },
  notFound: {
    title: "Seite nicht gefunden",
    desc: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    home: "Zurück zur Startseite",
  },
};

const DICTS: Record<Locale, Dict> = { it, en, de };

function resolve(dict: Dict, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Dict)) {
      return (acc as Dict)[key];
    }
    return undefined;
  }, dict);
}

interface I18nContextType {
  locale: Locale;
  t: (key: string) => string;
  tr: <T = unknown>(key: string) => T;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string): string => {
    const val = resolve(DICTS[locale], key);
    if (typeof val === "string") return val;
    const fallback = resolve(DICTS[defaultLocale], key);
    return typeof fallback === "string" ? fallback : key;
  };

  const tr = <T,>(key: string): T => {
    const val = resolve(DICTS[locale], key);
    if (val !== undefined) return val as T;
    return resolve(DICTS[defaultLocale], key) as T;
  };

  return (
    <I18nContext.Provider value={{ locale, t, tr, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
