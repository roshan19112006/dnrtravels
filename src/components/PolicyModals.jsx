import React from 'react';
import { X, Shield, FileCheck } from 'lucide-react';
import { siteConfig } from '../data/travelData';

export default function PolicyModals({ modalType, onClose }) {
  if (!modalType) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {modalType === 'privacy' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Shield size={24} style={{ color: 'var(--emerald-primary)' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>Privacy Policy</h3>
            </div>
            <div style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                At <strong>DNR Travels</strong>, we value the trust you place in us when sharing your travel details. 
                This Privacy Policy outlines how we collect, handle, and safeguard your trip enquiry information.
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>1. Information Collected</h4>
              <p>
                We only collect information provided voluntarily during booking enquiries, including your name, contact phone/WhatsApp 
                number, email address, travel dates, pickup location, and destination preferences.
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>2. Use of Information</h4>
              <p>
                Your contact details are used exclusively to calculate fare quotations, coordinate driver schedules, 
                and provide trip updates. We do not sell, rent, or share personal information with third-party marketers.
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>3. Data Security</h4>
              <p>
                We take necessary precautions to keep your contact information secure. For questions regarding your information, 
                reach Dinesh at <strong>{siteConfig.email}</strong>.
              </p>
            </div>
          </div>
        )}

        {modalType === 'terms' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <FileCheck size={24} style={{ color: 'var(--gold-primary)' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>Terms & Conditions</h3>
            </div>
            <div style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                Welcome to <strong>DNR Travels</strong>. By reserving a cab or booking a tour package with us, you agree 
                to the following terms:
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>1. Booking & Quotation</h4>
              <p>
                Fare quotes provided are based on the initial itinerary, route, passenger count, and vehicle category chosen. 
                Any deviations or additional stops will be adjusted transparently based on actual mileage and standard rates.
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>2. Tolls, Permits & Parking</h4>
              <p>
                Unless explicitly bundled in an all-inclusive package quote, highway toll taxes, inter-state entry permits, 
                and parking fees at tourist spots are payable as per actual receipts.
              </p>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem' }}>3. Passenger Safety & Vehicle Care</h4>
              <p>
                Our drivers adhere to legal speed limits and highway safety rules. We request passengers to maintain cleanliness 
                inside the vehicle throughout the journey for a pleasant ride for everyone.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
