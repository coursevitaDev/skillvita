"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToInternships = () => {
    const element = document.getElementById("list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl relative mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              New Opportunities Added Daily
            </div>
            <span className="sr-only">Find Internships That Fit You</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Internships that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">Fit You</span>
            </h1>
            <p className="max-w-xl text-lg text-neutral-400 leading-relaxed">
              Explore verified internships with clear details on duration, skills required, eligibility, and pay. Start your career journey with confidence.
            </p>
            <div className="flex flex-col w-full sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToInternships}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                aria-label="Explore internships list"
              >
                Explore Internships
                <ArrowRight className="ml-2 h-4 w-4" />
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
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-0 -right-4 w-72 h-72 bg-emerald-900/40 rounded-full mix-blend-screen blur-3xl opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-900/40 rounded-full mix-blend-screen blur-3xl opacity-50"
              />

              <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Student exploring internships">
                <rect x="50" y="80" width="300" height="240" rx="16" fill="#171717" stroke="#333" strokeWidth="2" />
                <rect x="50" y="80" width="300" height="40" rx="16" fill="#262626" />
                <circle cx="70" cy="100" r="6" fill="#525252" />
                <circle cx="90" cy="100" r="6" fill="#525252" />
                <circle cx="110" cy="100" r="6" fill="#525252" />
                <rect x="80" y="150" width="140" height="12" rx="6" fill="#404040" />
                <rect x="80" y="180" width="200" height="8" rx="4" fill="#262626" />
                <rect x="80" y="200" width="180" height="8" rx="4" fill="#262626" />
                <rect x="80" y="220" width="160" height="8" rx="4" fill="#262626" />
                <g transform="translate(220, 200)">
                  <circle cx="60" cy="60" r="50" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M45 60L55 70L80 45" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 border-t border-neutral-800 p-4 lg:hidden">
        <Button onClick={scrollToInternships} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12 rounded-xl" aria-label="Explore internships list on mobile">
          Explore Internships
        </Button>
      </div>
    </section>
  );
}
