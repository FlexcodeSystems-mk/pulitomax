import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { Seo } from "@/components/Seo";
import { SectionHeading, ServiceIcon, CtaBanner } from "@/components/common";
import { Stagger, StaggerItem } from "@/components/Reveal";

export default function Services() {
  const { t, locale } = useI18n();
  return (
    <>
      <Seo
        title={t("services.indexTitle")}
        description={t("services.indexSubtitle")}
        path={localePath(locale, "services")}
        locale={locale}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.services")}
            title={t("services.indexTitle")}
            subtitle={t("services.indexSubtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={localePath(locale, `services/${s.slug}`)} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg" data-testid={`card-service-${s.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.content[locale].name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow">
                        <ServiceIcon name={s.icon} className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold text-primary">{s.content[locale].name}</h3>
                      <p className="mt-2 text-sm font-medium text-secondary">{s.content[locale].tagline}</p>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground line-clamp-3">{s.content[locale].intro}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        {t("services.explore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
