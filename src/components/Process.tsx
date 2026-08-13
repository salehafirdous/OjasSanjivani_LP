import React from 'react';
import styles from './Process.module.css';
import { MessageSquare, Clipboard, Sparkles, Activity, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Connect with an expert Ayurvedic or Homeopathic doctor online from home.",
    icon: <MessageSquare size={24} />
  },
  {
    number: "02",
    title: "Diagnosis",
    desc: "Identify your unique biological imbalance and analyze medical history.",
    icon: <Clipboard size={24} />
  },
  {
    number: "03",
    title: "Personalized Treatment",
    desc: "Receive a custom diet chart, lifestyle advice, and pure herbal medicine.",
    icon: <Sparkles size={24} />
  },
  {
    number: "04",
    title: "Recovery",
    desc: "Begin gentle toxin elimination (detoxification) and cellular rejuvenation.",
    icon: <Activity size={24} />
  },
  {
    number: "05",
    title: "Wellness",
    desc: "Achieve strengthened long-term immunity, vigor, and balanced health.",
    icon: <ShieldCheck size={24} />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className={`section-padding ${styles.processSection}`}>
      <div className="wide-container">
        <div className="text-center">
          <h2 className="section-title">Your Journey to <span className="highlight">Natural Recovery</span></h2>
          <p className="section-subtitle">
            Our evidence-based clinical approach is structured into 5 simple steps to identify and treat the root cause of your chronic conditions.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.badgeWrapper}>
                  <div className={styles.iconWrapper}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
