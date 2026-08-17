"use client";
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";

import ScrollProgressBar from "./components/ScrollProgressBar";
import Reveal from "./components/ui/Reveal";
import AuroraBackground from "./components/ui/AuroraBackground";
import GradientButton from "./components/ui/GradientButton";
import BentoCard from "./components/ui/BentoCard";
import Counter from "./components/ui/Counter";
import Marquee from "./components/ui/Marquee";

import {
  FaCheckCircle,
  FaDumbbell,
  FaChevronDown,
} from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbDentalBroken, TbActivityHeartbeat } from "react-icons/tb";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { IoTrophyOutline } from "react-icons/io5";

import "./globals.css";

const DynamicChatbot = dynamic(() => import("./components/Chatbot"), { ssr: false });

const stats = [
  { value: 123, suffix: "+", label: "Professional Staff" },
  { value: 587, suffix: "+", label: "Kind Of Medicine" },
  { value: 40, suffix: "+", label: "Doctor Specialists" },
  { value: 12, suffix: "+", label: "Active Members" },
];

const trustStats = [
  { icon: PiHandshakeLight, value: 200, suffix: "k+", label: "Happy clients" },
  { icon: IoMdHeartEmpty, value: 50, suffix: "k+", label: "Orders delivered" },
  { icon: GoPersonAdd, value: 80, suffix: "+", label: "Areas served" },
  { icon: IoTrophyOutline, value: 5, suffix: "L", label: "Medicines" },
];

const services = [
  { icon: TbDentalBroken, title: "Dental Wellness" },
  { icon: FaHandsHoldingChild, title: "Accessibility" },
  { icon: MdOutlineHealthAndSafety, title: "Health Products" },
  { icon: FaDumbbell, title: "Wellness Products" },
];

const categories = [
  { image: "/funbact.rem.png", title: "Ointment" },
  { image: "/gummies.png", title: "Vitamins" },
  { image: "/panadol.png", title: "Pain Capsules" },
  { image: "/sleeve.png", title: "Sleeve" },
];

const testimonials = [
  {
    name: "Shakur",
    country: "Ghana",
    image: "/w1.jpg",
    review:
      "PharmaInc is a game-changer. It's easy to use, fast, and reliable — I can order my medications in a few clicks.",
  },
  {
    name: "Calvin",
    country: "United Kingdom",
    image: "/m2.jpg",
    review:
      "The interface is intuitive and delivery is always on time. Managing my prescriptions has never been easier.",
  },
  {
    name: "Jessie",
    country: "United States",
    image: "/m1.jpg",
    review:
      "As someone with chronic health issues, recurring orders and reminders mean I never run out of essentials.",
  },
];

const faqItems = [
  {
    id: 1,
    question: "What kind of services do you offer?",
    answer:
      "Real-time order and delivery tracking for prescriptions and medications, keeping you informed every step of the way.",
  },
  {
    id: 2,
    question: "Is your clinic open 24hrs?",
    answer: "Yes, our clinic operates 24/7 so you can get care whenever you need it.",
  },
  {
    id: 3,
    question: "How can I book an appointment?",
    answer: "Book directly through the website, or call our customer service hotline.",
  },
  {
    id: 4,
    question: "Do you offer online consultations?",
    answer: "Yes — online consultations with our medical specialists are available on demand.",
  },
];

