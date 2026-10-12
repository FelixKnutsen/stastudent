import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "teal" | "neutral";
  className?: string;
}

export function Badge({
  children,
  variant = "orange",
  className,
}: BadgeProps) {
  const variants = {
    orange: "bg-sta-orange text-white",
    teal: "bg-sta-teal-400/20 text-sta-teal-100 border border-sta-teal-300/30",
    neutral: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
