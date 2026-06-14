import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath, SITE, whatsappLink, SERVICE_AREAS } from "@/lib/site";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/common";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";

export default function Contact() {
  const { t, locale } = useI18n();

  const items = [
    { icon: Phone, label: t("contact.phone"), value: SITE.phoneDisplay, href: `tel:${SITE.phoneHref}` },
    { icon: MessageCircle, label: t("contact.whatsapp"), value: SITE.whatsappDisplay, href: whatsappLink() },
    { icon: Mail, label: t("contact.email"), value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: t("contact.address"), value: `${SITE.addressStreet}, ${SITE.addressCity}` },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <>
      <Seo
        title={t("contact.pageTitle")}
        description={t("contact.pageSubtitle")}
        path={localePath(locale, "contact")}
        locale={locale}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.contact")}
            title={t("contact.pageTitle")}
            subtitle={t("contact.pageSubtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-primary">{t("contact.infoTitle")}</h2>
              <ul className="mt-6 space-y-4">
                {items.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  );
                  return (
                    <li key={i}>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block rounded-xl p-2 hover-elevate" data-testid={`contact-${item.label}`}>
                          {content}
                        </a>
                      ) : (
                        <div className="p-2">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-2xl border bg-card p-6">
                <h3 className="font-semibold text-primary">{t("contact.mapTitle")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((city) => (
                    <span key={city} className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground/70">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
