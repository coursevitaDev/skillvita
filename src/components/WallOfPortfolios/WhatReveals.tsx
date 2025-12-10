"use client";
import React from "react";

export default function WhatReveals() {
  return (
    <section className="py-24 bg-black border-t border-zinc-800" aria-label="What Portfolios Reveal">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white heading-glow">What a High-Performing Portfolio Reveals</h2>
          <ul className="space-y-6">
            {[
              "Explore portfolios across domains",
              "Understand the depth of strong proof",
              "See how peers presented their work",
              "Learn how real tasks led to visibility",
              "Track verified outcomes and mentor insights",
              "Show execution consistency and capability growth",
            ].map((txt, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14532d]/30 flex items-center justify-center text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-zinc-300 text-lg group-hover:text-white transition-colors">{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group bg-zinc-900 rounded-2xl border border-zinc-800 p-8 overflow-hidden">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl group-hover:bg-[#22c55e]/20 transition-colors"></div>
          <h3 className="text-2xl font-bold mb-6 text-white heading-glow">Inside a Job-Ready Portfolio</h3>
          <p className="text-zinc-500 mb-6 text-sm">A complete SkillVita portfolio includes:</p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
            {[
              "Verified skills",
              "Simulation outputs",
              "Real project outcomes",
              "Mentor insights",
              "Capability tasks",
              "Skill journey timeline",
            ].map((label, idx) => (
              <div key={label} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-2 h-2 bg-[#22c55e] rounded-full shadow-[0_0_8px_#22c55e] animate-pulse" style={{ animationDelay: `${idx * 100}ms` }}></span>
                {label}
              </div>
            ))}
          </div>
          <button className="w-full text-left bg-zinc-900 rounded-xl p-6 border-2 border-dashed border-zinc-700 text-center hover:border-[#22c55e] hover:bg-zinc-800 transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-[#22c55e]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-3 shadow-lg border border-zinc-700 group-hover:border-[#22c55e] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#22c55e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <p className="text-sm text-zinc-400">Upload resume to generate instant portfolio</p>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .heading-glow { text-shadow: 0 0 20px rgba(34,197,94,0.12); }
      `}</style>
    </section>
  );
}
