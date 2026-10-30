import React, { useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { CLINIC_INFO } from "../data/site.ts";
import {
  validateAppointmentForm,
  formatPhoneNumber,
} from "../utils/appointmentValidation.ts";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("general");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateAppointmentForm({
      fullName,
      phone,
      email,
      service,
      notes: message,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div>
      <Header />
      <main>
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="site-container">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              VISIT OUR STUDIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--color-forest)] leading-tight max-w-3xl mb-4">
              We&apos;re ready when you are.
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl leading-relaxed">
              Located in the Marina district with convenient on-site parking and
              accessible transit links. Have a question or looking to schedule?
              Get in touch below.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="bg-[var(--color-ivory)]">
          <div className="site-container">
            <div className="contact-grid">
              {/* Left Column: Studio Details */}
              <div className="contact-left-content">
                <h2 className="contact-section-title">Clinic Details</h2>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="contact-info-title">Studio Address</div>
                      <div className="contact-info-text">
                        {CLINIC_INFO.address}
                      </div>
                      <div className="contact-info-subtext text-[var(--color-orange)] font-medium">
                        Complimentary 2-hour patient parking in rear
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="contact-info-title">Telephone</div>
                      <a
                        href={`tel:${CLINIC_INFO.phone.replace(/\D/g, "")}`}
                        className="contact-info-text hover:text-[var(--color-orange)] font-medium block"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                      <div className="contact-info-subtext">
                        Direct line to our patient coordinator (never automated
                        robots)
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="contact-info-title">Electronic Mail</div>
                      <a
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="contact-info-text hover:text-[var(--color-orange)] font-medium block"
                      >
                        {CLINIC_INFO.email}
                      </a>
                      <div className="contact-info-subtext">
                        We reply within 2 hours during studio business hours
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Clock size={22} />
                    </div>
                    <div>
                      <div className="contact-info-title">Practice Hours</div>
                      <div className="space-y-1.5 text-sm text-[var(--color-text)] mt-1.5">
                        {CLINIC_INFO.hours.map((h) => (
                          <div
                            key={h.days}
                            className="flex justify-between gap-6"
                          >
                            <span className="text-[var(--color-text-muted)]">
                              {h.days}
                            </span>
                            <span className="font-medium text-[var(--color-forest)]">
                              {h.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency note */}
                <div id="emergency" className="contact-emergency-box">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[var(--color-forest)] mb-1.5">
                    <AlertCircle
                      size={18}
                      className="text-[var(--color-orange)] shrink-0"
                    />
                    Same-Day Dental Emergencies
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    If you are experiencing severe throbbing pain or a chipped
                    front tooth, call us immediately at{" "}
                    <strong>(415) 555-0142</strong>. We hold emergency triage
                    windows open every morning.
                  </p>
                </div>

                {/* Map Visual */}
                <div className="map-placeholder-box">
                  <div className="map-pin-badge">
                    <MapPin size={18} className="text-[var(--color-orange)]" />
                    Draftworks Studio • Marina Blvd
                  </div>
                </div>
              </div>

              {/* Right Column: Contact & Booking Form */}
              <div className="contact-card">
                <h2 className="contact-card-title">Request a Consultation</h2>
                <p className="contact-card-desc">
                  Fill out this brief form and we will reach back to confirm
                  your requested visit window.
                </p>

                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="contact-form"
                  >
                    <div className="contact-field-group">
                      <label
                        htmlFor="contact-name"
                        className="contact-field-label"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        className="form-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      {errors.fullName && (
                        <p className="form-error">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="contact-field-group">
                        <label
                          htmlFor="contact-phone"
                          className="contact-field-label"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="(+91) 89596 90529"
                          className="form-input"
                          value={phone}
                          onChange={handlePhoneChange}
                          required
                        />
                        {errors.phone && (
                          <p className="form-error">{errors.phone}</p>
                        )}
                      </div>

                      <div className="contact-field-group">
                        <label
                          htmlFor="contact-email"
                          className="contact-field-label"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="hello@draftworks.in"
                          className="form-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <p className="form-error">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="contact-field-group">
                      <label
                        htmlFor="contact-service"
                        className="contact-field-label"
                      >
                        Treatment of Interest
                      </label>
                      <select
                        id="contact-service"
                        className="form-select"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="general">
                          Comprehensive Exam &amp; Cleaning (₹89)
                        </option>
                        <option value="invisalign">
                          Invisalign® Clear Aligners
                        </option>
                        <option value="cosmetic">
                          Cosmetic Veneers &amp; Bonding
                        </option>
                        <option value="implants">Dental Implants</option>
                        <option value="whitening">Laser Teeth Whitening</option>
                        <option value="emergency">Urgent Dental Care</option>
                      </select>
                    </div>

                    <div className="contact-field-group">
                      <label
                        htmlFor="contact-message"
                        className="contact-field-label"
                      >
                        Notes or Questions (Optional)
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Share any dental anxieties, previous experiences, or preferred appointment days..."
                        className="form-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 mt-3 text-base"
                    >
                      Submit Consultation Request <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <div className="py-10 text-center">
                    <CheckCircle2
                      size={52}
                      className="mx-auto text-[var(--color-forest)] mb-4"
                    />
                    <h3 className="text-2xl font-serif text-[var(--color-forest)] mb-2">
                      Inquiry Dispatched
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto mb-6">
                      Thank you, <strong>{fullName}</strong>. Our clinical team
                      has received your message regarding {service}. We will
                      follow up via phone at <strong>{phone}</strong> within 2
                      hours during studio business hours.
                    </p>
                    <button
                      type="button"
                      className="btn-outline text-sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                      }}
                    >
                      Send another note
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
