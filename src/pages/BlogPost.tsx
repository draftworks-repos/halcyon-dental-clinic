import { useParams, Link, Navigate } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AppointmentCTA from "../components/AppointmentCTA.tsx";
import { ARTICLES } from "../data/articles.ts";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div>
      <Header />
      <main>
        {/* Post Hero */}
        <header className="blog-post-hero">
          <div className="site-container">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-orange)] mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Dental Journal
            </Link>

            <div className="max-w-4xl">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-forest)] leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--color-text-muted)] font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[var(--color-orange)]" />{" "}
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[var(--color-orange)]" />{" "}
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="site-container">
          <article className="blog-post-content">
            <div className="blog-post-featured-image">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="blog-post-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Author Attribution */}
            <div className="blog-author-box">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Dr. Elena Foss"
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-forest)] shrink-0"
              />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-0.5">
                  Clinical Reviewer
                </div>
                <div className="font-serif text-lg text-[var(--color-forest)] font-semibold">
                  Dr. Elena Foss, DDS
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Founder &amp; Clinical Director at Draftworks Dental Studio.
                  Fellow of the International Congress of Oral Implantologists.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
                <h3 className="font-serif text-2xl text-[var(--color-forest)] mb-6">
                  Related Clinical Perspectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/blog/${rel.slug}`}
                      className="p-5 rounded-2xl bg-[var(--color-cream)] border border-[var(--color-border)] hover:border-[var(--color-forest)] transition-colors group block"
                    >
                      <div className="text-xs text-[var(--color-orange)] font-semibold mb-1">
                        {rel.category}
                      </div>
                      <div className="font-serif text-lg text-[var(--color-forest)] group-hover:text-[var(--color-orange)] transition-colors">
                        {rel.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>

        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
