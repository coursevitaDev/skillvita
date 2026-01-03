"use client";

import React from "react";
import { Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationCTA() {
    const scrollToListing = () => {
        const element = document.getElementById("certification-listing");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#32fe6b]/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#014051]/20 text-[#32fe6b] border border-[#014051]/30 shadow-[0_0_20px_rgba(50,254,107,0.1)]"
            >
                <Award className="h-8 w-8" />
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mb-4 text-4xl font-bold text-white max-w-2xl px-4"
            >
                Build skills. Prove execution. <span className="text-[#32fe6b]">Get certified the right way.</span>
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative z-10 text-neutral-400 text-lg mb-10 max-w-lg font-medium px-4"
            >
                Select a simulation and start building your verified portfolio today.
            </motion.p>

            <motion.button
                onClick={scrollToListing}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-[#32fe6b] hover:bg-[#2ce660] text-black font-bold h-14 px-12 rounded-full text-lg shadow-[0_0_25px_rgba(50,254,107,0.3)] hover:shadow-[0_0_40px_rgba(50,254,107,0.5)] transition-all duration-300 flex items-center group"
            >
                Explore Certifications
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </div>
    );
}
