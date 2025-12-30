import React from "react";

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#014051]/10 border border-[#014051] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">
            Your Portfolio Becomes Your <span className="text-[#32fe6b]">Voice</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
            <p>
              SkillVita&apos;s portfolio builder gives every student a sharp, structured identity. Skills, projects, tasks,
              and learning outcomes appear as verified proof of work. This strengthens your visibility and credibility
              when applying for internships and placements.
            </p>

            <p>
              Every experience you complete on SkillVita adds to your portfolio, creating a growing record of your capability.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-8">
            <div className="flex items-center gap-2 bg-[#014051] px-4 py-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9 11.5L12.5 8M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="stroke-[#32fe6b]" />
              </svg>
              <span className="text-sm font-medium text-[#32fe6b]">Verified Skills</span>
            </div>

            <div className="flex items-center gap-2 bg-[#014051] px-4 py-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9 11.5L12.5 8M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="stroke-[#32fe6b]" />
              </svg>
              <span className="text-sm font-medium text-[#32fe6b]">Real Projects</span>
            </div>

            <div className="flex items-center gap-2 bg-[#014051] px-4 py-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9 11.5L12.5 8M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="stroke-[#32fe6b]" />
              </svg>
              <span className="text-sm font-medium text-[#32fe6b]">Proof of Work</span>
            </div>

            <div className="flex items-center gap-2 bg-[#014051] px-4 py-2 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9 11.5L12.5 8M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="stroke-[#32fe6b]" />
              </svg>
              <span className="text-sm font-medium text-[#32fe6b]">Growth Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
