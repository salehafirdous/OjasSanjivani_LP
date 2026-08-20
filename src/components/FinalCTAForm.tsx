import React, { useState } from 'react';
import styles from './FinalCTAForm.module.css';
import { CheckCircle2, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { submitLead } from '../utils/api';

const FinalCTAForm: React.FC = () => {
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
        // Passing custom info in the text description to preserve CRM schema flexibility
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
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="bottom-cta-form" className={`section-padding ${styles.section}`}>
      <div className="wide-container">

        {/* Section 15: Lead form and final CTA */}
        <div className={styles.grid}>

          {/* Left Column: CTA Context */}
          <div className={styles.contentCol}>

            <h2 className={styles.headline}>
              Take the First Step Privately <span className="highlight">Request Your Consultation</span>
            </h2>
            <p className={styles.hiHeadline}>
              निजी रूप से पहला कदम उठाएँ। अपना परामर्श अनुरोध करें।
            </p>

            <p className={styles.desc}>
              Request a consultation and a member of the Ojas Sanjivani team will guide you through the next step.
            </p>
            <p className={styles.hiDesc}>
              परामर्श का अनुरोध करें और ओजस संजीवनी टीम का सदस्य आपको आगे की प्रक्रिया समझाएगा।
            </p>

            <div className={styles.expectations}>
              <h4>What to expect / क्या अपेक्षा करें:</h4>
              <div className={styles.expectationItem}>
                <span className={styles.bullet}>✓</span>
                <div>
                  <p className={styles.expEn}><strong>Verified Practitioners</strong> — Access to qualified Ayurveda & Homeopathy professionals.</p>
                  <p className={styles.expHi}><strong>प्रमाणित चिकित्सक</strong> — योग्य आयुर्वेद और होम्योपैथी विशेषज्ञों तक पहुँच।</p>
                </div>
              </div>
              <div className={styles.expectationItem}>
                <span className={styles.bullet}>✓</span>
                <div>
                  <p className={styles.expEn}><strong>Clinical Care Plan</strong> — Tailored diet, routine, and safe natural guidance.</p>
                  <p className={styles.expHi}><strong>व्यवस्थित देखभाल योजना</strong> — आपके अनुकूल आहार, दिनचर्या और प्राकृतिक मार्गदर्शन।</p>
                </div>
              </div>
              <div className={styles.expectationItem}>
                <span className={styles.bullet}>✓</span>
                <div>
                  <p className={styles.expEn}><strong>No Pressure</strong> — Factual consultation focused entirely on your stated goals.</p>
                  <p className={styles.expHi}><strong>कोई दबाव नहीं</strong> — पूरी तरह से आपके लक्ष्यों पर केंद्रित तथ्यात्मक परामर्श।</p>
                </div>
              </div>
            </div>

            <div className={styles.securityTrustCard}>
              <ShieldCheck className={styles.trustIcon} size={28} />
              <div>
                <h4 className={styles.trustEn}>100% HIPAA-Compliant Privacy</h4>
                <p className={styles.trustHi}>100% गोपनीयता की गारंटी - आपकी संवेदनशील जानकारी पूरी तरह सुरक्षित है।</p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={64} className={styles.successIcon} />
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
                <form className={styles.leadForm} onSubmit={handleSubmit}>
                  <div className={styles.formHeader}>
                    <h3>Request a Consultation</h3>
                    <p>Speak with our experts confidentially in just a few minutes.</p>
                  </div>

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
                          name="preferred_language"
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
                          name="preferred_language"
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

                  {/* Consent checkbox */}
                  <div className={styles.consentGroup}>
                    <input type="checkbox" id="bottom-form-consent" required disabled={isSubmitting} defaultChecked />
                    <label htmlFor="bottom-form-consent" className={styles.consentLabel}>
                      <span>
                        I agree to be contacted by Ojas Sanjivani regarding my consultation request and have read the Privacy Policy.
                      </span>
                      <span className={styles.hiConsent}>
                        मैं अपने परामर्श अनुरोध के संबंध में ओजस संजीवनी द्वारा संपर्क किए जाने के लिए सहमत हूँ और मैंने गोपनीयता नीति पढ़ ली है।
                      </span>
                    </label>
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
                      <span>Request Private Consultation</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section 16: Medical/legal disclaimer */}
        <div className={styles.disclaimerContainer}>
          <div className={styles.disclaimerHeader}>
            <span>DISCLAIMER</span>
          </div>
          <p className={styles.disclaimerEn}>
            Ojas Sanjivani provides Ayurveda and Homeopathy consultation, treatment guidance, and wellness support. Content on this page is for general informational purposes and is not a diagnosis, emergency service, or a substitute for medical advice from an appropriately licensed healthcare professional. Individual experience varies. Products or treatment recommendations, where offered, should be used only as advised by the qualified practitioner.
          </p>
          <p className={styles.disclaimerHi}>
            ओजस संजीवनी आयुर्वेद और होम्योपैथी परामर्श, उपचार मार्गदर्शन और वेलनेस सहयोग प्रदान करती है। इस पेज की सामग्री केवल सामान्य जानकारी के लिए है और यह निदान, आपातकालीन सेवा या उचित लाइसेंस प्राप्त स्वास्थ्य विशेषज्ञ की चिकित्सकीय सलाह का विकल्प नहीं है। व्यक्तिगत अनुभव अलग-अलग हो सकते हैं। जहाँ उत्पाद या उपचार सलाह दी जाती है, उनका उपयोग केवल योग्य चिकित्सक के निर्देशानुसार करें।
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTAForm;
