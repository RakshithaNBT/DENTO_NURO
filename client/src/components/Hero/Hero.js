import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Video Background Banner */}
      <div className="hero-video-wrapper">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          poster="/logo.png"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Hero Scroll Action */}
      <div className="container hero-content">
        <motion.button
          className="hero-scroll-cue"
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          aria-label="Scroll to About"
        >
          <span>Explore Our Clinic</span>
          <FiArrowRight size={14} className="hero-scroll-arrow" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
