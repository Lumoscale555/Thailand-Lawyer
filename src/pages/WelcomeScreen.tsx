import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 0);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "#030915" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Thai Name */}
              <motion.div
                className="text-center mb-3"
                data-aos="fade-up"
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5c15c",
                  }}
                >
                  ทนาย บำรุง รุ่งเรือง
                </h1>
              </motion.div>

              {/* English Name */}
              <motion.div
                className="text-center mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5c15c",
                  }}
                >
                  BAMROONG ROONGRUANG
                </h2>
              </motion.div>

              {/* Thai Subheading */}
              {/* <motion.div
                className="text-center mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p
                  className="text-lg sm:text-xl md:text-2xl font-normal"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F5F5",
                  }}
                >
                  ยุติธรรม · ซื่อสัตย์ · มุ่งมั่น
                </p>
              </motion.div> */}

              {/* English Subheading */}
              <motion.div
                className="text-center mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p
                  className="text-base sm:text-lg md:text-xl font-normal"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F5F5",
                  }}
                >
                  Justice · Integrity · Dedication
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-full relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gold/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-white">
                    <TypewriterEffect text=" ยุติธรรม · ซื่อสัตย์ · มุ่งมั่น" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
