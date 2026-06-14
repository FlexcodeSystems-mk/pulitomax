import { Link, useParams, Redirect } from "wouter";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath, SITE } from "@/lib/site";
import { POSTS, getPost, categoryLabel } from "@/content/blog";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogPost() {
  const { t, locale } = useI18n();
  const params = useParams();
  const slug = params.slug ?? "";
  const post = getPost(slug);

  if (!post) return <Redirect to={localePath(locale, "blog")} />;

  const c = post.content[locale];
  const related = POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallback = related.length ? related : POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: c.title,
      description: c.excerpt,
      image: post.image,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author, url: SITE.url },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: SITE.defaultOgImage },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE.url}${localePath(locale, `blog/${slug}`)}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={c.title}
        description={c.excerpt}
        path={localePath(locale, `blog/${slug}`)}
        locale={locale}
        image={post.image}
        type="article"
        jsonLd={jsonLd}
      />

      <article>
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={post.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative mx-auto px-4 py-20 sm:py-28">
            <div className="max-w-3xl">
              <Link
                href={localePath(locale, "blog")}
                className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
                data-testid="link-back-blog"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>
              <span className="mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {categoryLabel(post.category, locale)}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{c.title}</h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-white/80">
                <span>{t("blog.by")} {post.author}</span>
                <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime} {t("blog.readTime")}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <Reveal>
              <p className="text-lg font-medium leading-relaxed text-foreground/90">{c.excerpt}</p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {c.body.map((block, i) =>
                block.type === "h2" ? (
                  <h2 key={i} className="pt-2 text-2xl font-bold text-primary">{block.text}</h2>
                ) : (
                  <p key={i} className="leading-relaxed text-muted-foreground">{block.text}</p>
                ),
              )}
            </div>

            {c.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold text-primary">{t("blog.faqTitle")}</h2>
                <Accordion type="single" collapsible className="mt-4">
                  {c.faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} data-testid={`post-faq-${i}`}>
                      <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </div>

        <section className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-primary">{t("blog.related")}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {fallback.map((p) => (
                <Link key={p.slug} href={localePath(locale, `blog/${p.slug}`)} className="group block">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-md">
                    <img src={p.image} alt={p.content[locale].title} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-semibold leading-snug text-primary">{p.content[locale].title}</h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        {t("blog.readMore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBanner />
    </>
  );
}
