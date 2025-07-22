import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import video from "../videos/video1.mp4";
import poster from "../images/kep2.png";
import kep1 from "../images/kep1.png";
import kep2 from "../images/kep2.png";
import kep3 from "../images/kep3.png";
import shynee from "../images/ShyneeLOGO.png";
import "./Rólunk.css";
import { Link } from "react-router-dom";

export default function Rólunk() {
  const [contentVisible, setContentVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef(null);

  const motto = "Minőség. Szenvedély. Megbízhatóság.";

  const imageData = [
    {
      image: shynee,
      text: `A Shynee 2025-ben alakult Budapesten azzal a céllal, hogy új szintre emelje az autóápolás élményét: kompromisszumok nélkül, házhoz jövünk – akár otthonodba, akár munkahelyedhez – és prémium minőségben tisztítjuk meg autódat kívül-belül.`,
    },
    { image: kep2, text: "A nevünk nem véletlen gigazsák burdáék, mikor a város fényei halványan pislákolnak, a szél susogva meséli el a régi történeteket, amiket csak a lombok hallgatnak meg. A macskák csendben surrannak az árnyékok között, míg a csillagok lassan kialszanak az égen." },
    { image: kep3, text: "Harmadik képszöveg, amit külön állíthatsz. Egy apró kávézó sarkában, ahol az illatok keverednek a nyüzsgő utcák zajával, egy öreg írógép kattogása tör át a csendet. " },
  ];

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
  }, []);

  const handleCanPlay = () => {
    setContentVisible(true);
    setVideoLoaded(true);
    setOverlayVisible(false);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowReplay(false);
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
    else alert("A fullscreen nem támogatott ezen az eszközön.");
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setShowReplay(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resumePlayback = () => setShowReplay(true);

    if (isIOS) video.addEventListener("webkitendfullscreen", resumePlayback);
    document.addEventListener("fullscreenchange", resumePlayback);
    document.addEventListener("webkitfullscreenchange", resumePlayback);
    document.addEventListener("MSFullscreenChange", resumePlayback);

    return () => {
      if (isIOS) video.removeEventListener("webkitendfullscreen", resumePlayback);
      document.removeEventListener("fullscreenchange", resumePlayback);
      document.removeEventListener("webkitfullscreenchange", resumePlayback);
      document.removeEventListener("MSFullscreenChange", resumePlayback);
    };
  }, [isIOS]);

  return (
    <div className="rolunk-container">
      <section className="hero-rolunk-section">
        <div className="video-gradient-overlay" />
        <div className="video-gradient-bottom-overlay" />

        <div className="video-box">
          <motion.video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={poster}
            onCanPlay={handleCanPlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <source src={video} type="video/mp4" />
            A böngésződ nem támogatja a videó lejátszást.
          </motion.video>

          <button
            className="video-control-btn fullscreen-btn"
            onClick={handleFullscreen}
            aria-label="Fullscreen"
          >
            ⛶
          </button>

          {isIOS && showReplay && (
            <button
              className="video-control-btn replay-btn"
              onClick={handleReplay}
              aria-label="Replay"
            />
          )}

          <AnimatePresence>
            {overlayVisible && (
              <motion.div
                className="video-loading-overlay"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>

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
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              ref={ref}
              className={`image-text-pair ${index % 2 === 0 ? "left-image" : "right-image"
                }`}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.3 }}
            >
              <motion.img
                src={item.image}
                alt={`Kép ${index + 1}`}
                className="side-image"
                whileHover={{ scale: 1.02 }}
              />
              <p className="image-caption">{item.text}</p>
            </motion.div>
          );
        })}
      </section>
      <footer className="page-motto">
        "Shynee - Mindenhol"
      </footer>
      <Link to={"/rendeles"}>
      <button className="shynee-button">
        Rendelés
      </button>
      </Link>
      
    </div>
  );
}
