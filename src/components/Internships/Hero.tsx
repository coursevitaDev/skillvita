"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToInternships = () => {
    const element = document.getElementById("list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl relative mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <div className="inline-flex items-center rounded-full border border-[#32fe6b]/50 bg-[#32fe6b]/10 px-3 py-1 text-sm font-medium ">
              <span className="flex h-2 w-2 rounded-full bg-[#32fe6b] mr-2 animate-pulse" />
              Skillvita Internships
            </div>
            <span className="sr-only">Find Internships That Fit You</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Internships That <span className="text-[#32fe6b]">Fit You</span>
            </h1>
            <p className="max-w-xl text-lg text-neutral-400 leading-relaxed font-medium">
              Explore verified internships with right details on duration, skills required, eligibility, and pay.
            </p>
            <div className="flex flex-col w-full sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToInternships}
                size="lg"
                className="bg-[#32fe6b] hover:bg-[#2ce660] text-[#014051] border-0 rounded-full px-8 h-12 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Explore internships list"
              >
                Explore Internships
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative aspect-square max-w-md mx-auto w-full lg:max-w-lg">
              {/* Decorative blobs adapted for light theme */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-0 -right-4 w-72 h-72 bg-[#32fe6b]/20 rounded-full mix-blend-multiply blur-3xl opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                className="absolute -bottom-8 -left-4 w-72 h-72 bg-[#014051]/20 rounded-full mix-blend-multiply blur-3xl opacity-50"
              />

              <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Student exploring internships">
                {/* Illustration adapted for light theme */}
                <rect x="50" y="80" width="300" height="240" rx="16" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
                <rect x="50" y="80" width="300" height="40" rx="16" fill="#f9fafb" stroke="#f3f4f6" />
                <circle cx="70" cy="100" r="6" fill="#d1d5db" />
                <circle cx="90" cy="100" r="6" fill="#d1d5db" />
                <circle cx="110" cy="100" r="6" fill="#d1d5db" />
                <rect x="80" y="150" width="140" height="12" rx="6" fill="#014051" />
                <rect x="80" y="180" width="200" height="8" rx="4" fill="#e5e7eb" />
                <rect x="80" y="200" width="180" height="8" rx="4" fill="#e5e7eb" />
                <rect x="80" y="220" width="160" height="8" rx="4" fill="#e5e7eb" />
                <g transform="translate(220, 200)">
                  <circle cx="60" cy="60" r="50" fill="#32fe6b20" stroke="#32fe6b" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M45 60L55 70L80 45" stroke="#014051" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 p-4 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Button onClick={scrollToInternships} className="w-full bg-[#32fe6b] hover:bg-[#2ce660] text-[#014051] font-bold h-12 rounded-xl" aria-label="Explore internships list on mobile">
          Explore Internships
        </Button>
      </div>
    </section>
  );
}
