import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ color = "silver", title, price, subtitle, features = [], buttonText, page, link, ceramicLink }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card-container">
      <div className={`flip-card${flipped ? ' flipped' : ''}`}>
        <div className="flip-card-front">
          <span className="title">{title}</span>
          <p className="pricing">{price}</p>
          <button className="flip-btn" onClick={() => setFlipped(true)}>
            Show Back
          </button>
        </div>
        <div className="flip-card-back">
          <button className="back-arrow" onClick={() => setFlipped(false)} aria-label="Show Front">
            ←
          </button>
          {subtitle && <p className="subtitle">{subtitle}</p>}
          <div className="back-content">
            {features && features.length > 0 && (
              <ul className="features-list">
                {features.map((feature, index) => {
                  const text = typeof feature === 'string' ? feature.trim().toLowerCase() : '';
                  const isExtra = text.includes('extra');
                  return (
                    <li key={index} className={isExtra ? 'is-extra' : ''}>{feature}</li>
                  );
                })}
              </ul>
            )}
          </div>
          {(() => {
            const hasCeramic = Array.isArray(features) && features.some(f => typeof f === 'string' && f.toLowerCase().includes('gyors kerámia'));
            if (hasCeramic) {
              return (
                <div className="action-buttons">
                  <Link className="link-btn" to={link || page || '#'}>Kerámia nélkül kérem</Link>
                  <Link className="link-btn secondary" to={ceramicLink || link || page || '#'}>Kerámiával kérem</Link>
                </div>
              );
            }
            return <Link className="link-btn" to={link || page || '#'}>{buttonText || 'Rendelés'}</Link>;
          })()}
        </div>
      </div>
    </div>
  );
}

