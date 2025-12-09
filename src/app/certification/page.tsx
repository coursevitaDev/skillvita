"use client";
import React, { Suspense } from "react";
import ExploreHero from "./explore";
import ProgramsList from "@/app/certification/programs";
import Career from "./career";
import CertificationBenefits from "./_components/benefits";
import HowItWorks from "./_components/howItWorks";
import FAQs from "@/components/course-overview/faqs";

// metadata must be exported from a server component; using global layout metadata

const certificationFAQs = [
  {
    question: "What is a job simulation certification?",
    answer: "A credential earned by completing real-world project simulations that mirror actual workplace scenarios, validating your practical skills and professional capabilities."
  },
  {
    question: "Are these certifications recognized by employers?",
    answer: "Yes! Our certifications are industry-recognized and demonstrate your hands-on experience, problem-solving abilities, and readiness to contribute professionally."
  },
  {
    question: "How long does it take to complete?",
    answer: "Most certifications can be completed in 4-8 weeks with 10-15 hours per week. You can learn at your own pace."
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior professional experience required! We offer certifications at various skill levels with all necessary learning materials and mentorship."
  },
  {
    question: "Will I get mentorship?",
    answer: "Yes! Every program includes expert mentorship from industry professionals who guide you through the simulation and provide feedback."
  },
  {
    question: "Can I add this to my LinkedIn?",
    answer: "Absolutely! You'll receive a verifiable digital certificate with a unique ID that can be added to LinkedIn, your resume, and portfolio."
  }
];

export default function CertificationPage() {
  return (
    <div>
      <ExploreHero />
      <CertificationBenefits />
      <Suspense fallback={<div className="text-center py-10">Loading programs...</div>}>
        <ProgramsList />
      </Suspense>
      <HowItWorks />
      <FAQs faqs={certificationFAQs} />
      <Career />
    </div>
  );
}
