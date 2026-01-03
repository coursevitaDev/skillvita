"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Overview() {
  return (
    <section className="py-20 bg-black relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-16 text-white shadow-2xl transition-all duration-500 hover:border-zinc-700",
          "after:absolute after:-right-20 after:-top-20 after:h-[500px] after:w-[500px] after:bg-green-500/5 after:blur-3xl after:content-['']"
        )}>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Beyond <span className="text-green-500 relative inline-block">Resumes<span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span></span>. <br /><span className="text-green-500">Based on Execution.</span></h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              SkillVita&apos;s Hiring Portal helps recruiters discover candidates through verified proof of work instead of resumes. Every student profile includes real projects, role based tasks, and mentor reviewed outcomes.
            </p>
            <ul className="space-y-4">
              {["Improve hiring accuracy", "Reduce screening time", "Increase confidence in early career hiring"].map((text, i) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mr-3 border border-green-500/20">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

