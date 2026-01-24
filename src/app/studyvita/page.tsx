"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, Zap, Target } from "lucide-react";

const StudyvitaComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer - set to September 30th, 2025
  useEffect(() => {
    const targetDate = new Date("February 6, 2026 00:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // If countdown is complete, show zeros
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-white">
      <div className="relative">
        <main className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="mb-20">
              <div className="w-20 h-20 mx-auto mb-8 bg-brand-900/50 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center border border-brand-800">
                <svg
                  className="w-10 h-10 text-brand-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                StudyVita
              </h1>

              <p className="text-lg md:text-xl text-brand-200 max-w-2xl mx-auto leading-relaxed">
                AI Curated learning playlists from top open-source tutorials for
                fast, effective concept mastery.
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-brand-900/80 border border-brand-700 rounded-full mb-16 shadow-lg shadow-brand-900/50">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 shadow-[0_0_8px_rgba(50,254,107,0.8)]"></div>
              <span className="text-brand-100 font-medium tracking-wide">
                Coming Soon
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-lg mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-brand-900/40 backdrop-blur-sm border border-brand-800 rounded-xl p-4 shadow-sm hover:border-brand-600 transition-colors duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {value}
                    </div>
                    <div className="text-brand-400 text-xs uppercase tracking-wider font-semibold">
                      {unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Curation",
                  description:
                    "Intelligent algorithms select the best learning resources tailored to your needs",
                },
                {
                  icon: Zap,
                  title: "Fast Learning",
                  description:
                    "Optimized learning paths that help you master concepts in record time",
                },
                {
                  icon: Target,
                  title: "Personalized Paths",
                  description:
                    "Custom learning journeys based on your current knowledge and goals",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group h-full flex">
                    <div className="bg-brand-900/40 backdrop-blur-sm border border-brand-800 rounded-xl p-6 group-hover:border-accent-500/50 group-hover:shadow-[0_4px_20px_-4px_rgba(50,254,107,0.1)] transition-all duration-300 flex flex-col h-full items-center">
                      <div className="flex justify-center mb-4 w-12 h-12 rounded-full bg-brand-800/50 items-center mx-auto group-hover:bg-brand-800 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent-400 group-hover:text-accent-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-brand-300 text-sm leading-relaxed flex-1 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back to Home */}
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-brand-700 text-brand-300 bg-brand-900/50 backdrop-blur-sm rounded-lg hover:border-accent-500 hover:text-white hover:bg-brand-800 transition-all duration-300 group font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200 text-accent-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudyvitaComingSoon;
