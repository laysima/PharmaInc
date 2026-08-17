"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
}

export default function GradientButton({
  children,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
}: GradientButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-shadow duration-300";

  if (variant === "outline") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} border border-primary-200 bg-white text-primary-700 hover:border-primary-400 hover:shadow-glow ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} bg-gradient-to-r from-primary-600 to-primary-400 text-white shadow-glow hover:shadow-xl ${className}`}
    >
      {children}
    </motion.button>
  );
}
