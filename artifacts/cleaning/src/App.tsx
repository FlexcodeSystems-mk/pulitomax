import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider, type Locale } from "@/lib/i18n";
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
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function LocalizedRouter({ locale }: { locale: Locale }) {
  return (
    <I18nProvider initialLocale={locale}>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/plans" component={Plans} />
          <Route path="/about" component={About} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
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

  return (
    <Switch>
      <Route path="/it" nest>
        <LocalizedRouter locale="it" />
      </Route>
      <Route path="/en" nest>
        <LocalizedRouter locale="en" />
      </Route>
      <Route path="/de" nest>
        <LocalizedRouter locale="de" />
      </Route>
      <Route>
        <I18nProvider initialLocale="it">
          <Layout>
            <NotFound />
          </Layout>
        </I18nProvider>
      </Route>
    </Switch>
  );
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
