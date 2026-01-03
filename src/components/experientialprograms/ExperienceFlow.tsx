"use client";
import React from "react";
import TimelineStep from "@/components/experientialprograms/TimelineStep";

export default function ExperienceFlow() {
  const steps = [
    { title: "Step 1: Choose a Role", desc: "Select an experiential program aligned with your domain or career interest.", dir: "left" },
    { title: "Step 2: Learn by Doing", desc: "Build skills by executing tasks, not consuming lectures.", dir: "right" },
    { title: "Step 3: Work Inside Simulations", desc: "Operate within real world workflows, deadlines, and expectations.", dir: "left" },
    { title: "Step 4: Get Mentor Feedback", desc: "Receive structured reviews and improvement guidance.", dir: "right" },
    { title: "Step 5: Build Proof of Work", desc: "Your completed work becomes verified capability proof.", dir: "left" },
  ];

  return (
    <section className="py-24 bg-black relative" aria-labelledby="flow-heading">
      <div className="absolute inset-0 bg-[#32FE6B]/5 bg-[radial-gradient(#32FE6B_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 reveal section-enter-fade">
          <span className="text-[#32FE6B] font-mono text-sm tracking-widest uppercase block mb-2">Student Journey</span>
          <h2 id="flow-heading" className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">Experience Flow</h2>
        </div>

        <div className="relative max-w-6xl mx-auto pl-8 lg:pl-0 timeline-container">
          <div className="timeline-line hidden lg:block bg-zinc-900 w-[2px] h-full absolute left-1/2 -translate-x-1/2" aria-hidden="true"></div>
          <div className="timeline-progress hidden lg:block bg-[#32FE6B] w-[2px] absolute left-1/2 -translate-x-1/2 top-0 shadow-[0_0_15px_rgba(50,254,107,0.5)] transition-all duration-300" id="timelineProgress" aria-hidden="true" style={{ height: 0 }}></div>
          <div className="space-y-4" role="list">
            {steps.map((step) => (
              <TimelineStep key={step.title} title={step.title} desc={step.desc} dir={step.dir as "left" | "right"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
