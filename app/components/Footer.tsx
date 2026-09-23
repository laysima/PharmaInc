"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ChatbotLauncher from "./ChatbotLauncher";

const linkColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/support" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/support" },
      { label: "Terms of Service", href: "/support" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "#", icon: FaTwitter },
      { label: "Facebook", href: "#", icon: FaFacebookF },
      { label: "Instagram", href: "#", icon: FaInstagram },
      { label: "YouTube", href: "#", icon: FaYoutube },
    ],
  },
];

export const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScrollButton(window.scrollY > 500);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#061f35] text-white">
      {/* Curved transition from the testimonials surface into the footer, fully
          contained so it can never overlap the heading below it. */}
      <div aria-hidden="true" className="relative h-16 overflow-hidden bg-primary-950 sm:h-20">
        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path d="M0 20 C 25 0, 75 0, 100 20 L 100 20 L 0 20 Z" fill="#061f35" />
        </svg>
        <span className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-primary-300 shadow-[0_0_12px_rgba(120,200,255,0.9)] sm:top-4" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pb-20 sm:pt-12">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Your health, delivered.
          <br />
          <span className="text-primary-300">One refill at a time.</span>
        </h2>

        <div className="mt-14 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.3fr,2fr]">
          <div>
            <p className="text-lg font-semibold">Stay updated on your care.</p>
            <p className="mt-2 max-w-sm text-sm text-primary-100/80">
              Get medication reminders, offers, and pharmacy news — no spam,
              unsubscribe any time.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-300 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-primary-500 transition-colors hover:bg-primary-400"
              >
                <FiArrowRight />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-xs text-primary-300">Thanks — you're on the list.</p>
            )}
            <p className="mt-3 text-xs text-primary-100/50">
              *By subscribing you agree to receive emails and can unsubscribe any time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-300">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NextLink
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm text-primary-100/80 transition-colors hover:text-white"
                      >
                        {"icon" in link && link.icon ? <link.icon className="shrink-0" /> : null}
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-5xl font-semibold tracking-tight sm:text-7xl">PharmaInc</p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-primary-100/60 sm:flex-row sm:items-center sm:gap-3">
            <span>&copy; {new Date().getFullYear()} PharmaInc</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>P.O. Box CT6924, Cantonments, Accra</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>+233 50 924 6726</span>
          </div>
        </div>
      </div>

      <ChatbotLauncher floating />

      {showScrollButton && (
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="fixed bottom-5 right-20 z-50 grid h-12 w-12 place-items-center rounded-full bg-black text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
