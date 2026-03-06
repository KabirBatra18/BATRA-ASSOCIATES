"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    title: "Certified",
    description:
      "We are a team of Government and IBBI Approved Valuers specialising in Property Valuations and Structural Consultancy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Experienced",
    description:
      "Led by Mr. Nanu Batra, M.Tech from IIT Delhi, with 20+ years of industry experience, our team provides precise valuations and expert structural consultancy services, ensuring exceptional standards and accuracy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Trusted",
    description:
      "Over 1000 clients nationwide, including State Bank of India, Punjab National Bank, UCO Bank, rely on us for precise, clear valuations and advanced structural consultancy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function WhoAreWe() {
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
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-10"
          variants={fadeUp}
          {...inView}
        >
          Who Are We?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          {...inView}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-lg p-7 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow min-h-[200px] md:min-h-[240px] flex flex-col"
              variants={cardVariant}
              whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {card.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed text-justify">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
