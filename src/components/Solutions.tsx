import React from 'react';
import styles from './Solutions.module.css';
import { CheckCircle } from 'lucide-react';

const concernsList = [
  {
    enTitle: "Confidence and performance-related concerns",
    hiTitle: "आत्मविश्वास और प्रदर्शन से जुड़ी चिंताएँ",
    image: "/images/concern-confidence.jpg"
  },
  {
    enTitle: "Early discharge concerns",
    hiTitle: "जल्दी स्खलन से जुड़ी चिंता",
    image: "/images/concern-discharge.jpg"
  },
  {
    enTitle: "Erection-related concerns",
    hiTitle: "इरेक्शन से संबंधित चिंता",
    image: "/images/concern-erection.jpg"
  },
  {
    enTitle: "Desire, energy, and vitality concerns",
    hiTitle: "इच्छा, ऊर्जा और जीवंतता से जुड़ी चिंताएँ",
    image: "/images/concern-desire.jpg"
  },
  {
    enTitle: "Stress, sleep and lifestyle factors affecting wellbeing",
    hiTitle: "तनाव, नींद और जीवनशैली के प्रभाव",
    image: "/images/concern-lifestyle.jpg"
  }
];

const medicalSystemPillars = [
  {
    enTitle: "Whole-routine perspective through Ayurveda",
    hiTitle: "आयुर्वेद के माध्यम से पूरी दिनचर्या पर ध्यान",
    desc: "Focusing on constitution (Prakriti), sleep cycle, and dietary habits."
  },
  {
    enTitle: "Individual case-based consideration for Homeopathy",
    hiTitle: "होम्योपैथी के लिए व्यक्तिगत केस-आधारित विचार",
    desc: "Targeted, highly specific natural dilutions based on unique context."
  },
  {
    enTitle: "Personalised conversation before any treatment recommendation",
    hiTitle: "किसी भी उपचार सलाह से पहले व्यक्तिगत बातचीत",
    desc: "No auto-generated prescription. Speak to a real human practitioner."
  },
  {
    enTitle: "Focus on responsible, sustainable daily habits",
    hiTitle: "जिम्मेदार और टिकाऊ दैनिक आदतों पर ध्यान",
    desc: "Long term health recovery built on everyday routine changes."
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="concerns-ayurveda" className={`section-padding ${styles.solutionsSection}`}>
      <div className="wide-container">

        {/* Section 7: Concerns covered */}
        <div className={styles.sectionHeader}>
          <h2 className="section-title text-center">
            Concerns We Can <span className="highlight">Discuss</span>
          </h2>
          <p className={styles.hiSubtitle}>
            विषय जिन पर हम चर्चा कर सकते हैं
          </p>
          <p className="section-subtitle text-center">
            The consultation is designed for people seeking guidance around intimate wellbeing, vitality and healthy routines. Final suitability depends on the practitioner’s assessment.
            <span className={styles.hiBlockText}>
              यह परामर्श अंतरंग स्वास्थ्य, ऊर्जा और स्वस्थ दिनचर्या से जुड़े मार्गदर्शन चाहने वालों के लिए है। अंतिम उपयुक्तता चिकित्सक के आकलन पर निर्भर करती है।
            </span>
          </p>
        </div>

        {/* Concerns list */}
        <div className={styles.concernsContainer}>
          <div className={styles.concernsGrid}>
            {concernsList.map((concern, idx) => (
              <div key={idx} className={styles.concernCard}>
                <div className={styles.concernCardImageWrapper}>
                  <img
                    src={concern.image}
                    alt={concern.enTitle}
                    className={styles.concernCardImage}
                  />
                </div>
                <div className={styles.concernCardContent}>
                  <div className={styles.titleRow}>
                    <div className={styles.bulletCheck}>
                      <CheckCircle size={18} />
                    </div>
                    <h4 className={styles.concernEn}>{concern.enTitle}</h4>
                  </div>
                  <p className={styles.concernHi}>{concern.hiTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Why Ayurveda & Homeopathy? */}
        <div className={styles.systemSection}>
          <div className={styles.sectionHeader}>
            <h2 className="section-title text-center">
              Why Ayurveda & <span className="highlight">Homeopathy?</span>
            </h2>
            <p className={styles.hiSubtitle}>
              आयुर्वेद और होम्योपैथी क्यों?
            </p>
            <p className={`section-subtitle text-center ${styles.systemDescText}`}>
              Ayurveda and Homeopathy are distinct systems of care. Ayurveda commonly considers constitution, daily routine, diet, sleep, stress management, and mindful habits. Homeopathy should be considered only after an individual case assessment by an appropriately qualified practitioner. At Ojas Sanjivani, both are presented as personalised treatment approaches—not as a substitute for emergency care or necessary medical evaluation.
              <span className={styles.hiBlockText}>
                आयुर्वेद और होम्योपैथी देखभाल की अलग-अलग पद्धतियाँ हैं। आयुर्वेद में आमतौर पर प्रकृति, दिनचर्या, आहार, नींद, तनाव प्रबंधन और सजग आदतों पर विचार किया जाता है। होम्योपैथी पर उचित योग्यता वाले चिकित्सक द्वारा व्यक्तिगत केस-आकलन के बाद ही विचार किया जाना चाहिए। ओजस संजीवनी में दोनों को व्यक्तिगत उपचार दृष्टिकोण के रूप में प्रस्तुत किया जाता है—आपातकालीन देखभाल या आवश्यक चिकित्सकीय जाँच के विकल्प के रूप में नहीं।
              </span>
            </p>
          </div>

          {/* Pillars list */}
          <div className={styles.pillarsGrid}>
            {medicalSystemPillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarBadge}>0{idx + 1}</div>
                  <div>
                    <h4 className={styles.pillarEnTitle}>{pillar.enTitle}</h4>
                    <h4 className={styles.pillarHiTitle}>{pillar.hiTitle}</h4>
                  </div>
                </div>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Solutions;
