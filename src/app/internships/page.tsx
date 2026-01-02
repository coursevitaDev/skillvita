import type { Metadata } from "next";
import { getInternships } from "@/lib/internships";
import Hero from "@/components/Internships/Hero";
import WhyInternships from "@/components/Internships/WhyInternships";
import WhySkillVita from "@/components/Internships/WhySkillVita";
import HowItWorks from "@/components/Internships/HowItWorks";
import Categories from "@/components/Internships/Categories";
import OutcomesGrid from "@/components/Internships/OutcomesGrid";
import GetStarted from "@/components/Internships/GetStarted";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint } from "lucide-react";
import InternshipFAQ from "@/components/Internships/InternshipFAQ";

export const metadata: Metadata = {
  title: "Skillvita",
  description:
    "Explore verified internships with right details on duration, skills required, eligibility, and pay.",
};



export default async function InternshipsPage() {
  const internships = await getInternships();

  return (
    <main className="bg-black min-h-screen selection:bg-[#32fe6b] selection:text-black">
      <section>
        <Hero />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <WhyInternships />
          <WhySkillVita />
        </div>
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-4 pb-0">
        <HowItWorks />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-0 pb-0">
        <Categories />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4">
        <OutcomesGrid />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 shadow-2xl md:p-12 transition-all duration-500 hover:border-[#32fe6b]/30">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-[#32fe6b]/10 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-[#014051]/20 blur-3xl filter" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#014051]/20 border border-[#014051]/30">
                <Fingerprint className="h-8 w-8 text-[#32fe6b]" />
              </div>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your <span className="text-[#32fe6b]">Portfolio</span> Becomes Your Voice
              </h2>

              <div className="mb-8 max-w-3xl space-y-4 text-lg text-neutral-400 leading-relaxed">
                <p>
                  Skillvita’s portfolio builder helps students present a sharp and consistent professional identity. Skills, projects, certifications, and internship outcomes come together to form a verified capability record that recruiters trust.
                </p>
                <p>
                  Everything you complete on Skillvita becomes <span className="text-[#32fe6b] font-semibold">validated proof of work</span>, strengthening your portfolio with every project and internship you finish.
                </p>
              </div>

              <Link href="/profile/portfolio">
                <Button size="lg" className="h-14 rounded-full bg-[#32fe6b] px-8 text-base font-bold text-black shadow-[0_0_20px_rgba(50,254,107,0.2)] transition-all hover:bg-[#2ce660] hover:shadow-[0_0_30px_rgba(50,254,107,0.4)] hover:scale-105 active:scale-95">
                  Build Your Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 border-t border-neutral-900">
        <div className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section Removed as per user request */}
        </div>
      </section>

      <InternshipFAQ />

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <GetStarted />
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Internships | SkillVita",
            "description": "Explore verified internships with right details on duration, skills required, eligibility, and pay.",
            "url": "https://main-revitalize.vercel.app/internships",
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
            "@type": "CollectionPage",
            "url": "https://main-revitalize.vercel.app/internships#list",
            "name": "Internship Listings",
            "description": "Browse available internships",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": internships.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "JobPosting",
                  "title": item.title,
                  "description": `<p>Internship at ${item.company} in ${item.domain}.</p><p><strong>Skills:</strong> ${item.skills.join(', ')}</p><p><strong>Duration:</strong> ${item.duration}</p><p><strong>Type:</strong> ${item.type}</p>`,
                  "hiringOrganization": {
                    "@type": "Organization",
                    "name": item.company
                  },
                  "jobLocation": item.type === 'remote' ? {
                    "@type": "Place",
                    "name": "Remote"
                  } : {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": item.location,
                      "addressCountry": "IN"
                    }
                  },
                  "jobLocationType": item.type === 'remote' ? "TELECOMMUTE" : undefined,
                  "baseSalary": item.stipend ? {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                      "@type": "QuantitativeValue",
                      "value": parseInt(item.stipend.replace(/[^0-9]/g, '')) || 0,
                      "unitText": "MONTH"
                    }
                  } : undefined,
                  "employmentType": "INTERN",
                  "datePosted": new Date().toISOString().split('T')[0],
                  "url": `https://main-revitalize.vercel.app/internships#internship-${item.id}`
                }
              }))
            }
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
                "name": "Internships",
                "item": "https://main-revitalize.vercel.app/internships"
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
