"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Persona {
  key: string;
  tab: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  illustration: (props: { className?: string }) => JSX.Element;
}

function PatientIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className}>
      <motion.circle
        cx="120" cy="120" r="96"
        stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
      />
      <motion.circle
        cx="120" cy="88" r="34" fill="none" stroke="currentColor" strokeWidth="4"
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M62 196c6-38 32-58 58-58s52 20 58 58"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
      />
      <motion.path
        d="M120 150v34m-17-17h34"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
      />
    </svg>
  );
}

function CaregiverIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className}>
      <motion.circle
        cx="120" cy="120" r="96"
        stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
      />
      <motion.circle
        cx="90" cy="82" r="24" fill="none" stroke="currentColor" strokeWidth="4"
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
      />
      <motion.circle
        cx="152" cy="96" r="18" fill="none" stroke="currentColor" strokeWidth="4"
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.path
        d="M50 190c5-34 24-50 45-50 12 0 22 5 29 14"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.path
        d="M128 160c6-8 15-12 24-12 20 0 36 15 40 42"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
      />
    </svg>
  );
}

function PharmacistIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className}>
      <motion.circle
        cx="120" cy="120" r="96"
        stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
      />
      <motion.rect
        x="86" y="60" width="16" height="70" rx="6"
        stroke="currentColor" strokeWidth="4" fill="none"
        initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: "86px 130px" }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M74 130h40v34a20 20 0 01-40 0v-34z"
        stroke="currentColor" strokeWidth="4" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
      />
      <motion.path
        d="M94 158h0"
        stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      />
      <motion.path
        d="M140 90h40M160 70v40"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
      />
    </svg>
  );
}

const personas: Persona[] = [
  {
    key: "patients",
    tab: "Patients",
    eyebrow: "For patients",
    title: "Care that fits around your life",
    description:
      "Order prescriptions in minutes, track every delivery, and get reminders so you never miss a dose — all from your phone.",
    points: [
      "Same-day delivery across Accra",
      "Automatic refill reminders",
      "Licensed pharmacists on call",
    ],
    illustration: PatientIllustration,
  },
  {
    key: "caregivers",
    tab: "Caregivers",
    eyebrow: "For caregivers",
    title: "Manage care for the people you love",
    description:
      "Coordinate medications for family members, keep a shared history, and get alerted the moment something needs attention.",
    points: [
      "Manage multiple profiles in one account",
      "Shared order and refill history",
      "Priority support for urgent needs",
    ],
    illustration: CaregiverIllustration,
  },
  {
    key: "pharmacists",
    tab: "Pharmacists",
    eyebrow: "For our pharmacists",
    title: "Tools built for real pharmacy workflows",
    description:
      "Every order is reviewed by a licensed pharmacist before it ships, backed by tools that make verification fast and accurate.",
    points: [
      "Full prescription verification workflow",
      "Direct line to patients for clarifications",
      "Real-time inventory across every order",
    ],
    illustration: PharmacistIllustration,
  },
];

export default function PersonaTabs() {
  const [active, setActive] = useState(personas[0].key);
  const current = personas.find((p) => p.key === active) ?? personas[0];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm w-fit mx-auto">
        {personas.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === p.key ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {active === p.key && (
              <motion.span
                layoutId="persona-pill"
                className="absolute inset-0 rounded-full bg-primary-600"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative">{p.tab}</span>
          </button>
        ))}
      </div>

      <div className="mt-12 grid items-center gap-10 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card sm:p-12 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key + "-art"}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="order-2 flex justify-center text-primary-600 lg:order-1"
          >
            <current.illustration className="h-56 w-56 sm:h-64 sm:w-64" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key + "-copy"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              {current.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{current.description}</p>
            <ul className="mt-6 space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
