import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import { Link } from 'react-router-dom';  // <-- import Link
import './Rendelés.css';
import shiny_outside from '../../images/shiny_outside.jpg';
import shiny_inside from '../../images/shiny_inside.png';

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
        <div className="card-content-rendeles">Külső mosás</div>
      </Link>
      <Link to="/rendeles-belso" className="card-rendeles">
        <div
          className="card-bg-rendeles"
          style={{
            backgroundImage: `url(${shiny_inside})`,
          }}
        />
        <div className="card-content-rendeles">Belső mosás</div>
      </Link>
      <Link to="/rendeles-kulso-belso" className="card-rendeles">
        <div
          className="card-bg-rendeles"
          style={{
            backgroundImage: `url(${shiny_inside})`,
          }}
        />
        <div className="card-content-rendeles">Külső-belső mosás</div>
      </Link>
    </div>
  );
}
