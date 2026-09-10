import React, { useState } from 'react';
import { MapPin, Compass, ArrowRight } from 'lucide-react';
import { tripCategories } from '../data/travelData';

export default function Trips({ onSelectTrip }) {
  const [activeTab, setActiveTab] = useState('outstation');

  const items = tripCategories[activeTab] || tripCategories.outstation;

  const handleBookDistrict = (districtName) => {
    if (onSelectTrip) {
      onSelectTrip(`${districtName} (${activeTab === 'outstation' ? 'Outstation' : 'Instation'})`);
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trips" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-badge emerald">
            <Compass size={14} />
            <span>Destinations & Districts</span>
          </div>
          <h2 className="section-title">
            Districts <span className="gold-highlight">We Cover</span>
          </h2>
        </div>

        {/* 2 Tabs: Outstation Districts vs Instation Districts */}
        <div className="trip-tabs-container">
          <button
            className={`trip-tab-btn ${activeTab === 'outstation' ? 'active' : ''}`}
            onClick={() => setActiveTab('outstation')}
          >
            <Compass size={18} />
            <span>Outstation Districts</span>
          </button>

          <button
            className={`trip-tab-btn ${activeTab === 'instation' ? 'active' : ''}`}
            onClick={() => setActiveTab('instation')}
          >
            <MapPin size={18} />
            <span>Instation & Local</span>
          </button>
        </div>

        {/* Clean District Cards Grid */}
        <div className="destinations-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {items.map((item) => (
            <div key={item.id} className="destination-card" style={{ borderRadius: '16px' }}>
              {/* Image Box */}
              <div className="destination-image-box" style={{ height: '170px' }}>
                <img
                  src={item.image}
                  alt={item.district}
                  className="destination-img"
                  loading="lazy"
                />
                <span className="destination-badge-category">{item.tag}</span>
              </div>

              {/* Body: Just District Name & Book Action */}
              <div className="destination-body" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 className="destination-title" style={{ fontSize: '1.25rem', margin: 0 }}>
                    {item.district}
                  </h3>
                </div>

                <div className="destination-footer-action" style={{ paddingTop: '12px', marginTop: '10px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--emerald-primary)', fontWeight: 700 }}>
                    ✓ AC Cab Available
                  </span>
                  <button
                    onClick={() => handleBookDistrict(item.district)}
                    className="btn btn-primary btn-sm"
                    aria-label={`Book cab for ${item.district}`}
                  >
                    <span>Book Cab</span>
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
