import React from "react";
import { BadgeCheck, UserCheck, Briefcase, Lightbulb, HeartHandshake } from "lucide-react";

export default function OutcomesGrid() {
  const outcomes = [
    { icon: BadgeCheck, text: "Verified, High-Quality Internships", color: "text-emerald-400", bg: "bg-emerald-950/50 border-emerald-500/20" },
    { icon: UserCheck, text: "Recruiter-Ready Profile", color: "text-green-400", bg: "bg-green-950/50 border-green-500/20" },
    { icon: Briefcase, text: "A Portfolio That Speaks for You", color: "text-teal-400", bg: "bg-teal-950/50 border-teal-500/20" },
    { icon: Lightbulb, text: "Clarity at Every Step", color: "text-lime-400", bg: "bg-lime-950/50 border-lime-500/20" },
    { icon: HeartHandshake, text: "Support That Moves You Forward", color: "text-cyan-400", bg: "bg-cyan-950/50 border-cyan-500/20" },
  ];

  return (
    <section aria-labelledby="outcomes-heading" className="bg-neutral-950 py-16 border-t border-neutral-900 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 id="outcomes-heading" className="mb-12 text-center text-3xl font-bold text-white"><span className="text-emerald-500">Student</span> Outcomes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {outcomes.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:-translate-y-1">
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full border ${item.bg} ${item.color}`}>
                <item.icon className="h-7 w-7" />
              </div>
              <p className="font-semibold text-neutral-200">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