export default function Home() {
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);
  const user = getCookie("user");
  const nUser = user ? JSON.parse(user) : null;

  const toggleItem = (id: number) => setOpenedItemId(openedItemId === id ? null : id);

  return (
    <>
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <AuroraBackground />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
                Your health, delivered
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                {nUser ? (
                  <>Welcome back, {nUser.name}.</>
                ) : (
                  <>
                    Care that meets you <span className="text-primary-600">where you are.</span>
                  </>
                )}
              </h1>
              <p className="mt-6 max-w-md text-lg text-slate-600">
                Your compassionate ally in navigating the path to optimal health and
                wellness — medication, guidance, and delivery, all in one place.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NextLink href="/shop">
                  <GradientButton>Shop Now</GradientButton>
                </NextLink>
                <DynamicChatbot />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/sick1.jpg", y: 0 },
                  { src: "/sick5.jpg", y: 24 },
                  { src: "/sick3.jpg", y: 24 },
                  { src: "/sick4.jpg", y: 0 },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-2xl shadow-card"
                    style={{ marginTop: img.y }}
                  >
                    <Image src={img.src} alt="" fill sizes="200px" className="object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Banner + stats */}
      <section className="relative">
        <div className="relative h-[360px] w-full overflow-hidden md:h-[420px]">
          <Image src="/hbeds.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/50 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-white">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-200">
                The best pharmacy store
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                We have the most complete medicine and vitamins
              </h2>
              <p className="mt-4 max-w-lg text-primary-100">
                PharmaInc is a life-saver — manage your medications from the comfort
                of your home.
              </p>
              <NextLink href="/shop">
                <GradientButton className="mt-6">Shop Now</GradientButton>
              </NextLink>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto -mt-10 hidden max-w-5xl px-6 md:block">
          <Reveal>
            <div className="grid grid-cols-4 divide-x divide-slate-100 rounded-2xl bg-white p-8 shadow-card">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-semibold text-primary-600">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offers bento grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Offers
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Deals worth stocking up on
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[170px]">
          {[
            { img: "/koflet_coughMixture.png", eyebrow: "Special offers on", title: "Cough Syrup", span: "md:row-span-2" },
            { img: "/vitamins.png", eyebrow: "Multivitamin tablets", title: "Get 20% off", span: "md:row-span-2" },
            { img: "/paracetamol2.jpg", eyebrow: "30% discount on", title: "Paracetamol", span: "md:col-span-2" },
            { img: "/sth.jpg", eyebrow: "30% discount on", title: "Stethoscope kits", span: "" },
            { img: "/capsules.jpg", eyebrow: "Bundle deal on", title: "Cough Syrup", span: "" },
          ].map((offer, i) => (
            <Reveal key={offer.title + i} delay={i * 0.06} className={offer.span}>
              <BentoCard className="relative h-40 w-full md:h-full">
                <Image src={offer.img} alt={offer.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary-200">
                    {offer.eyebrow}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{offer.title}</p>
                  <NextLink
                    href="/shop"
                    className="mt-2 inline-block text-xs font-semibold text-white underline decoration-primary-300 underline-offset-4"
                  >
                    Shop now
                  </NextLink>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Professionals split */}
      <section className="bg-primary-50/40 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="inline-block rounded-xl bg-primary-600 px-6 py-4 text-white shadow-glow">
              <p className="font-semibold">
                Excellent medical professionals with significant experience
              </p>
            </div>
            <p className="mt-6 text-lg text-slate-600">
              Our team blends clinical expertise with genuine care, so every
              consultation and every order is handled with the attention it deserves.
            </p>
            <NextLink href="/shop">
              <GradientButton variant="outline" className="mt-2">
                Shop Now
              </GradientButton>
            </NextLink>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {trustStats.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.icon className="text-3xl text-primary-600" />
                  <div>
                    <p className="text-2xl font-semibold text-primary-900">
                      <Counter value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="text-sm text-slate-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-card">
                <Image src="/m3.jpg" alt="Medical professionals" fill className="object-cover" />
              </div>
              <div className="absolute -right-6 -top-8 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white text-center shadow-card">
                <p className="text-2xl font-bold text-primary-600">Trusted+</p>
                <p className="text-sm text-slate-600">Company</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            What we offer
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Services built around you
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <BentoCard className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-2xl text-white">
                  <service.icon />
                </div>
                <p className="text-lg font-semibold text-slate-800">{service.title}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Browse
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Shop our categories
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <NextLink
                  href="/shop"
                  className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-shadow hover:shadow-glow"
                >
                  <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-semibold text-slate-800">{cat.title}</p>
                </NextLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative hidden h-[420px] w-full overflow-hidden rounded-3xl shadow-card md:block">
              <Image src="/questions.jpg" alt="" fill className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              FAQ
            </p>
            <h2 className="mt-2 mb-8 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-2xl bg-slate-50">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-medium text-slate-800">{item.question}</span>
                    <motion.span
                      animate={{ rotate: openedItemId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-primary-600"
                    >
                      <FaChevronDown />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openedItemId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm text-slate-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-300">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Member feedback and reviews
            </h2>
          </Reveal>
        </div>

        <div className="mt-12">
          <Marquee>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex w-80 shrink-0 flex-col items-center rounded-2xl bg-white/5 p-6 text-center backdrop-blur"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary-400">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <p className="mt-4 font-semibold text-white">{t.name}</p>
                <p className="text-sm text-primary-300">{t.country}</p>
                <p className="mt-3 text-sm text-primary-100">&quot;{t.review}&quot;</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
}
