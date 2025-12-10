"use client";
import React from "react";

export default function WhyMatter() {
  return (
    <section className="py-24 bg-zinc-900 relative border-t border-zinc-800 overflow-hidden" aria-label="Why Portfolios Matter">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#14532d]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/20 blur-[80px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Why Portfolios <span className="text-[#22c55e] inline-block">Matter</span></h2>
        <div className="prose prose-lg prose-invert mx-auto text-zinc-400 relative">
          <span className="absolute -top-6 -left-6 text-6xl text-[#14532d]/50 font-serif">“</span>
          <span className="absolute -bottom-6 -right-6 text-6xl text-[#14532d]/50 font-serif">”</span>
          <p className="mb-6 leading-relaxed">
            Portfolios are the clearest signal of job-readiness. SkillVita’s Wall of Portfolios shows real student work projects, capability tasks, and simulations that helped students gain visibility and early shortlist movement.
          </p>
          <p className="mb-8">Students can also generate an instant portfolio by uploading their resume and then strengthen it through real execution.</p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#16a34a] to-[#4ade80] rounded-lg blur opacity-25"></div>
            <p className="relative text-2xl md:text-3xl font-bold px-6 py-2 bg-zinc-900 rounded-lg border border-[#22c55e]/30">
              Early proof creates early advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
