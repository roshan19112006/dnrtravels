import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trips from './components/Trips';
import Services from './components/Services';
import BookingEnquiry from './components/BookingEnquiry';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PolicyModals from './components/PolicyModals';

export default function App() {
  const [modalType, setModalType] = useState(null);
  const [prefillBooking, setPrefillBooking] = useState(null);

  const handleTripSelect = (tripInfo) => {
    setPrefillBooking((prev) => ({
      ...prev,
      destination: tripInfo,
      tripType: tripInfo.includes('Local') || tripInfo.includes('Instation') ? 'Instation / Local' : 'Outstation Trip',
      message: `Enquiring for route: ${tripInfo}`,
    }));
  };

  const handleServiceSelect = (serviceTitle) => {
    setPrefillBooking((prev) => ({
      ...prev,
      tripType: serviceTitle.includes('Airport') 
        ? 'Airport Transfer' 
        : serviceTitle.includes('One-Way') 
        ? 'One-Way Drop' 
        : serviceTitle.includes('Local') || serviceTitle.includes('Instation')
        ? 'Instation / Local' 
        : serviceTitle.includes('Temple') 
        ? 'Temple Darshan Tour' 
        : 'Outstation Trip',
      message: `Enquiring for: ${serviceTitle}`,
    }));
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero onSelectTrip={handleTripSelect} />
        <About />
        <Trips onSelectTrip={handleTripSelect} />
        <Services onSelectService={handleServiceSelect} />
        <BookingEnquiry prefillData={prefillBooking} />
        <FaqSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenModal={(type) => setModalType(type)} />

      {/* Floating Actions & Mobile Bottom Dock */}
      <FloatingActions />

      {/* Policy Modals */}
      <PolicyModals modalType={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}
