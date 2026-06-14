import { Link } from "wouter";
import {
  Home,
  Building2,
  Briefcase,
  Store,
  PanelsTopLeft,
  Sparkles,
  BedDouble,
  Factory,
  Star,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const ICONS: Record<string, LucideIcon> = {
  Home,
  Building2,
  Briefcase,
  Store,
  PanelsTopLeft,
  Sparkles,
  BedDouble,
  Factory,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} />;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function CtaBanner() {
  const { t, locale } = useI18n();
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12"
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              {t("cta.bannerTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              {t("cta.bannerSubtitle")}
            </p>
            <Link href={localePath(locale, "contact")} className="mt-8 inline-block">
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-banner">
                {t("cta.bannerBtn")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
