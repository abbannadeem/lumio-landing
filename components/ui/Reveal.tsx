"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  /** Tailwind classes forwarded to the wrapper. */
  className?: string;
  /** Render as a different element (defaults to div). */
  as?: "div" | "li" | "section" | "article";
};

/**
 * Fades + lifts children into view once on scroll. Honors prefers-reduced-motion
 * by rendering static content with no transform (avoids motion sickness + CLS).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
