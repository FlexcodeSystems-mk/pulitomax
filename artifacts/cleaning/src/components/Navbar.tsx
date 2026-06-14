import { useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { Menu, Phone, Check, Globe, Sparkles } from "lucide-react";
import { useI18n, LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { SITE, localePath } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { key: "nav.home", path: "" },
  { key: "nav.services", path: "services" },
  { key: "nav.plans", path: "plans" },
  { key: "nav.about", path: "about" },
  { key: "nav.reviews", path: "reviews" },
  { key: "nav.blog", path: "blog" },
  { key: "nav.contact", path: "contact" },
];

export function Navbar() {
  const { t, locale } = useI18n();
  const [location, navigate] = useLocation();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: Locale) => {
    const rest = location.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    navigate(`/${next}${rest}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-18">
        <Link
          href={localePath(locale)}
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight text-primary">
            Pulito<span className="text-secondary">Max</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.key} path={item.path} label={t(item.key)} locale={locale} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5"
                data-testid="button-language"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LOCALES.map((l) => (
                <DropdownMenuItem
                  key={l}
                  onClick={() => switchLocale(l)}
                  data-testid={`option-locale-${l}`}
                >
                  <span className="flex-1">{LOCALE_LABELS[l]}</span>
                  {l === locale && <Check className="ml-2 h-4 w-4 text-secondary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a href={`tel:${SITE.phoneHref}`} className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-1.5" data-testid="button-nav-call">
              <Phone className="h-4 w-4" />
              {t("nav.callNow")}
            </Button>
          </a>

          <Link href={localePath(locale, "contact")} className="hidden sm:block">
            <Button size="sm" data-testid="button-nav-quote">
              {t("nav.quote")}
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Menu"
                data-testid="button-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">PulitoMax</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.key}
                    href={localePath(locale, item.path)}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium hover-elevate"
                    data-testid={`link-mobile-${item.path || "home"}`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <a href={`tel:${SITE.phoneHref}`}>
                    <Button variant="outline" className="w-full gap-1.5">
                      <Phone className="h-4 w-4" />
                      {t("nav.callNow")}
                    </Button>
                  </a>
                  <Link href={localePath(locale, "contact")} onClick={() => setOpen(false)}>
                    <Button className="w-full">{t("nav.quote")}</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  path,
  label,
  locale,
}: {
  path: string;
  label: string;
  locale: Locale;
}) {
  const target = localePath(locale, path);
  const [isActive] = useRoute(path ? `/${locale}/${path}/*?` : `/${locale}`);
  return (
    <Link
      href={target}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover-elevate ${
        isActive ? "text-secondary" : "text-foreground/80"
      }`}
      data-testid={`link-nav-${path || "home"}`}
    >
      {label}
    </Link>
  );
}
