import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Title.css';
import shyneetextpng from '../images/shyneetextniceres2.webp';

const subText = "Autóápolás Mindenhol";
const typingSpeed = 80;

export default function Title() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < subText.length) {
        const nextChar = subText[currentIndex];
        if (nextChar === undefined) return;
        setTypedText((prev) => prev + nextChar);
        currentIndex++;
        setTimeout(typeNextChar, typingSpeed);
      }
    };

    const timeoutId = setTimeout(typeNextChar, 2700);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="title-wrapper">
      <motion.div
        className="home-title"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 2.5,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.3,
        }}
      >
        <motion.img
          src={shyneetextpng}
          alt="SHYNEE logo"
          className="highlighted-image"
          initial={{ opacity: 0, letterSpacing: '0em' }}
          animate={{ opacity: 1, letterSpacing: '0.15em' }}
          transition={{
            delay: 1.0,
            duration: 1.8,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <div className="sub-title">
        <span className="typing-text">
          {typedText}
          <span className="cursor">|</span>
        </span>
      </div>
    </div>
  );
}
