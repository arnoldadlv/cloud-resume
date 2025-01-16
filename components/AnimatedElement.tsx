"use client";
import { easeOut, motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimatedElementProps = {
  className?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
} & (
  | { text: string; children?: never }
  | { children: ReactNode; text?: never }
);

export default function AnimatedElement({
  children,
  text,
  className = "",
  delay = 0,
  duration = 0.25,
  style = {},
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only animate once
    amount: 0.3, // Trigger when 30% of element is visible
  });

  const variants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
    >
      {text ?? children}
    </motion.div>
  );
}
