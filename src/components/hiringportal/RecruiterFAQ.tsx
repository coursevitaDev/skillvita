"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

export default function RecruiterFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "How is SkillVita different from a regular job portal?",
            answer: "SkillVita shows proof-of-work, not just resumes. Recruiters evaluate projects, simulations, documentation, clarity, and capability, all verified through mentor reviews."
        },
        {
            question: "Can recruiters create their own hiring simulations?",
            answer: "Yes. Recruiters can create role-specific hiring simulations or assignments to evaluate real execution, decision-making, and work quality before interviews."
        },
        {
            question: "Can I run screening tests directly on SkillVita?",
            answer: "Yes. The Hiring Portal includes quizzes, assignments, and auto-evaluated tasks to assess role-specific capability before interviews."
        },
        {
            question: "How do I get matched candidates?",
            answer: "When you post a role, Skillvita filters candidates based on: domain, capability data, simulation performance, project relevance, and mentor evaluations. You receive a curated list of high-fit, job-ready profiles."
        },
        {
            question: "Can I contact candidates directly?",
            answer: "Yes. Recruiters can: request interviews, message candidates, or communicate through SkillVita. All contact options are built to make hiring faster and cleaner."
        }
    ];

    return (
        <section className="py-24 bg-black border-t border-zinc-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recruiter FAQs</h2>
                    <p className="text-zinc-400 text-lg">Common questions about hiring through SkillVita</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300",
                                "hover:border-green-500/30 bg-zinc-900/30 backdrop-blur-sm"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                            >
                                <span className="font-semibold text-lg text-white pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-green-500 flex-shrink-0 transition-transform duration-300",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="px-6 pb-5 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
