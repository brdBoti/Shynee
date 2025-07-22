import React from 'react';
import Title from '../components/Title';
import Gallery from '../components/Gallery';

import kep1 from '../images/kep1.png';
import kep2 from '../images/kep2.png';
import kep3 from '../images/kep3.png';
import kep4 from '../images/kep4.png';
import './Home.css';
import FAQ from '../components/FAQ';

export default function Home() {
  const homeImages = [
    { src: kep1, alt: 'Kép 1' },
    { src: kep2, alt: 'Kép 2' },
    { src: kep3, alt: 'Kép 3' },
    { src: kep4, alt: 'Kép 4' },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <Title />
      </section>

      <section className="gallery-section">
        <Gallery images={homeImages} />
      </section>

      <FAQ/>
    </div>
  );
}
