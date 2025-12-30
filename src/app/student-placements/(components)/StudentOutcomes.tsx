import React from "react";

const outcomes = [
  {
    title: "Verified Skill Growth",
    description: "Develop essential, role aligned skills through structured, practical tasks."
  },
  {
    title: "Stronger, Placement Ready Profiles",
    description: "Build a polished profile that reflects capability with clarity."
  },
  {
    title: "A Portfolio That Demonstrates Job Readiness",
    description: "Projects and outcomes are converted into verified proof of work that supports placement shortlists."
  },
  {
    title: "Clarity at Every Step",
    description: "Track your learning, performance, and progress through a simple, structured view."
  },
  {
    title: "Guided Support",
    description: "Get insights, feedback, and direction to move toward placement readiness."
  },
  {
    title: "Real World Experience",
    description: "Gain hands on experience through simulations and industry aligned projects that prepare you for actual workplace scenarios."
  }
];

const StudentOutcomes: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-12">
          Student <span className="text-[#32fe6b]">Outcomes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-[#014051]/20 border border-[#014051] rounded-xl p-6 hover:shadow-lg hover:border-[#32fe6b] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" className="fill-[#014051]/30" />
                  <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#32fe6b]" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {outcome.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentOutcomes;
