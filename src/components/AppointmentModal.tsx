import React, { useState } from "react";
import { X, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import {
  validateAppointmentForm,
  formatPhoneNumber,
} from "../utils/appointmentValidation.ts";
import "./AppointmentModal.css";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultService = "general",
}: AppointmentModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
      preferredDate,
      notes,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleReset}
      role="dialog"
      aria-modal="true"
      aria-label="Book a visit modal"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleReset}
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                Reserve Consultation
              </span>
              <h2 className="modal-title">
                Experience calm, unhurried dentistry.
              </h2>
              <p className="modal-subtitle">
                Fill in your details below and our patient care team will reach
                out within 2 hours to confirm your preferred visit window.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">
                  Your Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  placeholder="e.g. Clara Oswald"
                  className="form-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                {errors.fullName && (
                  <p className="form-error">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="modal-phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="(415) 555-0199"
                    className="form-input"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email" className="form-label">
                    Email Address (Optional)
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="clara@example.com"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="modal-service" className="form-label">
                    Treatment of Interest
                  </label>
                  <select
                    id="modal-service"
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="general">Preventive & Cleaning (₹89)</option>
                    <option value="invisalign">Invisalign® & Aligners</option>
                    <option value="cosmetic">Cosmetic Veneers & Bonding</option>
                    <option value="implants">
                      Dental Implants & Restoration
                    </option>
                    <option value="whitening">Laser Teeth Whitening</option>
                    <option value="anxiety">Gentle Anxiety-Free Consult</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-date" className="form-label">
                    Preferred Time Window
                  </label>
                  <input
                    id="modal-date"
                    type="text"
                    placeholder="e.g. This Thursday morning"
                    className="form-input"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-notes" className="form-label">
                  Any specific concerns or dental anxieties?
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  placeholder="Tell us if you experience anxiety, sensitive teeth, or need sedation options..."
                  className="form-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 mt-2 text-base"
              >
                Request my consultation <ArrowRight size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">
              <CheckCircle size={36} />
            </div>
            <h3 className="modal-success-title">
              Consultation Request Received
            </h3>
            <p className="modal-success-text">
              Thank you, <strong>{fullName}</strong>. We have received your
              request for <em>{service}</em>. Our patient coordinator will
              contact you at <strong>{phone}</strong> to confirm your
              appointment time and send your digital welcome packet.
            </p>
            <button type="button" className="btn-dark" onClick={handleReset}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
