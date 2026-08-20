import React from 'react';
import styles from './WhyOjas.module.css';
import { Check } from 'lucide-react';

const whyOjasPoints = [
  {
    enTitle: "Privacy-first experience",
    hiTitle: "गोपनीयता-प्राथमिक अनुभव",
    enDesc: "Built around a sensitive category with zero exposure.",
    hiDesc: "संवेदनशील विषय को ध्यान में रखकर बनाया गया, जिसमें कोई जानकारी सार्वजनिक नहीं होती।"
  },
  {
    enTitle: "Practitioner-led consultation",
    hiTitle: "चिकित्सक-निर्देशित परामर्श",
    enDesc: "Guided by certified practitioners, avoiding self-diagnosis.",
    hiDesc: "प्रमाणित चिकित्सकों द्वारा मार्गदर्शित, स्वयं-निदान से बचें।"
  },
  {
    enTitle: "Personalised next steps",
    hiTitle: "व्यक्तिगत अगले कदम",
    enDesc: "A custom plan made for you, not a template routine.",
    hiDesc: "आपके लिए बनाई गई एक कस्टम योजना, कोई सामान्य रूटीन नहीं।"
  },
  {
    enTitle: "Clear, respectful communication in English & Hindi",
    hiTitle: "अंग्रेज़ी + हिंदी में स्पष्ट और सम्मानजनक संवाद",
    enDesc: "Discuss in the language you are most comfortable with.",
    hiDesc: "उस भाषा में चर्चा करें जिसमें आप सबसे अधिक सहज हैं।"
  }
];

const WhyOjas: React.FC = () => {
  return (
    <section id="why-ojas" className={`section-padding ${styles.whyOjasSection}`}>
      <div className="wide-container">

        {/* Section 9: Why Ojas Sanjivani */}
        <div className={styles.grid}>
          {/* Left Column: Points list */}
          <div className={styles.pointsCol}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeEn}>WHY OJAS SANJIVANI</span>
              <span className={styles.badgeHi}>ओजस संजीवनी क्यों</span>
            </div>

            <h2 className={styles.headline}>
              A Safe Space for Your <span className="highlight">Intimate Health Journey</span>
            </h2>
            <p className={styles.hiHeadline}>
              आपके अंतरंग स्वास्थ्य यात्रा के लिए एक सुरक्षित स्थान
            </p>

            <div className={styles.pointsList}>
              {whyOjasPoints.map((point, idx) => (
                <div key={idx} className={styles.pointCard}>
                  <div className={styles.checkWrapper}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className={styles.pointEnTitle}>{point.enTitle}</h4>
                    <h5 className={styles.pointHiTitle}>{point.hiTitle}</h5>
                    <p className={styles.pointEnDesc}>{point.enDesc}</p>
                    <p className={styles.pointHiDesc}>{point.hiDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Brand Promise & 15-day assurance */}
          <div className={styles.promiseCol}>

            {/* Brand Promise Badge */}
            <div className={styles.brandPromiseCard}>
              <span className={styles.promiseBadge}>BRAND PROMISE</span>
              <h3 className={styles.promiseEn}>
                Private conversation. Thoughtful guidance. Practical next steps.
              </h3>
              <p className={styles.promiseHi}>
                निजी बातचीत। समझदारी भरा मार्गदर्शन। व्यावहारिक अगले कदम।
              </p>
            </div>

            {/* Section 10: 15-day assurance */}
            <div className={styles.assuranceCard}>
              <div className={styles.sectionBadge}>
                <span className={styles.badgeEn}>15-DAY SUPPORT ASSURANCE</span>
                <span className={styles.badgeHi}>15-दिन का सहयोग आश्वासन</span>
              </div>

              <h4 className={styles.assuranceEnHeadline}>
                Begin with clarity: if, within 15 days of starting the recommended plan, you feel the guidance has not been useful for your situation, contact the Ojas support team for a review of your next steps under the published policy.
              </h4>
              <p className={styles.assuranceHiHeadline}>
                स्पष्टता के साथ शुरुआत करें: यदि सुझाई गई योजना शुरू करने के 15 दिनों के भीतर आपको लगे कि यह मार्गदर्शन आपकी स्थिति के लिए उपयोगी नहीं रहा, तो प्रकाशित नीति के अनुसार अगले कदमों की समीक्षा के लिए ओजस सपोर्ट टीम से संपर्क करें।
              </p>

              <div className={styles.policyNotice}>
                <p className={styles.policyEn}>
                  This is an assurance of support and review—not a promise of a medical outcome, cure, or guaranteed result. Eligibility, exclusions, refund/replacement terms, and the date from which the 15-day period is calculated must be stated in the policy.
                </p>
                <p className={styles.policyHi}>
                  यह सहयोग और समीक्षा का आश्वासन है—चिकित्सकीय परिणाम, इलाज या गारंटीड नतीजे का वादा नहीं। पात्रता, अपवाद, रिफंड/रिप्लेसमेंट की शर्तें और 15 दिन की गणना की शुरुआत नीति में स्पष्ट होनी चाहिए।
                </p>
              </div>

              <div className={styles.ctaWrapper}>
                <a href="#lead-form-section" className="btn-primary">
                  <span>See if a Private Consultation Is Right for You</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyOjas;
