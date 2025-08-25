import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ color = "silver", title, price, subtitle, features = [], buttonText, page }) {
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
          <button className="flip-btn" onClick={() => setFlipped(false)}>
            Show Front
          </button>
        </div>
      </div>
    </div>
  );
}

