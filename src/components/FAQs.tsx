import React, { useState } from 'react';
import styles from './FAQs.module.css';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Ojas Sanjivani?",
    answer: "Ojas Sanjivani is a premium digital healthcare platform that provides online consultations with certified Ayurvedic and Homeopathic doctors, customized wellness plans, and authentic medicine delivery.",
    answerHi: "ओजस संजीवनी एक प्रीमियम डिजिटल हेल्थकेयर प्लेटफॉर्म है जो प्रमाणित आयुर्वेदिक और होम्योपैथिक डॉक्टरों के साथ ऑनलाइन परामर्श, अनुकूलित वेलनेस प्लान और प्रामाणिक दवा वितरण प्रदान करता है।"
  },
  {
    question: "How does the online consultation work?",
    answer: "Simply book a free consultation through our website. One of our health experts will connect with you via a secure video or audio call to understand your health concerns and prescribe a tailored treatment plan.",
    answerHi: "हमारी वेबसाइट के माध्यम से बस एक निःशुल्क परामर्श बुक करें। हमारे स्वास्थ्य विशेषज्ञों में से एक सुरक्षित वीडियो या ऑडियो कॉल के माध्यम से आपसे जुड़ेंगे ताकि आपकी स्वास्थ्य चिंताओं को समझ सकें और एक अनुकूलित उपचार योजना लिख सकें।"
  },
  {
    question: "Are the treatments safe and natural?",
    answer: "Yes, all our treatments are 100% natural, evidence-based Ayurveda and Homeopathy remedies. They are prescribed by certified doctors and have zero known side effects when taken as directed.",
    answerHi: "हाँ, हमारे सभी उपचार 100% प्राकृतिक, साक्ष्य-आधारित आयुर्वेद और होम्योपैथी उपचार हैं। वे प्रमाणित डॉक्टरों द्वारा निर्धारित किए जाते हैं और निर्देशानुसार लेने पर कोई ज्ञात दुष्प्रभाव नहीं होते हैं।"
  },
  {
    question: "How long does it take to see results?",
    answer: "Since we treat the root cause of the disease rather than just suppressing symptoms, results vary by condition. However, most patients report noticeable improvements within 2 to 4 weeks of starting the treatment.",
    answerHi: "चूँकि हम केवल लक्षणों को दबाने के बजाय बीमारी के मूल कारण का इलाज करते हैं, इसलिए परिणाम स्थिति के अनुसार भिन्न होते हैं। हालांकि, अधिकांश रोगी उपचार शुरू करने के 2 से 4 सप्ताह के भीतर ध्यान देने योग्य सुधार की रिपोर्ट करते हैं।"
  },
  {
    question: "Do you deliver medicines home?",
    answer: "Yes, once your consultation is complete, our pharmacy dispatches authentic, high-quality medicines directly to your doorstep with secure and discreet packaging.",
    answerHi: "हाँ, एक बार जब आपका परामर्श पूरा हो जाता है, तो हमारी फार्मेसी सीधे आपके दरवाजे पर सुरक्षित और गोपनीय पैकेजिंग के साथ प्रामाणिक, उच्च गुणवत्ता वाली दवाएं भेजती है।"
  }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className={`section-padding ${styles.faqsSection}`}>
      <div className="wide-container">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className={`section-subtitle ${styles.faqSubtitle}`}>
            Find answers to common questions about our treatments and consultation process.
          </p>
        </div>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                <h3>{faq.question}</h3>
                <div className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
              <div 
                className={styles.faqAnswer}
                style={{ 
                  maxHeight: openIndex === index ? '300px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p>{faq.answer}</p>
                <p className={styles.hiAnswer}>{faq.answerHi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
