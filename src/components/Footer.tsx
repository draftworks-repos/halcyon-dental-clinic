import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { CLINIC_INFO } from "../data/site.ts";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-wordmark">
              Draftworks<span className="brand-dot">.</span>
            </Link>
            <p className="footer-desc">
              Boutique dentistry in the heart of the city. Gentle hands, honest
              advice.
            </p>
            <div className="footer-socials">
              <a
                href="#twitter"
                className="footer-social-link"
                aria-label="Follow Draftworks on Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#linkedin"
                className="footer-social-link"
                aria-label="Connect with Draftworks on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#youtube"
                className="footer-social-link"
                aria-label="Watch patient stories on YouTube"
              >
                <Youtube size={15} />
              </a>
              <a
                href="#instagram"
                className="footer-social-link"
                aria-label="Follow Draftworks on Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Practice Column */}
          <div>
            <h4 className="footer-col-title">PRACTICE</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services" className="footer-link">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/about#doctors" className="footer-link">
                  Our doctors
                </Link>
              </li>
              <li>
                <Link to="/#reviews" className="footer-link">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Dental Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Column */}
          <div>
            <h4 className="footer-col-title">MORE</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/contact" className="footer-link">
                  Book online
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  New patients guide
                </Link>
              </li>
              <li>
                <Link to="/contact#emergency" className="footer-link">
                  Emergencies
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-links-list">
              <li className="text-sm text-[var(--color-text)]">
                {CLINIC_INFO.address}
              </li>
              <li>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\D/g, "")}`}
                  className="footer-link"
                >
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC_INFO.email}`} className="footer-link">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="text-xs text-[var(--color-text-muted)] pt-1">
                Mon–Thu: 8am–6pm · Fri: 8am–3pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Draftworks Dental Studio. All rights
            reserved.
          </div>
          <div className="footer-legal-links">
            <span>
              Design & Developed by{" "}
              <a href="https://draftworks.in/" className="footer-legal-link">
                draftworks.in
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
