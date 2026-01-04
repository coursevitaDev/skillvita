"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }} className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-600 rounded-full filter blur-[120px] opacity-20 pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 1 }} className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] bg-brand-900 rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div className="lg:w-1/2 text-center lg:text-left" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm mb-8 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_10px_#22c55e]"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-300">SkillVita Hiring Projects</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
              Hire Talent That Proves Their Skills With <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">Real Projects</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg lg:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Explore student projects, track progress, and post your own problem statements to evaluate candidates through meaningful, real-world work.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px -5px rgba(34, 197, 94, 0.6)" }} whileTap={{ scale: 0.95 }} className="group relative px-8 py-4 rounded-full bg-[#22c55e] text-black font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  View Hiring Projects
                  <motion.svg initial={{ x: 0 }} whileHover={{ x: 5 }} className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </motion.svg>
                </span>
              </motion.button>
              <motion.button whileHover={{ scale: 1.05, borderColor: "#22c55e", color: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.1)" }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-full bg-transparent border border-zinc-700 text-zinc-300 font-semibold text-lg transition-all">
                Post a Problem Statement
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div className="lg:w-1/2 w-full relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.2, type: "spring" }}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
              <div className="aspect-[4/3] relative bg-zinc-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                  alt="Team reviewing projects"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-zinc-800 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-900/50 p-2 rounded-full text-[#22c55e] border border-brand-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase">Verified Projects</p>
                    <p className="text-sm font-bold text-white">Real Skills, Real Work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
