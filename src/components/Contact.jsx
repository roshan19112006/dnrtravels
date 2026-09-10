import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Navigation,
  Compass
} from 'lucide-react';
import { siteConfig } from '../data/travelData';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge location-badge">
            <MapPin size={13} />
            <span>Thiruchendur, Tamil Nadu</span>
          </div>
          <h2 className="section-title">
            Get In Touch With <br />
            <span className="gold-highlight">DNR Travels Thiruchendur</span>
          </h2>
          <p className="section-subtitle">
            Need a cab for a temple visit, outstation journey, or airport drop from Thiruchendur? 
            Connect directly with Dinesh for immediate assistance and transparent quotes.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Details List */}
          <div className="contact-cards-column">
            {/* Phone Card */}
            <a href={`tel:${siteConfig.phone}`} className="contact-feature-card">
              <div className="contact-feature-icon">
                <Phone size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Call Anytime (24/7 Available in Thiruchendur)
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-brand)', margin: '2px 0 4px 0' }}>
                  {siteConfig.phoneDisplay}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Immediate assistance for bookings & emergency drops
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur,%20I%20would%20like%20to%20enquire%20about%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-feature-card"
            >
              <div className="contact-feature-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.4)' }}>
                <MessageCircle size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  WhatsApp Quick Chat
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-brand)', margin: '2px 0 4px 0' }}>
                  +91 {siteConfig.phone}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Fast quotes, vehicle photos, and live route sharing
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a href={`mailto:${siteConfig.email}`} className="contact-feature-card">
              <div className="contact-feature-icon" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669', borderColor: 'rgba(5, 150, 105, 0.4)' }}>
                <Mail size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Email Address
                </span>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-brand)', margin: '2px 0 4px 0' }}>
                  {siteConfig.email}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Send tour itinerary requirements & corporate travel queries
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-feature-card"
            >
              <div className="contact-feature-icon" style={{ background: 'rgba(225, 48, 108, 0.12)', color: '#E1306C', borderColor: 'rgba(225, 48, 108, 0.3)' }}>
                <InstagramIcon size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Follow on Instagram
                </span>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-brand)', margin: '2px 0 4px 0' }}>
                  {siteConfig.instagramHandle}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  View latest road trips, customer feedback & updates
                </p>
              </div>
            </a>
          </div>

          {/* Location & Map Overview Column */}
          <div className="map-wrapper">
            <iframe
              title="DNR Travels Thiruchendur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.013548563795!2d78.11305459344498!3d8.499092891542457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f0b2f56b595b%3A0xe5a3c035f56b2a47!2sTiruchendur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
