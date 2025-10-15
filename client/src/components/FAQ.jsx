import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Milyen településeken dolgozunk?',
    answer: 'Az online időpontfoglalás Budapesten és környékén – Kistarcsa, Csömör, Nagytarcsa – érhető el. Ha más településre szeretné kérni a szolgáltatásunkat, az is megoldható, de ebben az esetben kérjük, telefonon vagy e-mailben egyeztessen velünk.'
  },
  {
    question: 'Lehet kártyával fizetni?',
    answer: 'Igen, készpénzt és kártyát is elfogadunk.'
  },
  {
    question: 'Hol tudjuk az autót mosni?',
    answer: 'Gyakorlatilag bárhol, ahol van szabad hozzáférés az autóhoz, elférünk körülötte. Szervizautónkkal maximum kb. 15 méterre kell tudnunk megállni. Egyetlen kizáró tényező a nagyon forgalmas, keskeny, és leejtős utak, mert ott nem tudjuk garantálni a biztonságos munkát.'
  },
  {
    question: 'Víz nélkül dolgozunk?',
    answer: 'Nem, mert a minőség számunkra elsődleges. Víz nélkül nem lehetne olyan prémium tisztaságot biztosítani, amire büszkék vagyunk. Ha minket választ, az autója a lehető legkíméletesebb és legprofibb mosást kapja.'
  },
  {
    question: 'Vállalunk céges flotta tisztítást is?',
    answer: 'Igen, flották mosását és tisztítását is biztosítjuk. Vegye fel velünk a kapcsolatot telefonon vagy e-mailben, és egyeztetjük az időpontot, illetve a részleteket.'
  },
  {
    question: 'Kell áramot vagy vizet biztosítani?',
    answer: 'Egyáltalán nem! Mindent magunkkal viszünk: vizet, áramot, és a felhasznált vizet is összegyűjtjük és elszállítjuk. Önnek csak hátra kell dőlnie, mi pedig elvégezzük a munkát.'
  },
  {
    question: 'Mennyi ideig tart egy autómosás?',
    answer: 'Ez a választott szolgáltatástól függ – egy Prémium külső tisztítás kb. 1 órát vesz igénybe, míg egy Exkluzív külső-belső csomag akár 3–4 órát is igényelhet. De a végeredmény mindig megéri a várakozást!'
  },
  {
    question: 'Vegyszeres ülés- és kárpittisztítás után mennyi a száradási idő?',
    answer: 'Átlagosan 1–2 óra. Nyári melegben gyakran már a munka végeztével teljesen száraz az autó belseje, így azonnal használhatja.'
  },
  {
    question: 'Miért fontos a gumi- és műanyagápolás?',
    answer: 'Mert nem csak széppé teszi az autót: azonnal felfrissíti a felületeket, fényesebbek és újszerűbbek lesznek, miközben egy védőréteg óvja őket az UV-sugárzástól. Így a napfény kevésbé öregíti és károsítja az anyagokat.'
  },
  {
    question: 'Mi a különbség a wax és a kerámia bevonat között?',
    answer: 'A wax egy vékony viaszréteget képez, amely szép fényt ad, de sajnos rövid életű – az első vegyszeres mosás után már le is oldódhat. A kerámia bevonat ezzel szemben egy mikroszkopikus kristályréteget hoz létre a fényezésen, amely akár 3 hónapig is tartós védelmet ad. Ellenáll a vegyszeres mosásnak, kiemeli a színek mélységét, és extra fényt kölcsönöz az autónak.'
  },
  {
    question: 'Milyen gépjárműveket tisztítunk?',
    answer: 'Kizárólag B kategóriás jogosítvánnyal vezethető személygépkocsikat.'
  },
  {
    question: 'Ott kell lenni, amikor az autót mossuk?',
    answer: 'Külső tisztítás esetén mindenképpen, mivel az ilyenkor használt vízgyűjtő ponyva leterítése után erre rá kell állni az autóval. A mosás végeztével az autóval le kell állni a ponyváról.'
  },
  {
    question: 'Mi a teendő, ha egyik csomag sem felel meg teljesen az igényeinek?',
    answer: 'Amennyiben az előre meghirdetett csomagok közül egyik sem elégíti ki teljes mértékben az Ön igényeit, kérjük, vegye fel velünk a kapcsolatot elérhetőségeinken. Igyekszünk személyre szabott megoldást kínálni, hogy az autómosás pontosan az Ön elképzeléseinek megfelelő legyen.'
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
