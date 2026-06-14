import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export interface Faq {
  content: L<{ q: string; a: string }>;
}

export const FAQS: Faq[] = [
  {
    content: {
      it: { q: "Quanto costa un servizio di pulizia?", a: "Il prezzo dipende dalla metratura, dal tipo di servizio e dalla frequenza. Forniamo sempre un preventivo gratuito e personalizzato entro 24 ore dalla richiesta." },
      en: { q: "How much does a cleaning service cost?", a: "The price depends on the size, type of service and frequency. We always provide a free, personalized quote within 24 hours of your request." },
      de: { q: "Was kostet eine Reinigung?", a: "Der Preis hängt von der Fläche, der Art der Leistung und der Häufigkeit ab. Wir erstellen immer ein kostenloses, persönliches Angebot innerhalb von 24 Stunden." },
    },
  },
  {
    content: {
      it: { q: "I prodotti e le attrezzature sono inclusi?", a: "Sì. Portiamo noi tutti i prodotti professionali e le attrezzature necessarie, salvo diverse indicazioni concordate con il cliente." },
      en: { q: "Are products and equipment included?", a: "Yes. We bring all the professional products and equipment needed, unless otherwise agreed with the client." },
      de: { q: "Sind Produkte und Ausrüstung inbegriffen?", a: "Ja. Wir bringen alle professionellen Produkte und Geräte mit, sofern nicht anders mit dem Kunden vereinbart." },
    },
  },
  {
    content: {
      it: { q: "Gli operatori sono assicurati?", a: "Tutti i nostri operatori sono formati, selezionati e coperti da assicurazione di responsabilità civile per la tua totale tranquillità." },
      en: { q: "Are the cleaners insured?", a: "All our operators are trained, vetted and covered by liability insurance for your complete peace of mind." },
      de: { q: "Ist das Personal versichert?", a: "Alle unsere Mitarbeiter sind geschult, geprüft und haftpflichtversichert – für Ihre vollständige Sicherheit." },
    },
  },
  {
    content: {
      it: { q: "Posso prenotare pulizie ricorrenti?", a: "Certo. Offriamo abbonamenti settimanali, bisettimanali e mensili con appuntamenti programmati e prezzi vantaggiosi." },
      en: { q: "Can I book recurring cleanings?", a: "Of course. We offer weekly, bi-weekly and monthly subscriptions with scheduled appointments and great rates." },
      de: { q: "Kann ich wiederkehrende Reinigungen buchen?", a: "Natürlich. Wir bieten wöchentliche, zweiwöchentliche und monatliche Abos mit festen Terminen und günstigen Preisen." },
    },
  },
  {
    content: {
      it: { q: "Come funzionano gli abbonamenti?", a: "Scegli la frequenza che preferisci, fissi un appuntamento ricorrente e ricevi il servizio in modo automatico. Puoi modificare o disdire quando vuoi." },
      en: { q: "How do subscriptions work?", a: "You choose your preferred frequency, set a recurring appointment and receive the service automatically. You can change or cancel anytime." },
      de: { q: "Wie funktionieren die Abos?", a: "Sie wählen Ihre bevorzugte Häufigkeit, vereinbaren einen wiederkehrenden Termin und erhalten den Service automatisch. Jederzeit änderbar oder kündbar." },
    },
  },
  {
    content: {
      it: { q: "Posso disdire o riprogrammare un appuntamento?", a: "Sì, basta avvisarci almeno 24 ore prima. Con i piani Standard e Premium la riprogrammazione è ancora più flessibile." },
      en: { q: "Can I cancel or reschedule an appointment?", a: "Yes, just let us know at least 24 hours in advance. With Standard and Premium plans rescheduling is even more flexible." },
      de: { q: "Kann ich einen Termin absagen oder verschieben?", a: "Ja, bitte mindestens 24 Stunden vorher Bescheid geben. Mit Standard- und Premium-Plänen ist die Umplanung noch flexibler." },
    },
  },
  {
    content: {
      it: { q: "Pulite gli uffici fuori dall'orario di lavoro?", a: "Sì. Per uffici e attività commerciali interveniamo anche la sera, di notte o nei weekend, per non interrompere il lavoro." },
      en: { q: "Do you clean offices outside working hours?", a: "Yes. For offices and businesses we also work in the evening, at night or on weekends so we don't disrupt your operations." },
      de: { q: "Reinigen Sie Büros außerhalb der Geschäftszeiten?", a: "Ja. Für Büros und Unternehmen arbeiten wir auch abends, nachts oder am Wochenende, um den Betrieb nicht zu stören." },
    },
  },
  {
    content: {
      it: { q: "Offrite la pulizia per affitti Airbnb?", a: "Sì, gestiamo il turnover completo tra un ospite e l'altro, incluso il cambio biancheria e il riassortimento dei kit di cortesia." },
      en: { q: "Do you offer Airbnb rental cleaning?", a: "Yes, we handle the full turnover between guests, including linen change and welcome kit restocking." },
      de: { q: "Bieten Sie Airbnb-Reinigung an?", a: "Ja, wir übernehmen den kompletten Wechsel zwischen Gästen, inklusive Wäschewechsel und Auffüllen der Willkommensartikel." },
    },
  },
  {
    content: {
      it: { q: "In quali città operate?", a: "Operiamo nelle principali città italiane, tra cui Milano, Roma, Torino, Bologna, Firenze e molte altre. Contattaci per verificare la tua zona." },
      en: { q: "Which cities do you serve?", a: "We operate in major Italian cities including Milan, Rome, Turin, Bologna, Florence and many more. Contact us to check your area." },
      de: { q: "In welchen Städten sind Sie tätig?", a: "Wir sind in den wichtigsten italienischen Städten tätig, darunter Mailand, Rom, Turin, Bologna, Florenz und viele mehr. Fragen Sie nach Ihrem Gebiet." },
    },
  },
  {
    content: {
      it: { q: "Come richiedo un preventivo?", a: "Compila il modulo sul sito, chiamaci o scrivici su WhatsApp. Ti risponderemo entro 24 ore con un preventivo gratuito." },
      en: { q: "How do I request a quote?", a: "Fill in the form on the site, call us or message us on WhatsApp. We'll reply within 24 hours with a free quote." },
      de: { q: "Wie fordere ich ein Angebot an?", a: "Füllen Sie das Formular aus, rufen Sie uns an oder schreiben Sie uns auf WhatsApp. Wir antworten innerhalb von 24 Stunden mit einem kostenlosen Angebot." },
    },
  },
  {
    content: {
      it: { q: "Devo essere presente durante la pulizia?", a: "Non è necessario. Molti clienti ci affidano le chiavi o un codice di accesso in totale sicurezza, grazie al nostro personale assicurato." },
      en: { q: "Do I need to be present during the cleaning?", a: "Not necessarily. Many clients give us keys or an access code in complete safety, thanks to our insured staff." },
      de: { q: "Muss ich während der Reinigung anwesend sein?", a: "Nicht unbedingt. Viele Kunden geben uns Schlüssel oder einen Zugangscode in voller Sicherheit, dank unseres versicherten Personals." },
    },
  },
  {
    content: {
      it: { q: "Quali metodi di pagamento accettate?", a: "Accettiamo bonifico, carta e i principali metodi di pagamento digitali. Per le aziende emettiamo regolare fattura." },
      en: { q: "What payment methods do you accept?", a: "We accept bank transfer, card and the main digital payment methods. For businesses we issue a proper invoice." },
      de: { q: "Welche Zahlungsmethoden akzeptieren Sie?", a: "Wir akzeptieren Überweisung, Karte und die wichtigsten digitalen Zahlungsmethoden. Für Unternehmen stellen wir eine ordentliche Rechnung aus." },
    },
  },
  {
    content: {
      it: { q: "Usate prodotti ecologici?", a: "Sì, privilegiamo detergenti certificati ed eco-friendly, sicuri per bambini, animali domestici e ambiente." },
      en: { q: "Do you use eco-friendly products?", a: "Yes, we prioritize certified, eco-friendly detergents that are safe for children, pets and the environment." },
      de: { q: "Verwenden Sie umweltfreundliche Produkte?", a: "Ja, wir setzen auf zertifizierte, umweltfreundliche Reinigungsmittel, die für Kinder, Haustiere und Umwelt sicher sind." },
    },
  },
  {
    content: {
      it: { q: "Cosa succede se non sono soddisfatto?", a: "La tua soddisfazione è garantita. Se qualcosa non va, torniamo gratuitamente a sistemare entro 48 ore." },
      en: { q: "What if I'm not satisfied?", a: "Your satisfaction is guaranteed. If something isn't right, we'll come back to fix it free of charge within 48 hours." },
      de: { q: "Was, wenn ich nicht zufrieden bin?", a: "Ihre Zufriedenheit ist garantiert. Falls etwas nicht stimmt, kommen wir innerhalb von 48 Stunden kostenlos zur Nachbesserung." },
    },
  },
  {
    content: {
      it: { q: "Fate pulizie post-ristrutturazione?", a: "Sì, siamo specializzati nella rimozione di polveri, residui di cantiere e nella pulizia di fondo dopo i lavori." },
      en: { q: "Do you do post-renovation cleaning?", a: "Yes, we specialize in removing dust, construction residue and in deep cleaning after building works." },
      de: { q: "Bieten Sie Reinigung nach Renovierungen an?", a: "Ja, wir sind auf die Entfernung von Staub und Bauresten sowie die Grundreinigung nach Arbeiten spezialisiert." },
    },
  },
  {
    content: {
      it: { q: "Con quale anticipo devo prenotare?", a: "Consigliamo qualche giorno di anticipo, ma facciamo il possibile per gestire anche richieste urgenti e last-minute." },
      en: { q: "How far in advance should I book?", a: "We recommend a few days' notice, but we do our best to handle urgent and last-minute requests too." },
      de: { q: "Wie früh sollte ich buchen?", a: "Wir empfehlen einige Tage Vorlauf, geben aber unser Bestes, auch dringende und kurzfristige Anfragen zu bedienen." },
    },
  },
  {
    content: {
      it: { q: "Posso avere sempre lo stesso operatore?", a: "Sì, con i piani in abbonamento cerchiamo di assegnarti sempre lo stesso operatore o team di fiducia." },
      en: { q: "Can I always have the same cleaner?", a: "Yes, with subscription plans we try to always assign you the same trusted operator or team." },
      de: { q: "Kann ich immer denselben Mitarbeiter haben?", a: "Ja, bei Abo-Plänen versuchen wir, Ihnen immer denselben vertrauten Mitarbeiter oder dasselbe Team zuzuweisen." },
    },
  },
  {
    content: {
      it: { q: "Pulite anche scale e parti comuni dei condomìni?", a: "Sì, offriamo programmi dedicati per amministratori, con interventi settimanali o mensili sulle parti comuni." },
      en: { q: "Do you also clean staircases and common areas?", a: "Yes, we offer dedicated programs for property managers, with weekly or monthly cleaning of common areas." },
      de: { q: "Reinigen Sie auch Treppenhäuser und Gemeinschaftsbereiche?", a: "Ja, wir bieten spezielle Programme für Hausverwaltungen mit wöchentlicher oder monatlicher Reinigung der Gemeinschaftsbereiche." },
    },
  },
  {
    content: {
      it: { q: "Trattate i miei dati nel rispetto del GDPR?", a: "Assolutamente sì. I dati che ci fornisci sono trattati in conformità al GDPR e usati solo per gestire la tua richiesta." },
      en: { q: "Do you handle my data in line with GDPR?", a: "Absolutely. The data you provide is processed in compliance with GDPR and used only to manage your request." },
      de: { q: "Verarbeiten Sie meine Daten DSGVO-konform?", a: "Absolut. Ihre Daten werden DSGVO-konform verarbeitet und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet." },
    },
  },
  {
    content: {
      it: { q: "Offrite pulizie una tantum?", a: "Sì, oltre agli abbonamenti puoi richiedere singoli interventi, ad esempio pulizie di primavera o prima di un evento." },
      en: { q: "Do you offer one-off cleanings?", a: "Yes, besides subscriptions you can request single cleanings, for example spring cleaning or before an event." },
      de: { q: "Bieten Sie einmalige Reinigungen an?", a: "Ja, neben Abos können Sie einzelne Einsätze anfragen, zum Beispiel Frühjahrsputz oder vor einer Veranstaltung." },
    },
  },
  {
    content: {
      it: { q: "Lavorate con aziende e partita IVA?", a: "Sì, collaboriamo con uffici, negozi, hotel e aziende, con contratti su misura e fatturazione regolare." },
      en: { q: "Do you work with businesses?", a: "Yes, we work with offices, shops, hotels and companies, with tailored contracts and proper invoicing." },
      de: { q: "Arbeiten Sie mit Unternehmen?", a: "Ja, wir arbeiten mit Büros, Geschäften, Hotels und Unternehmen mit maßgeschneiderten Verträgen und ordentlicher Rechnungsstellung." },
    },
  },
  {
    content: {
      it: { q: "Posso modificare il mio abbonamento?", a: "Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento, direttamente contattando il tuo referente." },
      en: { q: "Can I change my subscription?", a: "Yes, you can upgrade or downgrade your plan at any time, simply by contacting your account manager." },
      de: { q: "Kann ich mein Abo ändern?", a: "Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden, einfach über Ihren Ansprechpartner." },
    },
  },
];
