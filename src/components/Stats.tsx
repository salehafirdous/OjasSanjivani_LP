import React from 'react';
import styles from './Stats.module.css';

const statsData = [
  {
    title: "1.2M+",
    subtitle: "Patients Healed",
    desc: "Successful recovery stories across India"
  },
  {
    title: "500+",
    subtitle: "Expert Clinicians",
    desc: "Ayurveda & Homeopathy specialists"
  },
  {
    title: "100%",
    subtitle: "Authentic Medicines",
    desc: "Lab-tested, certified organic formulations"
  },
  {
    title: "4.8★",
    subtitle: "Patient Satisfaction",
    desc: "Based on 50,000+ verified ratings"
  }
];

const Stats: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className="wide-container">
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statTopBorder}></div>
              <h3 className={styles.statTitle}>{stat.title}</h3>
              <h4 className={styles.statSubtitle}>{stat.subtitle}</h4>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
