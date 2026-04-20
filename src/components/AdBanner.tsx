import { useState, useEffect } from 'react';
import './AdBanner.css';

interface Ad {
  id: number;
  icon: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
  gradient: string;
}

const ADS: Ad[] = [
  {
    id: 1,
    icon: '🤖',
    badge: 'Coming Soon',
    title: 'AI Training with Experts',
    description: 'New AI training coming soon with expert instructors. Master LLMs, Agents & more.',
    cta: 'Notify Me',
    gradient: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
  },
  {
    id: 2,
    icon: '📊',
    badge: 'Coming Soon',
    title: 'Data Science Bootcamp',
    description: 'New Data Science training coming soon with expert trainers. From basics to production.',
    cta: 'Learn More',
    gradient: 'linear-gradient(135deg, #0369a1, #0284c7)',
  },
];

export default function AdBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  // Rotate between ads every 6 seconds
  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex(i => (i + 1) % ADS.length);
        setVisible(true);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  const ad = ADS[currentIndex];

  return (
    <div className={`ad-banner ${visible ? 'ad-banner--visible' : 'ad-banner--hidden'}`}>
      {/* Dismiss button */}
      <button
        className="ad-banner__close"
        onClick={() => setDismissed(true)}
        aria-label="Close ad"
      >
        ✕
      </button>

      {/* Ad dot indicators */}
      <div className="ad-banner__dots">
        {ADS.map((_, i) => (
          <span
            key={i}
            className={`ad-banner__dot ${i === currentIndex ? 'ad-banner__dot--active' : ''}`}
            onClick={() => { setCurrentIndex(i); setVisible(true); }}
          />
        ))}
      </div>

      {/* Ad content */}
      <div className="ad-banner__body" style={{ background: ad.gradient }}>
        <div className="ad-banner__icon">{ad.icon}</div>
        <div className="ad-banner__text">
          <span className="ad-banner__badge">{ad.badge}</span>
          <h4 className="ad-banner__title">{ad.title}</h4>
          <p className="ad-banner__desc">{ad.description}</p>
        </div>
        <button className="ad-banner__cta">{ad.cta}</button>
      </div>
    </div>
  );
}
