import React from 'react';
import styles from './Specialists.module.css';

const Specialists: React.FC = () => {
  return (
    <section id="specialists" className={`section-padding ${styles.specialistsSection}`}>
      <div className="wide-container">
        <div className="text-center">
          <h2 className="section-title">Meet Our <span className="highlight">Medical Experts</span></h2>
          <p className="section-subtitle">
            Consult with highly qualified, certified practitioners with decades of experience in Ayurveda and Homeopathy.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
               <img src="/images/doctor-rajeev.png" alt="Dr. Rajeev Sharma" className={styles.image} />
            </div>
            <div className={styles.content}>
               <h3 className={styles.name}>Dr. Rajeev Sharma</h3>
               <p className={styles.qualifications}>BAMS, MD (Ayurveda)</p>
               <p className={styles.experience}>25+ Years Experience</p>
               <p className={styles.description}>Specializes in chronic diseases and lifestyle disorders, integrating traditional Ayurvedic wisdom with modern diagnostics.</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
               <img src="/images/doctor-neha.png" alt="Dr. Neha Patel" className={styles.image} />
            </div>
            <div className={styles.content}>
               <h3 className={styles.name}>Dr. Neha Patel</h3>
               <p className={styles.qualifications}>BHMS (Homeopathy)</p>
               <p className={styles.experience}>15+ Years Experience</p>
               <p className={styles.description}>Expert in homeopathic remedies for skin, hair, and digestive health. Renowned for zero-side-effect treatments.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
               <img src="/images/doctor-siddharth.png" alt="Dr. Vikram Singh" className={styles.image} />
            </div>
            <div className={styles.content}>
               <h3 className={styles.name}>Dr. Vikram Singh</h3>
               <p className={styles.qualifications}>MBBS, MD (General Medicine)</p>
               <p className={styles.experience}>18+ Years Experience</p>
               <p className={styles.description}>Specialist in integrative general medicine, combining modern clinical diagnostics with holistic health recovery protocols.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
