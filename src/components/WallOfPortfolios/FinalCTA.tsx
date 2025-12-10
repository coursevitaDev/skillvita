"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-zinc-800 text-center" aria-label="Final Call To Action">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Start building your portfolio now.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10">Upload your resume to generate an instant portfolio and strengthen it through guided projects, tasks, and outcomes.</p>
        <button className="px-12 py-5 rounded-full bg-[#22c55e] text-black font-bold text-lg shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">Start Learning</button>
      </div>
    </section>
  );
}

