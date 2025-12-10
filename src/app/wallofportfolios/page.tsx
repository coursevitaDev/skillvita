"use client";
import React, { useState } from "react";
import Hero from "../../components/WallOfPortfolios/Hero";
import WhyMatter from "../../components/WallOfPortfolios/WhyMatter";
import WhatShow from "../../components/WallOfPortfolios/WhatShow";
import PortfolioWall from "../../components/WallOfPortfolios/PortfolioWall";
import WhatReveals from "../../components/WallOfPortfolios/WhatReveals";
import RecruitersStart from "../../components/WallOfPortfolios/RecruitersStart";
import FinalCTA from "../../components/WallOfPortfolios/FinalCTA";
import Modal from "../../components/WallOfPortfolios/Modal";

export default function WallOfPortfoliosPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="antialiased text-white bg-black selection:bg-[#22c55e] selection:text-black">
      <Hero />
      <WhyMatter />
      <WhatShow />
      <PortfolioWall onOpenModal={() => setModalOpen(true)} />
      <WhatReveals />
      <RecruitersStart />
      <FinalCTA />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
