import React from "react";

interface WhyText {
  title: string;
  description: string;
}

interface WhyPlacementSectionProps {
  earlyUpskilling: WhyText;
  whySkillvita: WhyText;
}

const WhyPlacementSection: React.FC<WhyPlacementSectionProps> = ({
  earlyUpskilling,
  whySkillvita,
}) => {
  return (
    <section className="py-20 md:py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="group relative">
          {/* Hover gradient effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#32fe6b] via-[#014051] to-[#32fe6b] rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>

          <div className="relative bg-[#014051]/10 rounded-3xl p-8 md:p-12 border border-[#014051] shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Content */}
            <div className="space-y-8">
              {/* Early Upskilling */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#32fe6b]">
                  {earlyUpskilling.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {earlyUpskilling.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#014051] to-transparent"></div>

              {/* Why SkillVita */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#32fe6b]">
                  {whySkillvita.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {whySkillvita.description}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#014051]/20 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#32fe6b]/10 to-transparent rounded-br-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlacementSection;
