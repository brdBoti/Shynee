  import React from 'react';
  import Title from '../components/Title';
  import BeforeAfterSlider from '../components/BeforeAfterSlider';

  import bmw_3k from '../images/bmw_3k.webp';
  import bmw_3t from '../images/bmw_3t.webp';
  import bmw_4k from '../images/bmw_4k.webp';
  import bmw_4t from '../images/bmw_4t.webp';
  import bmw_6k from '../images/bmw_6k.webp';
  import bmw_6t from '../images/bmw_6t.webp';
  import merci_2k from '../images/merci_2k.webp';
  import merci_2t from '../images/merci_2t.webp';
  import toyo_4k from '../images/toyo_4k.webp';
  import toyo_4t from '../images/toyo_4t.webp';
  import vw_2k from '../images/vw_2k.webp';
  import vw_2t from '../images/vw_2t.webp';
  import vw_4k from '../images/vw_4k.webp';
  import vw_4t from '../images/vw_4t.webp';
  import vw_9k from '../images/vw_9k.webp';
  import vw_9t from '../images/vw_9t.webp';
  import boti from '../images/boti.webp';
  import bese from '../images/bese.webp';
  import shiny_outside from '../images/kulso.webp';
  import shiny_inside from '../images/belso.webp';
  import shyneetextniceres2 from '../images/shyneetextniceres2.webp';
  import './Home.css';
  import FAQ from '../components/FAQ';

  export default function Home() {
    const sliderPairs = [
      { before: merci_2k, after: merci_2t },
      { before: toyo_4k,  after: toyo_4t  },
      { before: vw_2k,    after: vw_2t    },
      { before: vw_4k,    after: vw_4t    },
      { before: vw_9k,    after: vw_9t    },
      { before: bmw_3k,   after: bmw_3t   },
      { before: bmw_4k,   after: bmw_4t   },
      { before: bmw_6k,   after: bmw_6t   }
    ];

    return (
      <div className="home-container">
        <section className="hero-section">
          <Title />
          <div className="scroll-indicator">↓</div>
          <div className="scroll-indicator below">↓</div>
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
                    height="auto"
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
