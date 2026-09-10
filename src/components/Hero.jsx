import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  MapPin
} from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function Hero() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-elegant-section">
      {/* Light subtle scrim so temple & ocean are clearly visible */}
      <div className="hero-subtle-overlay" />

      <div className="container hero-elegant-container">
        <div className="hero-elegant-card animate-fade-up">
          {/* Subtle Location Tag */}
          <div className="hero-location-tag">
            <MapPin size={13} className="text-gold" />
            <span>Thiruchendur, Tamil Nadu</span>
          </div>

          {/* Clean Compact Title */}
          <h1 className="hero-elegant-title">
            Travel Comfortably. <br />
            <span className="hero-gold-glow">Explore Beautifully.</span>
          </h1>

          {/* Concise Subtitle */}
          <p className="hero-elegant-subtitle">
            Reliable <strong>Outstation</strong> & <strong>Local</strong> Cabs from Thiruchendur with 24/7 service.
          </p>

          {/* Compact Action Buttons */}
          <div className="hero-elegant-ctas">
            <a href="#enquiry" onClick={scrollToBooking} className="btn btn-primary hero-btn-main">
              <span>Book a Cab</span>
              <ArrowRight size={16} />
            </a>

            <a href={`tel:${siteConfig.phone}`} className="btn btn-hero-glass hero-btn-sub">
              <Phone size={15} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur,%20I%20would%20like%20to%20book%20a%20cab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-sub"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
