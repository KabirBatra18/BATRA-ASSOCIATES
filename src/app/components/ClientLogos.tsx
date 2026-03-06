"use client";

import { motion, useReducedMotion } from "framer-motion";

const clients = [
  { name: "State Bank of India", short: "SBI" },
  { name: "Punjab National Bank", short: "PNB" },
  { name: "UCO Bank", short: "UCO Bank" },
  { name: "Union Bank of India", short: "Union Bank" },
  { name: "PFCCL", short: "PFCCL" },
  { name: "IBBI", short: "IBBI" },
  { name: "MCD Delhi", short: "MCD Delhi" },
  { name: "Income Tax Department", short: "Income Tax Dept" },
];

export default function ClientLogos() {
  const prefersReducedMotion = useReducedMotion();

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-60px" } };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 18, stiffness: 100 } },
  };

  return (
    <section className="py-20 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-2"
          variants={fadeUp}
          {...inView}
        >
          Empanelled With Leading Institutions
        </motion.h2>
        <motion.p
          className="text-muted text-sm text-center mb-10 max-w-xl mx-auto"
          variants={fadeUp}
          {...inView}
        >
          Trusted by India&apos;s top banks and government bodies for certified
          property valuations.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          variants={stagger}
          {...inView}
        >
          {clients.map((client) => (
            <motion.div
              key={client.short}
              className="flex items-center justify-center h-20 bg-white rounded-lg border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all"
              variants={scaleIn}
              whileHover={prefersReducedMotion ? {} : { y: -2, transition: { duration: 0.2 } }}
            >
              <span className="text-sm font-semibold text-dark/80 text-center px-3">
                {client.short}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-center text-xs text-muted mt-6"
          variants={fadeUp}
          {...inView}
        >
          Category-A empanelment with all major banks
        </motion.p>
      </div>
    </section>
  );
}
