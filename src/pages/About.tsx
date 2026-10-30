import { useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AppointmentCTA from "../components/AppointmentCTA.tsx";
import AppointmentModal from "../components/AppointmentModal.tsx";
import { DENTISTS } from "../data/dentists.ts";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./About.css";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <main>
        {/* About Hero: 2-column layout with image on right side */}
        <section className="about-hero">
          <div className="site-container">
            <div className="about-hero-grid">
              <div>
                <span className="section-eyebrow">
                  <span className="section-eyebrow-dot" />
                  OUR CLINIC &amp; PHILOSOPHY
                </span>
                <h1 className="about-hero-title">
                  Dentistry designed around human nervous systems.
                </h1>
                <p className="about-hero-desc">
                  Draftworks was born in 2011 to dismantle the anxiety, rushed
                  pacing, and confusing jargon that kept millions of people away
                  from oral healthcare. We practice slow, transparent dentistry
                  in calm, light-filled rooms.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setModalOpen(true)}
                >
                  Book a consultation <ArrowRight size={16} />
                </button>
              </div>

              <div className="about-hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Tranquil daylight dental lounge and examination room at Draftworks Dental"
                  className="about-hero-image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Principles */}
        <section className="about-philosophy-section">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-forest)] leading-tight">
                Three promises that guide every consultation.
              </h2>
            </div>

            <div className="about-principles-grid">
              <div className="principle-card">
                <div className="principle-number">01</div>
                <h3 className="principle-title">Absolute Patient Agency</h3>
                <p className="principle-text">
                  You hold the brakes. The moment you raise your hand, our
                  instruments pause immediately. We explain every sensation
                  beforehand so there are never sudden surprises.
                </p>
              </div>

              <div className="principle-card">
                <div className="principle-number">02</div>
                <h3 className="principle-title">Biomimetic Preservation</h3>
                <p className="principle-text">
                  We believe in keeping your natural tooth structure intact.
                  Rather than aggressively cutting teeth for generic crowns, we
                  rebuild enamel and dentin using microscopic composite
                  technology.
                </p>
              </div>

              <div className="principle-card">
                <div className="principle-number">03</div>
                <h3 className="principle-title">Radical Transparency</h3>
                <p className="principle-text">
                  No hidden fees, no high-pressure upsells. You review your 3D
                  digital scans on high-definition screens, with printed
                  itemized estimates before anything begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Doctors Section (Dark Forest Green) */}
        <section id="doctors" className="about-doctors-detail-section">
          <div className="site-container">
            <div className="about-doctors-header">
              <span className="section-eyebrow section-eyebrow-dark">
                <span className="section-eyebrow-dot" />
                THE CLINICIANS
              </span>
              <h2 className="about-doctors-title">
                Meet the minds behind your care.
              </h2>
              <p className="about-doctors-desc">
                Senior clinicians with world-class academic backgrounds who take
                genuine pride in crafting gentle, lifelong patient
                relationships.
              </p>
            </div>

            {DENTISTS.map((dentist) => (
              <div
                key={dentist.id}
                id={dentist.id}
                className="doctor-detail-card"
              >
                <div className="doctor-detail-image-box">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="doctor-detail-image"
                    loading="lazy"
                  />
                </div>

                <div>
                  <div className="doctor-header-row">
                    <h3 className="doctor-detail-name">{dentist.name}</h3>
                    <span className="doctor-exp-pill">
                      {dentist.yearsExperience} Experience
                    </span>
                  </div>

                  <p className="doctor-detail-role">{dentist.role}</p>

                  <p className="doctor-detail-degrees">{dentist.degrees}</p>

                  <p className="doctor-detail-bio">{dentist.bio}</p>

                  <blockquote className="doctor-quote">
                    {dentist.philosophy}
                  </blockquote>

                  <div className="doctor-specialties-block">
                    <div className="doctor-specialties-label">
                      Areas of Specialization
                    </div>
                    <div>
                      {dentist.specialties.map((spec) => (
                        <span key={spec} className="doctor-tag">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities & Comfort Amenities */}
        <section className="facility-section">
          <div className="site-container">
            <div className="facility-grid">
              <div>
                <span className="section-eyebrow">
                  <span className="section-eyebrow-dot" />
                  THE ENVIRONMENT
                </span>
                <h2 className="facility-title">
                  Designed like a sanctuary, not an operating theater.
                </h2>
                <p className="facility-desc">
                  Every detail of our Marina Boulevard studio was curated to
                  soothe sensory overload. We replaced antiseptic chemical
                  scents with fresh eucalyptus and bergamot, installed
                  sound-dampening acoustic wall paneling, and selected dental
                  chairs with built-in ergonomic heating.
                </p>

                <div className="facility-amenities-list">
                  <div className="facility-amenity-card">
                    <ShieldCheck className="facility-amenity-icon" size={22} />
                    <div>
                      <div className="facility-amenity-title">
                        Noise-Canceling Audio
                      </div>
                      <div className="facility-amenity-desc">
                        Bose headphones with your choice of podcast, audiobook,
                        or curated ambient soundscapes.
                      </div>
                    </div>
                  </div>

                  <div className="facility-amenity-card">
                    <HeartHandshake
                      className="facility-amenity-icon"
                      size={22}
                    />
                    <div>
                      <div className="facility-amenity-title">
                        Warm Organic Blankets &amp; Eye Masks
                      </div>
                      <div className="facility-amenity-desc">
                        Weighted linen throws and soft eye pillows to ease
                        tension while resting in the chair.
                      </div>
                    </div>
                  </div>

                  <div className="facility-amenity-card">
                    <Sparkles className="facility-amenity-icon" size={22} />
                    <div>
                      <div className="facility-amenity-title">
                        Low-Dose 3D Cone Beam CT
                      </div>
                      <div className="facility-amenity-desc">
                        Zero gooey impression trays. High-speed digital mapping
                        in less than 90 seconds.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-[var(--color-border)]">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                  alt="Tranquil daylight dental suite at Draftworks Dental"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Appointment CTA */}
        <AppointmentCTA />
      </main>
      <Footer />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
