import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-sta-teal-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-3 h-1 w-16 bg-sta-orange rounded-full",
          centered ? "mx-auto" : "mr-auto"
        )}
      />
    </div>
  );
}
