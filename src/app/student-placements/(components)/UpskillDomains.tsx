"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Settings,
  TrendingUp,
  Megaphone,
  Palette,
  FlaskConical,
  Briefcase,
} from "lucide-react";

const domains = [
  {
    name: "Technology",
    subtitle: "Full stack & cloud development",
    icon: <Code className="w-4 h-4" />,
  },
  {
    name: "Product & Engineering",
    subtitle: "Build & ship innovative products",
    icon: <Settings className="w-4 h-4" />,
  },
  {
    name: "Business & Management",
    subtitle: "Strategy & operations leadership",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    name: "Marketing & Communication",
    subtitle: "Brand storytelling & campaigns",
    icon: <Megaphone className="w-4 h-4" />,
  },
  {
    name: "Creative & Design",
    subtitle: "UI/UX & visual design mastery",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    name: "Research & Analysis",
    subtitle: "Data insights & market research",
    icon: <FlaskConical className="w-4 h-4" />,
  },
  {
    name: "Operations & Finance",
    subtitle: "Process optimization & budgeting",
    icon: <Briefcase className="w-4 h-4" />,
  },
];

export default function UpskillDomains() {
  return (
    <section className="relative w-full py-20 px-4 bg-black">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Scrolling Domains */}
        <div className="relative w-full max-w-sm mx-auto">
          <Card className="overflow-hidden bg-[#014051]/10 backdrop-blur-md shadow-xl rounded-2xl border-2 border-[#014051]">
            <CardContent className="relative h-[380px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-0 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 16,
                    ease: "linear",
                  }}
                >
                  {[...domains, ...domains].map((domain, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-6 py-4 border-b border-[#014051] relative hover:bg-[#014051]/30 transition-colors"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 flex items-center justify-center text-[#32fe6b]">
                            {domain.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{domain.name}</p>
                            <p className="text-xs text-gray-400">{domain.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-[#014051] text-[#32fe6b] border border-[#32fe6b]/20">
            Career Pathways
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Upskill across{" "}
            <span className="text-[#32fe6b]">
              7 domains
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Choose from Technology, Product, Business, Marketing, Design, Research, or Operations.
            Each domain offers structured learning paths with hands-on projects, mentorship, and
            real world simulations to prepare you for placements.
          </p>

          <div className="flex gap-2 flex-wrap">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#014051]/30 text-[#32fe6b] border border-[#014051]">
              Role Aligned Skills
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#014051]/30 text-[#32fe6b] border border-[#014051]">
              Industry Projects
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#014051]/30 text-[#32fe6b] border border-[#014051]">
              Expert Mentors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
