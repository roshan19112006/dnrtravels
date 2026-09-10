import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="floating-actions-container">
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20DNR%20Travels%20Thiruchendur,%20I%20am%20looking%20to%20book%20a%20cab%20trip.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn-whatsapp"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with DNR Travels on WhatsApp"
        title="Chat on WhatsApp"
      >
        {showTooltip && (
          <span className="floating-tooltip">
            💬 WhatsApp Quote (Thiruchendur)
          </span>
        )}
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
