"use client";

import React from "react";
import { Monitor, Cpu, Briefcase, Megaphone, PenTool, Search, Rocket, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Categories() {
    const categories = [
        { name: "Technology", icon: Monitor, color: "text-blue-400", bg: "bg-blue-500/10" },
        { name: "Product & Engineering", icon: Cpu, color: "text-indigo-400", bg: "bg-indigo-500/10" },
        { name: "Business & Management", icon: Briefcase, color: "text-amber-400", bg: "bg-amber-500/10" },
        { name: "Marketing & Communication", icon: Megaphone, color: "text-rose-400", bg: "bg-rose-500/10" },
        { name: "Creative & Design", icon: PenTool, color: "text-purple-400", bg: "bg-purple-500/10" },
        { name: "Research & Analysis", icon: Search, color: "text-teal-400", bg: "bg-teal-500/10" },
        { name: "Startup & Innovation", icon: Rocket, color: "text-orange-400", bg: "bg-orange-500/10" },
        { name: "Operations & Finance", icon: BarChart, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    ];

    return (
        <section className="relative overflow-hidden py-10 min-h-[800px] flex items-center justify-center">

            {/* Mobile View: Grid */}
            <div className="md:hidden w-full px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-8 text-center"
                >
                    Find <span className="text-[#32fe6b]">internships</span> across:
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-800 bg-neutral-900/50"
                        >
                            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${cat.bg} ${cat.color}`}>
                                <cat.icon className="h-5 w-5" />
                            </div>
                            <span className="text-neutral-300 font-medium text-center text-xs">
                                {cat.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Desktop View: Circular Orbit */}
            <div className="hidden md:flex relative w-[800px] h-[800px] items-center justify-center">

                {/* Center Title */}
                <div className="absolute z-20 text-center pointer-events-none">
                    <h3 className="text-4xl font-extrabold text-white leading-tight">
                        Find<br />
                        <span className="text-[#32fe6b]">Internships</span><br />
                        Across
                    </h3>
                </div>

                {/* Rotating Track */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    {/* The Track Decoration */}
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[#32fe6b]/30" />

                    {/* Orbiting Cards */}
                    {categories.map((cat, index) => {
                        const angle = (index * 360) / categories.length; // 45 degrees apart
                        return (
                            <div
                                key={cat.name}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    transform: `rotate(${angle}deg) translate(300px) rotate(-${angle}deg)`, // Position on circle perimeter
                                    width: '200px',
                                    height: '0px' // Wrapper has 0 height to be centered pivot
                                }}
                            >
                                <motion.div
                                    // Counter-rotate the card to keep it upright while the parent track spins
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="relative -top-[60px] -left-[100px] w-[200px] flex flex-col items-center justify-center p-5 rounded-2xl border border-neutral-800 bg-black/80 backdrop-blur-md shadow-2xl hover:border-[#32fe6b] hover:shadow-[0_0_30px_rgba(50,254,107,0.2)] transition-all duration-300 group cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <cat.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-white font-bold text-center text-sm">
                                        {cat.name}
                                    </span>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
