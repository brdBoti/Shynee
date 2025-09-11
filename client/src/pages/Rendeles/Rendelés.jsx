import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import { Link } from 'react-router-dom';  // <-- import Link
import './Rendelés.css';
import shiny_outside from '../../images/kulso.webp';
import shiny_inside from '../../images/belso.webp';
import shiny_outin from '../../images/kulso-belso.webp';

export default function Rendelés() {
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;

  return (
    <div className="cards-wrapper-rendeles">
      <Link to="/rendeles-kulso" className="card-rendeles">
        <div
          className="card-bg-rendeles"
          style={{
            backgroundImage: `url(${shiny_outside})`,
          }}
        />
        <div className="card-content-rendeles">Külső tisztítás</div>
      </Link>
      <Link to="/rendeles-belso" className="card-rendeles">
        <div
          className="card-bg-rendeles"
          style={{
            backgroundImage: `url(${shiny_inside})`,
          }}
        />
        <div className="card-content-rendeles">Belső tisztítás</div>
      </Link>
      <Link to="/rendeles-kulso-belso" className="card-rendeles">
        <div
          className="card-bg-rendeles"
          style={{
            backgroundImage: `url(${shiny_outin})`,
          }}
        />
        <div className="card-content-rendeles">Külső-belső tisztítás</div>
      </Link>
    </div>
  );
}
