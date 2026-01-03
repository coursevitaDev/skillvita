"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const certificationFAQs: FAQItem[] = [
    {
        question: "Are Skillvita certifications real and valid?",
        answer: "Yes. Issued only after verified simulations and mentor reviews."
    },
    {
        question: "Do I need prior experience?",
        answer: "No. Beginner to advanced progression supported."
    },
    {
        question: "When will I receive my certificate?",
        answer: "After successful completion and mentor review."
    },
    {
        question: "Are these certifications useful for jobs or internships?",
        answer: "Yes. Recruiters value proof of work over theory certificates."
    },
    {
        question: "Is mentor support included?",
        answer: "Yes. Mentors guide and review throughout."
    },
    {
        question: "Can I add this to LinkedIn and my resume?",
        answer: "Absolutely. Designed to be resume and LinkedIn ready."
    }
];

export default function CertificationFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Frequently Asked <span className="text-[#32fe6b]">Questions</span> (FAQs)
                    </h2>
                </div>

                <div className="space-y-4">
                    {certificationFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${activeIndex === index
                                ? "border-[#32fe6b] bg-neutral-900"
                                : "border-neutral-800 bg-neutral-900/50 hover:border-[#32fe6b]/30"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-[#32fe6b]" : "text-white"
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 flex-shrink-0 text-[#32fe6b]`}>
                                    {activeIndex === index ? (
                                        <Minus className="w-6 h-6" />
                                    ) : (
                                        <Plus className="w-6 h-6" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-neutral-400 leading-relaxed font-medium">
                                            {faq.answer.split('\n').map((line, i) => (
                                                <span key={i} className="block mb-2 last:mb-0">
                                                    {line}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
