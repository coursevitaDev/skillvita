"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Users, Map, FileSearch } from "lucide-react";

const pathways = [
  {
    id: 1,
    title: "1:1 Mentor Support",
    content:
      "Get personalized guidance from industry experts who have walked the path. Regular check-ins to ensure you&apos;re on the right track.",
    icon: Users,
  },
  {
    id: 2,
    title: "Priority Access",
    content:
      "Jump the queue with priority application reviews and early access to premium internship listings.",
    icon: Star,
  },
  {
    id: 3,
    title: "Deep Capability Mapping",
    content:
      "Advanced assessments to identify your hidden strengths and match you with roles where you will excel.",
    icon: Map,
  },
  {
    id: 4,
    title: "Expert Portfolio Reviews",
    content:
      "Detailed feedback on your portfolio projects to ensure they meet professional standards and impress recruiters.",
    icon: FileSearch,
  },
];

export default function PremiumAccordion() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="bg-neutral-900 py-16 text-white border-y border-neutral-800 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 border border-emerald-500/20 mb-6">
              <Star className="mr-2 h-4 w-4" /> Premium Pathways
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Accelerate Your <span className="text-emerald-500">Career</span></h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-md">
              Unlock exclusive benefits designed to fast-track your journey from student to professional with our Premium membership.
            </p>
          </div>

          <div className="space-y-4">
            {pathways.map((item) => (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  activeId === item.id
                    ? "border-emerald-500 bg-neutral-900/50 hover:border-emerald-500/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-emerald-500/50 hover:bg-neutral-900"
                } hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]`}
              >
                <button
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset rounded-2xl"
                  aria-expanded={activeId === item.id}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-emerald-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-lg text-white">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
                      activeId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pl-[4.5rem] text-neutral-400">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
