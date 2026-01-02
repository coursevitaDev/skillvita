"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Card {
  id: number;
  title: string;
  description: string;
}

interface CardStackProps {
  initialCards: Card[];
}

export default function CardStack({ initialCards }: CardStackProps) {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [dragDirection, setDragDirection] = useState<"up" | "down" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  // Configuration
  const offset = 10;
  const scaleStep = 0.05;
  const dimStep = 0.15;
  const stiff = 170;
  const damp = 26;
  const borderRadius = 24;
  const swipeThreshold = 50;

  const spring = {
    type: "spring" as const,
    stiffness: stiff,
    damping: damp,
  };

  const moveToEnd = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex(
      (prev) => (prev - 1 + initialCards.length) % initialCards.length
    );
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocityY = info.velocity.y;
    const offsetY = info.offset.y;

    if (Math.abs(offsetY) > swipeThreshold || Math.abs(velocityY) > 500) {
      if (offsetY < 0 || velocityY < 0) {
        setDragDirection("up");
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection("down");
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }

    dragY.set(0);
  };

  const theme = {
    text: "text-white",
    textSecondary: "text-neutral-400",
    toggleBorder: "border-neutral-800",
    shadowCard: "0 25px 50px rgba(0, 0, 0, 0.7)",
    shadowCardBack: "0 15px 30px rgba(0, 0, 0, 0.4)",
    cardBorder: "border-2 border-neutral-800",
    controlBg: "bg-neutral-800/80 hover:bg-neutral-700/80",
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-visible">

      {/* Navigation Buttons */}
      <motion.button
        onClick={moveToStart}
        className={`absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full ${theme.controlBg} border ${theme.toggleBorder} backdrop-blur-sm z-20 hidden lg:flex`}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className={`w-6 h-6 ${theme.text}`} />
      </motion.button>

      <motion.button
        onClick={moveToEnd}
        className={`absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full ${theme.controlBg} border ${theme.toggleBorder} backdrop-blur-sm z-20 hidden lg:flex`}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className={`w-6 h-6 ${theme.text}`} />
      </motion.button>

      {/* Card Stack */}
      <div className="relative w-full max-w-lg h-[280px] z-10 mx-auto px-4">
        <ul className="relative w-full h-full m-0 p-0">
          <AnimatePresence>
            {cards.map(({ id, title, description }, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.3, 1 - i * dimStep);

              return (
                <motion.li
                  key={id}
                  className={`absolute w-full h-full list-none ${theme.cardBorder} bg-neutral-900 flex flex-col items-center justify-center p-8 text-center`}
                  style={{
                    borderRadius,
                    cursor: isFront ? "grab" : "default",
                    boxShadow: isFront
                      ? theme.shadowCard
                      : theme.shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000,
                  }}
                  animate={{
                    top: `${i * -offset}%`,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: cards.length - i,
                    opacity: dragDirection && isFront ? 0 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={spring}
                  drag={isFront ? "y" : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDrag={(_, info) => isFront && dragY.set(info.offset.y)}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          scale: 1.05,
                          zIndex: cards.length + 1,
                          cursor: "grabbing",
                        }
                      : {}
                  }
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#32fe6b]/10 text-[#32fe6b] border border-[#32fe6b]/20 text-xl font-bold">
                    {id}
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-4">
                    {title}
                  </h3>
                  <p className="text-neutral-400 text-base max-w-sm">
                    {description}
                  </p>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mt-8">
        {initialCards.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-full ${
              i === currentIndex
                ? "bg-[#32fe6b] w-10"
                : "bg-neutral-800 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
