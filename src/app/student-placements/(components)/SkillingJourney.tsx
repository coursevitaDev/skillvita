"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const journeySteps = [
  {
    step: "01",
    heading: "Build Your Profile",
    description: "Set up a clean, structured student profile that highlights your skills, interests, and goals. Start by identifying your strengths and career aspirations.",
    image: "/images/student-placements/step1.png"
  },
  {
    step: "02",
    heading: "Build Skills Through Doing",
    description: "Strengthen your capability through guided, role aligned tasks and hands on execution. Learn by working on real world projects that matter.",
    image: "/images/student-placements/step2.png"
  },
  {
    step: "03",
    heading: "Create Proof of Work",
    description: "Complete projects and simulations that demonstrate real, job ready skills. Build a portfolio that speaks for itself.",
    image: "/images/student-placements/step3.png"
  },
  {
    step: "04",
    heading: "Strengthen Placement Readiness",
    description: "Refine your portfolio, communication, and clarity to prepare effectively for opportunities. Get ready to stand out in placements.",
    image: "/images/student-placements/step4.png"
  },
  {
    step: "05",
    heading: "Track Progress",
    description: "Every outcome becomes part of your SkillVita portfolio, helping you see growth clearly over time. Watch yourself improve with every step.",
    image: "/images/student-placements/step5.png"
  }
];

const SkillingJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-black py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#32fe6b] text-sm font-medium uppercase tracking-wider mb-2"
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Planning your <span className="text-[#32fe6b]">placement journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            Our structured skilling journey begins with understanding where you are and creating a clear path forward.
          </motion.p>
        </div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#014051]/30 md:-translate-x-1/2" />

          {/* Animated Foreground Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-[#32fe6b] md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-24 md:space-y-32 py-10">
            {journeySteps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 w-full md:w-1/2 pl-12 md:pl-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: "#32fe6b" }}
                    className={`
                      relative bg-[#014051]/10 border border-[#014051] p-8 rounded-2xl transition-colors duration-300
                      ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}
                    `}
                  >
                    <div className="text-[#32fe6b] text-5xl font-bold mb-4 opacity-30 select-none">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.heading}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.description}
                    </p>

                    {/* Card Decoration */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#32fe6b]/30 rounded-br-2xl" />
                    <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#32fe6b]/30 rounded-tl-2xl" />
                  </motion.div>
                </motion.div>

                {/* Center Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-4 h-4 bg-[#014051] rounded-full border-2 border-[#32fe6b]"
                  >
                    <div className="w-full h-full bg-[#32fe6b] rounded-full animate-ping opacity-20"></div>
                  </motion.div>
                </div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden md:block flex-1 w-full md:w-1/2 px-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative rounded-2xl overflow-hidden border border-[#014051] shadow-2xl shadow-[#32fe6b]/10 aspect-video
                      ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    <div className="absolute inset-0 bg-[#014051]/20 mix-blend-overlay z-10"></div>
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillingJourney;
