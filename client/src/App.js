import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/globals.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import DentalServices from './components/DentalServices/DentalServices';
import NeuroServices from './components/NeuroServices/NeuroServices';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Facilities from './components/Facilities/Facilities';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ServiceDetailPage from './components/ServiceDetail/ServiceDetailPage';
import BackToTop from './components/UI/BackToTop';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import Loader from './components/UI/Loader';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Doctors />
    <DentalServices />
    <NeuroServices />
    <WhyChooseUs />
    <Facilities />
    <Gallery />
    <Testimonials />
    <FAQ />
    <Appointment />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
