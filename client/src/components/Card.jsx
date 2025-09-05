import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ 
  color = "silver", 
  title, 
  price, 
  subtitle, 
  features = [], 
  buttonText = "Rendelés", 
  page, 
  link, 
  ceramicLink 
}) {
  const [flipped, setFlipped] = useState(false);

  // --- Logika a linkTo kiválasztására (mint a 2. kártyában) ---
  let linkTo = link || 'https://spotless.salonic.hu/';
  if (page === 'rendelesbelso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404515';
    else if (title === 'Prémium') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404516';
  } else if (page === 'rendeleskulso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404339';
    else if (title === 'Prémium') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404340';
  } else if (page === 'rendeleskulsobelso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404517';
    else if (title === 'Prémium') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404518';
  }

  return (
    <div className="flip-card-container">
      <div className={`flip-card${flipped ? ' flipped' : ''}`}>
        
        {/* --- FRONT oldal --- */}
        <div className={`flip-card-front card card-${color}`}>
          <span className="title">{title}</span>
          <p className="pricing">
            {price} <span className="pricing-time">/ alkalom</span>
          </p>
          {subtitle && <span className="sub-title">{subtitle}</span>}

          <button className="button flip-btn" onClick={() => setFlipped(true)}>
            <span className="text-button">Érdekel</span>
          </button>
        </div>

        {/* --- BACK oldal --- */}
        <div className={`flip-card-back card card-${color}`}>
          <button className="back-arrow" onClick={() => setFlipped(false)} aria-label="Vissza">
            ←
          </button>
          {subtitle && <p className="sub-title">{subtitle}</p>}

          <ul className="list">
            {features.map((feature, i) => {
              const text = typeof feature === 'string' ? feature.trim().toLowerCase() : '';
              const isExtra = text.includes('extra') || text.includes('kerámia csomag');
              const isCeramic = text.includes('kerámia csomag');
              const capitalizedFeature = typeof feature === 'string' ? 
                feature.charAt(0).toUpperCase() + feature.slice(1) : feature;
              return (
                <li className={`list-item ${isExtra ? 'is-extra' : ''}`} key={i}>
                  <span className="check">{isExtra ? '+' : '✓'}</span> {capitalizedFeature}
                  {isCeramic && (
                    <div className="info-tooltip">
                      <span className="info-icon">i</span>
                      <div className="tooltip-content">
                        <div className="tooltip-item">Fémrészecske-eltávolítás</div>
                        <div className="tooltip-item">Agyag gyurmás mélytisztítás</div>
                        <div className="tooltip-item">Gyors kerámia bevonat</div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* --- Rendelés gombok logika (mint az 1. kártyában) --- */}
          {(() => {
            const hasCeramic = Array.isArray(features) && features.some(f => typeof f === 'string' && f.toLowerCase().includes('kerámia csomag'));
            if (hasCeramic) {
              return (
                <div className="action-buttons">
                  <Link to={linkTo}>
                    <button className="button"><span className="text-button">Rendelés</span></button>
                  </Link>
                  <Link to={ceramicLink || linkTo}>
                    <button className="button secondary"><span className="text-button">Rendelés kerámiával</span></button>
                  </Link>
                </div>
              );
            }
            return (
              <Link to={linkTo}>
                <button className="button"><span className="text-button">Rendelés</span></button>
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
