"use client";

import React from "react";
import InternshipQA from "./InternshipQA";

const internshipFAQs = [
    {
        question: "Can I really find internships on SkillVita?",
        answer: "Yes. SkillVita lists verified, skill-aligned internships across multiple domains with clear role expectations, duration, eligibility, and stipend details."
    },
    {
        question: "What kind of internships are available?",
        answer: "Technology, Product, Business, Marketing, Design, Research, Operations, Startup roles—and more. Each listing clearly mentions the skills required and expected outcomes."
    },
    {
        question: "How long are the internships?",
        answer: "Internships vary from 4 to 12 weeks, depending on the company and role. Duration is clearly mentioned in each posting."
    },
    {
        question: "Will the internships pay?",
        answer: "Many internships offer stipends. Each internship card clearly states whether it is paid, performance-based, or unpaid, so there is no confusion."
    },
    {
        question: "Am I eligible to apply?",
        answer: "Yes. Any student with a SkillVita profile can apply. Some roles may have specific requirements, which will be clearly listed."
    },
    {
        question: "Do I need projects before applying?",
        answer: "Not necessarily. You can start with an instant portfolio by uploading your resume and add projects as you build them through SkillVita."
    },
    {
        question: "How does SkillVita increase my chances of being shortlisted?",
        answer: "By helping you: Build a structured profile, Show verified proof-of-work, Align skills with roles, Strengthen communication & clarity. Your application becomes more credible than a resume alone."
    },
    {
        question: "Do SkillVita Premium Tiers exist, and what do they offer?",
        answer: "Yes. SkillVita offers optional Premium Tiers for students who want additional support such as priority visibility, portfolio reviews, mentor guidance during applications, and access to select roles. Premium is completely optional but gives motivated students an extra advantage in competitive internships."
    }
];

export default function InternshipFAQ() {
    return (
        <section className="py-1 bg-black">
            <InternshipQA faqs={internshipFAQs} />
        </section>
    );
}
