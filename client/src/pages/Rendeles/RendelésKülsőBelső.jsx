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
            title: "Prémium",
            price: "34 900 Ft",
            subtitle: "Prémium külső és belső tisztítás",
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
                "Kérhető kerámia csomag"
            ],
            buttonText: "Rendelés",
            page: "rendeleskulsobelso",
            link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=404517&startDate=1756458900&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D404517",
            ceramicLink: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408371&startDate=1756458900&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408371"
        },
        {
            color: "blue",
            title: "Ultra",
            price: "52 900 Ft",
            subtitle: "Ultra külső és belső tisztítás",
            features: [
                // Külső (Prémium)
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
                // Belső (Prémium)
                "porszívózás",
                "vegyszeres szőnyeg tisztítás",
                "utastér tisztítás",
                "vegyszeres ülés kárpit tisztítás",
                "vegyszeres csomagtér tisztítás",
                "műanyag és bőr ápolás",
                "ablaktisztítás",
                "Kérhető kerámia csomag"
            ],
            buttonText: "Rendelés",
            page: "rendeleskulsobelso",
            link: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408365&startDate=1756458900&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408365",
            ceramicLink: "https://shynee.salonic.hu/selectDate/?employeeId=27333&placeId=12457&serviceId=408367&startDate=1756458900&back=%2FselectEmployee%2F%3FplaceId%3D12457%26serviceId%3D408367"
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
