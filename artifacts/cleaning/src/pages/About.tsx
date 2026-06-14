import { Check, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { Seo } from "@/components/Seo";
import { SectionHeading, CtaBanner } from "@/components/common";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import teamImg from "@assets/generated_images/team.png";

export default function About() {
  const { t, tr, locale } = useI18n();
  const values = tr<{ title: string; desc: string }[]>("about.values");
  const certs = tr<string[]>("about.certs");

  return (
    <>
      <Seo
        title={t("about.title")}
        description={t("about.subtitle")}
        path={localePath(locale, "about")}
        locale={locale}
        image={teamImg}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.about")}
            title={t("about.title")}
            subtitle={t("about.subtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={teamImg} alt={t("about.teamTitle")} className="w-full rounded-2xl object-cover shadow-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-primary">{t("about.storyTitle")}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("about.story")}</p>
            <h3 className="mt-8 text-xl font-bold text-primary">{t("about.missionTitle")}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t("about.mission")}</p>
            <h3 className="mt-8 text-xl font-bold text-primary">{t("about.teamTitle")}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t("about.team")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 px-4 py-16">
        <div className="container mx-auto">
          <SectionHeading title={t("about.valuesTitle")} />
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-2xl border bg-card p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border bg-card p-8">
            <h2 className="text-center text-2xl font-bold text-primary">{t("about.certsTitle")}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {certs.map((cert, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" />
                  {cert}
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
