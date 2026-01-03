"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CertificationHero() {
    const scrollToListing = () => {
        const element = document.getElementById("certification-listing");
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
                            Skillvita Certifications
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Get Your Skills Certified <br />
                            <span className="text-[#32fe6b]">Through Real Work</span>
                        </h1>
                        <p className="max-w-xl text-lg text-neutral-400 leading-relaxed font-medium">
                            Earn industry aligned certifications by completing hands on job simulations, not theory exams.
                        </p>
                        <div className="flex flex-col w-full sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={scrollToListing}
                                size="lg"
                                className="bg-[#32fe6b] hover:bg-[#2ce660] text-[#014051] border-0 rounded-full px-8 h-12 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                                aria-label="Explore certifications"
                            >
                                Explore Certifications
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative aspect-square max-w-md mx-auto w-full lg:max-w-lg flex items-center justify-center">
                            {/* Decorative Glows */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-[#32fe6b]/20 to-[#014051]/20 rounded-full blur-3xl"
                            />

                            {/* Main Animated Badge */}
                            <motion.div
                                initial={{ rotate: -10, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                                className="relative z-20 w-64 h-64 md:w-80 md:h-80"
                            >
                                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(50,254,107,0.4)]">
                                    {/* Outer Ring */}
                                    <motion.circle
                                        cx="100" cy="100" r="90"
                                        stroke="#32fe6b"
                                        strokeWidth="2"
                                        strokeDasharray="10, 5"
                                        fill="none"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Inner Shield */}
                                    <motion.path
                                        d="M100 30L160 55V100C160 145 135 175 100 185C65 175 40 145 40 100V55L100 30Z"
                                        fill="#111"
                                        stroke="#32fe6b"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                    {/* Central Check */}
                                    <motion.path
                                        d="M70 100L90 120L135 75"
                                        stroke="#32fe6b"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                                    />
                                </svg>

                                {/* Floating "Verified" Elements */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, i % 2 === 0 ? 10 : -10, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            delay: i * 1.5
                                        }}
                                        className="absolute p-3 bg-neutral-900 border border-[#32fe6b]/30 rounded-lg text-[#32fe6b] text-xs font-bold shadow-lg"
                                        style={{
                                            top: `${20 + i * 25}%`,
                                            right: i % 2 === 0 ? '-10%' : 'auto',
                                            left: i % 2 !== 0 ? '-10%' : 'auto'
                                        }}
                                    >
                                        VERIFIED
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-neutral-800 p-4 lg:hidden">
                <Button onClick={scrollToListing} className="w-full bg-[#32fe6b] hover:bg-[#2ce660] text-[#014051] font-bold h-12 rounded-xl" aria-label="Explore certifications">
                    Explore Certifications
                </Button>
            </div>
        </section>
    );
}
