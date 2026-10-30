import React, { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";
import "./BeforeAfterSection.css";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clampedPercent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      id="results"
      className="before-after-section"
      aria-label="Before and After Results"
    >
      <div className="site-container">
        <div className="before-after-grid">
          {/* Left Column: Interactive Before/After Split */}
          <div
            ref={containerRef}
            className="ba-interactive-container"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            tabIndex={0}
            role="slider"
            aria-label="Before and after transformation comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            onKeyDown={handleKeyDown}
          >
            {/* Base Image: Before Treatment */}
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
              alt="Teeth alignment before treatment showing subtle natural misalignment"
              className="ba-image"
              loading="eager"
              draggable={false}
            />

            {/* Clipped Top Image: After Treatment */}
            <div
              className="ba-after-wrapper"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                alt="Radiant aligned teeth after completing six months of clear aligner care"
                className="ba-image"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
              <div className="ba-handle" aria-hidden="true">
                <ChevronsLeftRight size={18} />
              </div>
            </div>

            {/* Badges */}
            <span className="ba-badge ba-badge-before">Before</span>
            <span className="ba-badge ba-badge-after">After</span>
          </div>

          {/* Right Column: Editorial Copy & Facts */}
          <div className="ba-right-content">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              BEFORE &amp; AFTER
            </div>

            <h2 className="ba-title">Drag to see six months of quiet work.</h2>

            <p className="ba-description">
              Real results from a composite bonding and whitening plan no
              filters, no stock teeth. Every case is photographed under the same
              clinical lighting.
            </p>

            <div className="ba-metrics-row">
              <div>
                <div className="ba-metric-value">6 mo</div>
                <div className="ba-metric-label">average timeline</div>
              </div>
              <div>
                <div className="ba-metric-value">98%</div>
                <div className="ba-metric-label">would recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
