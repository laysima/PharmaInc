"use client";
import { useState } from "react";
import { FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaClock, FaHeadset } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import Reveal from "../components/ui/Reveal";
import BentoCard from "../components/ui/BentoCard";
import GradientButton from "../components/ui/GradientButton";
import StaggeredText from "../components/ui/StaggeredText";
import BlurHighlight from "../components/ui/BlurHighlight";

const contactOptions = [
  {
    icon: FaLocationDot,
    title: "Visit us",
    lines: ["P.O. Box CT6924", "Cantonments, Accra"],
  },
  {
    icon: FaPhone,
    title: "Call us",
    lines: ["+233 50 924 6726"],
    href: "tel:+233509246726",
  },
  {
    icon: MdMail,
    title: "Email us",
    lines: ["opokoi89@gmail.com"],
    href: "mailto:opokoi89@gmail.com",
  },
  {
    icon: FaClock,
    title: "Working hours",
    lines: ["Mon – Sat: 8:00 – 22:00", "Sunday: Holiday"],
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["Chat with our team"],
    href: "https://wa.me/233509246726",
  },
  {
    icon: FaHeadset,
    title: "24/7 support",
    lines: ["Our team is always on call"],
    href: "/support",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Contact us
          </p>
          <StaggeredText
            as="h1"
            text="We're here whenever you need us"
            className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            wordClassName=""
          />
          <BlurHighlight
            text="Whether it's a question about an order or you just want to talk to a pharmacist, reach us any way that's easiest for you."
            highlight={["a pharmacist"]}
            className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600"
          />
        </div>
      </section>

      {/* Contact options grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((option, i) => {
            const Wrapper = option.href ? "a" : "div";
            return (
              <Reveal key={option.title} delay={i * 0.06}>
                <BentoCard className="h-full">
                  <Wrapper
                    {...(option.href ? { href: option.href } : {})}
                    className="flex h-full flex-col p-7"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl text-white">
                      <option.icon />
                    </div>
                    <p className="text-lg font-semibold text-slate-900">{option.title}</p>
                    <div className="mt-2 space-y-0.5">
                      {option.lines.map((line) => (
                        <p key={line} className="text-sm text-slate-500">
                          {line}
                        </p>
                      ))}
                    </div>
                  </Wrapper>
                </BentoCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Send us a message
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="mt-10 rounded-2xl bg-primary-50 p-6 text-center text-primary-700">
                Thanks — we've received your message and will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <input
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <textarea
                  required
                  placeholder="How can we help?"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <GradientButton type="submit" className="w-full justify-center">
                  Send message
                </GradientButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
