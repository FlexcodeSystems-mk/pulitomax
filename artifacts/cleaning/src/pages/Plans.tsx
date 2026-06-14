import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { PLANS, type Plan } from "@/content/plans";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { SectionHeading, CtaBanner } from "@/components/common";
import { Reveal } from "@/components/Reveal";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { t, locale } = useI18n();
  const c = plan.content[locale];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex h-full flex-col rounded-2xl border bg-card p-7 ${
        plan.popular ? "border-secondary shadow-lg ring-1 ring-secondary/30 lg:scale-[1.03]" : ""
      }`}
      data-testid={`card-plan-${plan.id}`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          <Star className="h-3 w-3 fill-current" />
          {t("plans.mostPopular")}
        </span>
      )}
      <h3 className="text-xl font-bold text-primary">{c.name}</h3>
      <p className="mt-2 min-h-[2.5rem] text-sm text-muted-foreground">{c.description}</p>
      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-bold text-primary">{plan.price}</span>
        <span className="mb-1 text-muted-foreground">{t("plans.perMonth")}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-secondary">{c.cadence}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {c.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={localePath(locale, "contact")} className="mt-7">
        <Button
          className="w-full"
          variant={plan.popular ? "default" : "outline"}
          data-testid={`button-choose-${plan.id}`}
        >
          {t("plans.choose")}
        </Button>
      </Link>
    </motion.div>
  );
}

export default function Plans() {
  const { t, tr, locale } = useI18n();
  const allFeatures = tr<string[]>("plans.features");

  return (
    <>
      <Seo
        title={t("plans.title")}
        description={t("plans.subtitle")}
        path={localePath(locale, "plans")}
        locale={locale}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("plans.teaserTitle")}
            title={t("plans.title")}
            subtitle={t("plans.subtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">{t("plans.billing")}</p>

          <Reveal className="mx-auto mt-16 max-w-2xl rounded-2xl border bg-card p-8">
            <h3 className="text-center text-lg font-semibold text-primary">
              {t("plans.featuresTitle")}
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {allFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-secondary" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
