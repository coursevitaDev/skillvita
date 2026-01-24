"use client";
import Image from "next/image";
import { useState } from "react";
import FormModal from "./FormModal";

export default function TopLayer() {
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  return (
    <div className="relative w-full h-[88vh] overflow-hidden bg-brand-950">
      <Image
        src="/images/mockGroupDiscussion/MockGroupHeroImage.png"
        alt="Hero"
        fill
        className="object-cover object-[40%] absolute top-0 left-0 -z-10 opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div
          className="flex flex-row gap-2 items-center justify-center mb-3
          max-md:flex-col max-md:gap-3"
        >
          <span className="text-[34px] font-semibold max-md:text-[24px] font-outfit text-white">
            Join Our
          </span>
          <span className="text-[30px] font-semibold rounded-[60px] bg-brand-900/60 backdrop-blur-lg border border-brand-700 px-4 py-2 max-md:text-[22px] font-outfit text-accent-500">
            Mock Group Discussions
          </span>
          <span className="text-[34px] font-semibold max-md:text-[24px] font-outfit text-white">
            Speak Up, Fear Less!
          </span>
        </div>
        <div className="text-center text-brand-200 font-poppins text-[24px] font-normal w-[724px] mt-1 max-md:text-[20px] max-md:w-auto max-md:px-4 max-md:font-light">
          Discover the joy of sharing your thoughts and overcoming speaking
          anxiety.
        </div>
        <button
          onClick={() => setIsIframeVisible(true)}
          className="mt-4 px-9 py-2 rounded-md bg-gradient-to-r from-brand-600 to-accent-600 font-outfit text-[20px] font-semibold text-white hover:shadow-[0_0_15px_rgba(50,254,107,0.3)] transition-all duration-300"
        >
          Join Now
        </button>
      </div>

      {/* Popup Form Modal */}
      {isIframeVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/80 backdrop-blur-sm">
          <div className="relative w-[90vw] max-w-md h-auto bg-brand-900 rounded-2xl overflow-hidden shadow-2xl border border-brand-700 p-8 flex flex-col items-center">
            <button
              className="absolute top-2 right-3 text-3xl font-bold text-brand-400 hover:text-white z-10"
              onClick={() => setIsIframeVisible(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <FormModal setIsIframeVisible={setIsIframeVisible} />
          </div>
        </div>
      )}
    </div>
  );
}
