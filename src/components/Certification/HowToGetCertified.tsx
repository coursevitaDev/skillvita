"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowToGetCertified() {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            How to Get Your <span className="text-[#32fe6b]">Skills Certified</span>
                        </h2>
                        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                            <p>
                                Certifications matter only when they reflect what you can actually do. Skillvita certifications are earned by completing real simulations that mirror industry work, reviewed and validated by mentors.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center lg:justify-start"
                    >
                        <p className="text-white font-bold text-2xl md:text-3xl border-l-4 border-[#32fe6b] pl-6 leading-tight">
                            No shortcuts. No exams without execution. Just proof of work.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
