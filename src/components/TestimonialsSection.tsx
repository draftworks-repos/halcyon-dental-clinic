import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials.ts";
import "./TestimonialsSection.css";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Draftworks+Dental+Studio+San+Francisco+reviews";

export default function TestimonialsSection() {
  const [t1, t2, t3] = TESTIMONIALS;

  return (
    <section
      id="reviews"
      className="testimonials-section"
      aria-label="Patient Testimonials"
    >
      <div className="site-container">
        {/* Header Row */}
        <div className="testimonials-header-row">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              PATIENT REVIEWS
            </div>
            <h2 className="testimonials-title">
              4.9 stars, and the stories behind them.
            </h2>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials-verified-badge"
            title="Read all 2,340 verified reviews on Google"
          >
            <Star
              size={14}
              className="testimonials-star"
              fill="currentColor"
              stroke="none"
            />
            <span>2,340 verified reviews</span>
            <span className="text-xs opacity-60 ml-0.5">↗</span>
          </a>
        </div>

        {/* Asymmetric 3-Card Grid */}
        <div className="testimonials-grid">
          {/* Card 1: Wide prominent card */}
          {t1 && (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card testimonial-card-span"
              title="Click to view verified review on Google"
            >
              <div className="testimonial-card-header">
                <span className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-semibold">
                  Google Verified Review
                </span>
                <span className="text-xs font-medium text-[var(--color-forest)] opacity-80">
                  Read on Google ↗
                </span>
              </div>
              <blockquote className="testimonial-quote">{t1.quote}</blockquote>
              <div className="testimonial-author-row">
                <img
                  src={t1.avatar}
                  alt={t1.author}
                  className="testimonial-avatar"
                  loading="eager"
                />
                <div>
                  <div className="testimonial-author-name">{t1.author}</div>
                  <div className="testimonial-author-plan">{t1.treatment}</div>
                </div>
              </div>
            </a>
          )}

          {/* Column with Card 2 and Card 3 */}
          <div className="flex flex-col gap-6">
            {t2 && (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card"
                title="Click to view verified review on Google"
              >
                <div className="testimonial-card-header">
                  <span className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-semibold">
                    Google Review
                  </span>
                  <span className="text-xs font-medium text-[var(--color-forest)] opacity-80">
                    ↗
                  </span>
                </div>
                <blockquote
                  className="testimonial-quote"
                  style={{ fontSize: "1.25rem" }}
                >
                  {t2.quote}
                </blockquote>
                <div className="testimonial-author-row">
                  <img
                    src={t2.avatar}
                    alt={t2.author}
                    className="testimonial-avatar"
                    loading="eager"
                  />
                  <div>
                    <div className="testimonial-author-name">{t2.author}</div>
                    <div className="testimonial-author-plan">
                      {t2.treatment}
                    </div>
                  </div>
                </div>
              </a>
            )}

            {t3 && (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card"
                title="Click to view verified review on Google"
              >
                <div className="testimonial-card-header">
                  <span className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-semibold">
                    Google Review
                  </span>
                  <span className="text-xs font-medium text-[var(--color-forest)] opacity-80">
                    ↗
                  </span>
                </div>
                <blockquote
                  className="testimonial-quote"
                  style={{ fontSize: "1.25rem" }}
                >
                  {t3.quote}
                </blockquote>
                <div className="testimonial-author-row">
                  <img
                    src={t3.avatar}
                    alt={t3.author}
                    className="testimonial-avatar"
                    loading="eager"
                  />
                  <div>
                    <div className="testimonial-author-name">{t3.author}</div>
                    <div className="testimonial-author-plan">
                      {t3.treatment}
                    </div>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
