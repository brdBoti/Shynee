import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Milyen szolgáltatásokat kínál az autókozmetika?',
    answer: 'Teljes körű külső-belső tisztítás, kézi mosás, polírozás, viaszolás, kerámia bevonat, kárpittisztítás és szagmentesítés.'
  },
  {
    question: 'Kell időpontot foglalni?',
    answer: 'Igen, kérjük mindig foglalj előre időpontot online vagy telefonon, hogy biztosítani tudjuk a helyed.'
  },
  {
    question: 'Mennyi ideig tart egy kezelés?',
    answer: 'A szolgáltatás típusától függően általában 1,5 - 4 órát vesz igénybe.'
  },
  {
    question: 'Milyen autók jöhetnek?',
    answer: 'Személyautók, SUV-ok, furgonok – minden típust tisztítunk, akár új, akár használt.'
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
