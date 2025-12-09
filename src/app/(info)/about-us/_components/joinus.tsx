"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const JoinSection = () => {
  const handRef = useRef(null);
  const isInView = useInView(handRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={handRef}
      className="relative flex justify-center items-center text-center px-4 min-h-[45vh] md:min-h-[50vh] overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-950" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/images/about-us/bottom.svg)" }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto pt-8 pb-20">
        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-4">
          Be a part of our <span className="text-accent-500">extended family</span>
        </h1>
        <p className="text-white text-base md:text-xl mb-8 font-light">
          {` Join us, and let's build something amazing together.`}
        </p>
        <a
          href="https://coursevita.zohorecruit.in/jobs/Careers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-500 text-brand-950 font-semibold px-10 py-3 text-base md:text-lg rounded-full 
                    transition-all duration-300 ease-in-out transform
                    hover:bg-accent-600 hover:scale-105 active:scale-95
                    shadow-lg hover:shadow-xl"
        >
          Join us
        </a>
      </div>

      {/* Scroll-triggered Animated Hand */}
      <motion.div
        className="absolute justify-center bottom-0 z-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/about-us/raiseHand.png"
          alt="Raised hand"
          width={200}
          height={200}
          className="max-h-[136px] md:max-h-[200px] w-auto"
        />
      </motion.div>
    </div>
  );
};

export default JoinSection;
