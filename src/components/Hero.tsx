import React from 'react';
import styles from './Hero.module.css';
import { ShieldCheck, Stethoscope, HeartHandshake } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}>

        <div className={styles.heroOverlay}></div>
      </div>

      <div className={`wide-container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              A private, practitioner guided approach to <span className={styles.highlight}>intimate wellbeing</span> through Ayurveda and Homeopathy
            </h1>

            <p className={styles.subtitle}>
              Discuss your concerns respectfully with a qualified practitioner from the comfort of home. No awkward waiting rooms. No public discussion.
            </p>
            <p className={styles.hiSubtitle}>
              घर बैठे योग्य चिकित्सक से अपनी चिंता पर सम्मानपूर्वक बात करें। न असहज प्रतीक्षालय, न सार्वजनिक चर्चा।
            </p>

          </div>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Group 1 */}
          <div className={styles.marqueeGroup}>
            <div className={styles.marqueeItem}>
              <ShieldCheck size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Private online consultation</span>
              <span className={styles.marqueeTextHi}>निजी ऑनलाइन परामर्श</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
            <div className={styles.marqueeItem}>
              <Stethoscope size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Personalised Ayurveda & Homeopathy guidance</span>
              <span className={styles.marqueeTextHi}>व्यक्तिगत आयुर्वेद और होम्योपैथी मार्गदर्शन</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
            <div className={styles.marqueeItem}>
              <HeartHandshake size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Support for intimate-wellness</span>
              <span className={styles.marqueeTextHi}>अंतरंग स्वास्थ्य सहयोग</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
          </div>
          {/* Group 2 (Duplicate for infinite loop) */}
          <div className={styles.marqueeGroup}>
            <div className={styles.marqueeItem}>
              <ShieldCheck size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Private online consultation</span>
              <span className={styles.marqueeTextHi}>निजी ऑनलाइन परामर्श</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
            <div className={styles.marqueeItem}>
              <Stethoscope size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Personalised Ayurveda & Homeopathy guidance</span>
              <span className={styles.marqueeTextHi}>व्यक्तिगत आयुर्वेद और होम्योपैथी मार्गदर्शन</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
            <div className={styles.marqueeItem}>
              <HeartHandshake size={20} className={styles.marqueeIcon} />
              <span className={styles.marqueeTextEn}>Support for intimate-wellness</span>
              <span className={styles.marqueeTextHi}>अंतरंग स्वास्थ्य सहयोग</span>
            </div>
            <div className={styles.marqueeDivider}>•</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
