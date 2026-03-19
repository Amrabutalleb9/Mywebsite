"use client";

import React, { useRef, useId, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";

const GRID_SIZE = 48;
const GRID_SPEED = 0.5;

const GridPattern = ({
  offsetX,
  offsetY,
  patternId,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  patternId: string;
}) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id={patternId}
        width={GRID_SIZE}
        height={GRID_SIZE}
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/20"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${patternId})`} />
  </svg>
);

interface InfiniteGridProps {
  children: React.ReactNode;
  className?: string;
}

export function InfiniteGrid({ children, className = "" }: InfiniteGridProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame(() => {
    if (!isVisible) return;
    gridOffsetX.set((gridOffsetX.get() + GRID_SPEED) % GRID_SIZE);
    gridOffsetY.set((gridOffsetY.get() + GRID_SPEED) % GRID_SIZE);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const bgPatternId = `grid-bg-${id}`;
  const fgPatternId = `grid-fg-${id}`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0 opacity-[0.14]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={bgPatternId} />
      </div>

      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={fgPatternId} />
      </motion.div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
