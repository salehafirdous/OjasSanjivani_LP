import React from 'react';
import styles from './MensWellness.module.css';
import { Check, ShieldAlert } from 'lucide-react';

const conditions = [
  "Erectile Dysfunction (ED)",
  "Premature Ejaculation (PE)",
  "Delayed Ejaculation",
  "Anejaculation (Inability to Ejaculate)",
  "Priapism (Prolonged Erection)",
  "Low Testosterone",
  "Sexual / Performance Anxiety",
  "Low Libido (Low Sexual Desire)",
  "Diabetes-related Erectile Dysfunction"
];

const MensWellness: React.FC = () => {
  return (
    <section id="mens-wellness" className={`section-padding ${styles.section}`}>
      <div className="wide-container">
        <div className={styles.grid}>
          {/* Left Column: Context & Message */}
          <div className={styles.textColumn}>
            <h2 className="section-title text-left">
              Specialized Solutions for <span className="highlight">Men's Intimate Health</span>
            </h2>
            <p className={styles.description}>
              Intimate health concerns are often closely linked to daily stress, lifestyle imbalances, or underlying clinical conditions like diabetes. Our specialized Ayurvedic and Homeopathic protocols work in synergy to improve blood circulation, balance testosterone levels naturally, and restore confidence.
            </p>
            <a href="#lead-form-section" className={`btn-primary ${styles.consultBtn}`}>
              Consult Expert Confidentially
            </a>
          </div>

          {/* Right Column: Conditions Grid List */}
          <div className={styles.listColumn}>
            <div className={styles.listHeader}>
              <ShieldAlert size={20} className={styles.alertIcon} />
              <h3>Intimate Conditions We Treat</h3>
            </div>
            <div className={styles.conditionsGrid}>
              {conditions.map((item, index) => (
                <div key={index} className={styles.conditionCard}>
                  <div className={styles.checkWrapper}>
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MensWellness;
