"use client";
import { motion } from "framer-motion";

interface BlurHighlightProps {
  text: string;
  highlight?: string[];
  className?: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function BlurHighlight({ text, highlight = [], className }: BlurHighlightProps) {
  const pattern = highlight.length
    ? new RegExp(`(${highlight.map(escapeRegExp).join("|")})`, "gi")
    : null;
  const parts = pattern ? text.split(pattern) : [text];

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {parts.map((part, i) =>
        highlight.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="font-semibold text-primary-600">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </motion.p>
  );
}
