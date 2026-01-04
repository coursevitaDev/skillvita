"use client"

import React from "react"
import Image from "next/image"
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
]

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achievement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
  },
  {
    id: "achievement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
  },
  {
    id: "achievement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
  },
  {
    id: "achievement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
  },
]

/**
 * Process Demo - Sticky header on left with scrolling cards on right
 * Perfect for showing step-by-step processes or journeys
 */
const Process = () => {
  return (
    <div className="container min-h-svh place-content-center bg-stone-50 dark:bg-stone-950 px-6 text-stone-900 dark:text-stone-50 xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground">our process</h5>
          <h2 className="mb-6 mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Planning your{" "}
            <span className="text-indigo-500">project development</span> journey
          </h2>
          <p className="max-w-prose text-sm md:text-base text-muted-foreground">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-8 shadow-md hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-indigo-500">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-muted-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

/**
 * Work Portfolio Demo - Image cards with project details
 * Great for showcasing portfolio items or case studies
 */
const Work = () => {
  return (
    <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
      <div className="text-center mb-12">
        <h5 className="text-xs uppercase tracking-wide text-slate-400">latest projects</h5>
        <h2 className="mb-4 mt-1 text-3xl md:text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-indigo-500">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm md:text-base text-slate-300">
          From ecommerce to startup landing pages and single/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex rounded-xl bg-indigo-900 px-2 py-1"
                  >
                    <span className="text-xs tracking-tighter text-indigo-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative size-full min-h-[300px]">
              <Image
                className="object-cover"
                fill
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

/**
 * Achievements Demo - Centered cards with rotation
 * Perfect for highlighting key metrics or achievements
 */
const Achievements = () => {
  return (
    <div className="container min-h-svh bg-gradient-to-b from-slate-950 to-slate-900">
      <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
        {ACHIEVEMENTS.map((achievement, index) => (
          <CardSticky
            key={achievement.id}
            incrementY={20}
            index={index + 2}
            className="flex h-72 w-full max-w-[420px] flex-col place-content-center justify-evenly rounded-2xl border border-current p-8 shadow-md"
            style={{ rotate: index + 2, background: achievement.bg }}
          >
            <h1 className="text-left text-5xl md:text-6xl font-semibold opacity-80">
              {achievement.title}
            </h1>
            <div className="place-items-end text-right">
              <h3 className="max-w-[10ch] text-wrap text-3xl md:text-4xl font-semibold capitalize tracking-tight">
                {achievement.description}
              </h3>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

export { Process, Work, Achievements }
