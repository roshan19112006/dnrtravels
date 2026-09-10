import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Users, Send } from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function QuickSearch({ onFillEnquiry }) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState('1-4');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (onFillEnquiry) {
      onFillEnquiry({ pickup, destination, date, passengers: pax });
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = () => {
    const text = `Hello Dinesh (DNR Travels), I want to check cab availability:%0A%0A*Pickup:* ${pickup || 'Not specified'}%0A*Destination:* ${destination || 'Not specified'}%0A*Date:* ${date || 'Flexible'}%0A*Passengers:* ${pax}%0A%0APlease provide a quote.`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="container quick-booking-bar">
      <div className="quick-bar-card">
        <form className="quick-bar-form" onSubmit={handleQuickSubmit}>
          <div className="form-group-quick">
            <label className="form-label-quick">
              <MapPin size={14} />
              <span>Pickup Location</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Trichy / Coimbatore / Chennai"
              className="input-quick"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
            />
          </div>

          <div className="form-group-quick">
            <label className="form-label-quick">
              <Navigation size={14} />
              <span>Drop Destination</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ooty / Munnar / Kodaikanal"
              className="input-quick"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="form-group-quick">
            <label className="form-label-quick">
              <Calendar size={14} />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              className="input-quick"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group-quick">
            <label className="form-label-quick">
              <Users size={14} />
              <span>Passengers</span>
            </label>
            <select
              className="input-quick"
              value={pax}
              onChange={(e) => setPax(e.target.value)}
            >
              <option value="1-4">1 - 4 Persons (Sedan)</option>
              <option value="5-7">5 - 7 Persons (SUV / MUV)</option>
              <option value="8-12">8 - 12 Persons (Tempo Traveler)</option>
              <option value="12+">12+ Persons (Group Mini Bus)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" title="Calculate fare & enquire">
            <span>Check Availability</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
