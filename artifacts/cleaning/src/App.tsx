import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider, LOCALES, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Plans from "@/pages/Plans";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import { PrivacyPolicy, TermsOfService, CookiePolicy } from "@/pages/Legal";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function LocalizedRouter({ locale }: { locale: Locale }) {
  const p = (path = "") => localePath(locale, path);
  return (
    <I18nProvider initialLocale={locale} key={locale}>
      <Layout>
        <Switch>
          <Route path={p()} component={Home} />
          <Route path={p("services")} component={Services} />
          <Route path={p("services/:slug")} component={ServiceDetail} />
          <Route path={p("plans")} component={Plans} />
          <Route path={p("about")} component={About} />
          <Route path={p("reviews")} component={Reviews} />
          <Route path={p("blog")} component={Blog} />
          <Route path={p("blog/:slug")} component={BlogPost} />
          <Route path={p("contact")} component={Contact} />
          <Route path={p("faq")} component={FAQ} />
          <Route path={p("privacy")} component={PrivacyPolicy} />
          <Route path={p("terms")} component={TermsOfService} />
          <Route path={p("cookies")} component={CookiePolicy} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </I18nProvider>
  );
}

function Router() {
  const [location] = useLocation();

  if (location === "/") {
    return <Redirect to="/it" />;
  }

  const segment = location.split("/")[1];
  const locale = LOCALES.find((l) => l === segment);

  if (!locale) {
    return (
      <I18nProvider initialLocale="it">
        <Layout>
          <NotFound />
        </Layout>
      </I18nProvider>
    );
  }

  return <LocalizedRouter locale={locale} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
