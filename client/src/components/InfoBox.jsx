import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './InfoBox.css';

export default function InfoBox({ side, scrollTrigger, children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: side === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`info-box ${side}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
