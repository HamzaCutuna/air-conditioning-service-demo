"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium" | "long";
  threshold?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal = ({
  children,
  className,
  delay = "none",
  threshold = 0.1,
  direction = "up",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Map delay names to actual CSS classes
  const delayClasses = {
    none: "",
    short: "reveal-delay-200",
    medium: "reveal-delay-400",
    long: "reveal-delay-600",
  };

  // Map direction to initial CSS transform
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 30px, 0)";
      case "down":
        return "translate3d(0, -30px, 0)";
      case "left":
        return "translate3d(30px, 0, 0)";
      case "right":
        return "translate3d(-30px, 0, 0)";
      case "none":
        return "none";
      default:
        return "none";
    }
  };

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (element) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Adjust when the animation triggers
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        delayClasses[delay],
        isVisible && "reveal-visible",
        className
      )}
      style={{
        transform: isVisible ? "none" : getInitialTransform(),
      }}
    >
      {children}
    </div>
  );
}; 