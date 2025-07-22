// src/components/Gallery/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Gallery({ images }) {
  return (
    <motion.div
      className="gallery"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {images.map(({ src, alt }, i) => (
        <motion.div
          className="gallery-item"
          key={i}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        >
          <img src={src} alt={alt} className="gallery-img" />
        </motion.div>
      ))}
    </motion.div>
  );
}
