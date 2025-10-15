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
    title: "Prémium",
    price: "19 900 Ft",
    subtitle: "Prémium külső tisztítás",
    features: [
      "rovaroldás",
      "aktív hab",
      "samponos kézi mosás",
      "falcok tisztítása",
      "viasz",
      "szárítás",
      "Kérhető kerámia csomag"
    ],
    buttonText: "Rendelés",
    page: "rendeleskulso",
    link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=404339&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D404339",
    ceramicLink: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408369&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408369"
  },
  {
    color: "blue",
    title: "Ultra",
    price: "28 900 Ft",
    subtitle: "Ultra külső tisztítás",
    features: [
      "felni tisztítás",
      "kátrányoldás",
      "rovaroldás",
      "aktív hab",
      "samponos kézi mosás",
      "falcok tisztítása",
      "viasz",
      "szárítás",
      "műanyagápolás",
      "gumiápolás",
      "Kérhető kerámia csomag"
    ],
    baseFeatures: [
      "rovaroldás",
      "aktív hab",
      "samponos kézi mosás",
      "falcok tisztítása",
      "viasz",
      "szárítás",
      "kérhető kerámia csomag"
    ],
    buttonText: "Rendelés",
    page: "rendeleskulso",
    link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408362&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408362",
    ceramicLink: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408364&startDate=1757570400&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408364"
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
