import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "../data/site.ts";
import AppointmentModal from "./AppointmentModal.tsx";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const location = useLocation();

  const isLinkActive = (path: string) => {
    if (path.includes("#")) {
      const [base, hash] = path.split("#");
      if (base === "" || base === "/") {
        return location.pathname === "/" && location.hash === `#${hash}`;
      }
      return location.pathname === base;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className="site-header">
        <div className="site-container">
          <div className="header-container">
            {/* Wordmark */}
            <Link
              to="/"
              className="brand-wordmark"
              aria-label="Draftworks Dental Studio Home"
            >
              Draftworks<span className="brand-dot">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isLinkActive(item.path) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Action */}
            <div className="header-actions">
              <button
                type="button"
                className="btn-dark hidden sm:inline-flex"
                onClick={() => setBookingModalOpen(true)}
              >
                Book a visit
              </button>

              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-nav-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
                <Link
                  to="/"
                  className="brand-wordmark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Draftworks<span className="brand-dot">.</span>
                </Link>
                <button
                  type="button"
                  className="p-1 rounded-full text-[var(--color-forest)] hover:bg-[var(--color-cream)]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--color-border)]">
              <button
                type="button"
                className="btn-primary w-full py-3 text-center mb-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
              >
                Book a visit
              </button>
              <div className="text-xs text-[var(--color-text-muted)] text-center">
                128 Marina Blvd, San Francisco • (415) 555-0142
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
