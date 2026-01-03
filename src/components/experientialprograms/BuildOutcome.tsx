"use client";
import React from "react";

export default function ProgramsAcrossDomains() {
    const domains = [
        {
            title: "Technology",
            items: ["Data & AI", "Web & Software Development", "Cloud & DevOps", "IoT & Embedded Systems"]
        },
        {
            title: "Design & Creative",
            items: ["UI/UX Design", "Graphic Design", "Motion Graphics", "Product Design"]
        },
        {
            title: "Marketing & Growth",
            items: ["Digital Marketing", "Content Strategy", "Performance Marketing", "Brand Growth"]
        },
        {
            title: "Operations & Business",
            items: ["Project Management", "Business Analysis", "Supply Chain", "FinOps"]
        },
        {
            title: "Research & Analysis",
            items: ["Market Research", "Data Analysis", "User Research", "Systems Analysis"]
        },
    ];

    return (
        <section className="py-24 bg-black overflow-hidden" aria-labelledby="domains-heading">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 reveal section-enter-fade">
                    <span className="text-[#32FE6B] font-mono text-sm tracking-widest uppercase block mb-2">Programs</span>
                    <h2 id="domains-heading" className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
                        Programs Across Domains
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, i) => (
                        <div
                            key={domain.title}
                            className={`p-8 bg-zinc-950 border border-zinc-900 reveal section-enter-slide-up delay-${(i + 1) * 100} hover:border-[#32FE6B]/40 transition-all duration-300 group`}
                        >
                            <h3 className="text-2xl font-black text-[#32FE6B] mb-6 uppercase italic">{domain.title}</h3>
                            <ul className="space-y-3">
                                {domain.items.map((item) => (
                                    <li key={item} className="text-zinc-400 font-light flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#32FE6B]/40"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center reveal section-enter-fade delay-500">
                    <p className="text-zinc-500 text-lg italic border-t border-zinc-900 pt-8">
                        Each program is designed around how real roles function.
                    </p>
                </div>
            </div>
        </section>
    );
}
