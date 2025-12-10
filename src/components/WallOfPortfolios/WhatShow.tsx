"use client";
import React from "react";

function IconCard({ iconPath, label }: { iconPath: string; label: string }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-[#22c55e] transition-all duration-300 text-center hover:-translate-y-2 hover:shadow-lg hover:shadow-[#052e16]/20 cursor-default relative overflow-hidden">
      <div className="absolute inset-0 bg-[#22c55e]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 mx-auto bg-[#14532d]/20 rounded-full flex items-center justify-center text-[#22c55e] mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path></svg>
        </div>
        <h3 className="font-semibold text-white">{label}</h3>
      </div>
    </div>
  );
}

export default function WhatShow() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" aria-label="What These Portfolios Show">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.03 }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">What These Portfolios Show</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Portfolios reveal how students perform, solve, and deliver the exact signals recruiters evaluate. A strong portfolio shows readiness, reduces doubt, and improves shortlist chances.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { label: "Guided tasks", iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
            { label: "Role-aligned projects", iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { label: "Job simulations", iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z" },
            { label: "Team workflows", iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { label: "Mentor-reviewed", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          ].map((item, idx) => (
            <IconCard key={idx} label={item.label} iconPath={item.iconPath} />
          ))}
        </div>
      </div>
    </section>
  );
}

