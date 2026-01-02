"use client";
import React from "react";

const benefits = [
  {
    title: "Industry Recognized Certificates",
    desc: "Earn Credentials That Are Valued By Employers Worldwide.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8H48C50.2091 8 52 9.79086 52 12V48C52 50.2091 50.2091 52 48 52H12C9.79086 52 8 50.2091 8 48V12C8 9.79086 9.79086 8 12 8Z" fill="#014051" fillOpacity="0.05" stroke="#014051" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 16H44" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 24H44" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32H30" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="40" r="8" fill="white" stroke="#32fe6b" strokeWidth="2" />
        <path d="M37 40L39 42L43 38" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 40H48" stroke="#014051" strokeWidth="2" strokeLinecap="round" opacity="0" />
      </svg>
    ),
  },
  {
    title: "Real World Job Simulations",
    desc: "Experience Actual Workplace Scenarios And Build Practical Skills.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="44" height="32" rx="2" stroke="#014051" strokeWidth="2" />
        <path d="M8 36H52" stroke="#014051" strokeWidth="2" />
        <path d="M24 50H36" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 44V50" stroke="#014051" strokeWidth="2" />
        <circle cx="14" cy="20" r="2" fill="#32fe6b" />
        <circle cx="20" cy="20" r="2" fill="#014051" fillOpacity="0.5" />
        <circle cx="26" cy="20" r="2" fill="#014051" fillOpacity="0.5" />
        <rect x="34" y="18" width="12" height="12" rx="2" stroke="#32fe6b" strokeWidth="2" />
        <path d="M38 24L42 24" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Expert Mentorship",
    desc: "Learn From Industry Professionals Throughout Your Journey.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="20" r="8" stroke="#014051" strokeWidth="2" />
        <path d="M16 42C16 34.268 22.268 28 30 28C37.732 28 44 34.268 44 42" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 22L52 16" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 16L52 22" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="19" r="6" fill="none" stroke="#32fe6b" strokeWidth="0" />
        <path d="M8 22L16 22" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <path d="M52 38V30" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="52" cy="42" r="2" fill="#32fe6b" />
      </svg>
    ),
  },
  {
    title: "Career Advancement",
    desc: "Stand Out With Certifications That Demonstrate Your Expertise.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 46H50" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 46V36" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 46V28" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 46V20" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 46V12" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 34L26 26L36 18L46 10" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
        <circle cx="46" cy="12" r="3" fill="#32fe6b" />
      </svg>
    ),
  },
];

export default function CertificationBenefits() {

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[32px] font-semibold font-outfit text-gray-900 dark:text-white mb-4">
            Why Get Certified <span className="text-accent-500">With Us</span>?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 font-outfit max-w-2xl mx-auto">
            Gain hands on experience through job simulations and earn industry recognized credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 hover:border-accent-500"
            >
              <div className="w-[60px] h-[60px]">
                {item.icon}
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
