"use client";
import React from "react";

const benefits = [
  {
    title: "Academic Excellence",
    desc: "Stand Out With Projects That Impress Evaluators And Demonstrate Your Skills.",
    icon: "/images/landing/certificate.png",
  },
  {
    title: "Real-World Problem Solving",
    desc: "Work On Projects That Address Actual Industry Challenges.",
    icon: "/images/landing/search.png",
  },
  {
    title: "Expert Mentorship",
    desc: "Get Guidance From Industry Professionals Throughout Your Project.",
    icon: "/images/landing/lecture.png",
  },
  {
    title: "Portfolio Builder",
    desc: "Create An Impressive Project For Your Resume And Interviews.",
    icon: "/images/landing/suitcase.png",
  },
];

export default function WhyFinalYearProjects() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[32px] font-semibold font-outfit text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-accent-500">Final Year Projects With Us</span>?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 font-outfit max-w-2xl mx-auto">
            Build impactful projects that showcase your skills and launch your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 hover:border-accent-500"
            >
              <div className="w-[60px] h-[60px]">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-semibold text-black dark:text-white text-base font-outfit">
                {item.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-outfit -mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
