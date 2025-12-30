"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface PlacementHeroProps {
  badge: string;
  headline: {
    line1: string;
    highlight: string;
    line2: string;
  };
  subheadline: string;
  ctaPrimary: string;
  onStartLearning: () => void;
}

const PlacementHero: React.FC<PlacementHeroProps> = ({
  badge,
  headline,
  subheadline,
  ctaPrimary,
  onStartLearning
}) => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#014051]/40 via-black to-[#014051]/40"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(0 0 0 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#32fe6b]/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#014051]/20 rounded-full blur-[128px]"></div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#014051]/30 border border-[#014051] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#32fe6b]" />
            <span className="text-sm font-medium text-[#32fe6b]">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white">{headline.line1}</span>
              <span className="block mt-2">
                <span className="text-[#32fe6b]">
                  {headline.highlight}
                </span>
                {" "}
                <span className="text-white">{headline.line2}</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartLearning}
              className="group relative inline-flex items-center gap-2 bg-[#32fe6b] hover:bg-[#32fe6b]/90 text-black px-8 py-4 rounded-lg text-base font-semibold shadow-lg shadow-[#32fe6b]/20 hover:shadow-[#32fe6b]/30 transition-all duration-300"
            >
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementHero;
