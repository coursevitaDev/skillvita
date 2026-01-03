"use client";

import * as React from "react";
import Image from "next/image";
import { motion, type PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number | string;
  author: string;
  image?: string;
  icon?: React.ReactNode;
}

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  image,
  icon,
}: TestimonialCardProps) {
  const dragRef = React.useRef<number>(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: isFront ? 20 : position === "middle" ? 10 : 0,
      }}
      animate={{
        rotate: isFront ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: isFront ? "0%" : position === "middle" ? "33%" : "66%",
        scale: isFront ? 1 : position === "middle" ? 0.9 : 0.8,
        opacity: isFront ? 1 : position === "middle" ? 0.6 : 0.3,
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(_, info: PanInfo) => {
        dragRef.current = info.point.x;
      }}
      onDragEnd={(_, info: PanInfo) => {
        if (dragRef.current - info.point.x > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn(
        "absolute left-0 top-0 grid h-[400px] w-full max-w-[320px] md:max-w-[350px] select-none place-content-center space-y-6 rounded-3xl border bg-neutral-900/80 p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300",
        isFront
          ? "cursor-grab active:cursor-grabbing border-[#32fe6b]/30 shadow-[#32fe6b]/10"
          : "grayscale border-neutral-700/50"
      )}
    >
      <div className="relative mx-auto flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-2 border-[#32fe6b]/20 bg-neutral-800 p-1">
        {icon ? (
          <motion.div
            animate={{
              scale: isFront ? [1, 1.1, 1] : 1,
              rotate: isFront ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#32fe6b]"
          >
            {icon}
          </motion.div>
        ) : (
          <Image
            src={image ?? `https://i.pravatar.cc/150?u=${id}`}
            alt={author}
            width={128}
            height={128}
            className="pointer-events-none h-full w-full rounded-full object-cover grayscale-[0.5]"
          />
        )}

        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#32fe6b] text-black shadow-lg">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <p className="text-lg md:text-xl italic font-medium leading-relaxed text-neutral-300">
          &quot;{testimonial}&quot;
        </p>

        <div className="pt-2">
          <p className="text-sm md:text-base font-bold text-[#32fe6b]">
            {author}
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
            Verified Outcome
          </p>
        </div>
      </div>
    </motion.div>
  );
}
