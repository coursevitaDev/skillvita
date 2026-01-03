"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const certificationSteps = [
    {
        step: "01",
        heading: "Choose a Simulation",
        description: "Select a project aligned simulation based on your domain and skill level. Find the challenge that fits your career goals.",
    },
    {
        step: "02",
        heading: "Execute Real Tasks",
        description: "Work on structured tasks reflecting real industry workflows. Apply your skills to solve real world problems.",
    },
    {
        step: "03",
        heading: "Mentor Review",
        description: "Your submissions are reviewed for quality, clarity, and execution by industry experts. Get constructive feedback to improve.",
    },
    {
        step: "04",
        heading: "Skill Validation",
        description: "Once professional benchmarks are met, your skills are validated. Move from 'I know this' to 'I have done this'.",
    },
    {
        step: "05",
        heading: "Get Certified",
        description: "Receive a Skillvita certification backed by verified proof of work. Add it to your resume and portfolio with confidence.",
    }
];

export default function CertificationProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="bg-black py-20 px-4" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#32fe6b] text-sm font-medium uppercase tracking-wider mb-2"
                    >
                        From Skills to Certification
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        How it <span className="text-[#32fe6b]">Works</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Static Background Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2" />

                    {/* Animated Foreground Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-4 md:left-1/2 top-0 w-px bg-[#32fe6b] md:-translate-x-1/2 origin-top"
                    />

                    <div className="space-y-16 py-10">
                        {certificationSteps.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="flex-1 w-full md:w-1/2 pl-12 md:pl-0"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, borderColor: "#32fe6b" }}
                                        className={`
                      relative bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl transition-colors duration-300
                      ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}
                    `}
                                    >
                                        <div className="text-[#32fe6b] text-5xl font-bold mb-4 opacity-20 select-none">
                                            {item.step}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {item.heading}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed text-lg">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>

                                {/* Center Point */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="w-4 h-4 bg-black rounded-full border-2 border-[#32fe6b]"
                                    >
                                        <div className="w-full h-full bg-[#32fe6b] rounded-full animate-ping opacity-20"></div>
                                    </motion.div>
                                </div>

                                {/* Spacer Side */}
                                <div className="hidden md:block flex-1 w-full md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
