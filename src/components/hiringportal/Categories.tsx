"use client";
import React from "react";
import { MarketingBadges, Badge } from "@/components/ui/marketing-badges";
export default function Categories() {
  const hiringPartners = [
    "Startups",
    "SMEs",
    "Tech Teams",
    "Product Teams",
    "Marketing Teams",
    "HR Departments",
    "University Hiring Partners",
  ];
  const categoriesBadges: Badge[] = [
    {
      id: "tech",
      label: "Technology",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "lg",
      rotation: -3,
      zIndex: 1,
      offsetX: -120,
      offsetY: -60,
    },
    {
      id: "product",
      label: "Product & Engineering",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "lg",
      rotation: 2,
      zIndex: 2,
      offsetX: 100,
      offsetY: -45,
    },
    {
      id: "business",
      label: "Business & Management",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "md",
      rotation: -2,
      zIndex: 3,
      offsetX: -40,
      offsetY: -10,
    },
    {
      id: "marketing",
      label: "Marketing & Communication",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "lg",
      rotation: 0,
      zIndex: 4,
      offsetX: 50,
      offsetY: 30,
    },
    {
      id: "creative",
      label: "Creative & Design",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "md",
      rotation: 3,
      zIndex: 5,
      offsetX: -90,
      offsetY: 65,
    },
    {
      id: "research",
      label: "Research & Analysis",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "sm",
      rotation: -1,
      zIndex: 6,
      offsetX: 90,
      offsetY: 90,
    },
    {
      id: "operations",
      label: "Operations & Finance",
      color: "from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-400 hover:text-[#32fe6b] hover:border-[#32fe6b] hover:from-[#014051] hover:to-[#014051] hover:shadow-[0_0_20px_-5px_rgba(50,254,107,0.3)] transition-all",
      size: "md",
      rotation: 2,
      zIndex: 7,
      offsetX: 0,
      offsetY: 100,
    },
  ];
  return (
    <section id="talent" className="relative bg-black py-2 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-green-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#32fe6b]">Talent Categories Available</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Find job-ready candidates across key domains.
          </p>
        </div>

        {/* Categories Badges Cloud */}
        <div className="flex-1 flex justify-center w-full min-h-[400px] items-start pt-0">
          <MarketingBadges badges={categoriesBadges} className="h-[300px]" />
        </div>

        {/* Hiring partners */}
        <div className="mb-20">
          <h3 className="text-center text-3xl font-bold text-[#32fe6b] mb-12">
            SkillVita supports hiring for
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hiringPartners.map((partner) => (
              <div
                key={partner}
                className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 text-center transition hover:border-[#32fe6b]/40"
              >
                <span className="text-zinc-300 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
