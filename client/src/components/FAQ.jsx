import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Milyen településeken dolgozunk?',
    answer: 'Budapesten és környékén – Kistarcsa, Csömör, Nagytarcsa – érhető el szolgáltatásunk. Ha nem vagy biztos benne, hogy hozzád ki tudunk menni, kérdezz bátran, és igyekszünk megoldani!'
  },
  {
    question: 'Hol tudunk autót mosni?',
    answer: 'Gyakorlatilag bárhol, ahol van szabad hozzáférés az autóhoz, és elférünk körülötte. Szervizautónkkal maximum kb. 30 méterre kell tudnunk megállni. Egyetlen kizáró tényező: a nagyon forgalmas, keskeny utak, mert ott nem tudjuk garantálni a biztonságos munkát.'
  },
  {
    question: 'Víz nélkül dolgozunk?',
    answer: 'Nem, mert a minőség nálunk elsődleges. Víz nélkül nem lehetne olyan prémium tisztaságot biztosítani, amire büszkék vagyunk. Ha minket választasz, az autód a lehető legkíméletesebb és legprofibb mosást kapja.'
  },
  {
    question: 'Kell áramot vagy vizet adnod?',
    answer: 'Egyáltalán nem! Mindent viszünk magunkkal: vizet, áramot, és még a felhasznált vizet is összegyűjtjük és elszállítjuk. Neked csak hátra kell dőlnöd, mi pedig elvégezzük a munkát.'
  },
  {
    question: 'Mennyi ideig tart egy autómosás?',
    answer: 'Ez a választott szolgáltatástól függ – egy Prémium külső tisztítás kb. 1 órát vesz igénybe, míg egy Exklúzív külső-belső csomag akár 3–4 órát is igényelhet. De a végeredmény mindig megéri a várakozást!'
  },
  {
    question: 'Vegyszeres ülés- és kárpittisztítás után mennyi a száradási idő?',
    answer: 'Átlagosan 1–2 óra. Nyári melegben gyakran már a munka végeztével teljesen száraz az autó belseje, így azonnal használhatod.'
  },
  {
    question: 'Miért fontos a gumi- és műanyagápolás?',
    answer: 'Mert nem csak széppé teszi az autót: azonnal felfrissíti a felületeket, fényesebbek és újszerűbbek lesznek, miközben egy védőréteg óvja őket az UV-sugárzástól. Így a napfény kevésbé öregíti és károsítja az anyagokat.'
  },
  {
    question: 'Mi a különbség a wax és a kerámia bevonat között?',
    answer: 'A wax egy vékony viaszréteget képez, ami szép fényt ad, de sajnos rövid életű – az első vegyszeres mosás után már le is oldódhat. A kerámia bevonat ezzel szemben egy mikroszkopikus kristályréteget hoz létre a fényezésen, amely akár 3 hónapig is tartós védelmet ad. Ellenáll a vegyszeres mosásnak, kiemeli a színek mélységét, és extra fényt kölcsönöz az autónak.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setClosingIndex(index);
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setClosingIndex(null);
    }
  };

  return (
    <section className="faq-wrapper">
      <h2 className="faq-heading">GYIK</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const isClosing = closingIndex === index;

          return (
            <div
              key={index}
              className={`faq-block ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className={`arrow ${isActive ? 'rotated' : ''}`}>⌄</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
