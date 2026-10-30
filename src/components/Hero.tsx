import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC_INFO } from "../data/site.ts";
import "./Hero.css";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      className="hero-section"
      aria-label="Welcome to Draftworks Dental Studio"
    >
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Content */}
          <div className="hero-content">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              Draftworks DENTAL STUDIO • EST. 2011
            </div>

            <h1 className="hero-title">
              The calm way to a <span className="italic-accent">confident</span>{" "}
              smile.
            </h1>

            <p className="hero-description">
              A boutique dental practice built around gentle care, quiet rooms,
              and dentistry that respects your time. No rush, no jargon — just
              healthier teeth and honest advice.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenBooking}
              >
                Reserve your consultation <ArrowRight size={16} />
              </button>

              <Link to="/services" className="btn-link font-medium">
                Explore treatments
              </Link>
            </div>

            <div className="hero-stats">
              {CLINIC_INFO.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Collage */}
          <div className="hero-collage" aria-hidden="true">
            {/* Main Portrait: Dentist & Examination */}
            <div className="hero-main-image-wrapper">
              <img
                src="/temp/clinic-7.webp"
                alt="Gentle dental examination with soft lighting at Draftworks Dental"
                className="hero-main-image"
                loading="eager"
              />

              {/* Floating Trust Badge */}
              <div className="hero-badge">
                <span className="hero-badge-text">Painless Promise</span>
                <div className="hero-badge-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image: Smiling with clear aligner */}
            <div className="hero-secondary-image-wrapper">
              <img
                src="/temp/clinic-4.webp"
                alt="Patient wearing discreet clear aligners with natural healthy smile"
                className="hero-secondary-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
