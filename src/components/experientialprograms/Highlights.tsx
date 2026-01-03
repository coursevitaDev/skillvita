"use client";
import React from "react";
import HighlightItem from "@/components/experientialprograms/HighlightItem";
import { Layers, ClipboardList, CheckCircle, Users, MessageSquare, Play, TrendingUp, Folder } from "lucide-react";

export default function Highlights() {
  const items = [
    "Role Based Simulations",
    "Guided Projects",
    "Capability Tasks",
    "Team Workflows",
    "Mentor Feedback",
    "Demo Days",
    "Skill Journey Tracking",
    "Portfolio Outcomes",
  ];

  return (
    <section className="py-24 bg-black border-y border-zinc-900 relative overflow-hidden" aria-labelledby="highlights-heading">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_#32FE6B05,_transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal section-enter-fade">
          <span className="text-[#32FE6B] font-mono text-sm tracking-widest uppercase block mb-2">Capabilities</span>
          <h2 id="highlights-heading" className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Why SkillVita Experiential Programs</h2>
        </div>

        {/* Scrollable 3D Card Rail */}
        <div className="relative">
          <div
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-none"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {items.map((label, i) => {
              const icons: Record<string, React.ReactNode> = {
                "Role Based Simulations": <Layers size={28} />,
                "Guided Projects": <ClipboardList size={28} />,
                "Capability Tasks": <CheckCircle size={28} />,
                "Team Workflows": <Users size={28} />,
                "Mentor Feedback": <MessageSquare size={28} />,
                "Demo Days": <Play size={28} />,
                "Skill Journey Tracking": <TrendingUp size={28} />,
                "Portfolio Outcomes": <Folder size={28} />,
              };
              return (
                <div key={label} className="snap-start snap-always flex-shrink-0 animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  <HighlightItem label={label} delay={(i + 1) * 100} icon={icons[label]} />
                </div>
              );
            })}
          </div>

          {/* Gradient Masks for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
