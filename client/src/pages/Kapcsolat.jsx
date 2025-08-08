import './Kapcsolat.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

export default function Kapcsolat() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  const { ref: formRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const phases = [
      { visible: true, duration: 1400 },
      { visible: false, duration: 700 },
      { visible: true, duration: 700 },
      { visible: false, duration: 700 },
      { visible: true, duration: 700 },
      { visible: false, duration: 999999 },
    ];

    if (phase < phases.length - 1) {
      const timer = setTimeout(() => {
        setPhase(phase + 1);
        setCursorVisible(phases[phase + 1].visible);
      }, phases[phase].duration);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xdkdeejo', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSent(true);
        e.target.reset();
      } else {
        setError(data?.message || 'Hiba történt az üzenet elküldésekor.');
      }
    } catch {
      setError('Hálózati hiba, kérlek próbáld meg később.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="kapcsolat-container">
      {!sent ? (
        <>
          <div className="bal-oldal">
            <motion.h1
              className="kapcsolat-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Typewriter
                words={['Írj nekünk!']}
                loop={1}
                cursor={false}
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={999999}
              />
              <motion.span
                style={{
                  marginLeft: '4px',
                  fontWeight: 'bold',
                  color: '#00aaff',
                  userSelect: 'none',
                  width: '1ch',
                  display: 'inline-block',
                }}
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Elérhetsz minket telefonon, WhatsAppon vagy az alábbi űrlapon keresztül.
            </motion.p>

            <motion.div
              className="ikonok-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a href="tel:+36201234567" className="ikon-link" aria-label="Telefon">
                <FaPhoneAlt />
                <span className="ikon-title">Telefon</span>
              </a>
              <a
                href="https://wa.me/36201234567"
                target="_blank"
                rel="noopener noreferrer"
                className="ikon-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span className="ikon-title">WhatsApp</span>
              </a>
            </motion.div>
          </div>

          <div className="jobb-oldal" ref={formRef}>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  className="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key="form"
                >
                  <p className="form-heading">Személyesen?</p>

                  <div className="form-field">
                    <input required placeholder="Név" className="input-field" type="text" name="name" />
                  </div>

                  <div className="form-field">
                    <input required placeholder="Email" className="input-field" type="email" name="email" />
                  </div>

                  <div className="form-field">
                    <input required placeholder="Tárgy" className="input-field" type="text" name="subject" />
                  </div>

                  <div className="form-field">
                    <textarea
                      required
                      placeholder="Üzenet"
                      cols="30"
                      rows="3"
                      className="input-field"
                      name="message"
                    ></textarea>
                  </div>

                  <button className="sendMessage-btn" type="submit" disabled={loading}>
                    {loading ? 'Küldés...' : 'Küldés'}
                  </button>

                  {error && <p className="error-msg">{error}</p>}
                </motion.form>
              ) : (
                <motion.div
                  className="thankyou-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key="thankyou"
                >
                  <motion.h1
                    className="thankyou-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Köszönjük! Üzeneted sikeresen elküldtük.
                  </motion.h1>
                  <div className="ikonok-section">
                    <a href="tel:+36201234567" className="ikon-link" aria-label="Telefon">
                      <FaPhoneAlt />
                      <span className="ikon-title">Telefon</span>
                    </a>
                    <a
                      href="https://wa.me/36201234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ikon-link"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                      <span className="ikon-title">WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </>
      ) : (
        <motion.div
          className="thankyou-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1 className="thankyou-text">Köszönjük! Üzeneted sikeresen elküldtük.</h1>
          <div className="ikonok-section">
            <a href="tel:+36201234567" className="ikon-link" aria-label="Telefon">
              <FaPhoneAlt />
              <span className="ikon-title">Telefon</span>
            </a>
            <a
              href="https://wa.me/36201234567"
              target="_blank"
              rel="noopener noreferrer"
              className="ikon-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
              <span className="ikon-title">WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
