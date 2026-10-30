import { Link } from "react-router-dom";
import { DENTISTS } from "../data/dentists.ts";
import "./DentistsSection.css";

export default function DentistsSection() {
  return (
    <section id="doctors" className="dentists-section" aria-label="Our Doctors">
      <div className="site-container">
        {/* Header Row */}
        <div className="dentists-header-row">
          <div>
            <div className="section-eyebrow section-eyebrow-dark">
              <span className="section-eyebrow-dot" />
              THE PEOPLE
            </div>
            <h2 className="dentists-title">
              Dentists you&apos;ll actually{" "}
              <span className="italic-accent-peach">look forward</span> to
              seeing.
            </h2>
          </div>
          <p className="dentists-subtitle">
            A tight, senior-led team of clinicians who trained across three
            continents and who still remember your kids&apos; names between
            visits.
          </p>
        </div>

        {/* 3 Dentist Cards */}
        <div className="dentists-grid">
          {DENTISTS.map((dentist) => (
            <Link
              key={dentist.id}
              to={`/about#${dentist.id}`}
              className="dentist-card"
            >
              <div className="dentist-image-box">
                <img
                  src={dentist.image}
                  alt={`${dentist.name}, ${dentist.role}`}
                  className="dentist-image"
                  loading="lazy"
                />
                <span className="dentist-exp-badge">
                  {dentist.yearsExperience}
                </span>
              </div>
              <div className="dentist-info">
                <h3 className="dentist-name">{dentist.name}</h3>
                <p className="dentist-role">{dentist.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
