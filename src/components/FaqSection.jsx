import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { faqs } from '../data/travelData';

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to Common <br />
            <span className="gold-highlight">Travel & Booking Queries</span>
          </h2>
          <p className="section-subtitle">
            Find prompt answers regarding trip scheduling, vehicle options, payment transparency, 
            and outstation tour planning with DNR Travels.
          </p>
        </div>

        {/* FAQ Accordion Container */}
        <div className="faq-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="faq-icon-arrow" />
                </button>

                {isOpen && (
                  <div
                    id={`faq-ans-${faq.id}`}
                    className="faq-answer-body"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
