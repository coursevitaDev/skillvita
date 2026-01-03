"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyCertification() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 }
            }}
            viewport={{ once: true }}
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#32fe6b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#32fe6b]/10 text-[#32fe6b] border border-[#32fe6b]/20 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="relative z-10 mb-4 text-2xl font-bold text-white group-hover:text-[#32fe6b] transition-colors">Why <span className="text-[#32fe6b]">Skillvita</span> Certifications?</h3>
            <div className="relative z-10 text-neutral-400 leading-relaxed space-y-4 text-lg font-medium">
                <p>
                    Most certificates just prove you showed up. Skillvita certifications prove you can actually do the work. You don’t get certified by watching videos, you earn it by building real solutions and solving real problems.
                </p>
                <p>
                    Every Skillvita certificate reflects real skills applied, real work executed, and outcomes reviewed by mentors. That’s why recruiters see it as <span className="text-[#32fe6b] font-semibold">proof of work</span>, not just another piece of paper.
                </p>
                <p>
                    And the students who start early? They walk into interviews already ahead.
                </p>
            </div>
        </motion.div>
    );
}
