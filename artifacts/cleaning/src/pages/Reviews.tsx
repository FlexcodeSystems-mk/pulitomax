import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { REVIEWS } from "@/content/reviews";
import { Seo } from "@/components/Seo";
import { SectionHeading, StarRating, CtaBanner } from "@/components/common";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";

export default function Reviews() {
  const { t, locale } = useI18n();
  return (
    <>
      <Seo
        title={t("reviews.pageTitle")}
        description={t("reviews.pageSubtitle")}
        path={localePath(locale, "reviews")}
        locale={locale}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.reviews")}
            title={t("reviews.pageTitle")}
            subtitle={t("reviews.pageSubtitle")}
          />
          <Reveal className="mx-auto mt-8 flex max-w-md flex-col items-center gap-2 text-center">
            <StarRating rating={5} className="scale-125" />
            <p className="text-sm text-muted-foreground">
              <span className="text-lg font-bold text-primary">4.9</span> {t("reviews.rating")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
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

      <CtaBanner />
    </>
  );
}
