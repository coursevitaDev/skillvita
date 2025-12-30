"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Map, Briefcase } from "lucide-react";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const cardVariants: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, hover: { y: -8, boxShadow: "0 20px 30px -10px rgba(34, 197, 94, 0.2)", borderColor: "#22c55e", transition: { duration: 0.3 } } };

export default function Overview() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#22c55e]">

            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
              Don&apos;t let the <span className="text-[#32fe6b]">placement</span> season catch you unprepared.
            </motion.h3>
            <div className="prose prose-lg text-zinc-400">
              <motion.p variants={fadeIn} className="mb-6">
                After college, most freshers face the same problem not knowing what to do next. No clear path, no real projects to show, and no idea how to stand out in a job market that demands proof, not potential.
              </motion.p>
              <motion.p variants={fadeIn}>
                SkillVita gives you a structured way to rebuild your confidence, sharpen your skills, and create real proof of work through guided projects and simulations. You don’t guess what to do, you follow a clear, job focused path that moves you toward your first role.
              </motion.p>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={cardVariants} whileHover="hover" className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-full group cursor-default shadow-lg">
              <div className="w-12 h-12 bg-zinc-800 text-[#22c55e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] group-hover:text-black transition-colors border border-zinc-700 group-hover:border-[#22c55e] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Map className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white mb-2">Clear Path</h4>
              <p className="text-sm text-zinc-500">Don&apos;t guess what to do. Follow a roadmap.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-full mt-8 group cursor-default shadow-lg">
              <div className="w-12 h-12 bg-zinc-800 text-[#22c55e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] group-hover:text-black transition-colors border border-zinc-700 group-hover:border-[#22c55e] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white mb-2">Proof of Work</h4>
              <p className="text-sm text-zinc-500">Real projects, not just potential.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

