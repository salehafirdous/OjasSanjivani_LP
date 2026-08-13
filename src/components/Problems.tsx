import React from 'react';
import styles from './Problems.module.css';
import { 
  Activity, 
  Heart,
  Shield,
  Stethoscope,
  CheckCircle2
} from 'lucide-react';

const categories = [
  {
    title: "Men's Health",
    icon: <Shield size={20} />,
    items: [
      "Erectile Dysfunction (ED)",
      "Premature Ejaculation",
      "Low Libido",
      "Male Infertility",
      "Low Testosterone",
      "Prostate Issues (BPH)"
    ],
    btnText: "Book Now",
    btnClass: styles.btnLight
  },
  {
    title: "Women's Health",
    icon: <Activity size={20} />,
    items: [
      "Female Infertility",
      "PCOS / PCOD",
      "Hormonal Imbalance",
      "Irregular Menstruation",
      "Menopausal Issues",
      "Thyroid Disorders"
    ],
    btnText: "Book Now",
    btnClass: styles.btnLight
  },
  {
    title: "Chronic Diseases",
    icon: <Stethoscope size={20} />,
    items: [
      "Diabetes Management",
      "Hypertension / High BP",
      "Joint Pain & Arthritis",
      "Asthma & Respiratory",
      "Digestive Disorders (IBS)",
      "High Cholesterol"
    ],
    btnText: "Book Now",
    btnClass: styles.btnLight
  },
  {
    title: "General Wellness",
    icon: <Heart size={20} />,
    items: [
      "Hair Fall & Alopecia",
      "Acne & Skin Conditions",
      "Weight Management",
      "Stress & Anxiety",
      "Insomnia & Sleep Issues",
      "Migraines & Headaches"
    ],
    btnText: "WhatsApp Expert",
    btnClass: styles.btnGreen
  }
];

const Problems: React.FC = () => {
  return (
    <section id="services" className={`section-padding ${styles.problemsSection}`}>
      <div className="wide-container">
        <div className="text-center">
          <h2 className="section-title">Diseases We <span className="highlight">Treat</span></h2>
          <p className="section-subtitle">
            Experience the healing power of Ayurveda and Homeopathy.<br />We provide effective, natural treatments for a wide range of chronic conditions.
          </p>
        </div>
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <ul className={styles.list}>
                {category.items.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#lead-form-section" className={`${styles.btn} ${category.btnClass}`}>
                {category.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
