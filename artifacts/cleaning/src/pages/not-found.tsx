import { Link } from "wouter";
import { Home, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t, locale } = useI18n();

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
          <Sparkles className="h-8 w-8" />
        </span>
        <p className="mt-6 text-6xl font-bold text-primary">404</p>
        <h1 className="mt-3 text-2xl font-bold text-primary">{t("notFound.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("notFound.desc")}</p>
        <Link href={localePath(locale)} className="mt-8 inline-block">
          <Button size="lg" className="gap-2" data-testid="button-notfound-home">
            <Home className="h-4 w-4" />
            {t("notFound.home")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
