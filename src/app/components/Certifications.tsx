"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  const inView = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-60px" } };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 120 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40, rotate: -1 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40, rotate: 1 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring" as const, damping: 22, stiffness: 100 } },
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-dark mb-2"
          variants={fadeUp}
          {...inView}
        >
          Our Certifications
        </motion.h2>
        <motion.p
          className="text-muted text-sm text-center mb-10 max-w-xl mx-auto"
          variants={fadeUp}
          {...inView}
        >
          Government-approved credentials that ensure our valuation reports are
          accepted by banks, courts, and institutions nationwide.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div variants={slideLeft} {...inView}>
            <Image
              src="/images/cert-1.png"
              alt="IBBI Registration Certificate - Nanu Batra, Registered Valuer for Land and Building"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={slideRight} {...inView}>
            <Image
              src="/images/cert-2.png"
              alt="Income Tax Department Approved Valuer Certificate - Category I Registration"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
