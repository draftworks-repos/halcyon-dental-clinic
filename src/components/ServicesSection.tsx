import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_SERVICES } from '../data/services.ts';
import './ServicesSection.css';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="services-section" aria-label="Dental Services">
      <div className="site-container">
        {/* Header Row */}
        <div className="services-header-row">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              WHAT WE DO
            </div>
            <h2 className="services-title">
              Care for every <span className="italic-accent">stage</span> of your smile.
            </h2>
          </div>
          <p className="services-subtitle">
            Every plan starts with a conversation and a scan — never a sales pitch. Here&apos;s a little of what we&apos;re known for.
          </p>
        </div>

        {/* Asymmetric 4-Card Grid */}
        <div className="services-grid">
          {FEATURED_SERVICES.map((service) => {
            const isDark = service.isDark;

            return (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className={`service-card ${isDark ? 'service-card-dark' : 'service-card-light'}`}
                onClick={() => onSelectService && onSelectService(service.id)}
              >
                <div className="service-card-inner">
                  {service.image && (
                    <div className="service-card-media">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="service-card-content">
                    <div className="service-card-top">
                      <span className="service-number">{service.number}</span>
                      <div
                        className={`service-icon-circle ${
                          isDark ? 'service-icon-circle-coral' : 'service-icon-circle-light'
                        }`}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div className="service-card-body">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>

                    <div className="service-footer">
                      <span className="service-price">{service.priceStarting}</span>
                      <span className="text-xs opacity-70 flex items-center gap-1">
                        Details &amp; FAQ →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
