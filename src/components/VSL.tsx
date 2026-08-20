import React, { useRef, useState } from 'react';
import styles from './VSL.module.css';
import { Play, CheckCircle2 } from 'lucide-react';

const VSL: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleWatchButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const videoCardElement = document.getElementById('vsl-video-card');
    if (videoCardElement) {
      videoCardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section id="vsl" className={`section-padding ${styles.vslSection}`}>
      <div className="wide-container">
        <div className={styles.grid}>
          {/* Left: Content Column */}
          <div className={styles.contentCol}>

            <h2 className={styles.headline}>
              A calmer, more informed way to <span className="highlight">approach intimate wellness</span>
            </h2>
            <p className={styles.hiHeadline}>
              अंतरंग स्वास्थ्य को समझने और सँभालने का अधिक सहज व जानकारीपूर्ण तरीका।
            </p>

            <p className={styles.desc}>
              Wondering whether an Ayurveda and Homeopathy consultation may be right for your concern? Watch this short, private introduction to understand the Ojas Sanjivani approach before you book.
            </p>
            <p className={styles.hiDesc}>
              क्या आयुर्वेद और होम्योपैथी परामर्श आपकी चिंता के लिए उपयुक्त हो सकता है? बुक करने से पहले ओजस संजीवनी का संक्षिप्त, निजी परिचय देखें।
            </p>

            <div className={styles.vslFeatures}>
              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.icon} size={20} />
                <div>
                  <p className={styles.featEn}>Why one-size-fits-all advice often misses the bigger picture</p>
                  <p className={styles.featHi}>एक जैसा समाधान अक्सर पूरी तस्वीर क्यों नहीं देखता</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.icon} size={20} />
                <div>
                  <p className={styles.featEn}>How a private consultation works</p>
                  <p className={styles.featHi}>निजी परामर्श कैसे होता है</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.icon} size={20} />
                <div>
                  <p className={styles.featEn}>What a personalised plan may include</p>
                  <p className={styles.featHi}>और व्यक्तिगत योजना में क्या शामिल हो सकता है</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <button
                onClick={handleWatchButtonClick}
                className="btn-primary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <span>Watch the 3-Minute Overview</span>
              </button>
            </div>
          </div>

          {/* Right: Video Column */}
          <div className={styles.videoCol}>
            <div className={styles.videoCard} id="vsl-video-card" onClick={handlePlayClick}>
              <video
                ref={videoRef}
                className={styles.video}
                src="/videos/hero-telehealth.mp4"
                controls
                poster="/images/doctor-consultation.jpg"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
              {!isPlaying && (
                <div className={styles.videoOverlay}>
                  <div className={styles.playButton}>
                    <Play size={32} fill="currentColor" />
                  </div>
                  <span className={styles.playText}>Watch Private Introduction (3 Mins)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;
