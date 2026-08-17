"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export default function BentoCard({ children, className = "" }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-primary-300 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
