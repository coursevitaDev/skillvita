import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhySkillVita() {
  return (
    <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-900/30 text-green-500 border border-green-500/20">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">Why <span className="text-emerald-500">SkillVita</span> Internships?</h3>
      <p className="text-neutral-400 leading-relaxed">
        We don&apos;t just list jobs; we curate pathways. SkillVita ensures that every opportunity is verified and transparent. We combine learning with doing, ensuring that when you apply, you are not just hoping for a chance—you are ready for it. Our platform supports your journey from learning basics to proving your worth through tangible projects and portfolios.
      </p>
    </div>
  );
}
