import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the props interface for the component
interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

// Reusable CtaCard component with a clean, modern layout
const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, imageSrc, imageAlt, title, subtitle, description, buttonText, onButtonClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border-2 border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] shadow-lg",
          "flex flex-col md:flex-row", // Stacks on mobile, row on desktop
          className
        )}
        {...props}
      >
        {/* Image Section */}
        <div className="md:w-1/3 w-full relative h-56 md:h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover" // Ensure image covers the area
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-6 md:p-8 flex flex-col justify-center">
          <div>
            <p className="text-sm font-semibold text-brand-500 dark:text-accent-500">{title}</p>
            <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
              {subtitle}
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                onClick={onButtonClick}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
