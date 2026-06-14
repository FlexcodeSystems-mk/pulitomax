import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { POSTS, CATEGORIES, categoryLabel } from "@/content/blog";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/common";
import { Stagger, StaggerItem } from "@/components/Reveal";

export default function Blog() {
  const { t, locale } = useI18n();
  const [active, setActive] = useState<string>("all");

  const posts = active === "all" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title={t("blog.title")}
        description={t("blog.subtitle")}
        path={localePath(locale, "blog")}
        locale={locale}
      />
      <section className="bg-muted/40 px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow={t("nav.blog")}
            title={t("blog.title")}
            subtitle={t("blog.subtitle")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <FilterPill label={t("blog.all")} active={active === "all"} onClick={() => setActive("all")} />
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat.id}
                label={cat.label[locale]}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
                testId={cat.id}
              />
            ))}
          </div>

          <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={localePath(locale, `blog/${post.slug}`)} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg" data-testid={`card-post-${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.content[locale].title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow">
                        {categoryLabel(post.category, locale)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} {t("blog.readTime")}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-primary">{post.content[locale].title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{post.content[locale].excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        {t("blog.readMore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  testId,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  testId?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-primary text-primary-foreground" : "border bg-card text-foreground/80 hover-elevate"
      }`}
      data-testid={`filter-${testId ?? "all"}`}
    >
      {label}
    </button>
  );
}
