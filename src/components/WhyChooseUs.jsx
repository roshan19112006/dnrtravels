import React from 'react';
import { Sparkles, MapPin, Award, Clock, BadgePercent, Heart, CheckCircle2 } from 'lucide-react';
import { whyChooseUs } from '../data/travelData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={22} />;
      case 'MapPin': return <MapPin size={22} />;
      case 'Award': return <Award size={22} />;
      case 'Clock': return <Clock size={22} />;
      case 'BadgePercent': return <BadgePercent size={22} />;
      case 'Heart': return <Heart size={22} />;
      default: return <CheckCircle2 size={22} />;
    }
  };

  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge emerald">
            <CheckCircle2 size={14} />
            <span>Why Us</span>
          </div>
          <h2 className="section-title">
            Why Travel with <span className="gold-highlight">DNR Travels</span>
          </h2>
          <p className="section-subtitle">
            Dedicated to safety, punctuality, and passenger comfort in Thiruchendur.
          </p>
        </div>

        {/* Features Grid */}
        <div className="why-choose-grid">
          {whyChooseUs.map((item) => (
            <div key={item.id} className="why-card" style={{ padding: '22px' }}>
              <div className="why-icon-box" style={{ width: '44px', height: '44px' }}>
                {getIcon(item.icon)}
              </div>
              <h3 className="why-title" style={{ fontSize: '1.05rem', margin: 0 }}>{item.title}</h3>
              <p className="why-desc" style={{ fontSize: '0.86rem', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
