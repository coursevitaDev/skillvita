"use client";
import React from "react";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-black" aria-label="Hero Section">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-20"></div>
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-[#32FE6B]/5 rounded-full blur-[100px] animate-float -z-10"></div>
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-[#014051]/20 rounded-full blur-[120px] animate-pulse -z-10"></div>

      {/* Decorative 3D Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#32FE6B]/20 rounded-lg rotate-12 animate-float opacity-30 hidden md:block" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)' }}></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-[#014051]/40 rounded-full animate-pulse opacity-40 hidden md:block" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(-20deg) rotateZ(30deg)' }}></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal section-enter-slide-right relative z-10 transition-all duration-700 delay-100">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white">
            Experience <span className="text-[#32FE6B] inline-block">Real Work.</span><br className="hidden sm:block" />
            Build <span className="relative inline-block whitespace-nowrap">
              Real Proof.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#32FE6B]/20 -z-10 skew-x-[-15deg]"></span>
            </span><br className="hidden sm:block" />
            <span className="inline-block">Get Placement Ready.</span>
          </h1>
          <div className="max-w-xl">
            <p className="text-lg lg:text-xl text-zinc-300 leading-relaxed font-light">
              Most students learn skills but don’t know how real work actually happens. Experiential Programs close this gap by letting you work like a professional before internships and placements begin. Instead of theory or isolated projects, you practice real roles, workflows, expectations, and delivery standards exactly how companies operate.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-8 relative z-20">
            <button
              type="button"
              className="group relative px-10 py-5 bg-[#32FE6B] text-[#014051] font-black text-xl tracking-tighter transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(50,254,107,0.5)] active:translate-y-0 active:shadow-none preserve-3d"
            >
              <span className="relative z-10 uppercase tracking-widest">Explore Programs</span>
              <div className="absolute inset-0 bg-[#32FE6B] blur-xl opacity-0 group-hover:opacity-40 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>

        <div className="relative lg:h-[600px] w-full flex items-center justify-center reveal section-enter-slide-left delay-300 perspective-1000">
          <div className="relative w-full max-w-lg preserve-3d group transition-transform duration-700 ease-out js-tilt">
            <div className="absolute -inset-1 bg-[#32FE6B] opacity-10 blur-sm rounded-lg group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl js-tilt-content">
              <div className="absolute inset-0 bg-[#014051]/20 mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Futuristic Tech Workspace"
                className="w-full h-auto object-cover img-matrix scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
                <div className="flex items-center justify-between border-t border-zinc-800/50 pt-6">
                  <div className="font-mono text-xs text-[#32FE6B] space-y-1">
                    <p>&gt; WORK_SIMULATION.INIT()</p>
                    <p>&gt; PROOF_ENGINE.ACTIVE</p>
                  </div>
                  <div className="h-1.5 w-24 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#32FE6B] w-[85%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

