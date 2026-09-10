import React from 'react';
import { Users, Briefcase, Wind, Check, ShieldCheck, ArrowRight, Car, Sparkles } from 'lucide-react';
import { vehicles, siteConfig } from '../data/travelData';

export default function Vehicles({ onSelectVehicle }) {
  const handleSelectVehicle = (vehicleName) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicleName);
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vehicles" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Car size={14} />
            <span>Fleet & Cab Options</span>
          </div>
          <h2 className="section-title">
            Comfortable & Clean Vehicles for <br />
            <span className="gold-highlight">Smooth Road Journeys</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect vehicle for your group size and comfort preference. Every vehicle is thoroughly 
            sanitized, air-conditioned, and maintained to the highest safety standards.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="vehicles-grid">
          {vehicles.map((veh) => (
            <div key={veh.id} className="vehicle-card">
              {/* Image Box */}
              <div className="vehicle-image-wrapper">
                <img
                  src={veh.image}
                  alt={`${veh.name} cab rental - DNR Travels`}
                  className="vehicle-img"
                  loading="lazy"
                />
                <span className="vehicle-ac-badge">{veh.acType}</span>
              </div>

              {/* Body */}
              <div className="vehicle-body">
                <h3 className="vehicle-name">{veh.name}</h3>
                <div className="vehicle-subtitle">{veh.category}</div>

                {/* Specs Grid */}
                <div className="vehicle-specs-grid">
                  <div className="spec-item">
                    <Users size={16} />
                    <span><strong>Capacity:</strong> {veh.seating}</span>
                  </div>
                  <div className="spec-item">
                    <Briefcase size={16} />
                    <span><strong>Luggage:</strong> {veh.luggage}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#94A3B8', marginBottom: '16px' }}>
                  <strong>Best For:</strong> {veh.bestFor}
                </p>

                {/* Features */}
                <ul className="vehicle-features-list">
                  {veh.features.map((feat, fIdx) => (
                    <li key={fIdx} className="vehicle-feature-row">
                      <Check size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectVehicle(veh.name)}
                  className="btn btn-primary"
                  style={{ marginTop: 'auto' }}
                  aria-label={`Select ${veh.name} for booking`}
                >
                  <span>Select {veh.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
