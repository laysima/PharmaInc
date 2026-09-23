"use client";
import { motion } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "span" | "h1" | "h2" | "h3";
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function StaggeredText({
  text,
  className,
  wordClassName,
  delay = 0,
  as: Tag = "span",
}: StaggeredTextProps) {
  const words = text.split(" ");
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
    >
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
            <motion.span
              className={`inline-block ${wordClassName ?? ""}`}
              variants={word}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
