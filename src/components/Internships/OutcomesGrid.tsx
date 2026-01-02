"use client";

import React from "react";
import { BadgeCheck, UserCheck, Briefcase, Lightbulb, HeartHandshake, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function OutcomesGrid() {
  const outcomes = [
    {
      icon: BadgeCheck,
      title: "Verified, High Quality Internships",
      desc: "Only verified, well defined opportunities, no confusion, no uncertainty.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: UserCheck,
      title: "Recruiter Ready Profile",
      desc: "Structured, clean profiles that help you stand out quickly and clearly.",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: Briefcase,
      title: "A Portfolio That Speaks for You",
      desc: "Every project and internship becomes proof of work that shows real capability.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Lightbulb,
      title: "Clarity at Every Step",
      desc: "Track your entire journey from application to shortlist in one place.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: HeartHandshake,
      title: "Support That Moves You Forward",
      desc: "Resume tips, interview help, and capability insights make you internship ready faster.",
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20"
    },
    {
      icon: Crown,
      title: "Premium Pathways",
      desc: "Students on Premium Pathways also receive mentor support and upskilling if needed during the application process.",
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20"
    },
  ];

  return (

    <section aria-labelledby="outcomes-heading" className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 id="outcomes-heading" className="text-3xl font-bold text-white mb-2"> <span className="text-[#32fe6b]">Student</span> Outcomes</h2>
          <p className="text-xl text-neutral-400">Everything You Need to Become Internship Ready</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 }
              }}
              viewport={{ once: true }}

              // Floating Animation
              animate={{ y: [0, -10, 0] }}
              // Stagger the floating so they don't all move in sync
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}

              whileHover={{
                scale: 1.05,
                y: -15,
                transition: { duration: 0.2 } // Snappy hover override
              }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-[#32fe6b] transition-colors duration-300 group cursor-default overflow-hidden"
            >
              {/* Spotlight Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#32fe6b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border ${item.bg} ${item.color} shadow-lg`}
              >
                <item.icon className="h-8 w-8" />
              </motion.div>

              <h3 className="relative z-10 font-bold text-white mb-3 text-lg group-hover:text-[#32fe6b] transition-colors">{item.title}</h3>
              <p className="relative z-10 text-sm text-neutral-400 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
