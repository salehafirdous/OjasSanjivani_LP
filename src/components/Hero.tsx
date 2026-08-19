import React, { useState } from 'react';
import styles from './Hero.module.css';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitLead } from '../utils/api';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    preferredDate: '',
    consultationMode: '',
    medicalSystem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    // Extract UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    const utm_content = urlParams.get('utm_content');
    const utm_term = urlParams.get('utm_term');

    try {
      await submitLead({
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email || undefined,
        preferred_date: formData.preferredDate || undefined,
        consultation_mode: formData.consultationMode || undefined,
        medical_system: formData.medicalSystem || undefined,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        source: 'landing_page',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <video
          className={styles.heroVideo}
          src="/videos/hero-telehealth.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={`wide-container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Consult Top Ayurvedic & Homeopathic Doctors <span className={styles.highlight}>Online from Home</span>
            </h1>
            <p className={styles.subtitle}>
              Book an online consultation with experienced Ayurveda & Homeopathy doctors to treat chronic conditions and lifestyle disorders with zero side effects.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>100% Natural</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>No Side Effects</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>Expert Doctors</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.featureIcon} />
                <span>Private & Secure</span>
              </div>
            </div>

            <div className={styles.processWrapper}>
              <h4 className={styles.processTitle}>Online Consultation Flow:</h4>
              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h5>Book Free Call</h5>
                    <p>Fill out the quick form in 1 minute</p>
                  </div>
                </div>
                <div className={styles.stepConnector}>➔</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h5>Consult Specialist</h5>
                    <p>Private phone or video consultation</p>
                  </div>
                </div>
                <div className={styles.stepConnector}>➔</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h5>Start Recovery</h5>
                    <p>Medicines delivered to your doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroFormWrapper} id="lead-form-section">
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle2 size={64} className={styles.successIcon} />
                  </div>
                  <h3>Consultation Requested!</h3>
                  <p className={styles.successText}>
                    Thank you, <strong>{formData.name}</strong>. Your details have been received successfully.
                  </p>
                  <p className={styles.successSubtext}>
                    One of our medical experts will get back to you shortly on <strong>{formData.mobile}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        preferredDate: '',
                        consultationMode: '',
                        medicalSystem: '',
                      });
                    }} 
                    className={`btn-primary ${styles.resetBtn}`}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <h3>Book Your Free Consultation</h3>
                    <p>Speak with our experts confidentially in just a few minutes.</p>
                  </div>

                  <form className={styles.leadForm} onSubmit={handleSubmit}>
                    {errorMsg && (
                      <div className={styles.errorAlert}>
                        <AlertCircle size={20} className={styles.errorIcon} />
                        <span>{errorMsg}</span>
                      </div>
                    )}
                    
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        id="lead-form-name" 
                        placeholder="Full Name " 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number " 
                        required 
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="date" 
                        placeholder="Preferred Consultation Date" 
                        className={styles.dateInput} 
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <select 
                        className={styles.selectInput} 
                        value={formData.consultationMode}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Consultation Mode</option>
                        <option value="online">Online</option>
                        <option value="clinic">In Clinic visit</option>
                        <option value="phone">Phone call</option>
                      </select>
                    </div>

                    <div className={styles.radioGroupWrapper}>
                      <label className={styles.radioGroupLabel}>Choose Medical System </label>
                      <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                          <input 
                            type="radio" 
                            name="medical_system" 
                            value="ayurvedic" 
                            required 
                            checked={formData.medicalSystem === 'ayurvedic'}
                            onChange={(e) => setFormData({ ...formData, medicalSystem: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <span>Ayurvedic</span>
                        </label>
                        <label className={styles.radioLabel}>
                          <input 
                            type="radio" 
                            name="medical_system" 
                            value="homeopathic" 
                            required 
                            checked={formData.medicalSystem === 'homeopathic'}
                            onChange={(e) => setFormData({ ...formData, medicalSystem: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <span>Homeopathic</span>
                        </label>
                        <label className={styles.radioLabel}>
                          <input 
                            type="radio" 
                            name="medical_system" 
                            value="both" 
                            required 
                            checked={formData.medicalSystem === 'both'}
                            onChange={(e) => setFormData({ ...formData, medicalSystem: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <span>Both</span>
                        </label>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className={`btn-primary ${styles.submitBtn}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                          <Loader2 size={20} className={styles.spinner} />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Now'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
