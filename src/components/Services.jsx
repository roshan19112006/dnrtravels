import React from 'react';
import { 
  Compass, 
  MapPin, 
  Palmtree, 
  Plane, 
  ArrowRightCircle, 
  Repeat, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';
import { services } from '../data/travelData';

export default function Services({ onSelectService }) {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass size={24} />;
      case 'MapPin': return <MapPin size={24} />;
      case 'Palmtree': return <Palmtree size={24} />;
      case 'Plane': return <Plane size={24} />;
      case 'ArrowRightCircle': return <ArrowRightCircle size={24} />;
      case 'Repeat': return <Repeat size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  const handleBookService = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Services</span>
          </div>
          <h2 className="section-title">
            Our <span className="gold-highlight">Travel Services</span>
          </h2>
          <p className="section-subtitle">
            Reliable outstation and local cab solutions tailored for your journey.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {services.map((service) => (
            <div key={service.id} className="service-card" style={{ padding: '22px' }}>
              <div>
                <div className="service-top" style={{ marginBottom: '14px' }}>
                  <div className="service-icon-box" style={{ width: '46px', height: '46px' }}>
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="service-badge">{service.badge}</span>
                </div>

                <h3 className="service-title" style={{ fontSize: '1.15rem' }}>{service.title}</h3>
                <p className="service-desc" style={{ fontSize: '0.86rem', marginBottom: '16px' }}>
                  {service.desc}
                </p>
              </div>

              <button
                onClick={() => handleBookService(service.title)}
                className="btn btn-outline-gold btn-sm service-action-btn"
                aria-label={`Book ${service.title}`}
              >
                <span>Book Service</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
