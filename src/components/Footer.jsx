import React from 'react';
import { Compass, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/travelData';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div style={{ background: '#FFFFFF', padding: '4px 10px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center' }}>
                <img 
                  src="/images/logo.png" 
                  alt="DNR Travels Logo" 
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '18px', lineHeight: 1.6 }}>
              Safe, comfortable, and punctual outstation and local cab services from Thiruchendur across Tamil Nadu.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#about">About Dinesh</a></li>
              <li className="footer-link-item"><a href="#trips">Outstation Trips</a></li>
              <li className="footer-link-item"><a href="#trips">Instation & Local</a></li>
              <li className="footer-link-item"><a href="#services">Our Services</a></li>
              <li className="footer-link-item"><a href="#enquiry">Book Cab</a></li>
            </ul>
          </div>

          {/* Column 3: Top Routes */}
          <div>
            <h4 className="footer-col-title">Top Routes</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Madurai</a></li>
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Kanyakumari</a></li>
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Rameshwaram</a></li>
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Chennai</a></li>
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Tuticorin Airport</a></li>
              <li className="footer-link-item"><a href="#trips">Thiruchendur ⇄ Courtallam</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="footer-col-title">Contact Dinesh</h4>
            <ul className="footer-links-list" style={{ gap: '10px' }}>
              <li className="footer-link-item">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone size={15} style={{ color: 'var(--gold-primary)' }} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={15} style={{ color: 'var(--emerald-primary)' }} />
                  <span style={{ wordBreak: 'break-all' }}>{siteConfig.email}</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={15} />
                  <span>{siteConfig.instagramHandle}</span>
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '14px', padding: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
                📍 Thiruchendur, Thoothukudi Dist, TN
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <p style={{ fontSize: '0.84rem', color: '#94A3B8', margin: 0 }}>
            © {currentYear} <strong>DNR Travels</strong>. Managed by Dinesh (Thiruchendur).
          </p>

          <div className="footer-legal-links">
            <button onClick={() => onOpenModal('privacy')}>Privacy Policy</button>
            <span style={{ color: '#475569' }}>•</span>
            <button onClick={() => onOpenModal('terms')}>Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
