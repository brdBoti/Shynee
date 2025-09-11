import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Footer.css';
import visaLogo from '../images/logos/Visa_Inc._logo.svg';
import mastercardLogo from '../images/logos/Mastercard.svg';
import applePayLogo from '../images/logos/apple-pay-svgrepo-com.svg';
import googlePayLogo from '../images/logos/google-pay-svgrepo-com (1).svg';
import shyneeText from '../images/shyneetextniceres2.webp';

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
            <a href="https://www.instagram.com/shynee.hu/" target="_blank" rel="noreferrer" className="icon--instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61579712527671" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@shynee.bp?lang=hu-HU" target="_blank" rel="noreferrer"><SiTiktok /></a>
          </div>
        </div>

        <div className="payment-logos">
          <img className="logo logo--mastercard" src={mastercardLogo} alt="Mastercard" />
          <img className="logo logo--visa" src={visaLogo} alt="Visa" />
          <img className="logo logo--applepay" src={applePayLogo} alt="Apple Pay" />
          <img className="logo logo--googlepay" src={googlePayLogo} alt="Google Pay" />
        </div>
      </div>

      <p className="copyright">© 2025 Minden jog fenntartva.</p>
    </footer>
  );
}
