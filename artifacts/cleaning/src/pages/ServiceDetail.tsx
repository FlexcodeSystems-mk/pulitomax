import { Link, useParams, Redirect } from "wouter";
import { Check, ArrowRight, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath, SITE } from "@/lib/site";
import { SERVICES, getService } from "@/content/services";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { ServiceIcon, SectionHeading } from "@/components/common";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";

export default function ServiceDetail() {
  const { t, locale } = useI18n();
  const params = useParams();
  const slug = params.slug ?? "";
  const service = getService(slug);

  if (!service) return <Redirect to={localePath(locale, "services")} />;

  const c = service.content[locale];
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.name,
    provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phoneDisplay },
    areaServed: "Italia",
    description: c.intro,
  };

  return (
    <>
      <Seo
        title={c.name}
        description={c.intro}
        path={localePath(locale, `services/${slug}`)}
        locale={locale}
        image={service.image}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container relative mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{c.name}</h1>
            <p className="mt-4 text-lg text-white/85">{c.tagline}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90">{c.intro}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-bold text-primary">{t("services.included")}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {c.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-xl border bg-card p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-bold text-primary">{t("services.benefitsTitle")}</h2>
              <ul className="mt-5 space-y-3">
                {c.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${SITE.phoneHref}`}>
                <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {t("nav.callNow")}
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <QuoteForm defaultService={slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-4 py-16">
        <div className="container mx-auto">
          <SectionHeading title={t("services.relatedTitle")} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={localePath(locale, `services/${s.slug}`)} className="group block">
                <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-shadow hover:shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary">{s.content[locale].name}</h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
