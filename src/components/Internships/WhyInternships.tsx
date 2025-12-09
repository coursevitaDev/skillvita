import React from "react";
import { Briefcase } from "lucide-react";

export default function WhyInternships() {
  return (
    <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/30 text-emerald-500 border border-emerald-500/20">
        <Briefcase className="h-6 w-6" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">Why <span className="text-emerald-500">Internships?</span></h3>
      <p className="text-neutral-400 leading-relaxed">
        Internships are the bridge between academic learning and professional execution. They provide the context needed to understand how skills apply in real-world scenarios, teaching you workplace dynamics, team collaboration, and problem-solving that classrooms simply cannot simulate. They are your first step towards building a career, not just finding a job.
      </p>
    </div>
  );
}
