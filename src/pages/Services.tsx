import { useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import FAQSection from "../components/FAQSection.tsx";
import AppointmentCTA from "../components/AppointmentCTA.tsx";
import AppointmentModal from "../components/AppointmentModal.tsx";
import { ALL_SERVICES } from "../data/services.ts";
import {
  Check,
  Clock,
  Shield,
  ArrowRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "./Services.css";

const FILTER_OPTIONS = [
  { id: "all", label: "All Treatments" },
  { id: "preventive", label: "Preventive & Family" },
  { id: "ortho", label: "Invisalign® Orthodontics" },
  { id: "cosmetic", label: "Cosmetics & Veneers" },
  { id: "restorative", label: "Implants & Restorative" },
];

export default function Services() {
  const [filter, setFilter] = useState("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("general");

  const openBookingFor = (serviceId: string) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  const filteredServices = ALL_SERVICES.filter((svc) => {
    if (filter === "all") return true;
    if (filter === "cosmetic") {
      return svc.id === "cosmetic-veneers" || svc.id === "teeth-whitening";
    }
    if (filter === "ortho") {
      return svc.id === "invisalign-aligners";
    }
    if (filter === "restorative") {
      return (
        svc.id === "implants-restoration" || svc.id === "root-canal-therapy"
      );
    }
    if (filter === "preventive") {
      return svc.id === "preventive-care" || svc.id === "pediatric-dentistry";
    }
    return true;
  });

  const activeFilterLabel =
    FILTER_OPTIONS.find((f) => f.id === filter)?.label || "All Treatments";

  return (
    <div>
      <Header />
      <main>
        {/* Services Hero */}
        <section className="services-hero">
          <div className="site-container">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              TREATMENTS &amp; PROCEDURES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--color-forest)] leading-tight max-w-4xl mb-6">
              Thoughtful dentistry tailored to your comfort and anatomy.
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl leading-relaxed">
              From routine biological cleanings to full-arch restorations, every
              treatment begins with an open conversation, 3D imaging, and
              transparent price estimates.
            </p>

            {/* Desktop Filter Bar */}
            <div
              className="services-filter-bar"
              role="tablist"
              aria-label="Filter treatments"
            >
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`filter-btn ${filter === opt.id ? "filter-btn-active" : ""}`}
                  onClick={() => setFilter(opt.id)}
                >
                  {opt.label}{" "}
                  {opt.id === "all" ? `(${ALL_SERVICES.length})` : ""}
                </button>
              ))}
            </div>

            {/* Mobile & Tablet Drawer Trigger Button */}
            <div className="services-filter-mobile-trigger">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-bold">
                  Active Filter:
                </span>
                <span className="text-sm font-semibold text-[var(--color-forest)]">
                  {activeFilterLabel} ({filteredServices.length})
                </span>
              </div>
              <button
                type="button"
                className="btn-dark py-2 px-4 text-xs inline-flex items-center gap-1.5"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open filter options drawer"
              >
                <SlidersHorizontal size={14} /> Filter
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Filter Drawer */}
        {isDrawerOpen && (
          <div
            className="filter-drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Filter treatments drawer"
          >
            <div
              className="filter-drawer-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="filter-drawer-header">
                <div>
                  <h3 className="font-serif text-xl text-[var(--color-forest)]">
                    Filter Treatments
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Select a clinical category
                  </p>
                </div>
                <button
                  type="button"
                  className="p-1.5 rounded-full hover:bg-[var(--color-cream)] text-[var(--color-forest)]"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close drawer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="filter-drawer-options">
                {FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`filter-drawer-option-btn ${filter === opt.id ? "active" : ""}`}
                    onClick={() => {
                      setFilter(opt.id);
                      setIsDrawerOpen(false);
                    }}
                  >
                    <span>{opt.label}</span>
                    <span className="text-xs opacity-75">
                      {opt.id === "all"
                        ? `${ALL_SERVICES.length} treatments`
                        : `${
                            ALL_SERVICES.filter((s) => {
                              if (opt.id === "cosmetic")
                                return (
                                  s.id === "cosmetic-veneers" ||
                                  s.id === "teeth-whitening"
                                );
                              if (opt.id === "ortho")
                                return s.id === "invisalign-aligners";
                              if (opt.id === "restorative")
                                return (
                                  s.id === "implants-restoration" ||
                                  s.id === "root-canal-therapy"
                                );
                              if (opt.id === "preventive")
                                return (
                                  s.id === "preventive-care" ||
                                  s.id === "pediatric-dentistry"
                                );
                              return true;
                            }).length
                          } treatments`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Treatment Cards with Generous Spacing */}
        <section
          className="py-14 bg-[var(--color-ivory)]"
          style={{ marginTop: "80px" }}
        >
          <div className="site-container">
            {filteredServices.map((svc) => (
              <article
                key={svc.id}
                id={svc.id}
                className="treatment-detail-card"
              >
                <div className="treatment-detail-body">
                  <div>
                    <div className="treatment-header-row">
                      <span className="treatment-number">{svc.number}</span>
                      <span className="treatment-badge">
                        {svc.priceStarting}
                      </span>
                    </div>

                    <h2 className="treatment-card-title">{svc.title}</h2>

                    <p className="treatment-card-overview">
                      {svc.details?.overview || svc.description}
                    </p>

                    <div className="treatment-specs-box">
                      <div className="treatment-spec-item">
                        <Clock
                          size={16}
                          className="text-[var(--color-orange)] shrink-0"
                        />
                        <span>
                          <strong>Time:</strong> {svc.details?.timeline}
                        </span>
                      </div>
                      <div className="treatment-spec-item">
                        <Shield
                          size={16}
                          className="text-[var(--color-orange)] shrink-0"
                        />
                        <span>
                          <strong>Comfort:</strong>{" "}
                          {svc.details?.anesthesiaOptions}
                        </span>
                      </div>
                    </div>

                    {svc.details?.benefits && (
                      <div className="treatment-benefits-block">
                        <div className="treatment-benefits-title">
                          What to expect from care:
                        </div>
                        {svc.details.benefits.map((b, idx) => (
                          <div key={idx} className="treatment-benefit-item">
                            <Check
                              size={15}
                              className="treatment-benefit-check"
                            />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="treatment-card-footer">
                    <button
                      type="button"
                      className="btn-primary py-2.5 px-6 text-sm"
                      onClick={() => openBookingFor(svc.id)}
                    >
                      Book this treatment <ArrowRight size={14} />
                    </button>
                    <span className="text-xs text-[var(--color-text-muted)] font-medium">
                      Itemized estimates provided before care
                    </span>
                  </div>
                </div>

                <div className="treatment-image-box">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="treatment-image"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FAQSection />

        {/* Appointment CTA */}
        <AppointmentCTA />
      </main>
      <Footer />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
