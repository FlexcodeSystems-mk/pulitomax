import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  CalendarCheck,
  ArrowRight,
  Phone,
  Check,
  MapPin,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath, SITE, SERVICE_AREAS } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { PLANS } from "@/content/plans";
import { REVIEWS } from "@/content/reviews";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import {
  SectionHeading,
  ServiceIcon,
  StarRating,
  CtaBanner,
} from "@/components/common";
import { PlanCard } from "@/pages/Plans";
import heroImg from "@assets/generated_images/hero.png";

const STATS = [
  { value: "5.000+", key: "stats.clients" },
  { value: "15+", key: "stats.years" },
  { value: "98%", key: "stats.satisfaction" },
  { value: "12+", key: "stats.cities" },
] as const;

export default function Home() {
  const { t, tr, locale } = useI18n();
  const whyItems = tr<{ title: string; desc: string }[]>("why.items");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: heroImg,
    "@id": SITE.email,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressStreet,
      addressLocality: "Milano",
      addressCountry: "IT",
    },
    areaServed: SERVICE_AREAS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
  };

  return (
    <>
      <Seo
        title={t("hero.title")}
        description={t("hero.subtitle")}
        path={localePath(locale)}
        locale={locale}
        image={heroImg}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>
        <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4 text-secondary" />
              {t("hero.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/85"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href={localePath(locale, "contact")}>
                <Button size="lg" variant="secondary" className="w-full gap-2 sm:w-auto" data-testid="button-hero-quote">
                  {t("hero.ctaQuote")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={`tel:${SITE.phoneHref}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  data-testid="button-hero-call"
                >
                  <Phone className="h-4 w-4" />
                  {t("hero.ctaCall")}
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-secondary" /> {t("hero.trust1")}
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-secondary" /> {t("hero.trust2")}
              </span>
              <span className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 text-secondary" /> {t("hero.trust3")}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t(s.key)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.services")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={localePath(locale, `services/${s.slug}`)} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg" data-testid={`card-service-${s.slug}`}>
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.content[locale].name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow">
                        <ServiceIcon name={s.icon} className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold text-primary">{s.content[locale].name}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.content[locale].tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        {t("services.explore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/40 px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading title={t("why.title")} subtitle={t("why.subtitle")} />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full gap-4 rounded-2xl border bg-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("plans.teaserTitle")}
            title={t("plans.title")}
            subtitle={t("plans.teaserSubtitle")}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={localePath(locale, "plans")}>
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-all-plans">
                {t("plans.featuresTitle")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-muted/40 px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading title={t("reviews.title")} subtitle={t("reviews.subtitle")} />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <StaggerItem key={i}>
                <figure className="flex h-full flex-col rounded-2xl border bg-card p-6">
                  <StarRating rating={r.rating} />
                  <blockquote className="mt-4 flex-1 text-muted-foreground">
                    “{r.content[locale].text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t pt-4">
                    <div className="font-semibold text-primary">{r.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {r.content[locale].role} · {r.city}
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Service areas */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading title={t("areas.title")} subtitle={t("areas.subtitle")} />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
              >
                <MapPin className="h-3.5 w-3.5 text-secondary" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
