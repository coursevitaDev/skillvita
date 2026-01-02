"use client";

import React from "react";
import { motion } from "framer-motion";
import CardStack, { Card } from "@/components/ui/card-stack";

export default function HowItWorks() {
  const steps: Card[] = [
    {
      id: 1,
      title: "Build Your Profile",
      description: "Create a clean, industry ready profile and set up a portfolio that highlights your skills and projects.",
    },
    {
      id: 2,
      title: "Discover Your Fit",
      description: "Skillvita identifies your capabilities and interests to guide you towards the right internships.",
    },
    {
      id: 3,
      title: "Explore Verified Roles",
      description: "View internships that are fully verified for role clarity, legitimacy, expectations, and pay.",
    },
    {
      id: 4,
      title: "Apply & Track Instantly",
      description: "Apply using your standardized profile and track every update through a simple, centralized dashboard.",
    },
    {
      id: 5,
      title: "Turn Work Into Proof",
      description: "Your completed tasks and internships automatically update your portfolio as verified proof of work.",
    },
  ];

  return (
    <section aria-labelledby="how-it-works-heading" className="bg-black pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How to <span className="text-[#32fe6b]">Get an Internship</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
            Follow these five simple steps to transition from learning to earning through verified opportunities.
          </p>
        </motion.div>

        <div className="mt-12">
          <CardStack initialCards={steps} />
        </div>
      </div>
    </section>
  );
}
