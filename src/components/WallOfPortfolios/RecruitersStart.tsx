"use client";
import React from "react";

export default function RecruitersStart() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-800" aria-label="Recruiters Section">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-white heading-glow">How Recruiters See Your Work</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">Strong portfolios featured in SkillVita’s recruiter network, improving visibility for:</p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-[#4ade80] hover:border-[#22c55e] transition-colors cursor-default hover:bg-[#14532d]/20">Internship shortlists</span>
            <span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-[#4ade80] hover:border-[#22c55e] transition-colors cursor-default hover:bg-[#14532d]/20">Domain-based opportunities</span>
            <span className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-[#4ade80] hover:border-[#22c55e] transition-colors cursor-default hover:bg-[#14532d]/20">Recruiter evaluations</span>
          </div>
          <p className="text-zinc-400 border-l-2 border-zinc-700 pl-4">
            Plus, explore standout portfolios from students who delivered exceptional work and unlocked real opportunities.
            <br /><span className="text-white font-semibold mt-2 block">Your work becomes discoverable. Your capability becomes visible.</span>
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#22c55e]/20 rounded-2xl blur-md transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:bg-[#22c55e]/30"></div>
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-10 h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14532d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Start Early, Get Seen Early</h2>
            <p className="text-zinc-400 mb-6 text-lg">Shortlists depend on capability not marks. Students who build early get seen early.</p>
            <p className="text-[#4ade80] font-bold mb-10 text-xl">Your portfolio grows only when you start. Don’t wait for the placement season to begin.</p>
            <button className="w-full py-4 bg-[#16a34a] hover:bg-[#22c55e] text-black font-bold text-lg rounded-xl shadow-lg shadow-[#22c55e]/20 transition-all hover-jump focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-zinc-900">Start Building Your Portfolio</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heading-glow { text-shadow: 0 0 20px rgba(34,197,94,0.12); }
        .hover-jump:hover { animation: bounce-short 0.5s ease-in-out 1; }
        @keyframes bounce-short { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
      `}</style>
    </section>
  );
}
