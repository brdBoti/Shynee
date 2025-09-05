  import React from 'react';
  import Title from '../components/Title';
  import BeforeAfterSlider from '../components/BeforeAfterSlider';

  import kep1 from '../images/kep1.png';
  import kep2 from '../images/kep2.png';
  import kep3 from '../images/kep3.png';
  import kep4 from '../images/kep4.png';
  import boti from '../images/boti.webp';
  import bese from '../images/bese.webp';
  import shiny_outside from '../images/shiny_outside.jpg';
  import shiny_inside from '../images/shiny_inside.png';
  import shyneeindex from '../images/shyneeindex.png';
  import shyneetextniceres2 from '../images/shyneetextniceres2.PNG';
  import ShyneeLOGO from '../images/ShyneeLOGO.png';
  import './Home.css';
  import FAQ from '../components/FAQ';

  export default function Home() {
    const sliderPairs = [
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 },
      { before: kep1, after: kep1 }
    ];

    return (
      <div className="home-container">
        <section className="hero-section">
          <Title />
        </section>

        <section className="gallery-section">
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '2rem 0.5rem'
          }}>
            <h2 style={{ 
              color: '#fff', 
              marginBottom: '2rem',
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              Munkáink
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '2rem',
              padding: '0 1rem'
            }}>
              {sliderPairs.map((pair, index) => (
                <div key={index} style={{ 
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>
                  <BeforeAfterSlider
                    beforeImage={pair.before}
                    afterImage={pair.after}
                    width="100%"
                    height="300px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ/>
      </div>
    );
  }
