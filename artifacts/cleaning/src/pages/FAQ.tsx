import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { FAQS } from "@/content/faqs";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/common";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { t, locale } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.content[locale].q,
      acceptedAnswer: { "@type": "Answer", text: f.content[locale].a },
    })),
  };

  return (
    <>
      <Seo
        title={t("faq.pageTitle")}
        description={t("faq.pageSubtitle")}
        path={localePath(locale, "faq")}
        locale={locale}
        jsonLd={jsonLd}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title={t("faq.pageTitle")}
            subtitle={t("faq.pageSubtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.content[locale].q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.content[locale].a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <div className="mt-12 rounded-2xl border bg-card p-8 text-center">
            <h3 className="text-lg font-semibold text-primary">{t("faq.more")}</h3>
            <Link href={localePath(locale, "contact")} className="mt-4 inline-block">
              <Button size="lg" data-testid="button-faq-contact">{t("faq.moreCta")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
