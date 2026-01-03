"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ClipboardList, RefreshCw, Eye } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function MentorSupport() {
    const points = [
        {
            icon: <Users className="h-12 w-12" />,
            title: "Task level Guidance",
            desc: "Step by step support as you navigate through complex project tasks.",
            label: "Personalized Support"
        },
        {
            icon: <ClipboardList className="h-12 w-12" />,
            title: "Review Feedback",
            desc: "In-depth evaluations of your work to ensure industry standards.",
            label: "Expert Review"
        },
        {
            icon: <RefreshCw className="h-12 w-12" />,
            title: "Improvement Suggestions",
            desc: "Practical tips to refine your approach and level up your skills.",
            label: "Continuous Growth"
        },
        {
            icon: <Eye className="h-12 w-12" />,
            title: "Execution Clarity",
            desc: "Get crystal clear on how to execute tasks with professional precision.",
            label: "Professional Clarity"
        }
    ];

    const testimonials = points.map((point) => ({
        name: point.title,
        designation: point.label,
        quote: point.desc,
        content: (
            <div className="flex flex-col items-center justify-center gap-6 text-[#32fe6b]">
                <div className="p-6 rounded-3xl bg-[#32fe6b]/10 border border-[#32fe6b]/20 shadow-[0_0_30px_rgba(50,254,107,0.1)]">
                    {point.icon}
                </div>
            </div>
        )
    }));

    return (
        <section className="py-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Mentor Support That <span className="text-[#32fe6b]">Matters</span>
                    </motion.h2>
                    <p className="text-lg text-neutral-400">You’re not alone while learning.</p>
                </div>

                <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay={true}
                    className="py-10"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center"
                >
                    <p className="text-[#32fe6b] font-medium text-lg lg:text-xl">
                        Mentors focus on how well you work, not just whether you submit.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
