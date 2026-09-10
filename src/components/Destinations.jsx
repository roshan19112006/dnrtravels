import React, { useState } from 'react';
import { MapPin, Compass, Calendar, ArrowRight, Sparkles, Navigation, Clock } from 'lucide-react';
import { tamilNaduPackages } from '../data/travelData';

export default function Destinations({ onSelectDestination }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Hill Station', 'Spiritual & Coastal', 'Heritage & Temple', 'Hill & Wildlife'];

  const filteredPackages = activeFilter === 'All'
    ? tamilNaduPackages
    : tamilNaduPackages.filter((pkg) => pkg.category.includes(activeFilter) || pkg.category === activeFilter);

  const handleBookPackage = (pkgName, district) => {
    if (onSelectDestination) {
      onSelectDestination(`${pkgName} (${district})`);
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge emerald">
            <MapPin size={14} />
            <span>Tamil Nadu Tour Packages</span>
          </div>
          <h2 className="section-title">
            Explore Popular <br />
            <span className="gold-highlight">Tamil Nadu District Packages</span>
          </h2>
          <p className="section-subtitle">
            From the cool tea mist of Nilgiris and Dindigul to the architectural splendor of Thanjavur and sacred 
            shores of Rameshwaram, travel comfortably with customized district packages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Districts' : cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="destinations-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="destination-card">
              {/* Image Box */}
              <div className="destination-image-box">
                <img
                  src={pkg.image}
                  alt={`Tour package and cab booking for ${pkg.name}, ${pkg.district}`}
                  className="destination-img"
                  loading="lazy"
                />
                <span className="destination-badge-category">{pkg.category}</span>
                <span className="destination-state-tag">{pkg.district}</span>
              </div>

              {/* Body */}
              <div className="destination-body">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h3 className="destination-title">{pkg.name}</h3>
                  </div>
                  <div className="destination-tagline">{pkg.tagline}</div>
                  
                  <div className="package-duration-strip">
                    <Clock size={13} style={{ color: 'var(--gold-primary)' }} />
                    <span><strong>Duration:</strong> {pkg.duration}</span>
                  </div>

                  <p className="destination-desc">{pkg.description}</p>

                  <div className="destination-highlights-list">
                    {pkg.highlights.map((item, hIdx) => (
                      <span key={hIdx} className="highlight-chip">
                        • {item}
                      </span>
                    ))}
                  </div>

                  <div className="popular-from-info">
                    <Navigation size={13} style={{ color: 'var(--emerald-primary)' }} />
                    <span><strong>Pickup from:</strong> {pkg.popularFrom}</span>
                  </div>
                </div>

                <div className="destination-footer-action">
                  <span className="package-badge-tag">{pkg.badge}</span>
                  <button
                    onClick={() => handleBookPackage(pkg.name, pkg.district)}
                    className="btn btn-primary btn-sm"
                    aria-label={`Book tour for ${pkg.name}`}
                  >
                    <span>Book District Cab</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
