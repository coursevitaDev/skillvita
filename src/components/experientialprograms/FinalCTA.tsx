"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black border-t border-[#32FE6B]/20 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_#32FE6B10,_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 id="cta-heading" className="text-4xl lg:text-7xl font-black mb-8 text-white reveal section-enter-zoom leading-tight tracking-tighter uppercase italic">
          Your Experience <br />
          <span className="text-[#32FE6B]">Becomes Your Proof</span>
        </h2>
        <p className="text-xl lg:text-2xl text-zinc-400 mb-16 max-w-4xl mx-auto reveal section-enter-slide-up delay-100 font-light italic">
          Start Your Experiential Learning with SkillVita’s experiential framework turn work into visible capability. Every simulation, task, and project you complete strengthens your portfolio and shows recruiters how you actually work not just what you studied. <br className="hidden md:block" />
          <span className="text-[#32FE6B] font-bold">This is why SkillVita students stand out earlier.</span>
        </p>

        <button
          type="button"
          className="group relative px-12 py-6 bg-[#32FE6B] text-[#014051] font-black text-2xl uppercase tracking-widest transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(50,254,107,0.6)] active:translate-y-0 active:shadow-none preserve-3d"
        >
          <span className="relative z-10">Explore Programs</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </div>

      {/* Cyber Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#32FE6B] to-transparent"></div>
    </section>
  );
}

