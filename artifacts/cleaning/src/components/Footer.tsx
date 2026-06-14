import { useState } from "react";
import { Link } from "wouter";
import { Sparkles, MapPin, Phone, Mail, Send, CheckCircle2, Facebook, Instagram, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, localePath } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t, locale } = useI18n();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  const companyLinks = [
    { key: "nav.about", path: "about" },
    { key: "nav.plans", path: "plans" },
    { key: "nav.reviews", path: "reviews" },
    { key: "nav.blog", path: "blog" },
    { key: "nav.contact", path: "contact" },
  ];

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={localePath(locale)} className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold">PulitoMax</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">{t("footer.tagline")}</p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={localePath(locale, `services/${s.slug}`)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                    data-testid={`link-footer-service-${s.slug}`}
                  >
                    {s.content[locale].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("footer.companyTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.key}>
                  <Link
                    href={localePath(locale, l.path)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              {t("newsletter.title")}
            </h4>
            <p className="mb-3 text-sm text-primary-foreground/70">{t("newsletter.desc")}</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="h-4 w-4" />
                {t("newsletter.success")}
              </div>
            ) : (
              <form onSubmit={subscribe} className="flex gap-2">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="input-newsletter"
                />
                <Button type="submit" size="icon" variant="secondary" aria-label={t("newsletter.subscribe")} data-testid="button-newsletter">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
            <ul className="mt-6 space-y-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-secondary">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-secondary">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                <span>{SITE.addressStreet}, {SITE.addressCity}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName} (PulitoMax). {t("footer.rights")} {SITE.vat} · REA {SITE.rea}</p>
          <div className="flex gap-4">
            <Link href={localePath(locale, "privacy")} className="hover:text-secondary transition-colors">{t("footer.privacy")}</Link>
            <Link href={localePath(locale, "terms")} className="hover:text-secondary transition-colors">{t("footer.terms")}</Link>
            <Link href={localePath(locale, "cookies")} className="hover:text-secondary transition-colors">{t("footer.cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
