import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  Car
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/travelData';

export default function BookingEnquiry({ prefillData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Thiruchendur',
    destination: '',
    travelDate: '',
    vehicle: 'Dzire Sedan (4 Seater)',
    tripType: 'Outstation Trip'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        ...prefillData,
      }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const msg = 
`*CAB BOOKING - DNR TRAVELS THIRUCHENDUR*
👤 Name: ${formData.name || 'Customer'}
📞 Phone: ${formData.phone || 'Not provided'}
📍 Pickup: ${formData.pickup || 'Thiruchendur'}
🏁 Drop: ${formData.destination || 'Not specified'}
📅 Date: ${formData.travelDate || 'Today / Tomorrow'}
🚗 Vehicle: ${formData.vehicle}`;

    return encodeURIComponent(msg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
      } catch (err) {}
    }, 350);
  };

  const handleSendViaWhatsApp = () => {
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`, '_blank');
  };

  return (
    <section id="enquiry" className="section-padding lite-booking-section">
      <div className="container">
        {/* Compact Lite Header */}
        <div className="section-header" style={{ marginBottom: '22px' }}>
          <div className="section-badge emerald" style={{ marginBottom: '8px' }}>
            <Sparkles size={12} />
            <span>Instant Booking</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '6px' }}>
            Book Your <span className="gold-highlight">Cab</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.9rem', marginBottom: '0px' }}>
            Quick reservation with instant confirmation from Thiruchendur
          </p>
        </div>

        {/* Small & Lite Booking Box */}
        <div className="lite-booking-card">
          {isSubmitted ? (
            <div className="lite-booking-success animate-fade-up">
              <div className="success-icon-wrap-sm">
                <CheckCircle2 size={30} />
              </div>
              <h4>Booking Received!</h4>
              <p>
                Thanks <strong>{formData.name || 'Sir/Madam'}</strong>. Dinesh will contact you at <strong>{formData.phone}</strong> shortly.
              </p>

              <div className="lite-success-actions">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle size={15} />
                  <span>Open WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline btn-sm"
                >
                  <span>New Booking</span>
                </button>
              </div>
            </div>
          ) : (
            <form className="lite-form" onSubmit={handleSubmit}>
              <div className="lite-form-grid">
                {/* Name */}
                <div className="lite-input-group">
                  <label htmlFor="lite-name">Your Name</label>
                  <input
                    id="lite-name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="lite-input-group">
                  <label htmlFor="lite-phone">Phone Number</label>
                  <input
                    id="lite-phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Pickup */}
                <div className="lite-input-group">
                  <label htmlFor="lite-pickup">
                    <MapPin size={12} className="text-gold" /> Pickup Location
                  </label>
                  <input
                    id="lite-pickup"
                    name="pickup"
                    type="text"
                    placeholder="e.g. Thiruchendur"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Drop */}
                <div className="lite-input-group">
                  <label htmlFor="lite-drop">
                    <MapPin size={12} className="text-emerald" /> Drop Destination
                  </label>
                  <input
                    id="lite-drop"
                    name="destination"
                    type="text"
                    placeholder="e.g. Madurai / Rameshwaram"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date */}
                <div className="lite-input-group">
                  <label htmlFor="lite-date">
                    <Calendar size={12} /> Travel Date
                  </label>
                  <input
                    id="lite-date"
                    name="travelDate"
                    type="date"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Cab Type */}
                <div className="lite-input-group">
                  <label htmlFor="lite-cab">
                    <Car size={12} /> Cab Type
                  </label>
                  <select
                    id="lite-cab"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                  >
                    <option value="Dzire Sedan (4 Seater)">Dzire Sedan (4 Seats)</option>
                    <option value="Ertiga SUV (6-7 Seater)">Ertiga SUV (6-7 Seats)</option>
                    <option value="Innova Crysta (7 Seater)">Innova Crysta (7 Seats)</option>
                    <option value="Tempo Traveller (12-14 Seater)">Tempo (12-14 Seats)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lite-actions-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary lite-submit-btn"
                >
                  <Send size={14} />
                  <span>{isSubmitting ? 'Booking...' : 'Book Cab Now'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="btn btn-whatsapp lite-wa-btn"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Book</span>
                </button>
              </div>

              {/* Ultra clean subtle micro-footer */}
              <div className="lite-card-footer">
                <span>⚡ Instant Confirmation</span>
                <span>•</span>
                <span>🛡️ Safe Cabs</span>
                <span>•</span>
                <a href={`tel:${siteConfig.phone}`} className="lite-phone-link">
                  <Phone size={11} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
