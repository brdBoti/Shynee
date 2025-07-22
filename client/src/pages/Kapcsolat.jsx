import './Kapcsolat.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Kapcsolat() {
  return (
    <div className="kapcsolat-container">
      <motion.div
        className="kapcsolat-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="kapcsolat-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhoneAlt className="kapcsolat-icon" />
          <a href="tel:+36201234567">+36 20 123 4567</a>
        </motion.div>

        <motion.div
          className="kapcsolat-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="kapcsolat-icon" />
          <a href="mailto:info@cegnev.hu">info@cegnev.hu</a>
        </motion.div>

        <motion.div
          className="kapcsolat-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="kapcsolat-icon" />
          <a
            href="https://wa.me/36201234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp üzenet
          </a>
        </motion.div>

        <motion.div
          className="kapcsolat-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="kapcsolat-icon" />
          <a
            href="https://www.instagram.com/cegnev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram profil
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
