import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass } from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'trips', 'services', 'enquiry', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Trips & Routes', href: '#trips' },
    { label: 'Services', href: '#services' },
    { label: 'Book Cab', href: '#enquiry' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" aria-label="DNR Travels Thiruchendur">
            <img 
              src="/images/dnr-logo-gold.png" 
              alt="DNR Travels Thiruchendur Logo" 
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-name">
                DNR <span>TRAVELS</span>
              </span>
              <span className="brand-tagline">Thiruchendur, Tamil Nadu</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-item-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navbar Quick Actions */}
          <div className="navbar-actions">
            <a
              href={`tel:${siteConfig.phone}`}
              className="nav-call-btn"
              title="Call DNR Travels"
              aria-label="Call DNR Travels"
            >
              <Phone size={14} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur,%20I%20would%20like%20to%20enquire%20about%20a%20cab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-backdrop ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />
      <div className={`mobile-drawer-panel ${isMobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-logo">
            <img 
              src="/images/dnr-logo-gold.png" 
              alt="DNR Travels Logo" 
              className="brand-logo-img"
              style={{ maxHeight: '38px' }}
            />
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="drawer-nav-list">
          {navLinks.map((link) => (
            <li key={link.label} className="drawer-nav-item">
              <a
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-actions">
          <a
            href={`tel:${siteConfig.phone}`}
            className="btn btn-navy btn-sm"
          >
            <Phone size={16} />
            <span>Call: {siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur,%20I%20need%20a%20cab.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </>
  );
}
