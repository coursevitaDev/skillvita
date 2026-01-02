"use client";
import React from "react";

const benefits = [
  {
    title: "Industry Standard Tech Stacks",
    desc: "Build using the latest technologies and frameworks like React, Node.js, and Python that top companies actually use.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 46L6 34L30 22L54 34L30 46Z" fill="#014051" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 26L30 14L54 26" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18L30 6L54 18" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 22V30" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="14" r="2.5" fill="#32fe6b" />
        <path d="M54 34V42" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 34V42" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 46V54" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Expert Mentorship & Support",
    desc: "Get 1 on 1 guidance from senior developers to debug issues, refine your code, and understand industry best practices.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 26C46.4183 26 50 22.4183 50 18C50 13.5817 46.4183 10 42 10C37.5817 10 34 13.5817 34 18C34 22.4183 37.5817 26 42 26Z" fill="#014051" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" fill="none" stroke="#014051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 46C10 40.4772 14.4772 36 20 36H24" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <path d="M52 46C52 38.268 45.732 32 38 32H36" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 22H36" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <circle cx="48" cy="14" r="2" fill="#32fe6b" />
      </svg>
    ),
  },
  {
    title: "Scalable System Architecture",
    desc: "Learn to design robust, scalable systems and database schemas that can handle real world traffic and data loads.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="16" height="12" rx="2" fill="#014051" stroke="#014051" strokeWidth="2" />
        <rect x="34" y="8" width="16" height="12" rx="2" fill="#014051" stroke="#014051" strokeWidth="2" />
        <rect x="22" y="38" width="16" height="14" rx="2" fill="none" stroke="#014051" strokeWidth="2" />
        <path d="M18 20V29C18 31.2091 19.7909 33 22 33H38C40.2091 33 42 31.2091 42 29V20" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 33V38" stroke="#014051" strokeWidth="2" />
        <circle cx="30" cy="33" r="3" fill="#32fe6b" />
        <path d="M14 14H22" stroke="#32fe6b" strokeWidth="2" />
        <path d="M38 14H46" stroke="#32fe6b" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Career Ready Portfolio",
    desc: "Deploy a live, interactive application that serves as a powerful proof of work for job interviews and resume screening.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 16H46V48C46 50.2091 44.2091 52 42 52H18C15.7909 52 14 50.2091 14 48V16Z" fill="#014051" stroke="#014051" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 16V12C22 9.79086 23.7909 8 26 8H34C36.2091 8 38 9.79086 38 12V16" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="32" r="8" fill="none" stroke="#32fe6b" strokeWidth="2" />
        <path d="M27 32L29 34L33 30" stroke="#32fe6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16H50" stroke="#014051" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
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
