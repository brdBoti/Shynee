import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import './RendelésTéliCsomagok.css';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

export default function RendelésTéliCsomagok() {
  const [loading] = useState(false);
  if (loading) return <Loading />;

  const cards = [
    {
      color: 'silver',
      title: 'Téli külső',
      price: '19 900 Ft',
      subtitle: 'Téli külső tisztítás',
      features: [
        'rovaroldás',
        'aktív hab',
        'samponos kézi mosás',
        'falcok tisztítása',
        'viasz',
        'szárítás'
      ],
      page: 'teli-kulso'
    },
    {
      color: 'gold',
      title: 'Téli belső',
      price: '16 900 Ft',
      subtitle: 'Téli belső tisztítás',
      features: [
        'porszívózás',
        'szőnyeg tisztítás',
        'teljes utastér tisztítás',
        'csomagtér tisztítás',
        'falcok tisztítása',
        'ablaktisztítás'
      ],
      page: 'teli-belso'
    },
    {
      color: 'blue',
      title: 'Téli külső-belső',
      price: '34 900 Ft',
      subtitle: 'Téli külső és belső tisztítás',
      features: [
        'rovaroldás',
        'aktív hab',
        'samponos kézi mosás',
        'falcok tisztítása',
        'viasz',
        'szárítás',
        'porszívózás',
        'szőnyeg tisztítás',
        'teljes utastér tisztítás',
        'csomagtér tisztítás',
        'ablaktisztítás'
      ],
      page: 'teli-kulso-belso'
    }
  ];

  return (
    <div className="arak-container">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: i * 0.35, ease: [0.25, 1, 0.5, 1] }}
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
  );
}


