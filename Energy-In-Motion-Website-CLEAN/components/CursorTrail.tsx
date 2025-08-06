"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Easing factor controls speed (smaller = more delay)
      const ease = 0.07;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full hidden md:block"
      style={{
        backgroundColor: "#FFD233", // close to #FFC300 but stands out
        transition: "background-color 0.3s ease",
      }}
    />
  );
}
