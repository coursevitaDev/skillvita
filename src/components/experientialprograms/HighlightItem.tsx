"use client";
import React from "react";
import { Star } from "lucide-react";

interface HighlightItemProps {
  label: string;
  delay?: number;
  icon?: React.ReactNode;
}

export default function HighlightItem({ label, delay = 0, icon }: HighlightItemProps) {
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div
      className={`min-w-[200px] md:min-w-[250px] p-8 bg-black border border-[#32FE6B]/10 rounded-none text-center group reveal section-enter-pop ${delayClass} cursor-pointer hover:border-[#32FE6B] transition-all duration-500 transform-gpu hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(50,254,107,0.2)] snap-center`}
      role="listitem"
    >
      <div className="w-16 h-16 mx-auto mb-6 bg-[#014051]/20 border border-[#32FE6B]/20 flex items-center justify-center text-[#32FE6B] group-hover:bg-[#32FE6B] group-hover:text-[#014051] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 preserve-3d">
        <div className="transform translate-z-10">{icon ?? <Star size={28} />}</div>
      </div>
      <h3 className="font-bold text-zinc-300 group-hover:text-white text-base tracking-wider uppercase transition-colors">{label}</h3>
    </div>
  );
}
