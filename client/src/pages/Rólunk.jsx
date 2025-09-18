import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../images/kozos.webp";
import kep2 from "../images/bese.webp";
import kep3 from "../images/boti.webp";
import "./Rólunk.css";
import { Link } from "react-router-dom";

export default function Rólunk() {

  const motto = "Mobil Autókozmetika";

  const imageData = [
    { image: kep2, text: `„A prémium autó prémium törődést érdemel.”

Egy autó igazi értékét nemcsak a birtoklása adja, hanem az, ahogyan gondoskodunk róla. A Shynee-nál abban hiszünk, hogy az autó több, mint egyszerű jármű. Stílus, élmény és presztízs egyben.

Prémium mobil autókozmetikánkkal azt a célt tűztük ki, hogy ügyfeleink autói mindig szalonfényben tündököljenek, bárhol is legyenek. Minden részlet számít: nemcsak tisztítunk, hanem odafigyelünk, hogy a külső és a belső egyaránt makulátlan legyen.

Kényelmes, rugalmas és professzionális szolgáltatást nyújtunk, Önnek pedig csak annyi a dolga, hogy átvegye a ragyogó végeredményt.` },
    { image: kep3, text: `„A minőség nem luxus, hanem alapérték.”

Ezzel a szemlélettel hoztuk létre mobil autókozmetikánkat a testvéremmel közösen. Szeretnénk elérhetővé tenni a prémium minőségű autóápolást mindazok számára, akik igazán szeretik autójukat, és nem érik be kevesebbel.

Budapesten belül bárhová kimegyünk, így nem kell időt vesztegetni autómosókban, mi visszük házhoz a szalonszínvonalú tisztaságot.

Fiatal, lelkes és maximalista csapatként hiszünk abban, hogy a részletek teszik igazán különlegessé az eredményt. Minden autónál úgy dolgozunk, mintha a sajátunk lenne.` },
  ];

  

  return (
    <div className="rolunk-container">
      <section className="hero-rolunk-section">
        <div className="video-gradient-overlay" />
        <div className="video-gradient-bottom-overlay" />

        <div className="video-box">
          <motion.img
            src={heroImage}
            alt="Shynee közös kép"
            className="hero-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="scroll-indicator below">↓</div>

        <div className="hero-overlay">
          <motion.h1
            className="hero-motto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {motto}
          </motion.h1>
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </div>
      </section>
      <section className="content-section">
        {imageData.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2, // 20%-a látszódjon, akkor indul
            triggerOnce: true // csak egyszer fusson le
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`image-text-pair ${index % 2 === 0 ? "left-image" : "right-image"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={item.image}
                alt={`image-${index}`}
                className="side-image"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <motion.p
                className="image-caption"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--x", `${x}px`);
                  e.currentTarget.style.setProperty("--y", `${y}px`);
                }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          );
        })}
      </section>

      <footer className="page-motto">
        "Shynee - Mindenhol"
      </footer>
    </div>
  );
}
