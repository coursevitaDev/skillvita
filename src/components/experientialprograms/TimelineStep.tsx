"use client";
import React from "react";

type Dir = "left" | "right";

interface TimelineStepProps {
  title: string;
  desc: string;
  dir: Dir;
}

export default function TimelineStep({ title, desc, dir }: TimelineStepProps) {
  return (
    <div className={`flex flex-col lg:flex-row items-center w-full mb-16 timeline-step group`}>
      <div className={`w-full lg:w-1/2 ${dir === "right" ? "lg:order-last lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
        <div className="p-8 bg-black border border-[#32FE6B]/10 group-[.active]:border-[#32FE6B] transition-all duration-700 preserve-3d group-[.active]:shadow-[0_0_30px_rgba(50,254,107,0.1)]">
          <h3 className="text-2xl font-bold text-white mb-4 group-[.active]:text-[#32FE6B] transition-colors">{title}</h3>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="absolute left-0 lg:left-1/2 top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0 -translate-x-1/2 lg:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-20">
        <div className="w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-700 group-[.active]:bg-[#32FE6B] group-[.active]:border-[#32FE6B] group-[.active]:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(50,254,107,0)] group-[.active]:shadow-[0_0_15px_rgba(50,254,107,0.5)]"></div>
      </div>

      <div className={`hidden lg:block w-1/2 ${dir === "right" ? "" : "order-last"}`}></div>
    </div>
  );
}

