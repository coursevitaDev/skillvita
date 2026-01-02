"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhySkillVita() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.1 }
      }}
      viewport={{ once: true }}

      // Floating Animation
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
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
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h3 className="relative z-10 mb-4 text-2xl font-bold text-white group-hover:text-[#32fe6b] transition-colors">Why <span className="text-[#32fe6b]">SkillVita</span> Internships?</h3>
      <div className="relative z-10 text-neutral-400 leading-relaxed space-y-4 text-lg font-medium">
        <p>
          SkillVita helps students start early by providing access to verified, skill aligned internships during their academic journey. With clear expectations, outcomes, and pay details. We help students apply confidently and avoid unreliable opportunities.
        </p>
        <p>
          Starting early creates real advantages the longer you wait, the more opportunities your peers take. SkillVita helps you stay ahead by starting at the right time.
        </p>
      </div>
    </motion.div>
  );
}
