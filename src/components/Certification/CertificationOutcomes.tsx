"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, Target, Rocket } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

/* ---------------- TYPES ---------------- */
type CardPosition = "front" | "middle" | "back";

/* ---------------- DATA ---------------- */
const outcomes = [
  {
    id: 1,
    testimonial:
      "Earn credentials that are technically verified and mentor reviewed. No more paper certificates without proof.",
    author: "Verified Skill Certification",
    icon: <BadgeCheck className="h-12 w-12 md:h-16 md:w-16" />,
  },
  {
    id: 2,
    testimonial:
      "Every simulation task becomes a verified entry in your professional portfolio. Show, don't just tell.",
    author: "Proof of Work Portfolio",
    icon: <Briefcase className="h-12 w-12 md:h-16 md:w-16" />,
  },
  {
    id: 3,
    testimonial:
      "Walk into interviews with the confidence of having already done the work. Real experience, real results.",
    author: "Interview Confidence",
    icon: <Target className="h-12 w-12 md:h-16 md:w-16" />,
  },
  {
    id: 4,
    testimonial:
      "Bridge the gap between academic theory and industry expectations. Become job ready from day one.",
    author: "Career Readiness",
    icon: <Rocket className="h-12 w-12 md:h-16 md:w-16" />,
  },
];

/* ---------------- COMPONENT ---------------- */
export default function CertificationOutcomes() {
  const [positions, setPositions] = useState<CardPosition[]>([
    "front",
    "middle",
    "back",
    "back",
  ]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const last = newPositions.pop();
      if (last) newPositions.unshift(last);
      return newPositions;
    });
  };

  return (
    <section
      aria-labelledby="certification-outcomes-heading"
      className="bg-black py-20 overflow-hidden min-h-[700px] flex flex-col items-center"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full text-center relative pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2
            id="certification-outcomes-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What You <span className="text-[#32fe6b]">Gain</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Drag the cards to explore the verified outcomes of our certification
            simulations.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative mt-8 h-[450px] w-full max-w-[350px] mx-auto md:translate-x-[-175px]">
        {outcomes.map((item, index) => (
          <TestimonialCard
            key={item.id}
            testimonial={item.testimonial}
            author={item.author}
            icon={item.icon}
            handleShuffle={handleShuffle}
            position={positions[index] ?? "back"}
            id={item.id}
          />
        ))}

        {/* Swipe Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-neutral-500 flex items-center gap-2 text-sm font-medium"
        >
          <span>Swipe left to shuffle</span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current stroke-2"
          >
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </motion.div>
      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-2xl px-4"
      >
        <p className="text-[#32fe6b] font-semibold text-lg lg:text-xl leading-relaxed">
          Trusted by recruiters, valued by companies, and proven by success
          stories across the industry.
        </p>
      </motion.div>
    </section>
  );
}
