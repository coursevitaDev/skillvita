// components/Hero.tsx
import React from "react";
import Image from "next/image";
import GaugeSpeedometer from "./animation";
import AnimatedTypography from "./AnimatedTypography";
import { Users } from "lucide-react";
import { FaSuitcase } from "react-icons/fa";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Rocket } from "lucide-react";
import { CheckCircle } from "lucide-react";

interface HeroProps {
  targetJoinNow: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ targetJoinNow }) => (
  <div className="bg-brand-950">
    <section className="relative 2xl:max-w-7xl items-center mx-auto py-10 md:py-[70px] bg-gradient-to-bl from-transparent via-transparent to-brand-500/[0.05] overflow-hidden">
      <div className="mx-3 md:mx-5">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6 px-2 md:pl-5 flex-1 z-10 w-full lg:max-w-[45%]">
            <h1 className="text-[28px] md:text-[40px] font-[500] leading-tight md:leading-normal text-white">
              Boost your career with
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent md:text-[40px] font-[600] leading-tight md:leading-normal">
                Expert counselling
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-accent-500 to-brand-400 bg-clip-text text-transparent md:text-[40px] font-[700] leading-tight md:leading-normal">
                mock interviews
              </span>
            </h1>

            {/* Benefits - Stack vertically on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 mt-1 md:mt-2 text-brand-200">
              <div className="flex flex-row sm:flex-col items-start justify-start gap-2 p-1 w-full sm:w-[130px]">
                <LightBulbIcon className="flex-shrink-0 opacity-90 size-7"/>
                <p className="text-[14px] md:text-[16px] font-normal leading-normal text-white">
                  Get valuable insights
                </p>
              </div>

              <div className="flex flex-row sm:flex-col items-start justify-start gap-2 p-1 w-full sm:w-[130px]">
                <Rocket/>
                <p className="text-[14px] md:text-[16px] font-normal leading-normal text-white">
                  Boost Your Interview Skills
                </p>
              </div>

              <div className="flex flex-row sm:flex-col items-start justify-start gap-2 p-1 w-full sm:w-[130px]">
                <CheckCircle/>
                <p className="text-[14px] md:text-[16px] font-normal leading-normal text-white">
                  Achieve Your Career Goals
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (targetJoinNow && targetJoinNow.current) {
                  targetJoinNow.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex justify-center items-center w-full sm:w-[233px] h-[45px] md:h-[50px] bg-gradient-to-r from-brand-600 to-accent-600 text-white rounded-md text-[16px] md:text-[18px] font-semibold z-10 mt-2 md:mt-4 hover:shadow-[0_0_15px_rgba(50,254,107,0.3)] transition-all duration-300"
            >
              Join Now
            </button>
          </div>

          {/* Right Column Grid - Mobile responsive version */}
          <div className="w-full lg:w-1/2 xl:w-[55%] z-10">
            {/* Mobile card grid with 2x2 layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Top row */}
              {/* Interview Image */}
              <div className="h-[156px] sm:h-[250px] rounded-[14px] overflow-hidden border border-brand-800">
                <Image
                  src="/images/mock-interview/hero-interview.jpg"
                  alt=""
                  width={400}
                  height={250}
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* 75% Progress Card */}
              <div className="h-[156px] sm:h-[250px] sm:mb-1 bg-brand-900/40 border border-brand-800 rounded-[14px] flex flex-col items-center justify-between p-3 sm:p-4 relative backdrop-blur-sm">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-full bg-brand-800/50">
                  <Users className="text-accent-500"/>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  {/* The GaugeSpeedometer component should render a circular progress indicator */}
                  <div className="transform scale-90 sm:scale-100">
                    <GaugeSpeedometer percent={75} />
                  </div>

                  <p className="text-center text-[12px] sm:text-[15px] font-normal mt-1 sm:mt-2 max-w-[95%] sm:max-w-[240px] text-brand-200">
                    Participants say they feel more prepared for real
                    interviews.
                  </p>
                </div>
              </div>

              {/* Bottom row */}
              {/* Stats cards column */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* 100+ Growth Card */}
                <div className="h-[91px] sm:h-[120px] rounded-[14px] bg-gradient-to-r from-brand-700 to-brand-500 p-3 sm:p-4 border border-brand-600">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Image
                      src="/images/mock-interview/boost.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <h3 className="text-[18px] sm:text-[22px] font-bold text-white">
                      <AnimatedTypography to={100} />+
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-[13px] text-brand-100 leading-tight">
                    Individuals have advanced their careers with our support
                  </p>
                </div>

                {/* 85% Transition Card */}
                <div className="h-[91px] sm:h-[120px] rounded-[14px] bg-brand-900/40 border border-brand-800 p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <FaSuitcase className="text-brand-500" size={20}/>
                    <h3 className="text-[18px] sm:text-[22px] font-bold text-accent-500">
                      <AnimatedTypography to={85} />%
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-[13px] leading-tight">
                    Have successfully transitioned to desired roles within 6
                    months
                  </p>
                </div>
              </div>

              {/* Second image */}
              <div className="h-[192px] sm:h-[250px] rounded-[14px] overflow-hidden border border-brand-800">
                <Image
                  src="/images/mock-interview/interview2.jpg"
                  alt=""
                  width={400}
                  height={250}
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark SVG - Smaller size and better positioning */}
      <div className="absolute bottom-[-10px] left-[10%] w-[350px] md:w-[450px] lg:w-[500px] pointer-events-none hidden lg:block opacity-30 mix-blend-overlay">
        <Image
          src="images/mock-interview/watermark.svg"
          alt=""
          width={450}
          height={250}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  </div>
);

export default Hero;
