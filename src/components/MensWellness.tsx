import React from 'react';
import styles from './MensWellness.module.css';
import { Check } from 'lucide-react';

const consultationBenefits = [
  {
    enTitle: "Convenient from home",
    hiTitle: "घर से सुविधाजनक",
    desc: "No travel or crowded clinics. Speak from comfort."
  },
  {
    enTitle: "Respectful, non-judgmental conversation",
    hiTitle: "सम्मानजनक, बिना जजमेंट की बातचीत",
    desc: "A safe space to discuss personal issues openly."
  },
  {
    enTitle: "Guidance tailored to your stated needs",
    hiTitle: "आपकी बताई ज़रूरत के अनुसार मार्गदर्शन",
    desc: "No template replies. Directly focused on your health."
  },
  {
    enTitle: "Follow-up pathway where clinically appropriate",
    hiTitle: "जहाँ उपयुक्त हो, फॉलो-अप की सुविधा",
    desc: "Continuous care and check-ins throughout recovery."
  }
];

const frameworkSteps = [
  {
    number: "01",
    enTitle: "Understand",
    hiTitle: "समझें",
    enDesc: "Understand your goals and concerns.",
    hiDesc: "आपके लक्ष्य और चिंताओं को समझें।"
  },
  {
    number: "02",
    enTitle: "Assess",
    hiTitle: "आकलन करें",
    enDesc: "Assess relevant routines and health context.",
    hiDesc: "दिनचर्या और स्वास्थ्य की प्रासंगिक जानकारी देखें।"
  },
  {
    number: "03",
    enTitle: "Personalise",
    hiTitle: "व्यक्तिगत योजना बनाएँ",
    enDesc: "Personalise lifestyle, food, and Ayurveda or Homeopathy treatment guidance where appropriate.",
    hiDesc: "जहाँ उपयुक्त हो, जीवनशैली, आहार और आयुर्वेद या होम्योपैथी उपचार मार्गदर्शन को व्यक्तिगत बनाएँ।"
  },
  {
    number: "04",
    enTitle: "Support",
    hiTitle: "सहयोग दें",
    enDesc: "Support with clear check-ins and next steps.",
    hiDesc: "स्पष्ट फॉलो-अप और अगले कदमों के साथ सहयोग दें।"
  }
];

const MensWellness: React.FC = () => {
  return (
    <section id="private-consultation" className={`section-padding ${styles.section}`}>
      <div className="wide-container">

        {/* Section 5: Private online consultation */}
        <div className={styles.grid}>
          {/* Left Side: Context */}
          <div className={styles.contentCol}>

            <h2 className={styles.headline}>
              Your Time Is Yours Share <span className="highlight">Only What Is Relevant</span>
            </h2>
            <p className={styles.hiHeadline}>
              आपका समय आपका है: केवल वही साझा करें जो ज़रूरी हो
            </p>

            <p className={styles.desc}>
              Share only what is relevant, ask questions in your preferred language, and receive a clear next-step recommendation.
            </p>
            <p className={styles.hiDesc}>
              केवल वही साझा करें जो ज़रूरी हो, अपनी पसंदीदा भाषा में सवाल पूछें और आगे की स्पष्ट दिशा पाएँ।
            </p>

            <div className={styles.ctaWrapper}>
              <a href="#lead-form-section" className="btn-primary">
                <span>Talk Privately With a Practitioner</span>
              </a>
            </div>
          </div>

          {/* Right Side: Benefits list */}
          <div className={styles.benefitsCol}>
            <div className={styles.benefitsList}>
              {consultationBenefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefitCard}>
                  <div className={styles.checkIconWrapper}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className={styles.benefitEn}>{benefit.enTitle}</h4>
                    <p className={styles.benefitHi}>{benefit.hiTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 6: The Ojas Personalised Wellness Approach */}
        <div className={styles.approachContainer}>
          <div className={styles.sectionHeader}>
            <h2 className="section-title text-center">
              The Ojas Personalised <span className="highlight">Wellness Approach™</span>
            </h2>
            <p className={styles.hiSubtitle}>
              ओजस व्यक्तिगत वेलनेस दृष्टिकोण
            </p>
            <p className="section-subtitle text-center">
              Not a generic product pitch. The Ojas approach begins with listening, then connects your concern with daily habits, general wellbeing, and relevant history before recommending next steps or a treatment pathway where appropriate.
              <span className={styles.hiBlockText}>
                सिर्फ सामान्य प्रोडक्ट की सलाह नहीं। ओजस का तरीका पहले आपकी बात सुनता है, फिर आपकी चिंता को दिनचर्या, सामान्य स्वास्थ्य और प्रासंगिक इतिहास से जोड़कर आगे की दिशा या जहाँ उपयुक्त हो, उपचार योजना सुझाता है।
              </span>
            </p>
          </div>

          {/* 4-Step Grid */}
          <div className={styles.frameworkGrid}>
            {frameworkSteps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <div>
                    <h4 className={styles.stepEnTitle}>{step.enTitle}</h4>
                    <h4 className={styles.stepHiTitle}>{step.hiTitle}</h4>
                  </div>
                </div>
                <p className={styles.stepEnDesc}>{step.enDesc}</p>
                <p className={styles.stepHiDesc}>{step.hiDesc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MensWellness;
