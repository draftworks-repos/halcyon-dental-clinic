import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  validateAppointmentForm,
  formatPhoneNumber,
} from "../utils/appointmentValidation.ts";
import "./AppointmentCTA.css";

export default function AppointmentCTA() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
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
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section
      className="appointment-cta-section"
      aria-label="Book an Appointment"
    >
      <div className="site-container">
        <div className="appointment-cta-panel">
          <div className="appointment-cta-grid">
            {/* Left Side */}
            <div>
              <div className="section-eyebrow section-eyebrow-dark">
                <span className="section-eyebrow-dot" />
                YOUR APPOINTMENT
              </div>
              <h2 className="appointment-cta-title">
                Let&apos;s get you{" "}
                <span className="italic-accent-peach">smiling</span> sooner.
              </h2>
              <p className="appointment-cta-desc">
                Book a consultation today most new patients are seen within the
                week. No referral needed.
              </p>
            </div>

            {/* Right Side: Form */}
            <div>
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="appointment-form"
                  noValidate
                >
                  <div>
                    <input
                      type="text"
                      className="appointment-input"
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      aria-label="Your full name"
                      required
                    />
                    {errors.fullName && (
                      <p className="text-red-300 text-xs mt-1 ml-3">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      className="appointment-input"
                      placeholder="Phone number"
                      value={phone}
                      onChange={handlePhoneChange}
                      aria-label="Your phone number"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-300 text-xs mt-1 ml-3">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="appointment-submit-btn">
                    Request my visit <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="appointment-cta-success">
                  <CheckCircle2
                    size={32}
                    className="mx-auto text-[var(--color-peach)] mb-2"
                  />
                  <h3 className="appointment-cta-success-title">
                    Request Received
                  </h3>
                  <p className="appointment-cta-success-text">
                    Thank you, <strong>{fullName}</strong>. Our studio concierge
                    will call or text you at <strong>{phone}</strong> shortly to
                    finalize your appointment time.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName("");
                      setPhone("");
                    }}
                    className="text-xs text-[var(--color-peach)] underline mt-3 inline-block"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
