"use client";
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { getCookie } from "cookies-next";

import Reveal from "./components/ui/Reveal";
import AuroraBackground from "./components/ui/AuroraBackground";
import GradientButton from "./components/ui/GradientButton";
import BentoCard from "./components/ui/BentoCard";
import Counter from "./components/ui/Counter";
import SpotlightTestimonial from "./components/ui/SpotlightTestimonial";
import ChatbotLauncher from "./components/ChatbotLauncher";
import FeatureShowcase from "./components/FeatureShowcase";

import {
  FaDumbbell,
  FaChevronDown,
} from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbDentalBroken } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

import "./globals.css";

const stats = [
  { value: 123, suffix: "+", label: "Professional Staff" },
  { value: 587, suffix: "+", label: "Kind Of Medicine" },
  { value: 40, suffix: "+", label: "Doctor Specialists" },
  { value: 12, suffix: "+", label: "Active Members" },
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
    image: "/optimized/w1.jpg",
    review:
      "PharmaInc is a game-changer. It's easy to use, fast, and reliable — I can order my medications in a few clicks.",
  },
  {
    name: "Calvin",
    country: "United Kingdom",
    image: "/optimized/m2.jpg",
    review:
      "The interface is intuitive and delivery is always on time. Managing my prescriptions has never been easier.",
  },
  {
    name: "Jessie",
    country: "United States",
    image: "/optimized/m1.jpg",
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
                <ChatbotLauncher />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/optimized/sick1.jpg", y: 0 },
                  { src: "/optimized/sick5.jpg", y: 24 },
                  { src: "/optimized/sick3.jpg", y: 24 },
                  { src: "/optimized/sick4.jpg", y: 0 },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-2xl shadow-card"
                    style={{ marginTop: img.y }}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      priority={i < 2}
                      sizes="(min-width: 1024px) 280px, 42vw"
                      className="object-cover"
                    />
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
          <Image
            src="/optimized/hbeds.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
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

        <div className="relative z-20 mx-auto -mt-12 hidden max-w-5xl px-6 md:block">
          <Reveal>
            <div className="grid grid-cols-4 divide-x divide-slate-100 rounded-[2rem] bg-white px-8 py-7 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]">
              {stats.map((s) => (
                <div key={s.label} className="px-3 text-center">
                  <p className="text-3xl font-semibold leading-none text-primary-600">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm text-slate-500">{s.label}</p>
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

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {[
            { img: "/koflet_coughMixture.png", badge: "SPECIAL OFFER", title: "Cough Syrup", span: "md:row-span-2" },
            { img: "/vitamins.png", badge: "20% OFF", title: "Multivitamin tablets", span: "md:row-span-2" },
            { img: "/optimized/paracetamol2.jpg", badge: "30% OFF", title: "Paracetamol", span: "md:col-span-2" },
            { img: "/optimized/sth.jpg", badge: "30% OFF", title: "Stethoscope kits", span: "" },
            { img: "/optimized/capsules.jpg", badge: "BUNDLE DEAL", title: "Cough Syrup", span: "" },
          ].map((offer, i) => (
            <Reveal key={offer.title + i} delay={i * 0.06} className={offer.span}>
              <BentoCard className="relative h-44 w-full md:h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={offer.img}
                    alt={offer.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                  {offer.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <p className="text-lg font-semibold leading-tight">{offer.title}</p>
                  <NextLink
                    href="/shop"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-primary-700 transition-transform duration-200 hover:scale-110"
                    aria-label={`Shop ${offer.title}`}
                  >
                    <FiArrowUpRight />
                  </NextLink>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Alternating product features */}
      <FeatureShowcase />

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
                  className="group flex flex-col items-center gap-5 rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-primary-100 transition-transform duration-300 group-hover:scale-105">
                    <div className="relative h-20 w-20">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="80px"
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                FAQ
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 max-w-sm text-slate-600">
                Can't find what you're looking for? Reach out and a member of
                our team will get back to you.
              </p>
              <NextLink
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                Contact us <FiArrowUpRight />
              </NextLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
          <SpotlightTestimonial items={testimonials} />
        </div>
      </section>
    </>
  );
}
