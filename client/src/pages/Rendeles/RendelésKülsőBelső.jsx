import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import './RendelésKülsőBelső.css';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

export default function RendelésKülsőBelső() {
    const [loading, setLoading] = useState(false);

    if (loading) return <Loading />;

    const cards = [
        {
            color: "silver",
            title: "Basic",
            price: "30.000 Ft",
            subtitle: "Külső és belső tisztítás alapcsomag",
            features: [
                "Habos előmosás",
                "Kézi mosás",
                "Felni tisztítás",
                "Szárítás",
                "Belső porszívózás",
                "Ablaktisztítás",
            ],
            buttonText: "Érdekel",
        },
        {
            color: "gold",
            title: "Prémium",
            price: "50.000 Ft",
            subtitle: "Teljes körű külső és belső tisztítás",
            features: [
                "A Basic csomag tartalma",
                "Műanyagápolás",
                "Kárpittisztítás",
                "Belső műanyag és műszerfal ápolás",
                "Extra felületkezelés",
                "Bőrápolás"
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
