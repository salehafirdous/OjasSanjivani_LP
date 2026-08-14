import React from 'react';
import styles from './Hero.module.css';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <video
          className={styles.heroVideo}
          src="/videos/hero-telehealth.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={`wide-container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Consult Top Ayurvedic & Homeopathic Doctors <span className={styles.highlight}>Online from Home</span>
            </h1>
            <p className={styles.subtitle}>
              Book an online consultation with experienced Ayurveda & Homeopathy doctors to treat chronic conditions and lifestyle disorders with zero side effects.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>100% Natural</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>No Side Effects</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>Expert Doctors</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>Private & Secure</span>
              </div>
            </div>

            <div className={styles.processWrapper}>
              <h4 className={styles.processTitle}>Online Consultation Flow:</h4>
              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h5>Book Free Call</h5>
                    <p>Fill out the quick form in 1 minute</p>
                  </div>
                </div>
                <div className={styles.stepConnector}>➔</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h5>Consult Specialist</h5>
                    <p>Private phone or video consultation</p>
                  </div>
                </div>
                <div className={styles.stepConnector}>➔</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h5>Start Recovery</h5>
                    <p>Medicines delivered to your doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroFormWrapper} id="lead-form-section">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3>Book Your Free Consultation</h3>
                <p>Speak with our experts confidentially in just a few minutes.</p>
              </div>

              <form className={styles.leadForm}>
                <div className={styles.inputGroup}>
                  <input type="text" id="lead-form-name" placeholder="Full Name " required />
                </div>

                <div className={styles.inputGroup}>
                  <input type="tel" placeholder="Mobile Number " required />
                </div>

                <div className={styles.inputGroup}>
                  <input type="email" placeholder="Email Address" />
                </div>

                <div className={styles.inputGroup}>
                  <input type="date" placeholder="Preferred Consultation Date" className={styles.dateInput} />
                </div>

                <div className={styles.inputGroup}>
                  <select className={styles.selectInput} defaultValue="">
                    <option value="" disabled>Consultation Mode</option>
                    <option value="online">Online</option>
                    <option value="clinic">In Clinic visit</option>
                    <option value="phone">Phone call</option>
                  </select>
                </div>

                <div className={styles.radioGroupWrapper}>
                  <label className={styles.radioGroupLabel}>Choose Medical System </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="medical_system" value="ayurvedic" required />
                      <span>Ayurvedic</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="medical_system" value="homeopathic" required />
                      <span>Homeopathic</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="medical_system" value="both" required />
                      <span>Both</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                  Submit Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
