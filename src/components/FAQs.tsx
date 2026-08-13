import React, { useState } from 'react';
import styles from './FAQs.module.css';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Ojas Sanjivani?",
    answer: "Ojas Sanjivani is a premium digital healthcare platform that provides online consultations with certified Ayurvedic and Homeopathic doctors, customized wellness plans, and authentic medicine delivery."
  },
  {
    question: "How does the online consultation work?",
    answer: "Simply book a free consultation through our website. One of our health experts will connect with you via a secure video or audio call to understand your health concerns and prescribe a tailored treatment plan."
  },
  {
    question: "Are the treatments safe and natural?",
    answer: "Yes, all our treatments are 100% natural, evidence-based Ayurveda and Homeopathy remedies. They are prescribed by certified doctors and have zero known side effects when taken as directed."
  },
  {
    question: "How long does it take to see results?",
    answer: "Since we treat the root cause of the disease rather than just suppressing symptoms, results vary by condition. However, most patients report noticeable improvements within 2 to 4 weeks of starting the treatment."
  },
  {
    question: "Do you deliver medicines home?",
    answer: "Yes, once your consultation is complete, our pharmacy dispatches authentic, high-quality medicines directly to your doorstep with secure and discreet packaging."
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
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
