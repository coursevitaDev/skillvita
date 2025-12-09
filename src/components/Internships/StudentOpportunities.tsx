"use client";

import React from "react";
import { Briefcase, FolderGit2, Zap, Users, FileSearch, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentOpportunities() {
  const opportunities = [
    { icon: Briefcase, title: "Verified Internships", description: "Access roles that are vetted for authenticity and clear learning outcomes." },
    { icon: FolderGit2, title: "Industry Projects", description: "Work on real-world problem statements designed by companies." },
    { icon: Zap, title: "Skill Challenges", description: "Compete in targeted challenges to prove your expertise." },
    { icon: Users, title: "Mentorship Sessions", description: "One-on-one time with experts to guide your career path." },
    { icon: FileSearch, title: "Capability Reviews", description: "Get detailed feedback on your profile and project submissions." },
  ];

  return (
    <section className="bg-neutral-950 py-20 border-t border-neutral-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 border border-emerald-500/20 mb-4">
            <ShieldCheck className="mr-2 h-4 w-4" /> Available Now
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Student Opportunities</h2>
          <p className="text-lg text-neutral-400">What students can access through SkillVita.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center mb-16">
          {opportunities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-emerald-500 border border-neutral-700 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-8 text-center border border-neutral-800">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
            <p className="relative z-10 text-lg font-medium text-neutral-200">
              Every outcome becomes <span className="text-emerald-400 font-bold">validated proof-of-work</span> inside your SkillVita portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
