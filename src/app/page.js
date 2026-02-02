"use client";
import React, { useEffect, useRef, useState } from "react";
import About from "@/componentData/About";
import Customers from "@/componentData/customers";
import EventsHolder from "@/componentData/Events";
import Footer from "@/componentData/Footer";
import HomeHero from "@/componentData/HomeHero";
import Navigation from "@/componentData/NavBar";
import Topics from "@/componentData/Topics";
import { motion } from "framer-motion";

export default function Home() {
  const bgRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Adjust the multiplier for more/less movement
        const offset = window.scrollY * 0.2;
        bgRef.current.style.backgroundPositionY = `${100 + offset}px`;
      }
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-svw h-full font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <Navigation scrolled={scrolled} />
        <HomeHero />
        <div className="w-full h-fit relative min-h-[120vh]">
          <div 
            ref={bgRef}
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-15 pointer-events-none"
            style={{ 
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center 100px',
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <EventsHolder />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Customers />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Topics />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
