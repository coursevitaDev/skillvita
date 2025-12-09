"use client";

import React from "react";

interface DomainsPillsProps {
  domains: string[];
  selected: string | null;
  onSelect: (domain: string | null) => void;
}

export default function DomainsPills({ domains, selected, onSelect }: DomainsPillsProps) {
  return (
    <div aria-label="Internship domains" role="group" className="w-full overflow-x-auto pb-8">
      <div className="flex space-x-2 min-w-max px-1">
        <button
          type="button"
          onClick={() => onSelect(null)}
          aria-pressed={selected === null}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 focus:ring-offset-black ${
            selected === null
              ? "bg-emerald-600 text-white border-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
              : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-neutral-800"
          }`}
        >
          All
        </button>
        {domains.map((domain) => {
          const isActive = selected === domain;
          return (
            <button
              key={domain}
              type="button"
              onClick={() => onSelect(isActive ? null : domain)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 focus:ring-offset-black ${
                isActive
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                  : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-neutral-800"
              }`}
            >
              {domain}
            </button>
          );
        })}
      </div>
    </div>
  );
}
