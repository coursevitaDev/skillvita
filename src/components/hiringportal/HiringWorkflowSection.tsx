"use client";
import React from "react";
import { Briefcase, Search, FileCheck, Target, CheckCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HiringWorkflowSection() {
    const workflowSteps = [
        {
            icon: Briefcase,
            title: "Post Role Requirements",
            desc: "Internships, trainee, and early career roles with clear expectations"
        },
        {
            icon: Search,
            title: "Source Capability Profiles",
            desc: "Domain-aligned profiles built on real execution"
        },
        {
            icon: FileCheck,
            title: "Evaluate Real Execution",
            desc: "Projects, simulations, tasks, and documentation before interviews"
        },
        {
            icon: Target,
            title: "Run Capability Screening",
            desc: "Create role-specific simulations and quizzes with auto-evaluation"
        },
        {
            icon: CheckCircle,
            title: "Shortlist & Compare",
            desc: "Data-driven shortlisting using execution signals"
        },
        {
            icon: MessageSquare,
            title: "Request Interviews",
            desc: "Connect directly or via SkillVita"
        },
    ];

    return (
        <section className="py-20 bg-black relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hiring Workflow</h2>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                        A streamlined process to help you find and hire the right talent efficiently
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workflowSteps.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative overflow-hidden flex flex-col p-6 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 group",
                                "hover:bg-zinc-800 hover:border-green-500/50 hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.15)]"
                            )}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/10 transition-colors">
                                        <item.icon className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors" />
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-500 group-hover:text-green-400 transition-colors">
                                        {i + 1}
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg text-white group-hover:text-green-400 transition-colors mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
