import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ color = "silver", title, price, subtitle, features = [], buttonText, page }) {

  // Page alapján állítjuk be a linket
  let linkTo = 'https://spotless.salonic.hu/';

  if (page === 'rendelesbelso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404515';
    else if (title === 'Prémium') {
      linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404516';
    }
  } else if (page === 'rendeleskulso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404339';
    else if (title === 'Prémium') {
      linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404340';
    }
  } else if (page === 'rendeleskulsobelso') {
    if (title === 'Alap') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404517';
    else if (title === 'Prémium') linkTo = 'https://shynee.salonic.hu/selectEmployee/?placeId=12457&serviceId=404518';
  }

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
      <Link to={linkTo}>
        <button className="button">
          <span className="text-button">{buttonText}</span>
        </button>
      </Link>
    </div>
  );
}

