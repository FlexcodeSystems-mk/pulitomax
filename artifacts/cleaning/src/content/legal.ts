import type { Locale } from "@/lib/i18n";

export type LegalKind = "privacy" | "terms" | "cookies";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  metaDescription: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contactHeading: string;
  contactIntro: string;
}

export const LEGAL: Record<LegalKind, Record<Locale, LegalDoc>> = {
  privacy: {
    it: {
      title: "Informativa sulla Privacy",
      metaDescription:
        "Informativa sulla privacy di PulitoMax: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali ai sensi del GDPR.",
      updatedLabel: "Ultimo aggiornamento",
      updated: "14 giugno 2026",
      intro:
        "La presente informativa descrive come PulitoMax raccoglie, utilizza e protegge i dati personali degli utenti del sito e dei clienti, in conformità con il Regolamento (UE) 2016/679 (GDPR) e la normativa italiana applicabile.",
      sections: [
        {
          heading: "Titolare del trattamento",
          body: [
            "Il titolare del trattamento è BM SERVIZI DI AHMED EHAB (marchio PulitoMax), con sede legale in Viale Valganna 212, 21100 Varese (VA), Italia. P.IVA 04021430121 — REA VA-396046 — PEC ahmedehab@pec.it.",
            "Per qualsiasi richiesta relativa al trattamento dei tuoi dati puoi contattarci utilizzando i recapiti indicati in fondo a questa pagina.",
          ],
        },
        {
          heading: "Dati che raccogliamo",
          body: [
            "Dati di contatto forniti volontariamente tramite i moduli di richiesta preventivo, contatto e newsletter: nome, e-mail, numero di telefono, città e contenuto del messaggio.",
            "Dati di navigazione raccolti automaticamente, come indirizzo IP, tipo di browser e pagine visitate, tramite cookie e tecnologie simili.",
          ],
        },
        {
          heading: "Finalità e base giuridica",
          body: [
            "Rispondere alle richieste di preventivo e di contatto ed erogare i servizi richiesti (esecuzione di un contratto o di misure precontrattuali).",
            "Inviare comunicazioni commerciali e newsletter, previo consenso, revocabile in qualsiasi momento.",
            "Adempiere agli obblighi di legge, fiscali e contabili (obbligo legale).",
          ],
        },
        {
          heading: "Comunicazione dei dati",
          body: [
            "I dati possono essere trattati da personale autorizzato e da fornitori che svolgono attività per nostro conto (ad esempio servizi IT e di posta elettronica), nominati responsabili del trattamento.",
            "Non vendiamo i tuoi dati a terzi. I dati non sono diffusi né trasferiti al di fuori dello Spazio Economico Europeo senza adeguate garanzie.",
          ],
        },
        {
          heading: "Conservazione e sicurezza",
          body: [
            "Conserviamo i dati per il tempo necessario alle finalità per cui sono stati raccolti e nel rispetto degli obblighi di legge.",
            "Adottiamo misure tecniche e organizzative adeguate per proteggere i dati da accessi non autorizzati, perdita o uso improprio.",
          ],
        },
        {
          heading: "I tuoi diritti",
          body: [
            "Hai diritto di accedere, rettificare, cancellare e limitare il trattamento dei tuoi dati, nonché alla portabilità e all'opposizione al trattamento.",
            "Puoi revocare il consenso in qualsiasi momento e proporre reclamo all'Autorità Garante per la protezione dei dati personali.",
          ],
        },
      ],
      contactHeading: "Contatti",
      contactIntro:
        "Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy, contattaci ai seguenti recapiti:",
    },
    en: {
      title: "Privacy Policy",
      metaDescription:
        "PulitoMax privacy policy: how we collect, use and protect your personal data in accordance with the GDPR.",
      updatedLabel: "Last updated",
      updated: "June 14, 2026",
      intro:
        "This policy describes how PulitoMax collects, uses and protects the personal data of website users and customers, in compliance with Regulation (EU) 2016/679 (GDPR) and applicable Italian law.",
      sections: [
        {
          heading: "Data controller",
          body: [
            "The data controller is BM SERVIZI DI AHMED EHAB (PulitoMax brand), with registered office at Viale Valganna 212, 21100 Varese (VA), Italy. VAT 04021430121 — REA VA-396046 — PEC ahmedehab@pec.it.",
            "For any request regarding the processing of your data, you can contact us using the details at the bottom of this page.",
          ],
        },
        {
          heading: "Data we collect",
          body: [
            "Contact data provided voluntarily through our quote, contact and newsletter forms: name, email, phone number, city and message content.",
            "Browsing data collected automatically, such as IP address, browser type and pages visited, through cookies and similar technologies.",
          ],
        },
        {
          heading: "Purposes and legal basis",
          body: [
            "Responding to quote and contact requests and providing the requested services (performance of a contract or pre-contractual measures).",
            "Sending commercial communications and newsletters, subject to consent, which can be withdrawn at any time.",
            "Complying with legal, tax and accounting obligations (legal obligation).",
          ],
        },
        {
          heading: "Data sharing",
          body: [
            "Data may be processed by authorised staff and by suppliers acting on our behalf (for example IT and email services), appointed as data processors.",
            "We do not sell your data to third parties. Data is not disseminated nor transferred outside the European Economic Area without adequate safeguards.",
          ],
        },
        {
          heading: "Retention and security",
          body: [
            "We retain data for as long as necessary for the purposes for which it was collected and in compliance with legal obligations.",
            "We adopt appropriate technical and organisational measures to protect data from unauthorised access, loss or misuse.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You have the right to access, rectify, erase and restrict the processing of your data, as well as the right to data portability and to object to processing.",
            "You can withdraw consent at any time and lodge a complaint with the Italian Data Protection Authority.",
          ],
        },
      ],
      contactHeading: "Contact",
      contactIntro:
        "To exercise your rights or for any privacy question, contact us at:",
    },
    de: {
      title: "Datenschutzerklärung",
      metaDescription:
        "Datenschutzerklärung von PulitoMax: wie wir Ihre personenbezogenen Daten gemäß DSGVO erheben, verwenden und schützen.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "14. Juni 2026",
      intro:
        "Diese Erklärung beschreibt, wie PulitoMax die personenbezogenen Daten von Website-Nutzern und Kunden erhebt, verwendet und schützt – in Übereinstimmung mit der Verordnung (EU) 2016/679 (DSGVO) und dem geltenden italienischen Recht.",
      sections: [
        {
          heading: "Verantwortlicher",
          body: [
            "Verantwortlicher ist BM SERVIZI DI AHMED EHAB (Marke PulitoMax) mit Sitz in Viale Valganna 212, 21100 Varese (VA), Italien. USt-IdNr. 04021430121 — REA VA-396046 — PEC ahmedehab@pec.it.",
            "Für Anfragen zur Verarbeitung Ihrer Daten können Sie uns über die am Ende dieser Seite angegebenen Kontaktdaten erreichen.",
          ],
        },
        {
          heading: "Welche Daten wir erheben",
          body: [
            "Freiwillig über unsere Angebots-, Kontakt- und Newsletter-Formulare angegebene Kontaktdaten: Name, E-Mail, Telefonnummer, Stadt und Nachrichteninhalt.",
            "Automatisch erfasste Nutzungsdaten wie IP-Adresse, Browsertyp und besuchte Seiten über Cookies und ähnliche Technologien.",
          ],
        },
        {
          heading: "Zwecke und Rechtsgrundlage",
          body: [
            "Beantwortung von Angebots- und Kontaktanfragen sowie Erbringung der angeforderten Leistungen (Vertragserfüllung oder vorvertragliche Maßnahmen).",
            "Versand von Werbemitteilungen und Newslettern mit Ihrer Einwilligung, die jederzeit widerrufbar ist.",
            "Erfüllung gesetzlicher, steuerlicher und buchhalterischer Pflichten (rechtliche Verpflichtung).",
          ],
        },
        {
          heading: "Weitergabe der Daten",
          body: [
            "Die Daten können von autorisiertem Personal und von Dienstleistern verarbeitet werden, die in unserem Auftrag tätig sind (z. B. IT- und E-Mail-Dienste) und als Auftragsverarbeiter benannt sind.",
            "Wir verkaufen Ihre Daten nicht an Dritte. Die Daten werden nicht verbreitet und ohne angemessene Garantien nicht außerhalb des Europäischen Wirtschaftsraums übermittelt.",
          ],
        },
        {
          heading: "Speicherung und Sicherheit",
          body: [
            "Wir speichern Daten so lange, wie es für die Zwecke der Erhebung erforderlich ist und gesetzliche Pflichten es verlangen.",
            "Wir treffen geeignete technische und organisatorische Maßnahmen, um Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.",
          ],
        },
        {
          heading: "Ihre Rechte",
          body: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie auf Datenübertragbarkeit und Widerspruch gegen die Verarbeitung.",
            "Sie können Ihre Einwilligung jederzeit widerrufen und Beschwerde bei der italienischen Datenschutzbehörde einlegen.",
          ],
        },
      ],
      contactHeading: "Kontakt",
      contactIntro:
        "Um Ihre Rechte auszuüben oder bei Fragen zum Datenschutz kontaktieren Sie uns unter:",
    },
  },
  terms: {
    it: {
      title: "Termini e Condizioni",
      metaDescription:
        "Termini e condizioni di servizio di PulitoMax: prenotazioni, preventivi, prezzi, cancellazioni e responsabilità.",
      updatedLabel: "Ultimo aggiornamento",
      updated: "14 giugno 2026",
      intro:
        "I presenti termini e condizioni regolano l'utilizzo del sito e la fornitura dei servizi di pulizia di PulitoMax. Utilizzando il sito o richiedendo i nostri servizi accetti le condizioni di seguito riportate.",
      sections: [
        {
          heading: "Servizi offerti",
          body: [
            "PulitoMax fornisce servizi di pulizia professionale per abitazioni, condomini, uffici e attività commerciali in tutta Italia.",
            "Le descrizioni dei servizi presenti sul sito hanno finalità informativa; l'ambito esatto di ogni intervento viene definito nel preventivo concordato.",
          ],
        },
        {
          heading: "Preventivi e prenotazioni",
          body: [
            "I preventivi sono gratuiti e privi di impegno. Il servizio si intende confermato al momento dell'accettazione del preventivo da parte del cliente.",
            "Il cliente si impegna a fornire informazioni accurate sull'immobile e a garantire l'accesso ai locali nell'orario concordato.",
          ],
        },
        {
          heading: "Prezzi e pagamenti",
          body: [
            "I prezzi degli abbonamenti indicati sul sito sono espressi in euro e possono variare in base alle dimensioni e alle condizioni dell'immobile.",
            "Il pagamento avviene secondo le modalità indicate nel preventivo o nel contratto di abbonamento. Per le aziende emettiamo regolare fattura.",
          ],
        },
        {
          heading: "Cancellazioni e modifiche",
          body: [
            "Le richieste di modifica o cancellazione dell'appuntamento devono pervenire con almeno 24 ore di anticipo.",
            "Gli abbonamenti possono essere sospesi o disdetti secondo le condizioni del piano scelto.",
          ],
        },
        {
          heading: "Responsabilità e garanzie",
          body: [
            "Operiamo con personale assicurato e ci impegniamo a garantire elevati standard qualitativi. In caso di insoddisfazione offriamo una nuova pulizia gratuita delle aree interessate.",
            "PulitoMax non è responsabile per danni derivanti da informazioni inesatte fornite dal cliente o da difetti preesistenti dell'immobile.",
          ],
        },
        {
          heading: "Legge applicabile",
          body: [
            "I presenti termini sono regolati dalla legge italiana. Per ogni controversia è competente il foro del luogo di residenza o domicilio del consumatore.",
          ],
        },
      ],
      contactHeading: "Contatti",
      contactIntro:
        "Per qualsiasi domanda relativa ai presenti termini, contattaci ai seguenti recapiti:",
    },
    en: {
      title: "Terms and Conditions",
      metaDescription:
        "PulitoMax terms and conditions of service: bookings, quotes, pricing, cancellations and liability.",
      updatedLabel: "Last updated",
      updated: "June 14, 2026",
      intro:
        "These terms and conditions govern the use of the website and the provision of PulitoMax cleaning services. By using the website or requesting our services you accept the conditions set out below.",
      sections: [
        {
          heading: "Services offered",
          body: [
            "PulitoMax provides professional cleaning services for homes, residential buildings, offices and businesses throughout Italy.",
            "Service descriptions on the website are for information purposes; the exact scope of each job is defined in the agreed quote.",
          ],
        },
        {
          heading: "Quotes and bookings",
          body: [
            "Quotes are free and without obligation. The service is considered confirmed once the customer accepts the quote.",
            "The customer agrees to provide accurate information about the property and to ensure access to the premises at the agreed time.",
          ],
        },
        {
          heading: "Pricing and payments",
          body: [
            "Subscription prices shown on the website are expressed in euros and may vary depending on the size and condition of the property.",
            "Payment is made according to the terms set out in the quote or subscription agreement. For businesses we issue a regular invoice.",
          ],
        },
        {
          heading: "Cancellations and changes",
          body: [
            "Requests to change or cancel an appointment must be received at least 24 hours in advance.",
            "Subscriptions may be suspended or cancelled according to the conditions of the chosen plan.",
          ],
        },
        {
          heading: "Liability and guarantees",
          body: [
            "We work with insured staff and are committed to high quality standards. If you are not satisfied, we offer a free re-clean of the affected areas.",
            "PulitoMax is not liable for damage arising from inaccurate information provided by the customer or from pre-existing defects of the property.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by Italian law. Any dispute shall be subject to the jurisdiction of the consumer's place of residence or domicile.",
          ],
        },
      ],
      contactHeading: "Contact",
      contactIntro:
        "For any question regarding these terms, contact us at:",
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      metaDescription:
        "Allgemeine Geschäftsbedingungen von PulitoMax: Buchungen, Angebote, Preise, Stornierungen und Haftung.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "14. Juni 2026",
      intro:
        "Diese Geschäftsbedingungen regeln die Nutzung der Website und die Erbringung der Reinigungsleistungen von PulitoMax. Durch die Nutzung der Website oder die Anforderung unserer Leistungen akzeptieren Sie die nachstehenden Bedingungen.",
      sections: [
        {
          heading: "Angebotene Leistungen",
          body: [
            "PulitoMax bietet professionelle Reinigungsdienste für Wohnungen, Wohnanlagen, Büros und Unternehmen in ganz Italien an.",
            "Die Leistungsbeschreibungen auf der Website dienen der Information; der genaue Umfang jedes Einsatzes wird im vereinbarten Angebot festgelegt.",
          ],
        },
        {
          heading: "Angebote und Buchungen",
          body: [
            "Angebote sind kostenlos und unverbindlich. Die Leistung gilt als bestätigt, sobald der Kunde das Angebot annimmt.",
            "Der Kunde verpflichtet sich, korrekte Angaben zur Immobilie zu machen und den Zugang zu den Räumlichkeiten zum vereinbarten Zeitpunkt zu gewährleisten.",
          ],
        },
        {
          heading: "Preise und Zahlungen",
          body: [
            "Die auf der Website angegebenen Abo-Preise sind in Euro angegeben und können je nach Größe und Zustand der Immobilie variieren.",
            "Die Zahlung erfolgt gemäß den Bedingungen im Angebot oder im Abo-Vertrag. Für Unternehmen stellen wir eine ordnungsgemäße Rechnung aus.",
          ],
        },
        {
          heading: "Stornierungen und Änderungen",
          body: [
            "Anfragen zur Änderung oder Stornierung eines Termins müssen mindestens 24 Stunden im Voraus eingehen.",
            "Abonnements können gemäß den Bedingungen des gewählten Plans ausgesetzt oder gekündigt werden.",
          ],
        },
        {
          heading: "Haftung und Garantien",
          body: [
            "Wir arbeiten mit versichertem Personal und verpflichten uns zu hohen Qualitätsstandards. Bei Unzufriedenheit bieten wir eine kostenlose Nachreinigung der betroffenen Bereiche an.",
            "PulitoMax haftet nicht für Schäden, die durch ungenaue Angaben des Kunden oder durch bereits bestehende Mängel der Immobilie entstehen.",
          ],
        },
        {
          heading: "Anwendbares Recht",
          body: [
            "Diese Bedingungen unterliegen italienischem Recht. Für Streitigkeiten ist das Gericht am Wohn- oder Aufenthaltsort des Verbrauchers zuständig.",
          ],
        },
      ],
      contactHeading: "Kontakt",
      contactIntro:
        "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter:",
    },
  },
  cookies: {
    it: {
      title: "Cookie Policy",
      metaDescription:
        "Cookie policy di PulitoMax: quali cookie utilizziamo e come gestire le tue preferenze.",
      updatedLabel: "Ultimo aggiornamento",
      updated: "14 giugno 2026",
      intro:
        "Questa cookie policy spiega cosa sono i cookie, quali tipologie utilizziamo sul sito di PulitoMax e come puoi gestire le tue preferenze.",
      sections: [
        {
          heading: "Cosa sono i cookie",
          body: [
            "I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente per memorizzare informazioni e migliorare l'esperienza di navigazione.",
          ],
        },
        {
          heading: "Tipologie di cookie utilizzati",
          body: [
            "Cookie tecnici necessari: indispensabili per il corretto funzionamento del sito e per memorizzare le preferenze relative al consenso.",
            "Cookie analitici: ci aiutano a comprendere come viene utilizzato il sito in forma aggregata per migliorarne i contenuti.",
            "Cookie di marketing: utilizzati, previo consenso, per mostrare comunicazioni pertinenti.",
          ],
        },
        {
          heading: "Gestione delle preferenze",
          body: [
            "Al primo accesso puoi accettare o rifiutare i cookie non necessari tramite il banner dedicato.",
            "In qualsiasi momento puoi modificare le tue scelte dalle impostazioni del browser, eliminando o bloccando i cookie già installati.",
          ],
        },
        {
          heading: "Consenso",
          body: [
            "I cookie non necessari vengono installati solo dopo aver ottenuto il tuo consenso, in conformità con la normativa vigente.",
          ],
        },
      ],
      contactHeading: "Contatti",
      contactIntro:
        "Per qualsiasi domanda sui cookie, contattaci ai seguenti recapiti:",
    },
    en: {
      title: "Cookie Policy",
      metaDescription:
        "PulitoMax cookie policy: which cookies we use and how to manage your preferences.",
      updatedLabel: "Last updated",
      updated: "June 14, 2026",
      intro:
        "This cookie policy explains what cookies are, which types we use on the PulitoMax website and how you can manage your preferences.",
      sections: [
        {
          heading: "What are cookies",
          body: [
            "Cookies are small text files that websites save on the user's device to store information and improve the browsing experience.",
          ],
        },
        {
          heading: "Types of cookies we use",
          body: [
            "Necessary technical cookies: essential for the proper functioning of the site and to store consent preferences.",
            "Analytics cookies: help us understand how the site is used in aggregate form to improve its content.",
            "Marketing cookies: used, subject to consent, to show relevant communications.",
          ],
        },
        {
          heading: "Managing preferences",
          body: [
            "On your first visit you can accept or reject non-essential cookies through the dedicated banner.",
            "You can change your choices at any time from your browser settings, deleting or blocking cookies already installed.",
          ],
        },
        {
          heading: "Consent",
          body: [
            "Non-essential cookies are only installed after obtaining your consent, in compliance with applicable law.",
          ],
        },
      ],
      contactHeading: "Contact",
      contactIntro:
        "For any question about cookies, contact us at:",
    },
    de: {
      title: "Cookie-Richtlinie",
      metaDescription:
        "Cookie-Richtlinie von PulitoMax: welche Cookies wir verwenden und wie Sie Ihre Einstellungen verwalten.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "14. Juni 2026",
      intro:
        "Diese Cookie-Richtlinie erklärt, was Cookies sind, welche Arten wir auf der Website von PulitoMax verwenden und wie Sie Ihre Einstellungen verwalten können.",
      sections: [
        {
          heading: "Was sind Cookies",
          body: [
            "Cookies sind kleine Textdateien, die Websites auf dem Gerät des Nutzers speichern, um Informationen abzulegen und das Surferlebnis zu verbessern.",
          ],
        },
        {
          heading: "Von uns verwendete Cookie-Arten",
          body: [
            "Notwendige technische Cookies: unerlässlich für das ordnungsgemäße Funktionieren der Website und zum Speichern der Einwilligungseinstellungen.",
            "Analyse-Cookies: helfen uns zu verstehen, wie die Website in aggregierter Form genutzt wird, um die Inhalte zu verbessern.",
            "Marketing-Cookies: werden mit Ihrer Einwilligung verwendet, um relevante Mitteilungen anzuzeigen.",
          ],
        },
        {
          heading: "Verwaltung der Einstellungen",
          body: [
            "Bei Ihrem ersten Besuch können Sie nicht notwendige Cookies über das dafür vorgesehene Banner akzeptieren oder ablehnen.",
            "Sie können Ihre Auswahl jederzeit in den Browsereinstellungen ändern und bereits gesetzte Cookies löschen oder blockieren.",
          ],
        },
        {
          heading: "Einwilligung",
          body: [
            "Nicht notwendige Cookies werden erst nach Ihrer Einwilligung gesetzt, in Übereinstimmung mit den geltenden Vorschriften.",
          ],
        },
      ],
      contactHeading: "Kontakt",
      contactIntro:
        "Bei Fragen zu Cookies kontaktieren Sie uns unter:",
    },
  },
};
