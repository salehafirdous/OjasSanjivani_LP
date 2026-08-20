import React from 'react';
import styles from './Specialists.module.css';

const specialistsList = [
  {
    name: "Dr. Rajeev Sharma",
    qualifications: "BAMS, MD (Ayurveda)",
    registration: "Reg. No: AY-2049/A",
    experience: "25+ Years Experience",
    image: "/images/doctor-rajeev.png",
    philosophyEn: "My approach is to listen without judgement, understand the wider context, and recommend responsible next steps.",
    philosophyHi: "मेरा तरीका है बिना जजमेंट के सुनना, पूरी परिस्थिति समझना और जिम्मेदार अगले कदम सुझाना।"
  },
  {
    name: "Dr. Neha Patel",
    qualifications: "BHMS (Homeopathy)",
    registration: "Reg. No: HOM-9214/B",
    experience: "15+ Years Experience",
    image: "/images/doctor-neha.png",
    philosophyEn: "I focus on mapping the complete timeline of your routine and stress factors to recommend pure, safe formulations.",
    philosophyHi: "मैं शुद्ध और सुरक्षित उपचार सुझाने के लिए आपकी दिनचर्या और तनाव के कारकों की पूरी समय-सीमा का आकलन करने पर ध्यान केंद्रित करती हूँ।"
  },
  {
    name: "Dr. Vikram Singh",
    qualifications: "MBBS, MD (General Medicine)",
    registration: "Reg. No: MCI-84451/C",
    experience: "18+ Years Experience",
    image: "/images/doctor-siddharth.png",
    philosophyEn: "Integrating general clinical medicine with natural wellness allows us to offer safe, comprehensive health recovery.",
    philosophyHi: "प्राकृतिक वेलनेस के साथ सामान्य नैदानिक चिकित्सा को एकीकृत करने से हमें सुरक्षित, व्यापक स्वास्थ्य सुधार की पेशकश करने में मदद मिलती है।"
  }
];

const Specialists: React.FC = () => {
  return (
    <section id="practitioners" className={`section-padding ${styles.specialistsSection}`}>
      <div className="wide-container">
        
        {/* Section 11: Practitioner credibility */}
        <div className={styles.sectionHeader}>
          <h2 className="section-title text-center">
            Meet Our <span className="highlight">Medical Experts</span>
          </h2>
          <p className={styles.hiSubtitle}>
            हमारे चिकित्सा विशेषज्ञों से मिलें
          </p>
          <p className="section-subtitle text-center">
            Meet the practitioner who will guide your consultation. We maintain a calm, transparent profile with verified qualifications, registration details, experience, and consultation philosophy.
            <span className={styles.hiBlockText}>
              उस चिकित्सक से मिलें जो आपका परामर्श मार्गदर्शित करेंगे। हम योग्यताएँ, पंजीकरण विवरण, अनुभव और परामर्श दर्शन को शांत व पारदर्शी तरीके से प्रस्तुत करते हैं।
            </span>
          </p>
        </div>
        
        <div className={styles.grid}>
          {specialistsList.map((spec, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={spec.image} alt={spec.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{spec.name}</h3>
                <p className={styles.qualifications}>{spec.qualifications}</p>
                <div className={styles.metaRow}>
                  <span className={styles.regNo}>{spec.registration}</span>
                  <span className={styles.exp}>{spec.experience}</span>
                </div>
                <div className={styles.philosophyBox}>
                  <p className={styles.philEn}>"{spec.philosophyEn}"</p>
                  <p className={styles.philHi}>"{spec.philosophyHi}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specialists;
