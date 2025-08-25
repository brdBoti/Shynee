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
            title: "Alap",
            price: "30.000 Ft",
            subtitle: "Külső és belső tisztítás alapcsomag",
            features: [
                // Külső (Alap)
                "rovaroldás",
                "aktív hab",
                "samponos kézi mosás",
                "falcok tisztítása",
                "viasz",
                "szárítás",
                // Belső (Alap)
                "porszívózás",
                "szőnyeg tisztítás",
                "utastér tisztítás",
                "ablaktisztítás",
                // Extra minden csomaghoz
                "kérhető extra: ülés kárpit tisztítás"
            ],
            buttonText: "Érdekel",
            page: "rendeleskulsobelso"
        },
        {
            color: "gold",
            title: "Prémium",
            price: "50.000 Ft",
            subtitle: "Teljes körű külső és belső tisztítás",
            features: [
                // Külső (Prémium)
                "felni tisztítás",
                "kátrányoldás",
                "rovaroldás",
                "aktív hab",
                "samponos kézi mosás",
                "falcok tisztítása",
                "gyors kerámia",
                "viasz",
                "szárítás",
                "műanyagápolás",
                "gumiápolás",
                // Belső (Prémium)
                "porszívózás",
                "vegyszeres szőnyeg tisztítás",
                "utastér tisztítás",
                "csomagtér vegyszeres tisztítás",
                "műanyag és bőr ápolás",
                "ablaktisztítás",
                // Extra minden csomaghoz
                "kérhető extra: ülés kárpit tisztítás"
            ],
            buttonText: "Érdekel",
            page: "rendeleskulsobelso"
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
