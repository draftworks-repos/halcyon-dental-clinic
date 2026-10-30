import './ProcessSection.css';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Say hello',
    description: 'Book online in 60 seconds. Tell us what’s on your mind — pain, cosmetics, or just overdue.',
  },
  {
    number: '02',
    title: 'Scan & plan',
    description: 'A pain-free 3D scan maps your mouth. We walk you through options and honest pricing.',
  },
  {
    number: '03',
    title: 'Gentle treatment',
    description: 'Warm blankets, headphones, and clinicians who narrate every step. Sedation available.',
  },
  {
    number: '04',
    title: 'Lifelong smiles',
    description: 'We set reminders, track progress, and keep your plan flexible as life changes.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process-section" aria-label="Our Patient-Care Process">
      <div className="site-container">
        <div className="process-grid">
          {/* Left Column: Heading + Landscape Photo */}
          <div className="process-left">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              HOW IT WORKS
            </div>
            <h2 className="process-title">
              Four unhurried steps, start to smile.
            </h2>
            <p className="process-subtitle">
              We designed the whole visit around one idea: you should never wonder what&apos;s happening or what it costs.
            </p>

            <div className="process-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
                alt="Gentle dentist comforting patient in clean modern suite"
                className="process-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: 4 Vertically Stacked Steps */}
          <div className="process-steps-list">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="process-step-item">
                <span className="process-step-number">{step.number}</span>
                <div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
