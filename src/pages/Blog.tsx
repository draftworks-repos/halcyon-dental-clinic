import { Link } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import AppointmentCTA from '../components/AppointmentCTA.tsx';
import { ARTICLES } from '../data/articles.ts';
import { ArrowUpRight } from 'lucide-react';
import './Blog.css';

export default function Blog() {
  return (
    <div>
      <Header />
      <main>
        {/* Blog Hero */}
        <section className="blog-hero">
          <div className="site-container">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              THE DENTAL JOURNAL
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--color-forest)] leading-tight max-w-3xl mb-4">
              Essays on gentle biology, calm care, and smiles.
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl leading-relaxed">
              Clinical insights from our doctors on overcoming dental fear, modern orthodontic mechanics, and preserving natural tooth enamel.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-[var(--color-ivory)]">
          <div className="site-container">
            <div className="blog-grid">
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="article-card"
                >
                  <div className="article-image-box">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="article-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="article-body">
                    <div>
                      <div className="article-category">{article.category}</div>
                      <h2 className="article-title">{article.title}</h2>
                      <p className="article-excerpt">{article.excerpt}</p>
                    </div>

                    <div className="article-meta">
                      <span>{article.readTime}</span>
                      <span className="flex items-center gap-1 font-medium text-[var(--color-forest)]">
                        Read essay <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
