"use client";

import { useState, useEffect, useRef } from "react";
import { Award, Star, TrendingUp } from "lucide-react";

interface AnimatedExperienceBadgeProps {
  targetNumber: number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const AnimatedExperienceBadge: React.FC<AnimatedExperienceBadgeProps> = ({
  targetNumber,
  label,
  suffix = "+",
  icon = <Award className="w-5 h-5" />,
  delay = 0,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [startHovering, setStartHovering] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for triggering animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, [hasAnimated]);

  // Start hovering animation after component becomes visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStartHovering(true);
      }, 800); // Shorter delay for quicker start

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Number counting animation
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = targetNumber / steps;
        let step = 0;

        const counter = setInterval(() => {
          step++;
          const newValue = Math.min(Math.round(increment * step), targetNumber);
          setCurrentNumber(newValue);

          if (step >= steps) {
            clearInterval(counter);
            setCurrentNumber(targetNumber);
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, targetNumber, delay]);

  return (
    <div
      ref={badgeRef}
      className={`
        relative overflow-hidden rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#FFD700] 
        text-white shadow-lg transition-opacity duration-700 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${startHovering ? "animate-hover-badge" : ""}
        hover:shadow-xl hover:scale-105 cursor-pointer
        w-[160px] px-3 py-3
      `}
      style={{
        transform: startHovering ? undefined : "translateX(-18px)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      {/* Subtle Internal Shine (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline space-x-1">
            <span
              className={`text-xl font-bold ${
                isVisible ? "animate-count-up" : ""
              }`}
            >
              {currentNumber}
            </span>
            <span className="text-sm font-semibold">{suffix}</span>
          </div>
          <p className="text-[10px] font-medium opacity-90 leading-tight truncate">
            {label}
          </p>
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B57] to-[#FFD700] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
    </div>
  );
};

export default AnimatedExperienceBadge;
