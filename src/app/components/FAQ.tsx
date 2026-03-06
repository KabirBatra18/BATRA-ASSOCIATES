"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to get a valuation report?",
    a: "Standard reports are delivered within 3\u20135 working days after the site inspection. Expedited service (1\u20132 days) is available for urgent requirements such as visa applications or court deadlines.",
  },
  {
    q: "Is your valuation report accepted by banks and courts?",
    a: "Yes. Er. Nanu Batra is a Government Approved Valuer registered with the Income Tax Department, IBBI, and MCD Delhi. We are empanelled as Category-A valuers with SBI, PNB, UCO Bank, and Union Bank of India. Our reports are accepted without secondary verification.",
  },
  {
    q: "What documents do I need for a property valuation?",
    a: "Typically, you will need the sale deed/registry, property tax receipts, building plan (if available), and any prior valuation reports. The exact requirements vary by purpose \u2014 we will guide you after understanding your specific needs.",
  },
  {
    q: "Do you provide valuation services outside Delhi?",
    a: "Our primary service area is Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad). For properties outside NCR, please contact us to discuss availability.",
  },
  {
    q: "Can your valuation report be used in court?",
    a: "Yes. Our government-approved valuation reports are legally admissible in courts. We also provide expert testimony if required during proceedings.",
  },
  {
    q: "What types of properties can you value?",
    a: "We value all types of properties including residential (flats, houses, plots), commercial (offices, shops, showrooms), industrial (factories, warehouses), and land (agricultural, institutional). We also handle fixed asset valuations for corporate balance sheets.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const itemVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-24 bg-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-3"
          variants={fadeUp}
          {...inView}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-muted text-sm text-center mb-10"
          variants={fadeUp}
          {...inView}
        >
          Everything you need to know about our valuation services.
        </motion.p>

        <motion.div className="space-y-3" variants={stagger} {...inView}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] overflow-hidden"
              variants={itemVariant}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-dark">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>


        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
