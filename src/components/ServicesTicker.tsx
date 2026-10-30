import { useEffect, useRef, useState } from 'react';
import { TICKER_ITEMS } from '../data/site.ts';
import './ServicesTicker.css';

export default function ServicesTicker() {
  const tickerRef = useRef<HTMLElement>(null);
  const [isInViewport, setIsInViewport] = useState(true);

  useEffect(() => {
    const target = tickerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Duplicate items for continuous loop
  const loopItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      ref={tickerRef}
      className={`ticker-section ${isInViewport ? 'ticker-running' : 'ticker-paused'}`}
      aria-label="Clinical specialties and patient guarantees"
    >
      <div className="ticker-track">
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
            <span className="ticker-separator" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
