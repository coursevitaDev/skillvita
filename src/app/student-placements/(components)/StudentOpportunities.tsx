import React from "react";
import { BentoGridWithFeatures, type BentoFeature } from "@/components/ui/bento-grid";

interface Opportunity {
  title: string;
  icon: string;
  gradient: string;
}

interface StudentOpportunitiesProps {
  badge?: string;
  title: string;
  description: string;
  opportunities: Opportunity[];
  footerText?: string; // Optional, not used in component
}

const StudentOpportunities: React.FC<StudentOpportunitiesProps> = ({
  badge = "Opportunities",
  title,
  description,
  opportunities,
}) => {
  // Map opportunities to BentoFeature format - only show first 4 (2 rows)
  const bentoFeatures: BentoFeature[] = [
    // First row - 2 cards
    {
      id: "opp-0",
      title: opportunities[0]?.title,
      description: "Build real world projects that demonstrate your technical capabilities and problem solving skills.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-[#014051] bg-[#014051]/10 text-white"
    },
    {
      id: "opp-1",
      title: opportunities[1]?.title,
      description: "Complete industry recognized certification challenges to validate your skills.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b border-[#014051] bg-[#014051]/10 text-white"
    },
    // Second row - 2 cards
    {
      id: "opp-2",
      title: opportunities[2]?.title,
      description: "Work on real industry tasks that mirror actual job responsibilities and workflows.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 md:border-r border-[#014051] bg-[#014051]/10 text-white"
    },
    {
      id: "opp-3",
      title: opportunities[3]?.title,
      description: "Collaborate in team environments with realistic workflows and project simulations.",
      content: <div className="mt-6" />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-[#014051] bg-[#014051]/10 text-white"
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#32fe6b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#014051]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#014051]/30 border border-[#014051]">
            <span className="text-sm font-medium text-[#32fe6b]">{badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#32fe6b]">{title}</span>
          </h2>

          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGridWithFeatures features={bentoFeatures} />
      </div>
    </section>
  );
};

export default StudentOpportunities;
