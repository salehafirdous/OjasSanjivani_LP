import React from 'react';
import styles from './Solutions.module.css';
import { Leaf, Award, ShieldCheck, HeartPulse } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className={`section-padding ${styles.solutionsSection}`}>
      <div className="wide-container">
        
        <div className={styles.grid}>
          <div className={styles.imageCol}>
             {/* We will use a placeholder image from unsplash that fits the theme */}
             <div className={styles.imageWrapper}>
               <img 
                 src="/images/solutions-ayurveda.png" 
                 alt="Natural Medicine Ingredients" 
                 className={styles.image}
               />
             </div>
             <div className={styles.bgShape}></div>
          </div>
          
          <div className={styles.contentCol}>
            <h2 className="section-title">The Natural Path to <span className="highlight">Reclaiming Your Vitality</span></h2>
            <p className={styles.description} style={{ fontWeight: 500, color: 'var(--text-main)' }}>
              Unlike conventional treatments that offer temporary fixes with side effects, our approach combines the ancient wisdom of Ayurveda with modern Homeopathy to treat the root cause of your health issues.
            </p>
            
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <Leaf size={24} />
                </div>
                <div>
                  <h4>100% Natural Formulations</h4>
                  <p>Lab-tested, certified organic ingredients with absolutely zero side effects.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4>Root-Cause Treatment</h4>
                  <p>We don't just mask the symptoms; we heal your body from within for lasting results.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4>Discreet & Confidential</h4>
                  <p>Consultations and medicine deliveries are 100% private and securely handled.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <Award size={24} />
                </div>
                <div>
                  <h4>Certified Experts</h4>
                  <p>Treated by a panel of 500+ specialized doctors with decades of clinical experience.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Solutions;
