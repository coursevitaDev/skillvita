"use client";
import React, { useEffect } from "react";

export default function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative z-10 max-w-3xl mx-auto mt-20 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h4 className="text-white font-bold">Portfolio Preview</h4>
          <button onClick={onClose} className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 text-white">×</button>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-40 bg-zinc-800 rounded-lg border border-zinc-700"></div>
            <div className="h-24 bg-zinc-800 rounded-lg border border-zinc-700"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-40 bg-zinc-700 rounded"></div>
            <div className="h-3 w-64 bg-zinc-800 rounded"></div>
            <div className="h-3 w-56 bg-zinc-800 rounded"></div>
            <button className="mt-6 px-6 py-3 rounded-lg bg-[#22c55e] text-black font-bold">Open Full Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

