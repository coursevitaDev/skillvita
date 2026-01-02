"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyInternships() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }}
      viewport={{ once: true }}

      // Floating Animation
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}

      whileHover={{
        scale: 1.02,
        y: -15,
        transition: { duration: 0.2 }
      }}
      className="relative h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:bg-neutral-900 hover:border-[#32fe6b] transition-all duration-300 group overflow-hidden"
    >
      {/* Spotlight Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#32fe6b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#32fe6b]/10 text-[#32fe6b] border border-[#32fe6b]/20 group-hover:scale-110 transition-transform duration-300">
        <Briefcase className="h-7 w-7" />
      </div>
      <h3 className="relative z-10 mb-4 text-2xl font-bold text-white group-hover:text-[#32fe6b] transition-colors">Why <span className="text-[#32fe6b]">Internships?</span></h3>
      <p className="relative z-10 text-neutral-400 leading-relaxed text-lg font-medium">
        Internships give students early clarity, confidence, and practical experience advantages that academics alone cannot provide. Students who start doing internships sooner understand their strengths faster, build stronger profiles, and perform better in placements.
      </p>
    </motion.div>
  );
}
