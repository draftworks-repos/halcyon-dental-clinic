import { useState } from "react";
import { Plus, X } from "lucide-react";
import { FAQ_ITEMS } from "../data/faq.ts";
import "./FAQSection.css";

export default function FAQSection() {
  // First item open by default like in the reference image
  const [openId, setOpenId] = useState<string | null>("anxiety-pain");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="faq-section"
      aria-label="Frequently Asked Questions"
    >
      <div className="site-container">
        <div className="faq-grid">
          {/* Left Column */}
          <div className="faq-left">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              GOOD TO KNOW
            </div>
            <h2 className="faq-title">Questions, answered plainly.</h2>
            <div className="faq-description-flow">
              <p className="faq-subtitle">
                Planning your first visit? Visit us at{" "}
                <strong>128 Marina Blvd, San Francisco</strong>, with
                complimentary parking. We're open Monday Thursday, 8 AM 6 PM,
                and Friday, 8 AM 3 PM.
                <br />
                We accept major PPO dental insurance, offer 0% APR financing
                from ₹49/month, and provide same day emergency care. Have
                questions? Call us at{" "}
                <a href="tel:918959690529" className="faq-phone-link">
                  (+91) 89596 90529
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div
            className="faq-accordion-list"
            role="region"
            aria-label="Questions list"
          >
            {FAQ_ITEMS.slice(0, 4).map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="faq-accordion-item">
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span
                      className={`faq-toggle-icon ${isOpen ? "faq-toggle-icon-active" : ""}`}
                      aria-hidden="true"
                    >
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="faq-answer-panel"
                    >
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
