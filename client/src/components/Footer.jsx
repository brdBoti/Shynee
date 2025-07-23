import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import simplepayLogo from '../images/logos/simplepay.svg';
import visaLogo from '../images/logos/Visa_Inc._logo.svg';
import mastercardLogo from '../images/logos/Mastercard.svg';
import shyneeText from '../images/shyneetextniceres2.PNG';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section left">
          <img src={shyneeText} alt="Shynee logo" className="footer-logo" />
          <div className="footer-hours">
            <ul>
              <li><span>Hétfő - Vasárnap:</span> 08:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-section center">
          <h4>Menü</h4>
          <nav>
            <Link to="/" onClick={scrollToTop}>Főoldal</Link>
            <Link to="/rolunk" onClick={scrollToTop}>Rólunk</Link>
            <Link to="/kapcsolat" onClick={scrollToTop}>Kapcsolat</Link>
          </nav>
        </div>

        <div className="footer-section right">
          <h4>Kövess minket</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <div className="payment-logos">
          <img src={simplepayLogo} alt="SimplePay" />
          <img src={visaLogo} alt="Visa" />
          <img src={mastercardLogo} alt="Mastercard" />
        </div>
      </div>

      <p className="copyright">© 2025 Minden jog fenntartva.</p>
    </footer>
  );
}
