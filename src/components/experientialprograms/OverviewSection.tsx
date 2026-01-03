"use client";
import React from "react";
export default function OverviewSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" aria-labelledby="overview-heading">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,_#32FE6B,transparent_70%)]" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Animated Entry Header */}
          <div className="reveal section-enter-fade">
            <p className="text-[#32FE6B] font-mono text-sm tracking-widest uppercase mb-4">SkillVita Philosophy</p>
            <h2 id="overview-heading" className="text-3xl md:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter">
              Why SkillVita <br />
              <span className="text-[#32FE6B]">Experiential Programs</span>
            </h2>
          </div>
          {/* Main Content Block */}
          <div className="reveal section-enter-slide-up delay-100 max-w-3xl">
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light border-l-4 border-[#32FE6B] pl-8">
              SkillVita Experiential Programs are built for students who want to move beyond learning and actually do the work. Instead of watching or memorizing, you execute role based tasks, work in real team workflows, and receive mentor feedback focused on quality and outcomes. Every program creates portfolio ready proof that recruiters can evaluate, helping you move from learning to capability and from capability to placement ready confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
