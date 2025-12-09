"use client";
import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="relative">
        <Image
          src="/skillvita.svg"
          width={200}
          height={50}
          alt="Skillvita Logo"
          priority
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default Preloader;