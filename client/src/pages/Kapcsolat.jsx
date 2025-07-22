import './Kapcsolat.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Kapcsolat() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    } catch (err) {
      setError('Hálózati hiba, kérlek próbáld meg később.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="kapcsolat-container">
      <motion.h1
        className="kapcsolat-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Lépj velünk kapcsolatba
      </motion.h1>

      <motion.div
        className="ikonok-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="tel:+36201234567" className="ikon-link" aria-label="Telefon">
          <FaPhoneAlt />
        </a>
        <a
          href="https://wa.me/36201234567"
          target="_blank"
          rel="noopener noreferrer"
          className="ikon-link"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      <AnimatePresence mode="wait">
        {!sent && (
          <motion.form
            className="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            key="form"
          >
            <p className="form-heading">Személyesen?</p>

            <div className="form-field">
              <input
                required
                placeholder="Név"
                className="input-field"
                type="text"
                name="name"
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Tárgy"
                className="input-field"
                type="text"
                name="subject"
              />
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
        )}

        {sent && (
          <motion.div
            className="success-msg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.6 }}
            key="success"
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#00aaff',
              marginTop: '2rem',
              fontFamily: "'Poppins', sans-serif" // ide ez jön
            }}
          >
            Köszönjük! Üzeneted sikeresen elküldtük.
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}
