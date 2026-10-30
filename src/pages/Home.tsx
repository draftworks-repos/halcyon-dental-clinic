import { useState } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import ServicesTicker from '../components/ServicesTicker.tsx';
import ServicesSection from '../components/ServicesSection.tsx';
import DentistsSection from '../components/DentistsSection.tsx';
import ProcessSection from '../components/ProcessSection.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';
import BeforeAfterSection from '../components/BeforeAfterSection.tsx';
import FAQSection from '../components/FAQSection.tsx';
import AppointmentCTA from '../components/AppointmentCTA.tsx';
import Footer from '../components/Footer.tsx';
import AppointmentModal from '../components/AppointmentModal.tsx';
import './Home.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('general');

  const handleOpenBooking = (service: string = 'general') => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero onOpenBooking={() => handleOpenBooking('general')} />
        <ServicesTicker />
        <ServicesSection onSelectService={(id) => handleOpenBooking(id)} />
        <DentistsSection />
        <ProcessSection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <FAQSection />
        <AppointmentCTA />
      </main>
      <Footer />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
