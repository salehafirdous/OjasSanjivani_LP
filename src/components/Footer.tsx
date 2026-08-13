import React from 'react';
import styles from './Footer.module.css';
import { Phone, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="wide-container">
        <div className={styles.footerTop}>
          {/* Column 1: Left */}
          <div className={styles.brandColumn}>
            <div className={styles.logoContainer}>
              <img src="/images/logo.png" alt="Ojas Sanjivani Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.brandDesc}>
              Ojas Sanjivani combines the ancient wisdom of Ayurveda with modern Homeopathy to treat chronic diseases and lifestyle disorders from the root, providing safe and permanent recovery.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+91 97665 48692</span>
              </div>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.whatsappIcon}>
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <span>WhatsApp: +91 97665 48692</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Ojas Sanjivani Wellness Center, Camp, East Street, Pune, Maharashtra 411001</span>
              </div>
            </div>
          </div>

          {/* Column 2: Center */}
          <div className={styles.mapColumn}>
            <h4>FIND OUR CLINIC</h4>
            <div className={styles.mapWrapper}>
              <iframe
                title="Ojas Sanjivani Pune Clinic Location"
                src="https://maps.google.com/maps?q=East%20St,%20Pune,%20Maharashtra%20411001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 3: Right */}
          <div className={styles.detailsColumn}>
            <h4>GET IN TOUCH</h4>
            <div className={styles.infoDetails}>
              <div className={styles.infoItem}>
                <Mail size={16} />
                <span>Email: support@ojassanjivani.com</span>
              </div>
              <div className={styles.infoItem}>
                <Clock size={16} />
                <span>Timings: Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; 2026 Ojas Sanjivani Healthcare Private Limited. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="https://ojassanjivani.vercel.app/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://ojassanjivani.vercel.app/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
            <a href="#hero" onClick={scrollToTop} className={styles.backToTop}>
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
