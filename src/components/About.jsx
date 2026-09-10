import React from 'react';
import { Check, ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function About() {
  const points = [
    'Based in Thiruchendur with 24/7 Cab Service',
    'Specialist for Southern Tamil Nadu Outstation Trips',
    'Punctual Pickups for Temple Poojas & Airport Drops',
    'Clean, Sanitized AC Cabs with Experienced Drivers',
    'Transparent Rates with Zero Hidden Charges',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Text Content Column - Placed First */}
          <div className="about-content-column animate-fade-up">
            <div className="section-badge location-badge">
              <MapPin size={13} />
              <span>Thiruchendur, Tamil Nadu</span>
            </div>

            <h2 className="section-title">
              About <span className="gold-highlight">DNR Travels</span>
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Managed by <strong>Dinesh</strong> in <strong>Thiruchendur</strong>, DNR Travels provides reliable, 
              safe, and comfortable <strong>Outstation</strong> and <strong>Instation</strong> cab services 
              across Tamil Nadu with transparent pricing and 24/7 support.
            </p>

            <div className="about-features-list" style={{ gridTemplateColumns: '1fr', gap: '10px' }}>
              {points.map((text, idx) => (
                <div key={idx} className="about-feature-item">
                  <div className="about-check-icon">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="about-owner-card" style={{ marginTop: '14px' }}>
              <div className="owner-info">
                <span className="owner-name">{siteConfig.owner}</span>
                <span className="owner-title">DNR Travels · Thiruchendur</span>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn btn-primary btn-sm"
              >
                <span>Call Dinesh</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Visual Column: Dinesh's Photo - Placed Next to the paragraph */}
          <div className="about-image-column animate-fade-up">
            <div className="about-main-img-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-subtle)' }}>
              <img
                src="/images/dinesh-owner.jpg"
                alt="Dinesh - Owner of DNR Travels Thiruchendur"
                className="about-main-img"
                style={{ 
                  width: '100%', 
                  height: '420px', 
                  objectFit: 'cover', 
                  objectPosition: 'center 20%' 
                }}
                loading="lazy"
              />
            </div>

            <div className="about-experience-badge">
              <div className="badge-number">2+</div>
              <div className="badge-text">
                Years of Dedicated<br />Travel Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
