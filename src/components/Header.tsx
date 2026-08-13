import React, { useState } from 'react';
import styles from './Header.module.css';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbarContent}>
          <div className={styles.marqueeContainer}>
            <span className={styles.marqueeText}>
              Consult Certified Ayurveda & Homeopathy Experts from the Comfort of Your Home • Digital Health Assistant • Online Consultations • Authentic Medicines • Book Your Appointment Today
            </span>
          </div>
          <div className={styles.topbarActions}>
            <a href="tel:+919766548692" className={styles.phoneLink}>
              <Phone size={14} />
              <span>+91 97665 48692</span>
            </a>
          </div>
        </div>
      </div>
      
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a href="/" className={styles.logo}>
            <img src="/images/logo.png" alt="Ojas Sanjivani Logo" className={styles.logoImage} />
          </a>
          
          <nav className={styles.desktopNav}>
            <a href="#solutions" className={styles.navLink}>Why OjasSanjivani</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#specialists" className={styles.navLink}>Our Specialist</a>
            <a href="#reviews" className={styles.navLink}>Testimonials</a>
            <a href="#faqs" className={styles.navLink}>FAQs</a>
          </nav>
          
          <div className={styles.headerRight}>
             <a href="tel:+919766548692" className={styles.contactPill}>
               <Phone size={16} className={styles.phoneIcon} />
               <span>+919766548692</span>
             </a>
             <a href="#lead-form-section" className="btn-primary">
                <span className={styles.desktopBtnText}>Book Free Consultation</span>
                <span className={styles.mobileBtnText}>Book Free</span>
             </a>
             <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <a href="#solutions" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Why OjasSanjivani</a>
            <a href="#services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#specialists" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Our Specialist</a>
            <a href="#reviews" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faqs" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>FAQs</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
