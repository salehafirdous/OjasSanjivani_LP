import React from 'react';
import styles from './Process.module.css';
import { MessageSquare, Stethoscope, ClipboardList, RefreshCw } from 'lucide-react';

const consultationSteps = [
  {
    number: "01",
    enTitle: "Share your concern",
    hiTitle: "अपनी चिंता बताएं",
    enDesc: "Complete a short private form or request a callback.",
    hiDesc: "एक छोटा निजी फॉर्म भरें या कॉलबैक का अनुरोध करें।",
    icon: <MessageSquare size={24} />
  },
  {
    number: "02",
    enTitle: "Speak with a practitioner",
    hiTitle: "चिकित्सक से बात करें",
    enDesc: "Discuss relevant concerns, routine, and questions in a respectful setting.",
    hiDesc: "सम्मानजनक वातावरण में अपनी चिंता, दिनचर्या और प्रश्नों पर बात करें।",
    icon: <Stethoscope size={24} />
  },
  {
    number: "03",
    enTitle: "Receive a considered plan",
    hiTitle: "सोच-समझकर बनाई योजना पाएं",
    enDesc: "Receive guidance on appropriate next steps, which may include lifestyle, diet, or an Ayurveda/Homeopathy treatment pathway where appropriate.",
    hiDesc: "उपयुक्त अगले कदमों का मार्गदर्शन पाएं, जिसमें जीवनशैली, आहार या जहाँ उपयुक्त हो, आयुर्वेद/होम्योपैथी उपचार योजना शामिल हो सकती है।",
    icon: <ClipboardList size={24} />
  },
  {
    number: "04",
    enTitle: "Continue with support",
    hiTitle: "सहयोग के साथ आगे बढ़ें",
    enDesc: "Use the agreed follow-up pathway where offered and appropriate.",
    hiDesc: "जहाँ उपलब्ध और उपयुक्त हो, तय फॉलो-अप प्रक्रिया के साथ आगे बढ़ें।",
    icon: <RefreshCw size={24} />
  }
];

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className={`section-padding ${styles.processSection}`}>
      <div className="wide-container">
        
        {/* Section 13: How consultation works */}
        <div className={styles.sectionHeader}>
          <h2 className="section-title text-center">
            How the Consultation <span className="highlight">Works</span>
          </h2>
          <p className={styles.hiSubtitle}>
            परामर्श कैसे काम करता है
          </p>
          <p className="section-subtitle text-center">
            Experience a private, structured clinical recovery process in 4 simple steps.
            <span className={styles.hiBlockText}>
              4 सरल चरणों में एक निजी, व्यवस्थित नैदानिक पुनर्प्राप्ति प्रक्रिया का अनुभव करें।
            </span>
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.grid}>
            {consultationSteps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.badgeWrapper}>
                  <div className={styles.iconWrapper}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{step.enTitle}</h3>
                <h4 className={styles.stepTitleHi}>{step.hiTitle}</h4>
                <p className={styles.stepDesc}>{step.enDesc}</p>
                <p className={styles.stepDescHi}>{step.hiDesc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Process;
