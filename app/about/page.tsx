"use client";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Reveal from "../components/ui/Reveal";
import GradientButton from "../components/ui/GradientButton";
import StaggeredText from "../components/ui/StaggeredText";
import BlurHighlight from "../components/ui/BlurHighlight";
import PersonaTabs from "../components/ui/PersonaTabs";

export default function About() {
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
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            About PharmaInc
          </p>
          <StaggeredText
            as="h1"
            text="Excellent medical professionals with significant experience"
            className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl"
          />
          <BlurHighlight
            text="PharmaInc connects you with licensed pharmacists and same-day delivery, so getting the care you need never means waiting in line. Every order is reviewed by a real pharmacist before it ships."
            highlight={["licensed pharmacists", "real pharmacist"]}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          />
          <div className="mt-8">
            <NextLink href="/shop">
              <GradientButton>Shop now</GradientButton>
            </NextLink>
          </div>
        </div>
      </section>

      {/* Persona tabs */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Built for everyone in the loop
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Whoever you're caring for, we've got you covered
          </h2>
        </Reveal>
        <div className="mt-12">
          <PersonaTabs />
        </div>
      </section>

      {/* Reach out */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Reach out to our staff
            </h2>
            <p className="mt-4 max-w-md text-slate-600">
              Questions about an order, a medication, or anything else? Send us
              a message and a member of our team will get back to you.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-primary-700">
                Thanks — we've received your message and will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <textarea
                  required
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
                />
                <GradientButton type="submit">Send message</GradientButton>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] shadow-card">
              <Image src="/reach.jpg" alt="Our pharmacy staff" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
