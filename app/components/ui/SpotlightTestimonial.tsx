"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  name: string;
  country: string;
  image: string;
  review: string;
}

interface SpotlightTestimonialProps {
  items: Testimonial[];
  durationMs?: number;
}

const RING_SIZE = 56;
const RING_RADIUS = 25;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function SpotlightTestimonial({
  items,
  durationMs = 6000,
}: SpotlightTestimonialProps) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const goTo = (index: number) => {
    setActive(index);
    setProgress(0);
    startRef.current = performance.now();
  };

  useEffect(() => {
    startRef.current = performance.now() - progress * durationMs;

    const tick = (now: number) => {
      if (!paused) {
        const elapsed = now - startRef.current;
        const pct = Math.min(elapsed / durationMs, 1);
        setProgress(pct);
        if (pct >= 1) {
          setActive((prev) => (prev + 1) % items.length);
          setProgress(0);
          startRef.current = now;
        }
      } else {
        startRef.current = now - progress * durationMs;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, items.length, durationMs]);

  const current = items[active];

  return (
    <div
      className="mx-auto max-w-4xl px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <p className="mx-auto max-w-2xl text-xl leading-9 text-white sm:text-2xl">
              &ldquo;{current.review}&rdquo;
            </p>
            <p className="mt-6 font-semibold text-white">{current.name}</p>
            <p className="text-sm text-primary-300">{current.country}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.name}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${item.name}`}
              className="relative grid place-items-center"
              style={{ width: RING_SIZE, height: RING_SIZE }}
            >
              <svg
                width={RING_SIZE}
                height={RING_SIZE}
                className="absolute -rotate-90"
                viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
              >
                <circle
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth={2}
                />
                {isActive && (
                  <circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#33abff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
                  />
                )}
              </svg>
              <div
                className={`relative h-10 w-10 overflow-hidden rounded-full border transition-opacity ${
                  isActive ? "border-transparent opacity-100" : "border-white/20 opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={item.image} alt={item.name} fill sizes="40px" className="object-cover" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
