import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import './RendelésBelső.css';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

export default function RendelésBelső() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  const cards = [
    {
      color: "silver",
      title: "Alap",
      price: "10.000 Ft",
      subtitle: "Belső tisztítás alapcsomag",
      features: [
        "Belső porszívózás",
        "Műszerfal és ajtók takarítása",
        "Szőnyegek tisztítása",
        "Ablaktisztítás belülről",
        "Teljes törődés."
      ],
      buttonText: "Érdekel",
    },
    {
      color: "gold",
      title: "Prémium",
      price: "24.999 Ft",
      subtitle: "Teljes belső tisztítás",
      features: [
        "Az Alap csomag +",
        "Szőnyegtisztítás",
        "Műanyag- és bőrápolás",
        "Ablaktisztítás belülről",
        "Szagtalanítás és légfrissítés"
      ],
      buttonText: "Érdekel",
    },
  ];

  return (
    <div className="arak-container">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: i * 0.35,
            ease: [0.25, 1, 0.5, 1]
          }}
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
  );
}
