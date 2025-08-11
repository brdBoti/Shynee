import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import './Rendelés.css';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

export default function RendelésKülső() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  const cards = [
  {
    color: "silver",
    title: "Alap",
    price: "1.000 Ft",
    subtitle: "Külső tisztítás alapcsomag",
    features: ["Habos előmosás", "Kézi mosás", "Felni tisztítás", "Szárítás"],
    buttonText: "Érdekel",
    page: "rendeleskulsobelso"
  },
  {
    color: "gold",
    title: "Prémium",
    price: "2.500 Ft",
    subtitle: "Teljes külső tisztítás",
    features: [
      "Az Alap csomag tartalma",
      "Kézi viaszozás",
      "Mélytisztító samponozás",
      "Szárítás prémium anyagokkal"
    ],
    buttonText: "Érdekel",
    page: "rendeleskulso"
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
