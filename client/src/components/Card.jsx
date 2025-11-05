import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import shyneeLogo1 from '../images/shyneelogo1.webp';
import shyneeLogo2 from '../images/shyneelogo2.webp';

export default function Card({ 
  color = "silver", 
  title, 
  price, 
  subtitle, 
  features = [], 
  buttonText = "Rendelés", 
  page, 
  link, 
  ceramicLink,
  baseFeatures = []
}) {
  const [flipped, setFlipped] = useState(false);

  // A linket közvetlenül a gomb renderelésekor fogjuk meghatározni

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

          {(title === 'Prémium' || title === 'Ultra') && (
            <img
              className="brand-logo"
              src={title === 'Ultra' ? shyneeLogo1 : shyneeLogo2}
              alt={title === 'Ultra' ? 'Shynee logo 1' : 'Shynee logo 2'}
            />
          )}

          <button className="button flip-btn" onClick={() => setFlipped(true)}>
            <span className="text-button">Részletek</span>
          </button>
        </div>

        {/* --- BACK oldal --- */}
        <div className={`flip-card-back card card-${color}`}>
          <button className="back-arrow" onClick={() => setFlipped(false)} aria-label="Vissza">
            ←
          </button>
          {subtitle && <p className="sub-title">{subtitle}</p>}

          <ul className="list">
            {(() => {
              const normalizedBase = Array.isArray(baseFeatures)
                ? new Set(baseFeatures.filter(f => typeof f === 'string').map(f => f.trim().toLowerCase()))
                : new Set();
              return features.map((feature, i) => {
                const text = typeof feature === 'string' ? feature.trim().toLowerCase() : '';
                const isCeramic = text.includes('kerámia csomag');
                let isShared = title === 'Ultra' && normalizedBase.has(text);
                let isExtra = title === 'Ultra' && !isShared;
                if (isCeramic) {
                  // Mindig plusz jellel és extra-ként jelenjen meg a kerámia
                  isShared = false;
                  isExtra = true;
                }
                const capitalizedFeature = typeof feature === 'string' ? 
                  feature.charAt(0).toUpperCase() + feature.slice(1) : feature;
                const checkChar = isCeramic ? '+' : '✓';
                return (
                  <li className={`list-item ${isShared ? 'is-shared' : ''} ${isExtra ? 'is-extra' : ''}`} key={i}>
                    <span className="check">{checkChar}</span> {capitalizedFeature}
                    {isCeramic && (
                      <div className="info-tooltip">
                        <span className="info-icon">i</span>
                        <div className="tooltip-content">
                          <div className="tooltip-item">Fémrészecske-eltávolítás</div>
                          <div className="tooltip-item">Agyag gyurmás mélytisztítás</div>
                          <div className="tooltip-item">Gyors kerámia bevonat</div>
                          <div className="tooltip-item tooltip-price">Ár: 18 900 Ft</div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              });
            })()}
          </ul>

          {/* --- Rendelés gombok --- */}
          {(() => {
            const primaryLink = link || 'https://shynee.salonic.hu/';
            const hasCeramic = Array.isArray(features) && features.some(f => typeof f === 'string' && f.toLowerCase().includes('kerámia csomag'));
            if (hasCeramic) {
              return (
                <div className="action-buttons">
                  <Link to={primaryLink}>
                    <button className="button"><span className="text-button">Rendelés</span></button>
                  </Link>
                  <Link to={ceramicLink || primaryLink}>
                    <button className="button secondary"><span className="text-button">Rendelés kerámiával</span></button>
                  </Link>
                </div>
              );
            }
            return (
              <Link to={primaryLink}>
                <button className="button"><span className="text-button">Rendelés</span></button>
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
