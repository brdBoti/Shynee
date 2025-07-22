import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ color = "silver", title, price, subtitle, features = [], buttonText }) {
  return (
    <div className={`card card-${color}`}>
      <span className="title">{title}</span>
      <p className="pricing">
        {price} <span className="pricing-time">/ alkalom</span>
      </p>
      <span className="sub-title">{subtitle}</span>
      <ul className="list">
        {features.map((feature, i) => (
          <li className="list-item" key={i}>
            <span className="check">✓</span> {feature}
          </li>
        ))}
      </ul>
      <Link to = "https://spotless.salonic.hu/">
      <button className="button">
        <span className="text-button">{buttonText}</span>
      </button>
      </Link>
  
    </div>
  );
}
