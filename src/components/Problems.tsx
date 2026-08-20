import React from 'react';
import styles from './Problems.module.css';
import { ShieldAlert, AlertCircle, UserX, HelpCircle } from 'lucide-react';

const problemsList = [
  {
    enTitle: "Changes in desire, confidence, or comfort",
    hiTitle: "इच्छा, आत्मविश्वास या सहजता में बदलाव",
    icon: <UserX size={20} />
  },
  {
    enTitle: "Performance-related worry or stress",
    hiTitle: "प्रदर्शन को लेकर चिंता या तनाव",
    icon: <AlertCircle size={20} />
  },
  {
    enTitle: "Early discharge concerns",
    hiTitle: "जल्दी स्खलन से जुड़ी चिंता",
    icon: <ShieldAlert size={20} />
  },
  {
    enTitle: "Erection-related concerns",
    hiTitle: "इरेक्शन से संबंधित चिंता",
    icon: <ShieldAlert size={20} />
  },
  {
    enTitle: "Low energy, tiredness, or reduced vitality",
    hiTitle: "कम ऊर्जा, थकान या कमज़ोर महसूस होना",
    icon: <AlertCircle size={20} />
  },
  {
    enTitle: "Questions about Ayurveda or Homeopathy treatment support",
    hiTitle: "आयुर्वेद या होम्योपैथी उपचार सहयोग से जुड़े प्रश्न",
    icon: <HelpCircle size={20} />
  }
];

const delayReasons = [
  {
    enTitle: "Privacy concerns",
    hiTitle: "गोपनीयता की चिंता",
    enDesc: "Worry about sharing personal details or records.",
    hiDesc: "व्यक्तिगत विवरण या रिकॉर्ड साझा करने की चिंता।",
    image: "/images/delay-privacy.png"
  },
  {
    enTitle: "Fear of judgement",
    hiTitle: "जज किए जाने का डर",
    enDesc: "Anxiety about talking to standard clinics without privacy.",
    hiDesc: "बिना गोपनीयता के सामान्य क्लीनिकों में बात करने की चिंता।",
    image: "/images/delay-judgment.png"
  },
  {
    enTitle: "Confusing advice online",
    hiTitle: "ऑनलाइन विरोधाभासी सलाह",
    enDesc: "Confusing or contradictory tips found on internet search results.",
    hiDesc: "इंटरनेट खोज परिणामों पर पाई जाने वाली भ्रामक या विरोधाभासी युक्तियाँ।",
    image: "/images/delay-confusing.png"
  },
  {
    enTitle: "Not knowing the process",
    hiTitle: "परामर्श कैसा होगा, यह न जानना",
    enDesc: "Uncertainty of what a digital private consultation will be like.",
    hiDesc: "डिजिटल निजी परामर्श कैसा होगा इसकी अनिश्चितता।",
    image: "/images/delay-process.png"
  }
];

const Problems: React.FC = () => {
  return (
    <section id="problems-awareness" className={`section-padding ${styles.problemsSection}`}>
      <div className="wide-container">

        {/* Section 3: Problem Awareness */}
        <div className={styles.sectionHeader}>
          <h2 className="section-title text-center">
            You Are Not Alone The Concern May Be <span className="highlight">Bigger Than One Symptom</span>
          </h2>
          <p className={styles.hiSubtitle}>
            आप अकेले नहीं हैं: चिंता एक लक्षण से बड़ी हो सकती है
          </p>
          <p className="section-subtitle text-center">
            Intimate wellbeing can be influenced by stress, sleep, daily routine, relationship pressure, diet, activity, and general health. A thoughtful consultation looks beyond a single complaint.
            <span className={styles.hiBlockText}>
              अंतरंग स्वास्थ्य पर तनाव, नींद, दिनचर्या, रिश्तों का दबाव, आहार, गतिविधि और सामान्य स्वास्थ्य का प्रभाव पड़ सकता है। एक समझदारी भरा परामर्श केवल एक शिकायत तक सीमित नहीं रहता।
            </span>
          </p>
        </div>

        {/* Discussions Grid */}
        <div className={styles.topicHeader}>
          <h3>You may want to discuss | आप इन विषयों पर चर्चा कर सकते हैं</h3>
        </div>
        <div className={styles.problemsGrid}>
          {problemsList.map((prob, idx) => (
            <div key={idx} className={styles.problemCard}>
              <div className={styles.iconWrapper}>{prob.icon}</div>
              <div className={styles.cardContent}>
                <p className={styles.enText}>{prob.enTitle}</p>
                <p className={styles.hiText}>{prob.hiTitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Respectful Framing Block */}
        <div className={styles.framingCard}>
          <div className={styles.framingHeader}>
            <span className={styles.badgeEn}>RESPECTFUL FRAMING</span>
            <span className={styles.badgeHi}>सम्मानजनक दृष्टिकोण</span>
          </div>
          <p className={styles.framingEn}>
            Every person’s situation is different. A consultation helps determine whether Ayurveda- or Homeopathy-based treatment support is appropriate—and when medical evaluation may be needed.
          </p>
          <p className={styles.framingHi}>
            हर व्यक्ति की स्थिति अलग होती है। परामर्श से समझने में मदद मिलती है कि आयुर्वेद या होम्योपैथी-आधारित उपचार सहयोग उपयुक्त है या चिकित्सकीय जाँच आवश्यक है।
          </p>
        </div>

        {/* Section 4: Why people delay getting support */}
        <div className={styles.sectionHeader} style={{ marginTop: '2.5rem' }}>
          <h2 className="section-title text-center">
            Why People Delay <span className="highlight">Getting Support</span>
          </h2>
          <p className={styles.hiSubtitle}>
            लोग सहायता लेने में देरी क्यों करते हैं
          </p>
          <p className="section-subtitle text-center">
            Many people wait because the topic feels personal, they are unsure whom to trust, or they hope the concern will settle on its own. Delaying a conversation can also mean carrying avoidable worry in silence.
            <span className={styles.hiBlockText}>
              बहुत लोग इसलिए इंतज़ार करते हैं क्योंकि विषय निजी लगता है, भरोसेमंद व्यक्ति का पता नहीं होता, या वे सोचते हैं कि समस्या अपने आप ठीक हो जाएगी। बात टालने से मन में अनावश्यक चिंता बनी रह सकती है।
            </span>
          </p>
        </div>

        {/* Delay Reasons Grid */}
        <div className={styles.delayGrid}>
          {delayReasons.map((reason, idx) => (
            <div key={idx} className={styles.delayCard}>
              <div className={styles.delayCardHeader}>
                <div className={styles.numberBadge}>
                  <img
                    src={reason.image}
                    alt={reason.enTitle}
                    className={styles.delayIcon}
                  />
                </div>
                <div>
                  <h4 className={styles.delayEnTitle}>{reason.enTitle}</h4>
                  <h4 className={styles.delayHiTitle}>{reason.hiTitle}</h4>
                </div>
              </div>
              <p className={styles.delayEnDesc}>{reason.enDesc}</p>
              <p className={styles.delayHiDesc}>{reason.hiDesc}</p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Problems;
