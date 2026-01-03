"use client";

import React, { Suspense } from "react";
import CertificationHero from "@/components/Certification/CertificationHero";
import HowToGetCertified from "@/components/Certification/HowToGetCertified";
import WhyCertification from "@/components/Certification/WhyCertification";
import CertificationProcess from "@/components/Certification/CertificationProcess";
import CertificationsListing from "@/components/Certification/CertificationsListing";
import WhatIsSimulation from "@/components/Certification/WhatIsSimulation";
import MentorSupport from "@/components/Certification/MentorSupport";
import CertificationOutcomes from "@/components/Certification/CertificationOutcomes";
import CertificationFAQ from "@/components/Certification/CertificationFAQ";
import CertificationCTA from "@/components/Certification/CertificationCTA";

const certificationFAQs = [
  {
    question: "Are Skillvita certifications real and valid?",
    answer: "Yes. Issued only after verified simulations and mentor reviews."
  },
  {
    question: "Do I need prior experience?",
    answer: "No. Beginner to advanced progression supported."
  },
  {
    question: "When will I receive my certificate?",
    answer: "After successful completion and mentor review."
  },
  {
    question: "Are these certifications useful for jobs or internships?",
    answer: "Yes. Recruiters value proof-of-work over theory certificates."
  },
  {
    question: "Is mentor support included?",
    answer: "Yes. Mentors guide and review throughout."
  },
  {
    question: "Can I add this to LinkedIn and my resume?",
    answer: "Absolutely. Designed to be resume- and LinkedIn-ready."
  }
];

export default function CertificationPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#32fe6b] selection:text-black">
      <CertificationHero />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <HowToGetCertified />

        <div className="py-16">
          <WhyCertification />
        </div>
      </div>

      <CertificationProcess />

      <Suspense fallback={<div className="text-center py-20 text-neutral-500">Loading simulations...</div>}>
        <CertificationsListing />
      </Suspense>

      <WhatIsSimulation />
      <MentorSupport />
      <CertificationOutcomes />
      <CertificationFAQ />
      <CertificationCTA />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Job Simulation Certification | SkillVita",
            "description": "Earn industry-aligned certifications by completing hands-on job simulations, not theory exams. Validated by real-world projects and expert mentorship.",
            "url": "https://main-revitalize.vercel.app/certification",
            "isPartOf": {
              "@type": "Website",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Job Simulation Certification",
            "description": "Skillvita certifications are earned by completing real simulations that mirror industry work, reviewed and validated by mentors.",
            "provider": {
              "@type": "Organization",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            },
            "educationalCredentialAwarded": "Industry Recognized Skill Certification",
            "programPrerequisites": "No prior professional experience required",
            "occupationalCategory": "Professional Certification",
            "offers": {
              "@type": "Offer",
              "category": "Educational Program"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": certificationFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://main-revitalize.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Certification",
                "item": "https://main-revitalize.vercel.app/certification"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SkillVita",
            "url": "https://main-revitalize.vercel.app",
            "logo": {
              "@type": "ImageObject",
              "url": "https://main-revitalize.vercel.app/skillvita_icon.svg"
            }
          })
        }}
      />
    </main>
  );
}

