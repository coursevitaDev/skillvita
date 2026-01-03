"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const simulationPoints = [
    "Build projects",
    "Solve real problems",
    "Submit work",
    "Get feedback",
    "Improve and complete"
];

export default function WhatIsSimulation() {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 p-8 shadow-2xl md:p-12 transition-all duration-500 hover:border-[#32fe6b]/30">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-[#32fe6b]/5 blur-3xl filter" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">
                                What is a <span className="text-[#32fe6b]">Simulation?</span>
                            </h2>
                            <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                                A structured, real world work experience broken into tasks, just like a real job role.
                            </p>
                            <Link
                                href="/simulation-info"
                                className="inline-flex items-center text-[#32fe6b] font-semibold hover:underline group"
                            >
                                Learn more: What is a Simulation?
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {simulationPoints.map((point, i) => (
                                <div key={i} className="flex items-center gap-4 bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50 hover:border-[#32fe6b]/30 transition-all">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-[#32fe6b]" />
                                    </div>
                                    <span className="text-white font-medium">{point}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
