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
      title: "Prémium",
      price: "16 900 Ft",
      subtitle: "Prémium belső tisztítás",
      features: [
        "porszívózás",
        "szőnyeg tisztítás",
        "utastér tisztítás",
        "ablaktisztítás",
        
      ],
      buttonText: "Érdekel",
      page: "rendelesbelso",
      link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=404515&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D404515"
    },
    {
      color: "blue",
      title: "Ultra",
      price: "25 900 Ft",
      subtitle: "Ultra belső tisztítás",
      features: [
        "porszívózás",
        "vegyszeres szőnyeg tisztítás",
        "utastér tisztítás",
        "vegyszeres ülés kárpit tisztítás",
        "vegyszeres csomagtér tisztítás",
        "műanyag és bőr ápolás",
        "ablaktisztítás"
      ],
      buttonText: "Érdekel",
      page: "rendelesbelso",
      link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408359&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408359"
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
