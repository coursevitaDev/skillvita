"use client";
import React from "react";

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 py-3 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-[#22c55e] uppercase animate-pulse">
        SKILLVITA — WALL OF PORTFOLIOS (FOR STUDENTS)
      </p>
    </div>
  );
}

