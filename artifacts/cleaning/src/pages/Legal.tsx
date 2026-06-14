import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, localePath } from "@/lib/site";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/common";
import { Reveal } from "@/components/Reveal";
import { LEGAL, type LegalKind } from "@/content/legal";

function LegalDocPage({ kind, slug }: { kind: LegalKind; slug: string }) {
  const { locale } = useI18n();
  const doc = LEGAL[kind][locale];

  return (
    <>
      <Seo
        title={doc.title}
        description={doc.metaDescription}
        path={localePath(locale, slug)}
        locale={locale}
        type="article"
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading title={doc.title} subtitle={doc.intro} />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {doc.updatedLabel}: {doc.updated}
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-10">
            {doc.sections.map((section, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <h2 className="text-xl font-bold text-primary">{section.heading}</h2>
                {section.body.map((paragraph, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}

            <Reveal delay={doc.sections.length * 0.04}>
              <div className="rounded-2xl border bg-card p-6">
                <h2 className="text-xl font-bold text-primary">{doc.contactHeading}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{doc.contactIntro}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-secondary" />
                    <a href={`mailto:${SITE.email}`} className="hover:text-secondary">{SITE.email}</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-secondary" />
                    <a href={`tel:${SITE.phoneHref}`} className="hover:text-secondary">{SITE.phoneDisplay}</a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>
                      {SITE.addressStreet}, {SITE.addressCity}, {SITE.addressCountry} — {SITE.vat}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return <LegalDocPage kind="privacy" slug="privacy" />;
}

export function TermsOfService() {
  return <LegalDocPage kind="terms" slug="terms" />;
}

export function CookiePolicy() {
  return <LegalDocPage kind="cookies" slug="cookies" />;
}
