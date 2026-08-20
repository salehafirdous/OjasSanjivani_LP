import React, { useState } from 'react';
import styles from './Hero.module.css';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitLead } from '../utils/api';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    language: 'english',
    contactTime: 'anytime',
    guidance: ''
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

    // Prepare note/guidance details including time & language preferences
    const guidanceNote = `Pref Lang: ${formData.language}. Pref Time: ${formData.contactTime}. Note: ${formData.guidance || 'None'}`;

    try {
      await submitLead({
        name: formData.name,
        mobile: formData.mobile,
        email: undefined,
        preferred_date: undefined,
        consultation_mode: undefined,
        medical_system: guidanceNote,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        source: 'Landing Page Lead',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <video
          className={styles.heroVideo}
          src="/videos/hero-indian-telehealth.mp4"
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
              A private, practitioner guided approach to <span className={styles.highlight}>intimate wellbeing</span> through Ayurveda and Homeopathy
            </h1>
            <p className={styles.hiTitle}>
              आयुर्वेद और होम्योपैथी के माध्यम से <span className={styles.highlight}>अंतरंग स्वास्थ्य</span> को समझने और सँभालने का निजी, चिकित्सक-निर्देशित दृष्टिकोण
            </p>

            <p className={styles.subtitle}>
              Discuss your concerns respectfully with a qualified practitioner from the comfort of home. No awkward waiting rooms. No public discussion.
            </p>
            <p className={styles.hiSubtitle}>
              घर बैठे योग्य चिकित्सक से अपनी चिंता पर सम्मानपूर्वक बात करें। न असहज प्रतीक्षालय, न सार्वजनिक चर्चा।
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <span className={styles.featEn}>Private online consultation</span>
                  <span className={styles.featHi}>निजी ऑनलाइन परामर्श</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <span className={styles.featEn}>Personalised Ayurveda and Homeopathy treatment guidance, where appropriate</span>
                  <span className={styles.featHi}>जहाँ उपयुक्त हो, व्यक्तिगत आयुर्वेद और होम्योपैथी उपचार मार्गदर्शन</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={20} className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <span className={styles.featEn}>Support for common intimate-wellness concerns</span>
                  <span className={styles.featHi}>सामान्य अंतरंग स्वास्थ्य संबंधी चिंताओं के लिए सहयोग</span>
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
                  <h3>Request Submitted Successfully!</h3>
                  <p className={styles.successText}>
                    Thank you, <strong>{formData.name}</strong>. We have received your request.
                  </p>
                  <p className={styles.successSubtext}>
                    An expert from the Ojas team will call you back on <strong>{formData.mobile}</strong> during your preferred slot: <strong>{formData.contactTime}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        language: 'english',
                        contactTime: 'anytime',
                        guidance: ''
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

                    {/* Name Input */}
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        <span>Name / नाम</span> <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Mobile Input */}
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        <span>Mobile number / मोबाइल नंबर</span> <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Language Preference */}
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        <span>Preferred language / पसंदीदा भाषा</span> <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="preferred_language_hero"
                            value="english"
                            checked={formData.language === 'english'}
                            onChange={() => setFormData({ ...formData, language: 'english' })}
                            disabled={isSubmitting}
                          />
                          <span>English / अंग्रेज़ी</span>
                        </label>
                        <label className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="preferred_language_hero"
                            value="hindi"
                            checked={formData.language === 'hindi'}
                            onChange={() => setFormData({ ...formData, language: 'hindi' })}
                            disabled={isSubmitting}
                          />
                          <span>Hindi / हिंदी</span>
                        </label>
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        <span>Preferred contact time / संपर्क का समय</span>
                      </label>
                      <select
                        className={styles.selectInput}
                        value={formData.contactTime}
                        onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                        disabled={isSubmitting}
                      >
                        <option value="anytime">Anytime / किसी भी समय</option>
                        <option value="morning">Morning (9 AM - 12 PM) / सुबह</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM) / दोपहर</option>
                        <option value="evening">Evening (4 PM - 8 PM) / शाम</option>
                      </select>
                    </div>

                    {/* Optional Guidance Note */}
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        <span>What would you like guidance on? (Optional) / आप किस बारे में मार्गदर्शन चाहते हैं?</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Briefly state your concern"
                        value={formData.guidance}
                        onChange={(e) => setFormData({ ...formData, guidance: e.target.value })}
                        disabled={isSubmitting}
                      />
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
