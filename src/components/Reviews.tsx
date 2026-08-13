import React, { useState } from 'react';
import styles from './Reviews.module.css';
import { Star, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, HeartPulse } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "R. Sharma",
    location: "Delhi",
    text: "I was suffering from ED for 2 years. I tried many allopathic medicines but they only gave temporary results with side effects. Ojas Sanjivani's 3-month course completely cured me naturally.",
    rating: 5,
    tag: "Ayurvedic Healing"
  },
  {
    id: 2,
    name: "Vikram & Sneha V.",
    location: "Mumbai",
    text: "Performance anxiety was ruining our marriage. The consultation was very discreet, and the doctor was highly understanding. The natural drops worked wonders within just 3 weeks.",
    rating: 5,
    tag: "Fast Relief"
  },
  {
    id: 3,
    name: "Amit K.",
    location: "Bangalore",
    text: "Due to diabetes, I had lost my libido and suffered from ED. The personalized treatment plan not only improved my sexual health but also boosted my overall energy levels. Highly recommended.",
    rating: 5,
    tag: "Holistic Care"
  },
  {
    id: 4,
    name: "Rajesh P.",
    location: "Pune",
    text: "I was almost on the verge of giving up after failing to get results elsewhere. Consulting the experts here was the best decision. I feel completely rejuvenated and confident.",
    rating: 5,
    tag: "Confidence Restored"
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className={`section-padding ${styles.reviewsSection}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Loved & Trusted by <span className="highlight">3000+ Patients</span></h2>
          <p className="section-subtitle">
            Real stories of hope, perseverance, and joy from patients who reclaimed their health and confidence.
          </p>
        </div>
        
        <div className={styles.contentWrapper}>
          
          <div className={styles.leftColumn}>
            <div className={styles.googleReviewCard}>
              <div className={styles.googleScoreBadge}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className={styles.googleScoreRow}>
                  <span className={styles.googleScore}>4.9</span>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p className={styles.googleText}>Based on 320+ patient reviews on Google Maps</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={24} color="var(--primary)" />
              </div>
              <div className={styles.featureText}>
                <h4>100% Confidential Care</h4>
                <p>Your records and consultation details are protected under strict security guidelines.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <HeartPulse size={24} color="var(--primary)" />
              </div>
              <div className={styles.featureText}>
                <h4>Compassionate Ethics</h4>
                <p>No unnecessary medicines recommended. Patient-first treatment approach.</p>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.reviewCard}>
              <div className={styles.quoteMark}>"</div>
              
              <div className={styles.stars} style={{marginBottom: '1rem'}}>
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              
              <p className={styles.reviewText}>"{currentReview.text}"</p>
              
              <div className={styles.authorSection}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {currentReview.name}
                  </h4>
                  <span className={styles.authorAge}>{currentReview.location}</span>
                </div>
                <div className={styles.tag}>{currentReview.tag}</div>
              </div>
            </div>

            <div className={styles.sliderControls}>
              <button onClick={prevReview} className={styles.navBtn} aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className={styles.dots}>
                {reviews.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  ></div>
                ))}
              </div>
              <button onClick={nextReview} className={styles.navBtn} aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Reviews;
