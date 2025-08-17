// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from './logo.png';

const navLinks = [
  { path: '/rendeles', label: 'Rendelés' },
  { path: '/rolunk', label: 'Rólunk' },
  { path: '/kapcsolat', label: 'Kapcsolat' },
];

const linkVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.4, duration: 0.5, ease: 'easeOut' },
  }),
  hover: {
    color: '#f0c674',
    textShadow: '0px 0px 8px rgba(212,175,55,0.8)',
    transition: { type: 'spring', stiffness: 300 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true); // új state
  const location = useLocation();
  const lastScrollY = React.useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      // Prevent hiding when menu is open
      if (menuOpen) return;
      const currentY = window.scrollY;

      if (currentY <= 2) {
        setHidden(false);
        setAtTop(true); // tetején vagyunk
      } else {
        setAtTop(false);
        if (currentY > lastScrollY.current) {
          setHidden(true); // lefelé görgetés
        } else if (currentY < lastScrollY.current) {
          setHidden(false); // felfelé görgetés
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${hidden ? 'navbar--hidden' : ''} ${atTop ? 'navbar--clear' : ''}`}>
        <Link to="/" className="navbar__logo">
          <span className="logo-shine-wrapper" />
          <img src={logo} alt="Logo" />
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(({ path, label }, i) => (
            <motion.div
              key={path}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={linkVariants}
            >
              <Link
                to={path}
                className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Overlay – kattintásra bezárja a menüt, csak a menü mellett */}
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}